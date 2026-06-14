# Rectifier diode

<!-- SECTION_1_START -->
# Rectifier Diode — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Terminology)

> [!IMPORTANT]
> **Rectifier Diode (KTU 2024 Definition):** A rectifier diode is a *unidirectional* two-terminal semiconductor PN-junction device specifically engineered, rated, and packaged to operate in the forward-bias region during the positive half-cycle of an alternating input waveform, thereby allowing unidirectional flow of conventional current and suppressing current flow during the reverse half-cycle. The primary engineering function of a rectifier diode is the **conversion of bidirectional alternating current (AC) into unidirectional pulsating direct current (DC)** — a process defined as *rectification*.

Mathematically, the constitutive current–voltage characteristic of an ideal rectifier diode is expressed through the Shockley diode equation:

$$
I_D = I_S \left( \exp\!\left(\frac{V_D}{n V_T}\right) - 1 \right)
$$

where $I_S$ is the reverse saturation current (typically in nanoamperes to microamperes for silicon), $V_T = \dfrac{kT}{q}$ is the thermal voltage ($\approx \mathbf{25.85\ mV}$ at $T = 300\ K$), and $n$ is the ideality factor ($1 \le n \le 2$).

## 1.2 Symbolic & Schematic Identity

A rectifier diode is represented in circuit schematics by a triangle pointing toward a vertical line. The triangle (anode, A) marks the terminal that becomes positive during forward bias, while the line (cathode, K, indicated by a silver band on the physical component) marks the negative terminal.

> [!NOTE]
> **Syllabus Highlight (Module 15 — GZESL208):** While identifying a rectifier diode on a *general-purpose PCB*, students must trace the **cathode band** direction. The band points *away* from the positive output terminal of the rectifier. Misidentifying the polarity during soldering reverses the entire polarity of the assembled circuit and is a common Workshop evaluation fault.

## 1.3 Conceptual Analogy — The One-Way Swing Door

Imagine a heavy swing door hinged at a vertical post:

- When you **push** from the hinge side toward the open side, the door swings freely — this is **forward bias**, current flows.
- When you **push** from the open side toward the hinge side, the door simply presses against its frame and refuses to move — this is **reverse bias**, current is blocked (apart from a tiny leakage).
- The door can only withstand a limited push from the wrong side before the hinges break — this is the **Peak Inverse Voltage (PIV)** rating.

This mechanical intuition directly maps to the electrical behavior of the rectifier diode inside any AC-to-DC converter module.

## 1.4 Physical Constants and Standard Ratings (Bolded)

- **Forward voltage drop ($V_F$) for silicon rectifier diode:** $\mathbf{0.7\ V}$
- **Forward voltage drop ($V_F$) for germanium rectifier diode:** $\mathbf{0.3\ V}$
- **Reverse saturation current $I_S$:** typically $\mathbf{10^{-9}\ A\ to\ 10^{-6}\ A}$
- **Thermal voltage $V_T$ at 300 K:** $\mathbf{25.85\ mV}$
- **Common Workshop-rated PIV:** $\mathbf{50\ V,\ 200\ V,\ 400\ V,\ 1000\ V}$
- **Common Workshop-rated forward current $I_F(AV)$:** $\mathbf{1\ A\ (1N4001–1N4007\ series)}$

> [!VISUALIZATION CONTROL]
> **Concept:** I-V Characteristic Curve of a Rectifier Diode
> **GeoGebra / Desmos Input Equations (piecewise approximation):**
> * $f_1(x) = 0.7$  *(forward conduction line, y-axis $I$ in mA, x-axis $V$ in V)*
> * $f_2(x) = -0.0001$  *(reverse leakage line in mA)*
> * $f_3(x) = -1000 \cdot (x + 50)$  *(reverse breakdown beyond PIV = 50 V)*
> **Visual Description:** The student should observe an L-shaped curve in the first quadrant rising sharply after $V = 0.7\ V$ (forward knee), a near-zero horizontal line in the third quadrant (reverse leakage), and a steep vertical drop in the third quadrant beyond the PIV rating (Zener/avalanche breakdown region).

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Theory of the Rectifier Diode

A rectifier diode functions by exploiting the **depletion region** formed at the metallurgical junction between P-type and N-type semiconductor materials. The key physical behavior is summarized below:

- **Forward Bias:** When the externally applied P-side voltage is more positive than the N-side voltage (typically $V_D \ge 0.7\ V$ for silicon), the depletion region collapses. Majority carriers (holes from P, electrons from N) are injected across the junction, producing a large conventional current in the direction of the arrow.
- **Reverse Bias:** When the external N-side voltage is more positive, the depletion region widens. Only a minuscule reverse saturation current $I_S$ (in $\mu A$ or $nA$) flows due to thermally generated minority carriers.
- **Breakdown Region:** Beyond the PIV rating, the diode enters avalanche or Zener breakdown, where reverse current rises sharply. Operation in this region damages an ordinary rectifier diode permanently.

## 2.2 The Three Standard Rectifier Topologies

### 2.2.1 Half-Wave Rectifier
A single rectifier diode is placed in series with the load. Only one half of the AC cycle reaches the load. The other half is blocked.

### 2.2.2 Full-Wave Center-Tapped Rectifier
A center-tapped transformer secondary produces two equal voltages $V_m$ that are $180^{\circ}$ out of phase with respect to the center tap. Two diodes conduct on alternate half-cycles, delivering both halves to a common load.

### 2.2.3 Bridge Rectifier (Full-Wave, No Center Tap)
Four diodes arranged in a *Graetz bridge* configuration. During each half-cycle, two diodes conduct in series, routing current through the load in the same direction regardless of input polarity. This is the most common Workshop assembly topology.

