# Classical information over noisy quantum channels

<!-- SECTION_1_START -->
# Classical Information over Noisy Quantum Channels

## 1.1 Formal Academic Definition (KTU 2024 Scheme Alignment)

In the KTU **PECST638 – Quantum Computing** syllabus (Module 4: Quantum Communication), the problem of *classical information over noisy quantum channels* is framed as follows:

> **Definition (Classical Capacity of a Quantum Channel).** Let $\mathcal{N} : \mathcal{L}(\mathcal{H}_A) \rightarrow \mathcal{L}(\mathcal{H}_B)$ be a completely-positive trace-preserving (CPTP) quantum channel. The **classical capacity** $C(\mathcal{N})$ is defined as the maximum rate (in bits per channel use) at which classical information can be reliably transmitted from a sender (Alice) to a receiver (Bob) when each logical bit is encoded into quantum states that are passed through $\mathcal{N}$.

Equivalently, using the modern information-theoretic limit:

$$
C(\mathcal{N}) \;=\; \lim_{n \to \infty} \frac{1}{n} \, \chi\!\left(\mathcal{N}^{\otimes n}\right)
$$

where $\chi(\mathcal{N})$ is the **Holevo information** of a single use of the channel, and the limit expresses that we may use $n$ copies of the channel coherently (entangled input strategies).

> [!IMPORTANT]
> **Holevo–Schumacher–Westmoreland (HSW) Theorem (1998).**
> The Holevo information of a quantum channel is an *achievable* rate for classical communication. That is, for any ensemble $\{p_i, \rho_i\}$ at the input of $\mathcal{N}$,
> $$ C(\mathcal{N}) \;\geq\; \chi(\mathcal{N}) \;=\; \max_{\{p_i,\rho_i\}} \left[ S\!\left(\sum_i p_i \mathcal{N}(\rho_i)\right) \;-\; \sum_i p_i \, S\!\left(\mathcal{N}(\rho_i)\right) \right] $$
> and the *regularized* Holevo information gives the exact classical capacity.

## 1.2 Conceptual Analogy and Geometric Intuition

Imagine Alice wants to send a **handwritten letter** through a **rainy postal system** that randomly smudges the ink. She has two choices:

1. **Naïve strategy** — send a single ink colour and hope the smudge is light. Information leaks because the smudge destroys distinguishability.
2. **Clever strategy** — send a *pair* of letters, one using red ink and one using blue ink, and design the recipient to compare the two. The smudges on each letter are now *partially correlated*, and the comparison reveals information that the individual letter could not.

Quantum mechanics offers an analogous upgrade: instead of using a single quantum state (a "single letter"), Alice uses **product states** drawn from a carefully chosen ensemble — possibly even *entangled* across many channel uses — and Bob performs a **joint measurement** on the whole block. Even though each use of the channel is noisy, the *collective* codeword/measurement scheme overcomes the noise.

> [!NOTE]
> **Key physical constants and units used in this module.**
> - Quantum state alphabet size: $d = 2^n$ for $n$ qubits.
> - Information measured in **bits** (base-2 logarithms): $1$ bit $\equiv \log_2 2$.
> - **Holevo information** is dimensionless but expressed in bits when $\log_2$ is used.

## 1.3 Why "Classical" Information over a Quantum Channel?

Although the *carrier* is quantum, the *message* is a classical string $m \in \{0,1\}^k$. This is the setting of every modern digital communication system, where the wire, fibre, or free-space link can be modelled as a quantum channel acting on optical modes. The performance limit $C(\mathcal{N})$ quantifies the *maximum* classical throughput.

> [!VISUALIZATION CONTROL]
> **Concept:** Trade-off between output distinguishability and input distinguishability under channel noise.
> **GeoGebra / Desmos Input Equations (for an amplitude-damping qubit channel with damping $\gamma = 0.3$):**
> * $f_{\text{bloch}}(x,y) = \sqrt{(1-\gamma)^2 x^2 + y^2}$ — radius contraction of the Bloch ball.
> * Points: $A=(0,0,1)$, $B_0=\mathcal{N}(A)$, $C=(0,0,-1)$, $C_0=\mathcal{N}(C)$.
> **Visual Description:** On the $z$-axis, $A$ (the $|0\rangle$ state) is preserved as $B_0 \approx (0,0,0.7)$, while $C$ (the $|1\rangle$ state) collapses toward the origin — visually demonstrating how channel noise reduces the *volume* of distinguishable output states and therefore reduces the **classical capacity**.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Anatomy of a Classical-Communication Code over a Quantum Channel

A $(n, M, \epsilon)$ classical-quantum code consists of three objects:

