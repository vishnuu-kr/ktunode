# Gradient guided token updates execution loops setups parameters metrics performance profiles validation

<!-- SECTION_1_START -->
# 1. Core Technical Definition & Intuitive Overview

## 1.1 Formal Definition (KTU 2024 Syllabus Terminology)

**Gradient-Guided Token Updates (GGTU)** is a directional prompt tuning abstraction in which a *frozen* task model $f_\theta$ is steered toward a target behaviour by iteratively updating a sequence of *trigger tokens* $\{t_1, t_2, \ldots, t_k\}$ that prefix (or insert into) the input. The update direction at iteration $t$ is obtained by back-propagating the task loss $\mathcal{L}$ through the model's embedding matrix and projecting the resulting continuous gradient signal back onto the discrete vocabulary $\mathcal{V}$ to produce a *hard-token* candidate.

Formally, given an input $x$ and a trigger prompt $P = [t_1, \ldots, t_k]$, the abstraction is defined by the optimisation problem:

$$
\min_{t_1, \ldots, t_k \in \mathcal{V}} \; \mathbb{E}_{(x, y) \sim \mathcal{D}_{\text{task}}} \left[ \mathcal{L}\bigl( f_\theta( [P \,;\, x] ), y \bigr) \right]
$$

> [!IMPORTANT]
> **Key Syllabus Highlight (PECST805 – Module 3)**
> The gradient is computed in the *embedding space* $E \in \mathbb{R}^{\vert \mathcal{V} \vert \times d}$, but the optimisation variable lives in the *discrete index space* $\mathbb{Z}^{\vert \mathcal{V} \vert}$. The bridging step — how the continuous gradient becomes a discrete token change — is the central abstraction of this module.

## 1.2 Conceptual Analogy / Intuition

> [!NOTE]
> **Analogy: Tuning a Lock Combination by Feel**
> Imagine you are trying to crack a combination lock without seeing the digits. Each *token* is a digit wheel. You cannot see inside the lock (the model is frozen), but you can *feel* the resistance (the loss value) when you try a combination. By slightly rotating each wheel (taking a small gradient step in embedding space) and re-trying, you "feel" whether the new combination is closer. Eventually you project the wheel to the *nearest notched position* (the nearest vocab token). This is exactly how AutoPrompt, Gumbel-Softmax prompt search, and gradient-guided soft-prompt tuning operate.

## 1.3 Standard Metrics & Constants

| Symbol | Meaning | Typical KTU / Industry Value |
| :--- | :--- | :--- |
| $\vert \mathcal{V} \vert$ | Vocabulary size | $50\,257$ (GPT-2), $32\,000$ (LLaMA-2) |
| $k$ | Trigger length | $3$ to $10$ tokens |
| $\eta$ | Learning rate | $1 \times 10^{-3}$ to $5 \times 10^{-4}$ |
| $T$ | Gumbel temperature | $1.0$ (annealed to $0.1$) |
| $B$ | Beam width | $4$ to $16$ |
| $E$ | Epochs / outer iters | $100$ to $1000$ |

> [!VISUALIZATION CONTROL]
> **Concept:** Loss surface over the discrete token grid
> **GeoGebra / Desmos Input Equations:**
> * `L(t1, t2) = (t1 - 2)^2 + 0.5*(t2 + 1)^2 + sin(1.5*t1)*cos(1.2*t2)`
> **Visual Description:** A non-convex 2-D surface where the x and y axes represent two discrete token indices $t_1, t_2$ (integer values plotted on a continuous grid for visual continuity). The gradient field $\nabla L$ is overlaid as small arrows; one should observe how a gradient step in continuous embedding space "rolls" toward a basin, which is then snapped to the nearest integer token coordinate.

---

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Four Operational Phases

The GGTU abstraction is decomposed into four logical stages. Every production system (AutoPrompt, PromptAttack, RGP, GrIPS, FluentPrompt) maps to one of these phases.

1. **Phase A – Forward Pass over Triggered Input**
   Concatenate the learnable trigger $P$ with the task input $x$ and run a forward pass through the frozen model:
   $$
   \mathbf{h} = f_\theta^{\text{enc}}\bigl( [P \,;\, x] \bigr)
   $$
   Obtain logits $\mathbf{z} \in \mathbb{R}^{\vert \mathcal{V} \vert}$ over the next-token distribution.

2. **Phase B – Backward Pass into the Embedding Layer**
   Compute $\nabla_{E[t_i]} \mathcal{L}$ for each trigger position $i$. Because the embedding lookup is a *one-hot* indexer, the gradient lives in row space of $E$.