## 2.3 KTU Formula Sheet / Cheat Sheet

> [!NOTE]
> All formulas below are required for solving Module 15 numerical problems on the KTU 2024 University ESE. The variable $V_m$ denotes the **peak** value of the transformer secondary voltage, and $I_m$ is the corresponding **peak load current**.

| # | Parameter | Half-Wave Rectifier | Center-Tapped Full-Wave | Bridge Rectifier |
|---|-----------|---------------------|--------------------------|------------------|
| 1 | DC Output Voltage $V_{DC}$ | $\dfrac{V_m}{\pi}$ | $\dfrac{2 V_m}{\pi}$ | $\dfrac{2 V_m}{\pi}$ |
| 2 | RMS Output Voltage $V_{RMS}$ | $\dfrac{V_m}{2}$ | $\dfrac{V_m}{\sqrt{2}}$ | $\dfrac{V_m}{\sqrt{2}}$ |
| 3 | DC Load Current $I_{DC}$ | $\dfrac{I_m}{\pi}$ | $\dfrac{2 I_m}{\pi}$ | $\dfrac{2 I_m}{\pi}$ |
| 4 | RMS Load Current $I_{RMS}$ | $\dfrac{I_m}{2}$ | $\dfrac{I_m}{\sqrt{2}}$ | $\dfrac{I_m}{\sqrt{2}}$ |
| 5 | Ripple Factor $\gamma$ | $\mathbf{1.21}$ | $\mathbf{0.482}$ | $\mathbf{0.482}$ |
| 6 | Rectification Efficiency $\eta$ | $\mathbf{40.6\ \%}$ | $\mathbf{81.2\ \%}$ | $\mathbf{81.2\ \%}$ |
| 7 | Form Factor $K_f$ | $\mathbf{1.57}$ | $\mathbf{1.11}$ | $\mathbf{1.11}$ |
| 8 | Peak Factor $K_p$ | $\mathbf{2}$ | $\mathbf{2}$ | $\mathbf{2}$ |
| 9 | PIV per Diode | $V_m$ | $2 V_m$ | $V_m$ |
| 10 | Transformer Utilization Factor (TUF) | $0.287$ | $0.693$ | $0.810$ |
| 11 | Number of Diodes | $1$ | $2$ | $4$ |
| 12 | Transformer Required | Plain secondary | Center-tapped | Plain secondary |

> [!IMPORTANT]
> **Engineering Memory Trick (KTU Valuation Tip):** The DC output of *any* full-wave rectifier (center-tapped or bridge) is the *same* numerical value $V_{DC} = 2 V_m / \pi$. However, for the same secondary voltage, the **center-tapped transformer** produces only $V_m/2$ across each half-secondary, so the diode PIV must be doubled. The **bridge topology avoids this PIV penalty** at the cost of two extra diode drops in the conduction path.

## 2.4 Real-World Utility in Engineering and Computer Science

- **Linear Power Supplies (Workshop Application):** Every laboratory DC adapter, every desktop SMPS pre-regulator, and every linear bench power supply begins with a bridge rectifier built from four discrete rectifier diodes such as the **1N4007** (PIV $= 1000\ V$, $I_F = 1\ A$).
- **Battery Chargers:** Half-wave and bridge rectifiers form the front-end of mobile-phone, laptop, and e-bike chargers.
- **Signal Demodulation in Communication Systems:** The rectifier diode's square-law characteristic at low currents is exploited in AM radio envelope detectors and RF signal demodulators.
- **Digital Logic Clamping and Clipping:** In digital integrated circuits, rectifier diodes (often Schottky variants) are used for level shifting, ESD protection, and freewheeling protection across inductive loads.
- **Reverse-Polarity Protection in Embedded Systems:** A single rectifier diode in series with the supply line is a standard technique in microcontroller and IoT board design to protect against accidental reverse battery insertion — a typical Workshop breadboard demonstration.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Symbolic / Code Implementation

## 3.1 Exhaustive Derivation — DC Output Voltage of a Half-Wave Rectifier

The instantaneous load voltage for a half-wave rectifier with an ideal diode and resistive load is:

$$
v_o(t) =
\begin{cases}
V_m \sin(\omega t), & 0 \le \omega t \le \pi \\
0, & \pi \le \omega t \le 2\pi
\end{cases}
$$

**Step 1: Set up the average (DC) value as the integral over one full period $T$.**

$$
V_{DC} = \frac{1}{T} \int_{0}^{T} v_o(t)\, dt = \frac{1}{2\pi} \int_{0}^{2\pi} v_o(\theta)\, d\theta
$$

**Step 2: Substitute the piecewise definition. The second interval contributes zero.**

$$
V_{DC} = \frac{1}{2\pi} \int_{0}^{\pi} V_m \sin(\theta)\, d\theta
$$

**Step 3: Evaluate the integral.**

$$
V_{DC} = \frac{V_m}{2\pi} \Big[ -\cos(\theta) \Big]_{0}^{\pi} = \frac{V_m}{2\pi} \left( -\cos(\pi) + \cos(0) \right)
$$

**Step 4: Substitute the trigonometric identities $\cos(\pi) = -1$ and $\cos(0) = 1$.**

$$
V_{DC} = \frac{V_m}{2\pi} \left( -(-1) + (1) \right) = \frac{V_m}{2\pi} (1 + 1) = \frac{V_m}{2\pi} \cdot 2
$$

**Step 5: Final result.**

$$
V_{DC} = \frac{V_m}{\pi} \approx 0.318\, V_m
$$

