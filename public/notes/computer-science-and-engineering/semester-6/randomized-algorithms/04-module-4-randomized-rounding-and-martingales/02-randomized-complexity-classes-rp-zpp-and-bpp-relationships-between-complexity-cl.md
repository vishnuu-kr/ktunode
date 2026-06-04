---
title: "Randomized Complexity Classes - RP, ZPP, and BPP, Relationships between complexity classes, Amplification and derandomization techniques"
subject: "RANDOMIZED ALGORITHMS"
module: "Module 4: Randomized Rounding and Martingales "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd61"
status: "completed"
scrapedAt: "2026-05-20T16:57:11.684Z"
---
## RANDOMIZED ALGORITHMS - Module 4: Randomized Rounding and Martingales
### Topic: Randomized Complexity Classes - RP, ZPP, and BPP

**Learning Outcomes:**

*   Understand and define the complexity classes RP, ZPP, and BPP.
*   Explain the relationships between RP, ZPP, BPP, P, and NP.
*   Describe and apply amplification techniques for randomized algorithms.
*   Discuss and understand basic derandomization techniques.

---

### 1. Randomized Complexity Classes: RP, ZPP, and BPP

*   **Introduction:** These complexity classes characterize the power of computation when randomization is allowed. They define the limits on the error probability that randomized algorithms are permitted to have.

*   **RP (Randomized Polynomial Time):**

    *   **Definition:** A decision problem is in RP if there exists a randomized polynomial-time algorithm `A` such that:

        *   If the answer is YES, `A` outputs YES with probability at least 1/2.
        *   If the answer is NO, `A` always outputs NO.

    *   **Intuition:** RP algorithms can be thought of as providing "one-sided error." They can make a mistake only when the answer is YES, but never when the answer is NO. Think of it as a witness verifying a YES answer, but the witness might occasionally fail to appear even when it exists.

    *   **One-Sided Error (False Negative):** The only type of error that can occur is a false negative (saying NO when the actual answer is YES).

    *   **Example:** Primality Testing using the Miller-Rabin test is in RP. If the number is prime, the test always returns prime. If the number is composite, the test returns composite with probability at least 1/2.

*   **ZPP (Zero-Error Probabilistic Polynomial Time):**

    *   **Definition:** A decision problem is in ZPP if there exists a randomized algorithm `A` that:

        *   Always returns the correct answer (no error).
        *   Runs in expected polynomial time.

    *   **Intuition:**  ZPP algorithms never make mistakes.  They run in *expected* polynomial time, which means that they might run for a very long time sometimes, but on average, they're fast.

    *   **Relationship to RP:** ZPP = RP ∩ co-RP. An equivalent definition of ZPP: a problem is in ZPP if it has a Las Vegas algorithm running in polynomial time. (Las Vegas: always gives the correct answer, but its running time is a random variable.)

    *   **Example:** Quicksort with a randomly chosen pivot is a Las Vegas algorithm running in expected O(n log n) time. While it is not a decision problem, it demonstrates the concept of expected runtime. A decision problem example would be finding a witness, where the witness-finding algorithm terminates quickly when it finds one.

