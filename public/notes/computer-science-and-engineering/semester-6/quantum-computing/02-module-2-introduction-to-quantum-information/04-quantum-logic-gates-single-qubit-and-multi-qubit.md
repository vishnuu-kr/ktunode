---
title: "Quantum logic gates – single qubit and multi-qubit"
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd25"
status: "completed"
scrapedAt: "2026-05-20T16:56:53.009Z"
---
# Quantum Computing - Module 2: Introduction to Quantum Information
## Topic: Quantum Logic Gates – Single Qubit and Multi-Qubit

**Learning Outcomes:**

*   Understand the concept of quantum logic gates.
*   Describe and apply common single-qubit gates (e.g., Pauli gates, Hadamard gate, Phase gate).
*   Describe and apply common multi-qubit gates (e.g., CNOT gate, SWAP gate).
*   Understand the concept of universality in quantum gates.
*   Represent quantum gates using matrices.
*   Apply quantum gates to qubit states and analyze the resulting states.

---

### 1. Introduction to Quantum Logic Gates

*   **Definition:** Quantum logic gates are the fundamental building blocks of quantum circuits, analogous to classical logic gates in classical computers. They are unitary transformations that act on one or more qubits, modifying their quantum states.
*   **Key Difference from Classical Gates:** Quantum gates are *reversible*, meaning their inverse exists and can be applied to undo the transformation. This is due to the unitarity requirement. Classical gates like AND and OR are irreversible.
*   **Representation:**  Quantum gates are represented by unitary matrices.
*   **Unitary Matrix:** A unitary matrix *U* is a complex matrix that satisfies the condition:  *U*<sup>†</sup>*U* = *I* = *UU*<sup>†</sup>, where *U*<sup>†</sup> is the conjugate transpose of *U* and *I* is the identity matrix.  Unitary matrices preserve the norm of the vector they act upon, ensuring that probabilities remain normalized.

### 2. Single-Qubit Gates

Single-qubit gates operate on a single qubit, transforming its state.

*   **General Form:** A general single-qubit gate can be represented as a 2x2 unitary matrix:

    ```
    U =  [[a, b],
          [c, d]]
    ```

    where *a*, *b*, *c*, and *d* are complex numbers, and |*a*|<sup>2</sup> + |*c*|<sup>2</sup> = 1, |*b*|<sup>2</sup> + |*d*|<sup>2</sup> = 1, and *a* *b*<sup>\*</sup> + *c* *d*<sup>\*</sup> = 0 to satisfy the unitarity condition.

*   **Common Single-Qubit Gates:**

    *   **Pauli-X Gate (NOT Gate):**
        *   Matrix Representation:
            ```
            X = [[0, 1],
                 [1, 0]]
            ```
        *   Action: Flips the qubit's state:  X|0⟩ = |1⟩, X|1⟩ = |0⟩
        *   Example: X(α|0⟩ + β|1⟩) = α|1⟩ + β|0⟩
    *   **Pauli-Y Gate:**
        *   Matrix Representation:
            ```
            Y = [[0, -i],
                 [i,  0]]
            ```
        *   Action: Performs a bit flip and a phase flip.
        *   Example: Y|0⟩ = i|1⟩, Y|1⟩ = -i|0⟩
    *   **Pauli-Z Gate:**
        *   Matrix Representation:
            ```
            Z = [[1,  0],
                 [0, -1]]
            ```
        *   Action: Applies a phase of -1 to the |1⟩ state, leaving |0⟩ unchanged.
        *   Example: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩
    *   **Hadamard Gate (H Gate):**
        *   Matrix Representation:
            ```
            H = (1/√2) [[1,  1],
                       [1, -1]]
            ```
        *   Action: Creates an equal superposition of |0⟩ and |1⟩. Crucial for creating entanglement and superposition states.
        *   Example: H|0⟩ = (1/√2)(|0⟩ + |1⟩), H|1⟩ = (1/√2)(|0⟩ - |1⟩)
    *   **Phase Gate (S Gate):**
        *   Matrix Representation:
            ```
            S = [[1, 0],
                 [0, i]]
            ```
        *   Action: Applies a phase of *i* to the |1⟩ state.
        *   Example: S|0⟩ = |0⟩, S|1⟩ = i|1⟩
    *   **T Gate (π/8 Gate):**
        *   Matrix Representation:
            ```
            T = [[1, 0],
                 [0, e^(iπ/4)]]  = [[1, 0],
                                 [0, (1+i)/√2]]
            ```
        *   Action: Applies a phase of *e<sup>iπ/4</sup>* to the |1⟩ state. This is the square root of the S gate.
    *   **Rotation Gates (Rx, Ry, Rz):**
        *   Represent rotations about the x, y, and z axes of the Bloch sphere. Defined as:

            ```
            Rx(θ) = exp(-iθX/2) = [[cos(θ/2), -i sin(θ/2)],
                                   [-i sin(θ/2), cos(θ/2)]]

            Ry(θ) = exp(-iθY/2) = [[cos(θ/2), -sin(θ/2)],
                                   [sin(θ/2), cos(θ/2)]]

            Rz(θ) = exp(-iθZ/2) = [[e^(-iθ/2), 0],
                                   [0, e^(iθ/2)]]
            ```

        *   These are parameterized gates and can be used to implement any single-qubit gate (up to a global phase).

