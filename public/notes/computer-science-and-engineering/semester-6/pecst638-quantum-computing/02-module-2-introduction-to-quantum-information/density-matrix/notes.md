# Density matrix

<!-- SECTION_1_START -->

# Density Matrix: The Complete Quantum State Descriptor

> [!IMPORTANT]
> **KTU 2024 Scheme – Quantum Computing (PECST638) | Module 2**
> **Topic:** Density Matrix | **Conceptual Level:** Foundation of Mixed-State Quantum Mechanics
> **Prerequisite Co-requisites:** State vectors, inner products, tensor products, Bloch sphere basics.

---

## 1.1 Formal Academic Definition (KTU Syllabus Terminology)

The **density matrix** (also called the **density operator**, denoted $\hat{\rho}$ or simply $\rho$) is a positive semi-definite, Hermitian, unit-trace operator that completely describes the statistical quantum state of a physical system. Unlike the **state vector** formalism, which is restricted to **pure states**, the density matrix formalism elegantly captures both **pure states** and **statistical mixtures (mixed states)** in a single unified mathematical framework.

Formally, for a quantum system whose preparation corresponds to an **ensemble** $\{(p_i, \vert \psi_i \rangle)\}$ where the system is in state $\vert \psi_i \rangle$ with classical probability $p_i$:

$$
\rho \;\equiv\; \sum_{i} p_i \, \vert \psi_i \rangle \langle \psi_i \vert
$$

> [!NOTE]
> **Key Insight from the KTU 2024 Syllabus:** The density matrix is essential for describing open quantum systems, subsystems of entangled pairs, and decoherence — all central to quantum information science.

## 1.2 Conceptual Analogy & Geometric Intuition

Imagine you are handed a **gift box** that you cannot open (the "quantum system"). You only know that with probability **30%** the box contains a red ball and with probability **70%** a blue ball. This is a **classical mixture of two known states**.

| Formalism | Real-World Analogy | Description |
| :--- | :--- | :--- |
| **State vector $\vert \psi \rangle$** | A single, perfectly labelled ball | The system is in a *definite, known* quantum state. |
| **Density matrix $\rho$** | A bag with a known *probability distribution* over balls | The system is in one of several states, but we only know the statistical likelihood. |

### The Bloch Sphere Geometric View (Single Qubit)

For a **single qubit**, every density matrix can be written as:

$$
\rho \;=\; \frac{1}{2}\bigl(\mathbb{I} + \vec{r}\cdot\vec{\sigma}\bigr)
$$

where $\vec{r} = (r_x, r_y, r_z)$ is the **Bloch vector** with $\Vert \vec{r} \Vert \le 1$, and $\vec{\sigma} = (\sigma_x, \sigma_y, \sigma_z)$ are the Pauli matrices. Geometrically, this means the entire set of valid single-qubit density matrices forms a solid ball of radius 1 — the **Bloch ball**:

- **Surface** ($\Vert \vec{r} \Vert = 1$): Pure states (perfect quantum coherence).
- **Interior** ($\Vert \vec{r} \Vert < 1$): Mixed states (partial decoherence).
- **Center** ($\vec{r} = \vec{0}$): Maximally mixed state $\rho = \tfrac{1}{2}\mathbb{I}$.

> [!TIP]
> **Visualization Tip:** In the Bloch ball picture, moving radially inward from the surface to the center represents a transition from "pure quantum information" to "useless statistical noise."

> [!VISUALIZATION CONTROL]
> **Concept:** Bloch ball (3D solid sphere of valid single-qubit density matrices)
> **GeoGebra Input Equations:**
> * `r = 0.6` (radius of the Bloch vector)
> * `Sphere((0,0,0), 1)` (unit Bloch sphere boundary)
> * `Vector((0,0,0), (r*cos(θ), r*sin(θ), r*0.5))` (an example Bloch vector)
> **Visual Description:** The student should observe a 3D unit sphere with an interior point connected to the origin by a Bloch vector $\vec{r}$. Pure states lie exactly on the surface; mixed states lie inside.

---

## 1.3 Density Matrix for the Three Fundamental Cases

### Case A — Pure State

If the system is in a known state $\vert \psi \rangle$ with certainty, then:

$$
\rho \;=\; \vert \psi \rangle \langle \psi \vert
$$

This is a **rank-1 projector**. It satisfies $\rho^2 = \rho$ (idempotent).

### Case B — Statistical Mixture (Mixed State)

If the system is prepared via a random process that produces $\vert \psi_i \rangle$ with classical probability $p_i$ (where $p_i \ge 0$ and $\sum_i p_i = 1$):

$$
\rho \;=\; \sum_{i} p_i \, \vert \psi_i \rangle \langle \psi_i \vert
$$

### Case C — Maximally Mixed State

The state with **maximum entropy**, where every basis state is equally likely:

$$
\rho \;=\; \frac{\mathbb{I}}{d}
$$

where $d$ is the dimension of the Hilbert space. For a qubit ($d=2$): $\rho = \tfrac{1}{2}\mathbb{I}$.

> [!WARNING]
> **Critical Distinction (Frequently Tested in KTU):** A statistical mixture of orthogonal states (e.g., $\tfrac{1}{2}\vert 0\rangle\langle 0\vert + \tfrac{1}{2}\vert 1\rangle\langle 1\vert$) is **fundamentally different** from the coherent superposition $\tfrac{1}{\sqrt{2}}(\vert 0\rangle + \vert 1\rangle)$. The first is a *classical* mixture, the second is a *pure* quantum state. Both produce the same measurement statistics in the computational basis, but they behave completely differently in interference experiments.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->

# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Four Axiomatic Properties of a Valid Density Matrix

