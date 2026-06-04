---
title: "Classical information over noisy quantum channels"
subject: "QUANTUM COMPUTING"
module: "Module 4: Quantum Communication: "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd33"
status: "completed"
scrapedAt: "2026-05-20T16:57:01.718Z"
---
# Quantum Computing: Module 4 - Quantum Communication
## Topic: Classical Information Over Noisy Quantum Channels

**Learning Outcomes:**

*   Understand the fundamental concepts of quantum channels and their representation.
*   Learn about different types of quantum noise and their effects on qubits.
*   Analyze the capacity of noisy quantum channels for transmitting classical information.
*   Explore techniques for mitigating noise and improving communication fidelity (e.g., quantum error correction).
*   Understand the Holevo bound and its implications for classical information transmission over quantum channels.

**1. Introduction to Quantum Channels**

*   **Definition:** A quantum channel is a completely positive, trace-preserving (CPTP) map that describes the evolution of a quantum state. It represents any physical process that can happen to a quantum system, including:
    *   Ideal transmission
    *   Interactions with an environment (noise)
    *   Quantum operations performed intentionally

*   **Mathematical Representation:** A quantum channel *ε* maps an input density operator *ρ* to an output density operator *ε(ρ)*.
    *   **Completely Positive (CP):** Ensures that the channel's action on a part of a larger entangled system doesn't result in negative probabilities.
    *   **Trace-Preserving (TP):** Ensures that the output state is still a valid density matrix (trace = 1, representing probabilities summing to 1).

*   **Kraus Operators:** Quantum channels can be represented using Kraus operators (also called operator-sum representation).
    *   *ε(ρ) = Σ<sub>k</sub> A<sub>k</sub>ρA<sub>k</sub><sup>†</sup>*
    *   Where *A<sub>k</sub>* are the Kraus operators satisfying the completeness relation: *Σ<sub>k</sub> A<sub>k</sub><sup>†</sup>A<sub>k</sub> = I* (I is the identity operator).
    *   The Kraus operators provide a way to describe the possible evolutions of the quantum state.

*   **Example:** An ideal channel where the qubit is perfectly transmitted has only one Kraus operator: *A<sub>1</sub> = I*

**2. Types of Quantum Noise**

Quantum noise is any unwanted interaction of a quantum system with its environment (the "bath"), leading to decoherence and errors.

*   **Bit-Flip Channel:**
    *   Analogous to a bit flip in classical communication.
    *   A qubit |ψ⟩ = α|0⟩ + β|1⟩ is flipped to  α|1⟩ + β|0⟩ with probability *p*.
    *   Kraus operators: *A<sub>0</sub> = √(1-p) I*,  *A<sub>1</sub> = √p σ<sub>x</sub>*  (where σ<sub>x</sub> is the Pauli-X matrix).

*   **Phase-Flip Channel:**
    *   Analogous to a sign flip in the amplitude of the |1⟩ state.
    *   A qubit |ψ⟩ = α|0⟩ + β|1⟩ becomes α|0⟩ - β|1⟩ with probability *p*.
    *   Kraus operators: *A<sub>0</sub> = √(1-p) I*, *A<sub>1</sub> = √p σ<sub>z</sub>*  (where σ<sub>z</sub> is the Pauli-Z matrix).

*   **Bit-Phase-Flip Channel (Depolarizing Channel):**
    *   A combination of bit-flip and phase-flip errors.
    *   Occurs with probability *p*.
    *   Kraus operators: *A<sub>0</sub> = √(1-p) I*, *A<sub>1</sub> = √p σ<sub>y</sub>*  (where σ<sub>y</sub> is the Pauli-Y matrix).

*   **Depolarizing Channel:**
    *   Replaces the quantum state with the completely mixed state (maximally mixed state, ρ = I/2) with probability *p*.  This means with probability *p* the qubit is lost and becomes random.
    *   *ε(ρ) = (1 - p) ρ + (p/3)(σ<sub>x</sub>ρσ<sub>x</sub> + σ<sub>y</sub>ρσ<sub>y</sub> + σ<sub>z</sub>ρσ<sub>z</sub>)*
    *   Kraus operators: *A<sub>0</sub> = √(1 - (3/4)p) I*, *A<sub>1</sub> = √(p/4) σ<sub>x</sub>*, *A<sub>2</sub> = √(p/4) σ<sub>y</sub>*, *A<sub>3</sub> = √(p/4) σ<sub>z</sub>*