### 3. Multi-Qubit Gates

Multi-qubit gates operate on two or more qubits, enabling entanglement and more complex quantum computations.

*   **General Form:** The matrix representation of a multi-qubit gate is a 2<sup>n</sup> x 2<sup>n</sup> unitary matrix, where *n* is the number of qubits.

*   **Common Multi-Qubit Gates:**

    *   **Controlled-NOT Gate (CNOT Gate):**
        *   Symbol:  A circle (control qubit) connected to a circle with a cross (target qubit).
        *   Action: If the control qubit is |1⟩, the target qubit is flipped. If the control qubit is |0⟩, the target qubit remains unchanged.
        *   Matrix Representation:
            ```
            CNOT = [[1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 1],
                    [0, 0, 1, 0]]
            ```
        *   Example:
            *   CNOT(|00⟩) = |00⟩
            *   CNOT(|01⟩) = |01⟩
            *   CNOT(|10⟩) = |11⟩
            *   CNOT(|11⟩) = |10⟩
        *   **Entanglement:** CNOT gate can create entanglement. For instance, starting with |00⟩ and applying H on the control qubit followed by CNOT gives:

            H ⊗ I (|00⟩) = (1/√2)(|00⟩ + |10⟩)

            CNOT((1/√2)(|00⟩ + |10⟩)) = (1/√2)(|00⟩ + |11⟩) which is the Bell state |Φ<sup>+</sup>⟩.
    *   **SWAP Gate:**
        *   Action: Swaps the states of two qubits.
        *   Matrix Representation:
            ```
            SWAP = [[1, 0, 0, 0],
                    [0, 0, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 1]]
            ```
        *   Example:
            *   SWAP(|01⟩) = |10⟩
            *   SWAP(|10⟩) = |01⟩
    *   **Controlled-Z Gate (CZ Gate):**
        *   Action: Applies a phase of -1 to the state if both control and target qubits are |1⟩.
        *   Matrix Representation:
            ```
            CZ = [[1, 0, 0, 0],
                  [0, 1, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, -1]]
            ```
    *   **Toffoli Gate (Controlled-Controlled-NOT or CCNOT Gate):**
        *   Action: Flips the target qubit (the third qubit) only if both control qubits (the first two qubits) are |1⟩.
        *   Matrix Representation (8x8 matrix - not shown for brevity)
        *   Useful for implementing classical reversible logic operations.

### 4. Universality of Quantum Gates

*   **Definition:** A set of quantum gates is considered *universal* if any arbitrary unitary transformation can be approximated to arbitrary accuracy by a quantum circuit consisting only of gates from that set.
*   **Example:** The set {Hadamard, T, CNOT} is a universal gate set.  This means any quantum computation can theoretically be performed using only these gates.
*   **Significance:** Universality ensures that we can build any desired quantum algorithm with a relatively small set of gates.
*   **Important Note:** A universal gate set does not necessarily mean it is the *most efficient* gate set for all tasks. Certain algorithms may benefit from other specific gates.

