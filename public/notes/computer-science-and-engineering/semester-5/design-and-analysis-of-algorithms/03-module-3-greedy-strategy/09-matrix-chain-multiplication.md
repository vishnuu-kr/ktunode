---
title: "Matrix Chain Multiplication"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 3: Greedy Strategy "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b562"
status: "completed"
scrapedAt: "2026-05-20T16:45:48.735Z"
---
## Module 3: Greedy Strategy - Matrix Chain Multiplication

**Subject:** DESIGN AND ANALYSIS OF ALGORITHMS
**Module:** Module 3: Greedy Strategy
**Topic:** Matrix Chain Multiplication

**Learning Outcomes:**

*   Understand the problem of Matrix Chain Multiplication.
*   Explain why a naive approach is inefficient.
*   Describe the dynamic programming approach to solve the Matrix Chain Multiplication problem.
*   Analyze the time and space complexity of the dynamic programming solution.
*   Be able to apply the algorithm to solve Matrix Chain Multiplication problems.

---

### 1. Introduction to Matrix Chain Multiplication

*   **Definition:** The Matrix Chain Multiplication problem involves determining the optimal way to multiply a chain of matrices.  Given a sequence of matrices A1, A2, ..., An, we want to compute the product A1A2...An. Matrix multiplication is associative, meaning that the order in which we perform the multiplications affects the total number of scalar multiplications (and therefore, the time) required.

*   **Goal:** Find the parenthesization of the product A1A2...An that minimizes the number of scalar multiplications.

*   **Example:** Consider three matrices:
    *   A1: 10 x 100
    *   A2: 100 x 5
    *   A3: 5 x 50

    We have two possible parenthesizations:

    1.  (A1A2)A3:  Multiplying A1 and A2 requires 10 * 100 * 5 = 5000 scalar multiplications. The resulting matrix is 10 x 5. Multiplying this with A3 (5 x 50) requires 10 * 5 * 50 = 2500 scalar multiplications. Total: 5000 + 2500 = 7500 scalar multiplications.

    2.  A1(A2A3): Multiplying A2 and A3 requires 100 * 5 * 50 = 25000 scalar multiplications. The resulting matrix is 100 x 50. Multiplying A1 (10 x 100) with this requires 10 * 100 * 50 = 50000 scalar multiplications. Total: 25000 + 50000 = 75000 scalar multiplications.

    As you can see, the parenthesization significantly impacts the total number of operations.

### 2. Why a Naive (Brute Force) Approach is Inefficient

*   **Exponential Complexity:** A naive approach would involve trying all possible parenthesizations and calculating the cost for each.  The number of possible parenthesizations for n matrices is given by the Catalan number, which grows exponentially with n.  Therefore, this brute-force method is computationally infeasible for even a moderately sized chain of matrices.

*   **Catalan Number:**  C(n) = (2n)! / ((n+1)!n!). This shows the exponential growth of possible parenthesizations as n increases.

*   **Implication:** Trying every possible combination becomes extremely time-consuming, making it impractical for real-world scenarios.

### 3. Dynamic Programming Approach

*   **Optimal Substructure:** The key observation is that the optimal solution to the Matrix Chain Multiplication problem can be constructed from optimal solutions to subproblems. In other words, if the optimal way to multiply A1A2...An involves splitting the product at matrix Ak (i.e., (A1...Ak)(Ak+1...An)), then the parenthesizations of A1...Ak and Ak+1...An must also be optimal.

*   **Overlapping Subproblems:** The subproblems overlap significantly. For example, when computing the optimal cost of A1A2...An, we may need to compute the optimal cost of A2A3...An-1 multiple times.

*   **Steps:** The dynamic programming approach involves the following steps:

    1.  **Define the Subproblem:** `m[i, j]` represents the minimum number of scalar multiplications needed to compute the matrix AiAi+1...Aj.

    2.  **Define the Recurrence Relation:**
        *   **Base Case:** `m[i, i] = 0` (Multiplying a single matrix requires no multiplications).
        *   **Recursive Case:** `m[i, j] = min_{i <= k < j} {m[i, k] + m[k+1, j] + p_{i-1}p_kp_j}`
            *   `p_{i-1}` is the number of rows in matrix Ai.
            *   `p_k` is the number of columns in matrix Ak (and the number of rows in Ak+1).
            *   `p_j` is the number of columns in matrix Aj.
            *   The `k` value represents the split point. We iterate through all possible split points between `i` and `j` and choose the one that minimizes the cost.

    3.  **Compute the Optimal Cost:** Construct a table `m` of size n x n, where `m[i, j]` stores the minimum number of scalar multiplications to compute the product AiAi+1...Aj.  Fill the table in a bottom-up manner, starting with subproblems of length 1, then length 2, and so on, until you reach the full problem of length n (i.e., `m[1, n]`).

    4.  **Construct the Optimal Parenthesization:**  Along with the cost table `m`, maintain another table `s` of the same size. `s[i, j]` stores the value of `k` that achieved the minimum cost in the recurrence relation for `m[i, j]`.  This table is used to reconstruct the optimal parenthesization.

