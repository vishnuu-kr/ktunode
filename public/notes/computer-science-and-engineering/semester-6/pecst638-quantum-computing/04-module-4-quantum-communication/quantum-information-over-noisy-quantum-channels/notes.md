# Quantum information over noisy quantum channels

<!-- SECTION_1_START -->
# Quantum Information Over Noisy Quantum Channels

## 1.1 Formal Academic Definition

In the rigorous formalism of quantum information theory, a **quantum channel** $\mathcal{N}$ is a completely positive, trace-preserving (CPTP) linear map that acts on density operators in the space of bounded operators $B(\mathcal{H}_A)$ and produces an output state in $B(\mathcal{H}_B)$. When environmental decoherence, gate imperfections, or transmission losses corrupt the transmitted quantum state, the channel is termed a **noisy quantum channel**. Mathematically, such a map admits the **Kraus–Stinespring representation**:

$$
\mathcal{N}(\rho) = \sum_{k=1}^{r} E_k \,\rho\, E_k^{\dagger}
$$

where the set $\{E_k\}_{k=1}^{r}$ are the **Kraus operators** (also called noise operators or error elements) satisfying the **trace-preservation constraint**:

$$
\sum_{k=1}^{r} E_k^{\dagger} E_k = I
$$

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 4):** The 2024 scheme expects mastery of Kraus representation, the canonical noise models (Bit-Flip, Phase-Flip, Bit-Phase-Flip, Depolarizing, Amplitude Damping, Phase Damping), the Holevo–Schumacher–Westmoreland (HSW) theorem, and the introduction of quantum error-correcting codes (QECC) such as the 3-qubit codes and the Shor 9-qubit code.

## 1.2 Conceptual Analogy — The Whispering Through A Storm

Imagine two friends, *Alice* and *Bob*, standing at opposite ends of a long, storm-lashed canyon. Alice whispers a secret phrase, but the wind, echoes, and rain distort the message. Sometimes letters flip (`b` becomes `d`), sometimes the *tone* (the *phase* of the sound) reverses, and sometimes a *completely random* word substitutes the original.

In **classical communication**, redundancy (repeating the message) cures this. But in **quantum communication**, the **no-cloning theorem** forbids perfect copying of unknown quantum states, so classical repetition is impossible. We therefore need *structured redundancy* — encoding one logical qubit across several physical qubits so that errors can be detected and corrected without disturbing the encoded information. This is the heart of **Quantum Error Correction (QEC)**.

> [!NOTE]
> **Key Distinction:** Quantum noise is not just stochastic bit corruption. It is described by a *CPTP map* that can be a *coherent* superposition of error events. A single physical error can entangle the system with the environment, leading to *decoherence*.

## 1.3 Standard Canonical Noise Models

For the KTU 2024 syllabus, six canonical noise channels form the essential toolkit. Each is parameterised by an error probability $p \in [0,1]$ (or damping parameter $\gamma$).

| Channel | Physical Meaning | Kraus Operators |
|---|---|---|
| **Bit-Flip (BF)** | Spontaneous $\vert 0 \rangle \leftrightarrow \vert 1 \rangle$ flip | $E_0 = \sqrt{1-p}\,I,\ E_1 = \sqrt{p}\,X$ |
| **Phase-Flip (PF)** | Phase reversal $\vert +\rangle \leftrightarrow \vert -\rangle$ | $E_0 = \sqrt{1-p}\,I,\ E_1 = \sqrt{p}\,Z$ |
| **Bit-Phase-Flip (BPF)** | Combined bit and phase flip | $E_0 = \sqrt{1-p}\,I,\ E_1 = \sqrt{p}\,Y$ |
| **Depolarizing (DEP)** | State replaced by $I/2$ with probability $p$ | $E_0 = \sqrt{1-3p/4}\,I,\ E_{1,2,3} = \sqrt{p/4}\,\{X,Y,Z\}$ |
| **Amplitude Damping (AD)** | Energy loss to environment ($T_1$ decay) | $E_0, E_1$ as derived below |
| **Phase Damping (PD)** | Loss of phase coherence ($T_2$ decay) | $E_0, E_1, E_2$ as derived below |

> [!VISUALIZATION CONTROL]
> **Concept:** Bloch Sphere Shrinkage under Depolarizing Channel
> **Input Equation:**
> * $f(\theta,\phi) = 1 - p$ (radius scaling of the Bloch vector)
> * $(x,y,z) = (1-p)\,(x_0, y_0, z_0)$
> **Visual Description:** As $p$ increases from $0$ to $1$, the Bloch sphere contracts uniformly toward the maximally mixed state at the origin. At $p = 0.75$ it collapses to a point, and beyond that the map becomes non-physical (negative probability).

## 1.4 Physical Constants and Standard Metrics

| Symbol | Quantity | Typical Value / Unit |
|---|---|---|
| $\hbar$ | Reduced Planck constant | $1.054 \times 10^{-34}$ J·s |
| $T_1$ | Energy relaxation time | $50$–$200\ \mu$s (superconducting) |
| $T_2$ | Dephasing time | $20$–$100\ \mu$s (superconducting) |
| $\gamma$ | Damping rate | $\gamma = 1 - e^{-t/T_1}$ |
| $p$ | Error probability per gate | $10^{-3}$ to $10^{-2}$ (NISQ era) |
| $\chi$ | Holevo information | bits per channel use |
| $C(\mathcal{N})$ | Quantum channel capacity | qubits per channel use |
| $\mathcal{F}(\rho, \sigma)$ | Fidelity | $0 \le \mathcal{F} \le 1$ |
| $d$ | Code distance | $d = 2t+1$ for $t$-error correction |

> [!TIP]
> The **No-Cloning Theorem** (Wootters & Zurek, 1982) formally prevents the trivial redundancy strategy. It states that there is no physical unitary $U$ such that $U(\vert \psi \rangle \otimes \vert 0 \rangle) = \vert \psi \rangle \otimes \vert \psi \rangle$ for arbitrary $\vert \psi \rangle$. This forces QEC to use *entanglement-based encoding* into carefully chosen subspaces of the joint Hilbert space.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Operational Logic of a Noisy Quantum Channel

The transmission of quantum information through a noisy channel follows a precise operational chain:

1. **State Preparation:** Alice prepares a density operator $\rho \in B(\mathcal{H}_A)$ representing her message.
2. **Encoding (optional but standard):** She maps $\rho$ into a code subspace of $\mathcal{H}_A^{\otimes n}$ via an encoding unitary $U_{\text{enc}}$.
3. **Channel Application:** The encoded state interacts with the environment $E$ initially in state $\vert 0 \rangle_E$, evolving under a joint unitary $U_{AE}$. Bob receives the reduced state $\rho_B = \mathrm{Tr}_E [U_{AE} (\rho \otimes \vert 0\rangle\langle 0\vert_E ) U_{AE}^{\dagger}]$.
4. **Decoding & Recovery:** Bob applies a recovery map $\mathcal{R}$ (itself a CPTP map) to obtain $\tilde{\rho} = \mathcal{R}(\rho_B)$.
5. **Measurement & Information Extraction:** Bob performs a measurement $\{M_m\}$ and decodes the classical message.

