---
title: "Quantum complexity classes: BQP, QMA"
subject: "COMPUTATIONAL COMPLEXITY"
module: "Module 4: Circuit Complexity "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ca25"
status: "completed"
scrapedAt: "2026-05-20T17:24:05.046Z"
---
# COMPUTATIONAL COMPLEXITY: Module 4: Circuit Complexity

## Topic: Quantum Complexity Classes: BQP, QMA

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Define and understand the complexity class BQP (Bounded-Error Quantum Polynomial Time).
*   Understand the role of quantum circuits and quantum Turing machines in defining BQP.
*   Relate BQP to classical complexity classes like P and NP.
*   Define and understand the complexity class QMA (Quantum Merlin-Arthur).
*   Understand the concept of a quantum proof and its verification for QMA.
*   Relate QMA to classical complexity classes like MA and NP.
*   Discuss the potential implications of BQP and QMA for cryptography and other areas.

---

## 1. Introduction to Quantum Complexity Classes

Classical complexity theory classifies computational problems based on the resources (time, space) required by classical algorithms to solve them. Quantum complexity theory extends this by considering problems that can be solved efficiently on quantum computers.

**Key Idea:** Quantum computers can leverage superposition, entanglement, and interference to potentially solve certain problems much faster than classical computers.

---

## 2. BQP: Bounded-Error Quantum Polynomial Time

### 2.1. Definition

**BQP** (Bounded-Error Quantum Polynomial Time) is the class of decision problems for which there exists a quantum algorithm that solves them in polynomial time with a probability of error that is bounded away from 1/2.

*   **Decision Problem:** A problem where the answer is either "yes" or "no".
*   **Quantum Algorithm:** An algorithm that utilizes quantum mechanical principles (superposition, entanglement) to perform computations.
*   **Polynomial Time:** The number of operations (or circuit depth/size) grows as a polynomial in the input size ($n$).
*   **Bounded Error:** The probability of giving the correct answer is at least $1 - \epsilon$, where $\epsilon$ is a small constant (e.g., $\epsilon = 1/3$). This means the probability of error is strictly less than 1/2.

### 2.2. How BQP is Defined

BQP can be defined using either:

#### 2.2.1. Quantum Turing Machines (QTMs)

A decision problem is in BQP if there's a probabilistic polynomial-time quantum Turing machine that accepts inputs labeled "yes" with probability at least $2/3$ and rejects inputs labeled "no" with probability at least $2/3$.

*   **Probabilistic:** The machine's transitions can be probabilistic, a property shared with classical probabilistic Turing machines.
*   **Quantum:** The machine's states and operations are quantum.

#### 2.2.2. Quantum Circuits

A decision problem is in BQP if there's a polynomial-size quantum circuit that computes the function corresponding to the decision problem. For a "yes" input $x$, the circuit produces output 1 with probability $\ge 2/3$. For a "no" input $x$, the circuit produces output 0 with probability $\ge 2/3$.

*   **Quantum Circuit:** A sequence of quantum gates applied to a set of qubits. The size of the circuit is typically measured by the number of gates or the depth of the circuit.
*   **Polynomial Size:** The number of gates or the depth of the circuit is a polynomial function of the input size.

**Important Note:** For BQP, the probability of error can be reduced to an arbitrarily small constant $\epsilon$ by running the quantum algorithm multiple times in parallel and taking a majority vote.

### 2.3. Relationship to Classical Complexity Classes

*   **P ⊆ BQP:** Any problem solvable in polynomial time classically (P) can be solved by a quantum computer in polynomial time. A classical deterministic algorithm can be simulated by a quantum algorithm that simply performs the classical operations deterministically, with no superposition or entanglement.

*   **BQP ⊆ PSPACE:** If a problem can be solved in BQP, it can also be solved in PSPACE (Polynomial Space). This is because quantum computations can be simulated by classical computers using a polynomial amount of space to keep track of the amplitudes.

*   **BQP vs. NP:**
    *   **NP ⊆ BQP:** This is a known inclusion. Many NP-complete problems, like factoring, are believed to be in BQP. Shor's algorithm for factoring is a prominent example of an NP problem solvable in BQP.
    *   **Is BQP ⊆ NP?** This is an open question, but it is widely believed to be **false**. There are problems in BQP that are not known to be in NP, such as factoring. If BQP were a subset of NP, it would imply that all problems solvable efficiently by quantum computers are also efficiently verifiable by classical computers, which is not the current understanding.
    *   **Is NP ⊆ BQP?** Yes. A quantum algorithm can simulate a classical non-deterministic Turing machine, thus solving any problem in NP.

**Summary of Known Relationships:**

$$ P \subseteq BQP \subseteq PSPACE $$
$$ NP \subseteq BQP $$

It is widely conjectured that $P \neq BQP$ and $NP \neq BQP$.

### 2.4. Examples of Problems in BQP

