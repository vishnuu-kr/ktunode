# Multiple qubit states

<!-- SECTION_1_START -->
# Multiple Qubit States

## Formal Definition

In quantum computing, a **multiple qubit state** is a quantum state describing a composite quantum system of $n$ qubits. The state lives in a **Hilbert space** that is the **tensor product** of the individual qubit Hilbert spaces:

$$
\mathcal{H}_{n} \;=\; \bigotimes_{i=1}^{n} \mathcal{H}_{i}
$$

A pure state of $n$ qubits is therefore a unit vector in a $2^{n}$-dimensional complex vector space, expressible as:

$$
\vert \psi \rangle \;=\; \sum_{x \in \{0,1\}^{n}} c_{x} \, \vert x \rangle, \qquad \sum_{x} \vert c_{x} \vert^{2} \;=\; 1
$$

where each $x$ is an $n$-bit classical string, $c_{x} \in \mathbb{C}$ are the probability amplitudes, and $\lvert x \rangle$ is the corresponding **computational basis state**.

> [!IMPORTANT]
> **KTU Syllabus Highlight (Module 2):** The single-qubit Bloch sphere intuition does **not** scale to multiple qubits. The dimension of the state space grows **exponentially** as $2^{n}$, which is the source of quantum computational power and also of the simulation challenge (e.g., simulating 50 qubits already exceeds classical RAM of $\sim 16$ PB).

## Conceptual Analogy / Intuition

Imagine you have **two coins**, but instead of being classically heads-or-tails, each coin is in a quantum superposition. Now consider the joint state of the pair of coins:

* **Classical world (2 bits):** Only $2^{2} = 4$ joint configurations exist at any moment: HH, HT, TH, TT. You always observe one of them.
* **Quantum world (2 qubits):** All 4 outcomes can coexist simultaneously with complex amplitudes, producing **interference patterns** when measured.

A second, deeper analogy: think of two musicians playing two separate notes. The **tensor product** of the two notes is the combined "sound of the duo". If the musicians are playing in harmony (correlated), the joint sound cannot be decomposed back into independent contributions from each — this harmonic union is the musical analogue of an **entangled state**.

> [!NOTE]
> **Geometric Intuition (Desmos Visualization):**
> * 1 qubit = a point on the unit circle in $\mathbb{C}^{2}$ (Bloch sphere).
> * 2 qubits = a point in a **4-dimensional complex space** (visualize it as two coupled Bloch spheres).
> * $n$ qubits = a point on the unit sphere in $\mathbb{C}^{2^{n}}$ — not a Bloch sphere product, but a single, higher-dimensional complex projective space.

> [!VISUALIZATION CONTROL]
> **Concept:** Probability distribution of a 2-qubit superposition $\vert \psi \rangle = \tfrac{1}{2}\vert 00 \rangle + \tfrac{1}{2}\vert 01 \rangle + \tfrac{1}{2}\vert 10 \rangle + \tfrac{1}{2}\vert 11 \rangle$
> **GeoGebra / Desmos Input Equations:**
> * `BarChart({00, 01, 10, 11}, {1/4, 1/4, 1/4, 1/4})`
> **Visual Description:** A four-bar histogram with all bars of equal height $\tfrac{1}{4}$, indicating that each of the 4 computational basis states is observed with probability $\tfrac{1}{4}$.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 1. The Tensor Product of Two Qubits

Given $\vert a \rangle = \alpha_{0}\vert 0 \rangle + \alpha_{1}\vert 1 \rangle$ and $\vert b \rangle = \beta_{0}\vert 0 \rangle + \beta_{1}\vert 1 \rangle$, the **joint state** under the assumption of independence is:

$$
\vert a \rangle \otimes \vert b \rangle \;=\; (\alpha_{0}\vert 0 \rangle + \alpha_{1}\vert 1 \rangle) \otimes (\beta_{0}\vert 0 \rangle + \beta_{1}\vert 1 \rangle)
$$

Expanding distributively:

$$
= \alpha_{0}\beta_{0}\vert 00 \rangle \;+\; \alpha_{0}\beta_{1}\vert 01 \rangle \;+\; \alpha_{1}\beta_{0}\vert 10 \rangle \;+\; \alpha_{1}\beta_{1}\vert 11 \rangle
$$

> [!NOTE]
> **Key Takeaway:** The joint state of two independent qubits contains **4 amplitudes** (the product of the two single-qubit amplitude lists), matching the $2^{2}$ growth rule.