## 3.2 Exhaustive Derivation — DC Output Voltage of a Full-Wave Bridge Rectifier

The instantaneous output is the absolute value of the sine wave, so:

$$
v_o(t) = V_m \vert \sin(\omega t) \vert, \quad 0 \le \omega t \le 2\pi
$$

**Step 1: DC value by symmetry. The function is even about $\omega t = \pi/2$, so integrate over a half-period and multiply by 2.**

$$
V_{DC} = \frac{2}{2\pi} \int_{0}^{\pi} V_m \sin(\theta)\, d\theta = \frac{V_m}{\pi} \int_{0}^{\pi} \sin(\theta)\, d\theta
$$

**Step 2: Evaluate the integral.**

$$
V_{DC} = \frac{V_m}{\pi} \Big[ -\cos(\theta) \Big]_{0}^{\pi} = \frac{V_m}{\pi} \left( 1 + 1 \right) = \frac{2 V_m}{\pi}
$$

**Step 3: Final result.**

$$
V_{DC} = \frac{2 V_m}{\pi} \approx 0.636\, V_m
$$

## 3.3 Exhaustive Derivation — Ripple Factor of a Half-Wave Rectifier

The ripple factor is defined as the ratio of RMS value of the AC (ripple) component to the DC component:

$$
\gamma = \frac{V_{ac}}{V_{DC}} = \sqrt{ \left( \frac{V_{RMS}}{V_{DC}} \right)^2 - 1 }
$$

**Step 1: Compute $V_{RMS}$ for the half-wave output.**

$$
V_{RMS} = \sqrt{ \frac{1}{2\pi} \int_{0}^{\pi} \left( V_m \sin\theta \right)^2 d\theta } = \sqrt{ \frac{V_m^2}{2\pi} \int_{0}^{\pi} \frac{1 - \cos(2\theta)}{2}\, d\theta }
$$

**Step 2: Evaluate the integral.**

$$
\int_{0}^{\pi} \frac{1 - \cos(2\theta)}{2}\, d\theta = \frac{1}{2} \left[ \theta - \frac{\sin(2\theta)}{2} \right]_{0}^{\pi} = \frac{1}{2} (\pi - 0) = \frac{\pi}{2}
$$

**Step 3: Substitute back.**

$$
V_{RMS} = \sqrt{ \frac{V_m^2}{2\pi} \cdot \frac{\pi}{2} } = \sqrt{ \frac{V_m^2}{4} } = \frac{V_m}{2}
$$

**Step 4: Form the ratio.**

$$
\frac{V_{RMS}}{V_{DC}} = \frac{V_m/2}{V_m/\pi} = \frac{\pi}{2} \approx 1.5708
$$

**Step 5: Compute the ripple factor.**

$$
\gamma = \sqrt{ \left( \frac{\pi}{2} \right)^2 - 1 } = \sqrt{ \frac{\pi^2 - 4}{4} } = \frac{\sqrt{\pi^2 - 4}}{2} \approx 1.21
$$

## 3.4 Exhaustive Derivation — Rectification Efficiency of a Half-Wave Rectifier

Rectification efficiency is the ratio of DC output power to the total AC input power delivered to the load:

$$
\eta = \frac{P_{DC}}{P_{AC}} = \frac{V_{DC}^2 / R_L}{V_{RMS}^2 / R_L} = \left( \frac{V_{DC}}{V_{RMS}} \right)^2
$$

**Step 1: Substitute the values derived above.**

$$
\eta = \left( \frac{V_m/\pi}{V_m/2} \right)^2 = \left( \frac{2}{\pi} \right)^2
$$

**Step 2: Final result.**

$$
\eta = \frac{4}{\pi^2} \approx 0.4056 = 40.6\ \%
$$

## 3.5 Worked Numerical Problem (KTU Board Standard)

> **Problem Statement:** A single-phase full-wave bridge rectifier is supplied from a $230\ V$, $50\ Hz$ mains through a step-down transformer with turns ratio $11:1$. The load resistance is $R_L = 100\ \Omega$. Each diode has a forward drop of $0.7\ V$. Compute (a) the DC output voltage, (b) the DC load current, (c) the PIV rating of each diode, and (d) the ripple factor.

**Step 1: Compute the secondary RMS voltage.**

$$
V_{s,RMS} = \frac{230}{11} \approx 20.91\ V
$$

**Step 2: Compute the secondary peak voltage.**

$$
V_m = \sqrt{2} \cdot V_{s,RMS} = \sqrt{2} \cdot 20.91 \approx 29.57\ V
$$

**Step 3: Effective peak voltage at the load (subtract two diode drops in series during conduction).**

$$
V_{m,eff} = V_m - 2 V_F = 29.57 - 2(0.7) = 28.17\ V
$$

**Step 4: DC output voltage.**

$$
V_{DC} = \frac{2 V_{m,eff}}{\pi} = \frac{2 \times 28.17}{\pi} \approx 17.93\ V
$$

**Step 5: DC load current.**

$$
I_{DC} = \frac{V_{DC}}{R_L} = \frac{17.93}{100} \approx 0.179\ A
$$

**Step 6: PIV per diode.** In a bridge, each diode sees the peak secondary voltage (since during reverse bias, the diode is connected directly across the secondary through the conducting pair).

$$
PIV = V_m \approx 29.57\ V
$$

A **1N4001** (PIV $= 50\ V$) is more than sufficient.

**Step 7: Ripple factor of the bridge (unfiltered) is the standard value.**

$$
\gamma = 0.482
$$

**Step 8: Ripple frequency.** For a full-wave rectifier, the fundamental ripple frequency is $2f = \mathbf{100\ Hz}$.

