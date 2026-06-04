---
title: "Elliptic curve factorization"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 2: Advanced Factorization Algorithms "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb3b"
status: "completed"
scrapedAt: "2026-05-20T17:24:13.302Z"
---
# COMPUTATIONAL NUMBER THEORY: Module 2: Advanced Factorization Algorithms

## Topic: Elliptic Curve Factorization (ECF)

---

### 1. Introduction to Elliptic Curves

#### 1.1 What is an Elliptic Curve?

An elliptic curve is a smooth, projective algebraic curve of genus one, on which there is a specified point. More concretely, over a field $K$, an elliptic curve $E$ can be defined by a non-singular cubic equation in two variables, $X$ and $Y$.

**Weierstrass Equation:**
The general form of the Weierstrass equation for an elliptic curve over a field $K$ is:

$Y^2 = X^3 + AX + B$

where $A, B \in K$ and the discriminant $\Delta = -16(4A^3 + 27B^2) \neq 0$. The condition $\Delta \neq 0$ ensures that the curve is non-singular.

**Points on the Curve:**
The points on the elliptic curve are pairs $(X, Y)$ satisfying the equation. These points, along with a special "point at infinity" (often denoted as $O$), form an Abelian group.

#### 1.2 The Group Law on Elliptic Curves

The addition of points on an elliptic curve is defined geometrically.

*   **Identity Element:** The point at infinity, $O$, is the identity element. For any point $P$ on the curve, $P + O = O + P = P$.
*   **Inverse:** The inverse of a point $P=(x,y)$ is $-P=(x,-y)$. $P + (-P) = O$.
*   **Addition of Two Distinct Points $P$ and $Q$:**
    *   If $P \neq Q$ and $P \neq -Q$, draw a line through $P$ and $Q$. This line will intersect the curve at a third point, say $R'$.
    *   The sum $P+Q$ is defined as $-R'$, the inverse of $R'$.
*   **Doubling a Point $P$:**
    *   If $P = Q$ and $P \neq -P$, draw the tangent line to the curve at $P$. This tangent line will intersect the curve at a second point, say $R'$.
    *   The sum $P+P = 2P$ is defined as $-R'$.
*   **Vertical Lines:** If $P$ and $Q$ are such that the line through them is vertical (i.e., $P = (x, y)$ and $Q = (x, -y)$), then $P+Q = O$.

**Algebraic Formulas (for affine points $P=(x_1, y_1)$ and $Q=(x_2, y_2)$):**

*   **If $P \neq Q$ and $P \neq -Q$:**
    *   Slope $m = \frac{y_2 - y_1}{x_2 - x_1}$
    *   $x_3 = m^2 - x_1 - x_2$
    *   $y_3 = m(x_1 - x_3) - y_1$
    *   $P+Q = (x_3, y_3)$

*   **If $P = Q$ and $y_1 \neq 0$ (Point Doubling):**
    *   Slope $m = \frac{3x_1^2 + A}{2y_1}$
    *   $x_3 = m^2 - 2x_1$
    *   $y_3 = m(x_1 - x_3) - y_1$
    *   $2P = (x_3, y_3)$

**Working Modulo $n$:**
For factorization, we are interested in elliptic curves defined over a finite field $\mathbb{Z}_n$, where $n$ is the composite number we want to factor. Operations are performed modulo $n$. Division by $d$ becomes multiplication by $d^{-1} \pmod{n}$. If $\gcd(d, n) > 1$, then $d^{-1} \pmod{n}$ does not exist, which is the key to factorization.

#### 1.3 Why Elliptic Curves for Factorization?

The problem of factoring an integer $N$ can be transformed into finding a prime factor $p$ of $N$. The ECF algorithm tries to find a prime factor $p$ by using the properties of an elliptic curve modulo $p$.