## 2. The Computational Basis for $n$ Qubits

For $n$ qubits, the computational basis is the set of all binary strings of length $n$:

$$
\mathcal{B}_{n} \;=\; \{\,\vert 0\ldots 0 \rangle, \vert 0\ldots 1 \rangle, \ldots, \vert 1\ldots 1 \rangle \,\}, \qquad \vert \mathcal{B}_{n} \vert \;=\; 2^{n}
$$

A general state is a linear combination of these basis vectors with complex coefficients.

## 3. Separable vs Entangled States

A 2-qubit state $\vert \psi \rangle$ is called **separable** (or a *product state*) if there exist single-qubit states $\vert a \rangle, \vert b \rangle$ such that:

$$
\vert \psi \rangle \;=\; \vert a \rangle \otimes \vert b \rangle
$$

If no such factorization exists, $\vert \psi \rangle$ is **entangled**. For 2 qubits, the simplest test is to write the amplitudes as a $2 \times 2$ matrix and check its **rank**:

$$
\vert \psi \rangle = M_{00}\vert 00 \rangle + M_{01}\vert 01 \rangle + M_{10}\vert 10 \rangle + M_{11}\vert 11 \rangle
\;\Longleftrightarrow\;
\Psi = \begin{pmatrix} M_{00} & M_{01} \\ M_{10} & M_{11} \end{pmatrix}
$$

* $\text{rank}(\Psi) = 1 \Rightarrow$ **separable**.
* $\text{rank}(\Psi) = 2 \Rightarrow$ **entangled**.

> [!IMPORTANT]
> **The four maximally entangled Bell states** form an orthonormal basis of the 2-qubit Hilbert space, often called the **Bell basis** or **EPR basis**:
> $$
> \begin{aligned}
> \vert \Phi^{+} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle) \\[2pt]
> \vert \Phi^{-} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 00 \rangle - \vert 11 \rangle) \\[2pt]
> \vert \Psi^{+} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 01 \rangle + \vert 10 \rangle) \\[2pt]
> \vert \Psi^{-} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 01 \rangle - \vert 10 \rangle)
> \end{aligned}
> $$
> None of these four states can be written as $\vert a \rangle \otimes \vert b \rangle$ — they are all entangled.

## 4. Real-World Engineering Utility

* **Quantum Teleportation:** Consumes one shared Bell pair $\vert \Phi^{+} \rangle$ plus 2 classical bits to teleport an arbitrary single-qubit state.
* **Superdense Coding:** Transmits 2 classical bits using only 1 qubit, by sharing a Bell pair in advance.
* **Quantum Key Distribution (BB84, E91):** The security of the E91 protocol relies on the monogamy of entanglement of the Bell state $\vert \Psi^{-} \rangle$.
* **Quantum Error Correction:** The Shor 9-qubit code and Steane 7-qubit code are constructed by entangling physical qubits across carefully designed stabilizers.

## KTU Formula Sheet

| Concept | Formula | Notes / Units |
|---|---|---|
| Hilbert space dimension of $n$ qubits | $\dim(\mathcal{H}_{n}) = 2^{n}$ | complex dimensions |
| Normalization condition | $\sum_{x} \vert c_{x} \vert^{2} = 1$ | dimensionless |
| Tensor product state amplitude | $c_{ab} = \alpha_{a} \beta_{b}$ | when $\vert \psi \rangle = \vert a \rangle \otimes \vert b \rangle$ |
| Probability of outcome $x$ | $P(x) = \vert \langle x \vert \psi \rangle \vert^{2}$ | Born rule |
| Bell state normalization | $\tfrac{1}{\sqrt{2}}$ per term | each term carries $\vert \tfrac{1}{\sqrt{2}} \vert^{2} = \tfrac{1}{2}$ |
| Schmidt rank separability test | $\text{rank}(\Psi) = 1$ | $2 \times 2$ coefficient matrix |
| Partial trace of qubit $B$ | $\rho_{A} = \text{Tr}_{B}(\rho_{AB})$ | produces reduced density operator |
| CNOT truth table | $\vert 00 \rangle \mapsto \vert 00 \rangle$, $\vert 01 \rangle \mapsto \vert 01 \rangle$, $\vert 10 \rangle \mapsto \vert 11 \rangle$, $\vert 11 \rangle \mapsto \vert 10 \rangle$ | control–target logic |
| Pure state entanglement entropy | $S = -\text{Tr}(\rho_{A} \log_{2} \rho_{A})$ | measured in **ebits** |

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations & Code Implementation

