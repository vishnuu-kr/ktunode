---
title: "Viterbi algorithm, BCJR algorithm."
subject: "CODING THEORY"
module: "Module 3: Convolutional codes: Encoding, state diagram, trellis diagram"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b10d"
status: "completed"
scrapedAt: "2026-05-20T16:10:30.671Z"
---
# Coding Theory - Module 3: Convolutional Codes - Viterbi and BCJR Algorithms

## Overview

This module explores decoding convolutional codes, specifically focusing on the Viterbi and BCJR algorithms.  We will cover the concepts of encoding, state diagrams, and trellis diagrams and then delve into the intricacies of the decoding algorithms.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the principles behind the Viterbi algorithm for decoding convolutional codes.
*   Apply the Viterbi algorithm to decode a given received sequence.
*   Understand the principles behind the BCJR (Bahl-Cocke-Jelinek-Raviv) algorithm for decoding convolutional codes.
*   Explain the advantages and disadvantages of the Viterbi and BCJR algorithms.
*   Apply the BCJR algorithm to decode a given received sequence.

## 1. Convolutional Codes: Review

*   **Definition:** A convolutional code is an error-correcting code where each *m*-bit message to be encoded is transformed into an *n*-bit codeword, where *n* > *m*. This transformation is a function of the current *m* input bits and the previous *K-1* input bits. *K* is the constraint length.
*   **Encoding:** Convolutional encoding is done using shift registers and modulo-2 adders.
*   **Rate:** The code rate, *R*, is defined as *R = m/n*. A lower code rate implies greater redundancy and thus better error correction capabilities (but also lower bandwidth efficiency).
*   **Constraint Length (K):** This is the length of the shift register, which determines the code's memory.  A larger *K* generally implies a stronger code (better error correction) but also increased decoding complexity.
*   **Generator Polynomials:** Convolutional codes are defined by generator polynomials, *g1(x), g2(x),..., gn(x)*, which specify the connections from the shift register stages to the *n* modulo-2 adders.
*   **State Diagram:** Represents the possible states of the encoder based on the contents of the shift register. Transitions between states occur upon receiving a new input bit.  Each transition is labeled with the input and the corresponding output.
*   **Trellis Diagram:** A time-expanded version of the state diagram. It visualizes all possible paths through the encoder states over time. The trellis is crucial for understanding and implementing the Viterbi and BCJR algorithms. Each branch represents a transition between states and is labeled with the corresponding output bits.

## 2. The Viterbi Algorithm

### 2.1 Principles

The Viterbi algorithm is a *maximum likelihood (ML)* decoding algorithm for convolutional codes.  It finds the most likely sequence of encoder states that produced the observed received sequence. It operates by iteratively eliminating the least likely paths through the trellis diagram.

*   **Key Idea:** The algorithm keeps track of the *best* path to each state at each time step.  "Best" is defined as the path with the smallest Hamming distance (or Euclidean distance, depending on the channel) between the transmitted codeword and the received sequence.
*   **Branch Metric:** The Hamming (or Euclidean) distance between the received bits for a specific branch in the trellis and the expected output bits for that branch. This quantifies how well a particular branch fits the received data.
*   **Path Metric:** The accumulated branch metrics along a path.  The algorithm aims to minimize the path metric.
*   **Survivor Path:** The path with the smallest path metric to a given state at a given time step.  The Viterbi algorithm only keeps the survivor path for each state and discards all other paths.

### 2.2 Algorithm Steps

1.  **Initialization:** At time *t=0*, the encoder is typically assumed to be in the all-zero state.  The path metric for this state is initialized to 0, and all other path metrics are set to infinity (or a very large number).

2.  **Iteration:** For each time step *t=1, 2, ...*:

    *   For each state *s* in the trellis:
        *   Consider all possible incoming branches leading to state *s*.
        *   Calculate the branch metric for each incoming branch by comparing the received bits with the expected output bits for that branch.
        *   Calculate the path metric for each incoming branch by adding the branch metric to the path metric of the preceding state.
        *   Select the branch with the *smallest* path metric. This is the survivor path to state *s*.
        *   Store the path metric and the survivor path for state *s*.
    *   Keep only the survivor path for each state, discarding all other paths.

3.  **Termination:** After processing the entire received sequence (or a sufficiently long segment):

    *   Select the state with the smallest path metric. The survivor path leading to this state is the most likely transmitted sequence.
    *   Trace back along the survivor path to recover the decoded sequence.

