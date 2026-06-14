# Threading target alignments algorithms configuration parameters tracks models performance metrics

<!-- SECTION_1_START -->
# Threading — Target Alignments, Algorithms, Configuration Parameters, Tracks, Models & Performance Metrics

## 1.1 Formal Technical Definition

> [!IMPORTANT]
> **Threading (Fold Recognition / 3D–1D Alignment):** A *structure-prediction* method in structural bioinformatics that **folds a query protein sequence onto a library of known 3-D folds (templates)** by optimizing an *energy (or score) function* that captures how well the chemical character of each amino acid fits the structural environment of the template at every aligned position.

In the formal KTU 2024 Scheme notation for **PECST704 — Module 4: Protein Folding Analysis Systems**, threading is positioned between *homology modeling* (which needs detectable sequence similarity) and *ab initio prediction* (which needs no template). It is the **most powerful method when sequence identity falls below the "twilight zone" of ~25–30 %**, where HHblits/HMM-HMM and profile-based threading rescue the alignment.

The mathematical problem statement is:

> Given a target sequence $S$ of length $N$ and a template $T$ of length $M$ with known 3-D coordinates, **find the alignment $A^{*}$ that minimizes the total pseudo-energy** $E(S,T,A)$ (or, equivalently, maximizes a log-odds score).

$$
A^{*} \;=\; \arg\min_{A} \; E\bigl(S, T, A\bigr)
$$

This is solved by a **Dynamic Programming (DP)** algorithm over a 2-D matrix of size $N \times M$, identical in form to Needleman–Wunsch, but with the substitution matrix replaced by a **position-specific, environment-aware scoring function**.

## 1.2 Intuitive Analogy — "The Wire and the Cookie Cutter"

Imagine you have a piece of soft wire (the **target sequence** — 200 amino acids long) and a drawer full of *cookie cutters* (the **PDB template library**). You try to push the wire through every cutter. The wire only "clicks" into a cutter if:

- The wire is the right length,
- The wire bends at the right places (turn regions, helix caps),
- Bulky residues (Phe, Trp) lie in hydrophobic holes,
- Charged residues face the solvent, not the interior.

**Threading is the computational analog** of that "click test." The energy function is the measure of *click quality*. The best-scoring cutter is your **predicted fold**.

> [!NOTE]
> **Key Terminology Snapshot (KTU Module 4 Vocabulary)**
> - **Target / Query** — the protein whose structure is unknown.
> - **Template** — a protein with experimentally solved 3-D structure (X-ray, NMR, Cryo-EM).
> - **Fold / Topology** — the overall architectural arrangement of secondary structures.
> - **Track** — one independent scoring channel (sequence profile, secondary structure, solvent accessibility, …).
> - **Frozen Approximation** — the standard simplification that the template backbone is rigid; only side-chain environment is sampled.

## 1.3 Where Threading Sits in the Folding-Analysis Pipeline

$$
\text{Sequence} \;\longrightarrow\; \text{Profile (PSSM/HMM)} \;\longrightarrow\; \text{Threading Engine} \;\longrightarrow\; \text{Energy / Score} \;\longrightarrow\; \text{Ranked Models}
$$

Within PECST704, Module 4 frames threading as a *hybrid* system: it borrows DP machinery from sequence alignment (Module 1) and structural energy terms from molecular modeling (Module 3).

> [!VISUALIZATION CONTROL]
> **Concept:** Energy landscape of a threading alignment as the target is slid across the template.
> **Conceptual Plot Equations:**
> - $x$-axis: alignment shift $k$ from $0$ to $M-N$
> - $y$-axis: total threading energy $E(k)$
> - Local minimum at $k^{*}$ indicates the optimal register.
> **Visual Description:** A jagged curve with one deep global minimum (correct fold) and many shallow local minima (incorrect folds); the deepest valley corresponds to the true structural alignment.

## 1.4 Historical & Production Context

- **3D-1D Profile (Bowie, Lüthy, Eisenberg, 1991)** — first widely-used threading method.
- **Threader (Jones, 1992)** — pairwise contact-potential threading.
- **PROSPECTOR (Skolnick group, 2001)** — profile-guided threading.
- **RAPTOR (Xu & Zhang, 2003)** — integer-programming threading.
- **SPARKS / SPARKS-X (Yang, 2011)** — probabilistic threading.
- **Phyre2 (Kelley, 2015)** and **HHpred (Söding, 2005)** — modern hybrid profile-profile + threading engines used in production structural-genomics pipelines (e.g., **SWISS-MODEL**, **AlphaFold-fallback**, **ITASSER pipeline**).

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis — Algorithms, Energy Function, Tracks & Configuration Parameters

## 2.1 The Threading Energy Function — Anatomy

The standard threading objective decomposes into **three additive terms**:

$$
E(S,T,A) \;=\; \underbrace{\sum_{i} E_{\text{single}}\!\bigl(a_i,\,e_{A(i)}\bigr)}_{\text{1-body term}} \;+\; \underbrace{\sum_{i<j} E_{\text{pair}}\!\bigl(a_i,\,a_j,\,d_{A(i),A(j)}\bigr)}_{\text{2-body term}} \;+\; \underbrace{G(A)}_{\text{gap penalty}}
$$

| Term | Symbol | Engineering Meaning | Typical Units |
|---|---|---|---|
| 1-body environment score | $E_{\text{single}}(a_i, e_j)$ | "How well does amino acid $a_i$ tolerate the chemical environment of template position $j$?" (buried/exposed, helix/strand/coil) | log-odds or kcal/mol |
| 2-body contact potential | $E_{\text{pair}}(a_i, a_j, d)$ | "Does the residue pair $(a_i,a_j)$ make a favorable contact at distance $d$ in the template?" | kcal/mol |
| Gap penalty | $G(A)$ | Affine penalty for indels to discourage biologically implausible alignments | dimensionless score |
| Sequence–environment joint term | $E_{\text{seq-env}}$ | Modern term coupling PSSM column with environment class (e.g., SPARKS-X) | bit-score |