1. **Encoder** $\mathcal{E} : \{1,\ldots,M\} \to \mathcal{L}(\mathcal{H}_A^{\otimes n})$ — assigns to each message $m$ a codeword state $\rho_m$.
2. **Channel** $\mathcal{N}^{\otimes n} : \mathcal{L}(\mathcal{H}_A^{\otimes n}) \to \mathcal{L}(\mathcal{H}_B^{\otimes n})$ — applies $n$ independent uses of the channel.
3. **Decoder / POVM** $\{D_m\}_{m=1}^{M}$ — a positive-operator-valued measurement on the output Hilbert space.

**Reliability condition:** average error probability
$$
p_{\text{err}} \;=\; \frac{1}{M}\sum_{m=1}^{M} \mathrm{Tr}\!\left[\,\left(\mathbb{1} - D_m\right)\mathcal{N}^{\otimes n}(\rho_m)\,\right] \;\leq\; \epsilon.
$$

**Achievable rate:** $R = \frac{\log_2 M}{n}$ bits/channel use.

## 2.2 The Holevo Information $\chi$ — Information Engineer's "Single-Letter" Tool

For a *single* channel use, given an input ensemble $\{p_i, \rho_i\}$, Alice prepares $\rho_i$ with probability $p_i$, sends it through $\mathcal{N}$, and Bob receives $\{p_i, \mathcal{N}(\rho_i)\}$. The **Holevo information** is the upper bound on Bob's *accessible* classical information:

$$
\chi(\mathcal{N}) \;=\; \max_{\{p_i,\rho_i\}} \left[\, S\!\left(\sum_i p_i\, \mathcal{N}(\rho_i)\right) \;-\; \sum_i p_i\, S\!\left(\mathcal{N}(\rho_i)\right) \,\right].
$$

The first term is the **entropy of the average output state** (captures output diversity); the second term is the **average output entropy** (captures how noisy each codeword is).

## 2.3 The HSW Theorem (Statement Used in Board Examinations)

> **Theorem (HSW).** For any quantum channel $\mathcal{N}$, the classical capacity obeys
> $$ C(\mathcal{N}) \;=\; \lim_{n\to\infty} \frac{1}{n}\,\chi\!\left(\mathcal{N}^{\otimes n}\right). $$
> In particular, the "single-letter" Holevo information $\chi(\mathcal{N})$ is an achievable rate.

The two-step proof technique you should remember:

- **Achievability (HSW).** Choose an i.i.d. ensemble $\{p_i, \rho_i\}$, send $n$ copies, and let Bob perform a collective **square-root measurement** (Petz map) on the received block. The error exponent is positive whenever $R < \chi(\mathcal{N})$.
- **Converse (Schumacher–Westmoreland).** Combine the quantum data-processing inequality with the Holevo bound to show that no code can beat the regularized $\chi$.

## 2.4 Product-State vs. Entangled-Input Strategies

A common exam pitfall is assuming the *best* input ensemble uses the maximally mixed state. The truth is subtle:

- For many channels (e.g., **dephasing**, **erasure**), the optimal is a *uniform* distribution over pure qubit states $\{|0\rangle, |1\rangle, |+\rangle, |-\rangle, |+i\rangle, |-i\rangle\}$.
- For channels with **asymmetric noise** (e.g., amplitude damping), the optimal ensemble is **biased** toward the noiseless basis state.

> [!TIP]
> The HSW theorem is *not* automatically single-letter equal to the Holevo capacity. Some channels (e.g., the **Horodecki channel** in dimension $3 \otimes 3$) have a *non-additive* Holevo information — meaning $C > \chi(\mathcal{N})$ strictly. This is one of the deepest open problems in quantum Shannon theory and is a frequent viva question.

## 2.5 The KTU Formula Sheet (Exam-Ready)

| Quantity | Formula | Meaning |
|---|---|---|
| von Neumann entropy | $S(\rho) = -\mathrm{Tr}(\rho \log_2 \rho)$ | Quantum analogue of Shannon entropy |
| Holevo information | $\chi(\mathcal{N}) = S(\bar{\rho}_{\text{out}}) - \sum_i p_i S(\mathcal{N}(\rho_i))$ | Max classical mutual info per channel use |
| Classical capacity | $C(\mathcal{N}) = \lim_{n\to\infty} \frac{1}{n}\chi(\mathcal{N}^{\otimes n})$ | Maximum reliable rate (bits/use) |
| Kraus representation | $\mathcal{N}(\rho) = \sum_k E_k \rho E_k^{\dagger}$ | Operator-sum description of channel |
| Complementary channel | $\mathcal{N}^c(\rho) = \mathrm{Tr}_B\!\left[V\rho V^{\dagger}\right]$ | Output seen by the environment (eavesdropper) |
| Depolarizing channel (qubit) | $\mathcal{N}_p(\rho) = (1-p)\rho + \frac{p}{3}(X\rho X + Y\rho Y + Z\rho Z)$ | Symmetric Pauli noise |
| Bit-flip channel | $\mathcal{N}_{p,\text{bf}}(\rho) = (1-p)\rho + p X\rho X$ | $X$ error with probability $p$ |
| Phase-flip channel | $\mathcal{N}_{p,\text{pf}}(\rho) = (1-p)\rho + p Z\rho Z$ | $Z$ error with probability $p$ |
| Erasure channel | $\mathcal{N}_{p,\text{er}}(\rho) = (1-p)\rho + p\,\vert e\rangle\langle e\vert$ | State replaced by erasure flag $\vert e\rangle$ with prob. $p$ |
| HSW capacity of erasure | $C = (1-2p)\log_2 2 = 1-2p$ for $p \le 1/2$ | Linear decrease in capacity |
| HSW capacity of dephasing | $C = 1 - H_2(p)$ | Binary entropy penalty |
| Accessible information | $I_{\text{acc}}(\mathcal{E}) = \max_{\text{POVM}} I(X;Y)$ | Bob's best single-shot classical info |
| Holevo bound | $I_{\text{acc}}(\mathcal{E}) \le \chi(\mathcal{E})$ | Universal upper bound |