## Derivation 1: Tensor Product of Two Independent Qubits

Let $\vert \psi_{1} \rangle = \tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)$ and $\vert \psi_{2} \rangle = \vert 0 \rangle$. Compute $\vert \psi_{1} \rangle \otimes \vert \psi_{2} \rangle$:

$$
\begin{aligned}
\vert \psi_{1} \rangle \otimes \vert \psi_{2} \rangle
&= \left[\tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)\right] \otimes \vert 0 \rangle \\[4pt]
&= \tfrac{1}{\sqrt{2}} \vert 0 \rangle \otimes \vert 0 \rangle \;+\; \tfrac{1}{\sqrt{2}} \vert 1 \rangle \otimes \vert 0 \rangle \\[4pt]
&= \tfrac{1}{\sqrt{2}} \vert 00 \rangle \;+\; \tfrac{1}{\sqrt{2}} \vert 10 \rangle
\end{aligned}
$$

**Interpretation:** This is a product state. It can be factored back as $\vert \psi_{1} \rangle \otimes \vert 0 \rangle$ — hence **separable**.

## Derivation 2: Constructing the Bell State $\vert \Phi^{+} \rangle$ Using H and CNOT

**Step 1 — Start with the 2-qubit ground state:**

$$
\vert \psi_{0} \rangle = \vert 0 \rangle \otimes \vert 0 \rangle = \vert 00 \rangle
$$

**Step 2 — Apply the Hadamard gate $H$ on the first qubit** (creates superposition on qubit 1):

$$
H \otimes I \; \vert 00 \rangle
= \left[\tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)\right] \otimes \vert 0 \rangle
= \tfrac{1}{\sqrt{2}} \vert 00 \rangle + \tfrac{1}{\sqrt{2}} \vert 10 \rangle
$$

**Step 3 — Apply the CNOT gate** (qubit 1 = control, qubit 2 = target):

* $\vert 00 \rangle \xrightarrow{\text{CNOT}} \vert 00 \rangle$
* $\vert 10 \rangle \xrightarrow{\text{CNOT}} \vert 11 \rangle$

Therefore:

$$
\begin{aligned}
\text{CNOT}\left(\tfrac{1}{\sqrt{2}} \vert 00 \rangle + \tfrac{1}{\sqrt{2}} \vert 10 \rangle\right)
&= \tfrac{1}{\sqrt{2}} \vert 00 \rangle + \tfrac{1}{\sqrt{2}} \vert 11 \rangle \\[2pt]
&= \vert \Phi^{+} \rangle
\end{aligned}
$$

> [!NOTE]
> **Mark Distribution Tip (KTU Valuation):**
> * [Correctly applying $H \otimes I$: 3 Marks]
> * [Identifying CNOT truth table on $\vert 00 \rangle$ and $\vert 10 \rangle$: 2 Marks]
> * [Final normalized Bell state expression: 2 Marks]

## Derivation 3: Proving $\vert \Phi^{+} \rangle$ is Entangled (by Contradiction)

Assume, for contradiction, that $\vert \Phi^{+} \rangle$ is separable. Then there exist $\vert a \rangle = a_{0}\vert 0 \rangle + a_{1}\vert 1 \rangle$ and $\vert b \rangle = b_{0}\vert 0 \rangle + b_{1}\vert 1 \rangle$ such that:

$$
(a_{0}\vert 0 \rangle + a_{1}\vert 1 \rangle) \otimes (b_{0}\vert 0 \rangle + b_{1}\vert 1 \rangle) \;=\; \tfrac{1}{\sqrt{2}} \vert 00 \rangle + \tfrac{1}{\sqrt{2}} \vert 11 \rangle
$$

Expanding the LHS:

$$
a_{0}b_{0}\vert 00 \rangle + a_{0}b_{1}\vert 01 \rangle + a_{1}b_{0}\vert 10 \rangle + a_{1}b_{1}\vert 11 \rangle \;=\; \tfrac{1}{\sqrt{2}} \vert 00 \rangle + \tfrac{1}{\sqrt{2}} \vert 11 \rangle
$$

Comparing coefficients basis-by-basis:

