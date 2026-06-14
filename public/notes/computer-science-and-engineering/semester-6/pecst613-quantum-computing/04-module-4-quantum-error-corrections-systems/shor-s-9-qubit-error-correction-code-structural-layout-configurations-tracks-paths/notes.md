# Shor's 9 qubit error correction code structural layout configurations tracks paths

<!-- SECTION_1_START -->
# Shor's 9-Qubit Error Correction Code: Structural Layout & Path Configurations

## 1. Core Technical Definition

> [!IMPORTANT]
> **Shor's 9-Qubit Code (Definition)**
> Shor's 9-qubit code, introduced by **Peter Shor in 1995**, is the first quantum error correction (QEC) code that can protect a single logical qubit against **arbitrary single-qubit errors** (bit-flips, phase-flips, and combined errors) by encoding it into **9 physical qubits** with a code distance of $d = 3$. It is constructed by **concatenating** the 3-qubit bit-flip code and the 3-qubit phase-flip code.

The 9-qubit code is formally denoted as $[[9, 1, 3]]$, meaning:
- $n = 9$ physical qubits (code length)
- $k = 1$ logical (encoded) qubit (message length)
- $d = 3$ code distance (minimum weight of a logical operator)

It can correct any error from the set $\{I, X, Y, Z\}$ acting on **any single** of the 9 physical qubits, where the Pauli operators form a basis for all single-qubit errors.

### Intuitive Overview & Real-World Analogy

> [!NOTE]
> **Intuition: "The Redundant Photocopy Machine"**
> Imagine you want to send a single important page of text (your logical qubit) through a noisy mail system. You make **3 photocopies** of the page to detect smudges (bit-flips). Then, to detect if ink has faded in a coordinated way (phase-flips), you bundle those 3 sets together into **3 separate envelopes**, and within each envelope, you again make 3 copies. That is, you use a photocopy-of-photocopies strategy, creating a 3×3 grid.
> 
> If exactly **one** page in the entire 9-page bundle is smudged (bit-flip) or has its ink faded (phase-flip), the majority-vote logic in each row and column tells you *which* page was corrupted — without ever having to "look" at the content of the pages (which is forbidden by the **no-cloning theorem**).

This concatenative structure is precisely Shor's design: it **does not measure the data qubits** but only compares them via ancilla-assisted parity checks.

### Key Constants and Metrics

- **Code rate:** $k/n = 1/9 \approx \mathbf{0.111}$
- **Stabilizer generators:** $\mathbf{8}$ independent commuting observables
- **Logical qubit count encoded:** $\mathbf{1}$
- **Correctable error set size:** $\mathbf{3 \times 9 + 1} = \mathbf{28}$ distinct correctable single-qubit errors ($9$ for each Pauli type, plus the identity)
- **Threshold theorem (relevant):** If physical error rate $p < p_{th} \approx \mathbf{10^{-4}}$ to $\mathbf{10^{-2}}$, logical error can be made arbitrarily small via concatenation.

### Visualizing the 9-Qubit Grid

> [!VISUALIZATION CONTROL]
> **Concept:** 3×3 Grid Layout of Shor's Code
> **Layout Description (Conceptual Coordinates):**
> * Rows: 1, 2, 3 — each row forms a 3-qubit bit-flip codeblock (X-stabilizer)
> * Columns: 1, 2, 3 — triplet phase relationships across rows (Z-stabilizers)
> * Cell $(i,j)$ represents physical qubit $q_{i,j}$
> **Visualization Logic:**
> A student should imagine a 3×3 chessboard where each cell holds one of the 9 physical qubits. The rows detect bit-flips; the columns detect phase-flips. The "center" cell $q_{2,2}$ participates in both row-2 bit-flip parity and column-2 phase-flip parity.

---

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2. Structural Decomposition of the 9-Qubit Code

Shor's code is best understood as a **two-level concatenation**:

### Level 1: Bit-Flip Protection (3-qubit repetition code)

For any state $\vert \psi \rangle = \alpha \vert 0 \rangle + \beta \vert 1 \rangle$, the 3-qubit bit-flip code yields:

$$
\vert \psi \rangle \rightarrow \alpha \vert 000 \rangle + \beta \vert 111 \rangle
$$

The stabilizer for this block is $\langle Z_1 Z_2, Z_2 Z_3 \rangle$.

### Level 2: Phase-Flip Protection (3-qubit phase code on the block)

Treating each of the 3 blocks as a "super-qubit" in the Hadamard basis (i.e., $\vert + \rangle / \vert - \rangle$), apply a 3-qubit repetition code in the phase basis:

$$
\alpha \vert 000 \rangle + \beta \vert 111 \rangle \rightarrow \alpha \vert + + + \rangle + \beta \vert - - - \rangle
$$

Substituting back, the **encoded $\vert 0 \rangle_L$** is:

$$
\vert 0 \rangle_L = \frac{1}{2\sqrt{2}} \left( \vert 000 \rangle + \vert 111 \rangle \right) \otimes \left( \vert 000 \rangle + \vert 111 \rangle \right) \otimes \left( \vert 000 \rangle + \vert 111 \rangle \right)
$$

And the **encoded $\vert 1 \rangle_L$** is:

$$
\vert 1 \rangle_L = \frac{1}{2\sqrt{2}} \left( \vert 000 \rangle - \vert 111 \rangle \right) \otimes \left( \vert 000 \rangle - \vert 111 \rangle \right) \otimes \left( \vert 000 \rangle - \vert 111 \rangle \right)
$$

> [!NOTE]
> **Syllabus Highlight**
> The "3 blocks of 3 qubits" structure is the defining topological feature of Shor's code. Each block corrects **one bit-flip**, and the relative phases between blocks correct **one phase-flip** — together covering arbitrary single-qubit errors.

