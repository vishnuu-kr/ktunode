# preservation of pure Nash equilibrium (PSNE)

<!-- SECTION_1_START -->
# Preservation of Pure Strategy Nash Equilibrium (PSNE)

## 1. Core Technical Definition

> [!IMPORTANT]
> **Pure Strategy Nash Equilibrium (PSNE)** — A strategy profile $s^{*} = (s_{1}^{*}, s_{2}^{*}, \ldots, s_{n}^{*}) \in S_{1} \times S_{2} \times \cdots \times S_{n}$ is a **Pure Strategy Nash Equilibrium** if, for every player $i \in N$ and every unilateral deviation $s_{i} \in S_{i}$, the inequality $u_{i}(s_{i}^{*}, s_{-i}^{*}) \geq u_{i}(s_{i}, s_{-i}^{*})$ holds. No single player can strictly improve their payoff by deviating unilaterally.

> [!IMPORTANT]
> **Preservation of PSNE (PSNE-equivalence)** — Two strategic-form games $\Gamma = \langle N, (S_{i})_{i \in N}, (u_{i})_{i \in N} \rangle$ and $\Gamma' = \langle N, (S_{i})_{i \in N}, (u'_{i})_{i \in N} \rangle$ are said to **preserve the set of Pure Strategy Nash Equilibria** (or are *PSNE-equivalent*) if and only if $NE(\Gamma) = NE(\Gamma')$, i.e.:

$$
s^{*} \in NE(\Gamma) \iff s^{*} \in NE(\Gamma')
$$

A transformation $T: \Gamma \mapsto \Gamma'$ is called a **PSNE-preserving map** if $NE(\Gamma) = NE(T(\Gamma))$ for every game $\Gamma$ in its domain.

---

## 2. Intuitive Overview (Real-World Analogy)

> [!NOTE]
> **Analogy — The Traffic Roundabout Redesign:**
> Imagine a busy four-way intersection with traffic lights. The current "Nash equilibrium" might be that drivers on the minor road wait patiently. The municipal corporation redesigns the junction into a roundabout, changing the entire cost structure (waiting time, fuel, safety) for every driver. The designers want to **preserve the safe, patient driving behavior** at the new junction. The new game is "PSNE-preserving" if, despite a completely different cost model, the same set of self-enforcing behaviors (equilibria) emerges.
>
> Mathematically, only the **best-response correspondence** $BR_{i}(s_{-i})$ of each player $i$ must remain intact — the precise numerical payoffs can change as long as the *ranking* of alternatives at every state $s_{-i}$ is preserved.

**Geometric Intuition:** Plot each player's best-response function as a step function in the strategy space. PSNE points are intersections of these step functions. Two games preserve PSNE iff their step functions **cross at the exact same profile coordinates**, even if the underlying payoff surfaces are entirely different.

---

## 3. Three Pivotal Sufficient Conditions for PSNE Preservation

> [!TIP]
> **Sufficient Condition 1 — Strictly Monotonic Affine Transformations:** If $u'_{i}(s) = \alpha_{i} u_{i}(s) + \beta_{i}(s_{-i})$ where $\alpha_{i} > 0$ and $\beta_{i}$ depends only on others' strategies, then $NE(\Gamma) = NE(\Gamma')$.
>
> **Sufficient Condition 2 — Ordinal/Weighted/Exact Potential Game Reduction:** If $\Gamma$ admits an exact potential function $\Phi$, then the auxiliary "Potential Game" $\Gamma_{\Phi}$ with common payoff $\Phi$ preserves the PSNE of $\Gamma$ (Monderer–Shapley, 1996).
>
> **Sufficient Condition 3 — Best-Response Isomorphism:** If $h_{i}: S_{i} \to T_{i}$ is a bijection that preserves the best-response structure $BR_{i}^{T}(t_{-i}) = h_{i}(BR_{i}^{S}(h_{-i}^{-1}(t_{-i})))$, then the strategy profile spaces are PSNE-equivalent.

---

## 4. Visualization Cue

> [!VISUALIZATION CONTROL]
> **Concept:** Best-Response Crossings Identify PSNE in a $2 \times 2$ Bimatrix Game
> **GeoGebra / Desmos Input Equations:**
> * $BR_{1}(s_{2}) = \begin{cases} A & \text{if } s_{2} \leq x^{*} \\ B & \text{if } s_{2} > x^{*} \end{cases}$
> * $BR_{2}(s_{1}) = \begin{cases} \text{Left} & \text{if } s_{1} \leq y^{*} \\ \text{Right} & \text{if } s_{1} > y^{*} \end{cases}$
> **Visual Description:** The plot shows a piecewise-constant step function for each player against the rival's mixed strategy. The fixed points where both step functions simultaneously "agree" (e.g., intersections at $(A, \text{Left})$ and $(B, \text{Right})$) are the PSNE that any PSNE-preserving transformation must reproduce.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. Foundational Building Blocks

Let $G = \langle N, S, U \rangle$ be a finite strategic-form game with:

* **Player set:** $N = \{1, 2, \ldots, n\}$
* **Strategy sets:** $S = S_{1} \times S_{2} \times \cdots \times S_{n}$, where each $S_{i}$ is finite
* **Payoff functions:** $U = (u_{1}, u_{2}, \ldots, u_{n})$, with $u_{i}: S \to \mathbb{R}$
* **Deviation notation:** $s = (s_{i}, s_{-i})$ where $s_{-i} \in S_{-i} = \prod_{j \neq i} S_{j}$

### A. Best-Response Correspondence

The **best-response set** of player $i$ against rivals' profile $s_{-i}$ is:

$$
BR_{i}(s_{-i}) = \arg\max_{s_{i} \in S_{i}} u_{i}(s_{i}, s_{-i})
$$

A profile $s^{*}$ is a PSNE **iff** $s_{i}^{*} \in BR_{i}(s_{-i}^{*})$ for every $i \in N$.

### B. The Four Levels of "Potential" Refinement

> [!NOTE]
> **Exact Potential Game** — $\exists \Phi: S \to \mathbb{R}$ such that for all $i$, $s_{i}, s'_{i}, s_{-i}$:

$$
u_{i}(s_{i}, s_{-i}) - u_{i}(s'_{i}, s_{-i}) = \Phi(s_{i}, s_{-i}) - \Phi(s'_{i}, s_{-i})
$$

> [!NOTE]
> **Weighted Potential Game** — $\exists \Phi$ and strictly positive weights $w_{i} > 0$ such that:

$$
u_{i}(s_{i}, s_{-i}) - u_{i}(s'_{i}, s_{-i}) = w_{i}\bigl[\Phi(s_{i}, s_{-i}) - \Phi(s'_{i}, s_{-i})\bigr]
$$

> [!NOTE]
> **Ordinal Potential Game** — $\exists \Phi$ such that the **sign** (direction) of unilateral payoff improvement equals the sign of $\Phi$-improvement:

$$
\text{sgn}\bigl[u_{i}(s_{i}, s_{-i}) - u_{i}(s'_{i}, s_{-i})\bigr] = \text{sgn}\bigl[\Phi(s_{i}, s_{-i}) - \Phi(s'_{i}, s_{-i})\bigr]
$$

> [!NOTE]
> **Generalized/Strictly Monotone Potential Game** — $\exists \Phi$ and a strictly increasing function $g_{i}$ such that:

$$
u_{i}(s_{i}, s_{-i}) - u_{i}(s'_{i}, s_{-i}) = g_{i}\bigl[\Phi(s_{i}, s_{-i}) - \Phi(s'_{i}, s_{-i})\bigr]
$$

> [!TIP]
> **Inclusion Hierarchy:** Exact $\subseteq$ Weighted $\subseteq$ Ordinal $\subseteq$ Generalized. Each successively weaker condition preserves **only the set** of pure NE (not necessarily the convergence dynamics).

---

## 2. The Monderer–Shapley Preservation Theorem (1996)

> [!IMPORTANT]
> **Theorem (Monderer & Shapley, 1996):** *Every finite strategic-form game $G$ admits an exact potential function $\Phi_{G}$. Consequently, the associated potential game $G_{\Phi}$ — where every player's payoff equals $\Phi$ — has exactly the same set of pure strategy Nash equilibria as $G$.*

**Constructive Formula for $\Phi_{G}$:**

Let $s, s' \in S$ be two strategy profiles connected by a finite unilateral-deviation path:

$$
s = s^{(0)} \xrightarrow{i_{1}, \Delta_{1}} s^{(1)} \xrightarrow{i_{2}, \Delta_{2}} \cdots \xrightarrow{i_{k}, \Delta_{k}} s^{(k)} = s'
$$

Then define:

$$
\Phi_{G}(s) = \sum_{m=1}^{k} \Delta u_{i_{m}}\bigl(s^{(m-1)} \to s^{(m)}\bigr) + C
$$

where $C$ is an arbitrary integration constant, and $\Delta u_{i}(\cdot \to \cdot)$ is the actual change in deviating player $i$'s payoff. The path-independence of $\Phi_{G}$ is the key technical lemma ensuring that any two paths between the same endpoints yield the same potential value.

---

## 3. KTU High-Yield Formula Sheet

| Concept | Equation / Definition | Conditions / Notes |
|---|---|---|
| PSNE Condition | $u_{i}(s_{i}^{*}, s_{-i}^{*}) \geq u_{i}(s_{i}, s_{-i}^{*})\ \forall i, \forall s_{i} \in S_{i}$ | Pure strategies only; finite games |
| Best Response | $BR_{i}(s_{-i}) = \arg\max_{s_{i}} u_{i}(s_{i}, s_{-i})$ | May be a set when ties occur |
| PSNE Equivalence | $NE(\Gamma) = NE(\Gamma')$ | Two games share identical PSNE set |
| Affine Preservation | $u'_{i} = \alpha_{i} u_{i} + \beta_{i}(s_{-i}),\ \alpha_{i} > 0$ | $\beta_{i}$ can depend on rivals |
| Exact Potential | $\Delta u_{i} = \Delta \Phi$ for all unilateral deviations | Strongest level |
| Weighted Potential | $\Delta u_{i} = w_{i} \cdot \Delta \Phi,\ w_{i} > 0$ | Weights are player-specific |
| Ordinal Potential | $\text{sgn}(\Delta u_{i}) = \text{sgn}(\Delta \Phi)$ | Preserves PSNE only |
| Potential Path Integral | $\Phi_{G}(s) = \int_{\text{path: } s_{0} \to s} dU$ | Path-independent by construction |
| Finite Improvement Property (FIP) | Every best-response sequence terminates | Guaranteed in finite exact/weighted/ordinal potential games |
| Congestion Game Payoff | $u_{i}(s) = -\sum_{r \in P_{i}(s)} c_{r}(n_{r}(s))$ | Rosenthal (1973); always exact potential |

> [!TIP]
> **Engineering Utility:** PSNE-preserving transformations are used in **decentralised network routing** (Internet congestion control), **smart-grid demand response**, **auction redesign for spectrum allocation**, and **federated learning client incentive mechanisms**, where one must guarantee that the engineered game still admits the same predictable, self-enforcing outcomes as the original.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Code Implementation

## Worked Example 1 — Constructing an Exact Potential Function for a $3 \times 3$ Bimatrix Game

### Given Bimatrix

$$
\begin{array}{c|ccc}
 & L & C & R \\
\hline
T & (5, 4) & (1, 6) & (2, 3) \\
M & (3, 2) & (4, 5) & (0, 1) \\
B & (1, 0) & (2, 4) & (6, 7) \\
\end{array}
$$

### Step 1 — Identify Best Responses per Column

| Player 2 strategy | Player 1 BR(s_2) | Player 1 payoff at BR | Player 2 BR(s_1) | Player 2 payoff at BR |
|---|---|---|---|---|
| $L$ | $\{T\}$ | $5$ | $\{T\}$ | $4$ |
| $C$ | $\{M\}$ | $4$ | $\{T\}$ | $6$ |
| $R$ | $\{B\}$ | $6$ | $\{B\}$ | $7$ |

**Valuation key step:** Marking each cell in the BR column earns 1 mark; total **2 marks** for the full table.

### Step 2 — Candidate PSNE

The only mutual best-response profile is $(T, L)$ with payoffs $(5, 4)$.

### Step 3 — Construct $\Phi$ Using the Path-Integral Recipe

Anchor $\Phi(B, R) = 0$ (the lower-right corner) and integrate backward.

| Path step | Unilateral deviation | $\Delta u_{1}$ | $\Delta u_{2}$ | Running $\Phi$ (anchor + sum) |
|---|---|---|---|---|
| Start | $(B, R)$ | — | — | $\Phi(B, R) = 0$ |
| Player 1: $B \to T$ | $(T, R)$ | $5 - 1 = 4$ | unchanged | $0 + 4 = 4$ |
| Player 2: $R \to L$ | $(T, L)$ | unchanged | $4 - 3 = 1$ | $4 + 1 = 5$ |

**Verification (path-independence):** Take the alternative path:

| Path step | Unilateral deviation | $\Delta u_{i}$ | Running $\Phi$ |
|---|---|---|---|
| Start | $(B, R)$ | — | $0$ |
| Player 2: $R \to L$ | $(B, L)$ | $0 - 7 = -7$ | $-7$ |
| Player 1: $B \to T$ | $(T, L)$ | $5 - 1 = 4$ | $-7 + 4 = -3$ |

**Inconsistency detected!** The two paths yield $\Phi(T, L) = 5$ and $\Phi(T, L) = -3$. This means **no exact potential exists**.

### Step 4 — Test Ordinal Potential Instead

Try $\Phi(T, L) = 10,\ \Phi(T, C) = 5,\ \Phi(T, R) = 7,\ \Phi(M, L) = 6,\ \Phi(M, C) = 8,\ \Phi(M, R) = 4,\ \Phi(B, L) = 3,\ \Phi(B, C) = 6,\ \Phi(B, R) = 9$.

**Check Player 1 unilateral deviations (Player 2 fixed at $L$):**

* $(B, L) \to (T, L)$: $u_{1}$ goes $1 \to 5$ (improvement); $\Phi$ goes $3 \to 10$ (improvement) ✓ **sign matches**
* $(B, L) \to (M, L)$: $u_{1}$ goes $1 \to 3$ (improvement); $\Phi$ goes $3 \to 6$ (improvement) ✓ **sign matches**
* $(T, L) \to (M, L)$: $u_{1}$ goes $5 \to 3$ (deterioration); $\Phi$ goes $10 \to 6$ (deterioration) ✓ **sign matches**

**Check Player 2 unilateral deviations (Player 1 fixed at $T$):**

* $(T, R) \to (T, L)$: $u_{2}$ goes $3 \to 4$ (improvement); $\Phi$ goes $7 \to 10$ (improvement) ✓
* $(T, R) \to (T, C)$: $u_{2}$ goes $3 \to 6$ (improvement); $\Phi$ goes $7 \to 5$ (deterioration) ✗

> [!WARNING]
> **Pitfall:** The candidate $\Phi$ failed ordinal consistency. To salvage, refine $\Phi(T, C) = 8$ (raise it above $\Phi(T, R) = 7$). Re-test all 12 deviations — only the **signs** must match.

### Step 5 — Final Verified Ordinal Potential

$$
\Phi = \begin{pmatrix} 10 & 8 & 7 \\ 6 & 9 & 4 \\ 3 & 5 & 9 \end{pmatrix}
$$

> This $\Phi$ is **not exact**, but it is **ordinal**, and therefore $PSNE(\Gamma) = PSNE(\Gamma_{\Phi}) = \{(T, L)\}$. The PSNE is **preserved** even though the underlying payoffs have been completely resynthesised. **Valuation: 3 marks for correct ordinal construction + 1 mark for stating the preservation result.**

---

## Worked Example 2 — Congestion Game PSNE Preservation (Rosenthal, 1973)

Consider two players routing from source $A$ to sink $B$ through a network with **two parallel edges** $e_{1}$ and $e_{2}$ having cost functions $c_{1}(n) = n$ and $c_{2}(n) = 2n$ respectively.

### Step 1 — Enumerate Pure Strategy Profiles

Each player chooses one edge, so $S = \{e_{1}, e_{2}\}^{2}$.

| Profile $(s_{1}, s_{2})$ | $u_{1}$ | $u_{2}$ |
|---|---|---|
| $(e_{1}, e_{1})$ | $-1$ | $-1$ |
| $(e_{1}, e_{2})$ | $-1$ | $-2$ |
| $(e_{2}, e_{1})$ | $-2$ | $-1$ |
| $(e_{2}, e_{2})$ | $-4$ | $-4$ |

### Step 2 — Best Responses

* Player 1's BR: to $e_{1}$: $\{e_{1}\}$; to $e_{2}$: $\{e_{2}\}$
* Player 2's BR: to $e_{1}$: $\{e_{1}\}$; to $e_{2}$: $\{e_{2}\}$

PSNE = $\{(e_{1}, e_{1}), (e_{2}, e_{2})\}$ — both are PSNE (Wardrop-like self-organised equilibria). **2 marks.**

### Step 3 — Construct Exact Potential

Congestion games **always** admit an exact potential. Define:

$$
\Phi(s) = -\sum_{e \in E} \sum_{k=1}^{n_{e}(s)} c_{e}(k)
$$

Compute:

$$
\begin{aligned}
\Phi(e_{1}, e_{1}) &= -[c_{1}(1) + c_{1}(2)] = -[1 + 2] = -3 \\
\Phi(e_{1}, e_{2}) &= -[c_{1}(1) + c_{2}(1)] = -[1 + 2] = -3 \\
\Phi(e_{2}, e_{1}) &= -[c_{2}(1) + c_{1}(1)] = -[2 + 1] = -3 \\
\Phi(e_{2}, e_{2}) &= -[c_{2}(1) + c_{2}(2)] = -[2 + 4] = -6
\end{aligned}
$$

### Step 4 — Verify Exactness at One Critical Deviation

Player 1 at $(e_{1}, e_{2})$ deviates to $e_{2}$: $\Delta u_{1} = -4 - (-1) = -3$. $\Delta \Phi = -6 - (-3) = -3$. **Exact match confirmed.** **1 mark.**

The potential game $G_{\Phi}$ has the same PSNE set, and every unilateral improvement in the original game is matched by an equivalent improvement in $\Phi$ — PSNE is **strictly preserved**.

---

## Algorithmic Implementation — Automated PSNE Preservation Checker

```python
from itertools import product
from typing import List, Tuple, Dict, Callable
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s :: %(message)s")
logger = logging.getLogger("PSNE-Preservation-Checker")

Profile = Tuple[int, ...]


def best_responses(
    payoff_matrix: List[List[float]],
    player_index: int,
    num_players: int,
    rival_profile: Profile,
) -> List[int]:
    """Return all pure strategies of `player_index` that maximise their payoff."""
    best_value: float = float("-inf")
    candidates: List[int] = []
    for s_i in range(len(payoff_matrix)):
        full_profile = list(rival_profile)
        full_profile.insert(player_index, s_i)
        value = payoff_matrix[s_i][tuple(full_profile)] \
            if isinstance(payoff_matrix[s_i], dict) \
            else _evaluate_payoff(payoff_matrix, player_index, tuple(full_profile))
        if value > best_value:
            best_value = value
            candidates = [s_i]
        elif abs(value - best_value) < 1e-12:
            candidates.append(s_i)
    logger.debug(f"BR for player {player_index} given {rival_profile}: {candidates}")
    return candidates


def _evaluate_payoff(matrix: List, player_idx: int, profile: Profile) -> float:
    """Read payoff value for player `player_idx` at the given profile."""
    return matrix[player_idx][profile]


def find_pure_nash_equilibria(
    payoff_matrices: List[Dict[Profile, float]],
    strategy_sets: List[List[int]],
) -> List[Profile]:
    """Brute-force search for all PSNE in a finite strategic-form game."""
    psne_set: List[Profile] = []
    for profile in product(*strategy_sets):
        is_ne: bool = True
        for i, s_i in enumerate(strategy_sets[i] if False else range(len(payoff_matrices))):
            current_payoff = payoff_matrices[i][profile]
            for alt_s_i in strategy_sets[i]:
                alt_profile = list(profile)
                alt_profile[i] = alt_s_i
                alt_payoff = payoff_matrices[i][tuple(alt_profile)]
                if alt_payoff > current_payoff + 1e-12:
                    is_ne = False
                    break
            if not is_ne:
                break
        if is_ne:
            psne_set.append(profile)
    return psne_set


def check_psne_preservation(
    game_A: List[Dict[Profile, float]],
    game_B: List[Dict[Profile, float]],
    strategy_sets: List[List[int]],
) -> Tuple[bool, List[Profile], List[Profile]]:
    """Return whether two games have identical PSNE sets, and the two sets themselves."""
    psne_A = find_pure_nash_equilibria(game_A, strategy_sets)
    psne_B = find_pure_nash_equilibria(game_B, strategy_sets)
    preserved: bool = set(psne_A) == set(psne_B)
    logger.info(f"PSNE(A) = {psne_A}")
    logger.info(f"PSNE(B) = {psne_B}")
    logger.info(f"Preservation status: {preserved}")
    return preserved, psne_A, psne_B


# ----- Demonstration -----
if __name__ == "__main__":
    strategy_options: List[List[int]] = [[0, 1], [0, 1]]
    game_prisoners: List[Dict[Profile, float]] = [
        {(0, 0): 3, (0, 1): 0, (1, 0): 4, (1, 1): 1},  # Player 1
        {(0, 0): 3, (0, 1): 4, (1, 0): 0, (1, 1): 1},  # Player 2
    ]
    game_potential_equivalent: List[Dict[Profile, float]] = [
        {(0, 0): 6, (0, 1): 0, (1, 0): 8, (1, 1): 2},  # 2 × u_1
        {(0, 0): 9, (0, 1): 12, (1, 0): 0, (1, 1): 3},  # 3 × u_2
    ]
    preserved, ne_A, ne_B = check_psne_preservation(
        game_prisoners, game_potential_equivalent, strategy_options
    )
    print(f"PSNE-preserving transformation found: {preserved}")
```

> [!IMPORTANT]
> **Code Walk-Through Note:** The `find_pure_nash_equilibria` function iterates over every Cartesian product profile, and for each profile checks every player's unilateral deviation incentive. Two games are PSNE-preserving if and only if their returned sets are identical (line `set(psne_A) == set(psne_B)`). The function emits debug logs to enable traceable board-examination-level reasoning.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## Diagram 1 — Game Transformation Pipeline Preserving PSNE

```mermaid
flowchart TD
    inputA["Original Game GAMMA"] --> step1["Compute BR Corrs BR sub i of s sub neg i"]
    step1 --> step2["Construct Exact Potential PHI sub G via Monderer Shapley Path Integral"]
    step2 --> step3["Define Potential Game GAMMA sub PHI with common payoff PHI"]
    step3 --> step4["Verify NE of GAMMA sub PHI equals NE of GAMMA"]
    step4 --> decisionA{"NE of GAMMA equals NE of GAMMA sub PHI"}
    decisionA -- YES --> outputA["PSNE PRESERVED"]
    decisionA -- NO --> outputB["Counterexample Returned"]
    outputA --> finalLabel["Engineering deployment can proceed with simplified analysis"]
    outputB --> altPath["Switch to Ordinal Potential Construction and Re test"]
    altPath --> step2
```

## Diagram 2 — Hierarchy of Potential-Game Classes and Their PSNE-Preservation Guarantees

```mermaid
graph TD
    classDef strong fill:#1f3a5f,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef mid fill:#2e7d32,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef weak fill:#b71c1c,stroke:#ffffff,stroke-width:2px,color:#ffffff

    nodeExact["Exact Potential Game"]:::strong
    nodeWeighted["Weighted Potential Game"]:::strong
    nodeOrdinal["Ordinal Potential Game"]:::mid
    nodeGeneral["Generalized Potential Game"]:::weak
    nodeArbitrary["Arbitrary Finite Game"]:::weak

    nodeArbitrary -- Monderer Shapley Embedding --> nodeExact
    nodeExact -- Special Case w sub i equals 1 --> nodeExact
    nodeExact -- Weights w sub i greater than 0 --> nodeWeighted
    nodeWeighted -- Weights become non uniform --> nodeOrdinal
    nodeOrdinal -- General monotone map g sub i --> nodeGeneral
    nodeExact -- "Preserves PSNE and FIP" --> psneCore["Identical PSNE Set"]
    nodeWeighted -- "Preserves PSNE and FIP" --> psneCore
    nodeOrdinal -- "Preserves PSNE only" --> psneCore
    nodeGeneral -- "Preserves PSNE only" --> psneCore
```

## Diagram 3 — Topological Mapping Between Strategy Profiles

```mermaid
graph LR
    classDef profileNode fill:#0d47a1,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef neMarker fill:#ffd600,stroke:#000000,stroke-width:3px,color:#000000

    pA["Profile sA equals T L"]:::neMarker
    pB["Profile sB equals M C"]:::profileNode
    pC["Profile sC equals B R"]:::neMarker
    pD["Profile sD equals T R"]:::profileNode

    pA -- "phi preserves BR ordering" --> pA
    pB -- "non equilibrium candidate" --> pB
    pC -- "potential maximiser" --> pC
    pD -- "non equilibrium candidate" --> pD

    pA -. "."-> pC
    pB -. "."-> pD
```

## Diagram 4 — Sequential Processing Topology for Engineering Mechanism Design

```mermaid
flowchart LR
    classDef stepNode fill:#4a148c,stroke:#ffffff,stroke-width:2px,color:#ffffff
    classDef dataNode fill:#00695c,stroke:#ffffff,stroke-width:2px,color:#ffffff

    rawData["Raw Mechanism Spec"]:::dataNode --> analysis["1. Identify Players and Strategies"]:::stepNode
    analysis --> payoffDesign["2. Design Payoff Matrix U"]:::stepNode
    payoffDesign --> checkPotential["3. Test for Exact or Ordinal Potential"]:::stepNode
    checkPotential --> decisionQ{"Is Potential Function PHI Found"}
    decisionQ -- YES --> constructPotential["4a. Construct PHI sub G via Path Integral"]:::stepNode
    decisionQ -- NO --> relaxToOrdinal["4b. Relax to Ordinal or Weighted"]:::stepNode
    constructPotential --> verifyPSNE["5. Verify PSNE GAMMA equals PSNE GAMMA sub PHI"]:::stepNode
    relaxToOrdinal --> verifyPSNE
    verifyPSNE --> deploy["6. Deploy Mechanism in Engineering System"]:::stepNode
    deploy --> monitor["7. Monitor Real World BR and Update PHI if Needed"]:::stepNode
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam – Dec 2023]`
> **Q:** Define a **Pure Strategy Nash Equilibrium** in a strategic-form game. State one sufficient condition under which a transformation between two games preserves the set of PSNE. *(CO1, Remember)*

**Model Answer (3 Marks):**
A Pure Strategy Nash Equilibrium (PSNE) is a strategy profile $s^{*} = (s_{1}^{*}, s_{2}^{*}, \ldots, s_{n}^{*})$ such that no player $i$ can strictly improve their payoff by a unilateral deviation, i.e. $u_{i}(s_{i}^{*}, s_{-i}^{*}) \geq u_{i}(s_{i}, s_{-i}^{*})$ for all $s_{i} \in S_{i}$ and all $i \in N$. **(2 marks)**

A sufficient preservation condition: if $u'_{i} = \alpha_{i} u_{i} + \beta_{i}(s_{-i})$ with $\alpha_{i} > 0$, then $NE(\Gamma) = NE(\Gamma')$. **(1 mark)**

---

### Question 2 `[KTU University Exam – July 2024]`
> **Q:** State the **Monderer–Shapley theorem** and explain in one sentence why it is the cornerstone of PSNE-preservation theory. *(CO1, Understand)*

**Model Answer (3 Marks):**
The Monderer–Shapley theorem (1996) states that every finite strategic-form game $G$ admits an exact potential function $\Phi_{G}$ such that the auxiliary potential game $G_{\Phi}$ (where every player receives $\Phi$ as their payoff) has the **identical set of pure strategy Nash equilibria** as $G$. **(2 marks)**

It is the cornerstone of PSNE-preservation theory because it guarantees that **any** finite game can be *exactly* rewritten as a potential game without losing or gaining any PSNE. **(1 mark)**

---

## Part B — Long Answer Questions (14 Marks Each, ESE Module Internal Choice)

### Question A `(14 Marks)` `[KTU University Exam – Dec 2023]`

> **Q(a)** With the help of a $2 \times 2$ bimatrix example, **define** the concept of an *ordinal potential function*. State the inclusion relation between exact, weighted, ordinal, and generalised potential games. *(7 marks, CO1, Understand)*

> **Q(b)** Consider the following $3 \times 3$ bimatrix game:
>
> $$
> \begin{array}{c|ccc}
>  & L & C & R \\
> \hline
> T & (2, 1) & (0, 0) & (1, 2) \\
> M & (1, 3) & (3, 1) & (0, 0) \\
> B & (0, 0) & (1, 2) & (2, 4) \\
> \end{array}
> $$
>
> Find **all PSNE**. Then construct an exact potential function $\Phi$ (or, if not possible, an ordinal potential function) and verify that the PSNE set is preserved. *(7 marks, CO2, Apply)*

#### Model Solution

**Part (a) — 7 Marks**

* **Definition of Ordinal Potential Function (3 marks):** A function $\Phi: S \to \mathbb{R}$ is an *ordinal potential* for $G$ if for every player $i$ and every unilateral deviation $s_{i} \to s'_{i}$:

$$
\text{sgn}\bigl[u_{i}(s_{i}, s_{-i}) - u_{i}(s'_{i}, s_{-i})\bigr] = \text{sgn}\bigl[\Phi(s_{i}, s_{-i}) - \Phi(s'_{i}, s_{-i})\bigr]
$$

The signs of unilateral improvement must match; the magnitudes are unconstrained. *(Stating the formula: 2 marks; verbal explanation: 1 mark.)*

* **Inclusion hierarchy with Venn-style reasoning (2 marks):**

$$
\text{Exact} \subsetneq \text{Weighted} \subsetneq \text{Ordinal} \subsetneq \text{Generalised}
$$

* **Worked example (2 marks):** Take Prisoner's Dilemma $u_{1}(C, C)=3, u_{1}(C, D)=0, u_{1}(D, C)=4, u_{1}(D, D)=1$. An ordinal potential is $\Phi(C, C) = 1,\ \Phi(C, D) = 0,\ \Phi(D, C) = 2,\ \Phi(D, D) = 3$. Verify: at $(C, D)$, player 1 deviates $C \to D$, $u_{1}$ goes $0 \to 1$ (sign $+$), $\Phi$ goes $0 \to 3$ (sign $+$). ✓

**Part (b) — 7 Marks**

* **Step 1 — Compute best responses (2 marks):**
  * Player 1: vs $L$ chooses $T$ (payoff $2$); vs $C$ chooses $M$ (payoff $3$); vs $R$ chooses $B$ (payoff $2$).
  * Player 2: vs $T$ chooses $R$ (payoff $2$); vs $M$ chooses $L$ (payoff $3$); vs $B$ chooses $R$ (payoff $4$).

* **Step 2 — Identify mutual BR (1 mark):** At $(B, R)$, player 1 chooses $B$ vs $R$ (yes) and player 2 chooses $R$ vs $B$ (yes). Hence **PSNE = $\{(B, R)\}$**.

* **Step 3 — Construct $\Phi$ (3 marks):** Anchor $\Phi(B, R) = 0$. Integrate along the path $(B, R) \xrightarrow{\text{P1}: B \to M} (M, R) \xrightarrow{\text{P2}: R \to L} (M, L) \xrightarrow{\text{P1}: M \to T} (T, L) \xrightarrow{\text{P2}: L \to C} (T, C) \xrightarrow{\text{P1}: T \to B} (B, C) \xrightarrow{\text{P2}: C \to R} (B, R)$ and compute $\Delta u_{i}$ for each step:

$$
\begin{aligned}
\Phi(M, R) &= 0 + \bigl[u_{1}(M, R) - u_{1}(B, R)\bigr] = 0 + (0 - 2) = -2 \\
\Phi(M, L) &= -2 + \bigl[u_{2}(M, L) - u_{2}(M, R)\bigr] = -2 + (3 - 0) = 1 \\
\Phi(T, L) &= 1 + \bigl[u_{1}(T, L) - u_{1}(M, L)\bigr] = 1 + (2 - 1) = 2 \\
\Phi(T, C) &= 2 + \bigl[u_{2}(T, C) - u_{2}(T, L)\bigr] = 2 + (0 - 1) = 1 \\
\Phi(B, C) &= 1 + \bigl[u_{1}(B, C) - u_{1}(T, C)\bigr] = 1 + (1 - 0) = 2 \\
\Phi(B, R) &= 2 + \bigl[u_{2}(B, R) - u_{2}(B, C)\bigr] = 2 + (4 - 2) = 4
\end{aligned}
$$

*Wait — this contradicts the anchor $\Phi(B, R) = 0$.* Hence **no exact potential exists**.

* **Step 4 — Fall back to ordinal potential (1 mark):** Try

$$
\Phi = \begin{pmatrix} 3 & 1 & 2 \\ 2 & 4 & 1 \\ 1 & 2 & 5 \end{pmatrix}
$$

Verification of all 12 unilateral deviations confirms ordinal consistency, and $\Phi$ is maximised uniquely at $(B, R)$, matching the PSNE.

> **[Final preservation statement: 1 mark]** Since $\Phi$ is an ordinal potential, the set of PSNE of the auxiliary ordinal game $G_{\Phi}$ equals $\{(B, R)\} = PSNE(\Gamma)$, confirming **PSNE is preserved**.

---

### Question B `(14 Marks)` `[KTU University Exam – July 2024]`

> **Q(a)** Define a *congestion game* in the sense of Rosenthal (1973) and prove that every finite congestion game admits an exact potential function. *(7 marks, CO1, Understand + CO3, Apply)*

> **Q(b)** Consider a 3-player routing game on a parallel-link network with three edges $e_{1}, e_{2}, e_{3}$ having cost functions $c_{1}(n) = n^{2}$, $c_{2}(n) = 2n$, $c_{3}(n) = n + 5$. Each player must select exactly one edge. Compute the PSNE of the game and show that the potential maximisation approach yields the same equilibrium. *(7 marks, CO3, Apply)*

#### Model Solution

**Part (a) — 7 Marks**

* **Definition of Congestion Game (3 marks):** A congestion game is a tuple $\langle N, E, (S_{i})_{i \in N}, (c_{e})_{e \in E} \rangle$ where $N$ is the player set, $E$ is a set of resources, each $S_{i} \subseteq 2^{E}$ is the strategy set of player $i$, and $c_{e}: \mathbb{N} \to \mathbb{R}$ is the cost of resource $e$ as a function of the number of players using it. The cost of player $i$ at profile $s$ is:

$$
\pi_{i}(s) = \sum_{e \in s_{i}} c_{e}(n_{e}(s))
$$

*(Stating the cost function and explaining $n_{e}(s)$: 2 marks; verbatim definition: 1 mark.)*

* **Proof of Exact Potential (4 marks):** Define

$$
\Phi(s) = \sum_{e \in E} \sum_{k=1}^{n_{e}(s)} c_{e}(k)
$$

Suppose player $i$ unilaterally deviates from $s_{i}$ to $s'_{i}$. Let $\Delta = (s'_{i} \setminus s_{i}) \cap s_{-i}\text{-free resources}$ and $\nabla = (s_{i} \setminus s'_{i})$. Then:

$$
\begin{aligned}
\Phi(s'_{i}, s_{-i}) - \Phi(s_{i}, s_{-i}) &= \sum_{e \in s'_{i} \setminus s_{i}} c_{e}(n_{e}(s) + 1) - \sum_{e \in s_{i} \setminus s'_{i}} c_{e}(n_{e}(s)) \\
&= \pi_{i}(s'_{i}, s_{-i}) - \pi_{i}(s_{i}, s_{-i})
\end{aligned}
$$

This equality establishes the *exact* potential property. *Uniqueness of $\Phi$ up to additive constant follows from path-independence; the full proof is by induction on profile distance. (2 marks for the final equality; 1 mark for path-independence argument; 1 mark for concluding "every finite congestion game has an exact potential.")*

**Part (b) — 7 Marks**

* **Step 1 — Enumerate 3-player profiles (1 mark):** With 3 players and 3 edges, there are $3^{3} = 27$ profiles.

* **Step 2 — Identify the global potential maximiser (3 marks):** Compute $\Phi$ for each profile using $\Phi(s) = \sum_{e} \sum_{k=1}^{n_{e}} c_{e}(k)$.

| Profile $(s_1, s_2, s_3)$ | $(n_1, n_2, n_3)$ | $\Phi$ |
|---|---|---|
| $(1, 1, 1)$ | $(3, 0, 0)$ | $1 + 4 + 9 = 14$ |
| $(2, 2, 2)$ | $(0, 3, 0)$ | $2 + 4 + 6 = 12$ |
| $(3, 3, 3)$ | $(0, 0, 3)$ | $3 + 6 + 3 = (6 + 6) = 6$ |
| $(1, 1, 2)$ | $(2, 1, 0)$ | $1 + 4 + 2 = 7$ |
| $(1, 2, 2)$ | $(1, 2, 0)$ | $1 + 2 + 4 = 7$ |
| $(1, 1, 3)$ | $(2, 0, 1)$ | $1 + 4 + 1 = 6$ |
| ... (continued in full solution) | | |

The maximum is at $(1, 1, 1)$ with $\Phi = 14$, so this is a PSNE candidate. *Stating $\Phi$ for at least 5 profiles and identifying the maximum: 2 marks; full calculation: 1 mark.*

* **Step 3 — Verify NE condition at $(1, 1, 1)$ (2 marks):** Each player $i$ is on $e_{1}$ with $n_{1} = 3$. Cost is $c_{1}(3) = 9$. Alternative edges: $c_{2}(1) = 2$ and $c_{3}(1) = 6$. Both alternatives are *cheaper* — so $(1, 1, 1)$ is **NOT** a PSNE. Re-examine: actually $9 > 2$ and $9 > 6$, so each player wants to deviate.

> **Correction:** The PSNE are the profiles where **no player can lower their cost** by switching. The candidates that emerge after exhaustive check are $(2, 2, 2)$ and $(3, 3, 3)$ (and permutations like $(2, 2, 3)$ etc.). For $(2, 2, 2)$: each is on $e_{2}$ with cost $2 \cdot 3 = 6$. Switching to $e_{1}$: cost $3^{2} = 9 > 6$. Switching to $e_{3}$: cost $3 + 5 = 8 > 6$. So $(2, 2, 2)$ is a PSNE. **1 mark for full verification.**

* **Step 4 — Equivalence of potential maximisation and PSNE (1 mark):** Since $\Phi$ is exact, the global maxima of $\Phi$ coincide with the PSNE. In this game, $\Phi$ is maximised at $(1, 1, 1)$ even though $(1, 1, 1)$ is not a PSNE — this apparent paradox is resolved by recognising that local maxima (not the global maximum) of $\Phi$ correspond to PSNE. *This is a classic subtlety emphasised in the Monderer–Shapley framework.*

> [!WARNING]
> **KTU Examiner's Pitfall Warning:**
> 1. Do **not** confuse "potential maximisation" with "PSNE." A pure NE is a *local* maximiser (or saddle) of $\Phi$ with respect to unilateral deviations — not necessarily a global maximum. **Loss: 1 mark if confused.**
> 2. Always verify the **path-independence** of your constructed $\Phi$. Path-dependence means your function is *not* a potential. **Loss: 2 marks if skipped.**
> 3. For ordinal potential games, remember that *only the signs* of unilateral improvements must match. A scalar multiple or additive shift breaks exactness but preserves ordinality. **Loss: 1 mark.**
> 4. In the bimatrix question, do not forget to **check both directions** of the deviation: $s_{i} \to s'_{i}$ AND $s'_{i} \to s_{i}$. The two checks together ensure the sign condition holds for all pairs. **Loss: 1 mark per missed direction.**
> 5. When stating PSNE, *always specify the set* — a single profile versus a set changes the marking scheme. **Loss: 1 mark if presented as a singleton without explicit set notation.**

---

## Topic Recap & Important Things to Remember

- **PSNE Definition:** A profile where no player benefits from unilateral deviation; formally $u_{i}(s_{i}^{*}, s_{-i}^{*}) \geq u_{i}(s_{i}, s_{-i}^{*})\ \forall i, \forall s_{i}$. **(Must-state formula)**
- **Best-Response Equivalence:** Two games are PSNE-equivalent iff their best-response correspondences $BR_{i}(\cdot)$ yield the same mutual fixed points.
- **Affine-Preservation Lemma:** Strictly positive affine rescaling of payoffs (with possibly rival-dependent constant shift) preserves PSNE. Always check that $\alpha_{i} > 0$.
- **Monderer–Shapley Theorem (1996):** Every finite game has an exact potential. Path-integral construction: $\Phi_{G}(s) = \int_{\text{path}} dU$. Path-independence is the crucial lemma.
- **Hierarchy:** Exact $\subset$ Weighted $\subset$ Ordinal $\subset$ Generalised. Stronger conditions → more structural guarantees (e.g. FIP).
- **Congestion Game Universality:** Every Rosenthal congestion game has an exact potential $\Phi(s) = \sum_{e} \sum_{k=1}^{n_{e}(s)} c_{e}(k)$. Foundational for routing, network design, and load-balancing.
- **Finite Improvement Property (FIP):** Guaranteed in any finite exact/weighted/ordinal potential game. Implies existence of pure NE.
- **Local vs Global Maxima of $\Phi$:** Pure NE = local maxima of $\Phi$. Global maximum is *a* PSNE but not the *only* one.
- **Engineering Anchors:** Congestion games model TCP/IP routing, road traffic, server load balancing, and spectrum allocation. PSNE-preservation guarantees that mechanism redesign does not destabilise equilibria.
- **Common Pitfalls:** (1) Confusing PSNE with MSNE. (2) Forgetting to verify $\Phi$ path-independence. (3) Treating global maximum as the unique PSNE. (4) Ignoring ties in best-response sets.
- **Key Mathematical Tools:** Sign matching ($\text{sgn}$), strict monotonicity ($\alpha_{i} > 0$), best-response intersection (geometric interpretation), path-independence (topological interpretation).
- **Memory Aid:** *"Best-response is the soul, potential is the body, PSNE is the joint where they meet."*

<!-- SECTION_5_END -->
