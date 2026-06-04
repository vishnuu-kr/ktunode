---
title: "Quantum entanglement."
subject: "QUANTUM COMPUTING"
module: "Module 2: Introduction to Quantum Information"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd28"
status: "completed"
scrapedAt: "2026-05-20T16:56:55.156Z"
---
## Quantum Computing: Module 2 - Introduction to Quantum Information - Quantum Entanglement

**Learning Outcomes:**

*   Understand the concept of quantum entanglement.
*   Describe the properties of entangled states.
*   Represent entangled states mathematically.
*   Distinguish between separable and entangled states.
*   Explain the implications of entanglement for quantum information processing.

---

### 1. What is Quantum Entanglement?

*   **Definition:** Quantum entanglement is a quantum mechanical phenomenon in which the quantum states of two or more objects are linked together in such a way that one object's state instantaneously influences the state of the other(s), no matter how far apart they are.  This linkage persists even when separated by vast distances.

*   **Key Idea:** The individual quantum states of the entangled particles are undefined.  Only the *correlated* state of the composite system is well-defined.  Measuring the state of one particle immediately determines the state of the other(s), regardless of the distance between them.  This is *not* due to classical communication, but a fundamental quantum correlation.

*   **Analogy (Caution! This can be misleading):** Imagine you have two envelopes. One contains a red ball, and the other contains a blue ball. You don't know which envelope contains which ball. You send one envelope to Alice and keep the other. When Alice opens her envelope and finds the red ball, she instantly knows that you have the blue ball.  *This is NOT how quantum entanglement works.* In entanglement, the particles are in a *superposition* of states until measured.  The balls in the envelope analogy are already pre-determined, while in entanglement, the properties only become defined upon measurement.

### 2. Properties of Entangled States

*   **Correlation:** Entangled particles exhibit strong correlations that cannot be explained by classical physics.  These correlations violate Bell's inequalities, demonstrating that local realism (the idea that objects have definite properties independent of measurement, and that information cannot travel faster than light) is false.

*   **Non-Locality:** The "instantaneous" connection between entangled particles seems to violate the principle of locality. Measuring one particle instantly affects the other, regardless of the distance. This doesn't allow for faster-than-light communication because you can't *control* the outcome of the measurement on your entangled particle to send a specific message. You only know the correlation once you compare results with the other party who also measured their particle.

*   **Superposition:** Entangled particles are initially in a superposition of states. Before measurement, neither particle has a definite state.

*   **Fragility:** Entanglement is a delicate phenomenon. Interactions with the environment (decoherence) can easily destroy the entanglement.

### 3. Representing Entangled States Mathematically

*   **Qubits:** Recall that a qubit can be in a superposition of states |0⟩ and |1⟩:  |ψ⟩ = α|0⟩ + β|1⟩, where |α|² + |β|² = 1.

*   **Two-Qubit States:**  A two-qubit system has four basis states: |00⟩, |01⟩, |10⟩, and |11⟩.  A general two-qubit state can be written as:  |ψ⟩ = a|00⟩ + b|01⟩ + c|10⟩ + d|11⟩, where |a|² + |b|² + |c|² + |d|² = 1.

*   **Bell States (Example of maximally entangled states):**  Bell states are four specific maximally entangled two-qubit states:

    *   |Φ⁺⟩ = (1/√2)(|00⟩ + |11⟩)
    *   |Φ⁻⟩ = (1/√2)(|00⟩ - |11⟩)
    *   |Ψ⁺⟩ = (1/√2)(|01⟩ + |10⟩)
    *   |Ψ⁻⟩ = (1/√2)(|01⟩ - |10⟩)

    *   **Interpretation of |Φ⁺⟩:**  If you measure the first qubit of |Φ⁺⟩ and find it to be |0⟩, you instantly know that the second qubit is also |0⟩. If you measure the first qubit and find it to be |1⟩, you instantly know the second qubit is also |1⟩. The measurement outcomes are perfectly correlated.  The same principle applies to the other Bell states, with variations in the correlation.

*   **Product States (Separable States):**  A state is *separable* if it can be written as a tensor product of individual qubit states.  For example:

    *   |ψ⟩ = |ψ₁⟩ ⊗ |ψ₂⟩ = (α|0⟩ + β|1⟩) ⊗ (γ|0⟩ + δ|1⟩) = αγ|00⟩ + αδ|01⟩ + βγ|10⟩ + βδ|11⟩

    *   A separable state *is not* entangled.  The state of one qubit is independent of the state of the other qubit.