The core idea is that if we choose an elliptic curve $E$ and a point $P$ on $E$ and compute $kP$ modulo $N$, where $k$ is a large integer. If $N=pq$ for primes $p$ and $q$, then computing $kP \pmod{p}$ and $kP \pmod{q}$ will behave differently.

Specifically, if we choose $k$ such that $k$ is a multiple of the order of $P$ modulo $p$ but not modulo $q$, then the computation of $kP \pmod{N}$ might reveal a factor.

The crucial point is that the order of a point $P$ on an elliptic curve over $\mathbb{Z}_p$ (where $p$ is prime) is related to the number of points on the curve, $|E(\mathbb{Z}_p)|$. This number is approximately $p$. By Hasse's Theorem, $|E(\mathbb{Z}_p)| = p + 1 - a_p$, where $|a_p| \le 2\sqrt{p}$.

The algorithm works by picking a random elliptic curve and a random point $P$ on it, and then computing $kP \pmod N$ for a small, randomly chosen $k$. If, during the computation of $kP = (x_k, y_k)$, the $x$-coordinate or $y$-coordinate involves a factor of $N$ that was not present in the intermediate steps, we can detect it using GCD.

### 2. The Elliptic Curve Factorization Algorithm (ECF)

ECF is a probabilistic algorithm for integer factorization. It is particularly effective for finding small prime factors.

#### 2.1 Algorithm Steps

Let $N$ be the odd composite number to be factored.

1.  **Choose a random elliptic curve $E$ modulo $N$.**
    *   Select random integers $A, B \in \{0, 1, \dots, N-1\}$ such that $4A^3 + 27B^2 \not\equiv 0 \pmod N$.
    *   The curve is $E: Y^2 \equiv X^3 + AX + B \pmod N$.

2.  **Choose a random point $P$ on $E$ modulo $N$.**
    *   Select a random $x_1 \in \{0, 1, \dots, N-1\}$.
    *   Calculate $y_1^2 \equiv x_1^3 + Ax_1 + B \pmod N$.
    *   Find a $y_1$ such that $y_1^2 \equiv x_1^3 + Ax_1 + B \pmod N$. This is done by trying to compute the square root of $x_1^3 + Ax_1 + B \pmod N$. If the number is a quadratic residue modulo $N$, we can find $y_1$. If it's a quadratic non-residue, we need to pick a different $x_1$.
    *   If we cannot find $y_1$, select a new $x_1$. If after several attempts we still can't find a point, select a new curve.
    *   Let $P = (x_1, y_1)$.

3.  **Choose a bound $B$.** This bound determines the size of the multiples of $P$ we will compute. Typically, $B$ is chosen to be a value related to the expected size of the smallest prime factor.

4.  **Compute $kP$ modulo $N$, where $k$ is a product of small primes up to $B$.**
    *   This is often done by computing $kP = (\prod_{p \le B} p)P$.
    *   A more efficient way is to pick a random integer $k$ up to a certain limit or pick a sequence of small primes $p_1, p_2, \dots, p_m$ and compute $P_{i+1} = p_{i+1}P_i \pmod N$.

    **The core computation of $kP$ involves repeated point addition and doubling.**
    *   Let $k = p_1^{e_1} p_2^{e_2} \dots p_m^{e_m}$.
    *   We compute $P_1 = p_1 P$.
    *   Then $P_2 = p_1 P_1$.
    *   This continues until $P_m = p_m P_{m-1}$.

    **During these computations, we perform operations modulo $N$.**
    *   Point addition: $(x_1, y_1) + (x_2, y_2) = (x_3, y_3)$.
    *   Point doubling: $2(x_1, y_1) = (x_3, y_3)$.

    **Crucial Step: GCD Check.**
    *   Whenever we need to compute a division by $d$ in the formulas (e.g., $d = 2y_1$ or $d = x_2 - x_1$), we compute $g = \gcd(d, N)$.
    *   If $g > 1$ and $g < N$, then $g$ is a non-trivial factor of $N$, and we have found a factor. The algorithm succeeds.
    *   If $g = N$, it means the denominator $d$ was a multiple of $N$, which typically happens if $P+Q$ or $2P$ resulted in the point at infinity $O$. This indicates that the order of $P$ modulo $N$ is related to $N$. This usually means the chosen curve or point is not suitable for finding a factor of $N$ in this step. We should go back to step 1 or 2 and try again with a different curve or point.
    *   If $g = 1$, then $d$ is invertible modulo $N$, and we can proceed with the computation of the next point.