3. **Phase C – Candidate Token Selection (Directional Step)**
   Two dominant strategies:
   * **Top-$K$ projection (AutoPrompt):** rank tokens by their gradient-aligned score $s_j = E_j^{\top} \nabla_{E[t_i]}\mathcal{L}$ and keep the top-$K$.
   * **Gumbel-Softmax relaxation (P-Tuning v2):** sample softly with temperature $T$ and anneal.

4. **Phase D – Greedy Replacement & Convergence Check**
   Replace $t_i$ with $\arg\max_j \, s_j$, then re-evaluate $\mathcal{L}_{\text{val}}$. Stop when $\mathcal{L}_{\text{val}}$ plateaus over a patience window $p$.

## 2.2 Why the Gradient "Points" to a Better Token

For cross-entropy loss $\mathcal{L} = -\log p_\theta(y \mid [P;x])$, the gradient with respect to the embedding $E[t_i]$ is:

$$
\nabla_{E[t_i]} \mathcal{L} \;=\; \bigl( \text{softmax}(\mathbf{z}) - \mathbf{e}_y \bigr)^{\top} \frac{\partial \mathbf{z}}{\partial E[t_i]}
$$

The **left eigenvector** of the Jacobian $\partial \mathbf{z} / \partial E[t_i]$ aligns with the residual error. Tokens whose embedding $E_j$ is positively aligned with this residual receive the highest update score — they are the tokens whose *replacement* would most reduce the loss.

> [!NOTE]
> **Engineering Insight:** This is why gradient-guided tuning is *directional* — it does not search the $\vert \mathcal{V} \vert^k$ space blindly; it follows the steepest descent direction in embedding space, making it roughly $\mathcal{O}(k \cdot \vert \mathcal{V} \vert)$ per step instead of $\mathcal{O}(\vert \mathcal{V} \vert^k)$.

## 2.3 KTU Formula Sheet / Cheat Sheet

| # | Equation | Symbol Glossary | Engineering Use |
| :--- | :--- | :--- | :--- |
| 1 | $P^\star = \arg\min_P \mathbb{E}_{(x,y)}[-\log p_\theta(y \mid [P;x])]$ | Task-conditioned prompt | AutoPrompt objective |
| 2 | $s_j = E_j^{\top} \nabla_{E[t_i]} \mathcal{L}$ | Token score | AutoPrompt candidate ranking |
| 3 | $\tilde{\alpha}_j = \frac{\exp\bigl((E_j^{\top} g + g_j)/\tau\bigr)}{\sum_{u} \exp\bigl((E_u^{\top} g + g_u)/\tau\bigr)}$ | Gumbel-Softmax prob. | P-Tuning v2 / GPG |
| 4 | $\tau_{t+1} = \max(\tau_{\min}, \tau_t \cdot \gamma)$ | Temperature anneal | Continuous → discrete |
| 5 | $\Delta_{\text{FLOPs}} = \frac{k \cdot d \cdot L_{\text{model}}}{N_{\text{params}} \cdot L_{\text{model}}} = \frac{k \cdot d}{N_{\text{params}}}$ | Relative compute | Efficiency profile |
| 6 | $\text{PPL}(P) = \exp\!\bigl(-\tfrac{1}{n}\sum_{i=1}^{n}\log p_\theta(x_i \mid x_{<i})\bigr)$ | Perplexity | Prompt fluency metric |
| 7 | $\text{Acc}_{\text{val}} = \tfrac{1}{N}\sum_{i=1}^{N}\mathbb{1}\bigl[\arg\max f_\theta([P;x_i]) = y_i\bigr]$ | Validation accuracy | Downstream metric |
| 8 | $\text{Stab} = 1 - \tfrac{\text{std}(\text{Acc}_{r=1}^{R})}{\text{mean}(\text{Acc}_{r=1}^{R})}$ | Run-to-run stability | KTU reliability metric |

> [!IMPORTANT]
> **Critical Notational Note (Markdown Safety):** All absolute-value bars and norms in the table are typeset as $\vert \cdot \vert$ inside math mode to prevent markdown table breakage. Never write $\vert x \vert$ with raw pipe characters in a table cell.

## 2.4 Real-World Utility in Engineering

- **Production NLP Pipelines:** Trigger-token search is used in sentiment steering, jailbreak defence, and red-teaming.
- **Retrieval-Augmented Systems (RAG):** Gradient-tuned *query prefixes* outperform handcrafted prompts by $4$–$11$ points on MMLU.
- **Edge Deployment:** Because only $k \cdot d$ parameters change (vs $\sim 7$B for full fine-tuning), gradient-guided tuning is **$1000\times$ more memory efficient** — a decisive KTU interview talking point.
- **AutoML for Prompts:** Tools such as Promptify, PromptOpt, and DSPy use gradient-guided abstractions under the hood.

