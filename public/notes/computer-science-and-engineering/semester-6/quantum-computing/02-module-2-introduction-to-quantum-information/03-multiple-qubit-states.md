---
title: "Multiple qubit states"
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd24"
status: "completed"
scrapedAt: "2026-05-20T16:56:52.300Z"
---
# Quantum Computing: Module 2 - Introduction to Quantum Information
## Topic: Multiple Qubit States

**Learning Outcomes:**

*   Understand how to represent the state of a multi-qubit system.
*   Learn about tensor products and how they're used to describe multi-qubit states.
*   Distinguish between separable and entangled states.
*   Perform basic calculations involving multi-qubit states.
*   Understand the concept of partial measurement.

---

### 1. Representing Multi-Qubit States

*   **Introduction:** Single qubits provide limited computational power. Quantum computing's real strength lies in manipulating multiple qubits simultaneously.  To represent the state of a system with *n* qubits, we need to understand how these qubits interact and are described mathematically.

*   **Basis States:** For *n* qubits, the basis states are formed by combining the basis states of each individual qubit. If we have two qubits, each can be in states |0⟩ or |1⟩. This gives us four possible basis states: |00⟩, |01⟩, |10⟩, and |11⟩.  More generally, for *n* qubits, there are 2<sup>*n*</sup> basis states.

*   **General State Representation:**  A general state of *n* qubits is a superposition of all 2<sup>*n*</sup> basis states.  It can be written as:

    |ψ⟩ = α<sub>00...0</sub>|00...0⟩ + α<sub>00...1</sub>|00...1⟩ + ... + α<sub>11...1</sub>|11...1⟩

    where:
    *   α<sub>i</sub> are complex amplitudes.
    *   |i⟩ represents one of the 2<sup>*n*</sup> basis states (e.g., |010⟩ for a 3-qubit system).

*   **Normalization:** The probabilities of measuring each basis state must sum to 1. Therefore:

    ∑<sub>i</sub> |α<sub>i</sub>|<sup>2</sup> = 1

    where the sum is taken over all 2<sup>*n*</sup> possible basis states.

**Example:**  A two-qubit state can be represented as:

|ψ⟩ = α<sub>00</sub>|00⟩ + α<sub>01</sub>|01⟩ + α<sub>10</sub>|10⟩ + α<sub>11</sub>|11⟩

    where |α<sub>00</sub>|<sup>2</sup> + |α<sub>01</sub>|<sup>2</sup> + |α<sub>10</sub>|<sup>2</sup> + |α<sub>11</sub>|<sup>2</sup> = 1

### 2. Tensor Products

*   **Definition:** The tensor product (denoted by ⊗) is a mathematical operation that combines the state vectors of individual qubits to form the state vector of the composite multi-qubit system.

*   **Application:** If we have two qubits in states |ψ<sub>1</sub>⟩ and |ψ<sub>2</sub>⟩, their combined state is given by |ψ<sub>1</sub>⟩ ⊗ |ψ<sub>2</sub>⟩.

*   **Calculation:** To calculate the tensor product, we multiply each element of the first vector by the entire second vector.

    For example:

    |ψ<sub>1</sub>⟩ = a|0⟩ + b|1⟩ =  [a, b]<sup>T</sup>
    |ψ<sub>2</sub>⟩ = c|0⟩ + d|1⟩ =  [c, d]<sup>T</sup>

    |ψ<sub>1</sub>⟩ ⊗ |ψ<sub>2</sub>⟩ =  [a, b]<sup>T</sup> ⊗ [c, d]<sup>T</sup>  = [ac, ad, bc, bd]<sup>T</sup> = ac|00⟩ + ad|01⟩ + bc|10⟩ + bd|11⟩

*   **Generalization:**  For *n* qubits, the tensor product creates a 2<sup>*n*</sup>-dimensional vector representing the combined state.

**Example:**

If |ψ<sub>1</sub>⟩ = |0⟩ and |ψ<sub>2</sub>⟩ = |1⟩, then