### 5. Applying Quantum Gates

*   **Sequential Application:** Quantum gates are applied sequentially, one after another. The order matters.
*   **Matrix Multiplication:**  The effect of a series of quantum gates is calculated by multiplying their corresponding matrices.  For example, applying gate U<sub>1</sub> followed by U<sub>2</sub> to a state |ψ⟩ is represented as U<sub>2</sub>U<sub>1</sub>|ψ⟩.
*   **Tensor Product (Kronecker Product):**  To represent operations on multiple qubits, the tensor product (⊗) is used to combine single-qubit gates. For example, applying the Hadamard gate to the first qubit and the Identity gate to the second qubit is represented as H ⊗ I.

    ```
    H ⊗ I = [[1/√2, 1/√2],   ⊗ [[1, 0],   = [[1/√2, 0,   1/√2, 0  ],
             [1/√2, -1/√2]]      [0, 1]]      [0,  1/√2,  0,   1/√2],
                                                 [1/√2, 0,  -1/√2, 0 ],
                                                 [0,  1/√2, 0,  -1/√2]]
    ```

### 6. Important Points to Remember

*   Quantum gates are represented by *unitary* matrices.
*   Single-qubit gates manipulate the state of a single qubit (e.g., Pauli gates, Hadamard gate).
*   Multi-qubit gates operate on multiple qubits, enabling entanglement (e.g., CNOT gate).
*   A universal gate set can approximate any quantum operation.
*   The order of gate application matters.
*   Tensor products are used to represent applying gates to different qubits simultaneously.

---

### Practice Questions and Exercises:

**1. Apply the Hadamard gate to the qubit in the state |1⟩. What is the resulting state?**

*Answer:* H|1⟩ = (1/√2)(|0⟩ - |1⟩)*

**2. What is the matrix representation of applying a Z gate to the first qubit and an X gate to the second qubit in a two-qubit system?**

*Answer:* Z ⊗ X =

```
[[1, 0, 0, 0],
 [0, 0, 0, 1],
 [0, 0, -1, 0],
 [0, -1, 0, 0]]
```

**3. Apply a CNOT gate to the two-qubit state (1/√2)(|00⟩ + |01⟩). What is the resulting state?**

*Answer:* CNOT((1/√2)(|00⟩ + |01⟩)) = (1/√2)(|00⟩ + |01⟩)* (The control qubit is |0⟩ in both terms, so the target is unchanged).

**4. Given a qubit in the state |+⟩ = (1/√2)(|0⟩ + |1⟩), apply the sequence of gates: H, then Z, then H. What is the resulting state?**

*Answer:*
*   H|+⟩ = H(1/√2)(|0⟩ + |1⟩) = (1/√2)(H|0⟩ + H|1⟩) = (1/√2)[(1/√2)(|0⟩ + |1⟩) + (1/√2)(|0⟩ - |1⟩)] = |0⟩
*   Z|0⟩ = |0⟩
*   H|0⟩ = (1/√2)(|0⟩ + |1⟩) = |+⟩

Therefore, the resulting state is |+⟩.

**5. Show how to implement a CNOT gate using Hadamard gates and a Controlled-Z gate.**

*Answer:* CNOT = (H ⊗ I) CZ (H ⊗ I)

This can be verified by multiplying the matrices:

```
(H ⊗ I) = (1/√2) [[1, 0, 1, 0],
                    [0, 1, 0, 1],
                    [1, 0, -1, 0],
                    [0, 1, 0, -1]]

CZ =         [[1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [0, 0, 0, -1]]

(H ⊗ I) CZ (H ⊗ I)  =  [[1, 0, 0, 0],
                        [0, 1, 0, 0],
                        [0, 0, 0, 1],
                        [0, 0, 1, 0]] = CNOT
```

**6. Explain why reversibility is essential in quantum computation.**

*Answer:* Reversibility, enforced by unitarity, is vital because it ensures that the computation can be traced back to its initial state, which is crucial for maintaining quantum coherence and avoiding information loss.  Irreversible operations, such as erasing information, would lead to dissipation and decoherence, disrupting the delicate quantum states needed for computation. It's linked directly to the conservation of probability.

---