5.  **If no factor is found after computing $kP$ with the chosen bound $B$**:
    *   Increase the bound $B$ and repeat step 4.
    *   Alternatively, choose a new elliptic curve and point and repeat the entire process from step 1.

#### 2.2 Example Walkthrough (Simplified)

Let $N = 15$. We want to factor $N$.

1.  **Choose Curve:** Let $A=1, B=1$. The curve is $Y^2 \equiv X^3 + X + 1 \pmod{15}$.
    *   Check discriminant: $4A^3 + 27B^2 = 4(1)^3 + 27(1)^2 = 4 + 27 = 31$.
    *   $31 \pmod{15} = 1$. Since $1 \neq 0$, the curve is non-singular.

2.  **Choose Point $P$:** Let's try $x_1 = 2$.
    *   $y_1^2 \equiv 2^3 + 2 + 1 \pmod{15}$
    *   $y_1^2 \equiv 8 + 2 + 1 \pmod{15}$
    *   $y_1^2 \equiv 11 \pmod{15}$
    *   We need to find $y_1$ such that $y_1^2 \equiv 11 \pmod{15}$.
        *   $0^2 \equiv 0$
        *   $1^2 \equiv 1$
        *   $2^2 \equiv 4$
        *   $3^2 \equiv 9$
        *   $4^2 \equiv 16 \equiv 1$
        *   $5^2 \equiv 25 \equiv 10$
        *   $6^2 \equiv 36 \equiv 6$
        *   $7^2 \equiv 49 \equiv 4$
        *   $8^2 \equiv 64 \equiv 4$
        *   $9^2 \equiv 81 \equiv 6$
        *   $10^2 \equiv 100 \equiv 10$
        *   $11^2 \equiv 121 \equiv 1$
        *   $12^2 \equiv 144 \equiv 9$
        *   $13^2 \equiv 169 \equiv 4$
        *   $14^2 \equiv 196 \equiv 1$
    *   $11$ is not a quadratic residue modulo $15$. Let's try another $x_1$.

    Let's try $x_1 = 4$.
    *   $y_1^2 \equiv 4^3 + 4 + 1 \pmod{15}$
    *   $y_1^2 \equiv 64 + 4 + 1 \pmod{15}$
    *   $y_1^2 \equiv 4 + 4 + 1 \pmod{15}$ (since $64 \equiv 4 \pmod{15}$)
    *   $y_1^2 \equiv 9 \pmod{15}$
    *   We can choose $y_1 = 3$ (or $y_1 = 12$). Let $P = (4, 3)$.

3.  **Choose Bound $B$ and $k$:** Let's try to compute $kP$ for some small $k$. Suppose we want to compute $3P$.