|ψ<sub>1</sub>⟩ ⊗ |ψ<sub>2</sub>⟩ = |0⟩ ⊗ |1⟩ = [1, 0]<sup>T</sup> ⊗ [0, 1]<sup>T</sup> = [0, 1, 0, 0]<sup>T</sup> = |01⟩

### 3. Separable and Entangled States

*   **Separable States:** A multi-qubit state is separable if it can be written as the tensor product of individual qubit states. In other words, the qubits are independent of each other.

    |ψ⟩ is separable if |ψ⟩ = |ψ<sub>1</sub>⟩ ⊗ |ψ<sub>2</sub>⟩ ⊗ ... ⊗ |ψ<sub>n</sub>⟩

*   **Entangled States:**  A multi-qubit state is entangled if it *cannot* be written as the tensor product of individual qubit states. Entanglement is a fundamental property of quantum mechanics and a crucial resource for quantum computing.  Measurements on one entangled qubit instantaneously influence the state of the other, regardless of the distance separating them.

*   **Bell States (Example of Entangled States):**  The Bell states are a set of four maximally entangled two-qubit states:

    *   |Φ<sup>+</sup>⟩ = (1/√2)(|00⟩ + |11⟩)
    *   |Φ<sup>-</sup>⟩ = (1/√2)(|00⟩ - |11⟩)
    *   |Ψ<sup>+</sup>⟩ = (1/√2)(|01⟩ + |10⟩)
    *   |Ψ<sup>-</sup>⟩ = (1/√2)(|01⟩ - |10⟩)

    These states are extremely important in quantum information theory and quantum computing.

**Example:**

*   |ψ⟩ = (1/√2)(|0⟩ + |1⟩) ⊗ (1/√2)(|0⟩ - |1⟩) = (1/2)(|00⟩ - |01⟩ + |10⟩ - |11⟩)  is a *separable* state.
*   |ψ⟩ = (1/√2)(|00⟩ + |11⟩) is an *entangled* state.  You cannot find single qubit states |ψ<sub>1</sub>⟩ and |ψ<sub>2</sub>⟩ such that |ψ⟩ = |ψ<sub>1</sub>⟩ ⊗ |ψ<sub>2</sub>⟩.

### 4. Basic Calculations with Multi-Qubit States

*   **Applying Gates:** Applying a gate to a multi-qubit system involves taking the tensor product of the gate with identity matrices for the qubits it doesn't directly act on.  For example, applying the X gate to the first qubit of a two-qubit system requires applying X ⊗ I.

*   **Calculating Probabilities:** The probability of measuring a specific basis state is the squared magnitude of the corresponding amplitude.

*   **Inner Products:** To calculate the inner product (⟨φ|ψ⟩) between two multi-qubit states, you sum over the product of the amplitudes of corresponding basis states, taking the complex conjugate of the amplitudes in the bra vector ⟨φ|.

**Example:**

Consider the two-qubit state |ψ⟩ = (1/√2)|00⟩ + (1/√2)|11⟩.

1.  **Probability of Measuring |00⟩:**  |α<sub>00</sub>|<sup>2</sup> = |1/√2|<sup>2</sup> = 1/2
2.  **Applying X Gate to first Qubit:**  (X ⊗ I)|ψ⟩ =  (X ⊗ I) [(1/√2)|00⟩ + (1/√2)|11⟩] = (1/√2) X|0⟩ ⊗ I|0⟩ + (1/√2) X|1⟩ ⊗ I|1⟩  = (1/√2)|10⟩ + (1/√2)|01⟩

### 5. Partial Measurement

*   **Concept:** Partial measurement involves measuring only a subset of the qubits in a multi-qubit system.  This has a significant impact on the remaining qubits.

*   **Process:**
    1.  Choose which qubit(s) to measure.
    2.  Measure the chosen qubit(s). The measurement outcome collapses the overall state.
    3.  The remaining qubits are now in a new, potentially entangled, state conditioned on the measurement result.
    4.  Renormalize the remaining state vector so that the probabilities sum to 1.