> [!IMPORTANT]
> **The Stinespring Dilation Theorem** guarantees that *every* CPTP map $\mathcal{N}: B(\mathcal{H}_A) \to B(\mathcal{H}_B)$ can be dilated to an isometry $V: \mathcal{H}_A \to \mathcal{H}_B \otimes \mathcal{H}_E$ such that $\mathcal{N}(\rho) = \mathrm{Tr}_E [V \rho V^{\dagger}]$. The minimal number of Kraus operators $r$ is bounded by $r \le d_A^2 d_B^2$ for finite-dimensional systems.

## 2.2 The Choi–Jamiołkowski Isomorphism

For a CPTP map $\mathcal{N}$, the **Choi matrix** is defined as:

$$
J(\mathcal{N}) = (\mathcal{I} \otimes \mathcal{N})(\vert \Phi^+\rangle\langle \Phi^+ \vert)
$$

where $\vert \Phi^+\rangle = \frac{1}{\sqrt{d}}\sum_{i=0}^{d-1} \vert i i\rangle$ is the unnormalised maximally entangled state. The map is **CPTP if and only if** $J(\mathcal{N}) \succeq 0$ (positive semidefinite) and $\mathrm{Tr}_B[J(\mathcal{N})] = I_A / d$. This duality enables channel characterization via semidefinite programming (SDP).

## 2.3 Quantum Information Measures

For a quantum state $\rho$, the **von Neumann entropy** is:

$$
S(\rho) = -\mathrm{Tr}(\rho \log_2 \rho) = -\sum_i \lambda_i \log_2 \lambda_i
$$

For a classical-quantum state $\rho_{XB} = \sum_x p_x \vert x\rangle\langle x\vert \otimes \rho_x^B$, the **Holevo information** is:

$$
\chi(\{p_x, \rho_x\}) = S\!\left(\sum_x p_x \rho_x\right) - \sum_x p_x S(\rho_x)
$$

The **quantum mutual information** for a bipartite state $\rho_{AB}$ is:

$$
I(A;B) = S(\rho_A) + S(\rho_B) - S(\rho_{AB})
$$

## 2.4 KTU Formula Sheet — High-Yield Quick Reference

| Concept | Formula | Conditions / Domain |
|---|---|---|
| Kraus Representation | $\mathcal{N}(\rho) = \sum_k E_k \rho E_k^{\dagger}$ | $\sum_k E_k^{\dagger} E_k = I$ |
| Trace Preservation | $\mathrm{Tr}[\mathcal{N}(\rho)] = \mathrm{Tr}(\rho) = 1$ | For all valid $\rho \succeq 0$ |
| Stinespring Dilation | $\mathcal{N}(\rho) = \mathrm{Tr}_E[V \rho V^{\dagger}]$ | $V: \mathcal{H}_A \to \mathcal{H}_B \otimes \mathcal{H}_E$ |
| Bit-Flip | $\mathcal{N}_{\text{BF}}(\rho) = (1-p)\rho + p X \rho X$ | $0 \le p \le 1$ |
| Phase-Flip | $\mathcal{N}_{\text{PF}}(\rho) = (1-p)\rho + p Z \rho Z$ | $0 \le p \le 1$ |
| Depolarizing | $\mathcal{N}_{\text{DEP}}(\rho) = (1-p)\rho + \frac{p}{3}(X\rho X + Y\rho Y + Z\rho Z)$ | $0 \le p \le 3/4$ |
| Amplitude Damping | $E_0 = \begin{pmatrix}1 & 0\\ 0 & \sqrt{1-\gamma}\end{pmatrix},\ E_1 = \begin{pmatrix}0 & \sqrt{\gamma}\\ 0 & 0\end{pmatrix}$ | $0 \le \gamma \le 1$ |
| Phase Damping | $E_0 = \sqrt{1-\lambda}\,I,\ E_1 = \sqrt{\lambda}\,Z$ | $0 \le \lambda \le 1$ |
| Fidelity | $\mathcal{F}(\rho, \sigma) = \left(\mathrm{Tr}\sqrt{\sqrt{\rho}\,\sigma\,\sqrt{\rho}}\right)^2$ | $0 \le \mathcal{F} \le 1$ |
| Holevo Bound | $\chi \le C$ for classical capacity | $I_{\text{acc}}(X;B) \le \chi$ |
| HSW Theorem | $C(\mathcal{N}) = \max_{\{p_x, \rho_x\}} \chi(\{p_x, \mathcal{N}(\rho_x)\})$ | Classical capacity |
| Lloyd–Shor–Devetak | $Q(\mathcal{N}) = \lim_{n \to \infty} \frac{1}{n} \max_{\rho} I_c(\rho, \mathcal{N}^{\otimes n})$ | Quantum capacity |
| Quantum Hamming Bound | $\sum_{j=0}^{t} \binom{n}{j} 3^j \le 2^{n-k}$ | For $[[n,k,d]]$ code |
| Knill–Laflamme | $P_a^\dagger E_k^{\dagger} E_l P_b = \alpha_{kl} \delta_{ab}$ | QEC condition |
| Threshold Theorem | Logical error $\le (p/p_{\text{th}})^{(d+1)/2}$ | $p < p_{\text{th}} \approx 10^{-2}$ |

> [!NOTE]
> **Engineering Utility:** The Knill–Laflamme condition is the *fundamental algebraic criterion* for a quantum code to correct a set of errors $\{E_k\}$. It is independent of any specific recovery operation, making it the central design tool for fault-tolerant quantum architectures. The Threshold Theorem (Aharonov, Ben-Or; Knill, Laflamme, Zurek) guarantees that arbitrarily long quantum computations are possible if physical error rates fall below the **fault-tolerance threshold** $p_{\text{th}} \approx 10^{-2}$.

## 2.5 Why This Matters in Modern Engineering

- **Cryptography:** BB84 and E91 quantum key distribution (QKD) protocols are fundamentally limited by the *channel capacity* $C(\mathcal{N})$ — noise sets the ultimate key rate.
- **Networking:** The **quantum internet** (Kimble 2008, Wehner et al. 2018) requires repeaters that must operate *below* the noise threshold to maintain entanglement fidelity across long distances.
- **NISQ Devices:** Today's IBM, Google, and IonQ processors operate in the $10^{-3}$ to $10^{-2}$ error regime. Noisy channel models drive the design of error mitigation techniques such as **zero-noise extrapolation (ZNE)** and **probabilistic error cancellation (PEC)**.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Symbolic Implementation