4.  **Compute $kP$:** We need to compute $2P$ first.
    *   $P = (4, 3)$. $A=1$.
    *   Denominator for doubling: $2y_1 = 2 \times 3 = 6$.
    *   Check $\gcd(6, 15) = 3$. Since $3 > 1$ and $3 < 15$, we found a factor!
    *   The factor is $3$.

    **Algorithm Succesful!** $N=15$ is factored into $3$ and $5$.

    **Let's continue the computation to see what happens if we hadn't checked GCD early:**
    *   Numerator for doubling: $3x_1^2 + A = 3(4^2) + 1 = 3(16) + 1 \equiv 3(1) + 1 = 4 \pmod{15}$.
    *   We need to compute $(6)^{-1} \pmod{15}$. This does not exist since $\gcd(6, 15) = 3 \neq 1$.

    **This highlights the importance of checking the GCD at each division step.**

    **What if we used a different $k$?** Let's say we want to compute $2P$.
    *   $P = (4, 3)$. $A=1$.
    *   $2P$:
        *   $d = 2y_1 = 2 \times 3 = 6$.
        *   $\gcd(6, 15) = 3$. Factor found: $3$.

    **What if we tried $P=(4,12)$?**
    *   $P = (4, 12)$. $A=1$.
    *   $2P$:
        *   $d = 2y_1 = 2 \times 12 = 24 \equiv 9 \pmod{15}$.
        *   $\gcd(9, 15) = 3$. Factor found: $3$.

    **What if we chose a curve that yields the point at infinity early?**
    Let $N=15$, $A=0, B=0$. Curve $Y^2 \equiv X^3 \pmod{15}$.
    $P = (0,0)$.
    $2P$: $2y_1 = 0$. $\gcd(0, 15) = 15$. This means the denominator is a multiple of $N$. We can't proceed. This case means $P$ might be the point at infinity or $P$ has order related to $N$.

#### 2.3 Key Parameters and Their Roles

*   **$N$:** The integer to be factored. It should be odd and composite.
*   **$A, B$:** Coefficients of the elliptic curve. Choosing these randomly is crucial for the probabilistic nature of the algorithm.
*   **$P = (x_1, y_1)$:** The base point on the curve. Chosen randomly.
*   **$B$ (Bound):** Determines the size of the multiples of $P$ to compute. A larger $B$ increases the probability of success but also the computation time. ECF is good at finding small factors, so $B$ is usually set to a moderate value.
*   **$k$:** The multiplier. Often chosen as a product of primes up to $B$, or a large random number.

#### 2.4 Choosing the Bound $B$

The choice of $B$ is critical.
*   If $N=pq$ and $p$ is a small prime factor, then the order of $P$ modulo $p$, $|E(\mathbb{Z}_p)|$, will likely have small prime factors.
*   If we choose $k$ to be a multiple of $|E(\mathbb{Z}_p)|$, then $kP \equiv O \pmod p$.
*   If $N=pq$ and $kP \equiv O \pmod p$ but $kP \not\equiv O \pmod q$, then the coordinates of $kP \pmod N$ might reveal a factor.
*   The bound $B$ should be chosen such that $k$ is likely to be a multiple of the order of $P$ modulo the smallest prime factor $p$. A common heuristic is to set $B$ to be around $e^{\sqrt{\ln p \ln \ln p}}$ or simply a modest number like $10^4$ or $10^5$ for finding small factors.

#### 2.5 Failure Cases and How to Handle Them

*   **$g = \gcd(d, N) = N$:** The denominator $d$ is a multiple of $N$. This means the point addition or doubling resulted in the point at infinity $O$ modulo $N$.
    *   **Reason:** The order of $P$ modulo $N$ is too small or related to factors of $N$ in a way that "collapses" the computation.
    *   **Solution:** Discard the current curve and point, and choose a new random curve and point.
*   **$g = \gcd(d, N) = 1$:** The computation proceeds without revealing a factor in this step.
    *   **Reason:** The current multiplier $k$ is not large enough, or the chosen curve/point is not well-suited for revealing a factor at this stage.
    *   **Solution:** Increase the bound $B$ and continue multiplying, or retry with a new curve/point.
*   **No factor found after many attempts:**
    *   **Reason:** $N$ might have only large prime factors, or the random choices were consistently unlucky.
    *   **Solution:** Try different curves, points, and larger bounds. The algorithm is probabilistic.

### 3. Comparison with Other Factorization Algorithms

#### 3.1 Trial Division