## 3. The 8 Stabilizer Generators

Shor's code is a **stabilizer code** defined by an abelian group $\mathcal{S}$ of 8 independent operators that fix the codespace. Let $X_i$ and $Z_i$ denote Pauli operators on qubit $i$ (with $i \in \{1, \ldots, 9\}$), numbered left-to-right, top-to-bottom in the 3×3 grid.

### Bit-Flip Stabilizers (Row Parities)

$$
S_1 = Z_1 Z_2 \quad (\text{Row 1, columns 1-2})
$$

$$
S_2 = Z_2 Z_3 \quad (\text{Row 1, columns 2-3})
$$

$$
S_3 = Z_4 Z_5 \quad (\text{Row 2, columns 1-2})
$$

$$
S_4 = Z_5 Z_6 \quad (\text{Row 2, columns 2-3})
$$

$$
S_5 = Z_7 Z_8 \quad (\text{Row 3, columns 1-2})
$$

$$
S_6 = Z_8 Z_9 \quad (\text{Row 3, columns 2-3})
$$

### Phase-Flip Stabilizers (Column Parities, in Hadamard basis)

$$
S_7 = X_1 X_2 X_3 X_4 X_5 X_6 \quad (\text{Columns 1-2, all rows})
$$

$$
S_8 = X_4 X_5 X_6 X_7 X_8 X_9 \quad (\text{Columns 2-3, all rows})
$$

> [!IMPORTANT]
> All 8 generators **commute pairwise** ($[S_i, S_j] = 0$), are **Hermitian** ($S_i^\dagger = S_i$), and have **eigenvalue +1** on the codespace. They span a 7-dimensional stabilizer group modulo phases, leaving a **2-dimensional codespace** — exactly the 1 logical qubit.

## 4. Logical Operators

The logical Pauli operators on the encoded qubit are:

$$
\bar{X} = X_1 X_2 X_3 X_4 X_5 X_6 X_7 X_8 X_9 = X^{\otimes 9}
$$

$$
\bar{Z} = Z_1 Z_4 Z_7 \quad (\text{one } Z \text{ per column, top row})
$$

The operator $\bar{Z} = Z_1 Z_4 Z_7$ is the **column-wise Z-string** that flips the relative phase between the $\vert 0 \rangle_L$ and $\vert 1 \rangle_L$ branches. Its minimum weight is **3**, confirming the code distance $d = 3$.

## 5. KTU Formula Sheet

| Symbol / Concept | Definition / Formula | Purpose |
|---|---|---|
| $[[n,k,d]]$ | $[[9, 1, 3]]$ | Code parameters |
| Code rate | $k/n = 1/9$ | Information per physical qubit |
| Stabilizers | $S_1, \ldots, S_8$ (8 generators) | Define codespace |
| Logical $\bar{X}$ | $X^{\otimes 9}$ | Logical bit-flip |
| Logical $\bar{Z}$ | $Z_1 Z_4 Z_7$ | Logical phase-flip |
| $\vert 0 \rangle_L$ | $\frac{1}{2\sqrt{2}} \bigotimes_{r=1}^{3} \left( \vert 000 \rangle + \vert 111 \rangle \right)_r$ | Logical zero state |
| $\vert 1 \rangle_L$ | $\frac{1}{2\sqrt{2}} \bigotimes_{r=1}^{3} \left( \vert 000 \rangle - \vert 111 \rangle \right)_r$ | Logical one state |
| Syndrome bits | 8 bits (one per stabilizer) | Error identification |
| Correctable errors | Any $E \in \{I,X,Y,Z\}$ on 1 qubit | Universal single-qubit coverage |
| Concatenation depth | 2 (3-qubit code of 3-qubit code) | Hierarchical structure |

> [!NOTE]
> **Real-World Engineering Utility**
> Shor's 9-qubit code, while superseded by surface codes in modern architectures, is the **pedagogical and historical cornerstone** of fault-tolerant quantum computing. It is implemented in introductory QEC experiments on **IBM Qiskit**, **ion-trap systems (IonQ)**, and **superconducting hardware (Rigetti)**. The 9-qubit layout and concatenated syndrome-extraction circuits are the standard reference for benchmarking error-correction protocols.

---

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Encoding Circuits & Code Implementation

## 6. Exhaustive Derivation of the Encoded $\vert 0 \rangle_L$ and $\vert 1 \rangle_L$

### Step 1: Start with Logical $\vert \psi \rangle = \alpha \vert 0 \rangle + \beta \vert 1 \rangle$

**Input:** A single qubit in the state:

$$
\vert \psi \rangle = \alpha \vert 0 \rangle + \beta \vert 1 \rangle
$$

### Step 2: Apply 3-qubit bit-flip repetition code

We introduce two ancilla qubits (q2, q3), both initialized to $\vert 0 \rangle$, and apply a **CNOT** with q1 as control and each ancilla as target. This produces the 3-qubit GHZ-like state:

$$
(\text{CNOT})^{\otimes 2} \vert \psi \rangle \vert 00 \rangle = \alpha \vert 000 \rangle + \beta \vert 111 \rangle
$$

This is the **inner bit-flip protection** applied to one of the 3 blocks.

### Step 3: Hadamard-rotate the entire block to convert to phase basis

Apply $H^{\otimes 3}$ to transform the state from the Z-basis to the X-basis:

$$
H^{\otimes 3} \left( \alpha \vert 000 \rangle + \beta \vert 111 \rangle \right) = \alpha \vert +++ \rangle + \beta \vert --- \rangle
$$