*   **BPP (Bounded-Error Probabilistic Polynomial Time):**

    *   **Definition:** A decision problem is in BPP if there exists a randomized polynomial-time algorithm `A` such that:

        *   If the answer is YES, `A` outputs YES with probability at least 2/3.
        *   If the answer is NO, `A` outputs NO with probability at least 2/3.

    *   **Intuition:** BPP algorithms allow for two-sided errors. They can make a mistake (either false positive or false negative), but the probability of making an error is bounded away from 1/2 (usually, it's required to be less than 1/3).

    *   **Two-Sided Error:** Both false positives and false negatives are possible.

    *   **Error Bound:** The 2/3 probability threshold is arbitrary; amplification techniques (see below) can reduce the error probability to exponentially small levels.

    *   **Example:** Polynomial Identity Testing (PIT) is in BPP.  Given two polynomials, P(x) and Q(x), we can check if they are identical by evaluating them at a random point.  If they differ, the probability of collision is small.

### 2. Relationships Between Complexity Classes

*   **P ⊆ RP ⊆ NP**
    *   **P ⊆ RP:** If a problem can be solved in deterministic polynomial time (P), it can certainly be solved in randomized polynomial time with one-sided error (RP) by ignoring the random bits.
    *   **RP ⊆ NP:** If a problem is in RP, it means there's a randomized polynomial-time algorithm that finds a "witness" for a YES instance with a probability of at least 1/2.  We can view this algorithm as a "verifier" in the NP framework.  If the algorithm outputs YES, we accept; otherwise, we reject.  Note:  It's not known whether RP = NP or P = RP.

*   **P ⊆ ZPP ⊆ RP, co-RP**
    *   **P ⊆ ZPP:** Similar to the P ⊆ RP case.
    *   **ZPP = RP ∩ co-RP:** This is a crucial relationship. co-RP is the class of problems where if the answer is NO, the randomized algorithm outputs NO with probability >= 1/2, and if the answer is YES, it *always* outputs YES. If a problem is in both RP and co-RP, we can run both algorithms. If the RP algorithm says NO, we're certain the answer is NO. If the co-RP algorithm says YES, we're certain the answer is YES.  If they both return "don't know" (i.e., the RP algorithm says YES, and the co-RP algorithm says NO), we repeat the algorithms. The expected number of times we need to repeat is polynomial.

*   **P ⊆ BPP**
    *   **P ⊆ BPP:**  Trivially true.

*   **RP ⊆ BPP** and **co-RP ⊆ BPP**
    *   If a problem is in RP, then a BPP algorithm can simply use the RP algorithm. If the RP algorithm outputs YES, the BPP algorithm also outputs YES. If the RP algorithm outputs NO, the BPP algorithm outputs NO. The probability of error for the BPP algorithm will be less than 1/3 (it will be less than 1/2 in the case of a YES answer, but amplification can easily handle this). A similar argument applies for co-RP.

*   **Relationship with NP:**  It is not known whether BPP ⊆ NP or NP ⊆ BPP.  This is a major open question in complexity theory.  It is widely believed that BPP = P, meaning that randomness doesn't actually add any power to polynomial-time computation, but a proof remains elusive.

*   **Summary of Relationships (in a simplified way):**
    *   P ⊆ ZPP ⊆ RP ⊆ BPP
    *   ZPP = RP ∩ co-RP

### 3. Amplification

*   **Definition:** Amplification is a technique used to reduce the error probability of a randomized algorithm. If an algorithm has a constant probability of success, amplification can boost it to an exponentially high probability of success.

*   **Key Idea:** Run the algorithm multiple times independently and take the majority vote.

*   **Amplification of RP Algorithms:**

    *   Suppose we have an RP algorithm `A` with error probability ≤ 1/2 for YES instances.
    *   Run `A` for `k` independent trials.
    *   Output YES if at least one of the `k` trials outputs YES; otherwise, output NO.
    *   The probability of error (i.e., outputting NO when the answer is YES) is now ≤ (1/2)^k.  By choosing `k` large enough (e.g., `k = c log(n)` for some constant `c`), we can make the error probability exponentially small (e.g., 1/n^c).

*   **Amplification of BPP Algorithms:**

    *   Suppose we have a BPP algorithm `A` with error probability ≤ 1/3.
    *   Run `A` for `k` independent trials.
    *   Take the majority vote: Output YES if more than `k/2` trials output YES; otherwise, output NO.
    *   Using Chernoff bounds, we can show that the probability of the majority vote being wrong decreases exponentially with `k`. Specifically,  `Pr[|number of correct answers - k/2| > δk] < 2 * exp(-2δ^2k)`.
    *   By choosing `k` large enough (e.g., `k = O(log(n))`), we can reduce the error probability to, say, 1/n.
        *  We can choose k such that  `Pr[|number of correct answers - k/2| > δk] < 1/n`.  Then solve for k.

*   **Importance:** Amplification allows us to transform randomized algorithms with moderate error rates into algorithms with negligible error rates, making them more reliable.  It's critical for BPP as the 2/3 probability is often too high to be practically useful.

### 4. Derandomization

*   **Definition:** Derandomization is the process of converting a randomized algorithm into a deterministic algorithm, ideally without significantly increasing the computational complexity.

*   **Why Derandomize?**
    *   Randomness might not be truly available in all computational environments.
    *   Deterministic algorithms are generally easier to analyze and debug.
    *   The existence of efficient deterministic algorithms for certain problems can have significant theoretical implications.  (e.g., proving BPP = P)

*   **Challenges:**
    *   Derandomization is often very difficult.
    *   Naive approaches (e.g., trying all possible random bit sequences) usually lead to exponential time complexity.

*   **Basic Derandomization Techniques:**

    *   **Method of Conditional Expectations:**

        *   **Idea:** Maintain the expected cost/performance of the algorithm. At each random choice, deterministically choose the option that leads to the *best* expected cost/performance.
        *   **Applicability:** This works well when we can efficiently compute the conditional expectations.
        *   **Example:** Derandomizing randomized rounding algorithms for set cover or max cut.
        *   **Limitation:**  Calculating the conditional expectation might still be computationally expensive.

    *   **Using Pairwise or k-wise Independent Random Variables:**

        *   **Idea:**  Instead of using truly random bits, use a smaller number of random bits to generate variables that are pairwise or k-wise independent (meaning that any subset of k variables behaves as if it were truly independent).
        *   **Applicability:** This can work if the analysis of the randomized algorithm only relies on pairwise or k-wise independence.
        *   **Advantage:**  The space of possible random bit sequences is much smaller, which might allow us to try all possible sequences in reasonable time.  Or, the algorithm can be analyzed directly with the limited independence.
        *   **Example:**  Constructing a universal hash function.

    *   **Pseudorandom Number Generators (PRNGs):**

        *   **Idea:** Use a PRNG to generate a sequence of bits that "look random" but are actually generated deterministically from a small seed.
        *   **Applicability:**  If the randomized algorithm is "robust" to small deviations from true randomness, a PRNG might work well.
        *   **Advantage:**  Reduces the amount of true randomness needed.
        *   **Challenge:**  Difficult to prove that a PRNG will work for a specific algorithm.

*   **Full Derandomization (Removing Randomness Completely):** The ultimate goal is to achieve full derandomization, but this is often very difficult and may not be possible. Much research is focused on developing efficient derandomization techniques for specific problems.

---

### Practice Questions/Exercises:

1.  **Question:**  Suppose you have an RP algorithm A that runs in polynomial time and outputs YES with probability at least 1/n if the correct answer is YES.  How many times must you run algorithm A independently to reduce the probability of error to at most 1/n^2 if the correct answer is YES?

    **Answer:**  We need to run the algorithm `k` times such that (1 - (1 - 1/n)^k) >= 1 - 1/n^2.  It's easier to consider the failure probability: (1 - 1/n)^k <= 1/n^2.  Taking the logarithm of both sides:  k * ln(1 - 1/n) <= -2 * ln(n).  Since ln(1 - x) ≈ -x for small x, we have  k * (-1/n) <= -2 * ln(n), so k >= 2n * ln(n). Therefore, we must run the algorithm at least 2n*ln(n) times.

2.  **Question:**  Explain the difference between a Monte Carlo algorithm and a Las Vegas algorithm in terms of their correctness and running time.

    **Answer:**
    *   **Monte Carlo:**  May produce an incorrect answer, but always runs in a fixed (often polynomial) amount of time. BPP and RP algorithms are examples of Monte Carlo algorithms.
    *   **Las Vegas:**  Always produces the correct answer, but the running time is a random variable. The algorithm has an *expected* running time that is often polynomial. ZPP algorithms are examples of Las Vegas algorithms.

3.  **Question:**  If a problem is in ZPP, why is it also in RP and co-RP?

    **Answer:** If a problem is in ZPP, we have an algorithm that always produces the correct answer but runs in *expected* polynomial time.

    *   **RP:**  We can modify the ZPP algorithm to run for a fixed polynomial amount of time (e.g., twice the expected running time). If it hasn't finished by then, we output NO. If the answer is NO, the original ZPP algorithm would have said NO and this version would too. If the answer is YES, with probability at least 1/2 the algorithm finds it within 2x the expected time. Thus, it satisfies the RP definition.
    *   **co-RP:** Similarly, we can modify the ZPP algorithm to run for a fixed polynomial amount of time. If it hasn't finished by then, output YES. If the original ZPP answer would have been YES, then we will correctly answer yes. If the answer is NO, there's at least a 1/2 chance that the algorithm will finish, answering NO.

4.  **Question:** Explain how to amplify a BPP algorithm with error probability 1/4 to have error probability at most 1/n^2.

    **Answer:**  Run the BPP algorithm k times independently, and output the majority result.  We want to find k such that `Pr[|number of correct answers - k/2| > δk] < 1/n^2`, where each run of the BPP algorithm has probability 3/4 of being correct. Let δ be such that `Pr[|number of correct answers - k/2| > δk] < 2 * exp(-2δ^2k)`. Then, we want to find k such that `2 * exp(-2δ^2k) < 1/n^2` or `exp(-2δ^2k) < 1/(2n^2)`. Taking logarithms, `-2δ^2k < ln(1/(2n^2))` which is `-2δ^2k < -ln(2n^2)`. Thus, `k > ln(2n^2) / (2δ^2)`.  Since the probability of a correct answer is 3/4, the expected number of correct answers is (3/4)k, so we need δ < 1/2, otherwise the fraction of correct answers is less than what is required to determine the correct answer. For example, let's take δ = 1/4. Then k > ln(2n^2) / (2(1/16)) which gives k > 8 * ln(2n^2) = 8 * (ln(2) + 2ln(n)). Thus, we need to run the BPP algorithm O(log(n)) times.

---

### Important Points to Remember:

*   RP algorithms have one-sided error, ZPP algorithms have no error and run in expected polynomial time, and BPP algorithms have two-sided error.
*   Amplification is a critical technique for reducing error probability in randomized algorithms.
*   Derandomization aims to remove randomness from algorithms, often a difficult task.
*   Understanding the relationships between complexity classes like P, RP, ZPP, BPP, and NP is essential for understanding the power and limitations of randomized computation.
*   The exact relationships between BPP and NP, and whether BPP = P, are major open problems in complexity theory.