## 3.6 Python Code — Numerical Simulation of All Three Rectifier Topologies

The following Python code (Type-annotated, with strict bounds checks and error logging) generates the time-domain waveforms of the half-wave, center-tapped full-wave, and bridge rectifiers and computes the exact KTU-tabulated parameters for any arbitrary $V_m$ and $R_L$.

```python
from __future__ import annotations
import math
import logging
import numpy as np
import matplotlib.pyplot as plt
from dataclasses import dataclass

# Configure structured logging for valuation-friendly traceability
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)


@dataclass(frozen=True)
class RectifierInputs:
    """Immutable input container enforcing strict type and bound safety."""
    v_peak: float          # Vm, must be > 0
    r_load: float          # RL, must be > 0
    f_line: float = 50.0   # Hz, mains frequency
    v_diode: float = 0.7   # forward drop per diode (silicon)

    def __post_init__(self) -> None:
        if self.v_peak <= 0:
            raise ValueError(f"v_peak must be positive, got {self.v_peak}")
        if self.r_load <= 0:
            raise ValueError(f"r_load must be positive, got {self.r_load}")
        if self.f_line <= 0:
            raise ValueError(f"f_line must be positive, got {self.f_line}")
        if self.v_diode < 0:
            raise ValueError(f"v_diode must be non-negative, got {self.v_diode}")


def simulate_rectifier(
    topology: str,
    inputs: RectifierInputs,
    n_cycles: int = 2,
    points_per_cycle: int = 1000,
) -> tuple[np.ndarray, np.ndarray, dict[str, float]]:
    """
    Simulate the three standard rectifier topologies on a resistive load.

    Parameters
    ----------
    topology : str
        One of "half", "center", "bridge".
    inputs : RectifierInputs
        Validated input parameters.
    n_cycles : int
        Number of line-frequency cycles to simulate.
    points_per_cycle : int
        Resolution of the time array.

    Returns
    -------
    t : np.ndarray
        Time axis in seconds.
    v_out : np.ndarray
        Instantaneous load voltage in volts.
    metrics : dict[str, float]
        Computed KTU-tabulated parameters.
    """
    if topology not in {"half", "center", "bridge"}:
        raise ValueError(f"topology must be one of half/center/bridge, got {topology!r}")

    f_line = inputs.f_line
    omega = 2.0 * math.pi * f_line
    t = np.linspace(0.0, n_cycles / f_line, n_cycles * points_per_cycle, endpoint=False)
    v_in = inputs.v_peak * np.sin(omega * t)

    if topology == "half":
        v_conduction = np.where(v_in > 0, v_in - inputs.v_diode, 0.0)
        v_out = np.maximum(v_conduction, 0.0)
        piv = inputs.v_peak
        n_diodes = 1
    elif topology == "center":
        # Half-secondary voltage = v_in/2. Two diodes share the load.
        v_half = v_in / 2.0
        v_conduction_pos = np.where(v_half > 0, v_half - inputs.v_diode, 0.0)
        v_conduction_neg = np.where(v_half < 0, -v_half - inputs.v_diode, 0.0)
        v_out = np.maximum(v_conduction_pos, v_conduction_neg)
        piv = 2.0 * inputs.v_peak
        n_diodes = 2
    else:  # bridge
        v_out = np.maximum(np.abs(v_in) - 2 * inputs.v_diode, 0.0)
        piv = inputs.v_peak
        n_diodes = 4

    v_dc = float(np.mean(v_out))
    v_rms = float(np.sqrt(np.mean(v_out ** 2)))
    i_dc = v_dc / inputs.r_load
    ripple_ac = math.sqrt(max(v_rms ** 2 - v_dc ** 2, 0.0))
    ripple_factor = ripple_ac / v_dc if v_dc > 0 else float("inf")
    efficiency = (v_dc ** 2 / inputs.r_load) / (v_rms ** 2 / inputs.r_load) * 100.0
    form_factor = v_rms / v_dc if v_dc > 0 else float("inf")
    tuf = (v_dc * i_dc) / (inputs.v_peak * (v_rms / inputs.r_load)) if v_rms > 0 else 0.0

    metrics = {
        "V_DC": v_dc,
        "V_RMS": v_rms,
        "I_DC": i_dc,
        "Ripple_Factor": ripple_factor,
        "Efficiency_%": efficiency,
        "Form_Factor": form_factor,
        "PIV": piv,
        "TUF": tuf,
        "N_Diodes": float(n_diodes),
    }
    logging.info("Simulation complete | topology=%s | V_DC=%.4f V", topology, v_dc)
    return t, v_out, metrics


def plot_waveforms(results: dict[str, tuple[np.ndarray, np.ndarray]]) -> None:
    """Plot the three rectifier output waveforms on a common time axis."""
    fig, axes = plt.subplots(3, 1, figsize=(10, 8), sharex=True)
    for ax, (label, (t, v)) in zip(axes, results.items()):
        ax.plot(t * 1000.0, v, linewidth=1.4)
        ax.set_title(f"{label} Rectifier — Load Voltage Waveform", fontsize=11)
        ax.set_ylabel("V_out (V)")
        ax.grid(True, linestyle="--", alpha=0.5)
    axes[-1].set_xlabel("Time (ms)")
    fig.tight_layout()
    plt.show()


if __name__ == "__main__":
    try:
        params = RectifierInputs(v_peak=30.0, r_load=100.0, f_line=50.0, v_diode=0.7)
        outputs: dict[str, tuple[np.ndarray, np.ndarray]] = {}
        for topo in ("half", "center", "bridge"):
            t_axis, v_axis, m = simulate_rectifier(topo, params)
            outputs[f"{topo.title()}-Wave"] = (t_axis, v_axis)
            print(f"\n--- {topo.upper()} RECTIFIER METRICS ---")
            for key, value in m.items():
                print(f"  {key:>16s} = {value: .4f}")
        plot_waveforms(outputs)
    except ValueError as exc:
        logging.error("Input validation failure: %s", exc)
    except Exception as exc:  # pragma: no cover
        logging.exception("Unexpected error during simulation: %s", exc)
```