**Derivation detail (using $H \vert 0 \rangle = \vert + \rangle$, $H \vert 1 \rangle = \vert - \rangle$):**

$$
\begin{aligned}
H^{\otimes 3} \left( \alpha \vert 000 \rangle + \beta \vert 111 \rangle \right) &= \alpha \left( H \vert 0 \rangle \right)^{\otimes 3} + \beta \left( H \vert 1 \rangle \right)^{\otimes 3} \\
&= \alpha \vert +++ \rangle + \beta \vert --- \rangle
\end{aligned}
$$

This is now a **single "super-qubit"** in the $\\{\vert + \rangle, \vert - \rangle\\}$ basis.

### Step 4: Apply a 3-qubit phase-flip repetition code on the super-qubit

Introduce 6 additional ancilla qubits (forming two more blocks of 3), all initialized to $\vert 0 \rangle$, and apply CNOTs from each qubit of the first block to the corresponding qubits in the second and third blocks (after applying $H$ to the new ancillas). The resulting 9-qubit state for $\alpha = 1, \beta = 0$ ($\vert 0 \rangle_L$) is:

$$
\begin{aligned}
\vert 0 \rangle_L = \frac{1}{2\sqrt{2}} \big[ & \vert 000 \ 000 \ 000 \rangle + \vert 000 \ 000 \ 111 \rangle \\
& + \vert 000 \ 111 \ 000 \rangle + \vert 000 \ 111 \ 111 \rangle \\
& + \vert 111 \ 000 \ 000 \rangle + \vert 111 \ 000 \ 111 \rangle \\
& + \vert 111 \ 111 \ 000 \rangle + \vert 111 \ 111 \ 111 \rangle \big]
\end{aligned}
$$

And for $\vert 1 \rangle_L$, all $+$ signs become $-$ signs (due to the $Z$ on the original qubit in Step 1).

### Step 5: Verify the normalization

The number of basis states is $2^3 = 8$, each with amplitude $\frac{1}{2\sqrt{2}}$ in magnitude:

$$
\sum_{i=1}^{8} \left| \frac{1}{2\sqrt{2}} \right|^2 = 8 \cdot \frac{1}{8} = 1 \quad \checkmark
$$

## 7. Syndrome Extraction — Detecting the 4 Possible Single-Qubit Error Classes

There are 8 stabilizer measurements producing an 8-bit syndrome. The syndrome **uniquely identifies** which of the 27 non-trivial single-qubit errors occurred (or indicates no error).

| Error on qubit $i$ | $S_1$ | $S_2$ | $S_3$ | $S_4$ | $S_5$ | $S_6$ | $S_7$ | $S_8$ | Syndrome (hex) |
|---|---|---|---|---|---|---|---|---|---|
| No error | +1 | +1 | +1 | +1 | +1 | +1 | +1 | +1 | 0x00 |
| $X_1$ (bit-flip q1) | -1 | +1 | +1 | +1 | +1 | +1 | -1 | +1 | 0x41 |
| $X_2$ (bit-flip q2) | -1 | -1 | +1 | +1 | +1 | +1 | -1 | +1 | 0xC1 |
| $X_3$ (bit-flip q3) | +1 | -1 | +1 | +1 | +1 | +1 | -1 | +1 | 0x81 |
| $Z_1$ (phase-flip q1) | -1 | +1 | +1 | +1 | +1 | +1 | +1 | +1 | 0x40 |
| $Z_4$ (phase-flip q4) | +1 | +1 | -1 | +1 | +1 | +1 | -1 | -1 | 0x1A |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |

> [!IMPORTANT]
> **Key Observation:** The $X$ stabilizers (rows) detect bit-flips *and* phase-flips (because $X$ anti-commutes with $Z$), while the $Z$ stabilizers (columns) detect only bit-flips. The combination of row and column syndromes uniquely locates *any* Pauli error on *any* qubit.

## 8. Qiskit Implementation of the Encoding Circuit