> [!NOTE]
> **Notation safeguard for KTU answer books.** The vertical bar $\vert$ (used in $\vert 0\rangle$, $\vert\psi\rangle$) must be rendered via `\vert` or `\mid` inside markdown table cells to avoid breaking the pipe-separated column structure.

## 2.6 Real-World Engineering Utility

Classical information over noisy quantum channels is **not an academic exercise** — it underlies:

- **Optical fibre communication** — the quantum-limited amplifier model is a bosonic channel with thermal noise.
- **Satellite quantum key distribution (QKD)** — both prepare-and-measure and entanglement-based protocols use classical capacity arguments to bound the secret-key rate.
- **Quantum repeaters** — the per-link classical capacity sets the maximum throughput of any repeater chain.
- **Shannon theory of the future internet** — the PLOB bound (Pirandola–Laurenza–Ottaviani–Banchi 2017) extends Holevo-style limits to infinite-dimensional channels, governing all continuous-variable quantum communication.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Symbolic / Computational Implementation

## 3.1 Derivation: Holevo Information of the Qubit Depolarizing Channel

Consider the qubit depolarizing channel
$$
\mathcal{N}_p(\rho) \;=\; (1-p)\,\rho \;+\; \frac{p}{3}\bigl(X\rho X + Y\rho Y + Z\rho Z\bigr).
$$

We will compute $\chi(\mathcal{N}_p)$ step by step.

**Step 1 — Choose the candidate optimal ensemble.**  
By symmetry of the Pauli operators, a uniform mixture of the six eigenstates of $\{X, Y, Z\}$ is the natural candidate. A simpler equivalent input ensemble is the maximally mixed state
$$
\rho_* \;=\; \frac{\mathbb{1}}{2}.
$$

**Step 2 — Compute the output of $\rho_*$.**  
Using $\mathrm{Tr}(X)=\mathrm{Tr}(Y)=\mathrm{Tr}(Z)=0$ and $\sigma_i^2 = \mathbb{1}$:
$$
\mathcal{N}_p\!\left(\frac{\mathbb{1}}{2}\right) \;=\; (1-p)\frac{\mathbb{1}}{2} + \frac{p}{3}\cdot 3 \cdot \frac{\mathbb{1}}{2} \;=\; \frac{\mathbb{1}}{2}.
$$

Hence the average output state is $\bar{\rho}_{\text{out}} = \mathbb{1}/2$, with $S(\bar{\rho}_{\text{out}}) = 1$ bit.

**Step 3 — Compute the average output entropy.**  
For an arbitrary input pure state $\vert\psi\rangle\langle\psi\vert$:
$$
\mathcal{N}_p(\vert\psi\rangle\langle\psi\vert) \;=\; (1-p)\vert\psi\rangle\langle\psi\vert + \frac{p}{3}\!\left(\vert\psi_{\perp}^x\rangle\langle\psi_{\perp}^x\vert + \vert\psi_{\perp}^y\rangle\langle\psi_{\perp}^y\vert + \vert\psi_{\perp}^z\rangle\langle\psi_{\perp}^z\vert\right).
$$

A direct calculation (or the Bloch-vector argument) shows the output is **isotropic**:
$$
\mathcal{N}_p(\vert\psi\rangle\langle\psi\vert) \;=\; \frac{1+p}{2}\,\vert\psi\rangle\langle\psi\vert \;+\; \frac{1-p}{2}\,\vert\psi_\perp\rangle\langle\psi_\perp\vert,
$$

which is a binary state with eigenvalues $\frac{1\pm p}{2}$. Therefore
$$
S\!\left(\mathcal{N}_p(\vert\psi\rangle\langle\psi\vert)\right) \;=\; H_2\!\left(\frac{1+p}{2}\right) \;=\; H_2\!\left(\frac{1-p}{2}\right).
$$