---

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Code/Symbolic Implementation

## 3.1 Derivation: From Soft Embedding to Hard Token (Top-K Projection)

**Step 1 — Forward.**
Let the trigger embedding be $\mathbf{e}_i = E[t_i] \in \mathbb{R}^d$. After the forward pass, the cross-entropy loss is:
$$
\mathcal{L} = -\sum_{c=1}^{\vert \mathcal{V} \vert} \mathbf{e}_y(c) \, \log \, \text{softmax}(\mathbf{z})_c = -\log \, \text{softmax}(\mathbf{z})_y
$$

**Step 2 — Backward through the embedding lookup.**
The embedding lookup is linear in $E$ (one-hot mask $\mathbf{m}_i$):
$$
\frac{\partial \mathbf{z}}{\partial E[t_i]} = \mathbf{m}_i^{\top} \otimes W_{\text{out}} \in \mathbb{R}^{\vert \mathcal{V} \vert \times d}
$$
where $W_{\text{out}}$ is the unembedding matrix. Thus the gradient reduces to:
$$
\nabla_{E[t_i]} \mathcal{L} = \bigl( \text{softmax}(\mathbf{z}) - \mathbf{e}_y \bigr)^{\top} W_{\text{out}}
$$

**Step 3 — Token score.**
The candidate score for each vocab token $j$ is the inner product with this gradient:
$$
s_j = E_j^{\top} \, \nabla_{E[t_i]} \mathcal{L} = E_j^{\top} W_{\text{out}}^{\top} \bigl( \text{softmax}(\mathbf{z}) - \mathbf{e}_y \bigr)
$$

**Step 4 — Update rule.**
Replace $t_i$ with the top-scoring token:
$$
t_i^{\text{new}} = \arg\max_{j \in \text{Top-}K} \; E_j^{\top} \, \nabla_{E[t_i]} \mathcal{L}
$$

> [!NOTE]
> This is a *one-hot* index update. No embedding rows are actually mutated — only the index $t_i$ changes. The model parameters $W_{\text{out}}$ remain frozen.

## 3.2 Derivation: Gumbel-Softmax Annealing Schedule

For a relaxed prompt, we sample from a categorical over the vocabulary with temperature $\tau$:

$$
g_j = -\log\bigl(-\log u_j\bigr), \quad u_j \sim \text{Uniform}(0,1)
$$

$$
\tilde{\alpha}_j = \frac{\exp\bigl(( \log E_j^{\top} g + g_j)/\tau\bigr)}{\sum_{u=1}^{\vert \mathcal{V} \vert} \exp\bigl(( \log E_u^{\top} g + g_u)/\tau\bigr)}
$$

The straight-through estimator uses $\tilde{\alpha}$ in the forward pass and the hard $\arg\max$ in the backward pass:

$$
\alpha_j^{\text{ST}} = \mathbb{1}\bigl[j = \arg\max_u \tilde{\alpha}_u\bigr] + \tilde{\alpha}_j - \text{stop\_grad}\bigl(\tilde{\alpha}_j\bigr)
$$

Temperature annealing follows:
$$
\tau_{t+1} = \max\bigl(\tau_{\min}, \; \gamma \cdot \tau_t\bigr), \quad \gamma \in [0.9, 0.99]
$$

## 3.3 Validation Metric Derivation

For $R$ independent runs with random seeds, the *performance profile* is:

$$
\mu_{\text{acc}} = \frac{1}{R} \sum_{r=1}^{R} \text{Acc}_r, \qquad \sigma_{\text{acc}}^2 = \frac{1}{R-1}\sum_{r=1}^{R}\bigl(\text{Acc}_r - \mu_{\text{acc}}\bigr)^2
$$

A *convergence-validity* check uses a sliding window of width $w$:

$$
\text{Converged} \iff \max_{t \in [T-w, T]} \bigl\vert \mathcal{L}_{\text{val}}^{(t)} - \mathcal{L}_{\text{val}}^{(t-1)} \bigr\vert < \epsilon
$$

## 3.4 Production-Grade Python Implementation

