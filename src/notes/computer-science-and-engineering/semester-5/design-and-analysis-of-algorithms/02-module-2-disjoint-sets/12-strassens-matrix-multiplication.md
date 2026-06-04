---
title: "Strassen’s Matrix Multiplication"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 2: Disjoint Sets "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b557"
status: "completed"
scrapedAt: "2026-05-20T16:45:41.671Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS: Module 2 - Disjoint Sets

### Topic: Strassen’s Matrix Multiplication

**Description:**  This section covers Strassen’s Matrix Multiplication algorithm, a divide-and-conquer technique for multiplying matrices more efficiently than the naive method. While this module technically focuses on Disjoint Sets, understanding Strassen's algorithm provides a crucial example of Divide and Conquer principles in algorithm design.

**Learning Outcomes:**

*   Understand the divide-and-conquer paradigm.
*   Describe Strassen’s Matrix Multiplication algorithm.
*   Analyze the time complexity of Strassen’s algorithm.
*   Compare Strassen’s algorithm with the naive matrix multiplication algorithm.
*   Apply Strassen's algorithm to multiply matrices.

---

### 1. Introduction to Divide and Conquer

*   **Definition:** Divide and Conquer is an algorithmic paradigm that works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

*   **Key Steps:**
    *   **Divide:** Break the problem into smaller sub-problems.
    *   **Conquer:** Recursively solve the sub-problems. If the sub-problem is small enough, solve it directly.
    *   **Combine:** Combine the solutions to the sub-problems to obtain the solution to the original problem.

*   **Examples:** Merge Sort, Quick Sort, Binary Search, Strassen’s Matrix Multiplication.

### 2. Naive Matrix Multiplication

*   **Problem:** Given two n x n matrices A and B, compute their product C = A * B.

*   **Algorithm:**  The traditional method calculates each element C[i][j] of the result matrix C by taking the dot product of the i-th row of A and the j-th column of B.

*   **Code Snippet (Python):**
    ```python
    def naive_matrix_multiply(A, B):
        n = len(A)  # Assuming A and B are n x n matrices
        C = [[0 for _ in range(n)] for _ in range(n)]  # Initialize C with 0s
        for i in range(n):
            for j in range(n):
                for k in range(n):
                    C[i][j] += A[i][k] * B[k][j]
        return C
    ```

*   **Time Complexity:** O(n<sup>3</sup>).  There are three nested loops, each iterating `n` times.

*   **Space Complexity:** O(n<sup>2</sup>) for the resulting matrix C.

### 3. Strassen's Matrix Multiplication

*   **Problem:**  Same as naive matrix multiplication: Given two n x n matrices A and B, compute their product C = A * B.

*   **Algorithm Overview:**  Strassen's algorithm is a divide-and-conquer algorithm that reduces the number of multiplications needed to perform matrix multiplication. It achieves this by cleverly defining intermediate matrices that can be used to compute the final result.

*   **Key Idea:** Divides each n x n matrix into four (n/2) x (n/2) submatrices.  Instead of performing 8 multiplications of these submatrices (as in the naive approach), it performs only 7 multiplications.

*   **Steps (for n x n matrices where n is a power of 2):**

    1.  **Divide:** Divide A and B into four (n/2) x (n/2) submatrices:

        *   A =  | A<sub>11</sub>  A<sub>12</sub> |
                   | A<sub>21</sub>  A<sub>22</sub> |

        *   B =  | B<sub>11</sub>  B<sub>12</sub> |
                   | B<sub>21</sub>  B<sub>22</sub> |

    2.  **Compute Seven Intermediate Matrices (P1 to P7):**

        *   P1 = A<sub>11</sub> * (B<sub>12</sub> - B<sub>22</sub>)
        *   P2 = (A<sub>11</sub> + A<sub>12</sub>) * B<sub>22</sub>
        *   P3 = (A<sub>21</sub> + A<sub>22</sub>) * B<sub>11</sub>
        *   P4 = A<sub>22</sub> * (B<sub>21</sub> - B<sub>11</sub>)
        *   P5 = (A<sub>11</sub> + A<sub>22</sub>) * (B<sub>11</sub> + B<sub>22</sub>)
        *   P6 = (A<sub>12</sub> - A<sub>22</sub>) * (B<sub>21</sub> + B<sub>22</sub>)
        *   P7 = (A<sub>11</sub> - A<sub>21</sub>) * (B<sub>11</sub> + B<sub>12</sub>)

    3.  **Compute the Submatrices of the Result Matrix C:**

        *   C<sub>11</sub> = P5 + P4 - P2 + P6
        *   C<sub>12</sub> = P1 + P2
        *   C<sub>21</sub> = P3 + P4
        *   C<sub>22</sub> = P1 + P5 - P3 - P7

        *   C =  | C<sub>11</sub>  C<sub>12</sub> |
                   | C<sub>21</sub>  C<sub>22</sub> |

    4.  **Combine:** Recursively apply Strassen's algorithm to multiply the submatrices (P1 to P7) until the submatrices are small enough to be multiplied directly (e.g., 1x1 matrices).