### 2.3 Example

Let's decode a convolutional code with rate R=1/2, constraint length K=3, and generator polynomials g1(x) = 1 + x + x^2 and g2(x) = 1 + x^2. The state diagram and trellis diagram would need to be constructed first (assume you have these available).

Suppose the received sequence is `10 01 11 00`.  We'll use Hamming distance as the branch metric.

1.  **Initialization:** State `00` has a path metric of 0. All other states have a path metric of infinity.

2.  **Time t=1:**

    *   To state `00`: Incoming branch from `00` with input 0. Expected output is `00`. Branch metric = Hamming Distance(10, 00) = 2. Path Metric = 0 + 2 = 2.  Survivor path: `0 -> 00`
    *   To state `01`: Incoming branch from `00` with input 1. Expected output is `11`. Branch Metric = Hamming Distance(10, 11) = 1. Path Metric = 0 + 1 = 1.  Survivor path: `0 -> 01`
    *   Other states have no incoming paths, so their path metrics remain infinity.

3.  **Time t=2:**

    *   To state `00`: Incoming branch from `00` with input 0 (previous state was `00`). Expected output `00`. Branch metric = Hamming Distance(01, 00) = 1. Path metric = 2 + 1 = 3.  Incoming branch from `10` with input 0 (previous state was `10`). Not possible, since state `10` doesn't exist at time 1.
    *   To state `01`: Incoming branch from `00` with input 1 (previous state was `00`). Expected output `11`. Branch metric = Hamming Distance(01, 11) = 1. Path metric = 2 + 1 = 3.  Incoming branch from `10` with input 1 (previous state was `10`). Not possible.
    *   To state `10`: Incoming branch from `01` with input 0 (previous state was `01`). Expected output `11`. Branch metric = Hamming Distance(01, 11) = 1. Path metric = 1 + 1 = 2. Survivor path: `01 -> 10`.
    *   To state `11`: Incoming branch from `01` with input 1 (previous state was `01`). Expected output `00`. Branch metric = Hamming Distance(01, 00) = 1. Path metric = 1 + 1 = 2. Survivor path: `01 -> 11`.

4.  **Continue** for t=3 and t=4.

5.  **Termination:** After t=4, find the state with the minimum path metric. Let's assume (for the sake of this example - you'd need to complete the trellis) the state `00` has the smallest path metric. Trace back the survivor path to `00`, `01`, `00`, `00`.  The decoded message would then be read off of the inputs leading to those state transitions.  In this case, 1100 (likely - depends on the completed trellis).

### 2.4 Advantages and Disadvantages

*   **Advantages:**
    *   Optimal (maximum likelihood) decoding.
    *   Relatively simple to implement.
    *   Widely used in various communication systems.
*   **Disadvantages:**
    *   Computational complexity increases exponentially with the constraint length *K*. Becomes impractical for large *K*.
    *   Produces a hard decision output (only one best path is selected). Doesn't provide information about the reliability of the decoded bits.
    *   Not suitable for codes with long block lengths.

## 3. The BCJR Algorithm (Bahl-Cocke-Jelinek-Raviv Algorithm)

### 3.1 Principles

The BCJR algorithm, also known as the *forward-backward algorithm* or *maximum a posteriori (MAP)* algorithm, is another decoding algorithm for convolutional codes.  Unlike the Viterbi algorithm, which finds the most likely *sequence* of encoder states, the BCJR algorithm calculates the *a posteriori probability (APP)* of each individual bit being 0 or 1.  It produces *soft outputs* – probabilities rather than hard decisions – which can be used in subsequent decoding stages (e.g., in turbo codes).

*   **Key Idea:** The BCJR algorithm computes the APP of each information bit *u_k* given the entire received sequence *y*. This probability can be expressed as:

    P(u_k | y)  where y is the entire received sequence.

    This algorithm calculates this probability by combining information from both the "past" (forward recursion) and the "future" (backward recursion) of the received sequence relative to the bit *u_k*.