*   **Amplitude Damping Channel:**
    *   Models energy loss from a qubit to the environment.
    *   Causes the |1⟩ state to decay to the |0⟩ state with probability *p*.
    *   Kraus operators: *A<sub>0</sub> = |0⟩⟨0| + √(1-p)|1⟩⟨1|*, *A<sub>1</sub> = √p |0⟩⟨1|*

*   **Phase Damping Channel (Dephasing Channel):**
    *   Introduces random phase shifts in the qubit's superposition.
    *   Leaves the populations of |0⟩ and |1⟩ unchanged, but destroys the coherence between them.
    *   Kraus operators: *A<sub>0</sub> = |0⟩⟨0| + √(1-p)|1⟩⟨1|*, *A<sub>1</sub> = √p |1⟩⟨1|*

**3. Capacity of Noisy Quantum Channels for Classical Information**

*   **Quantum Channel Capacity:**  The maximum rate at which classical information can be reliably transmitted through a quantum channel.

*   **Naive Approach (Direct Encoding):** Encoding classical bits directly into quantum bits (e.g., 0 → |0⟩, 1 → |1⟩) and sending them through the channel.  This approach is limited by the noise and doesn't achieve the maximum possible rate.

*   **Holevo Bound:**  A fundamental limit on the amount of classical information that can be extracted from a quantum state.
    *   If Alice encodes a classical message *x* into a quantum state *ρ<sub>x</sub>* and sends it to Bob, Bob can extract at most *χ = S(ρ) - Σ<sub>x</sub> p(x) S(ρ<sub>x</sub>)* bits of information per qubit, where:
        *   *ρ = Σ<sub>x</sub> p(x) ρ<sub>x</sub>* is the average state.
        *   *p(x)* is the probability of message *x*.
        *   *S(ρ) = -Tr(ρ log<sub>2</sub> ρ)* is the von Neumann entropy of the state *ρ*.
    *   *χ* is called the Holevo information.
    *   The Holevo bound implies that even though a qubit carries an infinite amount of *quantum* information, we can only extract a limited amount of *classical* information from it.

*   **Accessible Information:** The Holevo information, *χ*, represents the maximum amount of classical information that can be *accessed* by Bob from a single use of the channel.

*   **Achieving Capacity:** The Holevo bound doesn't tell us *how* to achieve this capacity.  More sophisticated encoding and decoding schemes (including those involving entanglement) are needed. Super-dense coding can achieve this.

**4. Mitigating Noise and Improving Communication Fidelity**

*   **Quantum Error Correction (QEC):** Encoding a single logical qubit into multiple physical qubits to protect it from noise.
    *   QEC codes detect and correct errors without measuring the state of the encoded qubit.
    *   Requires redundancy and complex quantum circuits.
    *   Examples: Shor code, Steane code, surface codes.

*   **Entanglement Distillation/Purification:**  Improving the fidelity of entangled pairs shared between distant parties.
    *   Entanglement is a valuable resource for quantum communication.
    *   Distillation protocols use local operations and classical communication (LOCC) to concentrate entanglement from many noisy pairs into fewer high-fidelity pairs.

*   **Quantum Repeaters:**  Used to extend the distance of quantum communication by dividing the channel into segments and using entanglement swapping to connect them.
    *   Overcome the exponential decay of signal strength with distance in optical fibers.

**5. Examples**

*   **Example 1: Bit-Flip Channel Capacity:**
    *   Consider a bit-flip channel with error probability *p*. If we encode 0 as |0⟩ and 1 as |1⟩, and Bob measures in the computational basis, the Holevo information is:
        *   *χ = 1 - H(p)* where *H(p) = -p log<sub>2</sub>(p) - (1-p) log<sub>2</sub>(1-p)* is the binary entropy function.
        *   This gives an upper bound on the classical information capacity of this channel.

*   **Example 2: Depolarizing Channel Capacity:**
     * For a depolarizing channel ε(ρ) = (1 - p) ρ + (p/3)(σ<sub>x</sub>ρσ<sub>x</sub> + σ<sub>y</sub>ρσ<sub>y</sub> + σ<sub>z</sub>ρσ<sub>z</sub>)* the capacity (in single-letter form) is given by the following formula:
          * Q(ε) = 1 +  (1-p)log₂(1-p) + (p/3)log₂(p/3)

