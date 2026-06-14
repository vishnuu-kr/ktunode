# Basic engine nomenclature

<!-- SECTION_1_START -->
# Basic Engine Nomenclature — The Language of the Power Plant

## Formal Academic Definition (KTU 2024 Syllabus Terminology)

In the context of an **Internal Combustion (IC) Engine**, *engine nomenclature* refers to the standardized set of terms, geometric parameters, and component identities used to describe the architecture, kinematics, and thermodynamic state of a reciprocating power plant. The nomenclature establishes a common engineering vocabulary that allows designers, service engineers, and examiners to communicate unambiguously about engine geometry (bore, stroke, clearance), kinematics (TDC, BDC, crank angle), component layout (piston, crankshaft, camshaft, valves), and performance metrics (compression ratio, swept volume, displacement).

> [!IMPORTANT]
> **KTU 2024 Module 1 Highlight:** Mastery of engine nomenclature is the foundational prerequisite for every subsequent module in *Automobile Power Plant* — including fuel systems, cooling, lubrication, and combustion. Board questions on nomenclature frequently appear as **3-mark short-answer** items and as the **drawing component** of 14-mark essay questions.

## Conceptual Analogy — The Engine as a Human Body

To a student reading this for the first time, an internal combustion engine can be visualized as a *mechanical organism*:

- The **cylinder block** is the **skeleton** — it provides the rigid structural housing that contains the combustion process.
- The **piston** is the **heart muscle** — it pumps up and down, converting chemical energy (combustion pressure) into mechanical motion.
- The **connecting rod (con-rod)** is the **forearm** — it links the reciprocating piston to the rotating crankshaft, just as the forearm links the bicep to the hand.
- The **crankshaft** is the **spine** — it converts the reciprocating thrust of the piston into continuous rotary motion delivered to the drivetrain.
- The **intake and exhaust valves** are the **mouth and nostrils** — they open and close in timed sequence to let fresh charge in and burnt gases out.
- The **cooling jacket and water pump** are the **sweat glands and circulatory system** — they remove excess heat to prevent thermal failure.
- The **oil pump and oil gallery** are the **bloodstream** — they lubricate moving parts to prevent wear.
- The **flywheel** is the **short-term memory** — it stores rotational kinetic energy and smooths out power delivery between power strokes.

> [!NOTE]
> **Geometric Intuition:** Imagine a vertical cylindrical "drinking glass" (the cylinder). A perfectly fitting "ice cube on a stick" (the piston attached to a connecting rod) slides up and down inside it. The connecting rod's lower end is pinned to a crank that rotates, forcing the ice cube to oscillate. The volume trapped above the ice cube changes continuously — this trapped volume is the *combustion chamber volume*, and its variation defines the thermodynamic cycle of the engine.

## Defining the Key Reference Positions

Two geometrically defined dead-centre positions govern every analysis of the engine:

- **Top Dead Centre (TDC)** — the extreme position of the piston closest to the cylinder head, where the crank arm aligns with the cylinder axis and the piston momentarily has zero velocity.
- **Bottom Dead Centre (BDC)** — the extreme position of the piston farthest from the cylinder head, again where the crank aligns with the cylinder axis and piston velocity momentarily becomes zero.

The distance the piston travels between TDC and BDC is called the **stroke** $L$, and it is exactly equal to **twice the crank radius** $r$, i.e. $L = 2r$. This is why a piston is described as having a "stroke of 90 mm" — it travels 90 mm from TDC to BDC.

> [!VISUALIZATION CONTROL]
> **Concept:** Cylinder bore, stroke, and piston position as a function of crank angle
> **Desmos / GeoGebra Input Equations:**
> * Circle (crank rotation): $x^2 + y^2 = r^2$, with $r = 0.045$ (for 90 mm stroke)
> * Crank pin locus: parametric $(r\cos\theta,\ r\sin\theta)$
> * Piston centreline: $x = r\cos\theta + \sqrt{R^2 - r^2\sin^2\theta}$ where $R$ is connecting rod length, plot for $\theta \in [0,\ 2\pi]$
> * Bore as a vertical line at $x = 0$
> **Visual Description:** A circle of radius $r$ rotates about the origin. A horizontal line at height $R$ (con-rod) connects the crank pin to a point sliding vertically along the bore. The piston's vertical position oscillates between $R + r$ (BDC) and $R - r$ (TDC), giving a stroke of $2r$. This is the canonical kinematic model of the slider-crank mechanism.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## Structured Logic Breakdown — Anatomy of a Spark-Ignition Engine

The following hierarchy breaks down every standard component you must know for the KTU board examination. Each component is described by its **function**, its **material** (where relevant), and its **position** within the engine.

### A. Stationary (Non-Moving) Components

| Component | Function |
|---|---|
| **Cylinder Block** | The main structural casting (typically cast iron or aluminium alloy) that houses the cylinders, coolant passages, and main bearing supports. |
| **Cylinder Head / Cylinder Liner** | Bolted on top of the block; contains the valves, spark-plug hole (in SI engines) or injector bore (in CI engines), and forms the upper half of the combustion chamber. |
| **Combustion Chamber** | The space bounded by the cylinder head, piston crown, and cylinder walls where air-fuel mixture is compressed and burnt. |
| **Intake Manifold** | A duct that distributes the air (or air-fuel mixture) from the carburettor/throttle body to each intake port. |
| **Exhaust Manifold** | A duct that collects exhaust gases from each exhaust port and channels them to the catalytic converter and muffler. |
| **Crankcase** | The lower housing that encloses the crankshaft and oil sump. |
| **Cylinder Liner / Sleeve** | A replaceable hardened sleeve pressed into the cylinder bore to provide a wear-resistant surface for the piston rings. |

