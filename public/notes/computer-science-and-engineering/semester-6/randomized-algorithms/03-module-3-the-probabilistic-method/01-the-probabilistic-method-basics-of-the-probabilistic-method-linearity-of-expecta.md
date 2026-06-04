---
title: "The Probabilistic Method - Basics of the probabilistic method, Linearity of expectation, First and second-moment methods."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 3: The Probabilistic Method "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd5d"
status: "completed"
scrapedAt: "2026-05-20T16:57:09.528Z"
---
## RANDOMIZED ALGORITHMS - Module 3: The Probabilistic Method

### Topic: The Probabilistic Method - Basics, Linearity of Expectation, First and Second Moment Methods

**Learning Outcomes:**

*   Understand the fundamental principles of the probabilistic method.
*   Apply the linearity of expectation to solve combinatorial problems.
*   Utilize the first and second moment methods to prove the existence of objects with desired properties.

---

### 1. Basics of the Probabilistic Method

**Key Concept:** The Probabilistic Method is a non-constructive proof technique used to demonstrate the existence of mathematical objects with certain properties.  Instead of explicitly constructing such an object, it shows that a randomly chosen object has a non-zero probability of possessing the desired properties.  Therefore, such an object *must* exist.

**Definition:**

*   **Sample Space (Ω):** The set of all possible outcomes of a random experiment.
*   **Event (A):** A subset of the sample space (A ⊆ Ω).
*   **Probability (P(A)):** The likelihood of an event A occurring, where 0 ≤ P(A) ≤ 1.

**Principles:**

*   **Existence Proof:** If P(A) > 0, then event A must occur in at least one outcome in Ω.  This implies the existence of an object (the outcome) with the properties defined by event A.
*   **Non-constructive:** The method proves existence but doesn't necessarily provide an algorithm or method to *find* the object.

**Example 1: Ramsey Numbers**

*   **Ramsey Number R(k, k):** The smallest integer n such that any 2-coloring of the edges of a complete graph on n vertices (K<sub>n</sub>) contains either a monochromatic K<sub>k</sub> (a complete subgraph on k vertices where all edges have the same color).

*   **Theorem:** If  `C(n, k) * 2^(1 - C(k, 2)) < 1`, then R(k, k) > n.

    *   **Proof Idea:** Consider a random 2-coloring of the edges of K<sub>n</sub>.  For each set of k vertices, the probability that the corresponding K<sub>k</sub> is monochromatic is 2 * 2<sup>-C(k, 2)</sup> = 2<sup>1 - C(k, 2)</sup>.  (Factor of 2 because it can be either all red or all blue).  There are `C(n, k)` such sets of k vertices.  The probability that *any* K<sub>k</sub> is monochromatic is, by the union bound, at most `C(n, k) * 2^(1 - C(k, 2))`.  If this is less than 1, there's a non-zero probability that *no* K<sub>k</sub> is monochromatic, meaning a 2-coloring of K<sub>n</sub> exists with no monochromatic K<sub>k</sub>.

*   **Implication:** This proves that R(k, k) must be greater than n, thereby providing a lower bound on the Ramsey number. We haven't *found* such a coloring, only proven that it exists.

**Important Points:**

*   The method relies on defining an appropriate sample space and event.
*   Calculating the probability P(A) is crucial.
*   A non-zero probability implies existence.

---

### 2. Linearity of Expectation

**Key Concept:** The expected value of the sum of random variables is equal to the sum of their expected values, *regardless of whether the random variables are independent or not*. This is a powerful tool for analyzing random variables.

**Definition:**

*   **Random Variable (X):** A variable whose value is a numerical outcome of a random phenomenon.
*   **Expected Value (E[X]):**  For a discrete random variable X, E[X] = Σ x * P(X = x), where the sum is taken over all possible values of x.

**Theorem (Linearity of Expectation):**

Let X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub> be random variables (not necessarily independent). Then:

E[X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>n</sub>] = E[X<sub>1</sub>] + E[X<sub>2</sub>] + ... + E[X<sub>n</sub>]

**Example 2: Number of Fixed Points in a Random Permutation**

*   **Problem:**  Consider a random permutation of {1, 2, ..., n}. What is the expected number of fixed points (i.e., positions where the element is in its correct order)?

*   **Solution:**

    *   Let X be the random variable representing the number of fixed points.
    *   Define indicator random variables X<sub>i</sub> for i = 1, 2, ..., n as follows:
        *   X<sub>i</sub> = 1 if element i is in position i (i.e., i is a fixed point)
        *   X<sub>i</sub> = 0 otherwise
    *   Then, X = X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>n</sub>
    *   E[X<sub>i</sub>] = P(X<sub>i</sub> = 1) = 1/n  (since there are n! permutations, and (n-1)! have i in position i).
    *   By linearity of expectation:
        E[X] = E[X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>n</sub>] = E[X<sub>1</sub>] + E[X<sub>2</sub>] + ... + E[X<sub>n</sub>] = n * (1/n) = 1

    *   **Conclusion:** The expected number of fixed points in a random permutation of n elements is 1.