$$
a_{0}b_{0} = \tfrac{1}{\sqrt{2}}, \quad a_{0}b_{1} = 0, \quad a_{1}b_{0} = 0, \quad a_{1}b_{1} = \tfrac{1}{\sqrt{2}}
$$

From the second equation, $a_{0}b_{1} = 0 \Rightarrow a_{0} = 0$ **or** $b_{1} = 0$.
From the third, $a_{1}b_{0} = 0 \Rightarrow a_{1} = 0$ **or** $b_{0} = 0$.

* If $a_{0} = 0$, then $a_{0}b_{0} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.
* If $a_{1} = 0$, then $a_{1}b_{1} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.
* If $b_{1} = 0$, then $a_{0}b_{1} = 0$ ✓, but also $a_{1}b_{1} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.
* If $b_{0} = 0$, then $a_{1}b_{0} = 0$ ✓, but also $a_{0}b_{0} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.

All four cases lead to a contradiction. $\therefore \vert \Phi^{+} \rangle$ is **entangled**. $\blacksquare$

## Derivation 4: Partial Measurement Collapses a Multi-Qubit State

Consider $\vert \psi \rangle = \tfrac{1}{\sqrt{3}} \vert 00 \rangle + \tfrac{\sqrt{2}}{\sqrt{3}} \vert 11 \rangle$. Measure the **first qubit** in the computational basis.

* **Outcome 0:** projector $P_{0} = \vert 0 \rangle\langle 0 \vert \otimes I$. Apply and renormalize:

$$
\begin{aligned}
P_{0}\vert \psi \rangle &= \tfrac{1}{\sqrt{3}} \vert 00 \rangle \\
\langle \psi \vert P_{0} \vert \psi \rangle &= \tfrac{1}{3} \\
\therefore \text{post-measurement state} &= \tfrac{1/\sqrt{3}}{\sqrt{1/3}} \vert 00 \rangle = \vert 00 \rangle
\end{aligned}
$$

Probability of this branch: $P(0) = \tfrac{1}{3}$.

* **Outcome 1:** projector $P_{1} = \vert 1 \rangle\langle 1 \vert \otimes I$. Apply and renormalize:

$$
\begin{aligned}
P_{1}\vert \psi \rangle &= \tfrac{\sqrt{2}}{\sqrt{3}} \vert 11 \rangle \\
\langle \psi \vert P_{1} \vert \psi \rangle &= \tfrac{2}{3} \\
\therefore \text{post-measurement state} &= \tfrac{\sqrt{2}/\sqrt{3}}{\sqrt{2/3}} \vert 11 \rangle = \vert 11 \rangle
\end{aligned}
$$

Probability of this branch: $P(1) = \tfrac{2}{3}$. **Sanity check:** $\tfrac{1}{3} + \tfrac{2}{3} = 1$ ✓.

## Python Code: Constructing & Verifying a Bell State in Qiskit

```python
# Bell state preparation and verification using Qiskit
from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector, DensityMatrix, partial_trace, entropy
from qiskit_aer import AerSimulator
import numpy as np

def build_bell_phi_plus() -> QuantumCircuit:
    """
    Construct the Bell state |Phi+> = (|00> + |11>)/sqrt(2).
    """
    qc = QuantumCircuit(2, name="BellPhiPlus")
    qc.h(0)            # Hadamard on qubit 0 -> (|0> + |1>)/sqrt(2) tensor |0>
    qc.cx(0, 1)        # CNOT with control=0, target=1
    return qc

def analyze_state(statevector: Statevector) -> None:
    """
    Print the statevector, the reduced density matrix of qubit 0,
    and the entanglement entropy of the bipartition.
    """
    rho_full = DensityMatrix(statevector)
    rho_0    = partial_trace(rho_full, [1])   # trace out qubit 1
    S        = entropy(rho_0, base=2)
    print("Statevector :", np.round(statevector.data, 4))
    print("rho_0       :\n", np.round(rho_0.data, 4))
    print(f"Entanglement entropy (qubit 0 reduced): {S:.6f} ebits")

if __name__ == "__main__":
    qc       = build_bell_phi_plus()
    sv       = Statevector.from_instruction(qc)
    analyze_state(sv)
    # Expected:
    # Statevector : [0.7071+0.j, 0.+0.j,    0.+0.j,    0.7071+0.j]
    # rho_0       : [[0.5+0.j, 0.+0.j], [0.+0.j, 0.5+0.j]]   (maximally mixed)
    # Entanglement entropy (qubit 0 reduced): 1.000000 ebits
```

