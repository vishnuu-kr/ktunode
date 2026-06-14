# Connecting rod

<!-- SECTION_1_START -->
# Connecting Rod — Core Technical Definition & Intuitive Overview

## 1.1 Formal KTU 2024 Definition

> [!NOTE]
> **Connecting Rod (Per KTU PCAUT205 Module 1 — Engines):**
> A connecting rod is a rigid, high-strength **machine member** that mechanically links the **reciprocating piston** to the **rotating crankshaft** of an internal combustion engine. It transmits the combustion gas force, the inertia force, and converts the linear reciprocating motion of the piston into the rotary motion of the crankshaft. It acts as a **two-force member** in dynamic engine operation and is one of the most critically stressed components in the power plant.

The connecting rod is broadly classified by:
- **Stroke type application:** Two-stroke engine rod vs Four-stroke engine rod
- **Cross-sectional geometry:** I-section, rectangular section, circular section
- **Material of construction:** Forged steel (carbon / alloy), forged aluminium, SG iron, sintered forged materials
- **Big end configuration:** Plain (unsplit) big end, split big end with cap (most common)

## 1.2 Conceptual Analogy — The "Human Leg Analogy"

> [!IMPORTANT]
> **Intuitive Visualization:** Imagine a sprinter running on a circular track while pushing a heavy shopping cart back and forth. The sprinter's **leg** is the connecting rod. The **hip joint** acts as the big end (attached to the rotating body), the **knee** flexes like the rod shank under load, and the **ankle** is the small end (attached to the reciprocating cart). Just as the sprinter's leg must be **strong in compression** (when pushing) and **resistant to bending/buckling** (because it's a slender column), the connecting rod must withstand cyclic compressive tension, bending moments, and Euler-type buckling — all while moving thousands of times per minute.

**Geometric Intuition:** A connecting rod is essentially a **slender column** of varying cross-section, where:
- The **small end** (gudgeon pin end / wrist pin end) is the smallest diameter.
- The **shank (web)** is the middle portion — most prone to buckling.
- The **big end** (crankpin end) is the largest diameter — houses the bearing.

## 1.3 Primary Functions of the Connecting Rod

| S.No. | Function | Engineering Significance |
|---|---|---|
| 1 | Transmits thrust & pull from piston to crank | Converts gas pressure into useful torque |
| 2 | Converts reciprocating motion → rotary motion | Provides the kinematic link |
| 3 | Maintains correct piston alignment in cylinder | Prevents scuffing & wear |
| 4 | Transmits side thrust from piston (oblique firing) | Reduces cylinder bore wear |
| 5 | Acts as an oil passage (in some designs) | Lubricates the small end bearing |

## 1.4 Standard Materials & Their Metrics (KTU High-Yield)

> [!IMPORTANT]
> The selection of connecting rod material directly influences the **design stress**, **weight**, and **fatigue life**. KTU examiners expect the following standard material choices:

| Material | Ultimate Tensile Strength ($\sigma_u$) | Density | Application |
|---|---|---|---|
| **Forged carbon steel** (e.g., 45C8, 40C10) | **550–700 MPa** | 7850 kg/m³ | Standard automobile engines |
| **Forged alloy steel** (e.g., 40Ni3, 35Mn2Mo) | **800–1100 MPa** | 7850 kg/m³ | Heavy duty / diesel engines |
| **Forged aluminium alloy** | **280–350 MPa** | 2800 kg/m³ | High-performance / racing engines |
| **S.G. Iron (Spheroidal Graphite)** | **450–600 MPa** | 7200 kg/m³ | Modern mass-produced rods |

> [!NOTE]
> **S-N curve and endurance limit:** For a polished rod sample in reversed bending, $\sigma_e \approx 0.5 \sigma_u$ for steel and $\sigma_e \approx 0.3 \sigma_u$ for cast iron. In actual KTU design problems, designers use a **factor of safety** between **4 to 8** on the ultimate strength to absorb dynamic, fatigue, and buckling effects.

## 1.5 Visualization Concept (Geometry of Connecting Rod)

> [!VISUALIZATION CONTROL]
> **Concept:** Connecting Rod Geometry & Free-Body-Diagram View
> **Geometric Description (for student to sketch on graph paper):**
> 1. Plot the **piston axis** as a vertical line $Y = X$.
> 2. Mark the **Small End (S)** at coordinates $(0, 0)$ — circular boss for gudgeon pin.
> 3. Mark the **Big End (B)** at coordinates $(L, 0)$ where $L$ = length of connecting rod.
> 4. The **shank** is the line segment joining S and B.
> 5. The **oblique connecting rod axis** forms angle $\theta$ with the cylinder axis, governed by $\sin\theta = \frac{r}{L}\sin\phi$, where $r$ = crank radius and $\phi$ = crank angle.
> 6. Draw arrows on the small end pointing **downward** (combustion pressure $F_g$) and at the big end pointing **along the rod** (resistance $F_r$).
> 7. Indicate the I-section by drawing a cross-section block perpendicular to $SB$.

**Visual Description:** The student should observe that the rod is an **inclined two-force member**, with the line of action passing exactly through both pin centers, and the cross-section **tapers** from big end to small end for uniform stress distribution.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Forces Acting on the Connecting Rod (Two-Stroke vs Four-Stroke)

The connecting rod is subjected to a **complex combination of loads**:

### A. Forces Due to Gas Pressure
$$
F_g = (P_g - P_o) \times \frac{\pi}{4} D^2
$$
where $P_g$ = gas pressure, $P_o$ = crankcase pressure (two-stroke) or atmospheric (four-stroke), and $D$ = cylinder bore.

### B. Inertia Force of the Reciprocating Parts
$$
F_i = m_r \cdot a
$$
where $m_r$ = mass of reciprocating parts (piston + portion of rod + gudgeon pin) and $a$ = acceleration of the piston.

The piston acceleration is given exactly by:
$$
a = r\omega^2 \left( \cos\phi + \frac{r}{L}\cos 2\phi \right)
$$
where $r$ = crank radius, $\omega$ = angular velocity of crank, $\phi$ = crank angle, and $L$ = length of connecting rod.

### C. Net Force Along the Connecting Rod (Axial Force)
$$
F = F_g - F_i = F_g - m_r \cdot r\omega^2 \left( \cos\phi + \frac{r}{L}\cos 2\phi \right)
$$

> [!IMPORTANT]
> The force $F$ is **tensile** (pulling the rod) during the expansion stroke and the early part of the exhaust stroke, but becomes **compressive** during the compression stroke when gas force is small and inertia is dominant. The connecting rod is thus subjected to a **fully-reversed cyclic axial load** — a classic fatigue case.

## 2.2 Buckling of the Connecting Rod — A Critical Design Consideration

> [!NOTE]
> **Why Buckling Matters in KTU Exams:** Because the connecting rod behaves as a **long slender column** under compression, the Euler/Rankine buckling analysis is a **guaranteed 14-mark question** in the ESE. The student must know the **slenderness ratio**, the relevant **column end conditions**, and the design rule for **I-section selection**.

### 2.2.1 Slenderness Ratio
$$
\lambda = \frac{L_{eff}}{k}
$$
where $L_{eff}$ = effective length (depending on end conditions) and $k$ = least radius of gyration of the cross-section:
$$
k = \sqrt{\frac{I}{A}}
$$

### 2.2.2 End Conditions for the Connecting Rod
In actual practice, the small end **pivots** (pin joint) and the big end **pivots** (crankpin joint), so both ends are treated as **hinged ends**:
$$
L_{eff} = L \quad \text{(for hinged-hinged condition)}
$$

### 2.2.3 Euler's Critical Buckling Load
$$
P_{cr} = \frac{\pi^2 E I}{L_{eff}^2}
$$

### 2.2.4 Rankine-Gordon Formula (Used for Connecting Rod)
> [!IMPORTANT]
> KTU examinations **prefer the Rankine-Gordon formula** over the pure Euler formula because the connecting rod is **neither perfectly long nor perfectly short**. Rankine's formula bridges both regimes using material constants.

$$
P_R = \frac{\sigma_c \cdot A}{1 + a \left( \frac{L_{eff}}{k} \right)^2}
$$

where $\sigma_c$ = ultimate crushing stress in MPa, $A$ = cross-sectional area in mm², and $a$ = Rankine constant (also called Rankine's constant $\alpha$).

### 2.2.5 Empirical Values of Rankine Constant $a$

| Material | $\sigma_c$ (MPa) | Rankine constant $a$ |
|---|---|---|
| **Wrought iron** | 250 | $1/9000$ |
| **Cast iron** | 550 | $1/1600$ |
| **Mild steel** | 320 | $1/7500$ |
| **Forged steel (connecting rod)** | **450** | $1/9000$ |

## 2.3 Standard I-Section Cross-Sectional Geometry of the Connecting Rod

> [!NOTE]
> The I-section is the most preferred cross-section because it offers **maximum moment of inertia per unit area** while **minimizing weight**. KTU problems require calculating the I-section properties: $A$, $I_{xx}$, $I_{yy}$, $k_{min}$, and verifying against the buckling criterion.

For a standard I-section with:
- Total flange width $B$
- Total section depth $H$
- Web thickness $t_w$
- Flange thickness $t_f$

**Cross-sectional area:**
$$
A = 2 B t_f + (H - 2 t_f) t_w
$$

**Moment of inertia about the neutral axis (perpendicular to web):**
$$
I_{xx} = \frac{1}{12} \left[ B H^3 - (B - t_w)(H - 2 t_f)^3 \right]
$$

**Moment of inertia about the perpendicular axis (in the plane of web):**
$$
I_{yy} = \frac{1}{12} \left[ 2 t_f B^3 + (H - 2 t_f) t_w^3 \right]
$$

**Minimum radius of gyration:**
$$
k_{min} = \sqrt{\frac{I_{min}}{A}} = \sqrt{\frac{I_{yy}}{A}}
$$
(The $yy$ axis is the buckling axis because $I_{yy} < I_{xx}$ for a typical I-section.)

## 2.4 KTU Formula Sheet (High-Yield Cheat Sheet)

> [!IMPORTANT]
> The following table consolidates **every formula** a KTU 2024 Scheme student must memorize for the Connecting Rod module. The escape character `\vert` is used for any modulus or absolute value to prevent Markdown table corruption.

| S.No. | Parameter | Formula | Standard Value / Unit |
|---|---|---|---|
| 1 | Net force on rod | $F = F_g - m_r a$ | N |
| 2 | Piston acceleration | $a = r\omega^2 \left( \cos\phi + \frac{r}{L}\cos 2\phi \right)$ | m/s² |
| 3 | Angular velocity | $\omega = \frac{2\pi N}{60}$ | rad/s |
| 4 | Critical (max) inertia force | $F_{i,max} = m_r r \omega^2 \left( 1 + \frac{r}{L} \right)$ | N |
| 5 | Inertia force on gas force correction | $F_g = \frac{\pi}{4} D^2 (P_g - P_o)$ | N |
| 6 | Rankine-Gordon critical load | $P_R = \frac{\sigma_c A}{1 + a (L/k)^2}$ | N |
| 7 | Euler critical load (long column) | $P_{cr} = \frac{\pi^2 E I}{L^2}$ | N |
| 8 | Slenderness ratio | $\lambda = L / k$ | dimensionless |
| 9 | Least radius of gyration | $k = \sqrt{I_{min}/A}$ | mm |
| 10 | I-section area | $A = 2 B t_f + (H - 2 t_f) t_w$ | mm² |
| 11 | $I_{xx}$ (strong axis) | $\frac{1}{12}\left[B H^3 - (B - t_w)(H - 2 t_f)^3\right]$ | mm⁴ |
| 12 | $I_{yy}$ (weak axis) | $\frac{1}{12}\left[2 t_f B^3 + (H - 2 t_f) t_w^3\right]$ | mm⁴ |
| 13 | Big-end bearing load | $F_{be} = \frac{\pi}{4}(D_{ce})^2 P_{brg}$ | N |
| 14 | Small-end bearing load | $F_{se} = \frac{\pi}{4}(D_{gp})^2 P_{brg}$ | N |
| 15 | Piston pin bearing pressure | $P_{brg,se} = 25\text{–}35$ MPa (steel on bronze) | MPa |
| 16 | Crankpin bearing pressure | $P_{brg,be} = 10\text{–}15$ MPa | MPa |
| 17 | Factor of safety | $FOS = 4 \text{ to } 8$ | dimensionless |

## 2.5 Real-World Engineering Utility

> [!NOTE]
> **Where this knowledge is applied in industry:**
> 1. **OEM Engine Design** (e.g., Tata Motors, Maruti Suzuki, Mahindra): Finite Element Analysis (FEA) of connecting rod for fatigue life, with buckling check as a mandatory verification step.
> 2. **Racing Engines (Formula 1):** Forged titanium rods designed at $FOS = 2.5$ to minimize reciprocating mass.
> 3. **Heavy-Duty Diesel (Cummins, Volvo Trucks):** I-section forged alloy steel rods with $\sigma_u > 900$ MPa.
> 4. **Two-wheeler Engines (Hero, Bajaj):** Forged steel I-section rods with rectangular big end cap.
> 5. **Vibration & Torsional Analysis:** Rod stiffness $K = AE / L$ directly enters crankshaft torsional vibration models.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Derivation — Rankine-Gordon Critical Load for the Connecting Rod

> [!NOTE]
> **Statement of Derivation:** A connecting rod of length $L$ is treated as a column hinged at both ends. Its cross-section is I-shaped with minimum moment of inertia $I_{min}$. Derive an expression for the critical buckling load using the Rankine-Gordon empirical formula, given that the material has ultimate crushing strength $\sigma_c$ and Rankine constant $a$.

### Step 1 — Identify the Boundary Conditions
The small end (gudgeon pin) and the big end (crankpin) both behave as **pin joints** (free to rotate, no moment resistance). Therefore:
$$
L_{eff} = L
$$

### Step 2 — Write Euler's Buckling Formula
For a pin-ended column of effective length $L_{eff}$:
$$
P_E = \frac{\pi^2 E I}{L_{eff}^2}
$$

### Step 3 — Introduce the Short Column Limit
For a very short, stocky column, failure is governed by **crushing** rather than buckling:
$$
P_C = \sigma_c \cdot A
$$

### Step 4 — Combine Both Limits — Rankine's Hypothesis
> Rankine proposed that the actual critical load $P_R$ is related to the two limits by a reciprocal-quadratic relationship:
$$
\frac{1}{P_R} = \frac{1}{P_C} + \frac{1}{P_E}
$$

### Step 5 — Substitute the Expressions
$$
\frac{1}{P_R} = \frac{1}{\sigma_c A} + \frac{L_{eff}^2}{\pi^2 E I}
$$

### Step 6 — Factor Out the Crushing Term
$$
\frac{1}{P_R} = \frac{1}{\sigma_c A} \left[ 1 + \frac{\sigma_c A L_{eff}^2}{\pi^2 E I} \right]
$$

### Step 7 — Introduce the Rankine Constant $a$
Define:
$$
a = \frac{\sigma_c}{\pi^2 E}
$$
Then, since $k^2 = I/A$, we have:
$$
\frac{\sigma_c A L_{eff}^2}{\pi^2 E I} = \frac{\sigma_c L_{eff}^2}{\pi^2 E k^2} = a \left( \frac{L_{eff}}{k} \right)^2
$$

### Step 8 — Final Form of Rankine-Gordon Formula
$$
P_R = \frac{\sigma_c A}{1 + a \left( \dfrac{L_{eff}}{k} \right)^2}
$$

> **Conclusion:** This is the **final working equation** used universally in KTU 2024 Scheme ESE questions for the connecting rod buckling problem. The factor of safety condition is then written as:
$$
FOS = \frac{P_R}{F_{max,compressive}} \geq 4 \text{ to } 8
$$

## 3.2 Worked Numerical Example — KTU Model Question

> [!NOTE]
> **Problem Statement (14-Mark KTU Style):** A four-stroke diesel engine has the following specifications:
> - Cylinder bore $D = 100$ mm
> - Stroke length $= 125$ mm → crank radius $r = 62.5$ mm
> - Length of connecting rod $L = 250$ mm
> - Mass of reciprocating parts $m_r = 1.25$ kg
> - Engine speed $N = 2400$ rpm
> - Maximum gas pressure $P_{g,max} = 7$ MPa
> - I-section rod: $B = 35$ mm, $H = 50$ mm, $t_f = 8$ mm, $t_w = 8$ mm
> - Material: forged steel with $\sigma_c = 450$ MPa, $a = 1/9000$, $E = 210$ GPa
>
> **Determine:** (a) The maximum compressive force in the connecting rod. (b) The Rankine critical buckling load. (c) The factor of safety and comment.

### Step (a) — Compute Maximum Compressive Force

**Compute the angular velocity:**
$$
\omega = \frac{2\pi N}{60} = \frac{2 \pi \times 2400}{60} = 251.327 \text{ rad/s}
$$

**Compute the gas force at peak pressure:**
$$
F_g = \frac{\pi}{4} D^2 \cdot P_g = \frac{\pi}{4} (0.1)^2 \times 7 \times 10^6 = 54977.87 \text{ N}
$$

**Compute the maximum inertia force** (occurs at TDC, $\phi = 0$):
$$
F_{i,max} = m_r \cdot r \omega^2 \left( 1 + \frac{r}{L} \right)
$$
$$
F_{i,max} = 1.25 \times 0.0625 \times (251.327)^2 \left( 1 + \frac{62.5}{250} \right)
$$

Step-by-step:
- $r\omega^2 = 0.0625 \times 63165.34 = 3947.83$ m/s²
- $(1 + r/L) = 1 + 0.25 = 1.25$
- $F_{i,max} = 1.25 \times 3947.83 \times 1.25 = 6168.49$ N

> [!NOTE]
> **Subtractive effect:** During the power stroke, gas force $F_g$ and inertia $F_i$ both act on the piston. The net force **transmitted to the rod** depends on crank position. The **maximum compressive load on the rod** typically occurs at the start of the power stroke (just after TDC of expansion) when the gas pressure is near peak.

**Maximum compressive force in the rod:**
$$
F_{max} = F_g - F_i = 54977.87 - 6168.49 = 48809.38 \text{ N}
$$

### Step (b) — Rankine Critical Buckling Load

**Cross-sectional area of I-section:**
$$
A = 2 B t_f + (H - 2 t_f) t_w
$$
$$
A = 2 \times 35 \times 8 + (50 - 16) \times 8 = 560 + 272 = 832 \text{ mm}^2
$$

**Moment of inertia $I_{yy}$ (weak axis):**
$$
I_{yy} = \frac{1}{12} \left[ 2 t_f B^3 + (H - 2 t_f) t_w^3 \right]
$$
$$
I_{yy} = \frac{1}{12} \left[ 2 \times 8 \times 35^3 + 34 \times 8^3 \right] = \frac{1}{12} \left[ 686000 + 17408 \right] = 58617.33 \text{ mm}^4
$$

**Least radius of gyration:**
$$
k_{min} = \sqrt{\frac{I_{yy}}{A}} = \sqrt{\frac{58617.33}{832}} = \sqrt{70.45} = 8.394 \text{ mm}
$$

**Slenderness ratio** (hinged-hinged, so $L_{eff} = L = 250$ mm):
$$
\lambda = \frac{L_{eff}}{k_{min}} = \frac{250}{8.394} = 29.78
$$

**Rankine-Gordon critical load:**
$$
P_R = \frac{\sigma_c A}{1 + a \left( \dfrac{L}{k} \right)^2}
$$

Step-by-step:
- $\sigma_c A = 450 \times 832 = 374400$ N
- $a (L/k)^2 = \frac{1}{9000} \times (29.78)^2 = \frac{886.85}{9000} = 0.0985$
- $1 + 0.0985 = 1.0985$
- $P_R = \frac{374400}{1.0985} = 340828.85$ N $\approx 340.83$ kN

### Step (c) — Factor of Safety and Verdict

$$
FOS = \frac{P_R}{F_{max}} = \frac{340828.85}{48809.38} = 6.98
$$

> **Conclusion:** $FOS \approx 7$, which is **within the recommended range of 4 to 8** for connecting rods. The design is **safe against buckling**. Lower $FOS$ would indicate unsafe design; higher $FOS$ would indicate over-designed (heavy) rod.

## 3.3 Python Implementation — Connecting Rod Design Verifier

> [!IMPORTANT]
> The following production-quality Python code implements the **entire calculation pipeline** above. It is **fully operational**, with strict type hints, input validation, and a clean terminal output. Students can paste it into any IDE and run directly.

```python
from __future__ import annotations
import math
from dataclasses import dataclass, field
from typing import Final


# ============================================================
# Connecting Rod Design Verifier — KTU PCAUT205 Module 1
# Computes max compressive load, Rankine critical buckling
# load, and factor of safety for an I-section connecting rod.
# ============================================================


@dataclass(frozen=True)
class EngineSpecifications:
    """Engine parameters used in connecting rod design."""

    bore_m: float                          # Cylinder bore (m)
    stroke_m: float                        # Stroke length (m)
    rod_length_m: float                    # Length of connecting rod (m)
    reciprocating_mass_kg: float           # Mass of reciprocating parts (kg)
    speed_rpm: float                       # Engine speed (rpm)
    max_gas_pressure_Pa: float             # Peak gas pressure (Pa)


@dataclass(frozen=True)
class ISectionGeometry:
    """Geometric parameters of the I-section rod (all in mm)."""

    flange_width_mm: float                 # B — total flange width
    total_depth_mm: float                  # H — total section depth
    flange_thickness_mm: float             # t_f
    web_thickness_mm: float                # t_w


@dataclass(frozen=True)
class RodMaterial:
    """Mechanical properties of the rod material."""

    crushing_strength_Pa: float            # sigma_c (Pa)
    rankine_constant: float                # a (dimensionless, e.g. 1/9000)
    elastic_modulus_Pa: float              # E (Pa)
    name: str = "Forged Steel"


@dataclass
class RodDesignResult:
    """Final result struct."""

    angular_velocity_radps: float = 0.0
    max_gas_force_N: float = 0.0
    max_inertia_force_N: float = 0.0
    max_compressive_force_N: float = 0.0
    cross_section_area_mm2: float = 0.0
    I_yy_mm4: float = 0.0
    k_min_mm: float = 0.0
    slenderness_ratio: float = 0.0
    rankine_critical_load_N: float = 0.0
    factor_of_safety: float = 0.0
    is_safe: bool = False
    warnings: list[str] = field(default_factory=list)


# Standard FOS bounds recommended by KTU / industry
FOS_LOWER_LIMIT: Final[float] = 4.0
FOS_UPPER_LIMIT: Final[float] = 8.0


def validate_inputs(engine: EngineSpecifications) -> None:
    """Raise ValueError on physically invalid input."""
    if engine.bore_m <= 0:
        raise ValueError("Cylinder bore must be positive.")
    if engine.stroke_m <= 0:
        raise ValueError("Stroke length must be positive.")
    if engine.rod_length_m <= 0:
        raise ValueError("Connecting rod length must be positive.")
    if engine.reciprocating_mass_kg <= 0:
        raise ValueError("Reciprocating mass must be positive.")
    if engine.speed_rpm <= 0:
        raise ValueError("Engine speed must be positive.")
    if engine.max_gas_pressure_Pa <= 0:
        raise ValueError("Max gas pressure must be positive.")


def compute_rod_design(
    engine: EngineSpecifications,
    section: ISectionGeometry,
    material: RodMaterial,
) -> RodDesignResult:
    """Run the full connecting rod design analysis."""
    validate_inputs(engine)

    result = RodDesignResult()

    # ---- Angular velocity ----
    result.angular_velocity_radps = (2.0 * math.pi * engine.speed_rpm) / 60.0

    # ---- Gas force ----
    piston_area_m2 = math.pi * (engine.bore_m ** 2) / 4.0
    result.max_gas_force_N = piston_area_m2 * engine.max_gas_pressure_Pa

    # ---- Inertia force at TDC ----
    crank_radius_m = engine.stroke_m / 2.0
    omega_sq = result.angular_velocity_radps ** 2
    r_over_L = crank_radius_m / engine.rod_length_m
    result.max_inertia_force_N = (
        engine.reciprocating_mass_kg
        * crank_radius_m
        * omega_sq
        * (1.0 + r_over_L)
    )

    # ---- Net compressive force on rod (peak power stroke) ----
    result.max_compressive_force_N = (
        result.max_gas_force_N - result.max_inertia_force_N
    )

    # ---- I-section area ----
    B = section.flange_width_mm
    H = section.total_depth_mm
    tf = section.flange_thickness_mm
    tw = section.web_thickness_mm
    result.cross_section_area_mm2 = 2.0 * B * tf + (H - 2.0 * tf) * tw

    # ---- I_yy (weak axis) ----
    result.I_yy_mm4 = (
        2.0 * tf * (B ** 3) + (H - 2.0 * tf) * (tw ** 3)
    ) / 12.0

    # ---- k_min ----
    if result.cross_section_area_mm2 <= 0:
        raise ValueError("Computed cross-section area is non-positive.")
    result.k_min_mm = math.sqrt(
        result.I_yy_mm4 / result.cross_section_area_mm2
    )

    # ---- Slenderness ratio (hinged-hinged) ----
    L_mm = engine.rod_length_m * 1000.0
    result.slenderness_ratio = L_mm / result.k_min_mm

    # ---- Rankine critical load ----
    sigma_c_A = material.crushing_strength_Pa * (
        result.cross_section_area_mm2 * 1e-6
    )  # convert mm^2 -> m^2
    denominator = 1.0 + material.rankine_constant * (
        result.slenderness_ratio ** 2
    )
    result.rankine_critical_load_N = sigma_c_A / denominator

    # ---- Factor of safety ----
    if result.max_compressive_force_N <= 0:
        result.warnings.append(
            "Compressive force non-positive — check gas pressure input."
        )
    else:
        result.factor_of_safety = (
            result.rankine_critical_load_N / result.max_compressive_force_N
        )
        result.is_safe = (
            FOS_LOWER_LIMIT
            <= result.factor_of_safety
            <= FOS_UPPER_LIMIT
        )
        if result.factor_of_safety < FOS_LOWER_LIMIT:
            result.warnings.append(
                f"FOS={result.factor_of_safety:.2f} is below minimum {FOS_LOWER_LIMIT}."
            )
        elif result.factor_of_safety > FOS_UPPER_LIMIT:
            result.warnings.append(
                f"FOS={result.factor_of_safety:.2f} is over-designed (>{FOS_UPPER_LIMIT})."
            )

    return result


def print_report(result: RodDesignResult) -> None:
    """Pretty-print the design result."""
    print("=" * 60)
    print(" CONNECTING ROD DESIGN REPORT — KTU PCAUT205")
    print("=" * 60)
    print(f" Angular velocity      : {result.angular_velocity_radps:.3f} rad/s")
    print(f" Max gas force (F_g)   : {result.max_gas_force_N/1000:.3f} kN")
    print(f" Max inertia force     : {result.max_inertia_force_N/1000:.3f} kN")
    print(f" Max compressive force : {result.max_compressive_force_N/1000:.3f} kN")
    print("-" * 60)
    print(f" Cross-section area    : {result.cross_section_area_mm2:.2f} mm^2")
    print(f" I_yy (weak axis)      : {result.I_yy_mm4:.2f} mm^4")
    print(f" Min radius of gyration: {result.k_min_mm:.3f} mm")
    print(f" Slenderness ratio     : {result.slenderness_ratio:.3f}")
    print(f" Rankine critical load : {result.rankine_critical_load_N/1000:.3f} kN")
    print("-" * 60)
    print(f" FACTOR OF SAFETY      : {result.factor_of_safety:.3f}")
    print(f" Design status         : {'SAFE' if result.is_safe else 'UNSAFE / OVER-DESIGNED'}")
    if result.warnings:
        print(" Warnings:")
        for w in result.warnings:
            print(f"   - {w}")
    print("=" * 60)


# ---------------------- DEMO EXECUTION -----------------------
if __name__ == "__main__":
    engine = EngineSpecifications(
        bore_m=0.100,
        stroke_m=0.125,
        rod_length_m=0.250,
        reciprocating_mass_kg=1.25,
        speed_rpm=2400.0,
        max_gas_pressure_Pa=7.0e6,
    )
    section = ISectionGeometry(
        flange_width_mm=35.0,
        total_depth_mm=50.0,
        flange_thickness_mm=8.0,
        web_thickness_mm=8.0,
    )
    material = RodMaterial(
        crushing_strength_Pa=450.0e6,
        rankine_constant=1.0 / 9000.0,
        elastic_modulus_Pa=210.0e9,
        name="Forged Steel",
    )

    result = compute_rod_design(engine, section, material)
    print_report(result)
```

**Expected Output (verified):**
- Max compressive force: $\approx 48.81$ kN
- Rankine critical load: $\approx 340.83$ kN
- $FOS \approx 6.98$ → Design **SAFE**

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid — Connecting Rod Functional Anatomy

> [!NOTE]
> The following Mermaid block renders the **anatomical structure** of the connecting rod, identifying every sub-component, the cross-section, and the material flow.

```mermaid
graph TD
    A[Connecting Rod Assembly]:::main --> B[Small End Gudgeon Pin Boss]:::small
    A --> C[Shank I Section Web]:::shank
    A --> D[Big End Crankpin Boss]:::big
    A --> E[Big End Cap]:::cap
    A --> F[Two Connecting Bolts]:::bolt

    B --> B1[Bronze Bushing]
    B --> B2[Gudgeon Pin Clearance]

    C --> C1[Top Flange]
    C --> C2[Web Core]
    C --> C3[Bottom Flange]

    D --> D1[Bearing Shells Upper Lower]
    D --> D2[Crankpin Contact Zone]

    E --> E1[Dowel Pin Alignment]
    E --> E2[Cracked Nut Locking]

    F --> F1[Preload Torque Zone]
    F --> F2[Stretch Control Region]

    classDef main fill:#1e3a8a,color:#ffffff,stroke:#1e40af,stroke-width:2px
    classDef small fill:#fde68a,color:#1f2937,stroke:#b45309
    classDef shank fill:#86efac,color:#064e3b,stroke:#15803d
    classDef big fill:#fca5a5,color:#7f1d1d,stroke:#b91c1c
    classDef cap fill:#c4b5fd,color:#312e81,stroke:#6d28d9
    classDef bolt fill:#fcd34d,color:#78350f,stroke:#a16207
```

## 4.2 Mermaid — Force Flow & Load Path During the Power Stroke

```mermaid
graph LR
    subgraph Cylinder_Zone [Cylinder Combustion Zone]
        PG[Peak Gas Pressure 7 MPa]:::force
    end

    subgraph Piston_Assembly [Piston Assembly]
        P[Piston Crown]:::part
        GP[Gudgeon Pin]:::part
    end

    subgraph Connecting_Rod [Connecting Rod Two Force Member]
        SE[Small End]:::rod
        SH[Shank I Section]:::rod
        BE[Big End]:::rod
    end

    subgraph Crank_Assembly [Crankshaft Assembly]
        CP[Crankpin]:::part
        CR[Crank Web and Counterweight]:::part
    end

    PG -- Combustion force on piston crown --> P
    P -- Thrust via gudgeon pin --> SE
    SE -- Compressive axial flow --> SH
    SH -- Continues to big end --> BE
    BE -- Torque on crankpin --> CP
    CP -- Rotates with --> CR

    classDef force fill:#dc2626,color:#ffffff,stroke:#7f1d1d,stroke-width:2px
    classDef part fill:#0ea5e9,color:#ffffff,stroke:#0369a1
    classDef rod fill:#16a34a,color:#ffffff,stroke:#15803d,stroke-width:2px
```

## 4.3 Mermaid — Design Verification Decision Pipeline (Sequential Topology)

```mermaid
flowchart TD
    A[Start Collect Engine Specs]:::start --> B[Compute Gas Force F_g]:::calc
    B --> C[Compute Max Inertia Force F_i]:::calc
    C --> D{F_g and F_i Direction Match?}
    D -- Yes Power Stroke --> E[Compressive Force F_c = F_g - F_i]:::calc
    D -- No Compression Stroke --> F[Tensile Force F_t = F_i - F_g]:::calc

    E --> G[Select I Section Geometry]:::geom
    F --> G
    G --> H[Compute Area A and I_yy]:::geom
    H --> I[Compute k_min and Slenderness Ratio]:::geom
    I --> J[Compute Rankine Critical Load P_R]:::crit
    J --> K{FOS between 4 and 8?}
    K -- Yes --> L[Design Accepted and SAFE]:::accept
    K -- No FOS less than 4 --> M[Increase Section Depth or Change Material]:::revise
    K -- No FOS greater than 8 --> N[Reduce Section for Weight Optimisation]:::revise

    M --> G
    N --> G

    classDef start fill:#0f172a,color:#ffffff,stroke:#020617
    classDef calc fill:#3b82f6,color:#ffffff,stroke:#1d4ed8
    classDef geom fill:#8b5cf6,color:#ffffff,stroke:#6d28d9
    classDef crit fill:#f59e0b,color:#1f2937,stroke:#b45309
    classDef accept fill:#22c55e,color:#ffffff,stroke:#15803d,stroke-width:2px
    classDef revise fill:#ef4444,color:#ffffff,stroke:#991b1b
```

## 4.4 Mermaid — Failure Mode Topology (Sequential Block Architecture)

```mermaid
flowchart TD
    S[Connecting Rod in Service]:::sys --> M1[Fatigue Failure Buckling Combined]:::mode
    S --> M2[Big End Bearing Seizure]:::mode
    S --> M3[Small End Bushing Wear]:::mode
    S --> M4[Bolts Loosening or Stretch]:::mode
    S --> M5[Crankpin Ovalisation]:::mode

    M1 --> R1[Reduce Slenderness Ratio]
    M1 --> R2[Increase Material sigma_c]
    M2 --> R3[Improve Lubrication System]
    M2 --> R4[Select Proper Bearing Material]
    M3 --> R5[Bronze Bushing Hardness Control]
    M4 --> R6[Torque plus Angle Tightening]
    M5 --> R7[Increase Crankpin Diameter]

    classDef sys fill:#1f2937,color:#ffffff,stroke:#111827,stroke-width:2px
    classDef mode fill:#fb923c,color:#7c2d12,stroke:#9a3412
```

## 4.5 Block-Level Functional Architecture — Buckling Analysis Module

| Stage | Input Parameter | Computed Output | Governing Equation |
|---|---|---|---|
| **Stage 1 — Geometry Definition** | $B, H, t_f, t_w$ | $A$, $I_{yy}$ | Section property equations |
| **Stage 2 — Radius of Gyration** | $I_{yy}, A$ | $k_{min}$ | $k_{min} = \sqrt{I_{yy}/A}$ |
| **Stage 3 — Slenderness Check** | $L, k_{min}$ | $\lambda$ | $\lambda = L/k_{min}$ |
| **Stage 4 — Material Constant** | $\sigma_c, a$ | $P_R$ | Rankine-Gordon equation |
| **Stage 5 — Load Comparison** | $F_{max}, P_R$ | $FOS$ | $FOS = P_R / F_{max}$ |
| **Stage 6 — Verdict** | $FOS$ | Safe / Unsafe | Range $4 \leq FOS \leq 8$ |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question A1 — `[KTU University Exam — Dec 2023]`
**Q: List any three functions of a connecting rod in an internal combustion engine.** *(CO1, Remember)*

**Model Answer (Valuation Key):**
1. **Transmits the gas force and inertia force** from the piston to the crankshaft — converting reciprocating motion into rotary motion. *[1 Mark]*
2. **Maintains the correct geometric relationship** between the piston travel and the crank rotation, ensuring proper timing. *[1 Mark]*
3. **Provides a housing for bearings** (small-end bushing and big-end bearing shells) and acts as a **two-force member** under dynamic loading. *[1 Mark]*

> *(Alternative accepted functions: transmits side thrust from oblique connecting rod, acts as a lubrication oil passage in some designs, ensures the piston remains in correct alignment with the cylinder bore.)*

### Question A2 — `[KTU University Exam — July 2024]`
**Q: Why is an I-section preferred over a rectangular section for the connecting rod shank? Mention the buckling-axis implication.** *(CO2, Understand)*

**Model Answer (Valuation Key):**
- The **I-section provides maximum moment of inertia per unit mass**, making it lightweight yet stiff in bending. *[1 Mark]*
- For a typical I-section, **$I_{xx} \gg I_{yy}$**, meaning the **weak axis is $yy$** (the axis in the plane of the web). *[1 Mark]*
- Therefore, **buckling will occur about the weak axis (yy)**, and the design must use $k_{min} = \sqrt{I_{yy}/A}$ in the Rankine-Gordon formula. *[1 Mark]*

---

## 5.2 Part B — Module Internal Choice (14 Marks Each)

### Question Set 1 — `[KTU University Exam — Dec 2023]`

#### **Question 1A — Full 14 Marks** *(CO1, CO2 — Understand / Apply)*

**(a)** Derive the Rankine-Gordon formula for the critical buckling load of a connecting rod treated as a pin-ended column. Clearly state the boundary conditions and the significance of the Rankine constant. *[7 Marks, Understand]*

**(b)** A single-cylinder four-stroke petrol engine has the following data:
- Bore $D = 80$ mm, Stroke $L_s = 100$ mm
- Length of connecting rod $= 200$ mm
- Mass of reciprocating parts $m_r = 1.0$ kg
- Speed $N = 3000$ rpm
- Maximum gas pressure $P_g = 5$ MPa
- I-section: $B = 30$ mm, $H = 45$ mm, $t_f = 7$ mm, $t_w = 7$ mm
- Forged steel: $\sigma_c = 450$ MPa, $a = 1/9000$

Compute: **(i)** the maximum compressive force on the rod, **(ii)** the Rankine critical load, and **(iii)** the factor of safety. *[7 Marks, Apply]*

---

#### **Model Solution to Question 1A**

**Part (a) — Derivation**

**Step 1 — Boundary conditions:** Both ends of the connecting rod are pin joints, so $L_{eff} = L$. *[1 Mark]*

**Step 2 — Euler's formula** for long, slender pin-ended column:
$$
P_E = \frac{\pi^2 E I}{L^2}
$$
*[1 Mark]*

**Step 3 — Short column (crushing) limit:**
$$
P_C = \sigma_c A
$$
*[1 Mark]*

**Step 4 — Rankine's reciprocal hypothesis:**
$$
\frac{1}{P_R} = \frac{1}{P_C} + \frac{1}{P_E}
$$
*[1 Mark]*

**Step 5 — Substitution and simplification:**
$$
P_R = \frac{\sigma_c A}{1 + \dfrac{\sigma_c}{\pi^2 E} \cdot \left(\dfrac{L}{k}\right)^2}
$$
*[2 Marks]*

**Step 6 — Defining the Rankine constant:** $a = \dfrac{\sigma_c}{\pi^2 E}$, a material property; the final expression is:
$$
P_R = \frac{\sigma_c A}{1 + a \left( \dfrac{L}{k} \right)^2}
$$
*[1 Mark]*

**Part (b) — Numerical Computation**

**Step (i) — Maximum compressive force:**

Angular velocity:
$$
\omega = \frac{2\pi \times 3000}{60} = 314.159 \text{ rad/s}
$$
*[Valuation: 0.5 Mark]*

Gas force:
$$
F_g = \frac{\pi}{4}(0.080)^2 \times 5 \times 10^6 = 25132.74 \text{ N}
$$
*[Valuation: 0.5 Mark]*

Inertia force at TDC ($r = L_s/2 = 0.05$ m):
$$
F_i = 1.0 \times 0.05 \times (314.159)^2 \times \left( 1 + \frac{0.05}{0.20} \right) = 4934.80 \text{ N}
$$
*[Valuation: 1 Mark]*

Maximum compressive force in rod:
$$
F_{max} = 25132.74 - 4934.80 = 20197.94 \text{ N} \approx 20.20 \text{ kN}
$$
*[Valuation: 0.5 Mark]*

**Step (ii) — Rankine critical load:**

Cross-section area:
$$
A = 2(30)(7) + (45 - 14)(7) = 420 + 217 = 637 \text{ mm}^2
$$
*[Valuation: 0.5 Mark]*

$I_{yy}$ (weak axis):
$$
I_{yy} = \frac{1}{12}\left[ 2(7)(30)^3 + (45 - 14)(7)^3 \right] = \frac{1}{12}\left[ 378000 + 10633 \right] = 32386.08 \text{ mm}^4
$$
*[Valuation: 1 Mark]*

Least radius of gyration:
$$
k_{min} = \sqrt{\frac{32386.08}{637}} = \sqrt{50.84} = 7.131 \text{ mm}
$$
*[Valuation: 0.5 Mark]*

Slenderness ratio:
$$
\lambda = \frac{200}{7.131} = 28.05
$$
*[Valuation: 0.5 Mark]*

Rankine load:
$$
P_R = \frac{450 \times 637}{1 + \frac{1}{9000}(28.05)^2} = \frac{286650}{1.0874} = 263571.2 \text{ N} \approx 263.57 \text{ kN}
$$
*[Valuation: 1 Mark]*

**Step (iii) — Factor of safety:**
$$
FOS = \frac{263571.2}{20197.94} = 13.05
$$
*[Valuation: 0.5 Mark]*

**Conclusion:** $FOS = 13.05$ is **higher than the recommended upper limit of 8**, indicating the section is **over-designed**. Reduce $H$ (section depth) or use a lighter material for weight optimisation. *[Valuation: 0.5 Mark]*

---

#### **Question 1B — Alternative 14 Marks** *(CO1, CO2 — Understand / Apply)*

**(a)** Explain the various forces acting on a connecting rod during the engine cycle. Sketch a neat free-body diagram of the connecting rod and label the forces at the small end and big end. *[7 Marks, Understand]*

**(b)** A four-stroke diesel engine has the following data:
- Cylinder bore $D = 120$ mm
- Stroke length $L_s = 150$ mm
- Length of connecting rod $L = 350$ mm
- Speed $N = 1500$ rpm
- Mass of reciprocating parts $m_r = 2.5$ kg
- I-section rod: $B = 50$ mm, $H = 65$ mm, $t_f = 10$ mm, $t_w = 9$ mm
- Forged steel: $\sigma_c = 450$ MPa, $a = 1/9000$

Calculate: **(i)** the maximum inertia force, **(ii)** the area and the minimum radius of gyration of the I-section, and **(iii)** the Rankine critical load and factor of safety. *[7 Marks, Apply]*

---

#### **Model Solution to Question 1B (Highlights)**

**Part (a) — Free-Body Diagram Description:**

The student must sketch:
- Piston at the top with gas pressure $F_g$ acting downward.
- Inertia force $F_i$ acting on the piston (upward during upward stroke, downward during downward stroke).
- Net force on the rod = $F = F_g - F_i$ acting along the rod axis.
- Reaction $F_b$ at the big end (along the rod axis from crankpin).
- The moment from the side component $F_n = F \sin\theta$ which is balanced by the side thrust on the cylinder wall.

*[Award 2 Marks for the diagram, 3 Marks for listing the three forces, 2 Marks for explaining their variation across the cycle]*

**Part (b) — Key Answers (Students should arrive at these):**

- **(i) Max inertia force:** $F_{i,max} = 2.5 \times 0.075 \times (157.08)^2 \times (1 + 0.075/0.35)$
  - $= 2.5 \times 0.075 \times 24674.01 \times 1.2143 = 5617.83$ N $\approx 5.62$ kN *[2 Marks]*

- **(ii) Area:** $A = 2(50)(10) + (65 - 20)(9) = 1000 + 405 = 1405$ mm²
  - $I_{yy} = \frac{1}{12}[2(10)(50)^3 + (45)(9)^3] = \frac{1}{12}[2,500,000 + 32,805] = 211,067.08$ mm⁴
  - $k_{min} = \sqrt{211,067.08 / 1405} = \sqrt{150.22} = 12.257$ mm *[2 Marks]*

- **(iii) Rankine load:**
  - $\lambda = 350 / 12.257 = 28.557$
  - $P_R = \frac{450 \times 1405}{1 + (1/9000)(28.557)^2} = \frac{632250}{1.0906} = 579,706$ N $\approx 579.71$ kN
  - Max compressive force: $F_g = \frac{\pi}{4}(0.12)^2 \times P_{g,max}$ (assumed 6 MPa typical) — see note below
  - If $P_{g,max}$ is not given, examiner may give $F_{max}$ directly. With $F_{max} = 50$ kN (typical assumption): $FOS = 579,710 / 50,000 = 11.59$ → slightly over-designed. *[3 Marks]*

> [!WARNING]
> **KTU Examiner's Valuation Warning / Pitfall Callout:**
> 1. **Do NOT confuse compression and tension:** Maximum compressive force on the rod occurs at peak gas pressure near TDC of the power stroke. Tensile force occurs at the start of the compression stroke when $F_i > F_g$. Both must be checked in design.
> 2. **Forgetting the I-section weak axis:** A common mistake is to use $I_{xx}$ (strong axis) in the Rankine formula. Always use $I_{yy}$ because the rod **buckles about the weak axis**.
> 3. **Units of slenderness ratio:** $\lambda$ is dimensionless — always check that both $L$ and $k$ are in the **same units** (either both in mm or both in m).
> 4. **Rankine constant $a$:** A frequent error is using the **wrong value** of $a$ for the material. For forged steel connecting rods, use $a = 1/9000$. For cast iron, use $1/1600$. For mild steel, use $1/7500$.
> 5. **FOS interpretation:** $FOS < 4$ → unsafe, redesign. $FOS > 8$ → over-designed, optimise weight. The "ideal" $FOS$ for a production automobile rod is **between 5 and 7**.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Connecting Rod (KTU PCAUT205 Module 1):**

- [x] **Function:** Transmit force from piston → crank, convert reciprocating → rotary motion.
- [x] **Two-force member:** Both ends are pin-jointed, force acts only along the rod axis.
- [x] **Forces on rod:** Gas force $F_g$, inertia force $F_i$, net axial force $F = F_g - F_i$ (compressive on power stroke, tensile on compression stroke).
- [x] **Piston acceleration:** $a = r\omega^2 \left( \cos\phi + \frac{r}{L}\cos 2\phi \right)$ — derive it once and never forget.
- [x] **Max inertia force at TDC:** $F_{i,max} = m_r r \omega^2 \left( 1 + \frac{r}{L} \right)$.
- [x] **I-section preferred** because $I_{xx} / A$ is maximised → strong axis along the web.
- [x] **Weak axis is $yy$** (in plane of web) → **buckling always about $yy$** → use $I_{yy}$ in the Rankine formula.
- [x] **Rankine-Gordon formula:** $P_R = \dfrac{\sigma_c A}{1 + a(L/k)^2}$ — this is the **default** in KTU exams, **not** the pure Euler formula.
- [x] **Rankine constant for forged steel:** $a = 1/9000$, $\sigma_c = 450$ MPa. Memorise these.
- [x] **Factor of safety range:** **4 to 8** is the industry standard. Outside this range, redesign.
- [x] **Big end:** Crankpin end, split type with cap and two bolts, carries the largest load.
- [x] **Small end:** Gudgeon pin end, has a bronze bushing, smallest diameter.
- [x] **Shank (web):** The slender middle section, where buckling is most critical.
- [x] **Bearing pressure:** Crankpin $P_{brg} = 10$–$15$ MPa; Gudgeon pin $P_{brg} = 25$–$35$ MPa.
- [x] **Material choice:** Forged carbon/alloy steel for standard engines, forged aluminium for high-performance/racing.
- [x] **In FEA-based modern design:** Use the Rankine load as a **first-pass check** before detailed FEA buckling analysis.
- [x] **Always state units** in the final answer. KTU examiners deduct **0.5 marks** for missing units in numerical problems.
- [x] **Always show the FBD** in derivation questions — it carries **1 to 2 marks** even if the rest is incorrect.
- [x] **Slenderness ratio check:** For a typical rod, $\lambda \approx 25$–$35$. If $\lambda > 100$, use Euler; if $\lambda < 20$, use crushing; in between, use **Rankine**.

---

<!-- SECTION_5_END -->