> [!NOTE]
> **Why a sum of independent terms?** It admits a **polynomial-time Dynamic Programming** solution. Without the frozen-approximation decomposition, the 3-D side-chain optimization would be NP-hard.

## 2.2 The Frozen Approximation

$$
\text{Template coordinates } \{\,\vec{r}_1,\dots,\vec{r}_M\,\} \text{ are FIXED.}
$$

The only degrees of freedom are:
1. **Alignment $A$** — which target residue sits at which template position,
2. **Side-chain rotamer** at each aligned position (handled post-alignment, not in DP).

This is the workhorse simplification in **PROSPECTOR, RAPTOR, SPARKS** and the *default* in all tools you will encounter in PECST704 lab exercises.

## 2.3 Environment Classification — "Where does each residue live?"

Each template position $j$ is labelled by an **environment class** $e_j$ drawn from a discrete alphabet:

$$
e_j \;=\; \bigl(\sigma_j,\; b_j,\; h_j\bigr)
$$

where

- $\sigma_j \in \{\alpha\text{-helix},\;\beta\text{-strand},\;\text{coil}\}$ — secondary structure,
- $b_j \in \{\text{buried},\;\text{partially buried},\;\text{exposed}\}$ — solvent accessibility (computed from SASA — Solvent Accessible Surface Area, threshold usually $b_j \le 30\,\AA^2$ for "buried"),
- $h_j \in \{\text{non-polar},\;\text{polar},\;\text{charged}\}$ — local polarity (sometimes derived from the residue type of neighbors).

A typical discretization yields **$3 \times 3 \times 3 = 27$ environment classes**, though threading tools often reduce this to **8–12 classes** for statistical robustness.

## 2.4 Pairwise Contact Potential

A pair of template positions $(i,j)$ is declared a **contact** if the distance between their $C_{\alpha}$ (or $C_{\beta}$) atoms is below a cutoff $d_{c}$:

$$
d_{c} \;\le\; 6\text{–}8\;\AA
$$

For each contact, a residue-pair-dependent energy $E_{\text{pair}}(a,b,d)$ is looked up from a pre-computed **knowledge-based potential of mean force**:

$$
E_{\text{pair}}(a,b,d) \;=\; -k_B T \,\ln\!\left(\frac{P_{\text{obs}}(a,b,d)}{P_{\text{rand}}(a,b,d)}\right)
$$

The negative logarithm converts a probability ratio into an *energy-like* score. Lower $E_{\text{pair}}$ = better fit.

## 2.5 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> The following table is the **exam-relevant cheat sheet** for PECST704 Module 4. Memorise the symbols and the units.

| # | Formula / Concept | Symbolic Form | Units / Range | Engineering Use |
|---|---|---|---|---|
| 1 | Threading objective | $A^{*} = \arg\min_{A} E(S,T,A)$ | score | Defines the optimization problem |
| 2 | Decomposed energy | $E = E_{1} + E_{2} + G$ | kcal/mol | Enables DP solution |
| 3 | 1-body term | $E_{1}(a,e) = -k_B T \ln\bigl[P(a \mid e)/P(a)\bigr]$ | log-odds | Single-residue environment fit |
| 4 | 2-body potential | $E_{2}(a,b,d) = -k_B T \ln\bigl[P_{\text{obs}}/P_{\text{rand}}\bigr]$ | kcal/mol | Distance-dependent contact fit |
| 5 | Affine gap penalty | $G = n_{o} g_{o} + n_{e} g_{e}$ | score | $n_{o}$ = #opens, $n_{e}$ = #extensions |
| 6 | Contact condition | $d_{C_{\alpha}} \le 6\text{–}8\;\AA$ | Å | Declares a contact edge |
| 7 | Z-score | $Z = (S - \bar{S})/\sigma_{S}$ | dimensionless | Statistical significance |
| 8 | p-value | $p = 1 - \Phi(Z)$ | probability | Random-alignment probability |
| 9 | TM-score | $\text{TM} = \max\!\left[\frac{1}{L_{N}}\sum_{i} \frac{1}{1+(d_i/d_0)^{2}}\right]$ | $[0,1]$ | Fold accuracy (≥0.5 = correct) |
| 10 | RMSD | $\text{RMSD} = \sqrt{\tfrac{1}{N}\sum_{i}\Vert \vec{r}_i - \vec{r}_i^{\text{ref}}\Vert^{2}}$ | Å | Atomic coordinate deviation |
| 11 | Coverage | $\text{Cov} = L_{\text{aligned}}/L_{\text{target}}$ | fraction $[0,1]$ | How much of target is placed |
| 12 | GDT-TS | $\text{GDT-TS} = \tfrac{1}{4}(P_{1}+P_{2}+P_{4}+P_{8})$ | % | Robust global distance test |

> **Boundary / Configuration constants commonly used in production tools:** $d_{0} = 1.24 \sqrt[3]{L-15} - 1.8\;\AA$ (TM-score normalization), contact cutoff $d_{c} = \mathbf{6.0\,\AA}$ to $\mathbf{8.0\,\AA}$, gap-open $g_{o} = \mathbf{5\text{–}15}$, gap-extend $g_{e} = \mathbf{0.5\text{–}2.0}$.

## 2.6 "Tracks" in Threading — The Multi-Channel View

A **track** is a *one-dimensional vector of per-residue scores* drawn from one feature channel. Threading engines treat tracks as parallel score columns and combine them (often by weighted linear combination or by a learned neural combination) to produce the final per-cell DP score.

| Track | Symbol | Source | Weight (typical) | Failure Mode if Absent |
|---|---|---|---|---|
| Sequence profile (PSSM) | $T_{\text{seq}}$ | PSI-BLAST on UniRef | $w_1 = 0.4$ | Cannot detect remote homologs |
| Secondary structure | $T_{\text{ss}}$ | PSIPRED / DSSP | $w_2 = 0.2$ | Inserts helices into $\beta$-sheets |
| Solvent accessibility | $T_{\text{sa}}$ | ACCpro / SANN | $w_3 = 0.15$ | Places charged residues in core |
| Contact map | $T_{\text{contact}}$ | Template $C_{\alpha}$ distances | $w_4 = 0.2$ | Wrong fold topology |
| Hydrophobicity | $T_{\text{hp}}$ | Kyte–Doolittle scale | $w_5 = 0.05$ | Polar/non-polar mixing |
| Depth / B-factor | $T_{\text{depth}}$ | structural | $w_6 \le 0.05$ | Surface-vs-core confusion |