For any matrix $\rho$ to qualify as a legitimate density matrix describing a physical quantum state, it must satisfy exactly **four** mathematical conditions. These are high-yield KTU exam items.

| # | Property | Mathematical Statement | Physical Meaning |
| :--- | :--- | :--- | :--- |
| 1 | **Hermiticity** | $\rho^\dagger = \rho$ | Observables (expectation values) must be real. |
| 2 | **Positive semi-definiteness** | $\langle \phi \vert \rho \vert \phi \rangle \ge 0 \quad \forall \vert \phi \rangle$ | Probabilities are non-negative. |
| 3 | **Unit trace** | $\mathrm{Tr}(\rho) = 1$ | Total probability sums to one (conservation). |
| 4 | **Bounded purity** | $0 < \mathrm{Tr}(\rho^2) \le 1$ | Quantifies "how pure" the state is. |

> [!NOTE]
> **Purity Criterion:** $\mathrm{Tr}(\rho^2) = 1$ if and only if the state is *pure*; otherwise the state is *mixed*.

## 2.2 Operational Rules for Density Matrices

### Rule 1 — Expectation Value of an Observable

For a Hermitian operator $\hat{A}$ representing a physical observable:

$$
\langle A \rangle \;=\; \mathrm{Tr}(\rho \hat{A})
$$

This rule **replaces** the state-vector formula $\langle A \rangle = \langle \psi \vert \hat{A} \vert \psi \rangle$ and is the cornerstone of all density-matrix calculations in KTU problems.

### Rule 2 — Time Evolution (Liouville–von Neumann Equation)

The Schrödinger equation governs state vectors; the **Liouville–von Neumann equation** governs density matrices. For a time-independent Hamiltonian $H$:

$$
\frac{d\rho}{dt} \;=\; -\frac{i}{\hbar}\bigl[\rho, H\bigr]
$$

where $[A, B] = AB - BA$ is the **commutator**. The formal solution is:

$$
\rho(t) \;=\; e^{-iHt/\hbar}\,\rho(0)\,e^{+iHt/\hbar}
$$

### Rule 3 — Reduced Density Matrix (Partial Trace)

For a **bipartite system** $\mathcal{H}_A \otimes \mathcal{H}_B$ with joint state $\rho_{AB}$, the state of subsystem $A$ alone is obtained by tracing out $B$:

$$
\rho_A \;=\; \mathrm{Tr}_B(\rho_{AB}) \;=\; \sum_{j} \bigl(\mathbb{I}_A \otimes \langle j \vert_B\bigr)\,\rho_{AB}\,\bigl(\mathbb{I}_A \otimes \vert j \rangle_B\bigr)
$$

The set $\{\vert j \rangle_B\}$ is any orthonormal basis of $\mathcal{H}_B$. This operation is essential for studying **entanglement** and **subsystem dynamics** in KTU Module 2.

### Rule 4 — Purification

Every mixed state $\rho_A$ acting on $\mathcal{H}_A$ can be **purified** — i.e., extended to a pure state $\vert \Psi \rangle$ in a larger Hilbert space $\mathcal{H}_A \otimes \mathcal{H}_E$ such that $\mathrm{Tr}_E(\vert \Psi \rangle \langle \Psi \vert) = \rho_A$. This concept is pivotal in quantum error correction and the study of open quantum systems.

## 2.3 The Density Matrix of Common Single-Qubit States (KTU Formula Sheet)

| State (Ket Notation) | Density Matrix $\rho$ | Bloch Vector $\vec{r}$ | Purity $\mathrm{Tr}(\rho^2)$ |
| :--- | :--- | :--- | :--- |
| $\vert 0 \rangle$ | $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ | $(0,0,+1)$ | $1$ |
| $\vert 1 \rangle$ | $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ | $(0,0,-1)$ | $1$ |
| $\vert + \rangle = \tfrac{1}{\sqrt{2}}(\vert 0\rangle + \vert 1\rangle)$ | $\tfrac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ | $(1,0,0)$ | $1$ |
| $\vert - \rangle = \tfrac{1}{\sqrt{2}}(\vert 0\rangle - \vert 1\rangle)$ | $\tfrac{1}{2}\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$ | $(-1,0,0)$ | $1$ |
| $\vert +i \rangle = \tfrac{1}{\sqrt{2}}(\vert 0\rangle + i\vert 1\rangle)$ | $\tfrac{1}{2}\begin{pmatrix} 1 & -i \\ i & 1 \end{pmatrix}$ | $(0,1,0)$ | $1$ |
| $\tfrac{1}{2}\mathbb{I}$ (max mixed) | $\tfrac{1}{2}\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ | $(0,0,0)$ | $\tfrac{1}{2}$ |
| $\tfrac{3}{4}\vert 0\rangle\langle 0\vert + \tfrac{1}{4}\vert 1\rangle\langle 1\vert$ | $\begin{pmatrix} 3/4 & 0 \\ 0 & 1/4 \end{pmatrix}$ | $(0,0,1/2)$ | $5/8$ |

> [!IMPORTANT]
> **KTU Exam Tip:** Always verify your computed $\rho$ against all four axioms. A single failure means the matrix is *not* a valid density matrix and the answer receives zero credit.

## 2.4 Engineering & Real-World Utility

The density matrix is the workhorse of modern quantum information science. Its engineering applications include:

* **Quantum Cryptography (BB84, E91):** Decoherence and eavesdropping are modeled as transitions of $\rho$ inside the Bloch ball.
* **Quantum Error Correction:** Stabilizer codes and the depolarizing channel act on $\rho$ rather than $\vert \psi \rangle$.
* **Nuclear Magnetic Resonance (NMR) Quantum Computing:** Early physical implementations operated exclusively on mixed states, where $\rho$ was *thermal* rather than pure.
* **Quantum Chemistry (VQE):** Electronic states of molecules at finite temperature are inherently mixed.
* **Open Quantum Systems & Lindblad Dynamics:** The master equation for $\rho$ is fundamental to modeling realistic (noisy) quantum hardware.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->

# Step-by-Step Derivations, Proofs, and Code Implementation

## 3.1 Worked Derivation #1: Density Matrix of the Equal Superposition State

**Problem:** Compute the density matrix of $\vert + \rangle = \tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)$ and verify all four axiomatic properties.

### Step 1 — Express the State Vector in the Computational Basis

$$
\vert + \rangle \;=\; \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix}
$$

### Step 2 — Apply the Density Matrix Definition $\rho = \vert \psi \rangle \langle \psi \vert$

The outer product $\vert + \rangle \langle + \vert$ is:

$$
\rho \;=\; \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \end{pmatrix} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \end{pmatrix} \;=\; \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
$$

### Step 3 — Hermiticity Check

$$
\rho^\dagger \;=\; \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}^\dagger \;=\; \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \;=\; \rho \quad\checkmark
$$

### Step 4 — Positive Semi-Definiteness Check

The eigenvalues of $\rho$ are obtained from $\det(\rho - \lambda \mathbb{I}) = 0$:

$$
\det\!\left(\frac{1}{2}\begin{pmatrix} 1-\lambda & 1 \\ 1 & 1-\lambda \end{pmatrix}\right) \;=\; 0
$$

Expanding:

$$
\tfrac{1}{4}\bigl((1-\lambda)^2 - 1\bigr) \;=\; 0
$$

$$
(1-\lambda)^2 \;=\; 1 \quad\Longrightarrow\quad 1-\lambda \;=\; \pm 1
$$

$$
\lambda_1 = 0, \quad \lambda_2 = 1 \quad\checkmark
$$

Both eigenvalues are $\ge 0$, so $\rho \ge 0$.

### Step 5 — Unit Trace Check

$$
\mathrm{Tr}(\rho) \;=\; \tfrac{1}{2} + \tfrac{1}{2} \;=\; 1 \quad\checkmark
$$

### Step 6 — Purity Check

$$
\mathrm{Tr}(\rho^2) \;=\; \tfrac{1}{4}\mathrm{Tr}\!\left(\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\right)
$$

$$
=\; \tfrac{1}{4}\mathrm{Tr}\!\left(\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}\right) \;=\; \tfrac{1}{4}(2+2) \;=\; 1
$$

Since $\mathrm{Tr}(\rho^2)=1$, the state is **pure** $\checkmark$.

---

## 3.2 Worked Derivation #2: Reduced Density Matrix of the Bell State

**Problem:** Compute $\rho_A = \mathrm{Tr}_B(\vert \Phi^+ \rangle \langle \Phi^+ \vert)$ where $\vert \Phi^+ \rangle = \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle)$, and determine whether the reduced state is pure or mixed.

### Step 1 — Write the Joint Density Matrix

$$
\rho_{AB} \;=\; \vert \Phi^+ \rangle \langle \Phi^+ \vert \;=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}
$$

The basis ordering is $\{\vert 00\rangle, \vert 01\rangle, \vert 10\rangle, \vert 11\rangle\}$.

### Step 2 — Apply the Partial Trace over Subsystem B

Tracing over the second qubit ($B$):

$$
\rho_A \;=\; \langle 0 \vert_B \rho_{AB} \vert 0 \rangle_B \;+\; \langle 1 \vert_B \rho_{AB} \vert 1 \rangle_B
$$

**Compute the first term:**

$$
\langle 0 \vert_B \rho_{AB} \vert 0 \rangle_B
$$

This projects onto the subspace where $B = \vert 0 \rangle$, retaining rows/columns 1 and 3 (the $\vert 00\rangle$ and $\vert 10\rangle$ entries of the 4×4 matrix):

$$
=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

**Compute the second term:**

$$
\langle 1 \vert_B \rho_{AB} \vert 1 \rangle_B
$$

This projects onto the subspace where $B = \vert 1 \rangle$, retaining rows/columns 2 and 4 (the $\vert 01\rangle$ and $\vert 11\rangle$ entries):

$$
=\; \tfrac{1}{2}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}
$$

### Step 3 — Sum the Two Contributions

$$
\rho_A \;=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \;+\; \tfrac{1}{2}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \;=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \;=\; \tfrac{1}{2}\mathbb{I}
$$

### Step 4 — Physical Interpretation

The reduced state is $\rho_A = \tfrac{1}{2}\mathbb{I}$, the **maximally mixed state** with purity $\mathrm{Tr}(\rho_A^2) = \tfrac{1}{2} < 1$. This is the canonical signature of **maximal entanglement**: a pure joint state whose individual subsystems are completely mixed.

> [!TIP]
> **Key Takeaway:** If $\rho_A$ (or $\rho_B$) is mixed *despite* $\rho_{AB}$ being pure, then $A$ and $B$ must be entangled. The *amount* of mixture is a quantitative witness of entanglement.

---

## 3.3 Worked Derivation #3: Time Evolution of a Density Matrix

**Problem:** A qubit starts in $\vert \psi(0) \rangle = \vert 0 \rangle$ and evolves under the Hamiltonian $H = \hbar\omega \sigma_x / 2$. Compute $\rho(t)$.

### Step 1 — Initial Density Matrix

$$
\rho(0) \;=\; \vert 0 \rangle \langle 0 \vert \;=\; \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

### Step 2 — Unitary Evolution Operator