*   **Algorithm (Pseudocode):**

    ```
    MatrixChainOrder(p):
        n = length(p) - 1  // Number of matrices
        // Initialize m and s tables
        for i = 1 to n:
            m[i, i] = 0
        for l = 2 to n:  // l is the length of the chain
            for i = 1 to n - l + 1:
                j = i + l - 1
                m[i, j] = infinity
                for k = i to j - 1:
                    q = m[i, k] + m[k+1, j] + p[i-1] * p[k] * p[j]
                    if q < m[i, j]:
                        m[i, j] = q
                        s[i, j] = k
        return m, s

    PrintOptimalParens(s, i, j):
        if i == j:
            print "A" + i
        else:
            print "("
            PrintOptimalParens(s, i, s[i, j])
            PrintOptimalParens(s, s[i, j] + 1, j)
            print ")"
    ```

### 4. Analysis of Time and Space Complexity

*   **Time Complexity:** O(n^3). The algorithm consists of three nested loops:
    *   The outer loop iterates from `l = 2` to `n`.
    *   The middle loop iterates from `i = 1` to `n - l + 1`.
    *   The inner loop iterates from `k = i` to `j - 1`.
    Therefore, the dominant term is O(n^3).

*   **Space Complexity:** O(n^2).  The algorithm uses two tables, `m` and `s`, both of size n x n, to store the minimum costs and split points, respectively.

### 5. Example

Let's revisit the example with matrices:

*   A1: 10 x 100
*   A2: 100 x 5
*   A3: 5 x 50

Therefore, `p = [10, 100, 5, 50]`

1.  **Initialization:**  `m[i, i] = 0` for i = 1, 2, 3

2.  **l = 2:**

    *   `m[1, 2] = min {m[1, 1] + m[2, 2] + p[0] * p[1] * p[2]} = min {0 + 0 + 10 * 100 * 5} = 5000`. `s[1, 2] = 1`
    *   `m[2, 3] = min {m[2, 2] + m[3, 3] + p[1] * p[2] * p[3]} = min {0 + 0 + 100 * 5 * 50} = 25000`. `s[2, 3] = 2`

3.  **l = 3:**

    *   `m[1, 3] = min {m[1, 1] + m[2, 3] + p[0] * p[1] * p[3], m[1, 2] + m[3, 3] + p[0] * p[2] * p[3]}`
    *   `m[1, 3] = min {0 + 25000 + 10 * 100 * 50, 5000 + 0 + 10 * 5 * 50}`
    *   `m[1, 3] = min {75000, 7500}`
    *   `m[1, 3] = 7500`. `s[1, 3] = 2`

Therefore, the minimum number of scalar multiplications is 7500, and the optimal parenthesization, obtained from `s[1,3] = 2` is `(A1(A2A3))`.  This contradicts our initial example. Looking back at our example, it looks like I used the wrong numbers in calculating the matrix multiplication.  Let's correct this. s[1,3] = 1 because in the step we actually did the following:
`m[1, 3] = min {m[1, 1] + m[2, 3] + p[0] * p[1] * p[3], m[1, 2] + m[3, 3] + p[0] * p[2] * p[3]}`
`m[1, 3] = min {0 + 25000 + 10 * 100 * 50, 5000 + 0 + 10 * 5 * 50}`
`m[1, 3] = min {75000 (k = 1), 7500 (k = 2)}`

So when k = 1 (splitting between A1 and A2A3), there are 75000 operations. When k = 2 (splitting between A1A2 and A3), there are 7500 operations. Thus, since k = 2 gave us the lowest value, s[1,3] = 2. This means the optimal way is (A1A2)A3.

**Reconstructing the optimal parenthesization using PrintOptimalParens(s, 1, 3):**

1.  `PrintOptimalParens(s, 1, 3)`: `s[1, 3] = 2`, so print `(`
2.  `PrintOptimalParens(s, 1, 2)`: `s[1, 2] = 1`, so print `(`
3.  `PrintOptimalParens(s, 1, 1)`: print `A1`
4.  `PrintOptimalParens(s, 2, 2)`: print `A2`
5.  Print `)` (closing parenthesis for A1A2)
6.  `PrintOptimalParens(s, 3, 3)`: print `A3`
7.  Print `)` (closing parenthesis for (A1A2)A3)