*   **Code Snippet (Python):**
    ```python
    import numpy as np

    def strassen(A, B):
        n = len(A)

        # Base case: if the matrix is 1x1, return the simple multiplication
        if n == 1:
            return [[A[0][0] * B[0][0]]]

        # Divide the matrices into four submatrices
        mid = n // 2
        A11 = [row[:mid] for row in A[:mid]]
        A12 = [row[mid:] for row in A[:mid]]
        A21 = [row[:mid] for row in A[mid:]]
        A22 = [row[mid:] for row in A[mid:]]
        B11 = [row[:mid] for row in B[:mid]]
        B12 = [row[mid:] for row in B[:mid]]
        B21 = [row[:mid] for row in B[mid:]]
        B22 = [row[mid:] for row in B[mid:]]

        # Compute the seven products
        P1 = strassen(A11, subtract_matrix(B12, B22))
        P2 = strassen(add_matrix(A11, A12), B22)
        P3 = strassen(add_matrix(A21, A22), B11)
        P4 = strassen(A22, subtract_matrix(B21, B11))
        P5 = strassen(add_matrix(A11, A22), add_matrix(B11, B22))
        P6 = strassen(subtract_matrix(A12, A22), add_matrix(B21, B22))
        P7 = strassen(subtract_matrix(A11, A21), add_matrix(B11, B12))

        # Compute the four submatrices of C
        C11 = add_matrix(subtract_matrix(add_matrix(P5, P4), P2), P6)
        C12 = add_matrix(P1, P2)
        C21 = add_matrix(P3, P4)
        C22 = subtract_matrix(subtract_matrix(add_matrix(P5, P1), P3), P7)

        # Combine the four submatrices into the result matrix C
        C = [[0 for _ in range(n)] for _ in range(n)]
        for i in range(mid):
            for j in range(mid):
                C[i][j] = C11[i][j]
                C[i][j + mid] = C12[i][j]
                C[i + mid][j] = C21[i][j]
                C[i + mid][j + mid] = C22[i][j]

        return C

    def add_matrix(A, B):
        n = len(A)
        C = [[0 for _ in range(n)] for _ in range(n)]
        for i in range(n):
            for j in range(n):
                C[i][j] = A[i][j] + B[i][j]
        return C

    def subtract_matrix(A, B):
        n = len(A)
        C = [[0 for _ in range(n)] for _ in range(n)]
        for i in range(n):
            for j in range(n):
                C[i][j] = A[i][j] - B[i][j]
        return C

    # Example usage
    A = [[1, 2], [3, 4]]
    B = [[5, 6], [7, 8]]

    C = strassen(A, B)
    print("Matrix A:")
    for row in A:
        print(row)
    print("\nMatrix B:")
    for row in B:
        print(row)
    print("\nResultant Matrix C:")
    for row in C:
        print(row)
    ```
    This implementation uses Numpy to help with matrix operations.

*   **Time Complexity Analysis:**

    *   Let T(n) be the time complexity of Strassen's algorithm for multiplying two n x n matrices.
    *   We have 7 recursive calls to multiply (n/2) x (n/2) matrices.  Therefore, the recursive calls contribute 7T(n/2) to the complexity.
    *   We also have a constant number of matrix additions and subtractions, each of which takes O(n<sup>2</sup>) time.
    *   Thus, the recurrence relation for the time complexity is:  T(n) = 7T(n/2) + O(n<sup>2</sup>)
    *   Using the Master Theorem, we can determine the time complexity:
        *   a = 7, b = 2, f(n) = n<sup>2</sup>
        *   log<sub>b</sub>a = log<sub>2</sub>7 ≈ 2.81
        *   Since f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>) for some ε > 0 (e.g., ε = 0.8), we are in Case 1 of the Master Theorem.
        *   Therefore, T(n) = Θ(n<sup>log<sub>2</sub>7</sup>) ≈ Θ(n<sup>2.81</sup>)

