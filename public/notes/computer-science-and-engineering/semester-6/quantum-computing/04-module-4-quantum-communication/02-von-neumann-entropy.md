---
title: "Von Neumann entropy"
subject: "QUANTUM COMPUTING"
module: "Module 4: Quantum Communication: "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd30"
status: "completed"
scrapedAt: "2026-05-20T16:56:59.496Z"
---
## Quantum Computing: Module 4 - Quantum Communication: Von Neumann Entropy

### Learning Outcomes:

*   Understand the definition and properties of von Neumann entropy.
*   Calculate the von Neumann entropy for pure and mixed quantum states.
*   Relate von Neumann entropy to the classical Shannon entropy.
*   Apply von Neumann entropy to quantify entanglement.
*   Understand the concept of quantum relative entropy.

### 1. Introduction to Von Neumann Entropy

*   **Definition:** The von Neumann entropy, denoted as S(ρ), is a measure of the uncertainty or mixedness of a quantum state described by the density operator ρ.  It is a quantum analogue of the classical Shannon entropy.

*   **Formula:**
    ```
    S(ρ) = -Tr(ρ log₂ ρ)
    ```
    Where:
    *   ρ is the density operator representing the quantum state.
    *   Tr( ) is the trace operator (sum of the diagonal elements).
    *   log₂ is the base-2 logarithm. (Note: Natural logarithm, ln, is often used, so S(ρ) is in "nats" not "bits". Adjust your units accordingly).

*   **Spectral Decomposition:** To calculate the von Neumann entropy, we first need to perform the spectral decomposition of the density operator ρ:
    ```
    ρ = Σᵢ λᵢ |ψᵢ⟩⟨ψᵢ|
    ```
    Where:
    *   λᵢ are the eigenvalues of ρ (probabilities, since ρ is a valid density operator).
    *   |ψᵢ⟩ are the corresponding eigenvectors of ρ. These form an orthonormal basis.

*   **Entropy Calculation Using Eigenvalues:**  The von Neumann entropy can then be computed directly from the eigenvalues:
    ```
    S(ρ) = -Σᵢ λᵢ log₂ λᵢ
    ```

*   **Key Concepts:**
    *   **Density Operator (ρ):** A matrix that describes the state of a quantum system, whether it is in a pure state or a mixed state. It is Hermitian, positive semi-definite, and has a trace of 1.
    *   **Pure State:** A quantum state that can be described by a single state vector |ψ⟩.  Its density operator is ρ = |ψ⟩⟨ψ|.
    *   **Mixed State:** A probabilistic mixture of pure states. It cannot be described by a single state vector. It is represented by a density operator.
    *   **Trace (Tr):** The sum of the diagonal elements of a matrix.
    *   **Eigenvalues and Eigenvectors:**  For a matrix (like ρ), the eigenvectors |ψ⟩ satisfy the equation A|ψ⟩ = λ|ψ⟩, where λ is the eigenvalue.

### 2. Properties of Von Neumann Entropy

*   **Non-Negativity:** S(ρ) ≥ 0.  The entropy is always non-negative.
*   **Zero Entropy for Pure States:** S(ρ) = 0 if and only if ρ represents a pure state.  A pure state has no uncertainty.  This occurs when one eigenvalue is 1 and all others are 0.
*   **Maximum Entropy for Maximally Mixed States:** S(ρ) ≤ log₂ d, where d is the dimension of the Hilbert space.  The maximum entropy is achieved when ρ is maximally mixed, i.e., ρ = I/d, where I is the identity matrix.  In this case, all eigenvalues are equal to 1/d.
*   **Unitary Invariance:** S(UρU†) = S(ρ), where U is a unitary operator. Applying a unitary transformation to the state doesn't change its entropy.
*   **Concavity:** For any set of density operators ρ₁, ρ₂, ..., ρₙ and probabilities p₁, p₂, ..., pₙ such that Σᵢ pᵢ = 1,
    ```
    S(Σᵢ pᵢ ρᵢ) ≥ Σᵢ pᵢ S(ρᵢ)
    ```
    The entropy of a mixture is greater than or equal to the weighted average of the entropies of the individual states.  This represents the additional uncertainty arising from not knowing which state you have.