*   **Factoring:** Shor's algorithm can factor large integers exponentially faster than the best known classical algorithms.
*   **Discrete Logarithm:** Shor's algorithm also solves the discrete logarithm problem efficiently.
*   **Grover's Algorithm:** Provides a quadratic speedup for unstructured search problems. While not exponential, it's a significant speedup and places many search-related problems in BQP.
*   **Simulating Quantum Systems:** Quantum computers are naturally suited for simulating quantum mechanical systems, a task that is intractable for classical computers for large systems.

---

## 3. QMA: Quantum Merlin-Arthur

### 3.1. Definition

**QMA** (Quantum Merlin-Arthur) is the class of decision problems for which a "yes" instance can be certified by a quantum proof (or "witness") that can be verified by a polynomial-time quantum Turing machine. This is the quantum analogue of the classical complexity class MA.

*   **Decision Problem:** The answer is either "yes" or "no".
*   **Quantum Proof/Witness:** A quantum state $|\psi\rangle$ that is provided along with the input. This state can be entangled and can represent complex information.
*   **Verifier:** A polynomial-time quantum Turing machine that takes the input and the quantum proof as input.
*   **Two Provers (Merlin-Arthur Style):**
    *   **Merlin (Prover):** Has access to the quantum proof and can send it to Arthur.
    *   **Arthur (Verifier):** A polynomial-time quantum Turing machine that receives the input and the proof, and must decide "yes" or "no".

### 3.2. Formal Definition

A decision problem $\Pi$ is in QMA if there exist polynomial-bounded functions $p(n)$ and $q(n)$, and a polynomial-time quantum Turing machine $V$ such that for any input $x$ of length $n$:

1.  **If $x$ is a "yes" instance:** There exists a quantum state $|\psi\rangle$ of at most $q(n)$ qubits such that $V$ accepts $x$ with $|\psi\rangle$ with probability at least $2/3$.
2.  **If $x$ is a "no" instance:** For all quantum states $|\phi\rangle$ of at most $q(n)$ qubits, $V$ accepts $x$ with $|\phi\rangle$ with probability at most $1/3$.

**Key Aspects of QMA:**

*   **Quantum Proofs:** The crucial difference from MA is the nature of the proof. In MA, the proof is a classical string. In QMA, the proof is a quantum state.
*   **Quantum Verification:** The verifier is a quantum Turing machine, allowing it to perform quantum operations on the proof.
*   **Bounded Error:** Similar to BQP, the verifier has a bounded probability of error. This can be amplified by repeating the verification process.
*   **Polynomial Size of Proof:** The length of the quantum proof (number of qubits) is polynomial in the input size.

### 3.3. Relationship to Classical Complexity Classes

*   **MA ⊆ QMA:** Any classical proof (a string) can be represented as a quantum state (a computational basis state). The verification process in MA can be simulated by a quantum verifier.

*   **NP ⊆ QMA:** If a problem is in NP, there's a polynomial-time classical verifier and a classical witness. This classical witness can be encoded as a quantum state, and a quantum verifier can simulate the classical verification.

*   **QMA ⊆ PSPACE:** Similar to BQP, quantum computations (and thus QMA verification) can be simulated by classical computers using polynomial space.

*   **QMA vs. NEXP:** It is believed that QMA is likely larger than NEXP (Non-deterministic Exponential Time). This means there might be problems in QMA that are not in NEXP, implying a potential separation from classical complexity.

**Summary of Known Relationships:**

$$ MA \subseteq QMA $$
$$ NP \subseteq QMA \subseteq PSPACE $$

It is conjectured that $MA \neq QMA$, $NP \neq QMA$, and $QMA \neq PSPACE$.

### 3.4. Examples of Problems in QMA

*   **Quantum Hamiltonian Problem (Ising Model/Local Hamiltonians):** Determining whether the ground state energy of a local Hamiltonian is above or below a certain threshold. This is a natural problem for quantum computers, and its QMA membership is a key result.

    *   **Input:** A description of a Hamiltonian $H = \sum_{i=1}^m H_i$, where each $H_i$ acts on at most $k$ qubits, and an energy threshold $\lambda$.
    *   **"Yes" Instance:** The ground state energy of $H$ is $\le \lambda$. The quantum proof could be the ground state itself.
    *   **"No" Instance:** The ground state energy of $H$ is $\ge \lambda + \delta$ for some polynomial separation $\delta$.

*   **Unique Games:** While the classical unique games problem is believed to be hard (NP-hard), there are quantum variants that might be in QMA.

---

## 4. Key Differences and Implications

| Feature          | BQP                                  | QMA                                         |
| :--------------- | :----------------------------------- | :------------------------------------------ |
| **Input**        | A string (for decision problems)     | A string + a quantum proof/witness $|\psi\rangle$ |
| **Verifier**     | A quantum algorithm                | A quantum algorithm (verifier)              |
| **Goal**         | Solve a problem efficiently          | Verify a "yes" instance with a proof        |
| **Proof Type**   | None (inherent computational power)  | Quantum state $|\psi\rangle$                 |
| **Analogue**     | BPP (Bounded-Error Probabilistic Polynomial Time) | MA (Merlin-Arthur)                          |
| **Known Contains** | P, NP                                | NP, MA                                      |
| **Known Contained In** | PSPACE                               | PSPACE                                      |
| **Conjectured Separations** | $P \neq BQP$, $NP \neq BQP$          | $MA \neq QMA$, $NP \neq QMA$, $QMA \neq PSPACE$ |