*   **Forward Metric (α):**  The probability of being in state *s* at time *k* given the received sequence up to time *k*.  α_k(s) = P(s_k = s | y_1^k) where y_1^k represents the received sequence from time 1 to k.
*   **Backward Metric (β):** The probability of receiving the sequence from time *k+1* to the end, given that we are in state *s* at time *k*. β_k(s) = P(y_{k+1}^N | s_k = s) where y_{k+1}^N represents the received sequence from time k+1 to the end.
*   **Branch Metric (γ):** The probability of transitioning from state *s'* at time *k-1* to state *s* at time *k* while emitting the received symbol *y_k*. γ_k(s', s) = P(s_k = s, y_k | s_{k-1} = s').

### 3.2 Algorithm Steps

1.  **Forward Recursion:** Calculate the forward metrics α_k(s) for all states *s* and all time steps *k* from 1 to *N* (the length of the received sequence).  Initialization: Often, α_0(s) = 1 for the initial state and 0 for all other states. The recursion is:

    α_k(s) = Σ [ α_{k-1}(s') * γ_k(s', s) ]   (summation over all s' that can transition to s)

2.  **Backward Recursion:** Calculate the backward metrics β_k(s) for all states *s* and all time steps *k* from *N* down to 0.  Initialization: Often, β_N(s) = 1 for the final state and 0 for all other states (or based on a termination condition). The recursion is:

    β_{k-1}(s') = Σ [ β_k(s) * γ_k(s', s) ]   (summation over all s that can be reached from s')

3.  **Calculate APP (A Posteriori Probability):**  Compute the APP of each information bit *u_k* being 0 or 1, given the entire received sequence *y*.

    P(u_k = 0 | y) =  (1/p(y)) * Σ [α_{k-1}(s') * γ_k(s', s) * β_k(s)] (sum over all transitions s' -> s due to input 0)
    P(u_k = 1 | y) =  (1/p(y)) * Σ [α_{k-1}(s') * γ_k(s', s) * β_k(s)] (sum over all transitions s' -> s due to input 1)

    Where p(y) is a normalization factor, ensuring that P(u_k = 0 | y) + P(u_k = 1 | y) = 1. p(y) can be calculated as Σ [α_{k-1}(s') * γ_k(s', s) * β_k(s)] summed over all possible transitions. However, in practice, the normalization factor is often omitted as it does not affect the decision making.

4.  **Decision:** Make a decision based on the APPs.  If P(u_k = 1 | y) > P(u_k = 0 | y), then decode *u_k* as 1; otherwise, decode *u_k* as 0.  However, the *soft output* (the probabilities) can be used instead of a hard decision.

### 3.3 Example

Consider a rate 1/2, K=3 convolutional code with generator polynomials g1(x) = 1 + x and g2(x) = 1 + x + x^2.  Assume a BSC (Binary Symmetric Channel) with a crossover probability p.

1.  **State Diagram and Trellis Diagram:**  (These need to be constructed first).

2.  **Received Sequence:** Let the received sequence be `y = 01 10 00`.  Assume the encoder started in state `00`.

3.  **Branch Metric (γ):**  For a BSC, we have:

    *   γ_k(s', s) = (1-p)^d * p^(n-d) if the transition from s' to s produces the output corresponding to *d* correctly received bits.
    *   γ_k(s', s) = p^d * (1-p)^(n-d) if the transition from s' to s produces the output corresponding to *d* incorrectly received bits.
    *   where *n* is the number of output bits per branch (n=2 in this case)

4.  **Forward Recursion (α):**

    *   k=0: α_0(00) = 1, α_0(01) = α_0(10) = α_0(11) = 0

    *   k=1:  (y_1 = 01)

        *   α_1(00) = α_0(00) * γ_1(00, 00)  (transition from 00 to 00 with input 0, output 00) = 1 * (1-p)^1 * p^1 = (1-p)p
        *   α_1(01) = α_0(00) * γ_1(00, 01) (transition from 00 to 01 with input 1, output 11) = 1 * (1-p)^0 * p^2 = p^2
        *   α_1(10) = α_1(11) = 0

    *   k=2: (y_2 = 10)

        *   α_2(00) = α_1(00) * γ_2(00, 00) + α_1(10) * γ_2(...) + ... (sum over all possible transitions *into* state 00)

    *   k=3: (y_3 = 00)

        *   ...

5.  **Backward Recursion (β):**

    *   k=3:  Assume termination to `00`.  β_3(00) = 1, β_3(01) = β_3(10) = β_3(11) = 0

    *   k=2: (y_3 = 00)

        *   β_2(00) = β_3(00) * γ_3(00, 00) +  ... (sum over all possible transitions *out of* state 00)

    *   k=1: (y_2 = 10)
    *   k=0: (y_1 = 01)

6.  **Calculate APP:**

    *   P(u_1 = 0 | y) = [α_0(00) * γ_1(00, 00) * β_1(00) ] / p(y)
    *   P(u_1 = 1 | y) = [α_0(00) * γ_1(00, 01) * β_1(01) ] / p(y)

    Similarly, calculate P(u_2 = 0 | y), P(u_2 = 1 | y), P(u_3 = 0 | y), and P(u_3 = 1 | y).

7.  **Decision:** Decode based on the probabilities.  For example, if P(u_1 = 1 | y) > P(u_1 = 0 | y), then decode *u_1* as 1. The probabilities P(u_k = 0 | y) and P(u_k = 1 | y) themselves are the *soft outputs*.

### 3.4 Advantages and Disadvantages

*   **Advantages:**
    *   Provides soft outputs (APPs), which are valuable for iterative decoding schemes like turbo codes.
    *   Can offer better performance (lower bit error rate) than Viterbi, especially at low SNR.
*   **Disadvantages:**
    *   More complex than Viterbi, requiring forward and backward recursions.
    *   Higher computational complexity than the Viterbi algorithm.
    *   More susceptible to numerical instability due to the multiplication of probabilities (often mitigated by using the log-domain implementation: Log-MAP or Max-Log-MAP).

## 4. Comparison: Viterbi vs. BCJR

| Feature             | Viterbi Algorithm                                 | BCJR Algorithm (MAP)                                    |
|----------------------|----------------------------------------------------|----------------------------------------------------------|
| Decoding Criterion    | Maximum Likelihood (ML)                           | Maximum a Posteriori (MAP)                              |
| Output               | Hard Decision                                      | Soft Decision (APPs)                                    |
| Complexity          | Lower                                             | Higher                                                    |
| Performance         | Good (but may be suboptimal in some cases)           | Generally better, especially at low SNR                 |
| Memory Requirement  | Moderate                                           | Higher                                                    |
| Applications        | General purpose, simpler systems                  | Iterative decoding (e.g., Turbo Codes), systems requiring soft information |
| Numerical Stability | More stable                                        | Can be unstable; requires log-domain implementation (Log-MAP/Max-Log-MAP)  |

## 5. Practice Questions/Exercises

1.  **Viterbi Decoding:** Consider a convolutional code with rate 1/2, constraint length K=3, and generator polynomials g1(x) = 1 + x and g2(x) = 1 + x + x^2. The encoder starts in state `00`.
    *   **(a)** Draw the state diagram and trellis diagram for this code.
    *   **(b)** The received sequence is `11 00 10`.  Use the Viterbi algorithm to decode this sequence. Assume a binary symmetric channel and use Hamming distance as the metric. Show your work (the trellis diagram with path metrics).
    *   **(c)** What is the decoded message?

2.  **BCJR Algorithm Conceptual Question:**  Explain in your own words the key difference between the Viterbi and BCJR algorithms in terms of their decoding objective and the type of output they produce.

3.  **BCJR Decoding:** Using the same convolutional code as in question 1, and the received sequence `11 00`, outline how you would apply the BCJR algorithm to decode the first bit. (You do not need to calculate exact probabilities, but explain the steps and the formulas involved in calculating the forward metrics, backward metrics, and APPs). Assume a BSC channel.

4.  **Complexity Analysis:**  Explain how the computational complexity of the Viterbi and BCJR algorithms scales with the constraint length *K* of the convolutional code.

## 6. Answers to Practice Questions

1.  **(a)** The state diagram and trellis diagrams would be drawn based on the generator polynomials. (These are standard and can be found in textbooks or online).  The state diagram will have 2^(K-1) = 2^(3-1) = 4 states.  The trellis diagram is a time-expanded version of the state diagram.
    **(b)**  Applying the Viterbi Algorithm: (This requires constructing the trellis and tracing the survivor paths. Provide trellis with calculated path metrics at each stage)
        *   **Time 0:** State `00`: Path metric = 0; all other states: Path metric = infinity.
        *   **Time 1 (Received: 11):**
            *   To `00` (input 0 from `00`):  Expected output = `00`. Hamming distance = 2. Path metric = 2.
            *   To `10` (input 1 from `00`):  Expected output = `11`. Hamming distance = 0. Path metric = 0.
        *   **Time 2 (Received: 00):**
            *  To `00` (input 0 from `00`): Expected output = `00`. Hamming distance = 0. Path metric = 2 + 0 = 2
            *   To `01` (input 1 from `00`): Expected output = `11`. Hamming distance = 2. Path metric = infinity.
            *   To `10` (input 0 from `10`): Expected output = `11`. Hamming Distance = 2. Path metric = 0 +2 = 2
            *   To `11` (input 1 from `10`): Expected output = `00`. Hamming Distance = 0. Path metric = 0 + 0 =0.
        *   **Time 3 (Received: 10):**
          * To `00` (input 0 from `00`):  Expected output = `00`. Hamming distance = 1. Path metric = 2.
          * To `01` (input 1 from `00`):  Expected output = `11`. Hamming distance = 1. Path metric = 2.
          * To `10` (input 0 from `10`):  Expected output = `11`. Hamming distance = 1. Path metric = 2.
          * To `11` (input 1 from `10`):  Expected output = `00`. Hamming distance = 1. Path metric = 2.
         Final survivor paths are determined by finding states with min metric and traceback is done.  (The trellis diagram is crucial to visualize this).
    **(c)**  Decoded message: Depends on the completed traceback.  Let's say after traceback we find the survivor path lead to states `00 -> 00 -> 00 -> 00`, then decoded message is `000`.

2.  The Viterbi algorithm seeks the *most likely sequence of states* that generated the received signal. It outputs a hard decision, selecting the single best path through the trellis.  The BCJR algorithm, on the other hand, calculates the *a posteriori probability (APP)* of each individual bit being 0 or 1, *given the entire received sequence*. It outputs soft decisions (probabilities) rather than a single hard decision.

3.  **BCJR Decoding Outline (First Bit):**
    *   **Branch Metric (γ):** Calculate γ_1(s', s) for all possible state transitions from time 0 to time 1 based on the received bits `11` and the BSC channel. The formula is γ_k(s', s) = p^d * (1-p)^(n-d)  where 'p' is the bit error probability of BSC.
    *   **Forward Recursion (α):** Initialize α_0(00) = 1, and α_0(s) = 0 for s != 00. Calculate α_1(s) for all states *s* using the formula: α_1(s) = Σ [ α_0(s') * γ_1(s', s) ] (sum over all s' that can transition to s).
    *   **Backward Recursion (β):**  Initialize β_2(s) based on a termination condition (e.g., β_2(00) = 1). Then, calculate β_1(s') for all states *s'* using the formula: β_1(s') = Σ [ β_2(s) * γ_2(s', s) ]  where γ_2 (s', s) are branch metrics at time 2.
    *   **Calculate APP:** Calculate P(u_1 = 0 | y) and P(u_1 = 1 | y) using the formulas:
        *   P(u_1 = 0 | y) =  Σ [α_0(s') * γ_1(s', s) * β_1(s)]  (sum over all transitions s' -> s due to input 0)
        *   P(u_1 = 1 | y) =  Σ [α_0(s') * γ_1(s', s) * β_1(s)]  (sum over all transitions s' -> s due to input 1)

4.  **Complexity Analysis:**  The computational complexity of both the Viterbi and BCJR algorithms scales *exponentially* with the constraint length *K* of the convolutional code. Specifically, the complexity is proportional to 2^(K-1) for each time step, because the number of states in the trellis is 2^(K-1). Therefore, increasing the constraint length significantly increases the computational burden of these algorithms. Because the BCJR algorithm has more computations per state than Viterbi it's more complex algorithm.

## 7. Important Points to Remember

*   The Viterbi algorithm is an optimal (ML) hard-decision decoding algorithm.
*   The BCJR algorithm is an optimal (MAP) soft-decision decoding algorithm.
*   The Viterbi algorithm is less complex than the BCJR algorithm.
*   The BCJR algorithm provides soft output (APPs), which are useful for iterative decoding.
*   The constraint length *K* plays a critical role in the performance and complexity of both algorithms. Higher *K* implies better performance but significantly increased complexity.
*   Log-domain implementations (Log-MAP, Max-Log-MAP) are often used for the BCJR algorithm to improve numerical stability.

These notes provide a detailed explanation of the Viterbi and BCJR algorithms, including their principles, steps, advantages, and disadvantages. The examples and practice questions should help you to solidify your understanding of these concepts. Remember to consult your textbook and other resources for further information. Good luck with your studies!
