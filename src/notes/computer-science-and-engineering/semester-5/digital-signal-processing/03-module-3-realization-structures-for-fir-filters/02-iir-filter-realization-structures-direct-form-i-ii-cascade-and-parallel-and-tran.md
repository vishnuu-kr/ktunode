---
title: "IIR Filter realization structures (Direct form I, II, cascade and Parallel and  transposed structures)"
subject: "DIGITAL SIGNAL PROCESSING"
module: "Module 3: Realization structures for FIR filters"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b7e9"
status: "completed"
scrapedAt: "2026-05-20T16:46:12.919Z"
---
## DIGITAL SIGNAL PROCESSING - Module 3: Realization Structures for FIR Filters - IIR Filter Realization Structures

**Topic:** IIR Filter Realization Structures (Direct Form I, II, Cascade, Parallel, and Transposed Structures)

**Learning Outcomes:**

*   Understand the different realization structures for IIR filters.
*   Be able to derive and implement Direct Form I and Direct Form II structures.
*   Understand and implement Cascade and Parallel structures.
*   Understand and implement Transposed structures.
*   Analyze the advantages and disadvantages of each structure.
*   Convert a given IIR transfer function into different realization structures.

---

### 1. Introduction to IIR Filter Realization Structures

IIR (Infinite Impulse Response) filters are a type of digital filter characterized by having both feedforward (zeros) and feedback (poles) coefficients.  Their transfer function can be expressed as:

`H(z) = Y(z)/X(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) / (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)`

Where:

*   `Y(z)` is the Z-transform of the output signal.
*   `X(z)` is the Z-transform of the input signal.
*   `b0, b1, ..., bM` are the feedforward coefficients (numerator coefficients).
*   `a1, a2, ..., aN` are the feedback coefficients (denominator coefficients).  Note the leading '1' coefficient.
*   `M` is the order of the numerator polynomial (number of zeros).
*   `N` is the order of the denominator polynomial (number of poles).

Realization structures provide different ways to implement this transfer function using hardware or software.  The choice of structure affects factors like:

*   **Computational Complexity:** Number of multiplications and additions required.
*   **Memory Requirements:** Number of delay elements needed.
*   **Quantization Effects:** Sensitivity to coefficient quantization and round-off errors.
*   **Parallelizability:** Suitability for parallel processing.

### 2. Direct Form I (DFI)

**Description:** Direct Form I is a straightforward implementation of the IIR transfer function. It directly maps the coefficients of the numerator and denominator polynomials.  It involves implementing the zeros (numerator) first, followed by the poles (denominator).

**Derivation:**

From the transfer function: `H(z) = Y(z)/X(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) / (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)`

Cross-multiply to get: `Y(z)(1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N) = X(z)(b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M)`

Rearrange to solve for Y(z): `Y(z) = X(z)(b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) - Y(z)(a1*z^-1 + a2*z^-2 + ... + aN*z^-N)`

Taking the inverse Z-transform: `y[n] = b0*x[n] + b1*x[n-1] + ... + bM*x[n-M] - a1*y[n-1] - a2*y[n-2] - ... - aN*y[n-N]`

**Block Diagram:**  (Imagine a diagram here. The diagram would show two separate tapped delay lines.  The first one implements the zeros (b coefficients) and the second implements the poles (a coefficients).  The input x[n] goes into the first tapped delay line and the output of that delay line goes into the second, with the y[n] output coming from the second tapped delay line.)

**Advantages:**

*   Simple and direct implementation from the transfer function.

**Disadvantages:**

*   High memory requirement, needing `M+N` delay elements.
*   Potential for significant quantization noise, especially with high-order filters.

**Example:**

Let `H(z) = (1 + 0.5z^-1) / (1 - 0.9z^-1)`.  Then `b0 = 1`, `b1 = 0.5`, `a1 = -0.9`.  The difference equation is `y[n] = x[n] + 0.5x[n-1] + 0.9y[n-1]`.

### 3. Direct Form II (DFII)

**Description:** Direct Form II is a more efficient implementation of the IIR transfer function compared to Direct Form I. It combines the delay elements from the numerator and denominator sections into a single tapped delay line, reducing memory requirements.  It involves implementing the poles (denominator) first, followed by the zeros (numerator).

**Derivation:**

From the transfer function: `H(z) = Y(z)/X(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M) / (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)`

We can decompose the transfer function into two cascaded systems:

`H(z) = H1(z) * H2(z)` where:

*   `H1(z) = 1 / (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N)`
*   `H2(z) = (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M)`

Let `W(z)` be the intermediate signal between H1(z) and H2(z). Then:

*   `W(z) = X(z) * H1(z)` => `W(z) * (1 + a1*z^-1 + a2*z^-2 + ... + aN*z^-N) = X(z)`
*   `Y(z) = W(z) * H2(z)` => `Y(z) = W(z) * (b0 + b1*z^-1 + b2*z^-2 + ... + bM*z^-M)`

Taking the inverse Z-transform:

*   `w[n] = x[n] - a1*w[n-1] - a2*w[n-2] - ... - aN*w[n-N]`
*   `y[n] = b0*w[n] + b1*w[n-1] + b2*w[n-2] + ... + bM*w[n-M]`

**Block Diagram:** (Imagine a diagram here. The diagram would have a single tapped delay line. The input x[n] is added to the delayed and scaled outputs of the delay line, multiplied by the 'a' coefficients. The result is fed into the delay line. The output y[n] is a weighted sum of the values in the delay line, weighted by the 'b' coefficients.)

**Advantages:**

*   Lower memory requirement compared to Direct Form I, requiring only `max(M, N)` delay elements.
*   Can be more computationally efficient.

**Disadvantages:**

*   Still susceptible to quantization noise, although often less than Direct Form I.

**Example:**

Let `H(z) = (1 + 0.5z^-1) / (1 - 0.9z^-1)`.  Then `b0 = 1`, `b1 = 0.5`, `a1 = -0.9`.

*   `w[n] = x[n] + 0.9w[n-1]`
*   `y[n] = w[n] + 0.5w[n-1]`

### 4. Cascade Structure

**Description:** The cascade structure decomposes the IIR transfer function into a series of second-order (biquad) sections connected in cascade (series).  This is a popular approach due to its good numerical properties and modularity.

**Derivation:**

The transfer function `H(z)` is factored into a product of second-order sections:

`H(z) = A * Product[ (b0i + b1i*z^-1 + b2i*z^-2) / (1 + a1i*z^-1 + a2i*z^-2) ]`  for i=1 to K

Where:

*   `A` is a gain factor.
*   `K` is the number of second-order sections.
*   `b0i`, `b1i`, `b2i`, `a1i`, and `a2i` are the coefficients of the i-th second-order section.

Each second-order section can be implemented using Direct Form I or Direct Form II.  DFII is generally preferred for its lower memory requirement.

**Block Diagram:** (Imagine a diagram here. It would show a series of interconnected second-order sections (biquads).  Each biquad takes the output of the previous biquad as its input. The final output is the output of the last biquad, potentially scaled by the gain A.)

**Advantages:**

*   Improved numerical stability compared to high-order direct forms.  Second-order sections are less sensitive to coefficient quantization.
*   Modular design, making implementation and analysis easier.
*   Flexibility in choosing the order of sections to minimize noise.

**Disadvantages:**

*   Requires a factorization step to decompose the transfer function.  Pole-zero pairing and section ordering affect the overall filter performance and noise characteristics.

**Example:**

Let `H(z) = (1 + 0.5z^-1)(1 - 0.2z^-1) / (1 - 0.9z^-1)(1 + 0.7z^-1)`.  We can group these into two second-order sections (although, technically, they are first order in this case). We would then implement each section separately and cascade them.

### 5. Parallel Structure

**Description:** The parallel structure decomposes the IIR transfer function into a sum of simpler transfer functions, typically first-order or second-order sections. This decomposition is achieved using partial fraction expansion.

**Derivation:**

The transfer function `H(z)` is decomposed into a sum of simpler fractions using partial fraction expansion:

`H(z) = C + Sum[ (Bi0 + Bi1*z^-1) / (1 + Ai1*z^-1 + Ai2*z^-2) ]` for i=1 to L

Where:

*   `C` is a constant term.
*   `L` is the number of parallel sections.
*   `Bi0`, `Bi1`, `Ai1`, and `Ai2` are the coefficients of the i-th parallel section.

Each section is implemented independently, and their outputs are summed to produce the overall output.

**Block Diagram:** (Imagine a diagram here. It would show a set of parallel branches. Each branch implements a first- or second-order section.  The input signal is fed into each branch. The outputs of all the branches are summed together, along with the constant C, to produce the final output y[n].)

**Advantages:**

*   Can be highly parallelizable, allowing for faster processing.
*   Potentially better numerical properties than direct forms, especially when using second-order sections.

**Disadvantages:**

*   Requires a partial fraction expansion, which can be complex, especially for high-order filters.
*   The implementation may require more adders compared to cascade structures.

**Example:**

Let `H(z) = (z) / ((z - 0.5)(z - 0.8))`.  Using partial fraction expansion, we get `H(z) = (8/3) / (z-0.8) - (5/3) / (z-0.5)`.  Each of these fractions represents a first-order section that can be implemented and summed together. This could also be written as `H(z) = (8/3)*z^-1/(1 - 0.8z^-1) - (5/3)*z^-1/(1 - 0.5z^-1)`