The time evolution operator is $U(t) = e^{-iHt/\hbar} = e^{-i\omega t \sigma_x / 2}$. Using the identity $e^{i\theta \sigma_x} = \cos\theta\,\mathbb{I} + i\sin\theta\,\sigma_x$:

$$
U(t) \;=\; \cos(\omega t/2)\,\mathbb{I} - i\sin(\omega t/2)\,\sigma_x \;=\; \begin{pmatrix} \cos(\omega t/2) & -i\sin(\omega t/2) \\ -i\sin(\omega t/2) & \cos(\omega t/2) \end{pmatrix}
$$

### Step 3 — Apply the Evolution Formula

$$
\rho(t) \;=\; U(t)\,\rho(0)\,U^\dagger(t)
$$

Right-multiplying first (only the first column of $U(t)$ survives because $\rho(0)$ has only the top-left element nonzero):

$$
U(t)\,\rho(0) \;=\; \begin{pmatrix} \cos(\omega t/2) & -i\sin(\omega t/2) \\ -i\sin(\omega t/2) & \cos(\omega t/2) \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \;=\; \begin{pmatrix} \cos(\omega t/2) & 0 \\ -i\sin(\omega t/2) & 0 \end{pmatrix}
$$

Now left-multiply by $U^\dagger(t) = U^*(t)$ (since $U$ is symmetric and real-imaginary split):

$$
\rho(t) \;=\; \begin{pmatrix} \cos(\omega t/2) & i\sin(\omega t/2) \\ -i\sin(\omega t/2) & \cos(\omega t/2) \end{pmatrix}\begin{pmatrix} \cos(\omega t/2) & 0 \\ -i\sin(\omega t/2) & 0 \end{pmatrix}
$$

Carrying out the multiplication:

$$
\rho(t) \;=\; \begin{pmatrix} \cos^2(\omega t/2) + \sin^2(\omega t/2) & 0 \\ -i\cos(\omega t/2)\sin(\omega t/2) + 0 & 0 \end{pmatrix} \;=\; \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}
$$

Wait — let me recompute carefully (this is an instructive pitfall):

Actually, the correct product is:

$$
\rho(t) \;=\; \begin{pmatrix} \cos(\omega t/2)\cos(\omega t/2) & 0 \\ -i\sin(\omega t/2)\cos(\omega t/2) & 0 \end{pmatrix}
$$

where the off-diagonal entry *should* be $U_{21} \cdot U_{11} + U_{22} \cdot 0 = U_{21}U_{11}$. Since $U^\dagger = U^T$ for real $\sigma_x$:

$$
\rho_{21}(t) \;=\; U_{21} U_{11}^* \;=\; (-i\sin(\omega t/2))(\cos(\omega t/2)) \;=\; -i\sin(\omega t/2)\cos(\omega t/2)
$$

So:

$$
\rho(t) \;=\; \begin{pmatrix} \cos^2(\omega t/2) & -i\sin(\omega t/2)\cos(\omega t/2) \\ i\sin(\omega t/2)\cos(\omega t/2) & \sin^2(\omega t/2) \end{pmatrix}
$$

Using the half-angle identities $\cos^2(\theta) = \tfrac{1+\cos 2\theta}{2}$ and $\sin(\theta)\cos(\theta) = \tfrac{\sin 2\theta}{2}$:

$$
\rho(t) \;=\; \frac{1}{2}\begin{pmatrix} 1+\cos(\omega t) & -i\sin(\omega t) \\ i\sin(\omega t) & 1-\cos(\omega t) \end{pmatrix}
$$

This is precisely the Bloch vector precessing in the $y$–$z$ plane, as expected for a Hamiltonian proportional to $\sigma_x$.

---

## 3.4 Symbolic & Numerical Python Implementation

```python
"""
density_matrix_toolkit.py
A complete reference implementation for KTU Module 2 - Density Matrix concepts.
Author: KTU Quantum Computing Lab (PECST638)
"""

import numpy as np
from numpy.linalg import eigvalsh, matrix_rank
from typing import Tuple, List


def is_valid_density_matrix(rho: np.ndarray, tol: float = 1e-9) -> Tuple[bool, List[str]]:
    """
    Validate the four axiomatic properties of a density matrix.
    Returns (is_valid, list_of_violated_conditions).
    """
    violations = []

    # 1. Hermiticity
    if not np.allclose(rho, rho.conj().T, atol=tol):
        violations.append("NOT Hermitian")

    # 2. Positive semi-definiteness (eigenvalues >= 0)
    eigenvalues = eigvalsh(rho)
    if np.any(eigenvalues < -tol):
        violations.append(f"NOT positive semi-definite (min eig = {eigenvalues.min():.2e})")

    # 3. Unit trace
    tr = np.trace(rho)
    if not np.isclose(tr, 1.0, atol=tol):
        violations.append(f"Trace = {tr:.6f}, not 1")

    # 4. Square shape (square matrix check)
    if rho.ndim != 2 or rho.shape[0] != rho.shape[1]:
        violations.append("Not a square matrix")

    return (len(violations) == 0, violations)


def purity(rho: np.ndarray) -> float:
    """Compute purity Tr(rho^2). Returns 1.0 for pure, <1 for mixed."""
    return float(np.real(np.trace(rho @ rho)))


def state_vector_to_density(psi: np.ndarray) -> np.ndarray:
    """Convert a state vector |psi> to its density matrix |psi><psi|."""
    psi = psi.reshape(-1, 1)              # column vector
    return psi @ psi.conj().T              # outer product


def partial_trace(rho_AB: np.ndarray, dim_A: int, dim_B: int, subsystem: str = 'B') -> np.ndarray:
    """
    Compute the reduced density matrix by tracing out one subsystem.
    rho_AB must be ordered as the tensor product (subsystem A first, then B).
    """
    # Reshape the 2D matrix into a 4D tensor (A, B, A, B)
    rho_tensor = rho_AB.reshape(dim_A, dim_B, dim_A, dim_B)

    if subsystem.upper() == 'B':
        # Sum over the second index of rho_AB (i.e., index 1 of the tensor)
        rho_A = np.einsum('ijkj->ik', rho_tensor)
    elif subsystem.upper() == 'A':
        # Sum over the first index of rho_AB
        rho_B = np.einsum('ijki->jk', rho_tensor)
        return rho_B
    else:
        raise ValueError("subsystem must be 'A' or 'B'")

    return rho_A


def time_evolve(rho_0: np.ndarray, H: np.ndarray, t: float, hbar: float = 1.0) -> np.ndarray:
    """Time evolution under a time-independent Hamiltonian."""
    U = np.linalg.matrix_power(
        __import__('scipy.linalg', fromlist=['expm']).expm(-1j * H * t / hbar), 1
    )
    return U @ rho_0 @ U.conj().T


# ------------------ DEMO ------------------
if __name__ == "__main__":
    # Example 1: Pure |+> state
    plus = np.array([1, 1]) / np.sqrt(2)
    rho_plus = state_vector_to_density(plus)
    valid, issues = is_valid_density_matrix(rho_plus)
    print(f"|+><+| valid? {valid}, purity = {purity(rho_plus):.4f}")

    # Example 2: Bell state reduced density matrix
    phi_plus = np.array([1, 0, 0, 1]) / np.sqrt(2)
    rho_bell = state_vector_to_density(phi_plus)
    rho_A = partial_trace(rho_bell, dim_A=2, dim_B=2, subsystem='B')
    print(f"rho_A (Bell |Phi+>) = \n{rho_A}")
    print(f"  -> purity of subsystem A = {purity(rho_A):.4f}  (mixed => entangled)")
```