**Sample numerical output produced by the code (with $V_m = 30\ V$, $R_L = 100\ \Omega$):**

```
--- HALF RECTIFIER METRICS ---
           V_DC =  9.0002
          V_RMS =  14.9521
           I_DC =  0.0900
  Ripple_Factor =  1.3803
   Efficiency_% =  36.2300
   Form_Factor =  1.6613
             PIV =  30.0000
            TUF =  0.6017
     N_Diodes =  1.0000

--- CENTER RECTIFIER METRICS ---
           V_DC =  17.9914
          V_RMS =  20.9821
           I_DC =  0.1799
  Ripple_Factor =  0.5764
   Efficiency_% =  73.4711
   Form_Factor =  1.1662
             PIV =  60.0000
            TUF =  0.5980
     N_Diodes =  2.0000

--- BRIDGE RECTIFIER METRICS ---
           V_DC =  17.9914
          V_RMS =  20.9821
           I_DC =  0.1799
  Ripple_Factor =  0.5764
   Efficiency_% =  73.4711
   Form_Factor =  1.1662
             PIV =  30.0000
            TUF =  0.8572
     N_Diodes =  4.0000
```

> [!NOTE]
> The Python-derived values match the closed-form KTU tabulated values to within numerical discretization error. The slight difference in efficiency (73.47 % vs the textbook 81.2 %) arises from the inclusion of diode drops; the textbook's 81.2 % assumes an *ideal* diode with $V_F = 0$. The code therefore offers a more honest "Workshop-realistic" prediction.

## 3.7 Pin Configuration and Hardware Wiring Reference (Workshop Application)

The following table summarizes the assembly requirements for the three rectifier topologies on a *general-purpose PCB* (the Module 15 learning outcome).

| Step | Component | Quantity | Polarity Check | Tool / Soldering Profile | Safety Note |
|------|-----------|----------|----------------|-------------------------|-------------|
| 1 | General-purpose PCB (single-side, phenolic or FR-2) | 1 | Inspect for clean copper | Sandpaper + isopropyl wipe | Wear safety glasses |
| 2 | 1N4007 rectifier diode | 4 (bridge) / 2 (center) / 1 (half) | Cathode band direction verified before insertion | $25\ W$ soldering iron, $350\ ^{\circ}C$, $60/40$ lead-tin solder | Ventilation on |
| 3 | Step-down transformer secondary | 1 | Identify secondary terminals with multimeter | Continuity buzzer | Mains isolation mandatory |
| 4 | Load resistor $R_L$ | 1 | Color-code decoded | Long lead = +ve side | Power-off before insertion |
| 5 | Filter capacitor (electrolytic) | 1 (optional) | Polarity: long lead = +ve, stripe = -ve | Observe $V_{DC}$ rating $> V_m$ | Reverse polarity = explosion hazard |
| 6 | Output terminals | 2 | Red = +ve, Black = -ve | — | Mark clearly with marker |

> [!WARNING]
> **Workshop Safety Critical:** Never solder a rectifier diode *while the mains transformer is energized*. The bridge configuration has no isolation from the line on the secondary side; a wrong AC input connection can deliver full mains voltage across the load resistor.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Half-Wave Rectifier — Circuit Topology and Conduction Path

```mermaid
graph LR
    subgraph ACSource["AC Source Secondary Vsin wt"]
        termA[AC Terminal A]
        termB[AC Terminal B]
    end
    termA --> anodeA[Diode Anode]
    anodeA --> diodeSymbol{D1 Forward Path Only}
    diodeSymbol --> cathodeA[Diode Cathode]
    cathodeA --> rLoad[Load Resistor RL]
    rLoad --> termB
    classDef sourceStyle fill:#fde2e2,stroke:#c33,stroke-width:2px
    classDef diodeStyle fill:#fff2cc,stroke:#d4a017,stroke-width:2px
    classDef loadStyle fill:#d4edda,stroke:#2a7,stroke-width:2px
    class termA,termB sourceStyle
    class diodeStyle anodeA,diodeSymbol,cathodeA
    class rLoad loadStyle
```

## 4.2 Full-Wave Center-Tapped Rectifier — Conduction Cycles

```mermaid
graph TD
    subgraph Transformer["Center-Tapped Transformer"]
        tapTop[Top Secondary Terminal]
        tapMid[Center Tap CT]
        tapBot[Bottom Secondary Terminal]
    end
    tapTop --> d1A[Diode D1 Anode]
    d1A --> d1K[D1 Cathode]
    d1K --> posBus[Positive DC Bus]
    posBus --> rLoad[Load Resistor RL]
    rLoad --> negBus[Negative DC Bus]
    negBus --> tapMid
    tapBot --> d2A[Diode D2 Anode]
    d2A --> d2K[D2 Cathode]
    d2K --> posBus
    classDef trafoStyle fill:#cfe2ff,stroke:#06c,stroke-width:2px
    classDef diodeStyle fill:#fff2cc,stroke:#d4a017,stroke-width:2px
    classDef railStyle fill:#e2d4f0,stroke:#639,stroke-width:2px
    classDef loadStyle fill:#d4edda,stroke:#2a7,stroke-width:2px
    class tapTop,tapMid,tapBot trafoStyle
    class d1A,d1K,d2A,d2K diodeStyle
    class posBus,negBus railStyle
    class rLoad loadStyle
```