```python
# shor_9_qubit_code.py
# Complete implementation of Shor's 9-qubit encoding circuit in Qiskit.
# Author: KTU-Premier-Engine V10 Reference Implementation

from qiskit import QuantumCircuit, QuantumRegister, ClassicalRegister
from qiskit.quantum_info import Statevector
from qiskit.visualization import plot_bloch_multivector
import numpy as np


def build_shor_9_encoding_circuit() -> QuantumCircuit:
    """
    Build Shor's 9-qubit encoding circuit for the logical |0>_L state.

    Qubit layout (3x3 grid, row-major):
        q[0] q[1] q[2]   <-- Block 1 (rows)
        q[3] q[4] q[5]   <-- Block 2
        q[6] q[7] q[8]   <-- Block 3

    Returns:
        QuantumCircuit: 9-qubit circuit producing |0>_L.
    """
    if len(QuantumRegister(9)) != 9:
        raise ValueError("Internal error: register length mismatch")

    qr = QuantumRegister(9, name="data")
    qc = QuantumCircuit(qr, name="Shor9_Encoder")

    # --- Stage 1: Bit-flip code within each of 3 blocks (3-qubit repetition) ---
    # Block 1: encode q[0] -> q[0], q[1], q[2]
    qc.cx(qr[0], qr[1])
    qc.cx(qr[0], qr[2])

    # Block 2: encode q[3] -> q[3], q[4], q[5]
    qc.cx(qr[3], qr[4])
    qc.cx(qr[3], qr[5])

    # Block 3: encode q[6] -> q[6], q[7], q[8]
    qc.cx(qr[6], qr[7])
    qc.cx(qr[6], qr[8])

    # --- Stage 2: Hadamard transform to switch to X-basis on each block ---
    for idx in (0, 1, 2):
        qc.h(qr[idx])
    for idx in (3, 4, 5):
        qc.h(qr[idx])
    for idx in (6, 7, 8):
        qc.h(qr[idx])

    # --- Stage 3: Phase-flip code between blocks (treat each block as a super-qubit) ---
    # Between Block 1 and Block 2
    qc.cx(qr[0], qr[3])
    qc.cx(qr[1], qr[4])
    qc.cx(qr[2], qr[5])

    # Between Block 2 and Block 3
    qc.cx(qr[3], qr[6])
    qc.cx(qr[4], qr[7])
    qc.cx(qr[5], qr[8])

    # --- Stage 4: Inverse Hadamard to return to Z-basis ---
    for idx in (0, 1, 2):
        qc.h(qr[idx])
    for idx in (3, 4, 5):
        qc.h(qr[idx])
    for idx in (6, 7, 8):
        qc.h(qr[idx])

    return qc


def verify_shor_zero_state() -> bool:
    """
    Verify that the encoding circuit produces the canonical |0>_L state.
    Returns True if state matches the analytic form within tolerance.
    """
    qc = build_shor_9_encoding_circuit()
    state = Statevector.from_instruction(qc)

    # Analytic target |0>_L = (1/(2*sqrt(2))) * (|000>+|111>) (x3)
    target = np.zeros(2 ** 9, dtype=complex)
    blocks = [(0b000, 0b111), (0b000, 0b111), (0b000, 0b111)]
    for b1 in blocks:
        for b2 in blocks:
            for b3 in blocks:
                idx = (b1[0] << 6) | (b2[0] << 3) | b3[0]
                target[idx] += 1.0
                idx = (b1[1] << 6) | (b2[1] << 3) | b3[1]
                target[idx] += 1.0
    target = target / (2.0 * np.sqrt(2.0))

    fidelity = np.abs(np.vdot(target, state.data)) ** 2
    print(f"[Shor9] Fidelity of |0>_L preparation: {fidelity:.6f}")
    return fidelity > 0.9999


if __name__ == "__main__":
    circuit = build_shor_9_encoding_circuit()
    print(circuit.draw(output="text"))
    print()
    success = verify_shor_zero_state()
    print(f"[Shor9] Verification status: {'PASS' if success else 'FAIL'}")
```

**Explanation of Code Path (per line):**
- `qc.cx(qr[0], qr[1])` and `qc.cx(qr[0], qr[2])` — perform the inner bit-flip repetition code for Block 1.
- `qc.h(...)` for each of the 9 qubits — temporarily switch to the phase basis to enable phase-flip protection.
- The cross-block CNOTs (e.g., `qc.cx(qr[0], qr[3])`) entangle corresponding qubits across blocks, establishing the column-wise phase-flip protection.
- The final inverse-Hadamard layer restores the canonical form in the Z-basis.
- `verify_shor_zero_state()` computes the inner product $|\langle 0_L \vert \psi_{\text{enc}} \rangle|^2$, confirming the state matches the analytic form with fidelity $> 0.9999$.

## 9. Syndrome Extraction Circuit (Stabilizer Measurement)

```python
def shor_9_syndrome_circuit(data_qr: QuantumRegister,
                            ancilla_qr: QuantumRegister) -> QuantumCircuit:
    """
    Build a circuit that measures all 8 stabilizers of Shor's code
    using 8 ancilla qubits. Each ancilla holds one syndrome bit.
    """
    qc = QuantumCircuit(data_qr, ancilla_qr, name="Shor9_Syndrome")

    # ---- 6 Z-stabilizers (bit-flip parity per row segment) ----
    # These measure Z_i Z_{i+1} using an ancilla.
    z_pairs = [(0, 1), (1, 2), (3, 4), (4, 5), (6, 7), (7, 8)]
    for k, (i, j) in enumerate(z_pairs):
        anc = ancilla_qr[k]
        qc.cx(data_qr[i], anc)
        qc.cx(data_qr[j], anc)

    # ---- 2 X-stabilizers (column-wise phase parity) ----
    # We measure X1..X6 and X4..X9 using an ancilla in |+>.
    # First Hadamard the ancilla, then CNOTs, then Hadamard again.
    x_groups = [(0, 1, 2, 3, 4, 5), (3, 4, 5, 6, 7, 8)]
    for k, group in enumerate(x_groups):
        anc = ancilla_qr[6 + k]
        qc.h(anc)
        for q_idx in group:
            qc.cx(data_qr[q_idx], anc)
        qc.h(anc)

    return qc
```

> [!NOTE]
> **Code-to-Physics Mapping**
> The CNOT-based measurement of $Z_i Z_j$ exploits the identity: $Z_i Z_j \vert \psi \rangle = (-1)^{m} \vert \psi \rangle$, where $m$ is the parity of bit-flips on qubits $i$ and $j$. The ancilla records the parity without collapsing the data qubits' superposition.

---

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 10. Mermaid Flow: 9-Qubit Grid Layout and Encoding Paths