*   **Subadditivity:** For a bipartite quantum system with density operator ρAB,  S(ρAB) ≤ S(ρA) + S(ρB), where ρA = TrB(ρAB) and ρB = TrA(ρAB) are the reduced density operators.  This is similar to the classical case.  Equality holds if and only if the states are uncorrelated.
*   **Araki-Lieb Inequality:**  For a bipartite quantum system with density operator ρAB, |S(ρA) - S(ρB)| ≤ S(ρAB).

### 3. Examples of Von Neumann Entropy Calculation

*   **Example 1: Pure State**
    Let |ψ⟩ = (1/√2)|0⟩ + (1/√2)|1⟩.  Then ρ = |ψ⟩⟨ψ|:
    ```
    ρ =  |ψ⟩⟨ψ| =  [(1/√2)|0⟩ + (1/√2)|1⟩][(1/√2)⟨0| + (1/√2)⟨1|]
       =  (1/2)|0⟩⟨0| + (1/2)|0⟩⟨1| + (1/2)|1⟩⟨0| + (1/2)|1⟩⟨1|
       =  [[1/2, 1/2],
           [1/2, 1/2]]
    ```

    The eigenvalues of ρ are λ₁ = 1 and λ₂ = 0.

    Therefore, S(ρ) = - (1 * log₂(1) + 0 * log₂(0)) = - (0 + 0) = 0.  (Note: 0*log(0) is defined as 0).

*   **Example 2: Maximally Mixed State (Qubit)**
    ρ = (1/2)|0⟩⟨0| + (1/2)|1⟩⟨1| = (1/2)I = [[1/2, 0], [0, 1/2]].

    The eigenvalues of ρ are λ₁ = 1/2 and λ₂ = 1/2.

    Therefore, S(ρ) = - (1/2 * log₂(1/2) + 1/2 * log₂(1/2)) = - (1/2 * (-1) + 1/2 * (-1)) = 1.  This is the maximum possible entropy for a qubit.

*   **Example 3: Mixed State (Qubit)**
    ρ = 0.8 |0⟩⟨0| + 0.2 |1⟩⟨1| = [[0.8, 0], [0, 0.2]].

    The eigenvalues of ρ are λ₁ = 0.8 and λ₂ = 0.2.

    Therefore, S(ρ) = - (0.8 * log₂(0.8) + 0.2 * log₂(0.2)) ≈ - (0.8 * (-0.3219) + 0.2 * (-2.3219)) ≈ 0.7219 bits.

### 4. Von Neumann Entropy and Shannon Entropy

*   **Relationship:**  The von Neumann entropy is a generalization of the Shannon entropy to the quantum realm. The Shannon entropy applies to classical probability distributions, while the von Neumann entropy applies to quantum states represented by density operators.

*   **Shannon Entropy:** For a classical probability distribution {pᵢ}, the Shannon entropy is defined as:
    ```
    H(X) = - Σᵢ pᵢ log₂ pᵢ
    ```

*   **Connection:**  If we consider a density operator ρ that is diagonal in a particular basis (i.e., it is a classical mixture of states), then the von Neumann entropy reduces to the Shannon entropy for the probability distribution given by the diagonal elements (eigenvalues) of ρ.

*   **Distinction:** The key difference is that the von Neumann entropy takes into account the *coherences* present in quantum states, which are absent in classical probability distributions. This is why it's more general.

### 5. Von Neumann Entropy and Entanglement

*   **Entanglement Quantification:** Von Neumann entropy can be used to quantify the entanglement present in a bipartite quantum state.

*   **Bipartite System:** Consider a bipartite system AB with density operator ρAB.

*   **Reduced Density Operators:**  We define the reduced density operators for subsystems A and B as:
    *   ρA = TrB(ρAB)  (Trace over subsystem B)
    *   ρB = TrA(ρAB)  (Trace over subsystem A)

*   **Entanglement Measure:** If ρAB is a pure state (i.e., the entire system AB is in a pure state), then the von Neumann entropy of the reduced density operators, S(ρA) and S(ρB), is a measure of entanglement between A and B. In this specific case, S(ρA) = S(ρB).  This entropy is called the *entanglement entropy*.

*   **Maximally Entangled State:** For a maximally entangled state like the Bell state |Φ⁺⟩ = (1/√2)(|00⟩ + |11⟩), S(ρA) = S(ρB) = 1. This represents the maximum possible entanglement between the two qubits.

*   **Separable State:** If ρAB is a separable state (i.e., it can be written as a convex combination of product states), then S(ρA) and S(ρB) will be relatively small, indicating little or no entanglement.

