---
title: "Principles of quantum mechanics"
subject: "QUANTUM COMPUTING"
module: "Module 1: Review of Basics Concepts"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd1e"
status: "completed"
scrapedAt: "2026-05-20T16:56:48.702Z"
---
# Quantum Computing: Module 1 - Principles of Quantum Mechanics

## Module 1: Review of Basic Concepts
## Topic: Principles of Quantum Mechanics

**Learning Outcomes:**

*   Understand the fundamental principles of quantum mechanics including superposition, entanglement, and measurement.
*   Define and apply the concepts of wave-particle duality and probability amplitudes.
*   Explain the role of the wavefunction in describing quantum systems.
*   Describe the difference between classical and quantum states.
*   Understand the uncertainty principle and its implications.

---

### 1. Introduction to Quantum Mechanics

*   **Classical vs. Quantum World:**  Classical mechanics describes the behavior of macroscopic objects, while quantum mechanics governs the behavior of matter at the atomic and subatomic level. Classical mechanics assumes definite properties like position and momentum, while quantum mechanics deals with probabilities and uncertainties.

*   **Quantum Computing & Quantum Mechanics:** Quantum computing leverages the principles of quantum mechanics to perform computations that are impossible or extremely difficult for classical computers.

### 2. Wave-Particle Duality

*   **Definition:** Wave-particle duality states that particles, such as electrons and photons, can exhibit both wave-like and particle-like properties.
    *   **Wave-like properties:** Interference, diffraction.
    *   **Particle-like properties:**  Localized energy and momentum.

*   **Examples:**
    *   **Double-Slit Experiment:** Demonstrates wave-particle duality.  Electrons pass through two slits and create an interference pattern, even when sent through one at a time.  This suggests they act like waves as they pass through both slits simultaneously, even though they are detected as localized particles at the screen.
    *   **Photoelectric Effect:** Demonstrates that light (photons) can act as particles, ejecting electrons from a metal surface.

*   **De Broglie Wavelength:**  Every particle has an associated wavelength given by:

    `λ = h/p`

    where:
    *   `λ` is the De Broglie wavelength.
    *   `h` is Planck's constant (approximately 6.626 x 10^-34 Js).
    *   `p` is the momentum of the particle (mass times velocity).

### 3. Superposition

*   **Definition:**  A quantum system can exist in a combination of multiple states simultaneously.  Instead of being in one definite state, it exists in a linear combination of possible states until measured.

*   **Mathematical Representation:**  A quantum state `|ψ⟩` can be represented as a linear combination of basis states (e.g., `|0⟩` and `|1⟩` for a qubit):

    `|ψ⟩ = α|0⟩ + β|1⟩`

    where:
    *   `|0⟩` and `|1⟩` are basis states (e.g., representing 0 and 1 in a qubit).
    *   `α` and `β` are complex numbers called probability amplitudes.
    *   `|α|²` is the probability of measuring the state `|0⟩`.
    *   `|β|²` is the probability of measuring the state `|1⟩`.
    *   `|α|² + |β|² = 1` (normalization condition).

*   **Example:**  A qubit can be in a superposition of the `|0⟩` and `|1⟩` states until measured.  This allows it to represent a much wider range of information than a classical bit.

*   **Important Point:**  Superposition is what enables quantum computers to explore multiple possibilities simultaneously, leading to potential speedups over classical algorithms.

### 4. Entanglement

*   **Definition:**  Entanglement is a quantum mechanical phenomenon where two or more particles become linked together in such a way that the quantum state of each particle cannot be described independently of the others, even when they are separated by a large distance.

*   **Properties:**
    *   If you measure the state of one entangled particle, you instantly know the state of the other, regardless of the distance between them.
    *   The correlation between entangled particles is stronger than any correlation possible in classical physics.
    *   Entanglement does *not* allow for faster-than-light communication, as the outcome of the measurement on one particle is random.

*   **Mathematical Representation:**  An example of an entangled state for two qubits is the Bell state:

    `|Φ⁺⟩ = (1/√2)(|00⟩ + |11⟩)`

    This means there is a 50% chance of measuring both qubits as `|0⟩` and a 50% chance of measuring both as `|1⟩`. They are always correlated.

*   **Example:** Two electrons with entangled spins. If one electron is measured to have spin up, the other will instantaneously be measured to have spin down, even if they are light-years apart.

*   **Important Point:** Entanglement is a crucial resource for quantum computing, used in algorithms like quantum teleportation and quantum error correction.

### 5. Measurement

*   **Definition:**  Measurement in quantum mechanics is the process of obtaining information about a quantum system.  It causes the system to "collapse" from a superposition of states into a single, definite state.

*   **Wavefunction Collapse:**  When a measurement is performed, the wavefunction representing the quantum system collapses into one of the possible eigenstates corresponding to the measurement.

*   **Probability Amplitudes and Probabilities:** The probability of measuring a specific state is determined by the square of the absolute value of the corresponding probability amplitude.  As mentioned before, if `|ψ⟩ = α|0⟩ + β|1⟩`, then:

    *   `P(|0⟩) = |α|²`
    *   `P(|1⟩) = |β|²`