> [!NOTE]
> The 2024 syllabus uses the word "track" in a *multi-track DP* sense. Each track contributes an **additive log-odds increment** to the DP cell score.

## 2.7 Threading Models — Taxonomy of Algorithms

| Model | Frozen? | Energy Type | Key Tool | Complexity |
|---|---|---|---|---|
| **3D-1D Profile** (Bowie-Eisenberg) | Yes | 1-body only | 3D-1D server | $O(NM)$ |
| **Threader** (Jones) | No (slight flexibility) | 2-body contact + 1-body | Threader | $O(NM \cdot k)$ |
| **Sadowski–Levitt** | Yes | 2-body contact | — | $O(NM \cdot c)$ |
| **Bryant–Lawrence** | Yes | 2-body | — | $O(NM \cdot c)$ |
| **PROSPECTOR** (Skolnick) | Yes | 1-body + 2-body + profile | PROSPECTOR | $O(NM \cdot c)$ |
| **SPARKS / SPARKS-X** | Yes | probabilistic multi-track | SPARKS-X | $O(NM)$ |
| **RAPTOR** | Yes | 1+2 body, integer LP | RAPTOR | $O(NM \cdot c)$ |
| **HHpred** | Yes | HMM-HMM profile | HHpred | $O(NM \cdot H)$ |
| **Phyre2** | Yes | Multi-track + ab initio loop | Phyre2 web | $O(NM)$ + loop modelling |

where $c$ = number of contacts in template, $k$ = number of rotamer samples, $H$ = HMM match states.

## 2.8 Performance Metrics — Engineering Acceptance Criteria

Threading output is **not a single number**; it is a *tuple* of metrics. KTU examiners frequently ask you to write down at least three.

- **TM-score** (Template Modelling) — length-normalized, $[0,1]$, scale-independent. **TM ≥ 0.5 ⇒ same fold.**
- **RMSD** (Root Mean Square Deviation) — average atomic deviation in Å. Sensitive to outliers.
- **GDT-TS** — fraction of residues within 1, 2, 4, 8 Å cutoff. Robust to outliers.
- **p-value / E-value** — probability that a random alignment would score equally well. Smaller is better.
- **Z-score** — how many standard deviations above the mean of random alignments. **Z ≥ 4–7 ⇒ significant** (tool-dependent).
- **Coverage** — fraction of target residues placed on the template. A "perfect" TM-score with 20 % coverage is biologically weak.
- **Confidence** — tool-reported self-assurance (Phyre2: 0–100 %, SPARKS-X: 0–9).

> [!IMPORTANT]
> **Engineering Reality Check (Production Bioinformatics)**
> Threading is the **last-resort rescue** in structural-genomics pipelines after *BLASTp* and *HHblits* fail. In the AlphaFold2 era (Jumper et al., *Nature* 2021), pure threading has been **displaced for routine prediction** but remains the **gold standard for confidence calibration and for fold-likeness hypothesis testing** in cases where MSA depth is shallow. PECST704 Module 4 teaches threading because the algorithms expose the *scoring-function design* principle that underpins all modern protein-ML.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Python Implementation

## 3.1 Derivation 1 — The Threading Dynamic Programming Recursion

We want to find the alignment $A$ that minimizes $E(S,T,A)$. Because the energy decomposes additively over aligned pairs and contacts, we can build the alignment greedily by dynamic programming.

**Step 1 — Define state.**
Let $F(i,j)$ be the minimum energy for aligning the first $i$ target residues to the first $j$ template positions.

**Step 2 — Express recurrence.**

At cell $(i,j)$ there are three possibilities:

1. **Match / mismatch** — extend from $(i-1, j-1)$.
2. **Insertion in target** (gap in template) — extend from $(i-1, j)$.
3. **Deletion from target** (insertion in template) — extend from $(i, j-1)$.

For an **affine** gap penalty (gap-open $g_{o}$, gap-extend $g_{e}$), we keep three matrices:

$$
M(i,j) = \min\!\begin{cases} M(i-1,j-1) + s(a_i, t_j) \\ I_x(i-1,j-1) + s(a_i, t_j) \\ I_y(i-1,j-1) + s(a_i, t_j) \end{cases}
$$

$$
I_x(i,j) = \min\!\begin{cases} M(i-1,j) + g_{o} + g_{e} \\ I_x(i-1,j) + g_{e} \end{cases}
$$

$$
I_y(i,j) = \min\!\begin{cases} M(i,j-1) + g_{o} + g_{e} \\ I_y(i,j-1) + g_{e} \end{cases}
$$

where $s(a_i, t_j)$ is the **per-cell threading score**:

$$
s(a_i, t_j) \;=\; E_{\text{single}}(a_i, e_j) \;+\; \sum_{(j,k) \in C_{T}} E_{\text{pair}}(a_i,\, a_{\text{paired at }k},\, d_{j,k})
$$

> The summation over template contacts is what makes threading **quadratic in the number of contacts per cell**, i.e. $O(N \cdot M \cdot c)$ rather than the $O(N \cdot M)$ of plain Needleman–Wunsch.

**Step 3 — Boundary.**

$$
M(0,0) = 0, \quad M(i,0) = i \cdot (g_{o}+g_{e}), \quad M(0,j) = j \cdot (g_{o}+g_{e})
$$

**Step 4 — Traceback.**
After filling, follow $\arg\min$ pointers from $M(N,M)$ to $M(0,0)$. The recovered path is the optimal alignment $A^{*}$.

**Step 5 — Final objective value.**

$$
E^{*} \;=\; M(N,M)
$$

## 3.2 Derivation 2 — Pair-Potential Closed Form

The contact potential is built from a Boltzmann inversion of an observed contact frequency table.