```python
"""
gradient_guided_token_update.py
KTU PECST805 — Module 3 reference implementation.
AutoPrompt-style gradient-guided token update loop.
"""

from __future__ import annotations
import math
import logging
import random
from dataclasses import dataclass, field
from typing import Callable, List, Sequence, Tuple

import numpy as np

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)
log = logging.getLogger("GGTU")


# ----------------------------------------------------------------------
# 1. Configuration dataclass — every "setup parameter" lives here
# ----------------------------------------------------------------------
@dataclass(frozen=True)
class GGTUConfig:
    vocab_size: int              # |V|
    embed_dim: int               # d
    trigger_len: int             # k
    learning_rate: float         # η  (kept for soft variant)
    top_k: int                   # candidate beam width
    gumbel_tau_start: float      # τ_0
    gumbel_tau_end: float        # τ_min
    gumbel_gamma: float          # anneal factor
    max_iters: int               # outer-loop budget
    patience: int                # early-stop window
    val_every: int               # validation frequency
    n_runs: int                  # R for stability
    seed: int = 42

    def anneal(self, t: int) -> float:
        """Geometric temperature schedule."""
        tau = self.gumbel_tau_start * (self.gumbel_gamma ** t)
        return max(self.gumbel_tau_end, tau)


# ----------------------------------------------------------------------
# 2. Toy "model" — a frozen linear probe for reproducibility
# ----------------------------------------------------------------------
class FrozenToyLM:
    """
    Stand-in for a frozen LLM. Returns logits over |V| given an
    embedding-pooled representation. All weights are fixed.
    """

    def __init__(self, embedding: np.ndarray, unembedding: np.ndarray) -> None:
        if embedding.shape[0] != unembedding.shape[1]:
            raise ValueError("embedding rows must equal unembedding cols")
        self.E: np.ndarray = embedding.astype(np.float64)   # (|V|, d)
        self.Wout: np.ndarray = unembedding.astype(np.float64)  # (|V|, d)
        self._rng = np.random.default_rng(0)

    def forward(self, trigger_ids: Sequence[int], x_emb: np.ndarray) -> np.ndarray:
        """Return next-token logits given trigger + input embedding."""
        pooled = np.mean(
            np.vstack([self.E[list(trigger_ids)], x_emb[None, :]]), axis=0
        )
        return self.Wout @ pooled  # (|V|,)

    @staticmethod
    def cross_entropy(logits: np.ndarray, target: int) -> float:
        z = logits - logits.max()
        log_softmax = z - np.log(np.exp(z).sum())
        return float(-log_softmax[target])


# ----------------------------------------------------------------------
# 3. Core engine
# ----------------------------------------------------------------------
class GradientGuidedPromptTuner:
    """The four-phase GGTU loop."""

    def __init__(self, model: FrozenToyLM, cfg: GGTUConfig) -> None:
        self.model = model
        self.cfg = cfg
        self._rng = np.random.default_rng(cfg.seed)
        self.history: List[dict] = []

    # ---------------- Phase A: Forward ----------------
    def _forward_loss(
        self, trigger: Sequence[int], x_emb: np.ndarray, y: int
    ) -> float:
        logits = self.model.forward(trigger, x_emb)
        return self.model.cross_entropy(logits, y)

    # ---------------- Phase B & C: Gradient + Top-K ----------------
    def _gradient_wrt_embedding(
        self, trigger: Sequence[int], x_emb: np.ndarray, y: int
    ) -> np.ndarray:
        """Return ∇_{E[t_i]} L for a single position i (first trigger slot)."""
        logits = self.model.forward(trigger, x_emb)
        z = logits - logits.max()
        softmax = np.exp(z) / np.exp(z).sum()
        residual = softmax.copy()
        residual[y] -= 1.0                           # (|V|,)
        # grad wrt pooled embedding
        grad_pooled = self.model.Wout.T @ residual  # (d,)
        # approx: gradient distributed uniformly across k slots
        return grad_pooled / max(1, self.cfg.trigger_len)

    def _topk_candidates(
        self, grad: np.ndarray, banned: Sequence[int] = ()
    ) -> List[Tuple[int, float]]:
        scores = self.model.E @ grad                  # (|V|,)
        for b in banned:
            scores[b] = -np.inf
        top_idx = np.argpartition(-scores, self.cfg.top_k)[: self.cfg.top_k]
        return sorted(
            ((int(j), float(scores[j])) for j in top_idx),
            key=lambda t: -t[1],
        )

    # ---------------- Phase D: Greedy replacement ----------------
    def _replace_token(
        self, trigger: Sequence[int], position: int, new_token: int
    ) -> List[int]:
        out = list(trigger)
        out[position] = new_token
        return out

    # ---------------- Main loop ----------------
    def fit(
        self,
        train_data: Sequence[Tuple[np.ndarray, int]],
        val_data: Sequence[Tuple[np.ndarray, int]],
        init_trigger: Sequence[int] | None = None,
    ) -> List[int]:
        cfg = self.cfg
        trigger: List[int] = list(
            init_trigger
            or self._rng.integers(0, cfg.vocab_size, size=cfg.trigger_len).tolist()
        )
        best_val = math.inf
        no_improve = 0

        for it in range(cfg.max_iters):
            # -------- Outer iteration --------
            x_emb, y = random.choice(train_data)
            loss = self._forward_loss(trigger, x_emb, y)

            # -------- Inner per-position update --------
            for pos in range(cfg.trigger_len):
                grad = self._gradient_wrt_embedding(trigger, x_emb, y)
                cands = self._topk_candidates(grad, banned=(trigger[pos],))
                best_tok, _ = cands[0]
                trigger = self._replace_token(trigger, pos, best_tok)

            # -------- Validation checkpoint --------
            if it % cfg.val_every == 0:
                val_loss = np.mean(
                    [self._forward_loss(trigger, x, y) for x, y in val_data]
                )
                self.history.append(
                    {"iter": it, "train_loss": loss, "val_loss": val_loss,
                     "trigger": tuple(trigger)}
                )
                log.info(
                    "iter=%d  train_loss=%.4f  val_loss=%.4f  trigger=%s",
                    it, loss, val_loss, trigger,
                )
                if val_loss + 1e-6 < best_val:
                    best_val, no_improve = val_loss, 0
                else:
                    no_improve += 1
                    if no_improve >= cfg.patience:
                        log.info("Early stopping at iter %d", it)
                        break

        return trigger


# ----------------------------------------------------------------------
# 4. End-to-end demo
# ----------------------------------------------------------------------
def main() -> None:
    rng = np.random.default_rng(7)
    vocab, d = 1000, 32
    E = rng.standard_normal((vocab, d))
    W = rng.standard_normal((vocab, d))

    model = FrozenToyLM(E, W)

    train = [(rng.standard_normal(d), int(rng.integers(vocab))) for _ in range(64)]
    val   = [(rng.standard_normal(d), int(rng.integers(vocab))) for _ in range(32)]

    cfg = GGTUConfig(
        vocab_size=vocab,
        embed_dim=d,
        trigger_len=4,
        learning_rate=1e-3,
        top_k=8,
        gumbel_tau_start=1.0,
        gumbel_tau_end=0.1,
        gumbel_gamma=0.95,
        max_iters=200,
        patience=10,
        val_every=10,
        n_runs=3,
    )

    final_triggers: List[List[int]] = []
    for r in range(cfg.n_runs):
        log.info("===== Run %d / %d =====", r + 1, cfg.n_runs)
        tuner = GradientGuidedPromptTuner(model, cfg)
        trigger = tuner.fit(train, val)
        final_triggers.append(trigger)
        log.info("Final trigger: %s", trigger)

    # Stability profile
    acc_per_run = [
        np.mean([
            1.0 if int(np.argmax(model.Wout @ np.mean(
                np.vstack([model.E[trigger], x[None, :]]), axis=0
            ))) == y else 0.0
            for x, y in val
        ])
        for trigger in final_triggers
    ]
    log.info("Per-run accuracies: %s", acc_per_run)
    log.info("Mean accuracy: %.4f | Std: %.4f",
             np.mean(acc_per_run), np.std(acc_per_run))


if __name__ == "__main__":
    main()
```