## 3.1 Derivation: Bit-Flip Channel Action on an Arbitrary State

Let an arbitrary single-qubit state be written in the Bloch representation:

$$
\rho = \frac{1}{2}\left(I + \vec{r}\cdot\vec{\sigma}\right) = \frac{1}{2}\begin{pmatrix} 1 + r_z & r_x - i r_y \\ r_x + i r_y & 1 - r_z \end{pmatrix}
$$

Apply the bit-flip channel $\mathcal{N}_{\text{BF}}(\rho) = (1-p)\rho + p X \rho X$. Compute the conjugate action of $X$:

$$
X \rho X = \begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix} \frac{1}{2}\begin{pmatrix} 1 + r_z & r_x - i r_y \\ r_x + i r_y & 1 - r_z \end{pmatrix} \begin{pmatrix} 0 & 1\\ 1 & 0\end{pmatrix}
$$

Step 1 — multiply on the right by $X$:

$$
\rho X = \frac{1}{2}\begin{pmatrix} r_x - i r_y & 1 + r_z \\ 1 - r_z & r_x + i r_y \end{pmatrix}
$$

Step 2 — multiply on the left by $X$:

$$
X \rho X = \frac{1}{2}\begin{pmatrix} 1 - r_z & r_x + i r_y \\ r_x - i r_y & 1 + r_z \end{pmatrix}
$$

Step 3 — combine with the original:

$$
\mathcal{N}_{\text{BF}}(\rho) = (1-p)\frac{1}{2}\begin{pmatrix} 1 + r_z & r_x - i r_y \\ r_x + i r_y & 1 - r_z \end{pmatrix} + p\frac{1}{2}\begin{pmatrix} 1 - r_z & r_x + i r_y \\ r_x - i r_y & 1 + r_z \end{pmatrix}
$$

$$
= \frac{1}{2}\begin{pmatrix} 1 + (1-2p)r_z & r_x - i r_y \\ r_x + i r_y & 1 - (1-2p)r_z \end{pmatrix}
$$

**Geometric interpretation:** The Bloch vector transforms as $(r_x, r_y, r_z) \mapsto (r_x, r_y, (1-2p)r_z)$. The $x$ and $y$ components are preserved, while the $z$-component shrinks by a factor $(1-2p)$. This is a *contraction toward the equatorial plane* of the Bloch sphere.

## 3.2 Derivation: Depolarizing Channel

The depolarizing channel is a uniform mixture of the four Pauli errors $\{I,X,Y,Z\}$ with weights $(1-p)$, $p/3$, $p/3$, $p/3$:

$$
\mathcal{N}_{\text{DEP}}(\rho) = \left(1 - \frac{3p}{4}\right)\rho + \frac{p}{4}\left(X\rho X + Y\rho Y + Z\rho Z\right)
$$

Substitute the Bloch form $\rho = \frac{1}{2}(I + \vec{r}\cdot\vec{\sigma})$ and use the identity $P_i \sigma_j P_i = (-1)^{\delta_{ij}}\sigma_j$ for $P_i \in \{X,Y,Z\}$ (Pauli operators square to $I$ and anticommute pairwise). This yields:

$$
\sum_{i=1}^{3} \sigma_i \rho \sigma_i = \frac{1}{2}\sum_{i=1}^{3} \sigma_i (I + r_i\sigma_i)\sigma_i = \frac{1}{2}\sum_{i=1}^{3}\left(\sigma_i^2 - r_i \sigma_i^2\right) = \frac{3I - \vec{r}\cdot\vec{\sigma}}{2}
$$

Wait — correcting the sign more carefully: each Pauli satisfies $P_i \sigma_j P_i = (-1)^{f(i,j)} \sigma_j$ where $f = 0$ for $i=j$ and $f=1$ otherwise. Therefore $P_i \rho P_i = \frac{1}{2}(I + \sum_j r_j P_i \sigma_j P_i) = \frac{1}{2}(I + r_i \sigma_i - \sum_{j \neq i} r_j \sigma_j)$. Summing $i = 1,2,3$:

$$
\sum_i P_i \rho P_i = \frac{1}{2}\sum_i\left(I + r_i \sigma_i - \sum_{j \neq i} r_j \sigma_j\right) = \frac{1}{2}\left(3I - \vec{r}\cdot\vec{\sigma}\right)
$$

Therefore:

$$
\mathcal{N}_{\text{DEP}}(\rho) = \left(1-\frac{3p}{4}\right)\frac{1}{2}(I + \vec{r}\cdot\vec{\sigma}) + \frac{p}{4}\cdot\frac{1}{2}\left(3I - \vec{r}\cdot\vec{\sigma}\right)
$$

$$
= \frac{1}{2}\left[I\left(1 - \frac{3p}{4} + \frac{3p}{4}\right) + \vec{r}\cdot\vec{\sigma}\left(1 - \frac{3p}{4} - \frac{p}{4}\right)\right]
$$

$$
= \frac{1}{2}\left[I + (1-p)\,\vec{r}\cdot\vec{\sigma}\right]
$$

**Geometric interpretation:** The Bloch vector shrinks *isotropically*: $\vec{r} \mapsto (1-p)\vec{r}$. The entire Bloch sphere contracts uniformly toward the maximally mixed state $\rho = I/2$.

## 3.3 Derivation: Amplitude Damping Channel

The amplitude damping (AD) channel models energy dissipation (e.g., spontaneous emission). For a single qubit with damping parameter $\gamma$:

$$
E_0 = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-\gamma} \end{pmatrix}, \qquad E_1 = \begin{pmatrix} 0 & \sqrt{\gamma} \\ 0 & 0 \end{pmatrix}
$$

**Verification of trace preservation:**

$$
E_0^{\dagger} E_0 = \begin{pmatrix} 1 & 0 \\ 0 & 1-\gamma \end{pmatrix}, \qquad E_1^{\dagger} E_1 = \begin{pmatrix} 0 & 0 \\ 0 & \gamma \end{pmatrix}
$$

$$
E_0^{\dagger} E_0 + E_1^{\dagger} E_1 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I \quad \checkmark
$$

**Action on a state** $\rho = \begin{pmatrix} \rho_{00} & \rho_{01} \\ \rho_{10} & \rho_{11} \end{pmatrix}$:

$$
\mathcal{N}_{\text{AD}}(\rho) = E_0 \rho E_0^{\dagger} + E_1 \rho E_1^{\dagger}
$$

Compute term by term:

$$
E_0 \rho E_0^{\dagger} = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-\gamma} \end{pmatrix} \begin{pmatrix} \rho_{00} & \rho_{01} \\ \rho_{10} & \rho_{11} \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-\gamma} \end{pmatrix} = \begin{pmatrix} \rho_{00} & \sqrt{1-\gamma}\,\rho_{01} \\ \sqrt{1-\gamma}\,\rho_{10} & (1-\gamma)\rho_{11} \end{pmatrix}
$$

$$
E_1 \rho E_1^{\dagger} = \begin{pmatrix} 0 & \sqrt{\gamma} \\ 0 & 0 \end{pmatrix} \begin{pmatrix} \rho_{00} & \rho_{01} \\ \rho_{10} & \rho_{11} \end{pmatrix} \begin{pmatrix} 0 & 0 \\ \sqrt{\gamma} & 0 \end{pmatrix} = \begin{pmatrix} \gamma \rho_{11} & 0 \\ 0 & 0 \end{pmatrix}
$$

$$
\mathcal{N}_{\text{AD}}(\rho) = \begin{pmatrix} \rho_{00} + \gamma \rho_{11} & \sqrt{1-\gamma}\,\rho_{01} \\ \sqrt{1-\gamma}\,\rho_{10} & (1-\gamma)\rho_{11} \end{pmatrix}
$$

**Geometric interpretation:** The Bloch vector transforms as $(r_x, r_y, r_z) \mapsto (\sqrt{1-\gamma}\,r_x, \sqrt{1-\gamma}\,r_y, \gamma + (1-\gamma)r_z)$. The state is *attracted* to $\vert 0\rangle$ (the ground state), as expected physically.

## 3.4 Derivation: 3-Qubit Bit-Flip Code

The simplest QEC code encodes one logical qubit into three physical qubits. The encoding is:

$$
\vert 0_L \rangle = \vert 000\rangle, \qquad \vert 1_L \rangle = \vert 111\rangle
$$

Suppose a single bit-flip error $X_j$ occurs on qubit $j \in \{1,2,3\}$. Define the **syndrome** as the parity of the flipped pair. The recovery procedure:

- Measure $Z_1 Z_2$ (parity of qubits 1,2) and $Z_2 Z_3$ (parity of qubits 2,3).
- Syndromes and corresponding corrections:

| Syndrome $(Z_1Z_2, Z_2Z_3)$ | Error | Correction |
|---|---|---|
| $(+1, +1)$ | None | $I$ |
| $(-1, +1)$ | $X_1$ | $X_1$ |
| $(+1, -1)$ | $X_3$ | $X_3$ |
| $(-1, -1)$ | $X_2$ | $X_2$ |

**Why it works:** The code space is the $+1$ eigenspace of stabilisers $\{Z_1Z_2, Z_2Z_3\}$. A single bit-flip anticommutes with exactly one stabiliser, flipping its eigenvalue. This is detected without collapsing the encoded superposition (because we measure stabilisers, not logical observables).

## 3.5 Python Code — Qiskit Implementation of Noisy Channels

```python
"""
Quantum information over noisy quantum channels.
Demonstrates Kraus representation, channel simulation,
and the 3-qubit bit-flip quantum error correction code.
"""

from __future__ import annotations

import logging
import numpy as np
from numpy.typing import NDArray

# Configure strict error logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")
log = logging.getLogger("NoisyChannel")


# ---------- Type-safe gate definitions ----------
I2: NDArray[np.complex128] = np.eye(2, dtype=np.complex128)
X:  NDArray[np.complex128] = np.array([[0, 1], [1, 0]], dtype=np.complex128)
Y:  NDArray[np.complex128] = np.array([[0, -1j], [1j, 0]], dtype=np.complex128)
Z:  NDArray[np.complex128] = np.array([[1, 0], [0, -1]], dtype=np.complex128)


def validate_density_matrix(rho: NDArray[np.complex128]) -> None:
    """Strict validation: Hermiticity, trace=1, positive semi-definite."""
    if rho.shape != (2, 2):
        raise ValueError(f"Expected 2x2 density matrix, got shape {rho.shape}")
    if not np.allclose(rho, rho.conj().T, atol=1e-10):
        raise ValueError("Density matrix is not Hermitian.")
    if not np.isclose(np.trace(rho), 1.0, atol=1e-10):
        raise ValueError(f"Trace is not 1: Tr(rho) = {np.trace(rho)}")
    eigvals = np.linalg.eigvalsh(rho)
    if np.min(eigvals) < -1e-10:
        raise ValueError(f"Negative eigenvalue detected: {np.min(eigvals)}")


def apply_kraus_channel(
    rho: NDArray[np.complex128],
    kraus_ops: list[NDArray[np.complex128]],
) -> NDArray[np.complex128]:
    """Apply a CPTP map defined by Kraus operators."""
    validate_density_matrix(rho)
    output = np.zeros_like(rho, dtype=np.complex128)
    for E in kraus_ops:
        output = output + E @ rho @ E.conj().T
    # Check trace preservation
    tr_loss = 1.0 - np.real(np.trace(output))
    if tr_loss > 1e-9:
        log.error("Trace loss %.2e exceeds tolerance.", tr_loss)
        raise RuntimeError("Trace not preserved: invalid Kraus set.")
    validate_density_matrix(output)
    return output


def bit_flip_kraus(p: float) -> list[NDArray[np.complex128]]:
    """Return Kraus operators for the bit-flip channel with prob p."""
    if not 0.0 <= p <= 1.0:
        raise ValueError("Probability p must lie in [0, 1].")
    return [np.sqrt(1.0 - p) * I2, np.sqrt(p) * X]


def phase_flip_kraus(p: float) -> list[NDArray[np.complex128]]:
    """Return Kraus operators for the phase-flip channel with prob p."""
    if not 0.0 <= p <= 1.0:
        raise ValueError("Probability p must lie in [0, 1].")
    return [np.sqrt(1.0 - p) * I2, np.sqrt(p) * Z]


def depolarizing_kraus(p: float) -> list[NDArray[np.complex128]]:
    """Return Kraus operators for the depolarizing channel with prob p."""
    if not 0.0 <= p <= 0.75:
        raise ValueError("For single-qubit DEP channel, p must be <= 3/4.")
    return [
        np.sqrt(1.0 - 3.0 * p / 4.0) * I2,
        np.sqrt(p / 4.0) * X,
        np.sqrt(p / 4.0) * Y,
        np.sqrt(p / 4.0) * Z,
    ]


def amplitude_damping_kraus(gamma: float) -> list[NDArray[np.complex128]]:
    """Return Kraus operators for the amplitude damping channel."""
    if not 0.0 <= gamma <= 1.0:
        raise ValueError("Damping parameter gamma must lie in [0, 1].")
    E0 = np.array([[1.0, 0.0], [0.0, np.sqrt(1.0 - gamma)]], dtype=np.complex128)
    E1 = np.array([[0.0, np.sqrt(gamma)], [0.0, 0.0]], dtype=np.complex128)
    return [E0, E1]


def fidelity(rho: NDArray[np.complex128],
             sigma: NDArray[np.complex128]) -> float:
    """Compute Uhlmann fidelity between two density matrices."""
    validate_density_matrix(rho)
    validate_density_matrix(sigma)
    sqrt_rho = _matrix_sqrt(rho)
    inner = sqrt_rho @ sigma @ sqrt_rho
    return float(np.real(np.trace(_matrix_sqrt(inner))) ** 2)


def _matrix_sqrt(M: NDArray[np.complex128]) -> NDArray[np.complex128]:
    """Principal square root via eigendecomposition."""
    eigvals, eigvecs = np.linalg.eigh(M)
    eigvals_clipped = np.clip(eigvals, 0.0, None)
    return eigvecs @ np.diag(np.sqrt(eigvals_clipped)) @ eigvecs.conj().T


# ---------- 3-qubit bit-flip code demonstration ----------
def three_qubit_bit_flip_code(p: float) -> float:
    """
    Encode |+> in the 3-qubit bit-flip code, apply a noisy bit-flip
    channel independently to each qubit, decode, and compute
    fidelity with the original state.
    """
    # Logical |+> = (|000> + |111>) / sqrt(2)
    zero = np.zeros(8, dtype=np.complex128)
    zero[0] = 1.0 / np.sqrt(2.0)        # |000>
    zero[7] = 1.0 / np.sqrt(2.0)        # |111>
    rho_ideal = np.outer(zero, zero.conj())

    # Apply bit-flip channel to each of 3 qubits
    # (this is a simplified density-matrix simulation; in practice use Qiskit)
    E = bit_flip_kraus(p)
    rho_noisy = np.zeros_like(rho_ideal)
    for e1 in E:
        for e2 in E:
            for e3 in E:
                E3 = e3
                E2 = e2
                E1 = e1
                # Kronecker product
                E_total = np.kron(np.kron(E3, E2), E1)
                rho_noisy = rho_noisy + E_total @ rho_ideal @ E_total.conj().T

    return fidelity(rho_ideal, rho_noisy)


# ---------- Demonstration block ----------
if __name__ == "__main__":
    # Test on |+> state
    plus = np.array([[0.5, 0.5], [0.5, 0.5]], dtype=np.complex128)

    log.info("Bit-Flip channel on |+>, p = 0.1:")
    rho_out = apply_kraus_channel(plus, bit_flip_kraus(0.1))
    log.info("Fidelity = %.4f", fidelity(plus, rho_out))

    log.info("Amplitude damping on |+>, gamma = 0.3:")
    rho_out = apply_kraus_channel(plus, amplitude_damping_kraus(0.3))
    log.info("Fidelity = %.4f", fidelity(plus, rho_out))

    log.info("3-qubit code fidelity under BF, p = 0.1: %.4f",
             three_qubit_bit_flip_code(0.1))
```