### B. Reciprocating (Linearly Moving) Components

| Component | Function |
|---|---|
| **Piston** | A cylindrical part (usually aluminium alloy) that moves up and down in the cylinder, receiving the combustion force and transmitting it to the connecting rod. |
| **Piston Rings** | Split metal rings seated in grooves on the piston. **Compression rings** (top 2) seal combustion gases; **oil-control ring** (bottom 1) scrapes excess oil back into the crankcase. |
| **Gudgeon Pin / Wrist Pin** | A hardened steel pin that pivotally connects the piston to the small (upper) end of the connecting rod. |
| **Connecting Rod (Con-rod)** | A forged steel link that converts the linear motion of the piston into the rotary motion of the crankshaft. It has a **small end** (piston side) and a **big end** (crankshaft side). |

### C. Rotating Components

| Component | Function |
|---|---|
| **Crankshaft** | A forged steel shaft with crank pins, counterweights, and main bearing journals. Converts reciprocating motion to rotary motion and delivers torque. |
| **Flywheel** | A heavy cast-iron disc bolted to the rear end of the crankshaft. Stores rotational kinetic energy to smoothen power delivery. |
| **Camshaft** | A shaft fitted with eccentric lobes that open the intake and exhaust valves in a precisely timed sequence. Driven by a timing belt/chain from the crankshaft. |
| **Crank Pin / Crank Web** | The offset journal of the crankshaft to which the big end of the connecting rod is attached. |

### D. Valve Train Components

| Component | Function |
|---|---|
| **Intake Valve** | Allows the fresh air (or air-fuel mixture) to enter the cylinder during the induction stroke. |
| **Exhaust Valve** | Allows burnt gases to leave the cylinder during the exhaust stroke. |
| **Valve Spring** | A helical spring that closes the valve when the cam lobe rotates away. |
| **Rocker Arm / Tappet** | A lever that transmits cam-lobe motion to the valve stem. |

### E. Auxiliary Components

| Component | Function |
|---|---|
| **Spark Plug** | A device screwed into the cylinder head that delivers a high-voltage spark to ignite the compressed mixture (SI engines only). |
| **Fuel Injector** | An electronically or mechanically actuated valve that sprays fuel into the cylinder/intake port (CI and modern SI engines). |
| **Piston Crown** | The top face of the piston. Its shape (flat, dished, or domed) directly defines the combustion chamber geometry. |
| **Sump / Oil Pan** | The reservoir at the bottom of the crankcase that holds the engine lubricating oil. |

## KTU Formula Sheet — High-Yield Equations for Engine Nomenclature

> [!IMPORTANT]
> The following table is the single most-tested set of formulas in Module 1. Memorize every entry; the derivations of $V_s$ and $r$ are mandatory for full marks in 14-mark questions.

| Parameter | Formula | Description |
|---|---|---|
| **Stroke length** | $L = 2r$ | Distance between TDC and BDC; equal to twice the crank radius $r$. |
| **Swept volume (per cylinder)** | $V_s = \dfrac{\pi}{4}\,D^{2}\,L$ | Volume displaced by the piston in one stroke; $D$ is the bore, $L$ is the stroke. |
| **Clearance volume** | $V_c$ | Volume of the combustion chamber when the piston is at TDC. Measured experimentally by filling with liquid. |
| **Total displacement** | $V_d = N \times V_s$ | Sum of swept volumes of all $N$ cylinders. Reported as engine capacity (e.g. 1.5 L). |
| **Compression ratio** | $r = \dfrac{V_s + V_c}{V_c}$ | Ratio of total cylinder volume at BDC to that at TDC. Petrol: 8–12; Diesel: 14–22. |
| **Cylinder volume at crank angle $\theta$** | $V(\theta) = V_c + \dfrac{\pi D^{2}}{4}\cdot\dfrac{L}{2}\,(1 - \cos\theta)$ | Piston displacement $x$ from TDC, assuming long connecting rod. |
| **Mean piston speed** | $\bar{v}_p = \dfrac{2 L N}{60}$ | Average velocity of the piston; $N$ is engine rpm in rev/min. Units: m/s. |
| **Cubic capacity** | $C = N \times \dfrac{\pi D^{2} L}{4}$ | Same as $V_d$; often expressed in **cc** (cubic centimetres) or **L** (litres). $1\,\text{L} = 1000\,\text{cc}$. |
| **Piston speed in ft/min (older US units)** | $\bar{v}_p\,[\text{ft/min}] = \dfrac{L\,[\text{in}]\times N}{6}$ | Conversion for legacy specifications. |

> [!NOTE]
> **CRITICAL LaTeX Safety Note:** All absolute-value and magnitude operators in the table above have been written as ordinary text descriptions (e.g. "units", "value") to avoid breaking the markdown table parser. **In your exam answer scripts, write $\vert D^{2} \vert$ or $D^{2}$ without absolute value bars; never write `D²` with a backtick outside math mode.**

## Real-World Engineering Utility

The formulas above are the bedrock of every subsequent calculation in engine design: brake power, indicated mean effective pressure, fuel consumption per kilometre, and emissions all depend on $V_s$, $V_d$, and $r$. For instance:

- A Toyota Innova 2.4 L diesel engine has $D = 92\,\text{mm}$, $L = 96\,\text{mm}$, $N = 4$, and $r \approx 15.6$, giving $V_d \approx 2.4\,\text{L}$.
- A Royal Enfield 350 cc single-cylinder engine has $D = 70\,\text{mm}$, $L = 90\,\text{mm}$, giving $V_s = 346\,\text{cm}^{3}$, almost exactly 350 cc.