### 6. Transposed Structures (Signal Flow Graph Reversal)

**Description:**  The transposed structure is obtained by reversing the direction of all signal flow paths in the original structure and interchanging the input and output nodes.  The transfer function remains the same.  Transposition can lead to different scaling and noise characteristics. It is most easily understood by visualizing the signal flow graph and reversing the arrows.

**Derivation:**  Start with the signal flow graph of any realization (e.g., Direct Form I or II).

1.  Reverse the direction of all branches.
2.  Replace nodes with summing junctions and vice versa.
3.  Interchange the input and output nodes.

**Block Diagram:**  (Imagine modifying the Direct Form I or II diagrams by reversing the arrows.)

**Advantages:**

*   Maintains the same transfer function as the original structure.
*   Can have different numerical properties and scaling behavior, which may be advantageous in certain applications.  For example, it can sometimes improve the sensitivity to quantization errors.
*   In some cases, can improve parallelizability.

**Disadvantages:**

*   May not always be intuitive to derive without using the signal flow graph.
*   Doesn't necessarily reduce computational complexity or memory requirements, but rather provides an alternative implementation with potentially different characteristics.

**Example:**  Take the Direct Form I structure. Transposing it involves reversing all the arrows, changing summing nodes to branch nodes, and vice versa, and swapping input and output. This will yield the Transposed Direct Form I structure.

**Transposed Direct Form II** is very popular.

### 7. Comparison of IIR Filter Realization Structures

| Structure        | Memory Requirement | Computational Complexity | Quantization Effects | Parallelizability | Derivation Complexity |
|------------------|----------------------|--------------------------|-----------------------|-------------------|-----------------------|
| Direct Form I    | M + N               | High                     | High                   | Low             | Low                   |
| Direct Form II   | max(M, N)           | Moderate                 | Moderate               | Low             | Low                   |
| Cascade          | 2 per section       | Moderate                 | Low                   | Moderate          | Moderate              |
| Parallel         | 2 per section       | High                     | Low                   | High             | High                  |
| Transposed (DFII)| max(M, N)           | Moderate                 | Often Better         | Varies             | Moderate               |

**Important Points to Remember:**

*   **Direct Form II is generally preferred over Direct Form I** due to its lower memory requirement.
*   **Cascade and Parallel structures offer better numerical stability** than direct forms for high-order filters.
*   **The choice of realization structure depends on the specific application and the trade-offs** between memory, computation, quantization effects, and parallelizability.
*   **Transposed structures provide alternative implementations** with potentially different characteristics.
*   **For Cascade structures:** pole-zero pairing and section ordering significantly affect performance.

### 8. Practice Questions

**Question 1:**

Derive the Direct Form II realization for the transfer function:
`H(z) = (1 + 2z^-1 + z^-2) / (1 - 0.5z^-1 + 0.25z^-2)`

**Answer:**

*   `w[n] = x[n] + 0.5w[n-1] - 0.25w[n-2]`
*   `y[n] = w[n] + 2w[n-1] + w[n-2]`

**Question 2:**

Convert the following transfer function into a cascade structure using Direct Form II sections:

`H(z) = (1 + 0.6z^-1 + 0.08z^-2) / (1 - 0.4z^-1 - 0.12z^-2)`

**Answer:**

The transfer function is already in a biquad form so only requires realizing the direct form II structure.

Section 1: `H1(z) = (1 + 0.6z^-1 + 0.08z^-2) / (1 - 0.4z^-1 - 0.12z^-2)`
*   `w[n] = x[n] + 0.4w[n-1] + 0.12w[n-2]`
*   `y[n] = w[n] + 0.6w[n-1] + 0.08w[n-2]`

The final output `y[n]` is then the output of this single cascaded biquad.

**Question 3:**

Draw the transposed Direct Form II structure for the following difference equation:

`y[n] = 0.5x[n] + 0.25x[n-1] - 0.7y[n-1]`

**Answer:**  (Imagine drawing the transposed diagram. The input goes into a summing junction which adds the delayed outputs and scaled outputs. The key is to reverse the arrows and swap input and output.)

The difference equation implies a transfer function of `H(z) = (0.5 + 0.25z^-1)/(1 + 0.7z^-1)`. Therefore the transposed direct form II equations are:
`w[n] = x[n] - 0.7w[n-1]`
`y[n] = 0.5w[n] + 0.25w[n-1]`

---
This comprehensive set of study notes covers the main IIR filter realization structures. Remember to practice converting transfer functions into these structures to solidify your understanding. Good luck!