Therefore, the output will be: `((A1A2)A3)`.

### 6. Important Points to Remember

*   **Optimal Substructure is Key:**  The dynamic programming approach relies on the fact that the optimal solution can be built from optimal solutions to subproblems.
*   **Bottom-Up Approach:** The dynamic programming algorithm fills the cost table in a bottom-up manner to ensure that the cost of each subproblem is computed before it is needed by larger subproblems.
*   **Tables m and s:** The `m` table stores the minimum costs, and the `s` table stores the optimal split points, which are used to reconstruct the optimal parenthesization.
*   **Order of Dimensions:** Remember to be careful about the order of dimensions (rows and columns) of the matrices.  `p[i]` represents the number of columns in matrix Ai, and `p[i-1]` represents the number of rows in matrix Ai.

### 7. Practice Questions/Exercises

1.  **Problem:** Given the dimensions of four matrices A, B, C, and D as follows:
    *   A: 5 x 10
    *   B: 10 x 3
    *   C: 3 x 12
    *   D: 12 x 5

    Use the dynamic programming approach to find the optimal parenthesization to minimize the number of scalar multiplications required to compute ABCD.  Show the `m` and `s` tables.

    **Answer:**

    `p = [5, 10, 3, 12, 5]`

    **m table:**

    ```
        1   2   3   4
    1   0   150  510  660
    2       0   360  510
    3           0   180
    4               0
    ```

    **s table:**

    ```
        1   2   3   4
    1       1   1   1
    2           2   2
    3               3
    4
    ```

    *   `m[1, 4] = 660`
    *   Optimal Parenthesization: `((A(BC))D)`

    * **Explanation:**

       1. l = 2

           m[1,2] = 5*10*3 = 150 s[1,2] = 1
           m[2,3] = 10*3*12 = 360 s[2,3] = 2
           m[3,4] = 3*12*5 = 180 s[3,4] = 3

       2. l = 3

           m[1,3] = min(m[1,1] + m[2,3] + 5*10*12, m[1,2] + m[3,3] + 5*3*12) = min (0 + 360 + 600, 150 + 0 + 180) = min(960, 330) = 330 s[1,3] = 2

           m[2,4] = min (m[2,2] + m[3,4] + 10*3*5, m[2,3] + m[4,4] + 10*12*5) = min(0 + 180 + 150, 360 + 0 + 600) = min(330, 960) = 330 s[2,4] = 3

       3. l = 4

          m[1,4] = min (m[1,1] + m[2,4] + 5*10*5, m[1,2] + m[3,4] + 5*3*5, m[1,3] + m[4,4] + 5*12*5) = min ( 0 + 330 + 250, 150 + 180 + 75, 330 + 0 + 300) = min(580, 405, 630) = 405 s[1,4] = 2. Thus, the splitting is at (A)(BCD).

          Let's find how to parenthize (BCD). s[2,4] = 3. SO the split is at (BC)(D)

          Let's find how to parenthize (BC). s[2,3] = 2. This indicates a split at B and C. Thus it is just (BC).

          Putting it all together, we get (A)(BC)(D).

     **Important NOTE** that after calculating all the numbers, the optimal parenthization is (A(BC))D. This is because the s[1,4] = 1 meaning the first split is at A. s[2,4] = 2. The s[3,4] = 3. Thus the overall optimal solution is 405 and the parenthesization is (A(BC))D.

2.  **Problem:** Explain how the Matrix Chain Multiplication problem exemplifies the principles of dynamic programming (optimal substructure and overlapping subproblems).

    **Answer:**

    *   **Optimal Substructure:** The optimal solution to the problem of multiplying a chain of matrices can be constructed from optimal solutions to subproblems.  This means that if we know the optimal way to multiply subchains AiAi+1...Aj, then we can use this information to find the optimal way to multiply the entire chain A1A2...An.
    *   **Overlapping Subproblems:**  The subproblems overlap because when computing the optimal cost of multiplying a chain, we may need to compute the optimal cost of the same subchains multiple times. Dynamic programming avoids recomputing these overlapping subproblems by storing the results in a table and reusing them when needed.

3.  **Problem:** Suppose you have the dimensions of matrices `A1(30x35)`, `A2(35x15)`, `A3(15x5)`, and `A4(5x10)`. What are the values of p0, p1, p2, p3 and p4?

    **Answer:**

    *   `p0 = 30`
    *   `p1 = 35`
    *   `p2 = 15`
    *   `p3 = 5`
    *   `p4 = 10`

This completes the study notes on Matrix Chain Multiplication within the context of Dynamic Programming.  Good luck!