*   **Example:** Consider the Bell state |Φ<sup>+</sup>⟩ = (1/√2)(|00⟩ + |11⟩). If we measure the first qubit and obtain the result 0, the state of the second qubit collapses to |0⟩. The overall state becomes |00⟩. If we measure the first qubit and obtain the result 1, the state of the second qubit collapses to |1⟩. The overall state becomes |11⟩.

**Example (More Detailed):**

Let's say we have the state: |ψ⟩ = (1/√3)|00⟩ + (√(2/3))|11⟩

We measure the *first* qubit.

*   **Probability of measuring 0:**  P(0) = |1/√3|<sup>2</sup> + |0|<sup>2</sup> = 1/3
*   **Probability of measuring 1:**  P(1) = |0|<sup>2</sup> + |√(2/3)|<sup>2</sup> = 2/3

*   **If we measure 0:** The state collapses to |00⟩ (we discard the part of the original state where the first qubit is 1).  We then *normalize*:  Since only |00⟩ remains, the normalized state is simply |00⟩.  The second qubit is now in the state |0⟩.

*   **If we measure 1:** The state collapses to |11⟩ (we discard the part of the original state where the first qubit is 0).  We then *normalize*:  Since only |11⟩ remains, the normalized state is simply |11⟩.  The second qubit is now in the state |1⟩.

---

### Key Points to Remember

*   The state space of *n* qubits is 2<sup>*n*</sup>-dimensional.
*   Tensor products are used to combine individual qubit states.
*   Entanglement is a key resource in quantum computing. Separable states can be simulated by classical computers.
*   Partial measurement collapses the wave function and can change the state of the remaining qubits.
*   Pay attention to normalization after partial measurements.

---

### Practice Questions/Exercises

**1.  What is the state vector representation of a three-qubit system in the state |101⟩?**

    *   **Answer:** [0, 0, 0, 0, 1, 0, 0, 0]<sup>T</sup>  (Remember the ordering is |000⟩, |001⟩, |010⟩, |011⟩, |100⟩, |101⟩, |110⟩, |111⟩)

**2.  Determine if the following two-qubit state is separable or entangled: |ψ⟩ = (1/2)|00⟩ + (1/2)|01⟩ + (1/2)|10⟩ + (1/2)|11⟩**

    *   **Answer:** Separable. It can be rewritten as  |ψ⟩ = (1/√2)(|0⟩ + |1⟩) ⊗ (1/√2)(|0⟩ + |1⟩)

**3.  Calculate the tensor product |ψ⟩ ⊗ |φ⟩, where |ψ⟩ = (1/√2)(|0⟩ + |1⟩) and |φ⟩ = |1⟩.**

    *   **Answer:** |ψ⟩ ⊗ |φ⟩ = (1/√2)(|0⟩ + |1⟩) ⊗ |1⟩ = (1/√2)(|01⟩ + |11⟩)

**4.  You have a two-qubit state |ψ⟩ = (1/√5)|00⟩ + (2/√5)|11⟩.  You measure the first qubit.
    (a) What is the probability of measuring 0?
    (b) If you measure 0, what is the state of the second qubit after measurement?**

    *   **Answer:**
        (a) P(0) = |1/√5|<sup>2</sup> = 1/5
        (b) If you measure 0, the state collapses to |00⟩. After normalization, the second qubit is in the state |0⟩.

**5.  Is the state (1/√2)(|00⟩ - |11⟩) normalized?  Justify your answer.**

    *   **Answer:** Yes, it is normalized.  |1/√2|<sup>2</sup> + |0|<sup>2</sup> + |0|<sup>2</sup> + |-1/√2|<sup>2</sup> = 1/2 + 0 + 0 + 1/2 = 1.

---
This comprehensive set of notes covers the key concepts and learning outcomes for the "Multiple Qubit States" topic. It includes definitions, examples, and practice questions to reinforce understanding.  Remember to actively work through the examples and practice questions to solidify your knowledge. Good luck!