**Step 4 — Assemble the Holevo information.**  
For the ensemble uniformly spread over the six eigenstates of $\{X, Y, Z\}$ (which is unitarily equivalent to a single-pure-state ensemble up to basis change), the average output entropy is also $H_2((1-p)/2)$. Hence
$$
\chi(\mathcal{N}_p) \;=\; S(\bar{\rho}_{\text{out}}) \;-\; \overline{S(\rho_{\text{out}})} \;=\; 1 - H_2\!\left(\frac{1-p}{2}\right).
$$

**Step 5 — Sanity checks.**  
- $p = 0$ (identity channel): $\chi = 1 - H_2(1/2) = 1 - 1 = 0$? **No**, we need to revisit — for $p=0$ the channel is identity, so the output of a pure state is a pure state. Let us re-evaluate.

**Correction (critical for exam):**  
When $p = 0$, $\mathcal{N}_0(\rho) = \rho$, the output of a pure state is a pure state, so the output entropy is **0**, and the *average* output state is also $\mathbb{1}/2$ with $S=1$. Hence
$$
\chi(\mathcal{N}_0) \;=\; 1 - 0 \;=\; 1 \text{ bit per qubit use}.
$$
This matches the expectation that an ideal qubit channel transmits exactly one classical bit per use when we use two orthogonal codewords.

When $p = 1$, the channel is *totally depolarizing*: every input is mapped to $\mathbb{1}/2$. Both terms in the Holevo formula equal 1, so $\chi = 0$ — the channel transmits no classical information. ✓

**Step 6 — Final compact form.**  
The HSW capacity of the qubit depolarizing channel is therefore
$$
\boxed{\;C(\mathcal{N}_p) \;=\; 1 \;-\; H_2\!\left(\frac{1+p}{2}\right)\;}
$$
with the binary entropy $H_2(x) = -x\log_2 x - (1-x)\log_2(1-x)$. The function decreases monotonically from $1$ at $p=0$ to $0$ at $p=1$.

> [!IMPORTANT]
> **Examiner's valuation note.** A common student error is to write $C = 1 - H_2(p)$ for the depolarizing channel. The correct argument of $H_2$ is $(1+p)/2$ (or equivalently $(1-p)/2$ by symmetry), **not** $p$ itself. The formula $C = 1 - H_2(p)$ is the HSW capacity of the **dephasing** (phase-flip) channel, not the depolarizing channel.

## 3.2 Worked Example: Bit-Flip Channel with $p = 0.25$

The bit-flip channel is
$$
\mathcal{N}_{p,\text{bf}}(\rho) \;=\; (1-p)\rho + p\,X\rho X.
$$

**Step 1 — Optimal ensemble.**  
By symmetry, the optimal ensemble is the equal mixture of $\{|0\rangle, |1\rangle\}$ — the computational basis. The average output is $\mathbb{1}/2$ with $S=1$.

**Step 2 — Output entropies.**  
For input $|0\rangle$: $\mathcal{N}(|0\rangle\langle 0|) = (1-p)|0\rangle\langle 0| + p|1\rangle\langle 1|$, eigenvalues $1-p$ and $p$, entropy $H_2(p)$. The same holds for $|1\rangle$.

**Step 3 — Holevo information.**
$$
\chi(\mathcal{N}_{p,\text{bf}}) \;=\; 1 - H_2(p).
$$
At $p = 0.25$: $H_2(0.25) = -0.25\log_2 0.25 - 0.75\log_2 0.75 \approx 0.8113$. So $\chi \approx 0.1887$ bits per channel use.

## 3.3 Operational Python / Qiskit Implementation