**Verification Logic:**

* The printed statevector has nonzero entries only at indices corresponding to $\vert 00 \rangle$ and $\vert 11 \rangle$, each with magnitude $\tfrac{1}{\sqrt{2}} \approx 0.7071$.
* The reduced density matrix of either qubit is the maximally mixed state $\tfrac{I}{2}$.
* The von Neumann entropy of a maximally mixed qubit is exactly **1 ebit** — the hallmark of a maximally entangled Bell state.

## Python Code: Schmidt-Rank Test for Separability

```python
import numpy as np

def is_separable(two_qubit_state: np.ndarray) -> bool:
    """
    Determine if a 2-qubit pure state |psi> is separable via the
    Schmidt / coefficient-matrix rank test.
    Input: a 1-D complex numpy array of length 4 in the
           computational basis ordering [|00>, |01>, |10>, |11>].
    Output: True if separable, False if entangled.
    """
    if two_qubit_state.shape != (4,):
        raise ValueError("Input must be a length-4 complex vector.")
    nrm = np.linalg.norm(two_qubit_state)
    if not np.isclose(nrm, 1.0):
        raise ValueError("State must be normalized.")
    # Reshape into the 2x2 coefficient matrix
    psi_matrix = two_qubit_state.reshape(2, 2)
    return bool(np.linalg.matrix_rank(psi_matrix, tol=1e-9) == 1)

# Example 1: |Phi+> = (|00> + |11>)/sqrt(2)  ->  ENTANGLED
phi_plus = np.array([1, 0, 0, 1], dtype=complex) / np.sqrt(2)
print(is_separable(phi_plus))   # False

# Example 2: |+>|0> = (|00> + |10>)/sqrt(2)  ->  SEPARABLE
plus_zero = np.array([1, 0, 1, 0], dtype=complex) / np.sqrt(2)
print(is_separable(plus_zero))  # True
```

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## Diagram 1: Quantum Circuit for Bell State Preparation

```mermaid
flowchart LR
    classDef quantumWire fill:#1a1a2e,stroke:#00d4ff,stroke-width:2px,color:#ffffff
    classDef gate fill:#ff6b6b,stroke:#c0392b,stroke-width:2px,color:#ffffff
    classDef state fill:#2ecc71,stroke:#27ae60,stroke-width:2px,color:#ffffff

    q0_init[ "|0>" ]:::state
    q1_init[ "|0>" ]:::state

    q0_w1[ "qubit 0 wire" ]:::quantumWire
    q1_w1[ "qubit 1 wire" ]:::quantumWire

    H[ "H gate" ]:::gate
    CNOT[ "CNOT control=0 target=1" ]:::gate

    q0_m[ "measure 0" ]:::state
    q1_m[ "measure 1" ]:::state

    q0_out[ "|0> or |1>" ]:::state
    q1_out[ "|0> or |1>" ]:::state

    q0_init --> q0_w1
    q1_init --> q1_w1

    q0_w1 --> H
    H  --> CNOT
    q1_w1 --> CNOT

    CNOT --> q0_m
    CNOT --> q1_m

    q0_m --> q0_out
    q1_m --> q1_out
```

## Diagram 2: State Evolution Flowchart for $\vert \Phi^{+} \rangle$ Construction

```mermaid
flowchart TD
    classDef stepNode fill:#3498db,stroke:#2c3e50,color:#ffffff,stroke-width:2px
    classDef entNode fill:#e74c3c,stroke:#c0392b,color:#ffffff,stroke-width:2px

    S0[ "Step 0: |00>" ]:::stepNode
    S1[ "Step 1: H on qubit 0\n (|00> + |10>) / sqrt(2)" ]:::stepNode
    S2[ "Step 2: CNOT(0->1)\n (|00> + |11>) / sqrt(2)" ]:::entNode
    S3[ "Bell state |Phi+> created\n ENTANGLED" ]:::entNode

    S0 -->|"H tensor I"| S1
    S1 -->|"CNOT"| S2
    S2 -->|"Measure"| S3
```

## Diagram 3: Multi-Qubit System Architecture (Processing Topology)