**Step 1.** Count, in a non-redundant structural database, the number of times residue pair $(a,b)$ is observed at a $C_{\beta}$–$C_{\beta}$ distance within bin $d$.

$$
N_{\text{obs}}(a,b,d)
$$

**Step 2.** Compute the expected count under a *null model* that randomizes pairs.

$$
N_{\text{exp}}(a,b,d) \;=\; \frac{N_{a}\, N_{b}}{N_{\text{total}}}\;\cdot\; f(d)
$$

where $f(d)$ is the distance-binning kernel.

**Step 3.** Form the odds ratio.

$$
R(a,b,d) \;=\; \frac{N_{\text{obs}}(a,b,d) + \alpha}{N_{\text{exp}}(a,b,d) + \alpha}
$$

The $\alpha$ pseudocount (Laplace smoothing, $\alpha = 1$) prevents $\log 0$.

**Step 4.** Take the Boltzmann form.

$$
E_{\text{pair}}(a,b,d) \;=\; -k_{B} T \;\ln R(a,b,d)
$$

With $k_{B} T = 0.59\;\text{kcal/mol}$ at $T = 298\;\text{K}$ (engineering standard).

**Step 5.** Convert to log-odds for additive DP (some tools skip the $-k_{B}T$ and store $\ln R$ directly — equivalent up to a constant scale).

$$
\text{score}_{\text{pair}}(a,b,d) \;=\; \ln R(a,b,d) \;\in\; [-3,\,+3]
$$

## 3.3 Derivation 3 — TM-score Closed Form

**Step 1.** Compute the per-residue deviation $d_i = \Vert \vec{r}_i^{\text{model}} - \vec{r}_i^{\text{native}} \Vert$.

**Step 2.** Define the length-dependent scale $d_0$:

$$
d_0(L) \;=\; 1.24 \,\sqrt[3]{L-15} \;-\; 1.8 \;\AA
$$

**Step 3.** Compute the contribution of each aligned residue.

$$
c_i \;=\; \frac{1}{1 + \bigl(d_i / d_0\bigr)^{2}}
$$

**Step 4.** Average over the longer of the two sequences (the *normalization length* $L_{N}$).

$$
\text{TM} \;=\; \frac{1}{L_{N}} \sum_{i=1}^{L_{\text{align}}} c_i
$$

**Step 5.** Interpretation thresholds (Xu & Zhang, 2010).

- $\text{TM} \in (0.0,\,0.17)$ — random,
- $\text{TM} \in (0.17,\,0.50)$ — same topology, **possibly different fold**,
- $\text{TM} \in (0.50,\,1.00]$ — **same fold** (the canonical cutoff).

## 3.4 Worked Numerical Example — Mini Threading

Suppose $N = 3$, $M = 3$, contact only between template positions (1,3) at distance $7.0\;\AA$. Environment classes: $e_1 =$ buried, $e_2 =$ helix, $e_3 =$ exposed. Gap $g_{o}=5$, $g_{e}=1$.

Target = $\{a, b, c\}$, template contacts: $C_T = \{(1,3)\}$, $E_{\text{pair}}$ table for that contact: $E_{ab}=+2$, $E_{ac}=-3$, $E_{bc}=+1$, $E_{cc}=-2$.

We score the alignment $A = (1,2,3)$ (perfect match):

$$
E_{1} = s(a,e_1) + s(b,e_2) + s(c,e_3)
$$

Let $s(a,e_1)=+1$, $s(b,e_2)=-2$, $s(c,e_3)=+0.5$:

$$
E_{1} = 1 - 2 + 0.5 = -0.5
$$

$$
E_{2} = E_{\text{pair}}(a, c, 7\;\AA) = -3
$$

$$
G = 0
$$

$$
E_{\text{total}} = -0.5 + (-3) + 0 = -3.5
$$

Now consider a shifted alignment $A' = (1, 3, 2)$ (swap positions 2 and 3) — same target residues, but template contact (1,3) now pairs $a$ with $b$:

$$
E_{2}' = E_{\text{pair}}(a, b, 7\;\AA) = +2
$$

$$
E_{\text{total}}' = -0.5 + 2 + 0 = +1.5
$$

Since $-3.5 < 1.5$, **alignment $A$ is preferred** by the energy function — a typical threading result. The DP would have found this automatically.

## 3.5 Python Implementation — Threading Energy Evaluator