> [!NOTE]
> **Output Verification:** Running the script yields `purity(rho_A) = 0.5000` for the Bell state, confirming the analytical result from Section 3.2.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->

# Structural Diagrams & Schematics

## 4.1 The State Description Hierarchy (Flow Diagram)

```mermaid
flowchart TD
    QSE[Quantum System]:::sys --> Q1{Is the preparation<br>fully known?}:::dec
    Q1 -- Yes --> PUR[Pure State]:::pure
    Q1 -- No --> MIX[Statistical Mixture]:::mix

    PUR --> RP1[rho = vert psi rangle langle psi vert]:::eq
    RP1 --> CHK1[Tr rho squared = 1]:::check
    CHK1 --> BS1[Bloch Sphere Surface]:::geo

    MIX --> RP2[rho = sum p_i vert psi_i rangle langle psi_i vert]:::eq
    RP2 --> CHK2[Tr rho squared less than 1]:::check
    CHK2 --> BS2[Bloch Ball Interior]:::geo

    MIX --> MMX[Maximally Mixed: rho = I over d]:::mmix
    MMX --> BS3[Bloch Ball Center]:::geo

    PUR --> ENT{Is the system part<br>of a larger pure state?}:::dec
    ENT -- Yes --> RDM[Reduced Density Matrix<br>via Partial Trace]:::rdm
    RDM --> ENTSIG[Signature of Entanglement]:::ent
    ENT -- No --> ISO[Isolated Pure Subsystem]:::iso

    classDef sys fill:#1e3a8a,color:#ffffff,stroke:#1e3a8a
    classDef dec fill:#fde68a,color:#111827,stroke:#b45309
    classDef pure fill:#bbf7d0,color:#065f46,stroke:#16a34a
    classDef mix fill:#fecaca,color:#7f1d1d,stroke:#dc2626
    classDef eq fill:#e0e7ff,color:#1e3a8a,stroke:#4338ca
    classDef check fill:#fef3c7,color:#78350f,stroke:#ca8a04
    classDef geo fill:#cffafe,color:#155e75,stroke:#0891b2
    classDef mmix fill:#e5e7eb,color:#111827,stroke:#4b5563
    classDef rdm fill:#ddd6fe,color:#4c1d95,stroke:#7c3aed
    classDef ent fill:#fbcfe8,color:#831843,stroke:#db2777
    classDef iso fill:#c7d2fe,color:#312e81,stroke:#4f46e5
```

## 4.2 Operational Block Diagram: How to Use the Density Matrix Toolkit

```mermaid
flowchart LR
    INPUT[Input: System<br>Preparation Description]:::in
    ENCODE{Type of state?}:::dec
    ENCODE -- Pure state vector --> CONV1[Convert: rho = vert psi rangle langle psi vert]:::proc
    ENCODE -- Ensemble p_i, vert psi_i rangle --> CONV2[Compute: rho = sum p_i rho_i]:::proc

    CONV1 --> VALID[Validate 4 Properties]:::val
    CONV2 --> VALID

    VALID --> FAIL{Violations<br>found?}:::dec
    FAIL -- Yes --> FIX[Debug: Check probabilities<br>and Hermiticity]:::err
    FAIL -- No --> OK[Valid Density Matrix]:::ok

    OK --> APP1[Compute Expectation Values:<br>langle A rangle = Tr rho A]:::app
    OK --> APP2[Compute Purity:<br>Tr rho squared]:::app
    OK --> APP3[Compute Reduced States:<br>rho_A = Tr_B rho_AB]:::app
    OK --> APP4[Time Evolve:<br>rho t = U rho U dagger]:::app

    classDef in fill:#1d4ed8,color:#ffffff,stroke:#1e3a8a
    classDef dec fill:#fef3c7,color:#78350f,stroke:#ca8a04
    classDef proc fill:#dbeafe,color:#1e3a8a,stroke:#2563eb
    classDef val fill:#ede9fe,color:#5b21b6,stroke:#7c3aed
    classDef err fill:#fee2e2,color:#7f1d1d,stroke:#dc2626
    classDef ok fill:#d1fae5,color:#065f46,stroke:#10b981
    classDef app fill:#cffafe,color:#155e75,stroke:#0891b2
```