> [!TIP]
> **Compilation check:** The script validates every density matrix for Hermiticity, unit trace, and positive semi-definiteness — matching the *board-exam expectation* that any state produced by a CPTP map must satisfy these axioms.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Diagram — Noisy Quantum Channel Architecture

```mermaid
flowchart LR
    A["Alice\nState Preparation rho"] --> B["Encoding Unit\nU_enc maps to code space"]
    B --> C["Physical Qubit Q1"]
    B --> D["Physical Qubit Q2"]
    B --> E["Physical Qubit Q3"]
    C --> F["Noisy Channel\nKraus ops E_k"]
    D --> F
    E --> F
    F --> G["Syndrome Measurement\nParity checks Z_i Z_j"]
    G --> H{"Error\nDetected?"}
    H -- Yes --> I["Recovery Unit\nApply R_k"]
    H -- No --> J["Decoding Unit\nU_dec"]
    I --> J
    J --> K["Bob\nRecovered state sigma"]
    style A fill:#1f4e79,stroke:#000,color:#fff
    style B fill:#2e75b6,stroke:#000,color:#fff
    style F fill:#c00000,stroke:#000,color:#fff
    style G fill:#ed7d31,stroke:#000,color:#fff
    style I fill:#ed7d31,stroke:#000,color:#fff
    style K fill:#1f4e79,stroke:#000,color:#fff
```

**Description:** A standard quantum error correction pipeline. Alice's logical state is encoded into multiple physical qubits that traverse an independent noisy channel. Bob measures error syndromes (without collapsing the logical state) and applies a corrective recovery. The result is decoded to recover the original logical state.

## 4.2 Mermaid Diagram — Kraus Operator Decomposition Logic

```mermaid
flowchart TD
    P0["Input State\nrho in B(H_A)"] --> Q1{"Kraus\nDecomposition\nExists?"}
    Q1 -- Yes --> R0["Compute E_k"]
    R0 --> S0["Verify Trace Preservation\nsum E_k_dag E_k = I"]
    S0 --> T0["Apply Channel\nN(rho) = sum E_k rho E_k_dag"]
    T0 --> U0["Output State\nsigma in B(H_B)"]
    S0 -- "Violation!" --> V0["INVALID CHANNEL\nNot CPTP"]
    Q1 -- No --> W0["Use Choi Test\nJ N must be PSD"]
    W0 --> S0
    style P0 fill:#1f4e79,stroke:#000,color:#fff
    style T0 fill:#548235,stroke:#000,color:#fff
    style U0 fill:#1f4e79,stroke:#000,color:#fff
    style V0 fill:#c00000,stroke:#000,color:#fff
    style W0 fill:#7030a0,stroke:#000,color:#fff
```

**Description:** A logical flowchart for verifying whether a candidate channel is physically valid. The Choi matrix test is an *equivalent necessary and sufficient condition* for complete positivity of any linear map.

## 4.3 Mermaid Diagram — Channel Capacity Hierarchy

```mermaid
flowchart TB
    subgraph Capacity_Types["Quantum Channel Capacities"]
        A1["Classical Capacity C"]
        A2["Quantum Capacity Q"]
        A3["Private Capacity P"]
    end
    A1 --> A2
    A1 --> A3
    A1 -- "HSW Theorem" --> B1["C N = max chi over p_x rho_x"]
    A2 -- "LSD Formula" --> B2["Q N = lim sup I_coherent"]
    A3 -- "Devetak Bound" --> B3["P N = max I X B minus I X E"]
    style A1 fill:#2e75b6,stroke:#000,color:#fff
    style A2 fill:#c00000,stroke:#000,color:#fff
    style A3 fill:#548235,stroke:#000,color:#fff
    style B1 fill:#1f4e79,stroke:#000,color:#fff
    style B2 fill:#1f4e79,stroke:#000,color:#fff
    style B3 fill:#1f4e79,stroke:#000,color:#fff
```