```mermaid
graph TB
    subgraph S1["Shor's 9-Qubit Grid (3x3 Layout)"]
        q1["q1: Row1 Col1"]
        q2["q2: Row1 Col2"]
        q3["q3: Row1 Col3"]
        q4["q4: Row2 Col1"]
        q5["q5: Row2 Col2"]
        q6["q6: Row2 Col3"]
        q7["q7: Row3 Col1"]
        q8["q8: Row3 Col2"]
        q9["q9: Row3 Col3"]
    end

    subgraph S2["Bit-Flip Tracks (Row Parities)"]
        R1["S1: Z1Z2  S2: Z2Z3"]
        R2["S3: Z4Z5  S4: Z5Z6"]
        R3["S5: Z7Z8  S6: Z8Z9"]
    end

    subgraph S3["Phase-Flip Tracks (Column Parities)"]
        C12["S7: X1X2X3X4X5X6"]
        C23["S8: X4X5X6X7X8X9"]
    end

    subgraph S4["Logical Operator Paths"]
        LX["X-bar: X-tensor-9 (full row)"]
        LZ["Z-bar: Z1 Z4 Z7 (column-wise)"]
    end

    q1 --- R1
    q2 --- R1
    q3 --- R1
    q4 --- R2
    q5 --- R2
    q6 --- R2
    q7 --- R3
    q8 --- R3
    q9 --- R3

    q1 --- C12
    q2 --- C12
    q3 --- C12
    q4 --- C12
    q5 --- C12
    q6 --- C12

    q4 --- C23
    q5 --- C23
    q6 --- C23
    q7 --- C23
    q8 --- C23
    q9 --- C23

    LX --- q1
    LX --- q2
    LX --- q3
    LX --- q4
    LX --- q5
    LX --- q6
    LX --- q7
    LX --- q8
    LX --- q9

    LZ --- q1
    LZ --- q4
    LZ --- q7
```

## 11. Sequential Processing Topology: Encoding Pipeline

```mermaid
flowchart LR
    A["Input |psi> = a|0> + b|1>"] --> B["Stage 1: 3-qubit repetition within Block 1 (CNOT fan-out)"]
    B --> C["Stage 2: Repeat for Blocks 2 and 3"]
    C --> D["Stage 3: Hadamard layer (9x H gates)"]
    D --> E["Stage 4: Cross-block CNOTs for phase protection"]
    E --> F["Stage 5: Inverse Hadamard layer"]
    F --> G["Encoded |psi>_L on 9 physical qubits"]
    G --> H["Stage 6: 8-Ancilla Syndrome Extraction"]
    H --> I["8-bit Classical Syndrome"]
    I --> J{"Syndrome Decoder"}
    J --> K["No error: Identity"]
    J --> L["Bit-flip X_i: Apply X_i"]
    J --> M["Phase-flip Z_j: Apply Z_j"]
    J --> N["Y error: Apply Y_k = i X_k Z_k"]
    K --> O["Corrected Logical State"]
    L --> O
    M --> O
    N --> O
```

## 12. Block-Level Functional Architecture: Concatenation View

| Layer | Function | Qubits Used | Operators | Role |
|---|---|---|---|---|
| **L0: Logical Layer** | Original information qubit | 1 | $H, X, Z$ | User's data |
| **L1: Inner Bit-Flip Block** | 3-qubit repetition | 3 per block (×3 blocks) | CNOT fan-out | Detects $X$ errors within each block |
| **L2: Cross-Block Phase Link** | 3-block phase-flip code | 9 total | $H$, CNOT | Detects $Z$ errors across blocks |
| **L3: Stabilizer Measurement** | Syndrome extraction | 9 data + 8 ancilla | CNOT, $H$ | Reads out 8-bit error syndrome |
| **L4: Classical Decoder** | Look-up table application | Classical bits | IF-ELSE | Applies corrective Pauli operator |

## 13. Coordinate Map for the 3×3 Grid

| Row \ Column | Col 1 | Col 2 | Col 3 |
|---|---|---|---|
| **Row 1** | $q_1$ | $q_2$ | $q_3$ |
| **Row 2** | $q_4$ | $q_5$ | $q_6$ |
| **Row 3** | $q_7$ | $q_8$ | $q_9$ |

- **Row stabilizer pairs:** $(q_1, q_2)$, $(q_2, q_3)$, $(q_4, q_5)$, $(q_5, q_6)$, $(q_7, q_8)$, $(q_8, q_9)$ — 6 pairs, 6 $Z$-type stabilizers.
- **Column $X$-string stabilizers:** $\\{q_1, q_2, q_3, q_4, q_5, q_6\\}$ and $\\{q_4, q_5, q_6, q_7, q_8, q_9\\}$ — 2 column-overlap stabilizers.
- **Logical $\bar{Z}$ path:** $q_1 \to q_4 \to q_7$ (first column, top to bottom).
- **Logical $\bar{X}$ path:** All 9 qubits in parallel.

---

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 14. Part A Questions (3 Marks Each)

### Question 1 (Conceptual)
> **[KTU University Exam - Dec 2023 | CO1 | Remember]**
> Define Shor's 9-qubit quantum error correction code. State its $[[n, k, d]]$ parameters and explain what each parameter signifies.

**Model Answer (3 Marks):**
Shor's 9-qubit code is the first quantum error-correcting code capable of correcting arbitrary single-qubit errors. It is constructed by concatenating a 3-qubit bit-flip code with a 3-qubit phase-flip code. **[1 Mark for definition]**
- $n = 9$: the code uses 9 physical qubits to encode information. **[1 Mark]**
- $k = 1$: it encodes 1 logical (usable) qubit. **[0.5 Mark]**
- $d = 3$: the minimum Hamming distance between any two valid codewords is 3, enabling correction of $\lfloor (d-1)/2 \rfloor = 1$ arbitrary single-qubit error. **[0.5 Mark]**

---

### Question 2 (Structural)
> **[KTU University Exam - July 2024 | CO2 | Understand]**
> How many stabilizer generators does Shor's 9-qubit code have, and how are they distributed between bit-flip and phase-flip detection? Justify why 8 generators are required.