## 3.5 Hyperparameter Setup Matrix (Laboratory Style)

| Phase | Parameter | Recommended Range | KTU Default | Effect of Increase |
| :--- | :--- | :--- | :--- | :--- |
| A — Forward | Batch size | $8$–$64$ | $16$ | Smoother gradient, slower step |
| B — Backward | Gradient clip | $0.5$–$2.0$ | $1.0$ | Stability vs expressivity |
| C — Candidate | Top-$K$ | $4$–$32$ | $8$ | Better search, slower |
| C — Candidate | $\tau_{\text{start}}$ | $0.5$–$2.0$ | $1.0$ | More exploration |
| C — Candidate | $\tau_{\text{end}}$ | $0.05$–$0.2$ | $0.1$ | Sharper decisions |
| C — Candidate | $\gamma$ | $0.9$–$0.99$ | $0.95$ | Slower anneal |
| D — Replace | Patience $p$ | $5$–$20$ | $10$ | Tighter convergence |
| D — Validate | Val-every | $5$–$50$ | $10$ | Finer curves |

> [!WARNING]
> **Pitfall:** Increasing $K$ beyond $32$ rarely helps — the gradient direction already concentrates $90\%$ of its mass in the top $5$ tokens. Beyond that, noise dominates.

---

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Sequential Processing Topology — GGTU Execution Loop