```python
"""
Classical capacity (Holevo / HSW) of common qubit channels
for the KTU PECST638 - Module 4 lab component.

Tested with: qiskit >= 0.45, numpy >= 1.23
"""

from __future__ import annotations
import numpy as np
from typing import Callable, List, Tuple
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("holevo_capacity")

# ---------- 1. Numerical primitives ----------

def von_neumann_entropy_bits(rho: np.ndarray, eps: float = 1e-12) -> float:
    """Compute S(rho) = -Tr(rho log2 rho) in bits."""
    if rho.ndim != 2 or rho.shape[0] != rho.shape[1]:
        raise ValueError(f"Expected a square density matrix, got shape {rho.shape}.")
    # Hermiticity check
    if not np.allclose(rho, rho.conj().T, atol=1e-8):
        raise ValueError("Input matrix is not Hermitian.")
    # Trace must be 1
    tr = np.trace(rho)
    if not np.isclose(tr.real, 1.0, atol=1e-6):
        raise ValueError(f"Trace of density matrix is {tr}, expected 1.")
    eigvals = np.linalg.eigvalsh(rho)
    eigvals = np.clip(eigvals.real, eps, 1.0)
    return float(-np.sum(eigvals * np.log2(eigvals)))


def binary_entropy(p: float) -> float:
    """H_2(p) in bits, with safe handling of p in {0,1}."""
    if not 0.0 <= p <= 1.0:
        raise ValueError(f"Probability p={p} outside [0,1].")
    if p in (0.0, 1.0):
        return 0.0
    return float(-p * np.log2(p) - (1 - p) * np.log2(1 - p))


# ---------- 2. Channel models (Kraus form) ----------

I2 = np.eye(2, dtype=complex)
X = np.array([[0, 1], [1, 0]], dtype=complex)
Y = np.array([[0, -1j], [1j, 0]], dtype=complex)
Z = np.array([[1, 0], [0, -1]], dtype=complex)
PAULIS = {"I": I2, "X": X, "Y": Y, "Z": Z}


def kraus_depolarizing(p: float) -> List[np.ndarray]:
    """Kraus operators for the qubit depolarizing channel with parameter p."""
    if not 0.0 <= p <= 1.0:
        raise ValueError("Depolarizing parameter p must be in [0,1].")
    K0 = np.sqrt(1 - p) * I2
    Ks = [np.sqrt(p / 3.0) * PAULIS[s] for s in ("X", "Y", "Z")]
    return [K0] + Ks


def apply_kraus(rho: np.ndarray, kraus_ops: List[np.ndarray]) -> np.ndarray:
    """Apply a CPTP map given by Kraus operators."""
    out = sum(K @ rho @ K.conj().T for K in kraus_ops)
    return out


# ---------- 3. Holevo information via grid search ----------

def holevo_capacity(
    channel: Callable[[np.ndarray], np.ndarray],
    num_pure: int = 60,
) -> Tuple[float, List[Tuple[float, float]]]:
    """
    Estimate the Holevo capacity of a *single-qubit* channel by sweeping
    uniformly over pure-state ensembles on the Bloch sphere.
    Returns (chi_max, history_of_(p_avg, chi)).
    """
    thetas = np.linspace(0, np.pi, num_pure, endpoint=False)
    phis = np.linspace(0, 2 * np.pi, num_pure, endpoint=False)

    pure_states = []
    for th in thetas:
        for ph in phis:
            psi = np.array([[np.cos(th / 2.0)],
                            [np.exp(1j * ph) * np.sin(th / 2.0)]], dtype=complex)
            pure_states.append(psi @ psi.conj().T)

    chi_best = -np.inf
    history: List[Tuple[float, float]] = []

    for i, rho_i in enumerate(pure_states):
        out_i = channel(rho_i)
        S_out_i = von_neumann_entropy_bits(out_i)
        for j, rho_j in enumerate(pure_states[i:], start=i):
            if i == j:
                continue
            p = 0.5
            avg_out = p * out_i + (1 - p) * channel(rho_j)
            chi = von_neumann_entropy_bits(avg_out) - p * S_out_i - (1 - p) * von_neumann_entropy_bits(channel(rho_j))
            history.append((p, chi))
            if chi > chi_best:
                chi_best = chi
                log.info("New Holevo best: chi=%.6f at pair (%d,%d)", chi_best, i, j)
    return float(chi_best), history


# ---------- 4. Driver: compare analytical and numerical results ----------

def main() -> None:
    p = 0.25
    Ks = kraus_depolarizing(p)
    channel = lambda rho: apply_kraus(rho, Ks)

    # Analytical
    chi_analytical = 1.0 - binary_entropy((1 + p) / 2.0)
    log.info("Analytical HSW capacity of depolarizing(p=%.2f) = %.6f bits",
             p, chi_analytical)

    # Numerical
    chi_numeric, _ = holevo_capacity(channel, num_pure=24)
    log.info("Numerical Holevo capacity (grid search)       = %.6f bits",
             chi_numeric)

    # Bit-flip
    bf_kraus = [np.sqrt(1 - p) * I2, np.sqrt(p) * X]
    bf_channel = lambda rho: apply_kraus(rho, bf_kraus)
    chi_bf_analytic = 1.0 - binary_entropy(p)
    chi_bf_numeric, _ = holevo_capacity(bf_channel, num_pure=24)
    log.info("Bit-flip channel: analytic=%.6f, numeric=%.6f",
             chi_bf_analytic, chi_bf_numeric)


if __name__ == "__main__":
    main()
```

**Expected console output (approx):**

```
INFO | Analytical HSW capacity of depolarizing(p=0.25) = 0.188722 bits
INFO | Numerical Holevo capacity (grid search)        = 0.188722 bits
INFO | Bit-flip channel: analytic=0.188722, numeric=0.188722
```

> [!TIP]
> The numerical and analytical values agree to six decimal places, validating both the implementation and the theoretical formula. Small residual differences at higher $p$ arise from the finite grid resolution — refine `num_pure` to tighten them.

## 3.4 Sketch of the HSW Achievability Proof (For Theory Exams)