*   **How it works:** Tests divisibility by small primes up to a bound.
*   **ECF vs. Trial Division:** ECF is much more efficient for finding small prime factors than trial division, especially when the smallest prime factor $p$ is not extremely small. Trial division becomes slow when the smallest factor is moderately large (e.g., $10^5$). ECF can find factors up to $10^5$ or $10^6$ relatively quickly.

#### 3.2 Pollard's Rho Algorithm

*   **How it works:** Uses a pseudo-random sequence modulo $N$ and Floyd's cycle-finding algorithm to find collisions, which reveal factors.
*   **ECF vs. Pollard's Rho:**
    *   **Efficiency:** ECF is generally faster than Pollard's Rho for finding small prime factors. The expected number of operations for ECF to find a factor $p$ is roughly proportional to $\sqrt{p}$, similar to Pollard's Rho. However, the constant factor in ECF is often smaller due to the structure of elliptic curve arithmetic.
    *   **Underlying Principle:** Both rely on finding cycles in sequences, but ECF uses the group structure of elliptic curves, which offers more flexibility and control.

#### 3.3 Quadratic Sieve (QS) and General Number Field Sieve (GNFS)

*   **How they work:** These are more sophisticated algorithms that work well for factoring numbers with large prime factors. They are sub-exponential time algorithms.
*   **ECF vs. QS/GNFS:** ECF is a "special-purpose" algorithm, meaning its efficiency depends on the size of the smallest prime factor. It is *not* competitive with QS or GNFS for factoring large numbers with large prime factors. ECF's strength lies in finding *small* prime factors.

#### 3.4 Summary of Strengths and Weaknesses

*   **ECF Strengths:**
    *   Excellent for finding small prime factors.
    *   Probabilistic, meaning it has a good chance of success.
    *   Relatively easy to implement compared to QS/GNFS.
*   **ECF Weaknesses:**
    *   Not effective for factoring numbers with only large prime factors.
    *   Performance depends on the size of the smallest prime factor.
    *   Requires careful handling of arithmetic modulo $N$ to avoid computational failures ($g=N$).

### 4. Learning Outcomes Coverage

**Learning Outcome 1: Understanding the basics of elliptic curves.**
*   Covered in Section 1: Introduction to Elliptic Curves, including the Weierstrass equation, group law (geometric and algebraic), and operations modulo $n$.

**Learning Outcome 2: Explaining the principle behind Elliptic Curve Factorization.**
*   Covered in Section 1.3 (Why Elliptic Curves for Factorization?) and Section 2.1 (Algorithm Steps), focusing on how the behavior of points modulo different prime factors of $N$ can reveal a factor.

**Learning Outcome 3: Detailing the steps of the ECF algorithm.**
*   Covered extensively in Section 2.1 (Algorithm Steps), including curve/point selection, bound choosing, $kP$ computation, and the crucial GCD check.

**Learning Outcome 4: Discussing the role of key parameters like the bound $B$ and the choice of curve/point.**
*   Covered in Section 2.3 (Key Parameters) and Section 2.4 (Choosing the Bound $B$).

**Learning Outcome 5: Analyzing the failure cases of the ECF algorithm and how to address them.**
*   Covered in Section 2.5 (Failure Cases and How to Handle Them).

**Learning Outcome 6: Comparing ECF with other factorization algorithms.**
*   Covered in Section 3 (Comparison with Other Factorization Algorithms), discussing its relationship with Trial Division, Pollard's Rho, QS, and GNFS.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider an elliptic curve $E: Y^2 \equiv X^3 + X + 1 \pmod{15}$ and a point $P = (4, 3)$ on this curve.
Calculate $2P$ using the formulas for elliptic curve point doubling modulo 15. Show all steps and highlight where the GCD check is performed. What factor of 15 is revealed?