```mermaid
flowchart TB
    classDef subsystem fill:#9b59b6,stroke:#5e3370,color:#ffffff,stroke-width:2px
    classDef bus fill:#16a085,stroke:#0e6655,color:#ffffff,stroke-width:2px
    classDef output fill:#f39c12,stroke:#d68910,color:#ffffff,stroke-width:2px

    subgraph Q0[ "Subsystem Q0 (qubit 0)" ]
        q0a[ "Computational basis: |0>, |1>" ]:::subsystem
        q0b[ "Bloch vector on S^2" ]:::subsystem
    end

    subgraph Q1[ "Subsystem Q1 (qubit 1)" ]
        q1a[ "Computational basis: |0>, |1>" ]:::subsystem
        q1b[ "Bloch vector on S^2" ]:::subsystem
    end

    J[ "Tensor product bus H0 (x) H1\n dim = 2 x 2 = 4" ]:::bus

    R[ "Composite system state |psi> in C^4" ]:::output
    M[ "Measurement apparatus\n Born rule sampling" ]:::output

    Q0 --> J
    Q1 --> J
    J  --> R
    R  --> M
```

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank

## Part A Questions (3 Marks Each)

### Q1. Define a product state and an entangled state for a 2-qubit system. Give one example of each. `[KTU University Exam – Dec 2023]`
**CO:** CO1 &nbsp; **RBT Level:** Remember

**Model Answer:**
A 2-qubit state $\vert \psi \rangle \in \mathcal{H}_{A} \otimes \mathcal{H}_{B}$ is called a **product (separable) state** if there exist single-qubit states $\vert a \rangle, \vert b \rangle$ such that $\vert \psi \rangle = \vert a \rangle \otimes \vert b \rangle$. If no such factorization exists, the state is called **entangled**.

* Example of a product state: $\vert 0 \rangle \otimes \vert 1 \rangle = \vert 01 \rangle$.
* Example of an entangled state: $\vert \Phi^{+} \rangle = \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle)$.

### Q2. Write the four Bell states in Dirac notation and state one common application. `[KTU University Exam – July 2024]`
**CO:** CO1 &nbsp; **RBT Level:** Remember

**Model Answer:**
The four Bell states (maximally entangled 2-qubit states) are:

$$
\begin{aligned}
\vert \Phi^{+} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle) \\
\vert \Phi^{-} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 00 \rangle - \vert 11 \rangle) \\
\vert \Psi^{+} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 01 \rangle + \vert 10 \rangle) \\
\vert \Psi^{-} \rangle &= \tfrac{1}{\sqrt{2}}(\vert 01 \rangle - \vert 10 \rangle)
\end{aligned}
$$

**Application:** Used as the shared resource in **quantum teleportation** (consuming one Bell pair plus 2 classical bits to transmit an unknown single-qubit state).

---

## Part B Questions (14 Marks Each)

> [!NOTE]
> *As per KTU ESE regulation, Module-2 questions carry an internal choice. Both alternatives are solved below.*

### Question A (14 Marks) `[KTU University Exam – July 2024]`

**(a)** For a 2-qubit system with qubits $\vert \psi_{1} \rangle = \tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)$ and $\vert \psi_{2} \rangle = \tfrac{1}{\sqrt{2}}(\vert 0 \rangle - \vert 1 \rangle)$, write the joint state $\vert \psi_{1} \rangle \otimes \vert \psi_{2} \rangle$ as a superposition in the computational basis. **(7 Marks)**
**CO:** CO2 &nbsp; **RBT Level:** Apply

**(b)** Show, by explicit construction, that the state $\tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle)$ cannot be written as a product of two single-qubit states. Hence conclude that it is entangled. **(7 Marks)**
**CO:** CO3 &nbsp; **RBT Level:** Analyze

**Model Solution:**

**(a)** Joint state via tensor product:

$$
\begin{aligned}
\vert \psi_{1} \rangle \otimes \vert \psi_{2} \rangle
&= \left[\tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle)\right] \otimes \left[\tfrac{1}{\sqrt{2}}(\vert 0 \rangle - \vert 1 \rangle)\right] \\
&= \tfrac{1}{2}\left(\vert 0 \rangle \otimes \vert 0 \rangle - \vert 0 \rangle \otimes \vert 1 \rangle + \vert 1 \rangle \otimes \vert 0 \rangle - \vert 1 \rangle \otimes \vert 1 \rangle\right) \\
&= \tfrac{1}{2} \vert 00 \rangle - \tfrac{1}{2} \vert 01 \rangle + \tfrac{1}{2} \vert 10 \rangle - \tfrac{1}{2} \vert 11 \rangle
\end{aligned}
$$