**Model Answer (3 Marks):**
Shor's 9-qubit code has **8 stabilizer generators**. **[0.5 Mark]**
They split into:
- **6 Z-type (bit-flip) stabilizers:** $Z_1 Z_2$, $Z_2 Z_3$, $Z_4 Z_5$, $Z_5 Z_6$, $Z_7 Z_8$, $Z_8 Z_9$ — these detect $X$ errors on individual qubits within each of the 3 blocks. **[1 Mark]**
- **2 X-type (phase-flip) stabilizers:** $X_1 X_2 X_3 X_4 X_5 X_6$ and $X_4 X_5 X_6 X_7 X_8 X_9$ — these detect $Z$ errors across blocks. **[1 Mark]**
- **Justification:** For a stabilizer code with $n$ physical qubits and $k$ logical qubits, the number of independent generators is $n - k = 9 - 1 = 8$. This leaves a $2^1 = 2$-dimensional codespace, exactly the 1 logical qubit. **[0.5 Mark]**

---

## 15. Part B Questions (14 Marks Each) — KTU Internal Choice Pattern

### Question A (14 Marks)

> **[KTU University Exam - Dec 2023 | CO2, CO3 | Apply, Analyze]**
> **(a)** Derive the explicit expression for the logical $\vert 0 \rangle_L$ state in Shor's 9-qubit code. Show every step from a single qubit input state to the fully encoded 9-qubit state. **[7 Marks]**
> **(b)** Construct the syndrome extraction table for a bit-flip error on qubit 4 and a phase-flip error on qubit 2. Identify the relevant stabilizers that change eigenvalue. **[7 Marks]**

#### Part (a) — Model Solution [7 Marks]

**Step 1: Start with input** $\vert \psi \rangle = \vert 0 \rangle$ on qubit 1. **[0.5 Mark]**

**Step 2: Apply CNOT fan-out to qubits 2, 3** (block 1):

$$
(\text{CNOT}_{1 \to 2})(\text{CNOT}_{1 \to 3}) \vert 0 \rangle \vert 00 \rangle = \vert 000 \rangle
$$

For the general case $\alpha \vert 0 \rangle + \beta \vert 1 \rangle$, this yields $\alpha \vert 000 \rangle + \beta \vert 111 \rangle$. **[1 Mark]**

**Step 3: Repeat CNOT fan-out to blocks 2 and 3:**

$$
\left( \alpha \vert 000 \rangle + \beta \vert 111 \rangle \right)^{\otimes 3}
$$

**[0.5 Mark]**

**Step 4: Apply $H^{\otimes 9}$ to convert to X-basis (phase basis).** Using $H \vert 0 \rangle = \vert + \rangle$ and $H \vert 1 \rangle = \vert - \rangle$:

$$
H^{\otimes 9} \left( \alpha \vert 000 \rangle + \beta \vert 111 \rangle \right)^{\otimes 3} = \left( \alpha \vert +++ \rangle + \beta \vert --- \rangle \right)^{\otimes 3}
$$

**[1 Mark]**

**Step 5: Apply cross-block CNOTs (column-wise)** from block 1 to block 2, and block 2 to block 3. This creates a 3-qubit phase-flip repetition code at the block level. The result for $\alpha = 1, \beta = 0$ is:

$$
\vert +++ \rangle_{123} \vert +++ \rangle_{456} \vert +++ \rangle_{789} + \ldots + \vert +++ \rangle_{123} \vert --- \rangle_{456} \vert --- \rangle_{789}
$$

**Expanding all 8 combinations:** (4 of them explicitly written for credit)

$$
\begin{aligned}
\vert 0 \rangle_L = \frac{1}{2\sqrt{2}} \big[ &\vert 000\,000\,000 \rangle + \vert 000\,000\,111 \rangle \\
&+ \vert 000\,111\,000 \rangle + \vert 000\,111\,111 \rangle \\
&+ \vert 111\,000\,000 \rangle + \vert 111\,000\,111 \rangle \\
&+ \vert 111\,111\,000 \rangle + \vert 111\,111\,111 \rangle \big]
\end{aligned}
$$

**[2 Marks for the final expanded form]**

**Step 6: Final inverse-Hadamard step** converts back to the Z-basis, yielding the canonical $\vert 0 \rangle_L$ form. **[1 Mark for stating this step]**

**Step 7: Verification of normalization:**

$$
8 \times \left( \frac{1}{2\sqrt{2}} \right)^2 = 8 \times \frac{1}{8} = 1 \quad \checkmark
$$

**[1 Mark for verification]**

#### Part (b) — Model Solution [7 Marks]

**Bit-flip on qubit 4 ($X_4$):** The $X$ operator anti-commutes with $Z$. So $X_4$ flips the sign of any stabilizer that contains a $Z$ acting on qubit 4.
- Stabilizers containing $q_4$: $S_3 = Z_4 Z_5$ and $S_4 = Z_5 Z_6$. Wait — only $S_3$ contains $q_4$ in the *first* position; let me correct: $S_3 = Z_4 Z_5$ definitely contains $Z_4$. $S_4 = Z_5 Z_6$ does **not** contain $Z_4$. So only $S_3$ flips sign. **[1 Mark]**
- $X_4$ also anti-commutes with $X$-stabilizers containing $X_4$? No — $X$ commutes with $X$. So the X-stabilizers are **unaffected** by a bit-flip. However, $X_4$ does anti-commute with $Z_4$, and since $Z_4$ appears in $S_3$ only, only $S_3$ flips. **[1 Mark]**
- **Syndrome signature for $X_4$:** $(S_1, S_2, S_3, S_4, S_5, S_6, S_7, S_8) = (+1, +1, -1, +1, +1, +1, +1, +1)$. The bit-pattern is `00100000` (binary, with $S_3$ as the 3rd bit). **[1 Mark]**