**Answer 1:**
The curve is $Y^2 \equiv X^3 + AX + B \pmod N$, with $A=1$, $B=1$, and $N=15$. The point is $P=(x_1, y_1) = (4, 3)$.
To compute $2P$, we use the point doubling formulas:
$m = \frac{3x_1^2 + A}{2y_1} \pmod N$
$x_3 = m^2 - 2x_1 \pmod N$
$y_3 = m(x_1 - x_3) - y_1 \pmod N$

1.  **Calculate the denominator:** $d = 2y_1 = 2 \times 3 = 6 \pmod{15}$.
2.  **Perform GCD check:** $\gcd(d, N) = \gcd(6, 15) = 3$.
    Since $3 > 1$ and $3 < 15$, we have found a non-trivial factor of $N$. The factor revealed is **3**.

**(If we were to continue for illustrative purposes, assuming a factor wasn't found yet, we'd need to compute $d^{-1} \pmod{15}$. However, since $\gcd(6, 15) \neq 1$, the inverse does not exist, and the algorithm has successfully terminated.)**

**Question 2:**
What is the primary strength of the Elliptic Curve Factorization algorithm compared to Trial Division?

**Answer 2:**
The primary strength of ECF compared to Trial Division is its efficiency in finding *small* prime factors. While Trial Division becomes increasingly slow as the smallest prime factor increases, ECF can find factors up to $10^5$ or $10^6$ much more effectively.

**Question 3:**
Describe a scenario where the Elliptic Curve Factorization algorithm might fail in its current iteration (i.e., $g=N$ or no factor is found) and what the typical recourse is.

**Answer 3:**
A common failure scenario is when the denominator $d$ in the point addition/doubling formula has a GCD with $N$ that is equal to $N$ itself ($\gcd(d, N) = N$). This usually happens when the computation of $kP$ results in the point at infinity $O$ modulo $N$. This indicates that the order of $P$ modulo $N$ (or its factors) is related to $N$ in a way that prevents the current iteration from revealing a factor.

The typical recourse in such a failure case is to **discard the current elliptic curve and point, and choose a new random elliptic curve and point**, then restart the process of computing multiples of the new point. If no factor is found after a reasonable number of attempts with different curves and points, the bound $B$ might need to be increased, or the algorithm might be unsuitable for the number $N$ (if $N$ has only very large prime factors).

**Question 4:**
Why is it important that the Weierstrass equation coefficients $A$ and $B$ are chosen modulo $N$, and not just modulo the prime factors of $N$?

**Answer 4:**
The coefficients $A$ and $B$ are chosen modulo $N$ because the elliptic curve arithmetic is performed modulo $N$ as a whole. The algorithm relies on the fact that the group structure of the elliptic curve behaves differently modulo $p$ and modulo $q$ (the prime factors of $N$). By performing all calculations modulo $N$, we can use the GCD operation to detect when an operation that is well-defined modulo $p$ (e.g., division by $d$) becomes ill-defined modulo $N$ because $d$ shares a factor with $N$. If we chose $A$ and $B$ modulo $p$ and $q$ separately, we wouldn't be able to leverage the GCD test directly on the modulo $N$ computations.

---

### 6. Important Points to Remember

*   **ECF is probabilistic:** It does not guarantee factorization, but it has a high probability of success for finding small factors.
*   **Focus on small factors:** ECF is most effective when $N$ has at least one small prime factor $p$.
*   **The GCD is key:** The success of ECF hinges on detecting factors of $N$ through $\gcd(d, N) > 1$ during intermediate calculations.
*   **Failure means retry:** If $g=N$ or no factor is found, the algorithm needs to be restarted with new random choices of the curve and point.
*   **Arithmetic modulo $N$ is essential:** All computations are performed modulo $N$ to enable the GCD check.
*   **The group law is fundamental:** The addition and doubling of points on an elliptic curve form the basis of the computational steps.
*   **Hasse's Theorem:** Although not directly computed in the algorithm steps, Hasse's theorem gives us confidence that the number of points on an elliptic curve over $\mathbb{Z}_p$ is well-behaved, which is indirectly why ECF works.

---