```mermaid
flowchart TD
    A[Start: Init Trigger P] --> B[Sample Mini-Batch x y]
    B --> C[Phase A: Forward Pass f_theta of P x]
    C --> D[Phase B: Backprop to Embedding E of t_i]
    D --> E[Phase C: Top-K Candidate Ranking]
    E --> F[Phase D: Greedy Token Replace]
    F --> G{Iter mod val_every == 0}
    G -- No --> B
    G -- Yes --> H[Compute val_loss on D_val]
    H --> I{val_loss improved}
    I -- Yes --> J[Reset patience counter]
    I -- No --> K[Increment patience]
    K --> L{patience >= p}
    L -- No --> B
    L -- Yes --> M[Stop: Return Final P]
    J --> B
```

## 4.2 Block-Level Functional Architecture

```mermaid
flowchart LR
    subgraph InputLayer["Input Layer"]
        X[Task Input x]
        Y[Gold Label y]
    end

    subgraph FrozenBlock["Frozen Model f_theta"]
        EMB[Embedding Matrix E]
        TRF[Transformer Backbone]
        UNEMB[Unembedding W_out]
    end

    subgraph TunableBlock["Tunable Trigger P = t1..tk"]
        P1[Token Slot 1]
        P2[Token Slot 2]
        P3[Token Slot k]
    end

    subgraph OptimizerBlock["GGTU Optimizer"]
        GRAD[Gradient Computer]
        RANK[Top-K Ranker]
        REPL[Replacer]
    end

    X --> TRF
    P1 --> EMB
    P2 --> EMB
    P3 --> EMB
    EMB --> TRF
    TRF --> UNEMB
    UNEMB --> GRAD
    Y --> GRAD
    GRAD --> RANK
    RANK --> REPL
    REPL --> P1
    REPL --> P2
    REPL --> P3
```

## 4.3 Metric Aggregation Flow

```mermaid
flowchart TD
    R1[Run 1 Trigger P1] --> M1[Val Acc 1]
    R2[Run 2 Trigger P2] --> M2[Val Acc 2]
    R3[Run 3 Trigger P3] --> M3[Val Acc 3]
    R4[Run R Trigger PR] --> M4[Val Acc R]

    M1 --> AGG[Aggregator]
    M2 --> AGG
    M3 --> AGG
    M4 --> AGG

    AGG --> MU[Mean mu]
    AGG --> SIGMA[Std sigma]
    AGG --> STAB[Stability Score 1 minus sigma over mu]
```

## 4.4 Trigger-Position vs Iteration Heatmap (Conceptual)

```mermaid
flowchart TD
    ITER0[Iter 0] --> SLOT0_0[Slot 1: 'the']
    ITER0 --> SLOT0_1[Slot 2: 'a']
    ITER0 --> SLOT0_2[Slot 3: 'of']

    ITER1[Iter 10] --> SLOT1_0[Slot 1: 'therefore']
    ITER1 --> SLOT1_1[Slot 2: 'because']
    ITER1 --> SLOT1_2[Slot 3: 'truly']

    ITER2[Iter 50] --> SLOT2_0[Slot 1: 'NOT']
    ITER2 --> SLOT2_1[Slot 2: 'always']
    ITER2 --> SLOT2_2[Slot 3: 'indeed']
```

> [!NOTE]
> The slot contents in the diagram are illustrative. In practice, the tokens discovered are *task-specific discourse markers* (e.g., "However", "NOT", "truly") that bias attention heads in the frozen transformer.

---

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer (3 Marks Each)

### Question 1 `[KTU University Exam – July 2024]`
**Define *gradient-guided token updates* in the context of directional prompt tuning. Why is the gradient computed in embedding space while the optimisation variable is discrete?** (CO1, Understand)

**Model Answer (3 Marks):**
* **[1 Mark]** *Definition:* Gradient-guided token updates is a directional prompt tuning abstraction that iteratively replaces discrete trigger tokens by following the gradient of the task loss back-propagated to the embedding layer of a frozen language model.
* **[1 Mark]** *Embedding-space gradient:* The embedding lookup is a differentiable indexer, so the chain rule yields $\nabla_{E[t_i]}\mathcal{L}$ in $\mathbb{R}^d$, providing a smooth direction.
* **[1 Mark]** *Why the variable is discrete:* Tokens themselves are one-hot indices over $\mathcal{V}$; gradients cannot be applied directly, hence the projection step (top-$K$ or Gumbel-Softmax) bridges continuous signal to discrete replacement.

### Question 2 `[KTU University Exam – Dec 2023]`
**List any three performance metrics used to evaluate a gradient-tuned prompt, and state one stability metric for multi-run validation.** (CO2, Remember)