### 4.1. Implications for Cryptography

*   **BQP and Cryptography:** The existence of efficient quantum algorithms for problems like factoring and discrete logarithm (Shor's algorithm) has profound implications for current public-key cryptography (e.g., RSA, ECC). These cryptosystems are based on the presumed classical hardness of these problems. Quantum computers in BQP can break them efficiently. This has driven research into **post-quantum cryptography**.

*   **QMA and Cryptography:** While BQP deals with problems solvable efficiently by a quantum computer, QMA relates to problems whose "yes" instances can be certified by quantum proofs. The hardness of some problems related to QMA could potentially be leveraged for new cryptographic primitives or to understand the limits of quantum computation in adversarial settings.

### 4.2. Computational Power

*   **BQP** is considered the "natural" complexity class for problems efficiently solvable by quantum computers, analogous to P for deterministic classical computation and BPP for probabilistic classical computation.

*   **QMA** highlights the potential power of proofs in a quantum setting. The ability to provide quantum states as proofs could allow for the certification of complex properties that are hard to verify classically.

---

## 5. Practice Questions and Exercises

**Question 1:**
Which of the following statements about BQP is **false**?
a) P is a subset of BQP.
b) BQP is a subset of PSPACE.
c) NP is a subset of BQP.
d) BQP is a subset of NP.

**Question 2:**
What is the primary difference between the complexity class MA and QMA?
a) The type of input allowed.
b) The computational power of the verifier.
c) The nature of the proof/witness.
d) The definition of polynomial time.

**Question 3:**
Explain why Shor's algorithm for factoring places factoring in BQP.
(Hint: Focus on the time complexity and probability of error).

**Question 4:**
Describe a scenario where a problem might be in QMA but not in NP.
(Hint: Consider the nature of the proof).

**Question 5:**
If a problem is in BQP, does it mean it is efficiently solvable by a classical computer? Justify your answer.

---

## 6. Answers to Practice Questions

**Answer 1:**
d) BQP is a subset of NP.
**Justification:** It is widely conjectured that BQP is not a subset of NP. Problems like factoring are in BQP but are not known to be in NP. The other statements are known inclusions or beliefs.

**Answer 2:**
c) The nature of the proof/witness.
**Justification:** In MA, the proof is a classical string. In QMA, the proof is a quantum state. Both classes involve a polynomial-time verifier (Arthur) and a potentially non-polynomial-time prover (Merlin).

**Answer 3:**
Shor's algorithm provides a quantum algorithm for factoring that runs in time $O((\log N)^3)$ or $O((\log N)^2 \log \log N)$, where $N$ is the number to be factored. This runtime is polynomial in the number of bits of the input $N$ (i.e., $\log N$). The algorithm can be designed to have a bounded probability of error, which can be further reduced by repetition. Therefore, factoring fits the definition of a problem in BQP.

**Answer 4:**
A problem could be in QMA but not in NP if the "yes" instances can be certified by a quantum proof (a quantum state) that is fundamentally different from and potentially more complex than any classical string witness that could be used for an NP problem. For example, the quantum Hamiltonian problem. For a "yes" instance of the local Hamiltonian problem, the quantum proof could be the ground state of the Hamiltonian itself. This ground state might be a superposition of many classical states and difficult to describe or verify classically with a polynomial-sized witness. While the verifier checks this quantum state efficiently, constructing such a quantum state or a classical equivalent as a proof might be intractable within NP.

**Answer 5:**
Not necessarily. While P ⊆ BQP, meaning problems efficiently solvable classically are also efficiently solvable quantumly, the reverse is not known to be true. Problems in BQP might require quantum computational resources (like superposition and entanglement) that are not available to classical algorithms. For example, factoring is in BQP due to Shor's algorithm, but it is not known to be in P, and it is widely believed that no efficient classical algorithm exists for it.

---

## 7. Important Points to Remember

*   **BQP:** The class of problems efficiently solvable by a bounded-error quantum computer. It's a central class for understanding quantum computational power.
*   **QMA:** The class of problems whose "yes" instances can be certified by quantum proofs, verifiable by a polynomial-time quantum algorithm. It highlights the potential of quantum proofs.
*   **Quantum Advantages:** BQP suggests quantum computers offer significant speedups for certain problems (e.g., factoring).
*   **Complexity Landscape:** BQP and QMA extend our understanding of computational complexity by incorporating quantum resources. They are believed to be larger than their classical counterparts (P and NP respectively).
*   **Cryptographic Impact:** The existence of BQP algorithms for factoring and discrete logarithm is the primary driver for developing quantum-resistant cryptography.
*   **Proof Power:** QMA demonstrates that allowing quantum states as proofs can lead to different complexity classes compared to classical proofs.