*   **Important Note:**  If the overall state ρAB is mixed, then S(ρA) and S(ρB) can be non-zero even if there is no entanglement between A and B due to classical correlations. Therefore, these entropies are *not* a good measure of entanglement when ρAB is mixed.  More sophisticated measures, like the entanglement of formation, are needed in that case.

### 6. Quantum Relative Entropy

*   **Definition:** The quantum relative entropy, denoted as S(ρ || σ), is a measure of the distinguishability between two quantum states ρ and σ. It quantifies how different ρ is from σ.

*   **Formula:**
    ```
    S(ρ || σ) = Tr(ρ log₂ ρ) - Tr(ρ log₂ σ) = Tr(ρ (log₂ ρ - log₂ σ))
    ```
    Where:
    *   ρ and σ are density operators.

*   **Properties:**
    *   **Non-Negativity:** S(ρ || σ) ≥ 0.  Gibbs' inequality.  It is equal to zero if and only if ρ = σ.
    *   **Asymmetry:** In general, S(ρ || σ) ≠ S(σ || ρ). The relative entropy is not symmetric.
    *   **Monotonicity:**  Quantum relative entropy does not increase under completely positive trace-preserving (CPTP) maps (quantum channels). This property is fundamental in quantum information theory.
    *   **Operational Interpretation:**  Quantum relative entropy is related to the error probability in distinguishing between two quantum states in hypothesis testing.

*   **Significance:**
    *   It provides a measure of how much information is lost when approximating a state ρ by another state σ.
    *   It is a key tool in quantum information theory for analyzing the performance of quantum communication protocols.
    *   It plays a crucial role in quantum hypothesis testing and quantum channel coding.

### 7. Important Points to Remember

*   Von Neumann entropy is a fundamental concept in quantum information theory.
*   It quantifies the uncertainty or mixedness of a quantum state.
*   It is a generalization of Shannon entropy to the quantum domain.
*   It can be used to quantify entanglement in pure bipartite states.
*   Quantum relative entropy measures the distinguishability between two quantum states.
*   Calculating eigenvalues is essential for computing Von Neumann entropy.

### 8. Practice Questions/Exercises

**Question 1:** Calculate the von Neumann entropy of the following density matrix:

```
ρ = [[0.6, 0],
     [0, 0.4]]
```

**Answer:**

1.  The eigenvalues of ρ are λ₁ = 0.6 and λ₂ = 0.4.
2.  S(ρ) = - (0.6 * log₂(0.6) + 0.4 * log₂(0.4)) ≈ - (0.6 * (-0.737) + 0.4 * (-1.3219)) ≈ 0.971 bits.

**Question 2:** What is the von Neumann entropy of the following pure state |ψ⟩ = |0⟩?

**Answer:**

1.  ρ = |0⟩⟨0| = [[1, 0], [0, 0]].
2.  The eigenvalues are λ₁ = 1 and λ₂ = 0.
3.  S(ρ) = - (1 * log₂(1) + 0 * log₂(0)) = 0.

**Question 3:**  Explain why the von Neumann entropy of a reduced density matrix can be used to quantify entanglement for a *pure* bipartite state.

**Answer:**

For a pure bipartite state |ψ⟩AB, the entanglement entropy is defined as S(ρA) = S(ρB) where ρA = TrB(|ψ⟩AB⟨ψ|) and ρB = TrA(|ψ⟩AB⟨ψ|).  If the overall state is pure, then any entropy in the reduced states *must* come from the correlations (entanglement) between the two subsystems. If the subsystems were unentangled, the composite system could be described as a product state, and the reduced states would be pure (zero entropy).

**Question 4:**  Why is the von Neumann entropy not a good measure of entanglement for *mixed* bipartite states?

**Answer:**

When ρAB is mixed, the entropy in the reduced density matrices (ρA and ρB) can arise from both classical correlations *and* quantum entanglement.  The von Neumann entropy does not distinguish between these two sources of entropy. Therefore, a high value of S(ρA) (or S(ρB)) does not necessarily indicate a high degree of entanglement. It could simply mean that there are strong classical correlations.

**Question 5:** State two key properties of Quantum Relative Entropy

**Answer:**

1.  Non-Negativity: S(ρ || σ) ≥ 0.  It is equal to zero if and only if ρ = σ.
2.  Asymmetry: In general, S(ρ || σ) ≠ S(σ || ρ).