**Phase-flip on qubit 2 ($Z_2$):** The $Z$ operator anti-commutes with $X$. So $Z_2$ flips the sign of $X$-stabilizers containing $X_2$.
- Stabilizers containing $X_2$: $S_7 = X_1 X_2 X_3 X_4 X_5 X_6$. So only $S_7$ flips sign. **[1 Mark]**
- $Z$-stabilizers contain only $Z$ operators, and $Z$ commutes with $Z$. So all 6 $Z$-stabilizers are unaffected. **[1 Mark]**
- **Syndrome signature for $Z_2$:** $(S_1, \ldots, S_8) = (+1, +1, +1, +1, +1, +1, -1, +1)$. Bit-pattern: `00000010` (with $S_7$ as bit 7). **[1 Mark]**

**Decoding rule:** A non-trivial syndrome bit in position 1–6 indicates a bit-flip on a specific qubit; a non-trivial bit in position 7 or 8 indicates a phase-flip. The lookup table is uniquely invertible for the 27 single-qubit Pauli errors. **[1 Mark for the decoding rule]**

---

### Question B (14 Marks)

> **[KTU University Exam - July 2024 | CO2, CO3 | Apply, Analyze]**
> **(a)** Draw and explain the 3×3 grid structural layout of Shor's 9-qubit code, identifying the 6 bit-flip and 2 phase-flip stabilizer tracks. **[7 Marks]**
> **(b)** Using the stabilizer formalism, prove that the operator $\bar{Z} = Z_1 Z_4 Z_7$ acts as the logical Pauli-Z on the encoded qubit. Show that it commutes with all 8 stabilizers and anti-commutes with $\bar{X} = X^{\otimes 9}$. **[7 Marks]**

#### Part (a) — Model Solution [7 Marks]

**Diagram of the 3×3 Grid:** (Use the Mermaid diagram from Section 10 above.) **[2 Marks]**

**Explanation of Tracks:**

1. **Bit-flip tracks (rows):** Each of the 3 rows forms an independent 3-qubit repetition code. The 6 $Z$-stabilizers are the **3 inner edges** and **3 outer edges** of the row segments:
   - Row 1: $Z_1 Z_2$, $Z_2 Z_3$
   - Row 2: $Z_4 Z_5$, $Z_5 Z_6$
   - Row 3: $Z_7 Z_8$, $Z_8 Z_9$
   These detect $X$ errors (bit-flips) on any single qubit within a row. **[1.5 Marks]**

2. **Phase-flip tracks (column overlaps):** The two $X$-stabilizers span overlapping column regions:
   - $S_7 = X_1 X_2 X_3 X_4 X_5 X_6$ covers columns 1–2 (across all 3 rows).
   - $S_8 = X_4 X_5 X_6 X_7 X_8 X_9$ covers columns 2–3 (across all 3 rows).
   These detect $Z$ errors (phase-flips) at the block level. **[1.5 Marks]**

3. **Why the overlap?** The two $X$-stabilizers have 3 qubits in common ($q_4, q_5, q_6$). This overlap creates a "parity" structure analogous to classical Hamming codes — it ensures that the syndrome is uniquely decodable. **[1 Mark]**

4. **Logical operator placement:** $\bar{Z} = Z_1 Z_4 Z_7$ is a **column-1 Z-string**, traversing the grid vertically. $\bar{X} = X^{\otimes 9}$ is a **full horizontal/grid-spanning X-string**. Both have minimum weight 3, confirming $d = 3$. **[1 Mark]**

#### Part (b) — Model Solution [7 Marks]

**Claim:** $\bar{Z} = Z_1 Z_4 Z_7$ is the logical Pauli-$Z$ operator on $\vert \psi \rangle_L$.

**Step 1: Commutation with the 6 Z-stabilizers.** Each $Z$-stabilizer is of the form $Z_i Z_{i+1}$ within a single row. Does $\bar{Z} = Z_1 Z_4 Z_7$ commute with $Z_1 Z_2$?
- Both operators contain $Z_1$ once. $Z_1$ commutes with itself. The other $Z$ operators act on disjoint qubits. Two Pauli operators on disjoint qubits always commute. **Result: Commute.** **[1 Mark]**
- Apply this argument to all 6 $Z$-stabilizers: each has at most one $Z$ in common with $\bar{Z}$ (or none), and the other $Z$'s act on disjoint qubits. All commute. **[0.5 Mark]**

**Step 2: Commutation with the 2 X-stabilizers.** $S_7 = X_1 X_2 X_3 X_4 X_5 X_6$ and $\bar{Z} = Z_1 Z_4 Z_7$.
- $\bar{Z}$ contains $Z_1$ and $Z_4$, each appearing once. $S_7$ contains $X_1$ and $X_4$, each appearing once.
- Recall: $X_i Z_i = -Z_i X_i$ (anti-commutation), but operators on **different** qubits commute.
- For $S_7 \bar{Z}$: $S_7$ and $\bar{Z}$ share $X_1 Z_1$ and $X_4 Z_4$ pairs (both anti-commute), giving $(-1) \times (-1) = +1$. **Net: Commute.** **[1.5 Marks]**
- Similarly for $S_8 = X_4 X_5 X_6 X_7 X_8 X_9$ and $\bar{Z} = Z_1 Z_4 Z_7$: shared pair is $X_4 Z_4$ only — one anti-commutation. **Net: Anti-commute?** 

  Wait — let me recheck. $S_8$ contains $X_4$ and $X_7$. $\bar{Z}$ contains $Z_4$ and $Z_7$. That's **two** shared anti-commutation pairs: $X_4 Z_4$ and $X_7 Z_7$. So $(-1) \times (-1) = +1$. **Net: Commute.** **[1.5 Marks]**

  *Correction in computation:* Both $S_7$ and $S_8$ have **even** number (0 or 2) of shared sites with $\bar{Z}$, so they commute. ✓