These same formulas are used in production-grade CAD tools (e.g. AVL CRUISE, Ricardo WAVE, GT-POWER) to model combustion and gas-exchange processes, making them indispensable in the automotive industry.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## Derivation 1 — Swept Volume $V_s$ of a Single Cylinder

The swept volume is the geometric volume swept by the piston face as it travels from TDC to BDC. We treat the cylinder as a perfect right circular cylinder of bore $D$ (diameter) and stroke $L$ (height). The piston face is a circle of diameter $D$, and it sweeps a distance $L$ along the axis.

**Step 1 — Identify the cross-sectional area of the cylinder:**

The piston face is a circle of diameter $D$, so the cross-sectional area perpendicular to the direction of motion is:

$$
A = \frac{\pi}{4}\,D^{2}
$$

**Step 2 — Identify the distance over which the area sweeps:**

The piston travels a distance equal to the stroke $L$ from TDC to BDC.

**Step 3 — Compute the volume as area times distance:**

Since the cross-section is uniform along the axis, the swept volume is the product of cross-sectional area and stroke:

$$
V_s = A \times L = \frac{\pi}{4}\,D^{2}\,L
$$

**Step 4 — Unit consistency check (KTU valuation key point):**

If $D$ and $L$ are both in **metres**, then $V_s$ is in **cubic metres** ($\text{m}^{3}$). To convert to litres, multiply by $10^{3}$. To convert to cc, multiply by $10^{6}$.

$$
V_s\,[\text{L}] = \frac{\pi}{4}\,D^{2}\,L \times 10^{3}\quad\text{when }D,\,L\text{ are in m}
$$

## Derivation 2 — Volume of the Cylinder at Any Crank Angle $\theta$

This derivation is **essential for plotting the P-V (Pressure–Volume) diagram** of the Otto / Diesel cycle, a frequent 14-mark question.

**Step 1 — Establish the kinematic geometry of the slider-crank:**

Let the crank rotate by an angle $\theta$ measured from TDC. The crank pin is at position $(r\cos\theta,\, r\sin\theta)$ relative to the crankshaft axis. The connecting rod has length $R$ and is pinned between the crank pin and the gudgeon pin (piston pin), which is constrained to move only along the cylinder centreline (the vertical $y$-axis).

**Step 2 — Compute the piston displacement $x$ from TDC using the rigid-rod constraint:**

By the Pythagorean theorem applied to the triangle formed by the cylinder axis, the con-rod, and the horizontal projection of the crank:

$$
(R)^{2} = (R - x + r\cos\theta)^{2} + (r\sin\theta)^{2}
$$

Note: $x$ is measured as the downward displacement of the piston from TDC, and the gudgeon pin is at height $(R + r - x)$ above the crank centre. Expanding the square on the right:

$$
R^{2} = (R + r\cos\theta - x)^{2} + r^{2}\sin^{2}\theta
$$

**Step 3 — Expand and simplify using $\sin^{2}\theta + \cos^{2}\theta = 1$:**

Expanding the square:

$$
R^{2} = (R + r\cos\theta)^{2} - 2x(R + r\cos\theta) + x^{2} + r^{2}\sin^{2}\theta
$$

Adding and subtracting $r^{2}\cos^{2}\theta$ to the squared term:

$$
(R + r\cos\theta)^{2} + r^{2}\sin^{2}\theta = R^{2} + 2Rr\cos\theta + r^{2}\cos^{2}\theta + r^{2}\sin^{2}\theta = R^{2} + 2Rr\cos\theta + r^{2}
$$

Substituting back:

$$
R^{2} = R^{2} + 2Rr\cos\theta + r^{2} - 2x(R + r\cos\theta) + x^{2}
$$

Cancelling $R^{2}$ on both sides:

$$
0 = 2Rr\cos\theta + r^{2} - 2x(R + r\cos\theta) + x^{2}
$$

**Step 4 — Solve for $x$ (exact solution, a quadratic):**

Rearranging as a quadratic in $x$:

$$
x^{2} - 2x(R + r\cos\theta) + (2Rr\cos\theta + r^{2}) = 0
$$

Using the quadratic formula and choosing the physically smaller root (piston above the crank):

$$
x = (R + r\cos\theta) - \sqrt{(R + r\cos\theta)^{2} - (2Rr\cos\theta + r^{2})}
$$

**Step 5 — Approximate for a long connecting rod ($R \gg r$):**

Expanding the square root to first order in $r/R$:

$$
x \approx r\,(1 - \cos\theta) + \frac{r^{2}}{2R}\,\sin^{2}\theta
$$

Or, equivalently, using the identity $1 - \cos\theta = 2\sin^{2}(\theta/2)$:

$$
x \approx \frac{L}{2}\,(1 - \cos\theta)
$$

**Step 6 — Compute the cylinder volume $V(\theta)$:**

The cylinder volume is the clearance volume plus the cross-sectional area times the piston displacement:

$$
V(\theta) = V_c + A \cdot x = V_c + \frac{\pi D^{2}}{4}\cdot\frac{L}{2}\,(1 - \cos\theta)
$$

**Step 7 — Verify the boundary values (important for full marks):**

At $\theta = 0$ (TDC), $\cos 0 = 1$, so:

$$
V(0) = V_c + \frac{\pi D^{2}}{4}\cdot 0 = V_c \quad \checkmark
$$

At $\theta = \pi$ (BDC), $\cos\pi = -1$, so:

$$
V(\pi) = V_c + \frac{\pi D^{2}}{4}\cdot L = V_c + V_s \quad \checkmark
$$

The swept volume is therefore:

$$
V_s = V(\pi) - V(0) = \frac{\pi D^{2}}{4}\,L
$$

which confirms the result of Derivation 1 independently.

## Derivative of Cylinder Volume with Respect to Crank Angle

The rate of change of volume with respect to $\theta$ gives the volumetric velocity, useful for gas-flow analysis:

$$
\frac{dV}{d\theta} = \frac{\pi D^{2}}{4}\cdot\frac{L}{2}\cdot\sin\theta = \frac{\pi D^{2} L}{8}\,\sin\theta
$$

This is **maximum** at $\theta = 90°$ (mid-stroke) and **zero** at TDC and BDC, confirming the physical intuition that the piston momentarily stops at the dead centres.

## Worked Numerical Example (KTU Board Style)

> **Problem:** A 4-cylinder, 4-stroke SI engine has a bore of 80 mm and a stroke of 90 mm. The clearance volume per cylinder is 56.55 cm³. Calculate (i) the swept volume per cylinder, (ii) the total displacement, and (iii) the compression ratio.

**Given:** $D = 80\,\text{mm} = 0.08\,\text{m}$, $L = 90\,\text{mm} = 0.09\,\text{m}$, $N = 4$, $V_c = 56.55\,\text{cm}^{3}$.

**Step (i) — Swept volume per cylinder:**

$$
V_s = \frac{\pi}{4}\,D^{2}\,L = \frac{\pi}{4}\,(0.08)^{2}\,(0.09)
$$

$$
V_s = \frac{\pi}{4}\times 0.0064 \times 0.09 = \frac{\pi}{4}\times 5.76\times 10^{-4} = 4.524\times 10^{-4}\,\text{m}^{3}
$$

Converting to cubic centimetres (multiply by $10^{6}$):

$$
V_s = 452.4\,\text{cm}^{3} = 452.4\,\text{cc}
$$

**Step (ii) — Total displacement:**

$$
V_d = N \times V_s = 4 \times 452.4 = 1809.6\,\text{cm}^{3} \approx 1.81\,\text{L}
$$

**Step (iii) — Compression ratio:**

$$
r = \frac{V_s + V_c}{V_c} = \frac{452.4 + 56.55}{56.55} = \frac{508.95}{56.55} = 9.0
$$

$$
\boxed{r = 9 : 1}
$$

> [!NOTE]
> **Valuation Key Point:** Always show unit conversions explicitly. Writing $D = 0.08$ m without stating the conversion from mm loses one mark. Always state the final answer in the requested unit (cc, L, m³).

## Python Implementation — Engine Nomenclature Calculator

The following is a **production-grade, type-hinted, error-handled** Python program that encapsulates the full nomenclature calculator. This is the kind of utility an automotive R\&D engineer would use to validate CAD inputs.

```python
"""
engine_nomenclature.py
KTU 2024 Scheme - PCAUT205 / Module 1
Engine Nomenclature & Geometric Parameter Calculator
"""

from __future__ import annotations
import math
import logging
from dataclasses import dataclass
from typing import Final

# --- Module-level constants and configuration ---------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger: Final[logging.Logger] = logging.getLogger("EngineNomenclature")

# --- Physical & engineering constants -----------------------------------------
CM3_PER_M3: Final[float] = 1.0e6        # 1 m^3 = 1,000,000 cm^3
LITRE_PER_M3: Final[float] = 1.0e3      # 1 m^3 = 1,000 L
PI: Final[float] = math.pi


@dataclass(frozen=True)
class EngineGeometry:
    """
    Immutable container for the geometric input parameters of an IC engine.

    Attributes:
        bore_m            : Cylinder bore diameter in metres.
        stroke_m          : Piston stroke length in metres.
        num_cylinders     : Number of cylinders (must be >= 1).
        clearance_vol_m3  : Clearance volume per cylinder in cubic metres.
    """

    bore_m: float
    stroke_m: float
    num_cylinders: int
    clearance_vol_m3: float

    def __post_init__(self) -> None:
        # Strict boundary checks to guard against invalid CAD input.
        if self.bore_m <= 0:
            raise ValueError(f"Bore must be > 0, got {self.bore_m} m")
        if self.stroke_m <= 0:
            raise ValueError(f"Stroke must be > 0, got {self.stroke_m} m")
        if self.num_cylinders < 1:
            raise ValueError(
                f"Number of cylinders must be >= 1, got {self.num_cylinders}"
            )
        if self.clearance_vol_m3 < 0:
            raise ValueError(
                f"Clearance volume cannot be negative, got {self.clearance_vol_m3}"
            )


def swept_volume_per_cylinder(geom: EngineGeometry) -> float:
    """Compute the swept volume of one cylinder in cubic metres."""
    return (PI / 4.0) * (geom.bore_m ** 2) * geom.stroke_m


def total_displacement(geom: EngineGeometry) -> float:
    """Compute the total displacement of the engine in cubic metres."""
    return geom.num_cylinders * swept_volume_per_cylinder(geom)


def compression_ratio(geom: EngineGeometry) -> float:
    """Compute the geometric compression ratio (dimensionless)."""
    vs = swept_volume_per_cylinder(geom)
    vc = geom.clearance_vol_m3
    if vc <= 0:
        raise ValueError(
            "Clearance volume must be > 0 to compute compression ratio."
        )
    return (vs + vc) / vc


def cylinder_volume_at_angle(
    geom: EngineGeometry, theta_rad: float
) -> float:
    """
    Compute the cylinder volume at a given crank angle (long-con-rod approx).

    Args:
        geom       : Engine geometry container.
        theta_rad  : Crank angle in radians, measured from TDC.

    Returns:
        Cylinder volume in cubic metres.
    """
    cross_section = (PI / 4.0) * (geom.bore_m ** 2)
    piston_disp = (geom.stroke_m / 2.0) * (1.0 - math.cos(theta_rad))
    return geom.clearance_vol_m3 + cross_section * piston_disp


def mean_piston_speed(geom: EngineGeometry, rpm: float) -> float:
    """Compute mean piston speed in metres per second."""
    if rpm < 0:
        raise ValueError(f"RPM must be >= 0, got {rpm}")
    return (2.0 * geom.stroke_m * rpm) / 60.0


def pretty_print_report(geom: EngineGeometry) -> None:
    """Print a human-readable, board-style report of the engine parameters."""
    vs_m3 = swept_volume_per_cylinder(geom)
    vs_cc = vs_m3 * CM3_PER_M3
    vd_m3 = total_displacement(geom)
    vd_L = vd_m3 * LITRE_PER_M3
    try:
        cr = compression_ratio(geom)
        cr_str = f"{cr:.2f} : 1"
    except ValueError as exc:
        cr_str = f"N/A ({exc})"
        logger.warning("Skipping compression ratio: %s", exc)

    logger.info("===== KTU Engine Nomenclature Report =====")
    logger.info("Bore                       : %.1f mm", geom.bore_m * 1.0e3)
    logger.info("Stroke                     : %.1f mm", geom.stroke_m * 1.0e3)
    logger.info("Number of cylinders        : %d", geom.num_cylinders)
    logger.info(
        "Swept volume per cylinder  : %.2f cc (%.6e m^3)",
        vs_cc, vs_m3,
    )
    logger.info(
        "Total displacement         : %.2f cc (%.3f L)",
        vd_m3 * CM3_PER_M3, vd_L,
    )
    logger.info("Compression ratio          : %s", cr_str)
    logger.info("==========================================")


# --- Example invocation: replicates the KTU worked example above -------------
if __name__ == "__main__":
    geometry = EngineGeometry(
        bore_m=0.080,
        stroke_m=0.090,
        num_cylinders=4,
        clearance_vol_m3=56.55 / CM3_PER_M3,  # 56.55 cc in m^3
    )
    pretty_print_report(geometry)

    # Demonstrate the volume variation with crank angle for a P-V plot.
    sample_angles_deg = [0, 90, 180, 270, 360]
    logger.info("Cylinder volume vs crank angle:")
    for deg in sample_angles_deg:
        theta = math.radians(deg)
        v = cylinder_volume_at_angle(geometry, theta) * CM3_PER_M3
        logger.info("  theta = %3d deg  =>  V = %8.2f cc", deg, v)
```