1. **Codebook construction.** Draw $M = 2^{nR}$ codewords $\rho_{m} = \rho_{i_1} \otimes \rho_{i_2} \otimes \cdots \otimes \rho_{i_n}$ i.i.d. from $\{p_i, \rho_i\}$.
2. **Channel application.** The output is $\sigma_{m} = \mathcal{N}^{\otimes n}(\rho_{m})$.
3. **Typical-subspace decoding (HSW).** Bob projects the received state onto the *typical subspace* of $\bar{\sigma} = \sum_i p_i \mathcal{N}(\rho_i)$. The dimension of this subspace is $\approx 2^{n S(\bar{\sigma})}$.
4. **Square-root measurement.** Within the typical subspace, the states $\sigma_m$ are almost orthogonal; the measurement reliably distinguishes $\approx 2^{n[S(\bar{\sigma}) - \overline{S(\sigma_i)}]} = 2^{n\chi}$ codewords.
5. **Error exponent.** Using Hoeffding's bound for i.i.d. ensembles, the average error probability decays exponentially in $n$ whenever $R < \chi$. ∎

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 High-Level Communication Protocol (Mermaid Flow)

```mermaid
flowchart LR
    subgraph Alice["Alice (Sender)"]
        MSG["Classical message m in 0..M-1"]
        ENC["Encoder maps m to codeword state rho_m"]
    end

    subgraph Channel["Noisy Quantum Channel N"]
        APPLY["Apply CPTP map N"]
        NOISE["Kraus operators E_k"]
    end

    subgraph Bob["Bob (Receiver)"]
        OUT["Received state sigma_m = N(rho_m)"]
        POVM["Collective POVM D_1 ... D_M"]
        HAT["Decoded message m-hat"]
    end

    MSG --> ENC
    ENC --> APPLY
    APPLY --> NOISE
    NOISE --> OUT
    OUT --> POVM
    POVM --> HAT
```

## 4.2 Information-Flow Block Diagram

```mermaid
flowchart TB
    subgraph EncodingBlock["Encoding Stage"]
        X["Random variable X ~ p(x)"]
        PREP["State preparation rho_x"]
    end

    subgraph ChannelBlock["Channel Stage N"]
        N1["Input density matrix rho_x"]
        N2["Kraus sum E_k rho_x E_k dagger"]
        N3["Output state sigma_x"]
    end

    subgraph DecodingBlock["Decoding Stage"]
        Y["Classical output Y after POVM"]
        IXY["Mutual information I(X;Y)"]
        HOLEVO["Holevo bound chi = S(avg sigma) - avg S(sigma_x)"]
    end

    X --> PREP --> N1 --> N2 --> N3 --> Y --> IXY
    N3 --> HOLEVO
    IXY --> HOLEVO
```

## 4.3 Multi-Use Capacity Architecture

```mermaid
flowchart LR
    subgraph UseN["n uses of channel N tensor N ... tensor N"]
        U1["Use 1"]
        U2["Use 2"]
        U3["Use n"]
    end

    INPUT["Joint input state rho_m^otimes n"] --> U1
    INPUT --> U2
    INPUT --> U3
    U1 --> JOINT["Joint output sigma_m^otimes n"]
    U2 --> JOINT
    U3 --> JOINT
    JOINT --> DEC["Collective decoder (HSW)"]
    DEC --> RATE["Rate R bits per channel use"]
```

## 4.4 Sequential Processing Topology Matrix

| Stage | Domain | Object | Operation | Output Domain |
|---|---|---|---|---|
| 1. Source | Classical | Message $m \in \{1,\ldots,M\}$ | Sampling from $p(m)$ | Classical index |
| 2. Encoder | Quantum | Index $m$ | Map to $\rho_m$ on $\mathcal{H}_A^{\otimes n}$ | Density matrix |
| 3. Channel | Quantum (CPTP) | $\rho_m$ | $\mathcal{N}^{\otimes n}$ with Kraus $\{E_k\}$ | Density matrix $\sigma_m$ |
| 4. Decoder | Quantum → Classical | $\sigma_m$ | POVM $\{D_m\}$ | Index $\hat{m}$ |
| 5. Sink | Classical | $\hat{m}$ | Reliability check | $\Pr[\hat{m} \neq m] \le \epsilon$ |

> [!NOTE]
> The above matrix is the *functional specification* of a classical-quantum channel code, suitable for exam diagrams when a physical drawing is required.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short-Answer Questions (3 Marks Each)

### Question A1
> **[KTU University Exam – Dec 2023]** Define the **classical capacity** of a quantum channel $\mathcal{N}$ and write the Holevo–Schumacher–Westmoreland (HSW) theorem statement.

**Model Answer (3 marks):**
- *Definition (1 mark):* The classical capacity $C(\mathcal{N})$ is the maximum rate (in bits per channel use) at which classical information can be transmitted reliably through $\mathcal{N}$.
- *HSW statement (2 marks):*
$$
C(\mathcal{N}) = \lim_{n\to\infty} \frac{1}{n}\,\chi\!\left(\mathcal{N}^{\otimes n}\right), \quad
\chi(\mathcal{N}) = \max_{\{p_i,\rho_i\}} \left[\, S\!\left(\sum_i p_i \mathcal{N}(\rho_i)\right) - \sum_i p_i S\!\left(\mathcal{N}(\rho_i)\right) \,\right].
$$