*[Distributive expansion: 3 Marks]*
*[Final normalized expression: 2 Marks]*
*[Probability normalization check $\sum \vert c \vert^{2} = 4 \cdot \tfrac{1}{4} = 1$: 2 Marks]*

**(b)** Assume the contrary: there exist complex scalars $a_{0}, a_{1}, b_{0}, b_{1}$ with $\vert a \vert^{2} = \vert b \vert^{2} = 1$ such that

$$
(a_{0}\vert 0 \rangle + a_{1}\vert 1 \rangle) \otimes (b_{0}\vert 0 \rangle + b_{1}\vert 1 \rangle) = \tfrac{1}{\sqrt{2}}\vert 00 \rangle + 0 \cdot \vert 01 \rangle + 0 \cdot \vert 10 \rangle + \tfrac{1}{\sqrt{2}} \vert 11 \rangle
$$

Expanding the LHS gives $a_{0}b_{0}\vert 00 \rangle + a_{0}b_{1}\vert 01 \rangle + a_{1}b_{0}\vert 10 \rangle + a_{1}b_{1}\vert 11 \rangle$.

Equating coefficients:

$$
a_{0}b_{0} = \tfrac{1}{\sqrt{2}}, \quad a_{0}b_{1} = 0, \quad a_{1}b_{0} = 0, \quad a_{1}b_{1} = \tfrac{1}{\sqrt{2}}
$$

From $a_{0}b_{1} = 0$: either $a_{0} = 0$ or $b_{1} = 0$.
* If $a_{0} = 0$, then $a_{0}b_{0} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.
* If $b_{1} = 0$, then $a_{1}b_{1} = 0 \ne \tfrac{1}{\sqrt{2}}$ — **contradiction**.

Both branches are impossible. Hence the assumption fails, and the state is **entangled**. $\blacksquare$

*[Setting up the contradiction system: 3 Marks]*
*[Case analysis with both branches: 3 Marks]*
*[Final entangled conclusion: 1 Mark]*

---

### Question B (14 Marks) `[KTU University Exam – Dec 2023]`

**(a)** Starting from $\vert 00 \rangle$, derive the circuit construction of the Bell state $\vert \Phi^{+} \rangle$ using a Hadamard and a CNOT gate. Show every intermediate state. **(7 Marks)**
**CO:** CO2 &nbsp; **RBT Level:** Apply

**(b)** For the state $\vert \psi \rangle = \tfrac{1}{\sqrt{3}}\vert 00 \rangle + \tfrac{\sqrt{2}}{\sqrt{3}}\vert 11 \rangle$, calculate the probability of measuring qubit 0 in the state $\vert 1 \rangle$ and determine the post-measurement state of the system. **(7 Marks)**
**CO:** CO3 &nbsp; **RBT Level:** Analyze

**Model Solution:**

**(a)** Derivation of $\vert \Phi^{+} \rangle$:

* **Step 1 — Initial state:** $\vert \psi_{0} \rangle = \vert 00 \rangle$. *[1 Mark]*

* **Step 2 — Apply $H \otimes I$ on qubit 0:**

$$
(H \otimes I)\vert 00 \rangle = \tfrac{1}{\sqrt{2}}(\vert 0 \rangle + \vert 1 \rangle) \otimes \vert 0 \rangle = \tfrac{1}{\sqrt{2}}\vert 00 \rangle + \tfrac{1}{\sqrt{2}}\vert 10 \rangle
$$

*[Correct application of $H$: 2 Marks]*

* **Step 3 — Apply CNOT(0 $\to$ 1):** Using the action $\vert 00 \rangle \mapsto \vert 00 \rangle$ and $\vert 10 \rangle \mapsto \vert 11 \rangle$:

$$
\text{CNOT}\left(\tfrac{1}{\sqrt{2}}\vert 00 \rangle + \tfrac{1}{\sqrt{2}}\vert 10 \rangle\right) = \tfrac{1}{\sqrt{2}}\vert 00 \rangle + \tfrac{1}{\sqrt{2}}\vert 11 \rangle = \vert \Phi^{+} \rangle
$$

*[CNOT truth table application: 2 Marks]*
*[Final $\vert \Phi^{+} \rangle$ expression: 2 Marks]*

**(b)** Measurement of qubit 0:

Projector for outcome 1 on qubit 0: $P_{1} = \vert 1 \rangle\langle 1 \vert \otimes I_{2}$.

$$
P_{1}\vert \psi \rangle = \tfrac{\sqrt{2}}{\sqrt{3}}\vert 11 \rangle
$$

**Probability of outcome 1:**

$$
P(1) = \langle \psi \vert P_{1} \vert \psi \rangle = \left\vert \tfrac{\sqrt{2}}{\sqrt{3}} \right\vert^{2} = \tfrac{2}{3}
$$

*[Setting up the projector and amplitude: 3 Marks]*
*[Final probability: 1 Mark]*

**Post-measurement state:** Normalize $P_{1}\vert \psi \rangle$ by $\sqrt{P(1)}$:

$$
\vert \psi' \rangle = \dfrac{P_{1}\vert \psi \rangle}{\sqrt{P(1)}} = \dfrac{\sqrt{2}/\sqrt{3}}{\sqrt{2/3}} \vert 11 \rangle = \vert 11 \rangle
$$

*[Normalization step: 2 Marks]*
*[Final post-measurement state: 1 Mark]*

> [!WARNING]
> **KTU Examiner's Pitfall Callout:**
> 1. **Forgetting normalization in tensor products** — coefficients multiply, so the joint state is *not* just a sum of basis kets with the original amplitudes. Always recompute $\sum \vert c \vert^{2} = 1$ after expansion.
> 2. **Mis-identifying which qubit is the control and which is the target** in CNOT — KTU examiners deduct 1–2 marks if you swap them without justification.
> 3. **Skipping the contradiction cases** in entanglement proofs — both branches must be enumerated; "obviously impossible" is not acceptable valuation language.
> 4. **Confusing the partial measurement probability** with the amplitude-squared of the wrong term — apply Born rule to the *projected* state, not the unprojected one.

---

## Topic Recap & Important Things to Remember

* **Hilbert space growth:** $n$ qubits $\Rightarrow$ $2^{n}$-dimensional complex Hilbert space; this is the source of quantum parallelism and the simulation bottleneck.
* **Tensor product of two qubits** is computed distributively: $(\alpha_{0}\vert 0 \rangle + \alpha_{1}\vert 1 \rangle) \otimes (\beta_{0}\vert 0 \rangle + \beta_{1}\vert 1 \rangle)$ yields **4 terms** with coefficients $\alpha_{i}\beta_{j}$.
* **Computational basis for $n$ qubits** has $2^{n}$ elements — one per binary string of length $n$.
* **Product state (separable):** $\vert \psi \rangle = \vert a \rangle \otimes \vert b \rangle$ — the two qubits carry independent information.
* **Entangled state:** cannot be factored into a product. Detected by **rank test** on the $2 \times 2$ coefficient matrix (rank > 1) or by a Schmidt-decomposition argument.
* **Four Bell states** ($\vert \Phi^{\pm} \rangle, \vert \Psi^{\pm} \rangle$) are the canonical maximally entangled 2-qubit states — each carries **1 ebit** of entanglement entropy.
* **Bell state preparation circuit:** $\vert 00 \rangle \xrightarrow{H \otimes I} \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 10 \rangle) \xrightarrow{\text{CNOT}} \tfrac{1}{\sqrt{2}}(\vert 00 \rangle + \vert 11 \rangle) = \vert \Phi^{+} \rangle$.
* **CNOT truth table** — control = first qubit, target = second qubit by KTU convention. Memorize: $\vert 00 \rangle \to \vert 00 \rangle$, $\vert 01 \rangle \to \vert 01 \rangle$, $\vert 10 \rangle \to \vert 11 \rangle$, $\vert 11 \rangle \to \vert 10 \rangle$.
* **Partial measurement** collapses only the measured qubit's state; the Born rule gives the probability, and the post-measurement state is the *normalized projection* of the original state.
* **Applications to remember:** quantum teleportation, superdense coding, E91 QKD, and quantum error correction all fundamentally rely on multi-qubit entanglement.
* **Exam formula stash:** $\dim(\mathcal{H}_{n}) = 2^{n}$, $P(x) = \vert \langle x \vert \psi \rangle \vert^{2}$, $S(\rho_{A}) = -\text{Tr}(\rho_{A} \log_{2} \rho_{A})$ ebits, $S_{\text{Bell}} = 1$ ebit.

<!-- SECTION_5_END -->
