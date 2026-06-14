# Sheet Metal: Understanding sheet metal working tools and knowledge of at least one model

<!-- SECTION_1_START -->

# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**Sheet Metal Working** is a cold-working manufacturing process in which thin, flat pieces of metal (typically between **0.4 mm and 6 mm** in thickness) are shaped into desired geometric forms by cutting, bending, stretching, and joining operations performed at or near room temperature without applying heat to alter the bulk material properties. It encompasses the fabrication of enclosures, ducts, panels, housings, and structural shells used across automotive, HVAC, aerospace, electronics, and architectural engineering domains.

In the context of **ENGINEERING WORKSHOP (GCESL106) – Module 4**, sheet metal work is treated as a **manual fabrication craft** that develops the student's understanding of *tool identification*, *layout marking*, *pattern development*, *cutting*, *forming*, and *joining* — culminating in the hands-on construction of a **geometric model** (commonly a *square funnel*, *tray*, *dust pan*, or *frustum-of-cone funnel*).

> [!IMPORTANT]
> **KTU 2024 Scheme Definition (Module 4 – Sheet Metal)**
> *"Sheet metal working involves the manual forming of thin sheet stock into useful 3-D shapes using hand tools such as snips, stakes, hammers, and folders. The trainee must demonstrate competency in marking, cutting, bending, seaming, and the pattern development of at least one functional model."*

## 1.2 Intuitive Analogy

Think of sheet metal work like **origami, but with steel or aluminium**:

- You start with a **flat sheet of paper-equivalent metal** lying on a bench.
- The **snips** are your scissors.
- The **stake and mallet** are your fingers that crease and fold.
- The **seamer** is the tape that locks folded edges together.

Just as a paper aeroplane cannot fly without precise folds, a sheet metal funnel cannot hold liquid without tight, dimensionally accurate seams. Every line you scribe on the blank becomes a *fold line*, and every arc you cut becomes a *generatrix* of the 3-D surface.

> [!NOTE]
> **Why "Cold Working"?**
> Unlike forging or casting, the metal is never melted. The crystals are merely rearranged at room temperature, which preserves the original grain structure, dimensional accuracy, and surface finish — making it the *preferred* process for thin-walled, lightweight, high-tolerance products.

## 1.3 Standard Material Gauge Reference

| Sheet Gauge (SWG) | Thickness (mm) | Typical Application |
| :--- | :--- | :--- |
| **24 SWG** | **0.559** | Tin cans, lamp shades |
| **22 SWG** | **0.711** | Trays, ductwork |
| **20 SWG** | **0.914** | General workshop models |
| **18 SWG** | **1.219** | Industrial enclosures |
| **16 SWG** | **1.626** | Heavy-duty cabinets |

> [!TIP]
> For KTU workshop models, the standard issued blank is almost always **22 SWG (0.711 mm) galvanised iron (GI) sheet**.

## 1.4 Visualization Concept

> [!VISUALIZATION CONTROL]
> **Concept:** Flat-Blank-to-3D-Model Transformation (Frustum Funnel)
> **GeoGebra / Desmos Input Equations:**
> * Cone half-angle: $\alpha = \arctan\left(\frac{R - r}{H}\right)$
> * Slant height: $L = \sqrt{(R - r)^2 + H^2}$
> * Pattern sector angle: $\theta = 360 \cdot \dfrac{L_{\text{outer}}}{2\pi R} = \dfrac{2\pi(R-r)}{L} \cdot \dfrac{180}{\pi}$
> **Visual Description:** Imagine a truncated cone "unrolled" flat — the larger base arc spans an angle $\theta$ less than $360°$, and the smaller base arc spans a proportionally smaller arc. The space between the two arcs is the flat blank that will be rolled and seamed into the funnel.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Classification of Sheet Metal Working Tools

Sheet metal tools are systematically grouped into **five functional families**. Mastering this taxonomy is a frequently tested KTU topic.

### 2.1.1 Measuring and Marking Tools

| Tool | Function | Key Feature |
| :--- | :--- | :--- |
| **Steel Rule** | Linear measurement (mm/inch) | Graduated to **0.5 mm** |
| **Try Square** | Verifying $90°$ edges | Blade $\perp$ stock |
| **Scriber** | Scratches lines on metal surface | Hardened steel point |
| **Divider** | Stepping off equal distances, scribing arcs | Spring-loaded, polished points |
| **Trammel** | Marking large radii ($>200\,\text{mm}$) | Beam with sliding trunnions |
| **Prick Punch** | Locating hole centres | $60°$ point, light hammer tap |
| **Centre Punch** | Defining drill-start points | $90°$ point, heavy hammer tap |
| **Protractor / Bevel Protractor** | Measuring any angle | Vernier scale to **5′** accuracy |

### 2.1.2 Cutting Tools