### 4. Distinguishing Between Separable and Entangled States

*   **Key Difference:** Separable states can be written as a tensor product of individual qubit states. Entangled states *cannot* be written in this form.

*   **Example 1 (Separable):** |ψ⟩ = (1/√2)(|0⟩ + |1⟩) ⊗ (1/√2)(|0⟩ + |1⟩) = (1/2)(|00⟩ + |01⟩ + |10⟩ + |11⟩).  This is a separable state.

*   **Example 2 (Entangled):** |Φ⁺⟩ = (1/√2)(|00⟩ + |11⟩).  Try to write this as a tensor product |ψ₁⟩ ⊗ |ψ₂⟩. You'll find it's impossible.  Therefore, it's an entangled state.

*   **Schmidt Decomposition (Advanced):** A more formal method to determine if a state is entangled involves the Schmidt decomposition.  If the Schmidt rank is greater than 1, the state is entangled.

### 5. Implications of Entanglement for Quantum Information Processing

*   **Quantum Teleportation:** Entanglement is a crucial resource for quantum teleportation, which allows the transfer of an unknown quantum state from one location to another, without physically moving the qubit itself.

*   **Quantum Cryptography:** Entanglement enables secure key distribution in quantum cryptography protocols like BB84 and E91, providing information-theoretic security.

*   **Quantum Computation:** Entanglement is believed to be a key resource for achieving quantum speedup in certain quantum algorithms. It allows for the creation of complex correlations between qubits, which can be exploited to solve problems more efficiently than classical computers.  Many believe that entanglement is *necessary* for a quantum computer to outperform a classical computer on certain problems.

*   **Quantum Metrology:** Entanglement can be used to improve the precision of measurements beyond the classical limits.

### 6. Important Points to Remember

*   Entanglement is a quantum phenomenon where two or more particles are linked together in a way that their fates are intertwined.
*   Measuring the state of one entangled particle instantly affects the state of the other, regardless of distance.  This is not faster-than-light communication because you cannot *control* the outcome of the measurement to transmit information.
*   Entangled states cannot be written as a tensor product of individual qubit states.
*   Entanglement is a fragile resource that is easily destroyed by interaction with the environment (decoherence).
*   Entanglement has profound implications for quantum information processing, enabling quantum teleportation, quantum cryptography, and quantum computation.

### Practice Questions/Exercises:

**1. Are the following states entangled or separable? Explain your reasoning.**

    a) |ψ⟩ = |0⟩ ⊗ |1⟩
    b) |ψ⟩ = (1/√2)(|00⟩ + |11⟩)
    c) |ψ⟩ = (1/2)(|00⟩ + |01⟩ + |10⟩ + |11⟩)
    d) |ψ⟩ = (1/√2)(|01⟩ - |10⟩)

**2.  Suppose Alice and Bob share an entangled pair in the state |Ψ⁺⟩ = (1/√2)(|01⟩ + |10⟩). Alice measures her qubit in the computational basis ({|0⟩, |1⟩}).**

    a) If Alice measures |0⟩, what is the state of Bob's qubit immediately after Alice's measurement?
    b) If Alice measures |1⟩, what is the state of Bob's qubit immediately after Alice's measurement?

**3. Why is entanglement considered a fragile resource in quantum computing?**

**4. Briefly describe one application of quantum entanglement.**

**Answers:**

1.  a) Separable: This is a direct tensor product of |0⟩ and |1⟩.
    b) Entangled: Cannot be written as a tensor product of individual qubit states. This is the Bell state |Φ⁺⟩.
    c) Separable: This can be written as (1/√2)(|0⟩ + |1⟩) ⊗ (1/√2)(|0⟩ + |1⟩).
    d) Entangled: Cannot be written as a tensor product of individual qubit states. This is the Bell state |Ψ⁻⟩.

2.  a) If Alice measures |0⟩, Bob's qubit collapses to the state |1⟩.
    b) If Alice measures |1⟩, Bob's qubit collapses to the state |0⟩.

3.  Entanglement is fragile because it is easily destroyed by interactions with the environment, a process known as decoherence.  Even small amounts of noise or unwanted interactions can disrupt the delicate quantum correlations between entangled particles.

4.  Quantum teleportation is an application of quantum entanglement where the quantum state of one qubit can be transferred to another qubit located elsewhere using an entangled pair and classical communication. Another application is quantum cryptography.

---