**6. Important Points to Remember**

*   Quantum channels are CPTP maps that describe the evolution of quantum states.
*   Noise is unavoidable in real-world quantum systems.
*   The Holevo bound limits the amount of classical information that can be extracted from a quantum state.
*   Quantum error correction and entanglement distillation are crucial for reliable quantum communication.
*   Understanding the different types of noise and their effects is essential for designing robust quantum communication protocols.

**Practice Questions/Exercises**

1.  **Kraus Operators:** Verify that the Kraus operators for the bit-flip channel satisfy the completeness relation (Σ<sub>k</sub> A<sub>k</sub><sup>†</sup>A<sub>k</sub> = I).
    *   **Answer:** A<sub>0</sub><sup>†</sup> = A<sub>0</sub> and A<sub>1</sub><sup>†</sup> = A<sub>1</sub> in this case because they are real. Therefore,  A<sub>0</sub><sup>†</sup>A<sub>0</sub> + A<sub>1</sub><sup>†</sup>A<sub>1</sub> = (1-p)I + pσ<sub>x</sub>σ<sub>x</sub> = (1-p)I + pI = I.

2.  **Depolarizing Channel:**  What happens to a qubit in the state |+⟩ = (|0⟩ + |1⟩)/√2 when passed through a depolarizing channel with probability *p*? Express the output state as a density matrix.
    *   **Answer:**  ρ = |+⟩⟨+| = (1/2)(|0⟩⟨0| + |0⟩⟨1| + |1⟩⟨0| + |1⟩⟨1|).
    *   ε(ρ) = (1 - p)ρ + (p/3)(σ<sub>x</sub>ρσ<sub>x</sub> + σ<sub>y</sub>ρσ<sub>y</sub> + σ<sub>z</sub>ρσ<sub>z</sub>).  After applying the Pauli matrices and simplifying:
    *   ε(ρ) = (1 - p)ρ + (p/3)(I/2) = (1 - p) (1/2)(|0⟩⟨0| + |0⟩⟨1| + |1⟩⟨0| + |1⟩⟨1|) + (p/6)(|0⟩⟨0| + |1⟩⟨1|)
    *   ε(ρ) =  ((1-p)/2 + p/6) |0⟩⟨0| +  ((1-p)/2) |0⟩⟨1| + ((1-p)/2) |1⟩⟨0| + ((1-p)/2 + p/6) |1⟩⟨1| = (1-p/3) (1/2)(|0⟩⟨0| + |1⟩⟨1|) + ((1-p)/2)(|0⟩⟨1| + |1⟩⟨0|)
    *   Notice the off-diagonal elements are smaller, reflecting dephasing.

3.  **Holevo Bound:**  Alice prepares one of two states, |0⟩ and |1⟩, with equal probability, and sends the qubit to Bob. What is the Holevo information for this scenario?
    *   **Answer:** ρ = (1/2)|0⟩⟨0| + (1/2)|1⟩⟨1| = I/2.  S(ρ) = S(I/2) = 1.  S(ρ<sub>0</sub>) = S(|0⟩⟨0|) = 0 and S(ρ<sub>1</sub>) = S(|1⟩⟨1|) = 0.  Therefore, χ = 1 - (1/2)(0) - (1/2)(0) = 1.

4.  **Amplitude Damping Channel:** A qubit starts in the |1⟩ state.  After passing through an amplitude damping channel with probability *p*, what is the probability that it will be in the |0⟩ state?
    *   **Answer:**  A<sub>0</sub>|1⟩ = √(1-p)|1⟩ and A<sub>1</sub>|1⟩ = √p|0⟩.  Therefore, the probability of being in the |0⟩ state is |⟨0|√p|0⟩|<sup>2</sup> = p.

5.  **Quantum Error Correction:** Briefly explain the basic idea behind quantum error correction.
    *   **Answer:** QEC encodes a single logical qubit into a larger number of physical qubits. By performing measurements (syndrome measurements) that reveal information about the error without collapsing the encoded state, the errors can be detected and corrected. The redundancy provided by the extra physical qubits allows for recovery from noise.