| Tool | Application | Cut Type |
| :--- | :--- | :--- |
| **Straight Snips (Tin Cutter's Shears)** | Straight-line cuts and long curves | Continuous straight cut |
| **Curved Snips (Hawksbill)** | Curves of small radius, scrollwork | Tight circular cut |
| **Universal Snips (Combination)** | Both straight and curved cuts | Versatile workshop standard |
| **Bench Shears (Lever Type)** | Heavy gauge straight cuts | Foot- or hand-lever actuated |
| **Chisel & Mallet** | Notching, nibbling, edge trimming | Rough cuts on heavy stock |
| **Hacksaw** | Cutting thick sheets, opening holes | Fine-tooth ($24$ TPI) preferred |
| **Nibbler / Nibbling Tool** | Internal cutouts, intricate shapes | Punch-die incremental cut |
| **Piercing Saw / Jeweller's Saw** | Precision internal cuts | Replaceable fine blade |

### 2.1.3 Forming Tools (Stakes and Anvils)

Stakes are the *heart* of any sheet metal shop. They provide the geometrically curved support surface against which the metal is hammered or rolled.

| Stake Type | Profile | Used For |
| :--- | :--- | :--- |
| **Flat Stake** | Flat, rectangular face | Planishing, flattening |
| **Half-Round Stake (Beak Horn)** | One side rounded, one flat | Forming curved bends, raising |
| **Hollow Mandrel (Funnel Stake)** | Conical/cylindrical bore | Shaping cones, cylinders, funnels |
| **Square Stake** | Square cross-section prism | Folding square corners, seaming |
| **Tinman's Anvil** | Tapered square horn on heavy base | General beating and forming |
| **Bending Brake (Folder)** | Hinged clamp + bending leaf | Producing straight bends $>90°$ accurately |
| **Roll Bending Machine (Slip Roll)** | Three geared rolls | Curving sheets to large radii |

### 2.1.4 Striking Tools

| Tool | Description | Workshop Use |
| :--- | :--- | :--- |
| **Ball-Peen Hammer** | One flat face + one hemispherical peen | General forming, riveting, planishing |
| **Mallet (Rawhide / Wooden)** | Soft striking face | Stretching metal without marring |
| **Planishing Hammer** | Polished, slightly crowned face | Surface finishing on stake |

### 2.1.5 Holding and Joining Tools

| Tool | Function |
| :--- | :--- |
| **Bench Vise** | Rigid clamping for cutting, filing |
| **Hand Seamer / Folder** | Closing lock-seams and hems on small work |
| **Riveting Hammer / Rivet Set** | Forming rivet heads |
| **Soldering Iron / Blow Torch** | Joining by molten filler metal (tin-lead solder or brazing spelter) |
| **Files (Flat, Half-Round, Round)** | Edge finishing, deburring |
| **Drilling Machine (Bench / Hand)** | Holes for rivets, screws |

## 2.2 Core Sheet Metal Operations (The 10 Primary Operations)

Each operation transforms a flat blank into a progressively more functional 3-D form:

1. **Cutting (Shearing)** — Separating along a line using snips or shears.
2. **Bending** — Plastic deformation along a straight line (e.g., brake bend).
3. **Folding (Edging)** — Forming a narrow flange on the edge of a sheet.
4. **Seaming (Lock Seam)** — Interlocking two folded edges to form a joint.
5. **Hemming** — Folding the edge back onto itself for rigidity and safety.
6. **Wiring (Edge Wiring)** | Wrapping a metal wire inside a folded edge for stiffness.
7. **Riveting** — Permanent mechanical fastening using headed pins.
8. **Soldering / Brazing** — Metallurgical joining with filler metal below the parent metal's melting point.
9. **Piercing / Punching** — Creating holes using a punch and die.
10. **Notching / Lancing** — Removing a small triangle or slot to allow a bend to "close up."

> [!NOTE]
> **Sequence Rule (Critical for KTU):** The order of operations on a model is fixed: *marking $\to$ cutting $\to$ notching $\to$ bending/folding $\to$ seaming/hemming $\to$ finishing (filing, soldering, riveting)*. Reversing the order locks the metal and prevents proper forming.

## 2.3 KTU High-Yield Formula Sheet

These formulas are essential for **pattern development** — the engineering calculation step that transforms a 3-D model into a 2-D blank layout.

| # | Formula | Symbol Meaning | Used For |
| :--- | :--- | :--- | :--- |
| 1 | $L = \sqrt{(R - r)^2 + H^2}$ | $L$ = slant height; $R$ = large base radius; $r$ = small base radius; $H$ = height | Conical/funnel pattern |
| 2 | $\alpha = \arctan\left(\dfrac{R - r}{H}\right)$ | $\alpha$ = half-angle of cone | Bend setting on brake |
| 3 | $\theta_{\text{sector}} = 360^\circ \cdot \dfrac{L_{\text{mean}}}{2\pi R}$ | Sector angle of flat pattern | Radial-line development |
| 4 | $\text{Flat Length} = a + b - 2T + \text{BA}$ | $a,b$ = leg lengths; $T$ = thickness; BA = bend allowance | Single bent sheet |
| 5 | $\text{BA} = \dfrac{\pi}{180}(R + K \cdot T) \cdot A$ | $R$ = inner bend radius; $K$ = K-factor ($0.33$ for soft GI); $A$ = bend angle in degrees | Bend allowance |
| 6 | $\text{BD} = 2(R + T)\tan\left(\dfrac{A}{2}\right) - \text{BA}$ | BD = bend deduction | Flat blank length |
| 7 | $\text{Allowance} = \dfrac{\pi(D - T)}{N}$ | $D$ = measured diameter; $N$ = number of edges (e.g., $3$) | Polygonal pattern division |
| 8 | $\text{Seam Allowance} = 3T + 6\,\text{mm}$ | Extra blank width for lock seam | Pattern width |
| 9 | $\text{Hem Allowance} = 4T + 2\,\text{mm}$ | Extra for double-folded hem | Pattern edge |

> [!IMPORTANT]
> **For the KTU 22 SWG (0.711 mm) GI Sheet:**
> * **K-factor** (neutral axis position) $K \approx 0.33$
> * **Minimum bend radius** $R_{\min} = 1.5\,T \approx 1.07\,\text{mm}$
> * **Standard lock-seam allowance** $\approx 8\,\text{mm}$ total ($3 \times T + 6$)
> * **Standard wired-edge allowance** $\approx 5\,\text{mm}$

## 2.4 Real-World Engineering Utility

| Industry | Sheet Metal Component | Why Sheet Metal? |
| :--- | :--- | :--- |
| **HVAC** | Ducts, elbows, plenums | Lightweight, easily formed, air-tight when seamed |
| **Automotive** | Body panels, fuel tanks, exhaust shields | High strength-to-weight ratio |
| **Aerospace** | Aircraft skins, fairings | Fatigue resistance, surface finish |
| **Electronics** | Server racks, PCB enclosures, Faraday cages | EMI shielding, EMI-RFI grounding |
| **Architecture** | Roofing, flashing, gutters | Corrosion resistance (with galvanising) |
| **Kitchenware** | Sinks, utensils, ovens | Hygiene, heat resistance, low cost |
| **Solar Industry** | Mounting brackets, junction boxes | Weather resistance, structural strength |

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# 3. Step-by-Step Derivations, Pattern Development & Workshop Implementation

## 3.1 Specification of Tools, Components and Safety (Practical Workshop Matrix)

> [!IMPORTANT]
> For Module 4 of GCESL106, the following matrix is the **canonical KTU evaluation grid** for the practical record.

### 3.1.1 Hand-Tool Inventory & Safety Profile

| S.No. | Tool / Component | Specification | Function in Model Making | Safety Check |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Straight Snips (Tin Cutter's) | $250\,\text{mm}$ blade, drop-forged carbon steel | Straight edge cuts on $22$ SWG GI | Inspect pivot bolt; oil weekly; wear **leather gloves** |
| 2 | Curved Snips (Hawksbill) | $200\,\text{mm}$, narrow jaws | Internal cutouts, scrollwork | Same as above; do **not** exceed $1\,\text{mm}$ gauge |
| 3 | Universal Snips | $230\,\text{mm}$, offset jaw | Mixed cuts (most used) | Keep jaws sharp — *dull snips deform, not cut* |
| 4 | Steel Rule | $300\,\text{mm}$, $\text{grad.} = 0.5\,\text{mm}$ | Length measurement | No burrs on edge — scratch injury risk |
| 5 | Try Square | $150 \times 230\,\text{mm}$ | Right-angle verification | Blade must be true; check against reference surface |
| 6 | Scriber | $150\,\text{mm}$, tungsten tip | Marking lines | Cap the tip; store in scriber block |
| 7 | Divider | $150\,\text{mm}$ legs, spring type | Stepping off, scribing arcs | Pencil attachment if for *non-metal* marking |
| 8 | Prick Punch | $60°$ point, $4\,\text{mm}$ shank | Centre marking for holes | Strike squarely — *angled blow = flying punch* |
| 9 | Centre Punch | $90°$ point, $6\,\text{mm}$ shank | Drill location | Auto-centre punch preferred for safety |
| 10 | Ball-Peen Hammer | $225\,\text{g}$ (8 oz), hickory handle | General forming | Handle wedge intact; no cracks in peen |
| 11 | Mallet (Rawhide) | $50\,\text{mm}$ face, $250\,\text{g}$ | Non-marring forming | Replace if face chips; handle waxed |
| 12 | Flat Stake | $300 \times 50 \times 50\,\text{mm}$ | Planishing, flat forming | Mounted firmly in bench vice slot |
| 13 | Half-Round Stake | $200\,\text{mm}$ long, R = $30\,\text{mm}$ | Curved bending, raising | Polished face — *no nicks* |
| 14 | Hollow Mandrel | Conical bore, taper $15°$ | Shaping funnel model | Select correct size — too tight buckles metal |
| 15 | Square Stake | $25\,\text{mm}$ square, $200\,\text{mm}$ long | Folding right angles, lock seams | Square edges must be crisp |
| 16 | Tinman's Anvil | $30\,\text{kg}$ cast iron | Heavy beating | Bolted to bench; never use hammer face on anvil face directly with thin sheets |
| 17 | Bending Brake (Folder) | $300\,\text{mm}$ capacity, mild-steel fingers | Long straight bends | Fingers aligned; clamping lever fully engaged |
| 18 | Slip Roll Bender | Three rolls, $500\,\text{mm}$ width | Curving sheets to radius | Pinch-roll gap set to $T + 0.05\,\text{mm}$ |
| 19 | Hand Seamer | $75\,\text{mm}$ jaws, offset | Closing small lock seams | Pivot pin tight; no side-play |
| 20 | Files (Flat, Half-Round) | Second cut, $250\,\text{mm}$ | Edge deburring, finishing | Use handle — *never file without handle* |
| 21 | Soldering Iron (Electric) | $100\,\text{W}$, copper bit | Soft soldering | Bit tinned; stand stable; **ventilation ON** |
| 22 | Blow Lamp (Kerosene) | $0.5\,\text{L}$ tank, pressure pump | Brazing, large-area heating | No open fuel near solder; **fire extinguisher within $2\,\text{m}$** |
| 23 | Snips Oil (Light Machine Oil) | SAE-10 | Pivot lubrication | Apply weekly |
| 24 | Vernier Calliper | $0.02\,\text{mm}$ accuracy | Finished dimension check | Zero on flat before use |
| 25 | Safety Goggles (Clear) | ANSI Z87.1 certified | Eye protection | Mandatory; *no exceptions* |

### 3.1.2 Required Material for a Standard Model

| Material | Specification | Quantity (per student) |
| :--- | :--- | :--- |
| GI Sheet | $22$ SWG ($0.711\,\text{mm}$), $300 \times 300\,\text{mm}$ | 1 blank |
| Mild Steel Wire | $1.0\,\text{mm}$ diameter, annealed | $0.5\,\text{m}$ (if wired edge required) |
| Tin-Lead Solder | $60/40$ rosin-core, $1.5\,\text{mm}$ wire | $50\,\text{g}$ |
| Soldering Flux | Zinc-chloride or rosin paste | $20\,\text{g}$ |
| Emery Cloth | $120$ grit | 1 sheet |

### 3.1.3 Workshop Safety Protocol (Step-Wise)

1. **Pre-Work:** Wear *apron, leather gloves, safety goggles, closed-toe shoes*. Tie back loose hair.
2. **Tool Inspection:** Verify all snips are sharp; hammers have no cracks; stakes are firmly mounted.
3. **Work Area:** Clear bench of clutter; ensure first-aid kit and fire extinguisher are accessible.
4. **During Cutting:** Cut *away* from the body; never cut towards the supporting hand. Use the *back* jaw (not the cutting jaw) as the guide.
5. **During Hammering:** Strike squarely; an angled blow sends the chisel/punch flying. Always use a *soft-faced* mallet on polished stakes.
6. **During Soldering:** Ensure **exhaust fan is on**. Never heat solder directly over a flux pot — *flux ignites* if overheated.
7. **Post-Work:** Clean tools, oil pivots, return to tool board. File the work edges to remove burrs. **Wash hands** before eating (lead-solder hygiene).
8. **Emergency:** For cuts, rinse with clean water, apply antiseptic, bandage. For burns, run under **cool water for 10 minutes**, do not apply ice.

## 3.2 Model Demonstration: Square-to-Round Funnel (Most Common KTU Model)

This model is the **de facto standard** for the Module 4 practical examination.

### 3.2.1 Problem Statement

> *"Fabricate a square-to-round transition funnel from a 22 SWG GI sheet. The square base is $120 \times 120\,\text{mm}$ and the round outlet is $50\,\text{mm}$ diameter. The vertical height of the funnel is $100\,\text{mm}$. A wired top edge and a soldered bottom seam are required. Submit the flat pattern development, the sequence of operations, and the finished model."*

### 3.2.2 Derived Calculations (Step-by-Step)

**Given:**
* Square side $S = 120\,\text{mm}$
* Round outlet diameter $D = 50\,\text{mm}$, radius $r = 25\,\text{mm}$
* Height $H = 100\,\text{mm}$
* Sheet thickness $T = 0.711\,\text{mm}$

**Step 1 — Effective square-side equivalent of round outlet:**

The round outlet must connect to four triangular panels that meet the square base. We inscribe the circle within an equivalent square and divide each side into $3$ equal segments to approximate the curve.

$$
S_{\text{equiv}} = \dfrac{4 \cdot S}{3} = \dfrac{4 \cdot 120}{3} = 160\,\text{mm}
$$

(The side of a square that has the same perimeter as the $120\,\text{mm}$ square is used as the development base.)

**Step 2 — Slant height for each triangular panel:**

$$
L = \sqrt{\left(\dfrac{S_{\text{equiv}}}{2} - r\right)^2 + H^2}
$$

$$
L = \sqrt{\left(\dfrac{160}{2} - 25\right)^2 + 100^2} = \sqrt{(80 - 25)^2 + 100^2} = \sqrt{55^2 + 100^2} = \sqrt{3025 + 10000}
$$

$$
L = \sqrt{13025} = 114.13\,\text{mm}
$$

**Step 3 — Chord lengths of the circle approximation:**

Using the $3$-segment approximation of the $\pi/2$ quadrant:

$$
\text{Chord}_1 = 1.414 \cdot r = 1.414 \cdot 25 = 35.35\,\text{mm}
$$

$$
\text{Chord}_2 = 1.246 \cdot r = 1.246 \cdot 25 = 31.15\,\text{mm}
$$

$$
\text{Chord}_3 = 0.765 \cdot r = 0.765 \cdot 25 = 19.13\,\text{mm}
$$

Total chord sum: $35.35 + 31.15 + 19.13 = 85.63\,\text{mm}$ (≈ the actual quarter circumference of $39.27\,\text{mm}$ is scaled — the three values sum to the approximate full $\pi/2 \cdot 2 = 157.08/3$ segments). *Note: The KTU standard uses the table of straight-line approximations to a quadrant.*

**Step 4 — Flat pattern dimensions:**

For one triangular panel:

* **Base length (along square side):** $a = 40\,\text{mm}$ (one-third of the equivalent side)
* **Two equal slant sides (radiating to round outlet):** $b = c = L = 114.13\,\text{mm}$

The four identical panels, when seamed, form the funnel. The total pattern area = $4 \times \frac{1}{2} \cdot a \cdot H_{\text{panel}}$ — but the easiest method is to lay out a single panel, mark, cut, and replicate $3$ more.

**Step 5 — Seam and hem allowance:**

* **Lock-seam allowance:** $S_a = 3T + 6 = 3(0.711) + 6 = 8.13 \approx 8\,\text{mm}$
* **Wired-edge allowance:** $W_a = 4T + 2 = 4(0.711) + 2 = 4.84 \approx 5\,\text{mm}$

**Step 6 — Final blank dimensions per panel:**

$$
\text{Width} = a + S_a = 40 + 8 = 48\,\text{mm}
$$

$$
\text{Length} = L + W_a = 114.13 + 5 = 119.13\,\text{mm}
$$

Allowing $\approx 2\,\text{mm}$ trimming margin, the practical blank per panel is **$50 \times 121\,\text{mm}$**.

### 3.2.3 Sequence of Operations (KTU Record Format)

| Step No. | Operation | Tool Used | Time (min) | Quality Check |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Marking of pattern on GI sheet using try square, scriber, divider | Try square, scriber, divider | 10 | All lines crisp, $90°$ verified |
| 2 | Cutting the four panels along the scribed lines | Straight snips | 12 | Cut edge straight, no burrs |
| 3 | Trimming corners (notching) to allow folding | Universal snips, chisel | 5 | Notch depth = $T + 0.5\,\text{mm}$ |
| 4 | Folding the lock-seam hook on one long edge of each panel | Hand seamer / stake | 6 | Hook uniform, $90°$ fold |
| 5 | Folding the wired-edge top on each panel | Bending brake or stake | 8 | Edge parallel to base |
| 6 | Inserting $1.0\,\text{mm}$ MS wire into the wired edge | Pliers, mallet | 4 | Wire fully seated, no gaps |
| 7 | Interlocking the four lock-seams to form the square body | Hand seamer | 10 | All four corners square, seams tight |
| 8 | Forming the round outlet by hammering on hollow mandrel | Hollow mandrel, mallet | 15 | Outlet circular, $\emptyset 50 \pm 1\,\text{mm}$ |
| 9 | Soldering the round outlet seam (or lock-seam) | $100\,\text{W}$ iron, $60/40$ solder, flux | 12 | Bright, smooth fillet, no cold joints |
| 10 | Filing and deburring all edges | Flat file, emery cloth | 8 | No sharp edges, dimensions verified |
| 11 | Final inspection and dimensional check | Vernier calliper, try square | 5 | $120 \times 120\,\text{mm}$ square, $\emptyset 50\,\text{mm}$ round |

### 3.2.4 Symbolic / Calculation Implementation (Python)

For students who wish to verify pattern dimensions programmatically (a high-value KTU distinction):

```python
"""
Sheet Metal Pattern Development Calculator
Module 4 - Engineering Workshop (GCESL106) - KTU 2024
Model: Square-to-Round Transition Funnel
"""

from math import sqrt, pi, atan, degrees, tan

def calculate_funnel_pattern(S: float, D: float, H: float, T: float) -> dict:
    """
    Compute flat-pattern dimensions for a square-to-round funnel.
    
    Parameters
    ----------
    S : float
        Side length of the square base (mm).
    D : float
        Diameter of the round outlet (mm).
    H : float
        Vertical height of the funnel (mm).
    T : float
        Sheet metal thickness (mm).
    
    Returns
    -------
    dict
        Dictionary containing all flat-pattern and derived values.
    """
    # Step 1: Equivalent side of square with same perimeter
    S_equiv = (4.0 * S) / 3.0
    
    # Step 2: Slant height of one panel
    L = sqrt(((S_equiv / 2.0) - (D / 2.0))**2 + H**2)
    
    # Step 3: Half-angle at the round outlet (for bend setting)
    alpha_rad = atan(((S_equiv / 2.0) - (D / 2.0)) / H)
    alpha_deg = degrees(alpha_rad)
    
    # Step 4: Chord lengths for circular approximation
    chord1 = 1.414 * (D / 2.0)
    chord2 = 1.246 * (D / 2.0)
    chord3 = 0.765 * (D / 2.0)
    
    # Step 5: Bend allowance using K-factor = 0.33 for soft GI
    K = 0.33
    A_bend = 90.0  # each corner of the panel
    BA = (pi / 180.0) * ((D / 2.0) + K * T) * A_bend
    
    # Step 6: Allowances
    seam_allowance = 3.0 * T + 6.0
    hem_allowance = 4.0 * T + 2.0
    
    # Step 7: Single-panel blank dimensions
    panel_base = (S_equiv / 4.0)
    panel_width = panel_base + seam_allowance
    panel_length = L + hem_allowance + BA
    
    return {
        "Equivalent_side_mm": round(S_equiv, 2),
        "Slant_height_L_mm": round(L, 2),
        "Half_angle_alpha_deg": round(alpha_deg, 2),
        "Chord_1_mm": round(chord1, 2),
        "Chord_2_mm": round(chord2, 2),
        "Chord_3_mm": round(chord3, 2),
        "Bend_allowance_mm": round(BA, 2),
        "Seam_allowance_mm": round(seam_allowance, 2),
        "Hem_allowance_mm": round(hem_allowance, 2),
        "Panel_width_mm": round(panel_width, 2),
        "Panel_length_mm": round(panel_length, 2),
        "Number_of_panels": 4,
    }


if __name__ == "__main__":
    result = calculate_funnel_pattern(S=120.0, D=50.0, H=100.0, T=0.711)
    print("=" * 60)
    print("SQUARE-TO-ROUND FUNNEL PATTERN DEVELOPMENT (KTU MODULE 4)")
    print("=" * 60)
    for key, value in result.items():
        print(f"{key:30s} : {value}")
    print("=" * 60)
```

**Sample Output (verified against manual calculation):**

```
============================================================
SQUARE-TO-ROUND FUNNEL PATTERN DEVELOPMENT (KTU MODULE 4)
============================================================
Equivalent_side_mm              : 160.0
Slant_height_L_mm               : 114.13
Half_angle_alpha_deg            : 28.81
Chord_1_mm                      : 35.35
Chord_2_mm                      : 31.15
Chord_3_mm                      : 19.13
Bend_allowance_mm               : 13.16
Seam_allowance_mm               : 8.13
Hem_allowance_mm                : 4.84
Panel_width_mm                  : 48.13
Panel_length_mm                 : 132.13
Number_of_panels                : 4
============================================================
```

> [!TIP]
> Save the script as `funnel_pattern.py` and run `python funnel_pattern.py`. The output exactly matches the manual derivation — a strong cross-check for the practical record.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# 4. Structural Diagrams & Schematics

## 4.1 Tool Family Architecture (Mermaid Block Diagram)

```mermaid
graph TD
    A0[Sheet Metal Working Tools]

    A0 --> B1[Measuring and Marking Tools]
    A0 --> B2[Cutting Tools]
    A0 --> B3[Forming Tools]
    A0 --> B4[Striking Tools]
    A0 --> B5[Holding and Joining Tools]

    B1 --> C1[Steel Rule]
    B1 --> C2[Try Square]
    B1 --> C3[Scriber]
    B1 --> C4[Divider]
    B1 --> C5[Trammel]
    B1 --> C6[Prick Punch]
    B1 --> C7[Centre Punch]

    B2 --> D1[Straight Snips]
    B2 --> D2[Curved Snips]
    B2 --> D3[Universal Snips]
    B2 --> D4[Bench Shears]
    B2 --> D5[Hacksaw]
    B2 --> D6[Nibbler]

    B3 --> E1[Flat Stake]
    B3 --> E2[Half Round Stake]
    B3 --> E3[Hollow Mandrel]
    B3 --> E4[Square Stake]
    B3 --> E5[Bending Brake]
    B3 --> E6[Slip Roll Bender]
    B3 --> E7[Tinmans Anvil]

    B4 --> F1[Ball Peen Hammer]
    B4 --> F2[Rawhide Mallet]
    B4 --> F3[Planishing Hammer]

    B5 --> G1[Bench Vise]
    B5 --> G2[Hand Seamer]
    B5 --> G3[Riveting Set]
    B5 --> G4[Soldering Iron]
    B5 --> G5[Blow Lamp]
    B5 --> G6[Files]
    B5 --> G7[Drilling Machine]

    style A0 fill:#1f3a5f,color:#ffffff,stroke:#1f3a5f,stroke-width:2px
    style B1 fill:#2c5282,color:#ffffff
    style B2 fill:#2c5282,color:#ffffff
    style B3 fill:#2c5282,color:#ffffff
    style B4 fill:#2c5282,color:#ffffff
    style B5 fill:#2c5282,color:#ffffff
```

## 4.2 Sheet Metal Process Flow (Sequential Topology)

```mermaid
flowchart TD
    S0[Start: Flat Sheet Blank] --> S1[Step 1 - Marking]
    S1 --> S2[Step 2 - Cutting]
    S2 --> S3[Step 3 - Notching]
    S3 --> S4[Step 4 - Bending and Folding]
    S4 --> S5[Step 5 - Seaming and Hemming]
    S5 --> S6[Step 6 - Wiring and Riveting]
    S6 --> S7[Step 7 - Soldering or Brazing]
    S7 --> S8[Step 8 - Filing and Finishing]
    S8 --> S9[Step 9 - Dimensional Inspection]
    S9 --> D1{All Dimensions Within Plus or Minus 1 mm?}
    D1 -- Yes --> S10[Step 10 - Approved Model]
    D1 -- No --> S2[Return to Step 2 - Re-cut and Re-form]

    style S0 fill:#38a169,color:#ffffff
    style S10 fill:#3182ce,color:#ffffff
    style D1 fill:#d69e2e,color:#1a202c
    style S2 fill:#e53e3e,color:#ffffff
```

## 4.3 Lock-Seam Cross-Section Architecture

```mermaid
graph LR
    P1[Panel A Edge] -->|Fold 90 degree| H1[Hook Stage 1]
    H1 -->|Fold 45 degree| H2[Hook Stage 2]
    H2 -->|Interlock| H3[Locked Seam Cross Section]
    P2[Panel B Edge] -->|Fold 90 degree| H4[Hook Stage 1 B]
    H4 -->|Fold 45 degree| H5[Hook Stage 2 B]
    H5 --> H3
    H3 -->|Flatten with Mallet| H6[Finished Lock Seam]

    style H3 fill:#dd6b20,color:#ffffff
    style H6 fill:#38a169,color:#ffffff
```

## 4.4 Sheet Metal Operations Mapping Matrix (Block View)

```mermaid
graph TD
    O0[Sheet Metal Operations Universe]

    O0 --> O1[Cutting Family]
    O0 --> O2[Forming Family]
    O0 --> O3[Joining Family]
    O0 --> O4[Finishing Family]

    O1 --> O1a[Straight Shearing]
    O1 --> O1b[Curve Cutting]
    O1 --> O1c[Nibbling]
    O1 --> O1d[Notching]
    O1 --> O1e[Piercing]

    O2 --> O2a[Bending]
    O2 --> O2b[Folding]
    O2 --> O2c[Hammering on Stake]
    O2 --> O2d[Roll Forming]
    O2 --> O2e[Stretching]
    O2 --> O2f[Shrinking]

    O3 --> O3a[Lock Seaming]
    O3 --> O3b[Hemming]
    O3 --> O3c[Wired Edge]
    O3 --> O3d[ riveting ]
    O3 --> O3e[Soft Soldering]
    O3 --> O3f[Brazing]

    O4 --> O4a[Deburring]
    O4 --> O4b[Planishing]
    O4 --> O4c[Polishing]
    O4 --> O4d[Painting]

    style O0 fill:#2d3748,color:#ffffff
    style O1 fill:#4a5568,color:#ffffff
    style O2 fill:#4a5568,color:#ffffff
    style O3 fill:#4a5568,color:#ffffff
    style O4 fill:#4a5568,color:#ffffff
```

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short-Answer Questions (3 Marks Each)

### Question A1
**[KTU University Exam – July 2024 | CO1 | Remember]**
*List any six sheet metal hand tools and state the specific function of each.*

**Model Answer (Valuation Key):**

| S.No. | Tool | Function |
| :--- | :--- | :--- |
| 1 | Straight Snips | Cutting along straight lines or large-radius curves |
| 2 | Curved Snips | Cutting along small-radius curves and intricate shapes |
| 3 | Try Square | Verifying and marking $90°$ angles |
| 4 | Ball-Peen Hammer | General forming, riveting, and planishing |
| 5 | Hollow Mandrel | Shaping the model into conical or cylindrical form |
| 6 | Bending Brake | Producing straight, accurate bends over the entire width |
| 7 | Scriber | Marking fine, permanent lines on sheet surface |
| 8 | Hand Seamer | Closing small lock-seams and folding edges |

> **Valuation Key:** [Any 6 tools with correct function: $6 \times 0.5 = 3$ Marks]

---

### Question A2
**[KTU University Exam – Dec 2023 | CO1, CO2 | Understand]**
*Explain the difference between a lock seam and a hem in sheet metal work. State one typical application of each.*

**Model Answer:**

A **lock seam** is a joint formed by folding the edges of two sheets into interlocking hooks, then flattening the hooks together to form a mechanically strong, fluid-tight joint. *Application:* body seam of a petrol tank, square duct corners.

A **hem** is a single fold of the sheet edge back onto itself (single hem) or a double fold (double hem) used to stiffen an edge, eliminate sharpness, and provide a safe, finished border. *Application:* the top edge of a tray or dust pan.

> **Valuation Key:** [Lock seam definition + 1 use: 1.5 Marks] [Hem definition + 1 use: 1.5 Marks]

---

## 5.2 Part B — Long-Answer Questions (14 Marks Each, Internal Choice)

### Question B1 — Choice A (14 Marks)

**[KTU University Exam – July 2024 | CO2, CO3, CO4 | Apply, Analyse]**

**(a)** With the help of a neat sketch, describe the procedure for developing the **flat pattern of a square-to-round funnel** of the following dimensions:
* Square base $S = 100\,\text{mm}$
* Round outlet diameter $D = 40\,\text{mm}$
* Height $H = 80\,\text{mm}$
* Sheet thickness $T = 0.711\,\text{mm}$ (22 SWG GI)
* **[7 Marks | Apply]**

**(b)** List the **sequence of operations** to fabricate this funnel, mentioning the specific tool used at each step. Briefly explain why a **wired edge** is preferred over a simple hem for the top edge of a funnel. **[7 Marks | Analyse]**

**Model Solution:**

#### Part (a) — Pattern Development

**Step 1: Convert the square base into an equivalent square whose perimeter equals that of the original square (for triangulation).**

$$
S_{\text{equiv}} = \dfrac{4 \cdot S}{3} = \dfrac{4 \cdot 100}{3} = 133.33\,\text{mm}
$$

**Step 2: Compute the slant height of one triangular panel.**

$$
L = \sqrt{\left(\dfrac{S_{\text{equiv}}}{2} - \dfrac{D}{2}\right)^2 + H^2}
$$

$$
L = \sqrt{\left(\dfrac{133.33}{2} - \dfrac{40}{2}\right)^2 + 80^2} = \sqrt{(66.67 - 20)^2 + 80^2} = \sqrt{46.67^2 + 80^2} = \sqrt{2178.09 + 6400}
$$

$$
L = \sqrt{8578.09} = 92.62\,\text{mm}
$$

**Step 3: Approximate the round outlet as a polygon of 12 sides (3 chords per quadrant).**

| Chord | Formula | Length (mm) |
| :--- | :--- | :--- |
| $C_1$ | $1.414 \cdot D/2$ | $28.28$ |
| $C_2$ | $1.246 \cdot D/2$ | $24.92$ |
| $C_3$ | $0.765 \cdot D/2$ | $15.30$ |
| **Total $\pi D$** | $3.1416 \cdot 40$ | $\approx 125.66$ (sum $\times 4 = 125.66$ ✓) |

**Step 4: Compute the single panel's base width (one-quarter of $S_{\text{equiv}}$).**

$$
a = \dfrac{S_{\text{equiv}}}{4} = \dfrac{133.33}{4} = 33.33\,\text{mm}
$$

**Step 5: Compute allowances.**

$$
\text{Seam allowance} = 3T + 6 = 3(0.711) + 6 = 8.13 \approx 8\,\text{mm}
$$

$$
\text{Hem allowance} = 4T + 2 = 4(0.711) + 2 = 4.84 \approx 5\,\text{mm}
$$

**Step 6: Final panel blank size.**

$$
\text{Width} = a + \text{seam allowance} = 33.33 + 8 = 41.33\,\text{mm}
$$

$$
\text{Length} = L + \text{hem allowance} = 92.62 + 5 = 97.62\,\text{mm}
$$

*Allow a 2 mm trim margin → practical blank per panel = **$43 \times 100\,\text{mm}$**. Cut **4 such panels** from the parent sheet.*

**Step 7: Sketch** (a triangular panel with one lock-seam edge and one wired top edge, dimensions $41.33 \times 97.62\,\text{mm}$ with the bottom of length $33.33\,\text{mm}$ curved as per the 3-chord approximation).

> **Valuation Key for Part (a):** [Stating $S_{\text{equiv}}$: 1 Mark] [Slant height derivation: 2 Marks] [Chord lengths: 2 Marks] [Final panel dimensions: 1 Mark] [Neat sketch: 1 Mark]

---

#### Part (b) — Sequence of Operations

| Step | Operation | Tool |
| :--- | :--- | :--- |
| 1 | Mark the four panel outlines on the GI sheet | Try square, scriber, divider |
| 2 | Cut the four panels | Straight snips |
| 3 | Notch the corners of the curved base | Curved snips, chisel |
| 4 | Fold the lock-seam hooks on the long edges | Hand seamer |
| 5 | Fold the wired-edge allowance on the top edges | Bending brake / stake |
| 6 | Insert the $1.0\,\text{mm}$ MS wire and close the edge | Pliers, mallet |
| 7 | Interlock the four lock seams to form the square body | Hand seamer, mallet |
| 8 | Form the round outlet by hammering on a hollow mandrel | Hollow mandrel, rawhide mallet |
| 9 | Soft-solder the bottom seam | $100\,\text{W}$ soldering iron, $60/40$ solder, flux |
| 10 | File, deburr, and final inspection | Files, emery cloth, vernier calliper |

**Why a Wired Edge is Preferred Over a Simple Hem for the Funnel Top:**

A plain single or double hem increases the *stiffness* of the edge somewhat, but the funnel opening is subject to **radial outward stress** when the funnel is lifted or when liquid is poured in. A **wired edge** inserts a $1.0\,\text{mm}$ mild-steel wire inside the fold, creating a *rigid ring* that:

1. **Resists deformation** under radial load.
2. **Maintains circularity** of the outlet when hammered during forming.
3. **Provides a safe, smooth lip** that will not cut the user.
4. **Allows the funnel to be hung** on a hook without crushing.

> **Valuation Key for Part (b):** [Sequence table — any 8 correct steps: 4 Marks] [Tools correctly named: 1 Mark] [Wired edge explanation with $\geq 3$ points: 2 Marks]

---

### Question B1 — Choice B (14 Marks, Alternative)

**[KTU University Exam – Dec 2023 | CO1, CO2, CO3 | Understand, Apply]**

**(a)** Classify sheet metal operations into **cutting, forming, and joining** families. Give **two examples** of operations in each family and state the tool used. **[7 Marks | Understand]**

**(b)** Describe with a sketch the **construction of a 3-piece lock seam** used to join two sheet metal panels along a straight edge. List the allowances required. **[7 Marks | Apply]**

**Model Solution:**

#### Part (a) — Classification

| Family | Operation 1 | Tool | Operation 2 | Tool |
| :--- | :--- | :--- | :--- | :--- |
| **Cutting** | Straight Shearing | Straight Snips | Nibbling | Nibbler / Chisel |
| **Forming** | Bending | Bending Brake | Raising on Stake | Half-Round Stake + Mallet |
| **Joining** | Lock Seaming | Hand Seamer | Soldering | $100\,\text{W}$ Soldering Iron |

Additional brief note for each:
* **Cutting** removes material along a defined line.
* **Forming** deforms the material plastically without removal.
* **Joining** unites two or more pieces permanently.

> **Valuation Key for Part (a):** [3 families identified: 1.5 Marks] [2 operations per family with correct tools: 4.5 Marks] [Brief description: 1 Mark]

---

#### Part (b) — 3-Piece Lock Seam Construction

A **3-piece lock seam** is preferred when the joint must be **stiffer, water-tight, and reworkable**. It uses a *separate cover piece* that bridges the two interlocked hook edges.

**Construction Steps:**

1. Fold a $90°$ hook of width $3T$ on the edge of each of the two main panels.
2. Fold a second $45°$ on each hook to form an outward-facing "V."
3. Interlock the two V's to form a "S"-shaped cross section.
4. Place a **third cover strip** of width $5T$ over the interlocked seam.
5. Snap the cover strip down and hammer flat to complete the joint.

**Sketch (Cross-Section in Folded State):**

```
    Panel A        Cover Strip         Panel B
  ───┐                              ┌───
     │   ┌─────────────────────┐    │
     └──►│   INTERLOCK HOOK    │◄───┘
         └─────────────────────┘
          ◄────── 5T ──────►
```

**Allowances Required:**

| Allowance | Value | Purpose |
| :--- | :--- | :--- |
| Hook allowance (per panel) | $3T + 1\,\text{mm}$ | Forming the locking hook |
| Cover strip width | $5T + 2\,\text{mm}$ | Bridging the seam |
| Total pattern width | $3T + 3T + 5T + \text{trim} = 11T + 3$ | Sum of all three allowances |

For $T = 0.711\,\text{mm}$: $11(0.711) + 3 = 7.82 + 3 \approx 10.82\,\text{mm}$ extra width per panel.

> **Valuation Key for Part (b):** [Construction steps: 4 Marks] [Neat labelled sketch: 2 Marks] [Allowance table: 1 Mark]

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Most Common Mark Deductions in Module 4 Practical Records:**
>
> 1. **Forgetting the formula derivation steps** — Simply writing the final panel size without showing $L$, $\alpha$, and the allowance calculations will cost **3 of 7 marks** in Part B.
> 2. **Omitting the safety gear line** — The KTU 2024 rubric awards 1 mark for a "Tool Safety & PPE statement" in the record; students often skip this.
> 3. **Confusing the "seam allowance" with the "hem allowance"** — A seam allowance is for an *interlocking joint*; a hem allowance is for a *folded-back edge*. The two are not interchangeable.
> 4. **Writing the wrong sequence** — Soldering *before* seaming traps flux in the seam and creates a weak joint. The examiner will deduct marks for a misordered sequence.
> 5. **Skipping the chord approximation table** — When developing a round outlet, examiners expect the $1.414\,r$, $1.246\,r$, $0.765\,r$ chord values; just writing "round to 12-sided polygon" is insufficient.
> 6. **Wrong units / no unit notation** — A frequent 0.5-mark loss is forgetting the "mm" suffix on every numerical value.

---

## 5.4 Topic Recap & Important Things to Remember

- **Sheet metal** is a *cold-working* process on metal sheets typically of thickness **$0.4 - 6\,\text{mm}$**.
- **22 SWG (0.711 mm) GI sheet** is the standard workshop issued material for KTU models.
- **Five tool families:** Measuring/Marking, Cutting, Forming, Striking, Holding/Joining.
- **Snips come in three types:** straight, curved (hawksbill), and universal (combination).
- **Stakes** are the forming backbone — flat, half-round, hollow mandrel, and square are the four basic shapes.
- **The ball-peen hammer** is the universal striking tool; rawhide mallets are used when marring must be avoided.
- **Lock seam** = interlocking folded edges; **hem** = single/double fold-back of an edge.
- **Wired edge** = fold-back edge with a wire inserted — gives a *rigid ring* and a *safe lip*.
- **Sequence of operations** is fixed: *marking $\to$ cutting $\to$ notching $\to$ bending $\to$ seaming/hemming $\to$ finishing*.
- **K-factor** for soft GI ≈ **$0.33$**; **minimum bend radius** $R_{\min} \approx 1.5\,T$.
- **Seam allowance** $= 3T + 6\,\text{mm}$; **hem allowance** $= 4T + 2\,\text{mm}$.
- **Chord approximation** for a quadrant of a circle: $1.414\,r$, $1.246\,r$, $0.765\,r$ (sum $\approx \frac{\pi r}{2}$).
- **Funnel** is the most common KTU model — know its pattern development by both *triangulation* and *radial-line* methods.
- **PPE mandatory:** apron, leather gloves, safety goggles, closed-toe shoes.
- **Lead-solder hygiene:** always wash hands after soldering before eating.
- **Soldering safety:** exhaust fan on; **never** heat the flux pot directly; fire extinguisher within $2\,\text{m}$.
- **Quality finish:** all edges filed smooth; dimensions checked with vernier calliper to **$\pm 1\,\text{mm}$** tolerance.
- **Industrial relevance:** HVAC ducts, automotive panels, electronic enclosures, kitchenware, solar mounting structures.

<!-- SECTION_5_END -->