*   **Space Complexity:** The space complexity is more involved due to the recursive calls.  It can be shown to be O(n<sup>log<sub>2</sub>7</sup>) as well in certain implementations, but heavily depends on how temporary matrices are managed.  In practical scenarios, memory allocation can be a bottleneck.

### 4. Comparison with Naive Matrix Multiplication

| Feature        | Naive Matrix Multiplication | Strassen's Algorithm      |
|----------------|-----------------------------|--------------------------|
| Time Complexity | O(n<sup>3</sup>)                | O(n<sup>log<sub>2</sub>7</sup>) ≈ O(n<sup>2.81</sup>) |
| Number of Multiplications | n<sup>3</sup>                 | Lower than n<sup>3</sup>  for large n |
| Implementation Complexity | Simple                    | More Complex             |
| Practical Considerations | Suitable for small n     | More suitable for large n |
| Space Complexity | O(n<sup>2</sup>)                | Varies, can be higher   |

*   **Conclusion:** Strassen's algorithm is asymptotically faster than naive matrix multiplication. However, the overhead associated with dividing the matrices and creating intermediate matrices makes it less efficient for small values of *n*.  There's a crossover point, often in the range of 100-200, where Strassen's algorithm becomes more efficient.  The *exact* crossover point depends on the specific implementation and hardware.  Furthermore, the larger memory footprint can also be a limiting factor in practice.

### 5. Applications

*   Theoretical importance in showing that matrix multiplication can be done faster than O(n<sup>3</sup>).
*   Used in libraries and applications that require efficient matrix multiplication for very large matrices.  These include scientific computing, image processing, and machine learning.

### 6. Practice Questions/Exercises

1.  **Manually trace Strassen's algorithm for 2x2 matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]. Show the intermediate matrices P1 to P7 and the final result.**

    *   **Answer:**  This requires careful computation following the steps outlined above.  You would calculate P1-P7 and then C11, C12, C21, C22 to form the resulting C matrix.

2.  **What is the time complexity of the naive matrix multiplication algorithm, and why is Strassen's algorithm considered an improvement?**

    *   **Answer:** The time complexity of the naive matrix multiplication is O(n<sup>3</sup>). Strassen's algorithm is an improvement because it achieves a lower time complexity of O(n<sup>log<sub>2</sub>7</sup>) ≈ O(n<sup>2.81</sup>).

3.  **Under what conditions is it more advantageous to use the naive matrix multiplication algorithm instead of Strassen's algorithm?**

    *   **Answer:** For small values of *n* (typically, n < 100-200), the naive matrix multiplication algorithm is often faster due to its simplicity and lower overhead. Strassen's algorithm's overhead of dividing and combining the matrices outweighs its asymptotic advantage for small problem sizes.

4.  **Explain the divide-and-conquer strategy used in Strassen's matrix multiplication algorithm.**

    *   **Answer:** Strassen's algorithm uses divide-and-conquer by recursively dividing the input matrices into smaller submatrices.  These submatrices are then multiplied using Strassen's algorithm recursively until the submatrices reach a base case (e.g., 1x1 matrices), which are then multiplied directly. The results of the submatrix multiplications are combined using additions and subtractions to form the final result matrix.

5.  **Implement Strassen's algorithm in your favorite programming language.  Compare its performance against the naive matrix multiplication algorithm for matrices of increasing sizes (e.g., n = 8, 16, 32, 64, 128, 256).  At what size does Strassen's algorithm become faster?**

    *   **Answer:**  This requires actual coding and benchmarking. The answer will vary depending on the implementation and hardware used.  You would need to measure the execution time for both algorithms and compare the results.

### 7. Important Points to Remember

*   Strassen's algorithm is a classic example of a divide-and-conquer algorithm.
*   It reduces the number of multiplications required compared to the naive method, leading to an improved asymptotic time complexity.
*   The algorithm has a higher overhead, so it's only beneficial for sufficiently large matrices.
*   The crossover point between Strassen's and the naive algorithm depends on the implementation and hardware.
*   While asymptotically superior, practical considerations like memory usage can influence its real-world performance.
*   The division of matrices requires that the size of the matrices be a power of 2.  Padding with zeros might be necessary if the input matrix is not of such size.  This padding impacts space usage.
---
This comprehensive guide should help you understand Strassen's Matrix Multiplication algorithm within the context of the Divide and Conquer paradigm. Remember to practice applying the algorithm to solidfy your knowledge!