*   **Example:** Measuring a qubit in the superposition `|ψ⟩ = (1/√2)|0⟩ + (1/√2)|1⟩`. There is a 50% probability of measuring the qubit as `|0⟩` and a 50% probability of measuring it as `|1⟩`. After the measurement, the qubit will be in the measured state (`|0⟩` or `|1⟩`).

*   **Important Point:** Measurement is irreversible.  Once a quantum system has been measured, it loses its superposition. The act of observation fundamentally changes the system.

### 6. Wavefunction

*   **Definition:** The wavefunction (denoted by `ψ(x, t)`) is a mathematical function that describes the quantum state of a particle or system. It contains all the information about the system that can be known.

*   **Properties:**
    *   The wavefunction is complex-valued.
    *   The square of the absolute value of the wavefunction, `|ψ(x, t)|²`, gives the probability density of finding the particle at position `x` at time `t`.
    *   The wavefunction must be normalized, meaning the integral of the probability density over all space must equal 1 (i.e., the particle must be somewhere).  `∫ |ψ(x, t)|² dx = 1`
    *   The wavefunction evolves in time according to the Schrödinger equation.

*   **Schrödinger Equation:** Describes how the wavefunction of a quantum system changes over time.

    `iħ ∂ψ/∂t = Hψ`

    where:
    *   `i` is the imaginary unit.
    *   `ħ` is the reduced Planck constant (`h/2π`).
    *   `∂ψ/∂t` is the partial derivative of the wavefunction with respect to time.
    *   `H` is the Hamiltonian operator, which represents the total energy of the system.

### 7. The Uncertainty Principle

*   **Definition:** The uncertainty principle, formulated by Werner Heisenberg, states that there is a fundamental limit to the precision with which certain pairs of physical properties of a particle, such as position and momentum, can be known simultaneously.

*   **Mathematical Expression:**

    `Δx Δp ≥ ħ/2`

    where:
    *   `Δx` is the uncertainty in position.
    *   `Δp` is the uncertainty in momentum.
    *   `ħ` is the reduced Planck constant.

*   **Implications:**
    *   You cannot know both the position and momentum of a particle with perfect accuracy at the same time.  The more accurately you know one, the less accurately you know the other.
    *   The uncertainty principle is not due to limitations in measurement technology; it is a fundamental property of quantum mechanics.
    *   Another common pairing is energy and time: `ΔE Δt ≥ ħ/2`

*   **Example:** If you try to precisely determine the position of an electron, you will inevitably disturb its momentum, making it difficult to know its momentum accurately.

### 8. Practice Questions & Exercises

1.  **Question:** What is superposition, and how is it represented mathematically for a qubit?

    **Answer:** Superposition is the principle that a quantum system can exist in multiple states simultaneously. For a qubit, it is represented as `|ψ⟩ = α|0⟩ + β|1⟩`, where `α` and `β` are complex probability amplitudes, and `|α|² + |β|² = 1`.

2.  **Question:** Explain entanglement and give an example of an entangled state for two qubits.

    **Answer:** Entanglement is a phenomenon where two or more particles become linked together such that the quantum state of each cannot be described independently of the others, even when separated by a large distance. An example of an entangled state is the Bell state:  `|Φ⁺⟩ = (1/√2)(|00⟩ + |11⟩)`.

3.  **Question:** What happens to a quantum system when it is measured?

    **Answer:** When a quantum system is measured, it collapses from a superposition of states into a single, definite state. The probability of collapsing into a particular state is determined by the square of the absolute value of the corresponding probability amplitude.

4.  **Question:** What is the De Broglie wavelength, and how is it calculated?

    **Answer:** The De Broglie wavelength is the wavelength associated with a particle, demonstrating wave-particle duality. It is calculated as `λ = h/p`, where `h` is Planck's constant and `p` is the momentum of the particle.

5. **Question:** If a qubit is in the state `|ψ⟩ = (1/√3)|0⟩ + (√(2/3))|1⟩`, what is the probability of measuring it in the state `|1⟩`?

    **Answer:** The probability of measuring the qubit in the state `|1⟩` is `|(√(2/3))|² = 2/3`.

6. **Question:** Briefly explain the uncertainty principle and give a common pairing of properties affected by it.

    **Answer:** The uncertainty principle states that there is a fundamental limit to the precision with which certain pairs of physical properties of a particle can be known simultaneously. A common pairing is position and momentum.

### 9. Important Points to Remember

*   Quantum mechanics governs the behavior of matter at the atomic and subatomic level.
*   Wave-particle duality demonstrates that particles can exhibit both wave-like and particle-like properties.
*   Superposition allows quantum systems to exist in multiple states simultaneously.
*   Entanglement links particles together in a way that their states are correlated, regardless of distance.
*   Measurement causes a quantum system to collapse from a superposition to a single, definite state.
*   The wavefunction describes the quantum state of a particle and evolves according to the Schrödinger equation.
*   The uncertainty principle imposes a fundamental limit on the precision with which certain pairs of physical properties can be known simultaneously.

This comprehensive overview should provide a solid foundation for understanding the fundamental principles of quantum mechanics, essential for grasping the concepts behind quantum computing.