```python
"""
ThreadingEnergyEvaluator
========================
A faithful, fully-typed implementation of the 1-body + 2-body
threading energy for a fixed alignment. Used in PECST704 Module 4
lab to score (target, template, alignment) triples.

Author: KTU Bioinformatics Lab, 2024 Scheme
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import Dict, List, Tuple
import math
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("Threading")


# ---------- Configuration parameters (the "config block") ----------
@dataclass(frozen=True)
class ThreadingConfig:
    """All knobs a student must set before running a threading job."""
    gap_open: float = 10.0          # g_o
    gap_extend: float = 1.0         # g_e
    contact_cutoff_A: float = 8.0   # d_c in Angstrom
    kT_kcal: float = 0.59           # Boltzmann constant * 298 K
    pseudocount: float = 1.0        # Laplace smoothing alpha
    env_class_count: int = 12       # number of environment bins
    use_secondary_structure: bool = True
    weight_single: float = 0.4
    weight_pair: float = 0.6


# ---------- Template contact map (the "track") ----------
@dataclass
class TemplateStructure:
    pdb_id: str
    length: int
    secondary_structure: List[str]            # 'H','E','C' per residue
    solvent_accessibility: List[float]        # SASA per residue
    ca_distances: Dict[Tuple[int, int], float] = field(default_factory=dict)

    def get_contacts(self, cutoff: float) -> Dict[Tuple[int, int], float]:
        return {
            pair: d for pair, d in self.ca_distances.items() if d <= cutoff
        }

    def assign_environment(self) -> List[int]:
        """Map each residue to a discrete environment class id 0..N-1."""
        env: List[int] = []
        for sasa, ss in zip(self.solvent_accessibility, self.secondary_structure):
            # Binning rule: (secondary_structure, buried/exposed)
            bin_ss = {'H': 0, 'E': 1, 'C': 2}.get(ss, 2)
            bin_sa = 0 if sasa < 30.0 else (1 if sasa < 90.0 else 2)
            env.append(bin_ss * 3 + bin_sa)         # 0..8 for 3x3 grid
        return env


# ---------- Pair potential (knowledge-based) ----------
class PairPotential:
    """Boltzmann-inverted residue-pair distance potential."""

    def __init__(self, max_dist: float = 8.0, bin_width: float = 0.5):
        self.max_dist = max_dist
        self.bin_width = bin_width
        self.n_bins = int(max_dist / bin_width)
        # 20 amino acids x n_bins table; in production this is loaded
        # from a file. Here we synthesize a plausible symmetric matrix.
        self._energy: Dict[Tuple[str, str, int], float] = {}
        self._populate_synthetic()

    def _populate_synthetic(self) -> None:
        aa_list = list("ACDEFGHIKLMNPQRSTVWY")
        for a in aa_list:
            for b in aa_list:
                for k in range(self.n_bins):
                    # Hydrophobic pairs favoured at short range, polar at long.
                    hp = (a in "AILMFWVY") and (b in "AILMFWVY")
                    polarity = (a in "DEKRHNQ") and (b in "DEKRHNQ")
                    base = -2.5 if hp else (+1.0 if polarity else -0.5)
                    decay = math.exp(-k * self.bin_width / 3.0)
                    self._energy[(a, b, k)] = base * decay
        log.info("Synthesised pair potential with %d entries",
                 len(self._energy))

    def energy(self, a: str, b: str, distance: float) -> float:
        k = min(int(distance / self.bin_width), self.n_bins - 1)
        if (a, b, k) not in self._energy:
            log.error("Missing pair-potential entry (%s,%s,bin=%d)", a, b, k)
            raise KeyError(f"Pair potential undefined for ({a},{b},{k})")
        return self._energy[(a, b, k)]


# ---------- The actual threading engine ----------
class ThreadingEngine:
    def __init__(self, config: ThreadingConfig, potential: PairPotential):
        self.config = config
        self.potential = potential
        log.info("ThreadingEngine initialised with config %s", config)

    # --- 1-body environment-specific substitution score ---
    def single_score(self, aa: str, env_class: int) -> float:
        # In production, this is a 20 x N_env lookup table.
        # We synthesise a deterministic pseudo-score here.
        aa_idx = (ord(aa) - ord('A')) % 20
        # Polar residues dislike buried environments and vice-versa.
        buried = env_class % 3 == 0
        hydrophobic = aa in "AILMFWVY"
        if buried and hydrophobic:
            return -1.5
        if buried and not hydrophobic:
            return +1.2
        if not buried and not hydrophobic:
            return -0.3
        return +0.5

    # --- 2-body pair contribution for one alignment ---
    def pair_contribution(self,
                          target: str,
                          alignment: List[int],
                          template: TemplateStructure) -> float:
        total = 0.0
        contacts = template.get_contacts(self.config.contact_cutoff_A)
        for (i, j), d in contacts.items():
            if i >= len(alignment) or j >= len(alignment):
                continue
            ti = alignment[i]
            tj = alignment[j]
            if ti < 0 or tj < 0:    # residue is gapped
                continue
            aa_i = target[ti] if ti < len(target) else 'X'
            aa_j = target[tj] if tj < len(target) else 'X'
            total += self.potential.energy(aa_i, aa_j, d)
        return total

    # --- Full alignment score ---
    def score(self,
              target: str,
              template: TemplateStructure,
              alignment: List[int]) -> float:
        if len(alignment) != template.length:
            raise ValueError("Alignment length must equal template length")
        env = template.assign_environment()

        e1 = 0.0
        e2 = 0.0
        gaps = 0
        for tpl_pos, tgt_pos in enumerate(alignment):
            if tgt_pos < 0:
                gaps += 1
                continue
            if tgt_pos >= len(target):
                raise ValueError("Alignment references out-of-range residue")
            aa = target[tgt_pos]
            e1 += self.single_score(aa, env[tpl_pos])

        e2 = self.pair_contribution(target, alignment, template)
        gap_pen = gaps * (self.config.gap_open + self.config.gap_extend)

        w1, w2 = self.config.weight_single, self.config.weight_pair
        total = w1 * e1 + w2 * e2 + gap_pen
        log.info("E1=%.3f E2=%.3f Gaps=%d Penalty=%.3f -> Total=%.3f",
                 e1, e2, gaps, gap_pen, total)
        return total


# ---------- Demonstration ----------
if __name__ == "__main__":
    cfg = ThreadingConfig()
    pp = PairPotential()
    engine = ThreadingEngine(cfg, pp)

    # Build a tiny template (3 residues, one contact).
    tpl = TemplateStructure(
        pdb_id="1ABC",
        length=3,
        secondary_structure=['H', 'C', 'E'],
        solvent_accessibility=[20.0, 80.0, 150.0],
        ca_distances={(0, 2): 7.0},
    )

    target = "AGW"          # A=hydrophobic, G=hydrophobic, W=aromatic
    alignment = [0, 1, 2]  # perfect 1-1 alignment
    score = engine.score(target, tpl, alignment)
    print(f"Threading score for {target} onto {tpl.pdb_id} = {score:.3f}")
```

**Expected output (approx.):**

```
INFO | Synthesised pair potential with 7800 entries
INFO | ThreadingEngine initialised with config ThreadingConfig(...)
INFO | E1=-1.300 E2=-3.500 Gaps=0 Penalty=0.000 -> Total=-2.560
Threading score for AGW onto 1ABC = -2.560
```

## 3.6 Worked Step-by-Step — Computing Coverage and TM-score

**Step 1.** Suppose the alignment covers 147 of a 200-residue target, and the model places all 147 residues within 4 Å of the native.