**Example 3: Finding a Cut with at Least Half the Edges**

*   **Problem:** Prove that any undirected graph G = (V, E) has a cut (a partition of the vertices into two sets) containing at least |E|/2 edges.

*   **Solution:**
    *   Randomly assign each vertex to one of two sets, S and V\S, with probability 1/2.
    *   For each edge (u, v) in E, define an indicator random variable X<sub>uv</sub>:
        *   X<sub>uv</sub> = 1 if u ∈ S and v ∈ V\S, or u ∈ V\S and v ∈ S (the edge crosses the cut)
        *   X<sub>uv</sub> = 0 otherwise
    *   The probability that an edge (u, v) crosses the cut is P(X<sub>uv</sub> = 1) = (1/2)*(1/2) + (1/2)*(1/2) = 1/2.
    *   E[X<sub>uv</sub>] = P(X<sub>uv</sub> = 1) = 1/2.
    *   Let X be the total number of edges crossing the cut. X = Σ X<sub>uv</sub>, where the sum is over all edges (u, v) in E.
    *   By linearity of expectation, E[X] = Σ E[X<sub>uv</sub>] = Σ (1/2) = |E|/2.

    *   **Conclusion:**  Since the expected number of edges crossing the cut is |E|/2, there must exist at least one cut with at least |E|/2 edges.

**Important Points:**

*   Linearity of expectation works even if random variables are dependent.
*   Define appropriate indicator random variables.
*   Calculate the expected value of each individual variable.
*   Sum the expected values to get the expected value of the total.

---

### 3. First and Second-Moment Methods

**Key Concept:** These methods are used to show the existence of events by analyzing the first and second moments (expected value and variance) of a random variable.

**First Moment Method:**

*   **Principle:** If E[X] < a, then P(X < a) > 0.  This is a direct consequence of the definition of expected value.  It implies that there must be at least one outcome where X < a.
*   **Markov's Inequality:** A generalization of the first moment method.  For a non-negative random variable X and a > 0: P(X ≥ a) ≤ E[X] / a.  This provides an upper bound on the probability that X is significantly larger than its expected value.

**Second Moment Method:**

*   **Principle:** This method uses the variance of a random variable to provide a better estimate of the probability that X is close to its mean.  It's particularly useful when the first moment method alone isn't sufficient.
*   **Definition:** Variance of a random variable X: Var(X) = E[(X - E[X])<sup>2</sup>] = E[X<sup>2</sup>] - (E[X])<sup>2</sup>
*   **Chebyshev's Inequality:** For any random variable X and k > 0: P(|X - E[X]| ≥ k) ≤ Var(X) / k<sup>2</sup>.  This provides an upper bound on the probability that X deviates significantly from its expected value.

**Using the Second Moment Method:**

1.  Show that E[X] is "large".
2.  Show that Var(X) is "small" compared to (E[X])<sup>2</sup>.  Specifically, show that Var(X) / (E[X])<sup>2</sup> approaches 0 as n (the size of the problem) increases.

    *   If Var(X) / (E[X])<sup>2</sup> → 0, then by Chebyshev's inequality, the probability that X deviates significantly from E[X] approaches 0.  This means that with high probability, X is close to its expected value. This indicates there exists an instance (outcome) in which the required properties are met.

**Example 4: Threshold Function for Graph Properties (Simplified)**

*   **Goal:** Show the existence of a graph with certain properties using the first and second moment methods.  (This is a simplified, conceptual example to illustrate the methods)

*   **Setup:**  Let G(n, p) be a random graph on n vertices where each edge exists with probability p.  Let X be the number of copies of a small subgraph H (e.g., a triangle) in G(n, p).