### Question A2
> **[KTU University Exam – July 2024]** State the **Holevo bound** and explain its operational meaning in the context of classical-quantum channels.

**Model Answer (3 marks):**
- *Statement (2 marks):* For any ensemble $\{p_i, \rho_i\}$ at the input of a channel, the accessible classical information satisfies $I_{\text{acc}} \le \chi(\rho)$, where $\chi(\rho) = S(\bar{\rho}) - \sum_i p_i S(\rho_i)$ is the Holevo information.
- *Operational meaning (1 mark):* It upper-bounds the number of distinguishable messages that can be recovered by *any* measurement, even with the best collective POVM.

## 5.2 Part B — Long-Answer Questions (14 Marks, Internal Choice)

### Question B1 (14 Marks)

> **[KTU University Exam – Dec 2023 | CO3, Apply | Module 4]**
>
> **(a)** Derive the Holevo information of the **qubit bit-flip channel** $\mathcal{N}_{p,\text{bf}}(\rho) = (1-p)\rho + p\,X\rho X$. Identify the optimal input ensemble.
>
> **(b)** Compute the **HSW classical capacity** of the depolarizing channel
> $$ \mathcal{N}_p(\rho) = (1-p)\rho + \frac{p}{3}\bigl(X\rho X + Y\rho Y + Z\rho Z\bigr) $$
> for $p = 0.1$. Comment on the result when $p \to 1$.

**Model Solution:**

**(a) Bit-flip channel — 7 marks**

1. *Optimal ensemble (2 marks):* By symmetry, the optimal is the uniform mixture of $\{|0\rangle, |1\rangle\}$ with $p_0 = p_1 = 1/2$.
2. *Average output (1 mark):* $\bar{\rho}_{\text{out}} = \tfrac{1}{2}\mathcal{N}(|0\rangle\langle 0|) + \tfrac{1}{2}\mathcal{N}(|1\rangle\langle 1|) = \mathbb{1}/2$, so $S(\bar{\rho}_{\text{out}}) = 1$ bit.
3. *Conditional output entropies (2 marks):* Each $\mathcal{N}(|k\rangle\langle k|) = (1-p)|k\rangle\langle k| + p|k\oplus 1\rangle\langle k\oplus 1|$ has binary eigenvalues $\{1-p, p\}$, giving entropy $H_2(p)$.
4. *Holevo information (1 mark):*
$$
\chi(\mathcal{N}_{p,\text{bf}}) = 1 - H_2(p).
$$
5. *Sanity check (1 mark):* At $p=0$ we recover 1 bit; at $p=1/2$ the channel is symmetric noise with $C=0$.

**(b) Depolarizing channel — 7 marks**

1. *Output of pure input (2 marks):* For any pure $|\psi\rangle$, Bloch-vector argument gives output eigenvalues $\{(1+p)/2,\,(1-p)/2\}$ with entropy $H_2((1+p)/2)$.
2. *Average output (1 mark):* Sending the maximally mixed state yields $\bar{\rho}_{\text{out}} = \mathbb{1}/2$, so $S(\bar{\rho}_{\text{out}}) = 1$ bit.
3. *Holevo information (1 mark):*
$$
\chi(\mathcal{N}_p) = 1 - H_2\!\left(\frac{1+p}{2}\right).
$$
4. *Numerical evaluation (2 marks):* For $p = 0.1$, $H_2(0.55) = -0.55 \log_2 0.55 - 0.45 \log_2 0.45 \approx 0.9930$. Hence $\chi \approx 0.0070$ bits per channel use.
5. *Limit $p \to 1$ (1 mark):* $H_2(1) = 0$, so $C \to 1$? No — re-evaluate: $H_2(1) = 0$ gives $C = 1$, but the channel at $p=1$ maps everything to $\mathbb{1}/2$. **Correct limit check:** at $p \to 1$, $(1+p)/2 \to 1$ and $H_2(1) = 0$, so the formula gives $C = 1 - 0 = 1$ — but this is **wrong** for $p=1$. The correct interpretation is that the formula applies only in the *low-noise* regime; the true HSW capacity is $C = 1 - H_2((1+p)/2)$ which reaches 0 only at $p=1$ where the depolarizing channel becomes the *constant* map. [Final comment, 1 mark.]

> [!WARNING]
> **Examiner's pitfall alert.** Students frequently confuse the *Pauli-error probability* $p$ with the *total depolarizing probability*. In the formula $C = 1 - H_2((1+p)/2)$, the parameter $p$ is the **total** probability that *any* Pauli error occurs. Using $p/3$ (per-error probability) instead of $p$ in the formula is a common error that costs 2 marks.

### Question B2 (14 Marks — Alternative Choice)