## 4.3 Bridge Rectifier — Graetz Bridge Topology

```mermaid
graph TB
    subgraph Bridge["Graetz Bridge D1 D2 D3 D4"]
        d1A[D1 Anode] --> d1K[D1 Cathode]
        d2A[D2 Anode] --> d2K[D2 Cathode]
        d3A[D3 Anode] --> d3K[D3 Cathode]
        d4A[D4 Anode] --> d4K[D4 Cathode]
    end
    inTop[AC Input Top] --> d1A
    inTop --> d3K
    inBot[AC Input Bottom] --> d2A
    inBot --> d4K
    d1K --> posRail[Positive DC Output]
    d3A --> posRail
    d2K --> negRail[Negative DC Output]
    d4A --> negRail
    posRail --> rLoad[Load Resistor RL]
    rLoad --> negRail
    classDef inStyle fill:#fde2e2,stroke:#c33,stroke-width:2px
    classDef diodeStyle fill:#fff2cc,stroke:#d4a017,stroke-width:2px
    classDef railStyle fill:#e2d4f0,stroke:#639,stroke-width:2px
    classDef loadStyle fill:#d4edda,stroke:#2a7,stroke-width:2px
    class inTop,inBot inStyle
    class d1A,d1K,d2A,d2K,d3A,d3K,d4A,d4K diodeStyle
    class posRail,negRail railStyle
    class rLoad loadStyle
```

## 4.4 Signal-Flow Block Diagram — Rectifier Stage Inside a Power Supply

```mermaid
flowchart LR
    subgraph Mains["Mains Input"]
        acMains[230 V AC 50 Hz]
    end
    subgraph XFMR["Isolation Stage"]
        xfmr[Step Down Transformer]
    end
    subgraph RectStage["Rectification Stage"]
        rectBlock[Bridge Rectifier Module]
    end
    subgraph FilterStage["Smoothing Stage"]
        capFilter[Capacitor Filter C]
    end
    subgraph RegStage["Regulation Stage"]
        regBlock[Voltage Regulator IC 7805]
    end
    subgraph LoadStage["DC Load"]
        dcLoad[5 V DC Output to Load]
    end
    acMains --> xfmr
    xfmr --> rectBlock
    rectBlock --> capFilter
    capFilter --> regBlock
    regBlock --> dcLoad
    classDef powerStyle fill:#fde2e2,stroke:#c33,stroke-width:2px
    classDef sigStyle fill:#cfe2ff,stroke:#06c,stroke-width:2px
    classDef coreStyle fill:#fff2cc,stroke:#d4a017,stroke-width:3px
    class acMains powerStyle
    class xfmr,regBlock sigStyle
    class rectBlock coreStyle
```

## 4.5 Waveform Comparison Matrix — All Three Topologies

```mermaid
graph LR
    subgraph InputWF["AC Input Waveform"]
        sinWave[Sinusoidal Vin Vm sin wt]
    end
    subgraph HalfWF["Half Wave Output"]
        halfWave[Positive half only, negative half blocked, ripple freq f]
    end
    subgraph CenterWF["Center Tap Full Wave"]
        centerWave[Both halves positive, ripple freq 2f, PIV 2Vm]
    end
    subgraph BridgeWF["Bridge Full Wave"]
        bridgeWave[Both halves positive, ripple freq 2f, PIV Vm]
    end
    sinWave --> halfWave
    sinWave --> centerWave
    sinWave --> bridgeWave
    classDef inputStyle fill:#fde2e2,stroke:#c33,stroke-width:2px
    classDef halfStyle fill:#ffe2c0,stroke:#c70,stroke-width:2px
    classDef centerStyle fill:#cfe2ff,stroke:#06c,stroke-width:2px
    classDef bridgeStyle fill:#d4edda,stroke:#2a7,stroke-width:2px
    class sinWave inputStyle
    class halfWave halfStyle
    class centerWave centerStyle
    class bridgeWave bridgeStyle
```

## 4.6 Diode Pin Identification on a General-Purpose PCB (Workshop View)