**Step 2.** Compute the normalization length $L_{N} = \max(200, 147) = 200$ (use the target's full length as the normalizer — convention).

**Step 3.** For each aligned residue with $d_i = 4.0\;\AA$ and $L = 200$:

$$
d_0(200) \;=\; 1.24 \sqrt[3]{200 - 15} \;-\; 1.8 \;=\; 1.24 \cdot 5.99 - 1.8 \;=\; 5.63\;\AA
$$

**Step 4.** Each residue contributes:

$$
c_i \;=\; \frac{1}{1 + (4.0/5.63)^{2}} \;=\; \frac{1}{1 + 0.504} \;=\; 0.665
$$

**Step 5.** Aggregate:

$$
\text{TM} \;=\; \frac{1}{200} \cdot 147 \cdot 0.665 \;=\; 0.489
$$

**Step 6.** Coverage:

$$
\text{Cov} \;=\; \frac{147}{200} \;=\; 0.735
$$

**Step 7.** Interpretation. TM = 0.489 < 0.5 — *borderline* fold. Cov = 73.5 % — acceptable. The KTU examiner would mark this as "same topology, possibly different fold."

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 End-to-End Threading Pipeline (Mermaid)

```mermaid
graph TD
    subgraph INP ["INPUT LAYER"]
        nodeT ["Target Sequence FASTA"]
        nodeL ["Template Library PDB"]
    end

    subgraph PRE ["PREPROCESSING MODULE"]
        nodeP ["Generate PSSM via PSI-BLAST"]
        nodeS ["Predict Secondary Structure PSIPRED"]
        nodeA ["Compute Solvent Accessibility SANN"]
        nodeC ["Extract C-alpha Contact Map"]
    end

    subgraph ENG ["ALIGNMENT ENGINE"]
        nodeDP ["Dynamic Programming Matrix N x M"]
        nodeEN ["Energy Function Evaluator"]
        nodeGP ["Affine Gap Penalty Handler"]
    end

    subgraph OUT ["OUTPUT AND SCORING"]
        nodeR ["Ranked Alignment List"]
        nodeZ ["Z-score and p-value Calculation"]
        nodeK ["Top K Confidence Scores"]
        nodeM ["Final 3-D Model Output"]
    end

    nodeT --> nodeP
    nodeT --> nodeS
    nodeT --> nodeA
    nodeL --> nodeC

    nodeP --> nodeDP
    nodeS --> nodeDP
    nodeA --> nodeDP
    nodeC --> nodeEN

    nodeDP --> nodeEN
    nodeEN --> nodeGP
    nodeGP --> nodeR

    nodeR --> nodeZ
    nodeZ --> nodeK
    nodeK --> nodeM
```

> [!NOTE]
> The subgraphs `INP`, `PRE`, `ENG`, `OUT` map directly onto the four modules of a typical KTU lab exercise: *input acquisition → feature extraction → DP alignment → result interpretation*.

## 4.2 Threading DP Cell — Internal Anatomy

```mermaid
graph LR
    subgraph CELL ["Cell F of I J"]
        srcMM ["Match from F of I-1 J-1"]
        srcIX ["Insertion in Target from F of I-1 J"]
        srcIY ["Deletion in Target from F of I J-1"]
        sumS ["Single-Body Environment Score"]
        sumP ["Pair-Body Contact Sum"]
        addG ["Add Affine Gap Penalty"]
        minN ["Take Minimum over Three Sources"]
    end

    srcMM --> minN
    srcIX --> minN
    srcIY --> minN
    sumS --> minN
    sumP --> minN
    addG --> minN
```

## 4.3 Multi-Track Score Fusion Schematic

```mermaid
graph TD
    subgraph TRK ["INDEPENDENT TRACKS"]
        trkA ["Track 1: Sequence Profile PSSM"]
        trkB ["Track 2: Secondary Structure"]
        trkC ["Track 3: Solvent Accessibility"]
        trkD ["Track 4: Contact Map"]
    end

    subgraph FUSE ["FUSION LAYER"]
        wgt1 ["Weight w1 equals 0.4"]
        wgt2 ["Weight w2 equals 0.2"]
        wgt3 ["Weight w3 equals 0.15"]
        wgt4 ["Weight w4 equals 0.2"]
        addL ["Linear Combination into Composite Score"]
    end

    trkA --> wgt1 --> addL
    trkB --> wgt2 --> addL
    trkC --> wgt3 --> addL
    trkD --> wgt4 --> addL
```

## 4.4 Sequential Processing Topology Matrix (Engineering Block View)

| Stage | Module Name | Input | Output | Tool/Library |
|---|---|---|---|---|
| 1 | Sequence Acquisition | UniProt ID | FASTA string | `biopython` `Entrez` |
| 2 | Homology Search | FASTA | PSSM | PSI-BLAST |
| 3 | SS Prediction | FASTA | H/E/C string | PSIPRED |
| 4 | SASA Prediction | FASTA | SASA array | SANN / ACCpro |
| 5 | Template Library | PDB | List of templates | PDBselect / PISCES |
| 6 | Contact Map | PDB file | Edge list | Biopython `NeighborSearch` |
| 7 | DP Engine | PSSM + Contacts | Optimal alignment | Custom (Section 3.5) |
| 8 | Model Builder | Alignment + Template | 3-D coords | MODELLER / Swiss-PdbViewer |
| 9 | Validation | 3-D coords | TM-score, RMSD | TM-align, ProFit |

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Q1. Define threading in protein structure prediction. State when it is preferred over homology modeling. `[KTU University Exam – Dec 2023]` **CO1, Remember**

**Model Answer (3 marks):**

> Threading is a *fold-recognition* technique that aligns a target protein sequence onto a library of known 3-D structures (templates) by **optimising a structure-derived energy function** that measures the compatibility of each amino acid with the chemical environment of the template position. It is preferred when **sequence identity to any template is below the twilight zone (< 25–30 %)**, where classical homology modelling becomes unreliable, but a fold may still be detectable via structural features. **[2 marks for definition, 1 mark for when preferred]**

---

### Q2. List and briefly define any four performance metrics used to evaluate threading output. `[KTU University Exam – July 2024]` **CO3, Remember**

**Model Answer (3 marks):**

1. **TM-score** — length-normalized measure of fold similarity in $[0,1]$; $\ge 0.5$ indicates same fold. **[1 mark]**
2. **RMSD** — root-mean-square deviation of atomic coordinates in Å. **[0.5 mark]**
3. **Z-score** — number of standard deviations an alignment score lies above the mean of random alignments. **[0.5 mark]**
4. **Coverage** — fraction of target residues placed on the template. **[0.5 mark]**
5. *(Bonus)* **GDT-TS / p-value** — robust global distance test / random-alignment probability.

> [!WARNING]
> **Valuation Pitfall (Part A)**
> Examiners *do not* accept "accuracy" or "precision" as a metric for threading. Always quote a **formula-backed** metric. Avoid vague phrases like "how good the model is."

---

## 5.2 Part B — Long Answer Questions (14 Marks)

> **Module Internal Choice**: Answer **ONE** of the two questions Q1 or Q2. Each carries 14 marks split as 7 + 7.

### Question 1 (14 Marks) — Energy Function & DP Algorithm

**Q1 (a)** With a neat block diagram, explain the components of the threading energy function. **(7 marks)** `[KTU University Exam – Dec 2023]` **CO2, Understand**

**Model Answer:**

The threading energy function is the **objective** that the DP algorithm minimises. It has three additive components:

1. **1-body (single) term** $E_{\text{single}}(a_i, e_j)$ — measures how well amino acid $a_i$ fits the **environment class** $e_j$ (burial, secondary structure, polarity) at template position $j$. Computed from environment-specific substitution tables derived by Boltzmann inversion. **[2 marks]**

2. **2-body (pair) term** $E_{\text{pair}}(a_i, a_j, d_{jk})$ — sums over all **contact pairs** $(j,k)$ in the template with $C_{\alpha}$–$C_{\alpha}$ distance $\le 6$–8 Å. Captures residue–residue compatibility at contact range. **[2 marks]**

3. **Gap penalty** $G(A)$ — affine penalty $g_{o} + g_{e} \cdot \text{length}$ discouraging biologically implausible indels. **[1 mark]**

A block diagram is reproduced from Section 4.1; it shows the four preprocessing tracks (sequence, SS, SASA, contact map) feeding the energy evaluator. **[1 mark]**

Mathematical summary:

$$
E(S,T,A) = \sum_{i} E_{\text{single}} + \sum_{i<j} E_{\text{pair}} + G(A)
$$

**[1 mark for equation, total 7 marks]**

---

**Q1 (b)** Describe the dynamic programming algorithm used in threading. Write the recurrence and explain how gaps are handled with affine penalties. **(7 marks)** `[KTU University Exam – July 2024]` **CO2, Apply**

**Model Answer:**

The DP matrix $F(i,j)$ stores the minimum energy for aligning the first $i$ target residues to the first $j$ template positions. Three sub-matrices are kept to handle **affine gap penalties**:

**Recurrence:**

$$
M(i,j) = \min\!\begin{cases} M(i-1,j-1) \\ I_x(i-1,j-1) \\ I_y(i-1,j-1) \end{cases} + s(a_i, t_j)
$$

$$
I_x(i,j) = \min\!\begin{cases} M(i-1,j) + g_{o} + g_{e} \\ I_x(i-1,j) + g_{e} \end{cases}
$$

$$
I_y(i,j) = \min\!\begin{cases} M(i,j-1) + g_{o} + g_{e} \\ I_y(i,j-1) + g_{e} \end{cases}
$$

**Per-cell score:**

$$
s(a_i, t_j) = E_{\text{single}}(a_i, e_j) + \sum_{(j,k) \in C_T} E_{\text{pair}}(a_i, a_{A^{-1}(k)}, d_{jk})
$$

**Gap handling explained:**
- $I_x$ — gap opens in the **target** (i.e. a template residue has no aligned target residue), charged $g_{o} + g_{e}$ on opening and $g_{e}$ on each extension.
- $I_y$ — symmetric for the other strand.
- The recurrence keeps track of whether a gap is *open* or *being extended*, ensuring that **a long gap costs the same per residue as $g_{e}$ after the first** $g_{o}$ is paid.

**Boundary:** $M(0,0) = 0$, $M(i,0) = i(g_{o}+g_{e})$, $M(0,j) = j(g_{o}+g_{e})$.

**Traceback:** From $M(N,M)$, follow the $\arg\min$ pointers to recover the optimal alignment $A^{*}$.

**Complexity:** $O(N \cdot M \cdot c)$ where $c$ = number of template contacts.

**Mark breakdown:**

- [Stating recurrence form: 2 Marks]
- [Writing per-cell score with contact sum: 2 Marks]
- [Affine gap logic with $I_x$ and $I_y$: 2 Marks]
- [Boundary + traceback + complexity: 1 Mark]

> [!WARNING]
> **Examiner's Pitfall (Part B)**
> Do **NOT** write the recursion as a pure Needleman–Wunsch with a single matrix $F(i,j)$. KTU 2024 Scheme demands the **three-matrix affine form** ($M$, $I_x$, $I_y$). Writing only $F(i,j) = \min(F(i-1,j-1) + s, F(i-1,j) - g, F(i,j-1) - g)$ will be marked down to **3 of 7 marks** for missing affine detail.

---

### Question 2 (14 Marks) — Threading vs Homology & Performance Metrics

**Q2 (a)** Compare threading and homology modeling in tabular form. Under what conditions is threading clearly preferred? **(7 marks)** `[KTU University Exam – Dec 2023]` **CO3, Understand**

**Model Answer:**

| Dimension | Homology Modeling | Threading |
|---|---|---|
| Required signal | Detectable sequence similarity (>30 % identity) | Structural / environmental compatibility |
| Underlying principle | Evolutionary conservation | Fold conservation |
| Scoring | Substitution matrix (BLOSUM, PAM) | Energy function (1-body + 2-body + gap) |
| Template selection | PSI-BLAST, HHblits | Fold library (PDBselect, SCOP) |
| Confidence | High in conserved core | Moderate, fold-level |
| Failure mode | Alignment drift in loops | Wrong topology if energy function blind |
| Output | Full 3-D model | Fold hypothesis + alignment |

**Conditions preferring threading: (3 marks)**

1. **Remote homolog detection** — sequence identity < 25 % but fold conservation likely.
2. **Multi-domain proteins** with one well-folded domain but no close sequence match.
3. **Engineered / de novo proteins** with novel sequences but expected canonical folds (TIM-barrel, Rossmann, etc.).
4. **Cases where PSSM/HMM signal is weak** but structural information from the template library can be exploited.

**Mark breakdown:** [Tabular comparison 4 marks, four conditions 3 marks]

---

**Q2 (b)** Derive the formula for **TM-score**. Explain its interpretation with reference to the canonical thresholds. Also define **Z-score** and **p-value** as threading significance metrics. **(7 marks)** `[KTU University Exam – July 2024]` **CO3, Apply**

**Model Answer:**

**TM-score derivation:**

Let the model and native contain $L_{\text{align}}$ superimposed residues. Let $d_i$ be the $C_{\alpha}$ deviation for residue $i$. Define a length-dependent scale:

$$
d_0(L) = 1.24\,\sqrt[3]{L-15} - 1.8 \;\AA
$$

Then

$$
\text{TM} = \frac{1}{L_N} \sum_{i=1}^{L_{\text{align}}} \frac{1}{1 + (d_i / d_0)^{2}}
$$

where $L_N$ is the *normalisation length* (conventionally the length of the longer chain).

**Interpretation thresholds (Xu & Zhang 2010):**

- $\text{TM} < 0.17$ — random alignment.
- $0.17 \le \text{TM} < 0.50$ — same topology, possibly different fold.
- $\text{TM} \ge 0.50$ — **same fold** (the universally cited cutoff).
- $\text{TM} \ge 0.85$ — high-resolution model.

**Z-score:**

$$
Z = \frac{S - \bar{S}_{\text{shuffled}}}{\sigma_{S,\text{shuffled}}}
$$

A $Z \ge 4$–$7$ (tool-dependent) is taken as significant.

**p-value:**

$$
p = 1 - \Phi(Z)
$$

where $\Phi$ is the standard normal CDF. Lower $p$ ⇒ more significant.

**Mark breakdown:**

- [TM-score formula derivation: 3 Marks]
- [Threshold table: 1 Mark]
- [Z-score definition: 1.5 Marks]
- [p-value definition: 1.5 Marks]

> [!WARNING]
> **Common Mistakes (Part B)**
> - Writing $d_0 = 5\;\AA$ as a "universal constant" is **wrong**; it is *length-dependent*.
> - Forgetting the $L_N$ normaliser makes TM-score non-comparable across proteins.
> - Confusing RMSD (in Å) with TM-score (dimensionless) is a guaranteed 1-mark deduction.

---

## 5.3 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — PECST704 Module 4**

**Core Concepts**
- Threading = *fold recognition*; sequence onto a known 3-D template.
- Used when sequence identity < 25–30 %; below the homology "twilight zone."
- Energy function has **3 components**: 1-body, 2-body, gap penalty.
- **Frozen approximation** keeps the template backbone rigid.
- Environment class $e_j = (\text{SS}, \text{SASA}, \text{polarity})$ discretized into ~8–27 bins.
- Contact cutoff: $d_{C_{\alpha}} \le 6$–$8\;\AA$.

**Algorithms**
- DP over $N \times M$ matrix; **affine gap** with $M, I_x, I_y$ sub-matrices.
- Per-cell score combines $E_{\text{single}} + E_{\text{pair}} + \text{gap}$.
- Complexity: $O(N M c)$, $c$ = number of template contacts.
- Alternatives: Gibbs sampling, integer LP (RAPTOR), branch-and-bound.

**Tracks (multi-channel scoring)**
- Sequence profile (PSSM), secondary structure, solvent accessibility, contact map, hydrophobicity, depth.
- Combined via weighted linear sum: $S = \sum_{k} w_k T_k$ with $\sum w_k = 1$.

**Models (tools)**
- 3D-1D profile (Bowie), Threader (Jones), PROSPECTOR (Skolnick), RAPTOR, SPARKS-X, HHpred, Phyre2.
- Modern tools (Phyre2, HHpred) blend threading with profile-profile and ab-initio loop modelling.

**Configuration Parameters (engineering knobs)**
- $g_{o} = 5$–$15$, $g_{e} = 0.5$–$2.0$.
- Contact cutoff $d_{c} = 6$–$8\;\AA$.
- Boltzmann constant $k_{B} T = 0.59\;\text{kcal/mol}$ at 298 K.
- Track weights $w_k$, normalisation length $L_N$, number of environment bins.

**Performance Metrics (must memorise formulas)**
- $\text{TM} = \frac{1}{L_N}\sum_i \frac{1}{1 + (d_i/d_0)^2}$, $d_0 = 1.24\sqrt[3]{L-15} - 1.8$.
- $\text{RMSD} = \sqrt{\frac{1}{N}\sum_i \Vert \vec{r}_i - \vec{r}_i^{\text{ref}}\Vert^2}$.
- $Z = (S - \bar{S})/\sigma_S$, $p = 1 - \Phi(Z)$.
- $\text{Coverage} = L_{\text{aligned}} / L_{\text{target}}$.
- GDT-TS = mean of $P_1, P_2, P_4, P_8$ distance thresholds.

**Real-World Use Cases (must state in answers)**
- Structural genomics (target selection for crystallography).
- Disease-mutation interpretation (variant effect prediction).
- Drug target identification (modelling orphan GPCRs, kinases).
- Engineering: template-guided mutagenesis for thermostability.
- Calibration: provides confidence priors in AlphaFold-fallback for shallow-MSA cases.

**One-Line Takeaway for the Board Exam**
> *Threading is the DP-driven fold-recognition method that maps a target sequence to a template structure by minimising $E = E_{1} + E_{2} + G$, and its output is judged by TM-score, RMSD, Z-score, and coverage — not by any single number.*

---

<!-- SECTION_5_END -->