## 4.3 Sequential Processing Topology: Density Matrix from Experimental Data

```mermaid
flowchart TD
    S1[Stage 1: Prepare N identical copies<br>of the quantum state]:::stage
    S2[Stage 2: Choose measurement basis<br>sigma_x, sigma_y, sigma_z]:::stage
    S3[Stage 3: Collect statistics<br>to estimate Bloch components]:::stage
    S4[Stage 4: Assemble density matrix<br>rho = 1/2 I + r dot sigma]:::stage
    S5[Stage 5: Quantum state tomography complete]:::stage

    S1 --> S2 --> S3 --> S4 --> S5

    classDef stage fill:#e0e7ff,color:#1e3a8a,stroke:#4338ca
```

## 4.4 Comparison Matrix: Pure State vs Mixed State vs Reduced State

```mermaid
flowchart TB
    subgraph PR[Pure State Description]
        P1[State: single vector vert psi rangle]:::a
        P2[Matrix: rho = vert psi rangle langle psi vert]:::a
        P3[Rank: 1]:::a
        P4[Purity: 1]:::a
    end

    subgraph MX[Mixed State Description]
        M1[State: ensemble p_i, vert psi_i rangle]:::b
        M2[Matrix: rho = sum p_i rho_i]:::b
        M3[Rank: greater than 1]:::b
        M4[Purity: less than 1]:::b
    end

    subgraph RD[Reduced State from Entanglement]
        R1[State: subsystem of a larger pure system]:::c
        R2[Matrix: rho_A = Tr_B rho_AB]:::c
        R3[Signature: subsystem mixed<br>despite joint pure]:::c
        R4[Purity: less than 1]:::c
    end

    classDef a fill:#bbf7d0,color:#065f46,stroke:#16a34a
    classDef b fill:#fde68a,color:#78350f,stroke:#ca8a04
    classDef c fill:#fbcfe8,color:#831843,stroke:#db2777
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->

# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A: Short-Answer Questions (3 Marks Each)

> [!NOTE]
> **Cognitive Levels:** Remember / Understand | **Course Outcomes:** CO1, CO2

### Q1. `[KTU University Exam – July 2024]` **(3 Marks)**

**Question:** Define the density matrix of a quantum system. List the four properties a valid density matrix must satisfy.

**Model Answer:**

> The **density matrix** $\rho$ of a quantum system is a positive semi-definite, Hermitian, unit-trace operator that completely characterizes the quantum state of the system, including both pure states and statistical mixtures.
>
> For an ensemble $\{(p_i, \vert \psi_i \rangle)\}$:
>
> $$\rho \;=\; \sum_{i} p_i \, \vert \psi_i \rangle \langle \psi_i \vert$$
>
> **Four required properties:**
> 1. **Hermiticity:** $\rho^\dagger = \rho$
> 2. **Positive semi-definiteness:** $\langle \phi \vert \rho \vert \phi \rangle \ge 0$ for all $\vert \phi \rangle$
> 3. **Unit trace:** $\mathrm{Tr}(\rho) = 1$
> 4. **Bounded purity:** $0 < \mathrm{Tr}(\rho^2) \le 1$

---

### Q2. `[KTU University Exam – Dec 2023]` **(3 Marks)**

**Question:** What is the **partial trace** operation? Why is it important in quantum information theory?

**Model Answer:**

> The **partial trace** is the operation used to obtain the reduced density matrix of a subsystem when the full joint state is known. For a bipartite system $\mathcal{H}_A \otimes \mathcal{H}_B$:
>
> $$\rho_A \;=\; \mathrm{Tr}_B(\rho_{AB}) \;=\; \sum_{j} \bigl(\mathbb{I}_A \otimes \langle j \vert_B\bigr)\,\rho_{AB}\,\bigl(\mathbb{I}_A \otimes \vert j \rangle_B\bigr)$$
>
> **Importance:**
> * It enables the description of **subsystem dynamics** in composite quantum systems.
> * It provides a **mathematical witness of entanglement**: if $\rho_{AB}$ is pure but $\rho_A$ is mixed, then $A$ and $B$ are entangled.
> * It is the foundational tool for analyzing **open quantum systems** and tracing out environmental degrees of freedom.

---

## 5.2 Part B: Full-Question (14 Marks) with Internal Choice

> [!NOTE]
> **Cognitive Levels:** Apply / Analyze | **Course Outcomes:** CO2, CO3

---

### **Question A** `(14 Marks)` — `[KTU University Exam – July 2024 Model Paper]`

#### Part (a) — 7 Marks

**Compute** the density matrix of the pure state $\vert \psi \rangle = \alpha \vert 0 \rangle + \beta \vert 1 \rangle$ where $\alpha, \beta \in \mathbb{C}$ are normalized such that $\vert \alpha \vert^2 + \vert \beta \vert^2 = 1$. **Verify** Hermiticity, unit trace, and the condition for purity.

**Model Solution:**

**Step 1 — Outer Product Expansion** `[3 Marks]`

The state vector in the computational basis is $\vert \psi \rangle = \begin{pmatrix} \alpha \\ \beta \end{pmatrix}$. The density matrix is the outer product:

$$
\rho \;=\; \vert \psi \rangle \langle \psi \vert \;=\; \begin{pmatrix} \alpha \\ \beta \end{pmatrix} \begin{pmatrix} \alpha^* & \beta^* \end{pmatrix} \;=\; \begin{pmatrix} \vert \alpha \vert^2 & \alpha \beta^* \\ \alpha^* \beta & \vert \beta \vert^2 \end{pmatrix}
$$

**Step 2 — Hermiticity Verification** `[2 Marks]`

$$
\rho^\dagger \;=\; \begin{pmatrix} \vert \alpha \vert^2 & \alpha \beta^* \\ \alpha^* \beta & \vert \beta \vert^2 \end{pmatrix}^\dagger \;=\; \begin{pmatrix} \vert \alpha \vert^2 & (\alpha^* \beta)^* \\ (\alpha \beta^*)^* & \vert \beta \vert^2 \end{pmatrix} \;=\; \begin{pmatrix} \vert \alpha \vert^2 & \alpha \beta^* \\ \alpha^* \beta & \vert \beta \vert^2 \end{pmatrix} \;=\; \rho \quad\checkmark
$$

**Step 3 — Unit Trace Verification** `[1 Mark]`

$$
\mathrm{Tr}(\rho) \;=\; \vert \alpha \vert^2 + \vert \beta \vert^2 \;=\; 1 \quad\checkmark
$$

**Step 4 — Purity Check** `[1 Mark]`

$$
\mathrm{Tr}(\rho^2) \;=\; (\vert \alpha \vert^2)^2 + \vert \alpha \beta^* \vert^2 + \vert \alpha^* \beta \vert^2 + (\vert \beta \vert^2)^2
$$

$$
=\; \vert \alpha \vert^4 + 2\vert \alpha \vert^2 \vert \beta \vert^2 + \vert \beta \vert^4 \;=\; (\vert \alpha \vert^2 + \vert \beta \vert^2)^2 \;=\; 1 \quad\checkmark
$$

Since $\mathrm{Tr}(\rho^2) = 1$, the state is **pure** — as expected. `[Final expression: 1 Mark]`

---

#### Part (b) — 7 Marks

**Consider** the statistical mixture: the system is in $\vert 0 \rangle$ with probability $2/3$ and in $\vert 1 \rangle$ with probability $1/3$. **Construct** the density matrix and **compare** it (using the Bloch vector) with the pure superposition state $\vert + \rangle$.

**Model Solution:**

**Step 1 — Mixture Density Matrix** `[3 Marks]`

$$
\rho_{\text{mix}} \;=\; \tfrac{2}{3}\vert 0\rangle\langle 0\vert + \tfrac{1}{3}\vert 1\rangle\langle 1\vert \;=\; \tfrac{2}{3}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \tfrac{1}{3}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \;=\; \begin{pmatrix} 2/3 & 0 \\ 0 & 1/3 \end{pmatrix}
$$

**Step 2 — Bloch Vector Identification** `[2 Marks]`

For a general qubit density matrix $\rho = \tfrac{1}{2}(\mathbb{I} + r_x\sigma_x + r_y\sigma_y + r_z\sigma_z)$, equating components:

$$
\begin{pmatrix} 2/3 & 0 \\ 0 & 1/3 \end{pmatrix} \;=\; \tfrac{1}{2}\begin{pmatrix} 1 + r_z & r_x - i r_y \\ r_x + i r_y & 1 - r_z \end{pmatrix}
$$

So $r_x = 0$, $r_y = 0$, $1 + r_z = 4/3 \Rightarrow r_z = 1/3$. Thus $\vec{r}_{\text{mix}} = (0, 0, 1/3)$. `[Bloch vector: 2 Marks]`

**Step 3 — Comparison with $\vert + \rangle$** `[2 Marks]`

For $\vert + \rangle$, the Bloch vector is $\vec{r}_{+} = (1, 0, 0)$ with magnitude $\Vert \vec{r}_{+} \Vert = 1$ (pure). For the mixture, $\Vert \vec{r}_{\text{mix}} \Vert = 1/3 < 1$ (mixed). **Crucially**, both states yield identical measurement statistics in the computational basis — but only $\vert + \rangle$ shows interference in the $X$-basis. The mixture's Bloch vector is shorter and points along $+z$, not along $+x$. `[Comparison: 2 Marks]`

---

### **Question B** `(14 Marks)` — Alternative Choice

#### Part (a) — 7 Marks

**Derive** the density matrix of the Bell state $\vert \Phi^+ \rangle$ and **compute** the reduced density matrix of the first qubit by taking the partial trace over the second qubit. **Identify** the physical significance of the result.

**Model Solution:**

**Step 1 — Bell State Density Matrix** `[3 Marks]`

The Bell state is $\vert \Phi^+ \rangle = \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle) = \tfrac{1}{\sqrt{2}}(1, 0, 0, 1)^T$:

$$
\rho_{AB} \;=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}
$$

**Step 2 — Partial Trace Execution** `[3 Marks]`

Tracing over the second qubit $B$:

$$
\rho_A \;=\; \langle 0 \vert_B \rho_{AB} \vert 0 \rangle_B + \langle 1 \vert_B \rho_{AB} \vert 1 \rangle_B \;=\; \tfrac{1}{2}\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \tfrac{1}{2}\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \;=\; \tfrac{1}{2}\mathbb{I}
$$

**Step 3 — Physical Significance** `[1 Mark]`

The reduced state is the maximally mixed state ($\mathrm{Tr}(\rho_A^2) = 1/2 < 1$), even though the joint state is pure. This is the **hallmark signature of maximal entanglement** between the two qubits. `[Entanglement signature: 1 Mark]`

---

#### Part (b) — 7 Marks

**A qubit** starts in the pure state $\vert \psi(0) \rangle = \cos(\theta/2)\vert 0 \rangle + e^{i\phi}\sin(\theta/2)\vert 1 \rangle$ and evolves under the Hamiltonian $H = \tfrac{\hbar\omega}{2}\sigma_z$. **Derive** $\rho(t)$ and identify the trajectory traced by the Bloch vector.

**Model Solution:**

**Step 1 — Initial Density Matrix** `[2 Marks]`

$$
\rho(0) \;=\; \begin{pmatrix} \cos^2(\theta/2) & \cos(\theta/2)\sin(\theta/2)e^{-i\phi} \\ \cos(\theta/2)\sin(\theta/2)e^{i\phi} & \sin^2(\theta/2) \end{pmatrix}
$$

**Step 2 — Unitary Evolution** `[3 Marks]`

For $H = \tfrac{\hbar\omega}{2}\sigma_z$, the evolution operator is $U(t) = e^{-i\omega t\sigma_z/2} = \mathrm{diag}(e^{-i\omega t/2}, e^{i\omega t/2})$:

$$
\rho(t) \;=\; U(t)\,\rho(0)\,U^\dagger(t) \;=\; \begin{pmatrix} \cos^2(\theta/2) & \cos(\theta/2)\sin(\theta/2)e^{-i(\phi + \omega t)} \\ \cos(\theta/2)\sin(\theta/2)e^{i(\phi + \omega t)} & \sin^2(\theta/2) \end{pmatrix}
$$

**Step 3 — Bloch Vector Trajectory** `[2 Marks]`

Reading off the Bloch components: $r_x = \sin\theta\cos(\phi + \omega t)$, $r_y = \sin\theta\sin(\phi + \omega t)$, $r_z = \cos\theta$. The Bloch vector **precesses** in a circle of radius $\sin\theta$ at constant latitude $\cos\theta$ on the Bloch sphere — completing one full revolution every $T = 2\pi/\omega$. `[Trajectory: 2 Marks]`

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls:**
> * **Confusing ensemble mixture with superposition.** A common error is to write the density matrix of a mixed state $\tfrac{1}{2}\vert 0\rangle\langle 0\vert + \tfrac{1}{2}\vert 1\rangle\langle 1\vert$ as a *coherent* superposition. Always check whether the *off-diagonal* elements (coherences) are zero or non-zero.
> * **Forgetting the basis convention in partial trace.** The ordering $\{\vert 00\rangle, \vert 01\rangle, \vert 10\rangle, \vert 11\rangle\}$ is *standard* but not universal. Mis-ordering leads to a wrong (yet still valid) reduced matrix — a frequent cause of lost marks.
> * **Skipping the four-property validation.** KTU examiners explicitly award 1–2 marks for showing $\rho = \rho^\dagger$, $\mathrm{Tr}(\rho) = 1$, and $\rho \ge 0$. Skipping this step forfeits easy credit.
> * **Failing to interpret purity.** A state with $\mathrm{Tr}(\rho^2) < 1$ is *mixed*; some students leave the value uninterpreted. Always state the physical meaning.
> * **Confusing $\rho$ with a state vector.** $\rho$ is an *operator*, not a *vector*. Do not normalize it like a ket.

---

## 5.3 Topic Recap & Important Things to Remember

- **Definition:** The density matrix $\rho = \sum_i p_i \vert \psi_i \rangle \langle \psi_i \vert$ generalizes the state vector to include statistical mixtures.
- **Four Axioms:** Hermitian, positive semi-definite, unit trace, and bounded purity.
- **Purity Criterion:** $\mathrm{Tr}(\rho^2) = 1$ for pure, $< 1$ for mixed.
- **Expectation Value:** $\langle A \rangle = \mathrm{Tr}(\rho A)$ — the universal formula.
- **Bloch Form (Qubit):** $\rho = \tfrac{1}{2}(\mathbb{I} + \vec{r}\cdot\vec{\sigma})$ with $\Vert \vec{r}\Vert \le 1$.
- **Bloch Geometry:** Pure states live on the sphere surface; mixed states inside; maximally mixed at the center.
- **Time Evolution:** Liouville–von Neumann equation $\dot{\rho} = -\tfrac{i}{\hbar}[\rho, H]$, with solution $\rho(t) = U(t)\rho(0)U^\dagger(t)$.
- **Partial Trace:** The unique operation yielding a valid reduced state $\rho_A = \mathrm{Tr}_B(\rho_{AB})$.
- **Entanglement Witness:** $\rho_{AB}$ pure but $\rho_A$ mixed $\Rightarrow$ $A$ and $B$ are entangled.
- **Maximally Mixed State:** $\rho = \mathbb{I}/d$ — the state of maximum classical uncertainty.
- **Maximally Mixed Qubit:** $\rho = \tfrac{1}{2}\mathbb{I}$ with Bloch vector $\vec{0}$.
- **Purification:** Every mixed $\rho_A$ can be embedded in some pure $\vert \Psi \rangle_{AE}$ on a larger Hilbert space.
- **Computational Pitfall:** $\rho$ is an operator (matrix), not a ket (vector). Treat it as a $2^n \times 2^n$ array.
- **Diagonal Dominance:** For a diagonal $\rho$, entries are classical probabilities; off-diagonal entries represent quantum coherences.
- **Channel Action on $\rho$:** Any physical (CPTP) quantum channel maps a valid $\rho$ to another valid $\rho$ — useful for noise modeling.
- **Numerical Tool:** `numpy.einsum('ijkj->ik', rho_tensor)` is the most efficient way to compute the partial trace in Python.

<!-- SECTION_5_END -->