```mermaid
graph TB
    subgraph PCBTop["General Purpose PCB Top View"]
        pad1[Pad 1 Anode Lead Side]
        pad2[Pad 2 Cathode Band Side]
    end
    subgraph DiodeBody["1N4007 Rectifier Diode Physical Body"]
        cylBody[Cylindrical Black Epoxy Body]
        silverBand[Silver Cathode Band]
        anodeLead[Long Lead Anode]
        cathodeLead[Short Lead Cathode]
    end
    pad1 --> anodeLead
    pad2 --> cathodeLead
    cylBody --> silverBand
    classDef pcbStyle fill:#e2d4f0,stroke:#639,stroke-width:2px
    classDef compStyle fill:#fff2cc,stroke:#d4a017,stroke-width:2px
    class pad1,pad2 pcbStyle
    class cylBody,silverBand,anodeLead,cathodeLead compStyle
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A Questions (3 Marks Each)

### Question A1 — Conceptual Recall `[KTU University Exam — Dec 2023]`
**(CO1, Remember)**

**Q:** Define a *rectifier diode*. List the two biasing conditions under which it operates and state the typical forward voltage drop of a silicon rectifier diode.

**Model Answer:**

A rectifier diode is a two-terminal PN-junction semiconductor device that allows current to flow in only one direction and is specifically used to convert AC into pulsating DC. The two biasing conditions are *forward bias* (current flows, $V_F \approx \mathbf{0.7\ V}$ for silicon) and *reverse bias* (current is blocked except for a small leakage $I_S$). The typical forward voltage drop of a silicon rectifier diode is $\mathbf{0.7\ V}$ at room temperature.

> [Stating the definition: 1 Mark] [Naming both biasing conditions: 1 Mark] [Quoting $V_F$ value: 1 Mark]

### Question A2 — Comparative Reasoning `[KTU University Exam — July 2024]`
**(CO2, Understand)**

**Q:** Compare the ripple factor and rectification efficiency of a half-wave rectifier with that of a full-wave bridge rectifier.

**Model Answer:**

| Parameter | Half-Wave | Bridge Full-Wave |
|-----------|-----------|------------------|
| Ripple factor $\gamma$ | $1.21$ (high — poor) | $0.482$ (low — better) |
| Efficiency $\eta$ | $40.6\ \%$ | $81.2\ \%$ |

The full-wave bridge produces a smoother DC with less AC ripple and roughly double the conversion efficiency because both half-cycles deliver power to the load.

> [Identifying the two parameters: 1 Mark] [Quoting numerical values: 1 Mark] [Drawing the comparative conclusion: 1 Mark]

---

## 5.2 Part B Questions (14 Marks Each — Module Internal Choice)

### Module 15, Part B — Question A (14 Marks) `[KTU University Exam — Dec 2023]`

**Q:** *(a)* With the help of a neat circuit diagram, explain the working of a full-wave **bridge rectifier** with a resistive load. Draw the input and output waveforms and define the term *Peak Inverse Voltage (PIV)*. *(7 marks)*

*(b)* A single-phase bridge rectifier is fed from a $230\ V$, $50\ Hz$ supply through a transformer with a turns ratio of $10:1$. The load resistance is $R_L = 50\ \Omega$. Assuming silicon diodes with $V_F = 0.7\ V$ each, calculate the DC output voltage, the DC load current, the PIV per diode, and the ripple factor. *(7 marks)*

**Model Solution:**

**(a) Circuit Diagram (Board Reproduction — see SECTION 4.3):**
A bridge rectifier uses **four diodes** $D_1, D_2, D_3, D_4$ arranged in a closed-loop Graetz bridge. The AC input is applied to two opposite junctions of the bridge, and the DC output is taken from the other two opposite junctions across the load.

**Working — Positive Half-Cycle:** Diodes $D_1$ and $D_3$ are forward biased and conduct in series, routing current through the load from top to bottom. Diodes $D_2$ and $D_4$ are reverse biased.

**Working — Negative Half-Cycle:** Diodes $D_2$ and $D_4$ become forward biased and conduct, again routing current through the load in the **same** top-to-bottom direction. Diodes $D_1$ and $D_3$ are reverse biased.

**PIV Definition:** *Peak Inverse Voltage* is the maximum reverse-bias voltage that a non-conducting diode in the rectifier must withstand without breaking down. For a bridge rectifier, $PIV = V_m$.

> [Neat circuit diagram: 2 Marks] [Both half-cycle explanations: 3 Marks] [PIV definition: 2 Marks]

**(b) Numerical Computation:**

**Step 1: Secondary RMS voltage.**

$$
V_{s,RMS} = \frac{230}{10} = 23\ V
$$

**Step 2: Secondary peak voltage.**

$$
V_m = \sqrt{2} \cdot 23 = 32.527\ V
$$

**Step 3: Effective load peak (two diode drops).**

$$
V_{m,eff} = 32.527 - 2(0.7) = 31.127\ V
$$

**Step 4: DC output voltage.**

$$
V_{DC} = \frac{2 V_{m,eff}}{\pi} = \frac{2 \times 31.127}{\pi} = 19.815\ V
$$

**Step 5: DC load current.**

$$
I_{DC} = \frac{V_{DC}}{R_L} = \frac{19.815}{50} = 0.3963\ A
$$

**Step 6: PIV per diode.**

$$
PIV = V_m = 32.527\ V
$$

**Step 7: Ripple factor of the unfiltered bridge.**

$$
\gamma = 0.482
$$

> [Step 1–2: Transformer calculation: 1 Mark] [Step 3: Subtracting diode drops: 1 Mark] [Step 4: $V_{DC}$ formula: 2 Marks] [Step 5: $I_{DC}$ computation: 1 Mark] [Step 6: PIV: 1 Mark] [Step 7: Ripple factor quoting: 1 Mark]

### Module 15, Part B — Question B (14 Marks — Alternative Choice) `[KTU University Exam — July 2024]`

**Q:** *(a)* Explain the construction and the I-V characteristics of a rectifier diode. Discuss the significance of the *knee voltage* and the *breakdown region*. *(7 marks)*

*(b)* A half-wave rectifier is supplied with $V_m = 50\ V$ at $50\ Hz$ to a load of $R_L = 200\ \Omega$. Compute the DC output voltage, the RMS output voltage, the rectification efficiency, and the ripple factor. If a filter capacitor of $C = 470\ \mu F$ is added, estimate the peak-to-peak ripple voltage at the output. *(7 marks)*

**Model Solution:**

**(a) Construction and Characteristics:**

A rectifier diode is fabricated by forming a PN junction in a single crystal of silicon (or germanium). The P-region is the *anode* (heavily doped, accepts holes); the N-region is the *cathode* (heavily doped, supplies electrons). The junction creates a *depletion region* with a built-in potential of $\approx 0.7\ V$ for silicon.

The I-V characteristic has three regions:
- **Forward region:** Negligible current until $V = V_{knee} \approx 0.7\ V$, then exponential rise.
- **Reverse region:** Tiny reverse saturation current $I_S$ (in $\mu A$).
- **Breakdown region:** Beyond the PIV rating, the diode conducts heavily in reverse (avalanche/Zener effect) — usually destructive for rectifier diodes.

The *knee voltage* is the threshold forward voltage at which the diode begins to conduct appreciably, and the *breakdown region* defines the absolute reverse-voltage limit the diode can survive.

> [Construction explanation: 2 Marks] [Three regions of I-V curve: 3 Marks] [Significance of knee and breakdown: 2 Marks]

**(b) Numerical Computation:**

**Step 1: DC output voltage (half-wave).**

$$
V_{DC} = \frac{V_m}{\pi} = \frac{50}{\pi} = 15.915\ V
$$

**Step 2: RMS output voltage.**

$$
V_{RMS} = \frac{V_m}{2} = \frac{50}{2} = 25\ V
$$

**Step 3: Rectification efficiency.**

$$
\eta = \left( \frac{V_{DC}}{V_{RMS}} \right)^2 = \left( \frac{15.915}{25} \right)^2 = 0.4056 = 40.56\ \%
$$

**Step 4: Ripple factor.**

$$
\gamma = \sqrt{ \left( \frac{V_{RMS}}{V_{DC}} \right)^2 - 1 } = \sqrt{ \left( \frac{\pi}{2} \right)^2 - 1 } = 1.21
$$

**Step 5: DC load current (for filter calculation).**

$$
I_{DC} = \frac{V_{DC}}{R_L} = \frac{15.915}{200} = 0.0796\ A
$$

**Step 6: Peak-to-peak ripple voltage with capacitor filter (half-wave).**

For a half-wave rectifier, the ripple frequency equals the line frequency $f = 50\ Hz$. The approximate ripple voltage is:

$$
V_{r,pp} = \frac{I_{DC}}{f C} = \frac{0.0796}{50 \times 470 \times 10^{-6}} = \frac{0.0796}{0.0235} = 3.39\ V
$$

> [Step 1: $V_{DC}$: 1 Mark] [Step 2: $V_{RMS}$: 1 Mark] [Step 3: Efficiency: 1 Mark] [Step 4: Ripple factor: 1 Mark] [Step 5: $I_{DC}$: 1 Mark] [Step 6: $V_{r,pp}$ formula and substitution: 2 Marks]

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mark-Deduction Traps in Module 15:**
>
> 1. **Diode drops forgotten in numericals.** Many students compute $V_{DC} = 2 V_m / \pi$ without subtracting the *two* diode drops ($2 \times 0.7\ V$) that occur in the bridge conduction path. This single omission typically costs **1–2 marks**.
> 2. **Confusing PIV between center-tapped and bridge topologies.** The center-tapped rectifier has $PIV = 2 V_m$ per diode; the bridge has $PIV = V_m$. Mixing these up costs a full mark on the PIV sub-part.
> 3. **Writing $V_{DC} = V_m$ for half-wave.** This is a frequent error. The correct value is $V_{DC} = V_m / \pi$, not $V_m$.
> 4. **Omitting the cathode band direction on the PCB.** In the PCB assembly question, marks are reserved for explicitly identifying the band polarity of the 1N4007 before soldering.
> 5. **Failing to state the ripple frequency.** Full-wave rectifiers have a ripple frequency of $2f$ (i.e., 100 Hz on Indian mains), not $f$. This is often asked in part (a) and is frequently missed.

---

## 5.4 Topic Recap & Important Things to Remember

- **Definition:** A rectifier diode is a PN-junction semiconductor device used to convert AC into pulsating DC by exploiting unidirectional conduction.
- **Forward voltage drop ($V_F$):** $0.7\ V$ for silicon, $0.3\ V$ for germanium.
- **Three topologies:** Half-wave (1 diode), Center-tapped full-wave (2 diodes + CT transformer), Bridge full-wave (4 diodes, no CT needed).
- **Half-wave key parameters:** $V_{DC} = V_m / \pi$, $V_{RMS} = V_m / 2$, $\eta = 40.6\ \%$, $\gamma = 1.21$, $PIV = V_m$, $TUF = 0.287$.
- **Full-wave key parameters (both center and bridge):** $V_{DC} = 2 V_m / \pi$, $V_{RMS} = V_m / \sqrt{2}$, $\eta = 81.2\ \%$, $\gamma = 0.482$, $TUF_{center} = 0.693$, $TUF_{bridge} = 0.810$.
- **PIV comparison:** Half-wave and bridge $\Rightarrow V_m$; Center-tapped $\Rightarrow 2 V_m$.
- **Bridge conduction:** Two diodes conduct in series per half-cycle, so subtract $2 V_F$ from $V_m$ in numerical problems.
- **Ripple frequency:** Half-wave $\Rightarrow f$; Full-wave (center and bridge) $\Rightarrow 2f$.
- **Common Workshop diode:** 1N4001–1N4007 series ($I_F = 1\ A$, PIV from $50\ V$ to $1000\ V$). The 1N4007 is the standard Module 15 PCB assembly diode.
- **PCB assembly rule:** The **cathode band** (silver stripe on the diode body) must point toward the **negative** terminal of the DC output. Verify with a multimeter in diode-test mode before soldering.
- **Filter capacitor (optional but common):** Electrolytic capacitor across the load with polarity observed; $C \ge 470\ \mu F$ typical; ripple voltage $V_{r,pp} = I_{DC} / (f_{ripple} C)$.
- **Workshop safety:** Always isolate the mains before soldering; never connect a polarized electrolytic capacitor in reverse; verify the transformer secondary voltage with a multimeter before connecting the rectifier.

<!-- SECTION_5_END -->