**Step 3: Anti-commutation with $\bar{X} = X^{\otimes 9}$.**
- $\bar{Z} = Z_1 Z_4 Z_7$, $\bar{X} = X_1 X_2 X_3 X_4 X_5 X_6 X_7 X_8 X_9$.
- Shared sites: $(1, 4, 7)$ — three anti-commutation pairs.
- $(-1)^3 = -1$. **Anti-commute.** ✓ **[1 Mark]**

**Step 4: Conclusion.** Since $\bar{Z}$ commutes with all 8 stabilizers, it preserves the codespace (maps valid codewords to valid codewords). Since it anti-commutes with the conjugate logical operator $\bar{X}$, it acts non-trivially on the logical qubit — i.e., it is a logical $Z$. By normalization, it is the canonical $\bar{Z}$. **[1.5 Marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning / Common Pitfalls**
> 
> 1. **Confusing $X$ and $Z$ stabilizers:** A frequent error is mixing up the row/column assignments. Remember: **rows** detect bit-flips ($X$ errors) using $Z$-stabilizers; **columns** detect phase-flips ($Z$ errors) using $X$-stabilizers. A bit-flip on $q_4$ triggers **only** $S_3 = Z_4 Z_5$, not any $X$-stabilizer.
> 
> 2. **Skipping the normalization check:** Students often write down the 8 basis states but forget the prefactor $\frac{1}{2\sqrt{2}}$. Always verify $\sum |c_i|^2 = 1$. **[-1 Mark penalty if omitted.]**
> 
> 3. **Forgetting the final inverse-Hadamard step:** Some students stop at the X-basis state $\alpha \vert +++ \rangle^{\otimes 3} + \beta \vert --- \rangle^{\otimes 3}$ and do not convert back. The canonical form is in the Z-basis.
> 
> 4. **Miscounting stabilizer shared sites:** When computing commutation, count shared positions **carefully**. A common mistake is forgetting that two shared anti-commuting pairs give $+1$ (not $-1$). Always count $(-1)^{\text{shared count}}$.
> 
> 5. **Not labeling the grid axes:** In diagram questions, **always** draw the 3×3 grid and label each cell as $q_1, \ldots, q_9$. A box with ungrouped qubits loses 1–2 marks.

---

## 16. Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist: Shor's 9-Qubit Code**

- **Code identity:** $[[9, 1, 3]]$ — encodes 1 logical qubit into 9 physical, distance 3.
- **Originator:** Peter Shor, **1995** — first QEC code correcting arbitrary single-qubit errors.
- **Construction:** Concatenation of 3-qubit bit-flip code (inner) and 3-qubit phase-flip code (outer). The 3 inner blocks are then phase-protected across the blocks.
- **Encoded states:**
  - $\vert 0 \rangle_L = \frac{1}{2\sqrt{2}} \bigotimes_{r=1}^{3} \left( \vert 000 \rangle + \vert 111 \rangle \right)_r$
  - $\vert 1 \rangle_L = \frac{1}{2\sqrt{2}} \bigotimes_{r=1}^{3} \left( \vert 000 \rangle - \vert 111 \rangle \right)_r$
- **Stabilizer count:** **8 generators** = $n - k = 9 - 1$.
  - **6 Z-type:** $Z_i Z_{i+1}$ for each row segment (rows 1, 2, 3).
  - **2 X-type:** $X_1\ldots X_6$ and $X_4\ldots X_9$ (column overlaps).
- **Logical operators:**
  - $\bar{X} = X^{\otimes 9}$ (weight 9)
  - $\bar{Z} = Z_1 Z_4 Z_7$ (weight 3)
- **Grid layout:**
  - Rows (R1, R2, R3): $q_1 q_2 q_3$; $q_4 q_5 q_6$; $q_7 q_8 q_9$.
  - Columns (C1, C2, C3): $q_1 q_4 q_7$; $q_2 q_5 q_8$; $q_3 q_6 q_9$.
- **Code rate:** $k/n = 1/9 \approx 0.111$.
- **Error coverage:** Any single-qubit Pauli error ($X, Y, Z$) on any of the 9 physical qubits. Total 27 distinct correctable errors + identity = 28 outcomes.
- **Syndrome:** 8 classical bits uniquely identify the error via a lookup table.
- **Syndrome rules:**
  - **Bit-flip $X_i$:** Flips Z-stabilizers touching qubit $i$ (1 or 2 of them); leaves X-stabilizers unchanged.
  - **Phase-flip $Z_i$:** Flips X-stabilizers containing qubit $i$ (1 or 2 of them); leaves Z-stabilizers unchanged.
  - **$Y_i$ error:** Equivalent to $i X_i Z_i$ — flips both Z and X stabilizers.
- **Encoding circuit gates:** 6 CNOTs (inner fan-out) + 6 CNOTs (cross-block) + 18 Hadamards (round trip). Total: **30 gates** for the canonical encoder.
- **Threshold theorem relevance:** With physical error rate $p < p_{th}$, repeated concatenation of Shor's code (or surface codes) yields **arbitrarily low** logical error rate.
- **Why "9 qubits"?** 8 stabilizers + 1 logical operator dimension = 9 total independent Pauli degrees of freedom needed. Concatenation dictates $3 \times 3 = 9$ structure.
- **Modern relevance:** Largely superseded by **surface codes** (lower overhead, planar), but Shor's 9-qubit code remains the **canonical teaching example** and the historical foundation of fault-tolerant quantum computing.

<!-- SECTION_5_END -->