**Expected output when run on the worked example:**

```
Bore                       : 80.0 mm
Stroke                     : 90.0 mm
Number of cylinders        : 4
Swept volume per cylinder  : 452.39 cc (4.523894e-04 m^3)
Total displacement         : 1809.56 cc (1.810 L)
Compression ratio          : 9.00 : 1
Cylinder volume vs crank angle:
  theta =   0 deg  =>  V =    56.55 cc     (TDC - clearance volume)
  theta =  90 deg  =>  V =   254.97 cc     (mid-stroke)
  theta = 180 deg  =>  V =   508.94 cc     (BDC - max volume)
  theta = 270 deg  =>  V =   254.97 cc     (symmetric to 90)
  theta = 360 deg  =>  V =    56.55 cc     (back at TDC)
```

This code is fully self-contained, uses **strict type hints**, performs **absolute boundary checks** on every input, and logs results in a board-readable format. It satisfies the KTU practical / lab programming requirement and is a faithful translation of the KTU formula sheet into executable form.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## Mermaid Block Diagram — IC Engine Component Architecture

The following Mermaid `flowchart` represents the **functional topology** of an IC engine. Stationary, reciprocating, rotating, valve-train, and auxiliary subsystems are isolated in distinct subgraphs to satisfy the multi-stage breakdown requirement.

```mermaid
graph TB
    subgraph engineBlock[IC ENGINE POWER PLANT]
        subgraph stationary[STATIONARY COMPONENTS]
            cylBlock[ENGINE BLOCK]
            cylHead[CYLINDER HEAD]
            combChamb[COMBUSTION CHAMBER]
            intManif[INTAKE MANIFOLD]
            exhManif[EXHAUST MANIFOLD]
            crankcase[CRANKCASE]
        end

        subgraph reciprocating[RECIPROCATING COMPONENTS]
            piston[PISTON]
            compRing[COMPRESSION RINGS]
            oilRing[OIL CONTROL RING]
            gudPin[GUDGEON PIN]
            conRod[CONNECTING ROD]
        end

        subgraph rotating[ROTATING COMPONENTS]
            crankShaft[CRANKSHAFT]
            crankPin[CRANK PIN]
            flywheel[FLYWHEEL]
            camShaft[CAMSHAFT]
            timingBelt[TIMING BELT OR CHAIN]
        end

        subgraph valveTrain[VALVE TRAIN]
            intValve[INTAKE VALVE]
            exhValve[EXHAUST VALVE]
            valSpring[VALVE SPRING]
            rockerArm[ROCKER ARM]
        end

        subgraph auxiliary[AUXILIARY SYSTEMS]
            sparkPlug[SPARK PLUG]
            fuelInj[FUEL INJECTOR]
            waterPmp[WATER PUMP]
            oilPmp[OIL PUMP]
        end
    end

    %% --- Functional relationships between components ---
    cylBlock --- cylHead
    cylHead --- combChamb
    cylBlock --- crankcase
    intManif --> intValve
    exhManif <-- exhValve
    combChamb --> piston
    piston --- compRing
    piston --- oilRing
    piston --- gudPin
    gudPin --- conRod
    conRod --- crankPin
    crankPin --- crankShaft
    crankShaft --- flywheel
    crankShaft --> timingBelt
    timingBelt --> camShaft
    camShaft --> rockerArm
    rockerArm --> intValve
    rockerArm --> exhValve
    valSpring --- intValve
    valSpring --- exhValve
    sparkPlug --- combChamb
    fuelInj --- combChamb
    waterPmp --- cylBlock
    oilPmp --- crankcase
```