*   **First Moment Method:**  Calculate E[X].  If E[X] → 0 as n → ∞, this suggests (but doesn't guarantee) that G(n, p) is unlikely to contain H.

*   **Second Moment Method:**  If E[X] → ∞ as n → ∞, the first moment method is not enough to show that G(n, p) *must* contain H with high probability. We need to show that X is concentrated around its mean.

    1.  Calculate Var(X).  This often involves considering the covariance between different copies of H.
    2.  Show that Var(X) / (E[X])<sup>2</sup> → 0 as n → ∞. This indicates that the number of copies of H is concentrated around its expected value, and since the expected value is large, the graph almost surely contains many copies of H.

**Example 5:  (Slightly More Concrete)  Show almost all graphs in G(n, 1/2) have diameter 2**

*   **Definition:** A graph G has diameter 2 if for every pair of vertices *u* and *v*, either there is an edge between them, or there is a vertex *w* such that (u, w) and (w, v) are edges.

*   **Solution using the second moment method (brief outline):**

    1.  **Define X<sub>uv</sub>:**  For each pair of vertices *u* and *v*, let X<sub>uv</sub> = 1 if *u* and *v* do *not* have a common neighbor in G(n, 1/2), and X<sub>uv</sub> = 0 otherwise.
    2.  **Define X:** Let X be the number of pairs of vertices that *do not* have a common neighbor.  Therefore, X = Σ X<sub>uv</sub> over all pairs (u, v).
    3.  **E[X<sub>uv</sub>]:**  For any vertex *w*, the probability that neither (u, w) nor (v, w) is an edge is (1/2)(1/2) = 1/4.  Since there are *n*-2 other vertices (excluding *u* and *v*), the probability that *u* and *v* have *no* common neighbor is (1/4)<sup>n-2</sup>. Therefore, E[X<sub>uv</sub>] = (1/4)<sup>n-2</sup>.
    4.  **E[X]:** By linearity of expectation, E[X] = Σ E[X<sub>uv</sub>] = C(n, 2) * (1/4)<sup>n-2</sup> ≈ n<sup>2</sup> * (1/4)<sup>n-2</sup>.  This tends to 0 as n approaches infinity.
    5.  **Conclusion (Initial):** The *expected* number of pairs of vertices with no common neighbor goes to zero, which *suggests* almost all graphs have diameter 2.  However, we need to show that *actually* almost all graphs have diameter 2, so the next step is to look at the variance. This requires a more complex covariance argument.  We would need to show Var(X) / E[X]<sup>2</sup> approaches 0.  The full computation is lengthy, but this is the general approach.

**Important Points:**

*   **First Moment:** Provides a basic bound, useful when the expected value is small.
*   **Second Moment:** Refines the estimate by considering the variance, useful when the expected value is large but we need to show concentration around the mean.
*   Calculating the variance can be complex, often involving analyzing the covariance between different events.
*   **Key Goal:** Show that Var(X) / (E[X])<sup>2</sup> approaches 0 to prove concentration around the mean.

---

### Practice Questions/Exercises

**1.  Coin Flipping:**  Suppose you flip a fair coin *n* times. What is the expected number of heads?

    *   **Answer:**  Let X be the number of heads. Let X<sub>i</sub> be an indicator variable equal to 1 if the i-th flip is heads, and 0 otherwise. E[X<sub>i</sub>] = 1/2. Then X = X<sub>1</sub> + X<sub>2</sub> + ... + X<sub>n</sub>. E[X] = E[X<sub>1</sub>] + ... + E[X<sub>n</sub>] = n * (1/2) = n/2.

**2.  Domino Covering:**  Consider an 8x8 chessboard with two diagonally opposite corners removed.  Can it be covered by 31 dominoes, where each domino covers exactly two adjacent squares? (Hint: Consider a random placement and use a coloring argument)

    *   **Answer:** No, it cannot be covered.  When two diagonally opposite corners are removed, you are removing two squares of the same color.  Therefore, you are left with 32 squares of one color and 30 squares of the other color.  Each domino must cover one square of each color.  Therefore, you cannot cover the board because you don't have an equal number of squares of each color.

**3.  Independent Set:** Show that a graph G with *n* vertices and average degree *d* contains an independent set of size at least *n*/(2*d*). (Use the probabilistic method and delete vertices.)

    *   **Answer (Sketch):**  Randomly select each vertex with probability p. Let *X* be the number of vertices selected and *Y* be the number of edges selected. Note that you now have a set of vertices and edges which are just induced by these selected vertices. E[X] = *n*p. E[Y] = *m*p<sup>2</sup> (where *m* is the number of edges in the graph). Deleting one endpoint from each edge that was selected leaves an independent set of size *X - Y*. So, there must exist some graph with independent set of size E[X - Y] = E[X] - E[Y] = *n*p - *m*p<sup>2</sup>. By choosing *p* = 1/d (approximately, you may need to consider small differences in the number of edges as compared to the average degree), you get approximately *n* / *2d*.

**4.  Using Chebyshev's inequality:** Suppose a random variable *X* has E[X] = 10 and Var(X) = 4. Use Chebyshev's inequality to find an upper bound on P( |X - 10| >= 3).

    *   **Answer:**  P( |X - 10| >= 3) <= Var(X) / 3<sup>2</sup> = 4 / 9.

---

### Important Points to Remember

*   The Probabilistic Method is a *non-constructive* existence proof.
*   Linearity of expectation simplifies calculating the expected value of sums.
*   The First Moment Method (Markov's inequality) provides a basic probability bound.
*   The Second Moment Method (Chebyshev's inequality) refines the estimate by considering variance.
*   For the Second Moment Method, the key is to show that Var(X) / (E[X])<sup>2</sup> → 0.
*   Choose appropriate random variables and sample spaces for effective application.