**Model Answer (3 Marks):**
* **[1 Mark]** *Downstream:* Validation accuracy (or task-specific F1).
* **[1 Mark]** *Fluency:* Prompt perplexity $\text{PPL}(P)$.
* **[1 Mark]** *Convergence:* Best validation loss at convergence.
* **[1 Mark — overlapping, accepted as 3rd]* Stability metric: $\text{Stab} = 1 - \sigma_{\text{acc}} / \mu_{\text{acc}}$ across $R \geq 3$ runs.

---

## 5.2 Part B — Full 14-Mark Questions (ESE Module Internal Choice)

### Question A `[KTU University Exam – Dec 2024]`
**(a)** Derive the candidate-token score $s_j = E_j^{\top} \nabla_{E[t_i]}\mathcal{L}$ used in AutoPrompt-style gradient-guided token updates. Show every algebraic transition. **[7 Marks, CO3, Apply]**

**(b)** A team deploys the GGTU loop on a sentiment-classification task with $\vert\mathcal{V}\vert = 32\,000$, trigger length $k=6$, and Top-$K = 16$. After $250$ iterations the per-run accuracies are $[0.812, 0.794, 0.821, 0.798, 0.815]$. Compute the mean, standard deviation, and the stability score. State whether the run is considered stable under the KTU criterion $\text{Stab} \geq 0.97$. **[7 Marks, CO4, Apply]**

**Model Solution:**

**(a) Derivation [7 Marks]**
* **[1 Mark]** State the loss: $\mathcal{L} = -\log \text{softmax}(\mathbf{z})_y$ with $\mathbf{z} = W_{\text{out}}\,\mathbf{h}$ and $\mathbf{h}$ containing $E[t_i]$.
* **[1 Mark]** Embedding lookup linearisation: $\mathbf{h} = \mathbf{m}_i^{\top} E$ where $\mathbf{m}_i$ is one-hot.
* **[1 Mark]** Apply chain rule: $\nabla_{E[t_i]}\mathcal{L} = \nabla_{\mathbf{h}}\mathcal{L}\cdot \frac{\partial \mathbf{h}}{\partial E[t_i]} = \bigl(\text{softmax}(\mathbf{z}) - \mathbf{e}_y\bigr)^{\top} W_{\text{out}}$.
* **[1 Mark]** Candidate score definition: $s_j = E_j^{\top} \nabla_{E[t_i]}\mathcal{L}$ is the *alignment* of candidate embedding with the gradient direction.
* **[1 Mark]** Update rule: $t_i^{\text{new}} = \arg\max_j s_j$.
* **[1 Mark]** Comment on intuition: tokens whose embedding lies in the *gradient descent* direction are preferred.
* **[1 Mark]** Concluding remark on Top-$K$ beam.

**(b) Numerical Solution [7 Marks]**
* **[1 Mark]** Mean:
$$
\mu = \tfrac{1}{5}(0.812 + 0.794 + 0.821 + 0.798 + 0.815) = \tfrac{1}{5}(4.040) = 0.8080
$$
* **[2 Marks]** Deviations squared:
$$
(0.004)^2 = 1.6\times10^{-5},\;(-0.014)^2=1.96\times10^{-4},\;(0.013)^2=1.69\times10^{-4},\;(-0.010)^2=1.0\times10^{-4},\;(0.007)^2=4.9\times10^{-5}
$$
Sum $= 5.28\times 10^{-4}$.
* **[1 Mark]** Variance (sample, $n-1=4$): $\sigma^2 = 5.28\times 10^{-4} / 4 = 1.32\times 10^{-4}$.
* **[1 Mark]** Standard deviation: $\sigma = \sqrt{1.32\times 10^{-4}} \approx 0.01149$.
* **[1 Mark]** Stability:
$$
\text{Stab} = 1 - \frac{0.01149}{0.8080} = 1 - 0.01422 = 0.9858
$$
* **[1 Mark]** **Verdict:** $\text{Stab} = 0.9858 \geq 0.97$ ⇒ **PASS** the KTU stability criterion.

> [!WARNING]
> **KTU Examiner Pitfall (Part B / 7 marks):** Students frequently forget to use the *sample* standard deviation ($n-1$) and lose 1 mark. Always state "sample std" or "population std" explicitly.

---

### Question B `[KTU University Exam – July 2024]`
**(a)** Explain the four phases of the GGTU execution loop with a labelled block diagram and write the Gumbel-Softmax relaxation formula with annealing. **[7 Marks, CO3, Understand]**

**(b)** Design a GGTU setup for a production question-answering system with these requirements: frozen LLaMA-2-7B, $\vert\mathcal{V}\vert = 32\,000$, $d = 4096$, target improvement $\geq 5\%$ on TriviaQA. Specify (i) trigger length $k$, (ii) Top-$K$, (iii) learning rate $\eta$, (iv) max iterations, (v) early-stopping patience, and justify each. Compute the relative compute ratio $\Delta_{\text{FLOPs}} = k\cdot d / N_{\text{params}}$ with $N_{\text{params}} = 7\times10^{9}$. **[7 Marks, CO4, Apply]**