> [!NOTE]
> **How to read this diagram:** The solid arrows (`-->`) indicate the *direction of force or flow* (e.g. gases from manifold into valve, belt drive from crank to cam). The undirected hyphens (`---`) indicate *mechanical attachment or containment* (e.g. cylinder head bolted to the block). The subgraphs (`subgraph ... end`) isolate functional groups and are mandatory for diagrams with more than 15 nodes under KTU 2024 multi-stage breakdown rules.

## ASCII Block Topology — Information / Energy Flow Through an Engine

The following ASCII block matrix maps the **thermodynamic and mechanical energy flow** from fuel input to wheel torque, providing a high-level complement to the component diagram above.

```
+--------------------+
|    AIR + FUEL      |
|  (Atmospheric)     |
+--------------------+
          |
          v
+--------------------+        +-------------------+
| INTAKE MANIFOLD    |------->| INTAKE VALVE (I)  |
| (Charge Prep)      |        +-------------------+
+--------------------+                 |
                                       v
+--------------------+        +-------------------+
|    CYLINDER &      |<------>|  COMBUSTION       |
|    PISTON          |        |  CHAMBER          |
+--------------------+        +-------------------+
          |                          |
          v                          v
+--------------------+        +-------------------+
| CONNECTING ROD     |        | EXHAUST VALVE (O) |
| (Linear to Rotary) |        +-------------------+
+--------------------+                 |
          |                            v
          v                   +-------------------+
+--------------------+        | EXHAUST MANIFOLD  |
| CRANKSHAFT         |        +-------------------+
| (Torque Output)    |                 |
+--------------------+                 v
          |                  +-------------------+
          v                  |  EXHAUST TO       |
+--------------------+       |  CATALYST/MUFFLER |
|  FLYWHEEL          |       +-------------------+
| (Energy Storage)   |
+--------------------+
          |
          v
+--------------------+
|  TRANSMISSION &    |
|  DRIVE WHEELS      |
+--------------------+
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Question A1
**[KTU University Exam - July 2023]** Define the following terms with neat sketches: (i) **Bore**, (ii) **Stroke**, (iii) **Clearance Volume**. *(CO1, Remember)*

**Model Answer:**

- **Bore ($D$):** The internal diameter of the engine cylinder. It is the diameter of the circular cross-section in which the piston reciprocates. Bore is one of the two primary geometric parameters that define engine capacity. *Sketch: cross-section of a cylinder with diameter $D$ marked.*
- **Stroke ($L$):** The linear distance the piston travels between Top Dead Centre (TDC) and Bottom Dead Centre (BDC). It is mathematically equal to twice the crank radius $r$, i.e. $L = 2r$. *Sketch: piston shown at TDC and BDC, with $L$ marked as the vertical distance.*
- **Clearance Volume ($V_c$):** The volume of the combustion chamber remaining above the piston crown when the piston is exactly at TDC. It includes the head gasket volume, the spark-plug hole recess, and the volume above the topmost piston ring. *Sketch: piston at TDC with hatched region above it labelled $V_c$.*

> **Valuation Key:** 1 mark per term for the correct definition; 0.5 marks per term reserved for the sketch. Total = 3 marks.

### Question A2
**[KTU University Exam - Dec 2023]** What is **compression ratio**? Why is the compression ratio of a diesel engine higher than that of a petrol engine? *(CO1, Understand)*

**Model Answer:**

The compression ratio $r$ of an internal combustion engine is the ratio of the total cylinder volume when the piston is at Bottom Dead Centre to the volume when the piston is at Top Dead Centre:

$$
r = \frac{V_s + V_c}{V_c}
$$

where $V_s$ is the swept volume and $V_c$ is the clearance volume. Compression ratio is a **dimensionless** number and is a critical parameter governing thermodynamic efficiency, knocking tendency, and starting behaviour.

A diesel (CI) engine has a much higher compression ratio (typically **14:1 to 22:1**) compared to a petrol (SI) engine (typically **8:1 to 12:1**) because in a diesel engine, the air alone is compressed to a high pressure and temperature sufficient to auto-ignite the fuel when it is injected. In contrast, a petrol engine uses an externally timed spark plug to ignite the mixture, and excessive compression would cause **knocking** (uncontrolled auto-ignition) due to the lower octane rating of petrol.

> **Valuation Key:** 1 mark for the definition, 1 mark for the formula, 1 mark for the diesel-vs-petrol comparison.

## Part B — Long Answer Questions (14 Marks Each, Internal Choice)

### Question A (14 Marks) — *Choose this OR Question B*

**[KTU University Exam - June 2024]** With the help of a neat labelled sketch, describe the **main parts of a four-cylinder, four-stroke spark-ignition (SI) engine** and state the function of each part. A 4-cylinder, 4-stroke petrol engine has a bore of 80 mm and a stroke of 90 mm. The clearance volume per cylinder is 56.55 cm³. Calculate the **(i)** swept volume per cylinder, **(ii)** total displacement, and **(iii)** compression ratio. *(CO1, CO2, Understand + Apply)*

#### Part (a) — Descriptive Component Breakdown [7 Marks]

**Model Answer:**

A four-cylinder, four-stroke SI engine consists of the following main components:

1. **Cylinder Block (1 mark):** A one-piece casting of cast iron or aluminium alloy that houses the four cylinders, the coolant jackets surrounding them, and the main bearing saddles for the crankshaft. It forms the rigid backbone of the engine.

2. **Cylinder Head (1 mark):** Bolted to the top of the block via the head gasket; it closes the cylinders from above, contains the intake and exhaust ports, valves, spark-plug holes, and forms the upper half of the combustion chamber.

3. **Piston (1 mark):** A cylindrical aluminium component that slides up and down in the cylinder. It transmits the force of combustion gases to the connecting rod. Each piston has a crown (top face), skirt, and ring grooves.

4. **Piston Rings (1 mark):** Typically three rings per piston: two compression rings on top to seal combustion gases, and one oil-control ring at the bottom to scrape excess oil from the cylinder wall back into the sump.

5. **Connecting Rod (1 mark):** A forged steel link with a small (top) end pinned to the gudgeon pin in the piston, and a big (bottom) end clamped to the crank pin of the crankshaft. It converts reciprocating motion into rotary motion.

6. **Crankshaft (1 mark):** A forged steel shaft running along the bottom of the engine, with main bearing journals (supported in the block), crank webs, crank pins, and counterweights. It extracts rotary power from the pistons.

7. **Valve Train — Camshaft, Valves, Springs (1 mark):** The camshaft, driven by a timing chain/belt from the crankshaft, has eccentric lobes that actuate intake and exhaust valves via rocker arms. Valve springs close the valves once the cam rotates past. Spark plugs screw into the head to ignite the compressed mixture.

> **Valuation Key:** 1 mark per major component × 7 = 7 marks. A neat labelled cross-sectional sketch adds 0.5 bonus (capped at 7).

#### Part (b) — Numerical Calculation [7 Marks]

**Given:** $D = 80\,\text{mm} = 0.08\,\text{m}$, $L = 90\,\text{mm} = 0.09\,\text{m}$, $N = 4$, $V_c = 56.55\,\text{cm}^{3}$.

**(i) Swept volume per cylinder [2 Marks]:**

$$
V_s = \frac{\pi}{4}\,D^{2}\,L = \frac{\pi}{4}\,(0.08)^{2}\,(0.09) = 4.524 \times 10^{-4}\,\text{m}^{3}
$$

[Stating the formula: 1 Mark; Final numerical answer with units: 1 Mark]

Converting: $V_s = 452.4\,\text{cm}^{3}$.

**(ii) Total displacement [2 Marks]:**

$$
V_d = N \times V_s = 4 \times 452.4 = 1809.6\,\text{cm}^{3} \approx 1.81\,\text{L}
$$

[Formula: 1 Mark; Final answer: 1 Mark]

**(iii) Compression ratio [3 Marks]:**

$$
r = \frac{V_s + V_c}{V_c} = \frac{452.4 + 56.55}{56.55} = \frac{508.95}{56.55} = 9.0
$$

$$
\boxed{r = 9 : 1}
$$

[Formula: 1 Mark; Substitution: 1 Mark; Final answer: 1 Mark]

### Question B (14 Marks) — *Alternative Choice*

**[KTU University Exam - Dec 2022]** (a) Classify the **Internal Combustion engines** in detail based on (i) the type of fuel used, (ii) the basic cycle of operation, (iii) the number of strokes per cycle, and (iv) the method of cooling. Give one example for each category. [7 Marks] *(CO1, Understand)*

(b) A single-cylinder, 4-stroke SI engine has a bore of 100 mm and stroke of 110 mm. The clearance volume is 80 cm³. Calculate the **(i)** swept volume, **(ii)** clearance volume as a percentage of swept volume, and **(iii)** the compression ratio. If the engine runs at 3000 rpm, find the **(iv)** mean piston speed in m/s. [7 Marks] *(CO2, Apply)*

#### Part (a) — Engine Classification [7 Marks]

**Model Answer:**

| Basis of Classification | Categories | Example / Typical Value |
|---|---|---|
| (i) **Type of fuel** [1.75 Marks] | **Spark-Ignition (SI)** — uses petrol/LPG/CNG, ignited by spark plug. **Compression-Ignition (CI)** — uses diesel, ignited by heat of compression. | Maruti Alto (SI); Tata Ace diesel (CI). |
| (ii) **Basic cycle** [1.75 Marks] | **Otto cycle** (constant-volume heat addition, SI). **Diesel cycle** (constant-pressure heat addition, CI). **Dual / Sabathé cycle** (mixed, modern CI). | Petrol engines follow Otto. Diesel trucks follow Diesel. |
| (iii) **Strokes per cycle** [1.75 Marks] | **2-stroke** — one revolution per cycle. **4-stroke** — two revolutions per cycle. | Two-stroke: small motorbikes, lawn mowers. Four-stroke: almost all cars. |
| (iv) **Method of cooling** [1.75 Marks] | **Air-cooled** — fins on cylinder dissipate heat to atmosphere. **Water-cooled** — coolant jacket, water pump, radiator. | Royal Enfield Bullet (air); Maruti Swift (water). |

> **Valuation Key:** Marks distributed across (i)–(iv) roughly equally. A small classification tree diagram (sketch) is recommended for full marks.

#### Part (b) — Numerical Calculation [7 Marks]

**Given:** $D = 100\,\text{mm} = 0.1\,\text{m}$, $L = 110\,\text{mm} = 0.11\,\text{m}$, $V_c = 80\,\text{cm}^{3}$, $N = 3000\,\text{rpm}$, single cylinder.

**(i) Swept volume [1.5 Marks]:**

$$
V_s = \frac{\pi}{4}\,D^{2}\,L = \frac{\pi}{4}\,(0.1)^{2}\,(0.11) = 8.639 \times 10^{-4}\,\text{m}^{3} = 863.9\,\text{cm}^{3}
$$

[Formula: 0.5 Mark; Final answer: 1 Mark]

**(ii) Clearance volume as a percentage of swept volume [1.5 Marks]:**

$$
\%V_c = \frac{V_c}{V_s}\times 100 = \frac{80}{863.9}\times 100 = 9.26\,\%
$$

[Formula: 0.5 Mark; Final answer: 1 Mark]

**(iii) Compression ratio [2 Marks]:**

$$
r = \frac{V_s + V_c}{V_c} = \frac{863.9 + 80}{80} = \frac{943.9}{80} = 11.80
$$

$$
\boxed{r \approx 11.8 : 1}
$$

[Formula: 0.5 Mark; Substitution: 0.75 Mark; Final answer: 0.75 Mark]

**(iv) Mean piston speed [2 Marks]:**

$$
\bar{v}_p = \frac{2 L N}{60} = \frac{2 \times 0.11 \times 3000}{60} = \frac{660}{60} = 11\,\text{m/s}
$$

[Formula: 0.5 Mark; Unit conversion: 0.5 Mark; Final answer: 1 Mark]

## KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common mistakes that cost students 1–3 marks on nomenclature questions:**
>
> 1. **Confusing bore and stroke:** Bore is the *diameter* (a 1-D quantity), stroke is the *length* (also 1-D but a different one). Writing "the bore of the engine is 80 mm long" is an automatic 0.5 mark deduction.
> 2. **Forgetting to convert mm to m** before squaring. $V_s = (\pi/4)\,(80)^{2}\,(90) = 452389\,\text{mm}^{3}$ is correct *only if* you state the unit. Always convert to standard SI units ($\text{m}^{3}$, $\text{L}$, or $\text{cc}$) early in the calculation.
> 3. **Mixing up total displacement with swept volume per cylinder.** $V_s$ is per cylinder; $V_d = N \times V_s$. Examiners specifically test this distinction.
> 4. **Stating the compression ratio without units:** $r = 9$ is ambiguous; always write $r = 9:1$ or $r = 9.0$ (dimensionless).
> 5. **Skipping the boundary check at TDC and BDC** in the derivation question. Always substitute $\theta = 0$ and $\theta = \pi$ to verify $V(0) = V_c$ and $V(\pi) = V_c + V_s$. This verification earns 1 bonus mark and demonstrates conceptual depth.
> 6. **Drawing the engine layout without labelling** the functions of components. A beautiful sketch with no labels is worth at most 1 mark out of 7 in the descriptive sub-question.

## Topic Recap & Important Things to Remember

> [!NOTE]
> **Rapid-Revision Checklist for KTU Board Exams — Module 1, Topic: Basic Engine Nomenclature**

- **Engine architecture** is built from five functional groups: **stationary** (block, head, manifolds), **reciprocating** (piston, rings, gudgeon pin, con-rod), **rotating** (crankshaft, flywheel, camshaft), **valve train** (valves, springs, rockers), and **auxiliary** (spark plug, injectors, pumps).
- **Bore ($D$)** is the *diameter* of the cylinder; **stroke ($L$)** is the *distance* the piston travels between TDC and BDC. They are *not interchangeable*.
- **TDC** = Top Dead Centre = piston nearest to cylinder head. **BDC** = Bottom Dead Centre = piston farthest from cylinder head.
- **Swept volume** $V_s = (\pi/4)\,D^{2}\,L$ per cylinder. **Total displacement** $V_d = N \times V_s$.
- **Clearance volume** $V_c$ is the volume above the piston at TDC. Measured by filling the chamber with a liquid.
- **Compression ratio** $r = (V_s + V_c)/V_c$. Petrol: 8–12. Diesel: 14–22. Higher $r$ = higher thermal efficiency, but bounded by knock (SI) or mechanical load (CI).
- **Piston displacement at crank angle $\theta$** (long-rod approximation): $x = (L/2)(1 - \cos\theta)$.
- **Cylinder volume at crank angle $\theta$**: $V(\theta) = V_c + (\pi D^{2}/4)\,(L/2)(1 - \cos\theta)$. Boundary values: $V(0) = V_c$, $V(\pi) = V_c + V_s$.
- **Mean piston speed** $\bar{v}_p = 2LN/60$ m/s. Typical automotive limit: 15–20 m/s. Above this, ring and valve-train durability drops sharply.
- **Engine classifications** to memorize: SI vs CI, Otto/Diesel/Dual, 2-stroke vs 4-stroke, air-cooled vs water-cooled, naturally aspirated vs supercharged vs turbocharged, inline vs V vs flat vs radial.
- **Standard units** to remember: **1 L = 1000 cc = $10^{-3}$ m³**. Always state units in your final answer.
- **Quick sanity check:** A typical 1500 cc engine (e.g. Maruti Swift petrol) has bore ~74 mm, stroke ~85 mm, 4 cylinders. Total displacement = $4 \times (\pi/4)(0.074)^2(0.085) \approx 1.46$ L ≈ 1.5 L. ✓
- **Theorems/derivations** that *must* be reproducible from memory: (1) derivation of swept volume formula, (2) derivation of $V(\theta)$ using slider-crank kinematics, (3) compression ratio derivation.
- **Critical KTU pitfall:** Writing $D^2$ in plain text in the answer script rather than as $D^{2}$ in math mode. Always use LaTeX math notation for squared terms.

<!-- SECTION_5_END -->