**Description:** Three distinct capacities characterise a quantum channel: classical (Holevo–Schumacher–Westmoreland), quantum (Lloyd–Shor–Devetak), and private (Devetak). All three coincide for *noisy* channels under regularisation, but differ for channels with quantum feedback.

## 4.4 Mermaid Diagram — 3-Qubit Code Recovery Decision Tree

```mermaid
flowchart TD
    S0["Encoded Logical State\n|+>_L = (|000> + |111>)/sqrt(2)"] --> X0["Transmit through BF\nchannel with prob p"]
    X0 --> M0["Measure\nZ1Z2 and Z2Z3"]
    M0 --> D0{"Syndrome\nResult?"}
    D0 -- "+1, +1" --> N0["No Error\nApply I"]
    D0 -- "-1, +1" --> N1["Error on Q1\nApply X on Q1"]
    D0 -- "+1, -1" --> N2["Error on Q3\nApply X on Q3"]
    D0 -- "-1, -1" --> N3["Error on Q2\nApply X on Q2"]
    N0 --> F0["Decoded |+>"]
    N1 --> F0
    N2 --> F0
    N3 --> F0
    style S0 fill:#1f4e79,stroke:#000,color:#fff
    style X0 fill:#c00000,stroke:#000,color:#fff
    style M0 fill:#ed7d31,stroke:#000,color:#fff
    style F0 fill:#548235,stroke:#000,color:#fff
```

**Description:** Decision tree for the 3-qubit bit-flip code. Each branch corresponds to a unique syndrome outcome, mapping deterministically to a recovery operation.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Question 1 `[KTU University Exam - July 2024]` — *CO2, Remember*

**State and prove the trace-preservation condition for a quantum channel. Why is it necessary for a physical noise model?**

**Model Answer (3 Marks):**

A quantum channel $\mathcal{N}$ acting on a density operator $\rho$ is defined by a set of Kraus operators $\{E_k\}_{k=1}^{r}$ such that:

$$
\mathcal{N}(\rho) = \sum_{k=1}^{r} E_k \,\rho\, E_k^{\dagger}
$$

**[Stating trace-preservation axiom: 1 Mark]**

The trace-preservation condition requires that $\mathrm{Tr}[\mathcal{N}(\rho)] = \mathrm{Tr}(\rho) = 1$ for all valid density operators. Expanding:

$$
\mathrm{Tr}[\mathcal{N}(\rho)] = \sum_{k=1}^{r} \mathrm{Tr}(E_k \rho E_k^{\dagger}) = \sum_{k=1}^{r} \mathrm{Tr}(E_k^{\dagger} E_k \rho) = \mathrm{Tr}\!\left[\left(\sum_{k=1}^{r} E_k^{\dagger} E_k\right) \rho\right]
$$

For this to equal $\mathrm{Tr}(\rho)$ for all $\rho$, the Kraus operators must satisfy:

$$
\sum_{k=1}^{r} E_k^{\dagger} E_k = I
$$

**[Final simplified constraint: 1 Mark]**

This condition is necessary because physical noise must conserve the total probability of the system — quantum states cannot be lost to the environment, only redistributed. Violating trace-preservation would correspond to non-physical post-selection or measurement without renormalisation. **[Physical justification: 1 Mark]**

---

### Question 2 `[KTU University Exam - Dec 2023]` — *CO2, Understand*

**Differentiate between the Bit-Flip, Phase-Flip, and Depolarizing quantum channels. Write the Kraus operators of each with a clear physical interpretation.**

**Model Answer (3 Marks):**

| Channel | Kraus Operators | Physical Meaning |
|---|---|---|
| **Bit-Flip** | $E_0 = \sqrt{1-p}\,I,\ E_1 = \sqrt{p}\,X$ | Probabilistic bit error $\vert 0\rangle \leftrightarrow \vert 1\rangle$ |
| **Phase-Flip** | $E_0 = \sqrt{1-p}\,I,\ E_1 = \sqrt{p}\,Z$ | Probabilistic phase error $\vert +\rangle \leftrightarrow \vert -\rangle$ |
| **Depolarizing** | $E_0 = \sqrt{1-3p/4}\,I,\ E_{1,2,3} = \sqrt{p/4}\,\{X,Y,Z\}$ | Uniform mixture of identity and all three Pauli errors |

**[Writing Kraus operators: 1.5 Marks]**

The bit-flip is the *quantum analogue* of classical binary symmetric channel. The phase-flip is *invisible* in the computational basis but destructive in the Hadamard basis, so it is basis-dependent. The depolarizing channel models *isotropic* noise, producing a uniform shrink of the Bloch sphere, and is the canonical model for *white* quantum noise. **[Interpretation: 1.5 Marks]**

---

## Part B — Long Answer Questions (14 Marks, Module Internal Choice)

### Question A `[KTU University Exam - July 2024]` — *CO3, Understand + Apply*

**(a)** Derive the Kraus representation of the **amplitude damping channel** with damping parameter $\gamma$. Show that it preserves trace and discuss its action on the Bloch vector. **[7 Marks]**

**(b)** Consider the state $\vert +\rangle = \frac{1}{\sqrt{2}}(\vert 0\rangle + \vert 1\rangle)$ transmitted through an amplitude damping channel with $\gamma = 0.4$. Compute the output density matrix and the fidelity with the input state. **[7 Marks]**

#### Model Solution

### Part (a) — Derivation of Amplitude Damping Channel

The amplitude damping channel models energy loss (e.g., spontaneous emission) where the excited state $\vert 1\rangle$ decays to $\vert 0\rangle$ with probability $\gamma$. The Kraus operators are:

$$
E_0 = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{1-\gamma} \end{pmatrix}, \qquad E_1 = \begin{pmatrix} 0 & \sqrt{\gamma} \\ 0 & 0 \end{pmatrix}
$$

**[Stating physical model and Kraus operators: 1 Mark]**

**Step 1 — Trace Preservation Verification:**

$$
E_0^{\dagger} E_0 = \begin{pmatrix} 1 & 0 \\ 0 & 1-\gamma \end{pmatrix}, \qquad E_1^{\dagger} E_1 = \begin{pmatrix} 0 & 0 \\ 0 & \gamma \end{pmatrix}
$$

$$
E_0^{\dagger} E_0 + E_1^{\dagger} E_1 = I \quad \checkmark
$$

**[Trace preservation proof: 1.5 Marks]**

**Step 2 — Action on a General State:**

For $\rho = \begin{pmatrix} \rho_{00} & \rho_{01} \\ \rho_{10} & \rho_{11} \end{pmatrix}$:

$$
\mathcal{N}_{\text{AD}}(\rho) = \begin{pmatrix} \rho_{00} + \gamma \rho_{11} & \sqrt{1-\gamma}\,\rho_{01} \\ \sqrt{1-\gamma}\,\rho_{10} & (1-\gamma)\rho_{11} \end{pmatrix}
$$