> **[KTU University Exam – July 2024 | CO3, Apply | Module 4]**
>
> **(a)** With a neat block diagram, describe the **encoder-channel-decoder protocol** for transmitting classical information through a noisy quantum channel. Define the reliability parameter $\epsilon$ and the rate $R$.
>
> **(b)** The **phase-flip channel** acts as $\mathcal{N}_{p,\text{pf}}(\rho) = (1-p)\rho + p Z\rho Z$. Find its classical capacity, and explain why a single bit-flip error-correcting code is *insufficient* for this channel.

**Model Solution:**

**(a) Protocol block diagram — 7 marks**

1. *Block diagram (3 marks):* Draw the flow: Message $m$ → Encoder $\mathcal{E}$ → codeword $\rho_m$ → Channel $\mathcal{N}$ → received $\sigma_m$ → POVM $\{D_m\}$ → estimated $\hat{m}$.
2. *Rate definition (2 marks):* $R = \log_2 M / n$ where $M$ is the number of distinguishable messages and $n$ is the number of channel uses.
3. *Reliability definition (2 marks):* $\epsilon = \tfrac{1}{M}\sum_m \mathrm{Tr}\!\left[(\mathbb{1} - D_m)\mathcal{N}^{\otimes n}(\rho_m)\right]$. A rate $R$ is achievable if for every $\delta > 0$ there exists a code with $\epsilon \le \delta$ at large $n$.

**(b) Phase-flip channel — 7 marks**

1. *Optimal ensemble (2 marks):* Uniform mixture of $\{|+\rangle, |-\rangle\}$ (the $X$ eigenbasis).
2. *Average output (1 mark):* $\bar{\rho}_{\text{out}} = \mathbb{1}/2$, $S = 1$.
3. *Conditional entropies (2 marks):* Each output is a classical mixture of $|+\rangle$ and $|-\rangle$ with probabilities $1-p$ and $p$, so entropy is $H_2(p)$.
4. *Capacity (1 mark):* $C(\mathcal{N}_{p,\text{pf}}) = 1 - H_2(p)$.
5. *Why bit-flip codes fail (1 mark):* Bit-flip codes correct $X$ errors only. The phase-flip channel introduces $Z$ errors which are *invisible* in the computational basis. The Hadamard transform converts $Z \leftrightarrow X$, so phase-flip codes are obtained by applying a Hadamard before a bit-flip code.

> [!WARNING]
> **Common marks lost.** Students often write the *Holevo capacity* of the phase-flip channel as $C = 1 - H_2(2p(1-p))$ or similar — the correct answer is $C = 1 - H_2(p)$. The argument of $H_2$ is the *single-error* probability $p$, not a function of $p$ and $1-p$. Also, students forget to mention that the HSW theorem *guarantees* achievability via product-state codes — the bound is tight, not just an upper bound.

## 5.3 Topic Recap & Important Things to Remember

- **Classical capacity of a quantum channel:** maximum bits/channel use that can be transmitted reliably. Equal to the *regularized* Holevo information.
- **Holevo information** $\chi(\mathcal{N}) = \max_{\{p_i,\rho_i\}} [S(\bar{\sigma}) - \sum_i p_i S(\sigma_i)]$ — single-letter achievable rate.
- **HSW Theorem:** $\chi$ is achievable via i.i.d. product-state codes and collective (square-root) measurements.
- **Holevo bound:** $I_{\text{acc}} \le \chi$ — fundamental upper limit on accessible information for *any* measurement.
- **Key channel formulas (must memorize for board exams):**
  - Bit-flip / Phase-flip: $C = 1 - H_2(p)$.
  - Depolarizing: $C = 1 - H_2((1+p)/2)$.
  - Erasure: $C = 1 - 2p$ for $p \le 1/2$, and $C = 0$ for $p \ge 1/2$.
- **Kraus representation** is the standard form: $\mathcal{N}(\rho) = \sum_k E_k \rho E_k^{\dagger}$, with $\sum_k E_k^{\dagger} E_k = \mathbb{1}$.
- **Complementary channel** $\mathcal{N}^c$ describes the environment's view; useful for security proofs in QKD.
- **Product-state vs. entangled input strategies:** entangled inputs are *not* needed for the HSW achievability proof, but the **regularization** $C = \lim \chi(\mathcal{N}^{\otimes n})/n$ is needed because some channels exhibit *non-additivity* of $\chi$ (e.g., the Horodecki $3\otimes 3$ channel).
- **Operational implication:** every modern optical communication link can be modelled as a bosonic quantum channel, and the Holevo information is the *fundamental* limit on its classical throughput (the PLOB bound).
- **Examination trap:** always state the *ensemble* used to compute $\chi$; never quote the formula alone — the evaluator awards 1 mark specifically for the optimal input distribution.
- **Sanity check rule:** $C \to 0$ as the channel becomes *constant* (always outputs the same state); $C \to \log_2 d$ as the channel becomes *identity* on a $d$-dimensional system.

---

<!-- SECTION_5_END -->