**Model Solution:**

**(a) Four Phases + Diagram [7 Marks]**
* **[1 Mark]** Phase A — Forward: $f_\theta([P;x])$, get logits $\mathbf{z}$.
* **[1 Mark]** Phase B — Backward: compute $\nabla_{E[t_i]}\mathcal{L}$ via chain rule.
* **[1 Mark]** Phase C — Top-$K$ ranking or Gumbel-Softmax sample.
* **[1 Mark]** Phase D — Greedy replacement and validation.
* **[2 Marks]** Block diagram (similar to Section 4.1) with all four phases and decision gates.
* **[1 Mark]** Gumbel-Softmax formula:
$$
\tilde{\alpha}_j = \frac{\exp\bigl((E_j^{\top} g + g_j)/\tau\bigr)}{\sum_{u}\exp\bigl((E_u^{\top} g + g_u)/\tau\bigr)}
$$
with anneal $\tau_{t+1} = \max(\tau_{\min}, \gamma\tau_t)$.

**(b) Production Design [7 Marks]**
| # | Parameter | Choice | Justification | Marks |
| :--- | :--- | :--- | :--- | :--- |
| i | $k$ | $6$ | Empirically optimal for QA triggers (Wallach $2024$). | 1 |
| ii | Top-$K$ | $16$ | Balances exploration and gradient noise. | 1 |
| iii | $\eta$ | $3\times10^{-4}$ | Soft-variant safe LR. | 1 |
| iv | Max iters | $500$ | Sufficient for $\geq 5\%$ gain. | 1 |
| v | Patience | $15$ | KTU-typical convergence window. | 1 |
| vi | Compute ratio | $1.89\times 10^{-6}$ | see below. | 2 |

* **[2 Marks]** Compute:
$$
\Delta_{\text{FLOPs}} = \frac{k \cdot d}{N_{\text{params}}} = \frac{6 \times 4096}{7 \times 10^{9}} = \frac{24\,576}{7\times 10^{9}} \approx 3.51 \times 10^{-6}
$$
Wait — recalculation with stated values yields $3.51 \times 10^{-6}$, not $1.89\times10^{-6}$ (the latter assumed $k=3$). **Final answer:** $\boxed{3.51 \times 10^{-6}}$.

> [!WARNING]
> **KTU Examiner Pitfall (Part B / Design):** Students often confuse the *embedding gradient* update with an *embedding matrix* update. The model is **frozen** — only trigger *indices* change, never $E$ itself. Failure to state this loses 1 mark.

---

## 5.3 Topic Recap & Important Things to Remember

- **GGTU = frozen model + learnable trigger indices**, optimised via the *embedding-space gradient* projected back to the *discrete vocabulary*.
- **Four phases**: Forward → Backward → Top-$K$/Gumbel rank → Greedy replace.
- **Two dominant strategies:** Top-$K$ projection (AutoPrompt) and Gumbel-Softmax annealing (P-Tuning v2).
- **Key equation:** $s_j = E_j^{\top} \nabla_{E[t_i]}\mathcal{L}$; replace $t_i$ with $\arg\max_j s_j$.
- **Critical hyperparameters:** $k \in [3,10]$, $K \in [4,32]$, $\eta \in [10^{-4},10^{-3}]$, $\tau \in [0.1, 1.0]$, patience $\in [5,20]$.
- **Metrics triad:** Validation accuracy (downstream) + Perplexity (fluency) + Stability score (multi-run).
- **Stability formula:** $\text{Stab} = 1 - \sigma/\mu \geq 0.97$ is the KTU pass criterion.
- **Efficiency:** Only $k \cdot d$ *indices* change — the *embedding matrix is not mutated*. Relative compute $\sim 10^{-6}$ of full fine-tuning.
- **Common pitfalls:** confusing index update with embedding update; using *population* std instead of *sample* std; skipping the validation step; ignoring early stopping.
- **Convergence signal:** $\max_{t \in [T-w, T]}\vert \mathcal{L}_{\text{val}}^{(t)} - \mathcal{L}_{\text{val}}^{(t-1)}\vert < \epsilon$.
- **Industrial tools using GGTU:** AutoPrompt, PromptAttack, RGP, GPG, DSPy, Promptify.
- **KTU Module-3 linkage:** The abstraction is *directional* (gradient-following), *abstracted* (model-agnostic), and *tunable* (only $k$ tokens updated per step).
<!-- SECTION_5_END -->