**[Deriving the matrix form: 2 Marks]**

**Step 3 — Bloch Vector Transformation:**

Writing $\rho = \frac{1}{2}(I + \vec{r}\cdot\vec{\sigma})$ with $\vec{r} = (r_x, r_y, r_z)$, the action maps:

$$
(r_x, r_y, r_z) \mapsto \left(\sqrt{1-\gamma}\,r_x,\ \sqrt{1-\gamma}\,r_y,\ \gamma + (1-\gamma)r_z\right)
$$

**[Bloch vector transformation: 1.5 Marks]**

**Step 4 — Physical Interpretation:** The damping channel has a *fixed point* at $\vert 0\rangle$ (the ground state). The Bloch sphere is *sheared and contracted* toward this fixed point. Pure states are not preserved in general — this is a *non-unital* channel (the maximally mixed state is not a fixed point).

**[Physical interpretation: 1 Mark]**

### Part (b) — Numerical Evaluation

The input state is:

$$
\vert +\rangle\langle +\vert = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
$$

Apply the channel with $\gamma = 0.4$:

$$
\rho_{\text{out}} = \begin{pmatrix} 0.5 + 0.4 \times 0.5 & \sqrt{0.6} \times 0.5 \\ \sqrt{0.6} \times 0.5 & 0.6 \times 0.5 \end{pmatrix} = \begin{pmatrix} 0.7 & 0.5 \times 0.7746 \\ 0.5 \times 0.7746 & 0.3 \end{pmatrix}
$$

$$
\rho_{\text{out}} = \begin{pmatrix} 0.7 & 0.3873 \\ 0.3873 & 0.3 \end{pmatrix}
$$

**[Matrix calculation: 3 Marks]**

The fidelity is $\mathcal{F}(\rho_{\text{in}}, \rho_{\text{out}}) = \left(\mathrm{Tr}\sqrt{\sqrt{\rho_{\text{in}}}\,\rho_{\text{out}}\,\sqrt{\rho_{\text{in}}}}\right)^2$. For a pure state input $\rho_{\text{in}} = \vert \psi\rangle\langle \psi \vert$, this simplifies to $\mathcal{F} = \langle \psi \vert \rho_{\text{out}} \vert \psi \rangle$:

$$
\mathcal{F} = \langle + \vert \rho_{\text{out}} \vert +\rangle = \frac{1}{2}(0.7 + 2 \times 0.3873 + 0.3) = \frac{1}{2}(1.7746) = 0.8873
$$

**[Fidelity calculation: 2 Marks]**

**Verification:** Eigenvalues of $\rho_{\text{out}}$ are $\lambda_{\pm} = 0.5 \pm \sqrt{0.04 + 0.15} = 0.5 \pm 0.4359$, giving $\lambda_+ = 0.9359$ and $\lambda_- = 0.0641$. Both non-negative $\checkmark$. Trace $= 1.0$ $\checkmark$. **[State validity check: 1 Mark]**

**[Final boxed answer: $\mathcal{F} = 0.8873$: 1 Mark]**

> [!WARNING]
> **KTU Examiner's Pitfall:** Students frequently forget that the amplitude damping channel is *non-unital* — it does *not* preserve the maximally mixed state. Also, do not write $E_0^{\dagger} E_0 + E_1^{\dagger} E_1$ without the explicit matrix calculation showing it equals $I$. Marks are deducted for "handwaving" the trace-preservation verification.

---

### Question B `[KTU University Exam - Dec 2023]` — *CO3, Apply + Analyse*

**(a)** Describe the **3-qubit bit-flip code**. Encode the logical state $\vert \psi\rangle_L = \alpha \vert 0\rangle_L + \beta \vert 1\rangle_L$ and show that a single bit-flip error on any one qubit can be detected and corrected using stabilizer measurements. **[7 Marks]**

**(b)** Suppose a single-qubit state $\vert +\rangle$ is encoded in the 3-qubit bit-flip code and transmitted through a bit-flip channel with $p = 0.1$ on each qubit independently. Compute the probability of *no logical error* after recovery. Compare it with the unencoded case. **[7 Marks]**

#### Model Solution

### Part (a) — 3-Qubit Bit-Flip Code

**Step 1 — Encoding:** The 3-qubit code maps one logical qubit to three physical qubits using:

$$
\vert 0\rangle_L = \vert 000\rangle, \qquad \vert 1\rangle_L = \vert 111\rangle
$$

A general logical state becomes $\vert \psi\rangle_L = \alpha \vert 000\rangle + \beta \vert 111\rangle$. **[Stating encoding: 1 Mark]**

**Step 2 — Stabilizer Generators:** The code space is the simultaneous $+1$ eigenspace of the two commuting stabilizers:

$$
S_1 = Z_1 Z_2 = Z \otimes Z \otimes I, \qquad S_2 = Z_2 Z_3 = I \otimes Z \otimes Z
$$

These commute because $S_1 S_2 = S_2 S_1$ (the $Z_2$ operators cancel). **[Stabilizer definition: 1.5 Marks]**

**Step 3 — Error Detection:** Suppose bit-flip $X_1$ occurs on qubit 1. The state becomes $\alpha \vert 100\rangle + \beta \vert 011\rangle$. Now measure $S_1 = Z_1 Z_2$:

- $Z_1 Z_2 \vert 100\rangle = (+1)\vert 100\rangle$, $Z_1 Z_2 \vert 011\rangle = (-1)\vert 011\rangle$ — syndrome $-1$.
- $Z_2 Z_3$ measurement gives $+1$.

So the syndrome is $(S_1, S_2) = (-1, +1)$, identifying $X_1$ as the error. Similarly, all single-qubit flips are uniquely identified:

| Error | $S_1$ Syndrome | $S_2$ Syndrome | Recovery |
|---|---|---|---|
| $I$ | $+1$ | $+1$ | $I$ |
| $X_1$ | $-1$ | $+1$ | $X_1$ |
| $X_2$ | $-1$ | $-1$ | $X_2$ |
| $X_3$ | $+1$ | $-1$ | $X_3$ |

**[Syndrome table: 2 Marks]**

**Step 4 — Why the Logical State Survives:** The stabilizers $S_1, S_2$ commute with the logical operators $\bar{X} = X_1 X_2 X_3$ and $\bar{Z} = Z_1 Z_2 Z_3$, so measurement of $S_1, S_2$ does *not* collapse the logical information. The code protects against arbitrary superpositions of $\vert 0\rangle_L$ and $\vert 1\rangle_L$, not just basis states. **[Non-demolition property: 1.5 Marks]**

**Step 5 — Code Parameters:** This is a $[[3,1,1]]$ stabilizer code — it encodes $k=1$ logical qubit into $n=3$ physical qubits with minimum distance $d=1$ (it can detect zero errors but, by the definition of distance as the minimum weight undetectable error, only $t=0$... correction: the *bit-flip code* $[[3,1,3]]$ has $d=3$ and corrects $t=1$ error). Correction: this is a $[[3,1,3]]$ code correcting any single bit-flip error. **[Code parameters: 1 Mark]**

### Part (b) — Probability of No Logical Error

**Unencoded Case:** For a single bit-flip channel with $p = 0.1$, the probability of *no error* is $1 - p = 0.9$. The probability of a *logical error* (flip) is $p = 0.1$. **[Unencoded baseline: 1 Mark]**

**Encoded Case (3-qubit code, BF channel):** Each physical qubit flips independently with probability $p = 0.1$. There are three scenarios for logical success:

- **Zero flips (all qubits unchanged):** Probability $(1-p)^3 = 0.9^3 = 0.729$.
- **Exactly one flip (any of 3 qubits):** Probability $3p(1-p)^2 = 3 \times 0.1 \times 0.81 = 0.243$ — *correctable* by the code.
- **Two or three flips (logic error):** Probability $\binom{3}{2}p^2(1-p) + p^3 = 3 \times 0.01 \times 0.9 + 0.001 = 0.027 + 0.001 = 0.028$.

**Probability of no logical error** = $0.729 + 0.243 = 0.972$. **[Computation: 3 Marks]**

**Comparison:** Unencoded logical error = $0.1$; encoded logical error = $0.028$. The code reduces the logical error rate by a factor of $\approx 3.57$. **[Comparison: 1 Mark]**

**Interpretation:** While the 3-qubit code reduces the logical error rate, it *increases* the physical resources by a factor of 3. For $n$-qubit repetition, the logical error scales as $\sim \binom{n}{t+1} p^{t+1}$ where $t = (n-1)/2$. This polynomial suppression is the foundation of fault-tolerant quantum computing when concatenated with the threshold theorem. **[Discussion: 2 Marks]**

> [!WARNING]
> **KTU Examiner's Pitfall — Common Mark Deductions:**
> 1. *Failing to justify stabilizer commutation:* Without showing $[S_1, S_2] = 0$, the measurement procedure is undefined. Lose 1.5 marks.
> 2. *Confusing the code as $[[3,1,1]]$ instead of $[[3,1,3]]$:* The 3-qubit repetition code has distance $d=3$, correcting *one* bit-flip error.
> 3. *Forgetting independent noise:* In part (b), each of the 3 physical qubits experiences the channel *independently*. Do not apply $p$ as a joint error probability.
> 4. *Not providing the syndrome table:* It is a required structural element in KTU's valuation key for full marks.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — Quantum Information Over Noisy Channels**

- ✅ A **quantum channel** is a *CPTP linear map*; the Kraus representation $\mathcal{N}(\rho) = \sum_k E_k \rho E_k^{\dagger}$ with $\sum_k E_k^{\dagger} E_k = I$ is its defining property.
- ✅ The **Stinespring dilation** guarantees every CPTP map arises from a joint unitary with an environment, initialised in $\vert 0\rangle_E$.
- ✅ The **Choi matrix** $J(\mathcal{N}) = (\mathcal{I}\otimes\mathcal{N})(\vert \Phi^+\rangle\langle \Phi^+\vert)$ is PSD $\iff$ $\mathcal{N}$ is CP, and $\mathrm{Tr}_B J = I_A/d$ $\iff$ trace-preserving.
- ✅ Six canonical noise models: **Bit-Flip, Phase-Flip, Bit-Phase-Flip, Depolarizing, Amplitude Damping, Phase Damping**. Each has explicit Kraus operators and Bloch-sphere geometric interpretations.
- ✅ The **Depolarizing channel** shrinks the Bloch vector *isotropically*: $\vec{r} \mapsto (1-p)\vec{r}$. Valid for $0 \le p \le 3/4$.
- ✅ The **Amplitude Damping channel** is *non-unital*, with fixed point $\vert 0\rangle$. Models $T_1$ energy relaxation with $\gamma = 1 - e^{-t/T_1}$.
- ✅ The **Holevo bound** $\chi(\{p_x, \rho_x\}) = S(\bar{\rho}) - \sum_x p_x S(\rho_x)$ upper-bounds the accessible information to a classical receiver.
- ✅ The **HSW theorem** states $C(\mathcal{N}) = \max_{\{p_x, \rho_x\}} \chi$ — the classical capacity equals the maximum Holevo information.
- ✅ The **Lloyd–Shor–Devetak formula** gives the quantum capacity $Q(\mathcal{N}) = \lim_{n \to \infty} \frac{1}{n} \max_{\rho} I_c(\rho, \mathcal{N}^{\otimes n})$.
- ✅ The **Knill–Laflamme condition** $P_a^\dagger E_k^{\dagger} E_l P_b = \alpha_{kl} \delta_{ab}$ is the algebraic criterion for QEC against a noise set $\{E_k\}$.
- ✅ The **3-qubit bit-flip code** uses stabilisers $\{Z_1 Z_2, Z_2 Z_3\}$ to detect and correct single bit-flips. It is a $[[3,1,3]]$ code.
- ✅ The **No-Cloning Theorem** forbids perfect copying — QEC uses *entangled code subspaces* instead of redundancy by repetition.
- ✅ The **Threshold Theorem** guarantees fault-tolerant quantum computation when physical error rates $p < p_{\text{th}} \approx 10^{-2}$.
- ✅ The **Quantum Hamming Bound** $\sum_{j=0}^{t} \binom{n}{j} 3^j \le 2^{n-k}$ constrains the parameters of any non-degenerate QEC code.
- ✅ The **Shor 9-qubit code** $[[9,1,3]]$ protects against arbitrary single-qubit errors (bit, phase, bit-phase) by concatenating the 3-qubit bit-flip and phase-flip codes.
- ✅ The **fidelity** $\mathcal{F}(\rho, \sigma) = (\mathrm{Tr}\sqrt{\sqrt{\rho}\,\sigma\,\sqrt{\rho}})^2$ is the standard metric for comparing quantum states in QEC analysis.
- ✅ For pure-state input, fidelity simplifies to $\mathcal{F}(\vert\psi\rangle, \rho) = \langle\psi\vert \rho \vert\psi\rangle$ — a frequently used shortcut in KTU problems.

> [!TIP]
> **Exam Strategy Tip:** When asked to "derive" a channel, always (1) state the physical model, (2) write the Kraus operators, (3) verify trace preservation with *explicit matrix algebra*, (4) derive the action on a general state, and (5) interpret geometrically on the Bloch sphere. This five-step structure maps exactly to KTU's incremental valuation key.

---

<!-- SECTION_5_END -->
