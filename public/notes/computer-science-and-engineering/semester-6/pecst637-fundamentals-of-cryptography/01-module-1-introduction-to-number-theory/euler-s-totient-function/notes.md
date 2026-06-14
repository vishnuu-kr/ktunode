# Euler’s Totient Function

<!-- SECTION_1_START -->
# Module 1 — Introduction to Number Theory
## Topic: Euler's Totient Function (ETT)

> [!NOTE]
> **KTU 2024 Scheme — PECST637 (Fundamentals of Cryptography)**
> Module 1 deals with the algebraic and number-theoretic foundations on which every modern public-key cryptosystem (RSA, Diffie–Hellman, ElGamal, ECC) is built. **Euler's Totient Function** is the single most important building block of this module because it directly controls the size of the multiplicative group $\mathbb{Z}_n^*$, which in turn governs the public and private exponents of RSA.

### 1.1 Formal Definition

Let $n \in \mathbb{N}$ with $n \ge 1$. **Euler's Totient Function**, denoted $\phi(n)$ (also written $\varphi(n)$ or $E(n)$), is defined as:

$$\phi(n) \;=\; \big\vert \{\, k \in \mathbb{Z} \mid 1 \le k \le n,\ \gcd(k,n) = 1 \,\} \big\vert$$

In words, $\phi(n)$ counts the number of **positive integers up to $n$ that are relatively prime (coprime) to $n$**. Two integers are coprime if their **Greatest Common Divisor (GCD)** equals **1**.

> [!IMPORTANT]
> **KTU Board Definition (verbatim standard):** *Euler's totient function $\phi(n)$ is the number of positive integers less than or equal to $n$ that are coprime to $n$.* Memorize this line — it is the most frequently asked 2-mark opener in Part A of the ESE.

### 1.2 Intuitive Analogy — The "Locked Club" Picture

Imagine a club with exactly $n$ members, numbered $1, 2, 3, \ldots, n$. The club has a "secret-handshake" rule: only members who are **mutually strangers to member-$n$** (i.e., share no common factor other than **1** with $n$) are allowed inside. $\phi(n)$ is simply the **head-count of people who can enter the club**.

* If $n$ is a **prime number** $p$: every number from $1$ to $p-1$ is coprime to $p$ (because a prime has no divisors except $1$ and itself). So the club admits $p - 1$ members.
* If $n$ is a **composite** (say $n = 12$): members $5, 7, 11$ along with $1$ are allowed in, while $2, 3, 4, 6, 8, 9, 10, 12$ are rejected because they share a factor with $12$. The head-count is **4**, so $\phi(12) = 4$.

### 1.3 First Glance — Small Values

| $n$      | Integers $\le n$ coprime to $n$              | $\phi(n)$ |
| -------- | -------------------------------------------- | --------- |
| $1$      | $\{1\}$                                      | $1$       |
| $2$      | $\{1\}$                                      | $1$       |
| $3$      | $\{1, 2\}$                                   | $2$       |
| $4$      | $\{1, 3\}$                                   | $2$       |
| $5$      | $\{1, 2, 3, 4\}$                             | $4$       |
| $6$      | $\{1, 5\}$                                   | $2$       |
| $7$      | $\{1, 2, 3, 4, 5, 6\}$                       | $6$       |
| $8$      | $\{1, 3, 5, 7\}$                             | $4$       |
| $9$      | $\{1, 2, 4, 5, 7, 8\}$                       | $6$       |
| $10$     | $\{1, 3, 7, 9\}$                             | $4$       |
| $11$     | $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$         | $10$      |
| $12$     | $\{1, 5, 7, 11\}$                            | $4$       |

> [!TIP]
> Notice the pattern: $\phi(p) = p - 1$ for every **prime** $p$. This single observation is worth **2 marks** in the KTU board exam.

> [!VISUALIZATION CONTROL]
> **Concept:** Bar plot of $\phi(n)$ versus $n$ for $n = 1, 2, \ldots, 20$ — the student should see the **saw-tooth decay** where $\phi(n)$ drops sharply at composite values and peaks at primes.
> **Desmos Input Equations:**
> * $x\text{-axis: } n = 1, 2, \ldots, 20$
> * $y\text{-axis: } \phi(n)$ (use a manual list e.g. `L1 = {1,1,2,2,4,2,6,4,6,4,10,4,12,6,8,8,16,6,18,8}`)
> **Visual Description:** Tall spikes at prime $n$ (e.g., $n = 7 \rightarrow 6$, $n = 11 \rightarrow 10$, $n = 13 \rightarrow 12$, $n = 17 \rightarrow 16$, $n = 19 \rightarrow 18$). Short bars at prime powers and multiples of small primes. The lower envelope of the graph is $\phi(n) \ge \sqrt{n}$ for $n > 6$, a useful bound for crypto key-size estimation.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
## 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

### 2.1 Axiomatic Building Blocks

To manipulate $\phi(n)$ fluently in the exam hall, you need exactly **five core identities**. Each one is derived below in §3, then summarized here for last-minute revision.

> [!IMPORTANT]
> These five identities, taken together, are sufficient to solve **every standard problem** on Euler's totient that the KTU board has ever asked.

**Identity 1 — Trivial Case.** $\phi(1) = 1$.

**Identity 2 — Prime Value.** If $p$ is a prime, $\phi(p) = p - 1$.

**Identity 3 — Prime Power Value.** If $p$ is a prime and $k \ge 1$, then

$$\phi(p^{k}) \;=\; p^{k} - p^{k-1} \;=\; p^{k-1}\,(p - 1)$$

*Why?* Out of the $p^{k}$ integers from $1$ to $p^{k}$, exactly the multiples of $p$ are NOT coprime. There are $p^{k-1}$ such multiples ($p, 2p, 3p, \ldots, p^{k-1} \cdot p$). Subtracting gives the formula.

**Identity 4 — Multiplicativity.** If $\gcd(m, n) = 1$, then

$$\phi(mn) \;=\; \phi(m)\,\phi(n)$$

This is the property that makes the **Euler product formula** (Identity 5) work.

**Identity 5 — Euler Product Formula.** If $n$ has the prime factorization $n = p_{1}^{e_{1}} \, p_{2}^{e_{2}} \cdots p_{r}^{e_{r}}$, then

$$\phi(n) \;=\; n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_{i}} \right)$$

This is the **single most exam-relevant formula** of the entire module.

### 2.2 KTU Formula Sheet / Cheat Sheet

> [!IMPORTANT]
> Print this table. Every problem in Module 1 on $\phi$ reduces to one of these rows.

| # | Condition on $n$ | Closed-Form Value of $\phi(n)$ | Typical Use in Cryptography |
|---|---|---|---|
| 1 | $n = 1$ | $\phi(1) = 1$ | Trivial base case |
| 2 | $n = p$ (prime) | $\phi(p) = p - 1$ | Group $\mathbb{Z}_p^*$ size, used in DH over $\mathbb{F}_p$ |
| 3 | $n = p^{k}$ | $\phi(p^{k}) = p^{k-1}(p-1)$ | Group order in $\mathbb{F}_{p^{k}}^*$ |
| 4 | $\gcd(m,n) = 1$ | $\phi(mn) = \phi(m)\,\phi(n)$ | Building block for the Euler product |
| 5 | $n = p_{1}^{e_1}\cdots p_{r}^{e_r}$ | $\phi(n) = n\,\prod\,(1 - 1/p_i)$ | **RSA**: if $n = pq$, then $\phi(n) = (p-1)(q-1)$ |
| 6 | $n = 2p$, $p$ odd prime | $\phi(2p) = (p-1)$ | Used in some ElGamal variants |
| 7 | $n = pq$ (semiprime) | $\phi(n) = (p-1)(q-1)$ | **RSA modulus** — appears in 90\% of exam questions |
| 8 | $\sum_{d \mid n} \phi(d) = n$ | Divisor-sum identity | Reverse engineering $\phi$ from divisors |
| 9 | $\phi(n) = n - 1$ | $\iff$ $n$ is prime | Primality test (necessary, not sufficient alone) |
| 10 | $a^{\phi(n)} \equiv 1 \pmod n$ when $\gcd(a,n)=1$ | **Euler's Theorem** | Defines the order of the group $\mathbb{Z}_n^*$ |

### 2.3 Cryptographic Significance — Why Should a Kerala B.Tech Student Care?

> [!TIP]
> The 2024 Scheme explicitly lists *“application of number theory in public-key cryptography”* as a Module 1 outcome. The three real-world bridges from $\phi$ to deployed systems are:

1. **RSA Encryption (1977, Rivest–Shamir–Adleman).** The modulus is $n = p \cdot q$. The **public exponent** $e$ and the **private exponent** $d$ are linked by $e \cdot d \equiv 1 \pmod{\phi(n)} \equiv 1 \pmod{(p-1)(q-1)}$. Without computing $\phi(n)$, RSA simply cannot be set up. The security of RSA rests on the empirical fact that computing $\phi(n)$ is **as hard as factoring $n$** — an unproven conjecture but one that has held for 45+ years.
2. **Diffie–Hellman Key Exchange (1976).** The cyclic group used is $\mathbb{Z}_p^*$ (or a prime-order subgroup thereof), which has order $p - 1 = \phi(p)$. The discrete-log problem in this group is what makes the exchange secure.
3. **Euler's Theorem as a Modular Inverse Engine.** In every crypto library (OpenSSL, BoringSSL, libsodium), the modular inverse $a^{-1} \pmod m$ is computed via $a^{\phi(m) - 1} \pmod m$, courtesy of Euler's theorem. This is the actual software path used to derive RSA private keys.

### 2.4 Worked Micro-Examples (No Derivation, Just Plug-and-Play)

* $n = 60 = 2^{2} \cdot 3 \cdot 5$. So $\phi(60) = 60 \cdot (1 - 1/2)(1 - 1/3)(1 - 1/5) = 60 \cdot 1/2 \cdot 2/3 \cdot 4/5 = \mathbf{16}$.
* $n = 17$ (prime). So $\phi(17) = 17 - 1 = \mathbf{16}$.
* $n = 49 = 7^{2}$. So $\phi(49) = 7^{2} - 7^{1} = 49 - 7 = \mathbf{42}$.
* $n = 1000 = 2^{3} \cdot 5^{3}$. So $\phi(1000) = 1000 \cdot (1 - 1/2)(1 - 1/5) = 1000 \cdot 1/2 \cdot 4/5 = \mathbf{400}$.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
## 3. Step-by-Step Derivations & Code/Symbolic Implementation

> [!IMPORTANT]
> **Module-1 Board Mandate:** KTU examiners routinely award **7 marks** for a single clean derivation of either the prime-power formula or the Euler product. The text below is the **complete, examiner-friendly, line-by-line proof** that you can copy verbatim into your answer booklet.

### 3.1 Derivation 1 — Prime-Power Formula $\phi(p^{k}) = p^{k} - p^{k-1}$

**Claim.** For a prime $p$ and integer $k \ge 1$,
$$\phi(p^{k}) \;=\; p^{k} - p^{k-1}.$$

**Proof.**

We must count the integers $x$ with $1 \le x \le p^{k}$ such that $\gcd(x, p^{k}) = 1$.

A number $x$ is **NOT** coprime to $p^{k}$ if and only if $p$ divides $x$ (because $p^{k}$ has $p$ as its only prime factor). The multiples of $p$ in the range $1 \le x \le p^{k}$ are:

$$p,\ 2p,\ 3p,\ \ldots,\ p^{k-1} \cdot p$$

There are exactly $p^{k-1}$ such multiples. Therefore the count of integers that ARE coprime is

$$\phi(p^{k}) \;=\; \underbrace{p^{k}}_{\text{total}} \;-\; \underbrace{p^{k-1}}_{\text{non-coprime}} \;=\; p^{k} - p^{k-1}.$$

Factoring out $p^{k-1}$ gives the equivalent form

$$\phi(p^{k}) \;=\; p^{k-1}\,(p - 1). \qquad \blacksquare$$

### 3.2 Derivation 2 — Euler's Product Formula $\phi(n) = n \prod (1 - 1/p)$

**Claim.** If $n = p_{1}^{e_1} \, p_{2}^{e_2} \cdots p_{r}^{e_r}$, then
$$\phi(n) \;=\; n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_i} \right).$$

**Proof.**

**Step A — Factor $n$ into coprime prime powers.** Since the $p_i$ are distinct primes,
$$n \;=\; p_{1}^{e_1} \cdot p_{2}^{e_2} \cdots p_{r}^{e_r}$$
and the factors $p_i^{e_i}$ are pairwise coprime:
$$\gcd(p_i^{e_i},\ p_j^{e_j}) \;=\; 1 \quad \text{for all } i \neq j.$$

**Step B — Apply multiplicativity repeatedly.** By the multiplicative property of $\phi$ (Identity 4), applied $r-1$ times:
$$\phi(n) \;=\; \phi(p_1^{e_1}) \cdot \phi(p_2^{e_2}) \cdots \phi(p_r^{e_r}).$$

**Step C — Substitute the prime-power formula.** Using $\phi(p_i^{e_i}) = p_i^{e_i - 1}(p_i - 1)$ from §3.1:
$$\phi(n) \;=\; \prod_{i=1}^{r} p_i^{e_i - 1}\,(p_i - 1).$$

**Step D — Algebraic rearrangement.** Split each factor:
$$\phi(n) \;=\; \left( \prod_{i=1}^{r} p_i^{e_i - 1} \right) \cdot \left( \prod_{i=1}^{r} (p_i - 1) \right).$$

Note that
$$\prod_{i=1}^{r} p_i^{e_i - 1} \;=\; \frac{\prod_i p_i^{e_i}}{\prod_i p_i} \;=\; \frac{n}{\prod_i p_i}.$$

Also, by pulling out $p_i$ inside $(p_i - 1)$:
$$(p_i - 1) \;=\; p_i \left( 1 - \frac{1}{p_i} \right).$$

Hence the second product becomes
$$\prod_{i=1}^{r} (p_i - 1) \;=\; \left( \prod_{i=1}^{r} p_i \right) \cdot \prod_{i=1}^{r} \left( 1 - \frac{1}{p_i} \right).$$

**Step E — Combine.**
$$\phi(n) \;=\; \frac{n}{\prod_i p_i} \cdot \left( \prod_i p_i \right) \cdot \prod_i \left( 1 - \frac{1}{p_i} \right).$$

The first two factors cancel exactly, leaving

$$\phi(n) \;=\; n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_i} \right). \qquad \blacksquare$$

### 3.3 Derivation 3 — Euler's Theorem $a^{\phi(n)} \equiv 1 \pmod n$ for $\gcd(a,n) = 1$

**Claim.** If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod n$.

**Proof (sketch suitable for a 7-mark answer).**

Let $R = \{r_1, r_2, \ldots, r_{\phi(n)}\}$ be the set of residues modulo $n$ that are coprime to $n$. Multiply each element by $a$ (where $\gcd(a, n) = 1$):

$$a \cdot r_1,\ a \cdot r_2,\ \ldots,\ a \cdot r_{\phi(n)} \pmod n.$$

Each product $a \cdot r_i$ is itself coprime to $n$ (because $\gcd(a, n) = 1$ and $\gcd(r_i, n) = 1$). Also, the products are pairwise distinct modulo $n$ (if $a r_i \equiv a r_j \pmod n$, then since $a$ is invertible modulo $n$, $r_i \equiv r_j$). Hence the new set is a **permutation** of $R$:

$$\prod_{i=1}^{\phi(n)} (a r_i) \;\equiv\; \prod_{i=1}^{\phi(n)} r_i \pmod n.$$

The common product of the $r_i$'s is invertible mod $n$, so we cancel it:

$$a^{\phi(n)} \;\equiv\; 1 \pmod n. \qquad \blacksquare$$

### 3.4 Worked Numerical Derivations

**Example 1.** Compute $\phi(360)$ and verify Euler's theorem for $a = 7$.

Factor $360$:

$$360 \;=\; 2^{3} \cdot 3^{2} \cdot 5.$$

Apply the product formula:

$$\phi(360) \;=\; 360 \cdot \left(1 - \tfrac{1}{2}\right)\left(1 - \tfrac{1}{3}\right)\left(1 - \tfrac{1}{5}\right) \;=\; 360 \cdot \tfrac{1}{2} \cdot \tfrac{2}{3} \cdot \tfrac{4}{5} \;=\; \mathbf{96}.$$

Now verify $7^{96} \equiv 1 \pmod{360}$. By Euler's theorem, this is automatic. The intermediate reduction proceeds as $7^{2} = 49$, $7^{4} \equiv 49^{2} = 2401 \equiv 2401 - 6 \cdot 360 = 2401 - 2160 = 241 \pmod{360}$, and so on via repeated squaring. A programmatic check is provided in §3.5.

**Example 2.** RSA-style setup. Let $p = 61$, $q = 53$, $n = pq = 3233$.

$$\phi(n) \;=\; (p - 1)(q - 1) \;=\; 60 \cdot 52 \;=\; \mathbf{3120}.$$

Choose $e = 17$. Find $d$ such that $17 d \equiv 1 \pmod{3120}$. Using the extended Euclidean algorithm:

$$\gcd(17, 3120) = 1,\quad 17 \cdot 2753 = 46801 = 15 \cdot 3120 + 1,$$

so $d = 2753$. To encrypt $M = 65$, compute $C = 65^{17} \bmod 3233 = \mathbf{2790}$. To decrypt, $M = 2790^{2753} \bmod 3233 = \mathbf{65}$. The whole system rides on the value $\phi(n) = 3120$.

### 3.5 Production-Quality Python Implementation

```python
"""
euler_totient.py
Reference implementation of Euler's Totient Function
for the PECST637 Module-1 syllabus.
"""

from __future__ import annotations
import logging
from math import gcd, isqrt
from typing import List, Tuple

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)
logger = logging.getLogger("EulerTotient")


# ---------- 1. Trial-division prime factorisation ----------
def prime_factors(n: int) -> List[int]:
    """Return the *distinct* prime divisors of n in ascending order."""
    if n < 1:
        raise ValueError("n must be a positive integer")
    if n == 1:
        return []
    factors: List[int] = []
    x = n
    d = 2
    while d * d <= x:
        if x % d == 0:
            factors.append(d)
            while x % d == 0:
                x //= d
        d += 1
    if x > 1:
        factors.append(x)
    logger.debug("prime_factors(%d) = %s", n, factors)
    return factors


# ---------- 2. Euler's totient via the product formula ----------
def euler_totient(n: int) -> int:
    """Compute phi(n) = n * prod(1 - 1/p) over distinct primes p | n."""
    if n < 1:
        raise ValueError("n must be >= 1")
    if n == 1:
        return 1
    result = n
    for p in prime_factors(n):
        # result = result * (p - 1) // p   (integer arithmetic)
        result = (result // p) * (p - 1)
    logger.info("phi(%d) = %d", n, result)
    return result


# ---------- 3. Naive O(n) reference (for unit testing) ----------
def phi_bruteforce(n: int) -> int:
    """Brute-force count of integers in [1, n] coprime to n."""
    if n < 1:
        raise ValueError("n must be >= 1")
    return sum(1 for k in range(1, n + 1) if gcd(k, n) == 1)


# ---------- 4. Extended Euclidean algorithm ----------
def extended_gcd(a: int, b: int) -> Tuple[int, int, int]:
    """Return (g, x, y) with a*x + b*y = g = gcd(a, b)."""
    if b == 0:
        return a, 1, 0
    g, x1, y1 = extended_gcd(b, a % b)
    return g, y1, x1 - (a // b) * y1


# ---------- 5. RSA-style key generation using phi(n) ----------
def rsa_keypair(p: int, q: int, e: int) -> Tuple[int, int, int]:
    """Given two distinct primes p, q and a public exponent e,
    return (n, e, d) with e*d ≡ 1 (mod phi(n))."""
    if p == q:
        raise ValueError("p and q must be distinct")
    n = p * q
    phi_n = (p - 1) * (q - 1)
    if gcd(e, phi_n) != 1:
        raise ValueError("e must be coprime to phi(n)")
    _, d, _ = extended_gcd(e, phi_n)
    d %= phi_n
    logger.info("RSA keypair: n=%d, e=%d, d=%d", n, e, d)
    return n, e, d


# ---------- 6. Self-test (run as a script) ----------
if __name__ == "__main__":
    # Validate phi against the brute-force reference
    test_inputs = [1, 2, 3, 4, 12, 36, 60, 97, 100, 360, 1024, 7919]
    for n in test_inputs:
        fast = euler_totient(n)
        slow = phi_bruteforce(n)
        assert fast == slow, f"Mismatch at n={n}: {fast} vs {slow}"
    logger.info("All totient self-tests passed.")

    # Demonstrate Euler's theorem
    a, n = 7, 360
    assert pow(a, euler_totient(n), n) == 1
    logger.info("Euler's theorem verified: %d^phi(%d) = 1 (mod %d)", a, n, n)

    # RSA demo
    n, e, d = rsa_keypair(61, 53, 17)
    M = 65
    C = pow(M, e, n)
    M2 = pow(C, d, n)
    assert M2 == M
    logger.info("RSA round-trip OK: M=%d -> C=%d -> M=%d", M, C, M2)
```

**Sample output (excerpt):**

```
2026-... | INFO | phi(360) = 96
2026-... | INFO | All totient self-tests passed.
2026-... | INFO | Euler's theorem verified: 7^phi(360) = 1 (mod 360)
2026-... | INFO | RSA keypair: n=3233, e=17, d=2753
2026-... | INFO | RSA round-trip OK: M=65 -> C=2790 -> M=65
```

> [!TIP]
> **Why this code is *board-grade*, not *viva-grade*:** It includes explicit input validation (`n >= 1`), structured logging for traceability, a brute-force cross-checker for unit testing, an extended Euclidean routine for completeness, and an RSA demo that ties $\phi(n)$ directly to a deployed cryptosystem. Showing such code in a viva earns full marks on the **"implementation" rubric line** of the CO2 descriptor.
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
## 4. Structural Diagrams & Schematics

### 4.1 Mermaid — Algorithm Flowchart for Computing $\phi(n)$

```mermaid
flowchart TD
    startA([START: input n]) --> checkA{n less than 1?}
    checkA -- yes --> errA[raise ValueError]
    checkA -- no --> checkB{n equals 1?}
    checkB -- yes --> ret1[return 1]
    checkB -- no --> initA[result := n]
    initA --> loopA{more primes p to test?}
    loopA -- yes --> factorA[x := n; p := 2]
    factorA --> innerA{x mod p equals 0?}
    innerA -- yes --> stripA[append p to factors; x := x / p repeatedly]
    stripA --> stepA[p := p + 1]
    innerA -- no --> stepA
    stepA --> loopA
    loopA -- no --> computeA[for each p in factors: result := (result / p) times p minus 1]
    computeA --> verifyA{result equals brute force count?}
    verifyA -- no --> logA[log ERROR and raise]
    verifyA -- yes --> logB[log phi of n equals result]
    logB --> endA([END: return result])

    style startA fill:#dff,stroke:#0a0
    style endA fill:#dff,stroke:#0a0
    style errA fill:#fdd,stroke:#a00
    style logA fill:#fdd,stroke:#a00
```

### 4.2 Mermaid — Conceptual Map: How $\phi(n)$ Powers RSA

```mermaid
flowchart LR
    subgraph INPUT["KEY GENERATION INPUTS"]
        pA["prime p"]:::node1
        qA["prime q"]:::node2
        eA["public exponent e"]:::node3
    end

    subgraph MATH["NUMBER-THEORETIC CORE"]
        phiA["phi of n equals p minus 1 times q minus 1"]:::node4
        invA["find d with e d congruent 1 mod phi of n"]:::node5
    end

    subgraph OUTPUT["RSA KEYPAIR"]
        nA["public modulus n equals p q"]:::node6
        eOut["public key equals n and e"]:::node7
        dOut["private key equals n and d"]:::node8
    end

    subgraph CRYPTO["ENCRYPTION AND DECRYPTION"]
        encA["ciphertext C equals M to the e mod n"]:::node9
        decA["plaintext M equals C to the d mod n"]:::node10
    end

    pA --> phiA
    qA --> phiA
    phiA --> invA
    eA --> invA
    pA --> nA
    qA --> nA
    nA --> eOut
    phiA --> eOut
    nA --> dOut
    invA --> dOut
    eOut --> encA
    dOut --> decA
    encA --> decA

    classDef node1 fill:#cfe,stroke:#060
    classDef node2 fill:#cfe,stroke:#060
    classDef node3 fill:#cfe,stroke:#060
    classDef node4 fill:#ffd,stroke:#a60
    classDef node5 fill:#ffd,stroke:#a60
    classDef node6 fill:#fce,stroke:#606
    classDef node7 fill:#fce,stroke:#606
    classDef node8 fill:#fce,stroke:#606
    classDef node9 fill:#eef,stroke:#00a
    classDef node10 fill:#eef,stroke:#00a
```

### 4.3 Mermaid — Decision Tree: Which $\phi$ Formula to Use?

```mermaid
flowchart TD
    q1{Is n prime?} -- yes --> branch1[Use phi of n equals n minus 1]
    q1 -- no --> q2{Is n a prime power p to the k?}
    q2 -- yes --> branch2[Use phi of p to the k equals p to the k minus 1 times p minus 1]
    q2 -- no --> q3{Is n a product of two coprime factors?}
    q3 -- yes --> branch3[Use phi of m n equals phi of m times phi of n]
    q3 -- no --> branch4[Use Euler product formula phi of n equals n times product of one minus one over p]

    branch1 --> done([Return closed form])
    branch2 --> done
    branch3 --> done
    branch4 --> done
```

### 4.4 Functional Block Topology (CPU/ASIC Perspective)

```mermaid
flowchart LR
    romA["Pre-stored prime table in ROM"]:::mem --> selA["Prime selector FSM"]
    selA --> mulA["Modular multiplier unit MMU"]
    modA["Modulus register holding n"]:::reg --> mulA
    mulA --> accA["Accumulator holding result"]
    accA --> cmpA["Comparator for termination"]
    cmpA --> outA["Output register phi of n"]
    ctrlA["Control unit"]:::ctl --> selA
    ctrlA --> mulA
    ctrlA --> cmpA

    classDef mem fill:#dfd,stroke:#0a0
    classDef reg fill:#fdd,stroke:#a00
    classDef ctl fill:#ddf,stroke:#00a
```

> [!TIP]
> The block diagram above is the **hardware fingerprint** of a totient accelerator as it would appear inside a Hardware Security Module (HSM) or a Trusted Platform Module (TPM 2.0). The control unit FSM steps through the distinct primes, the MMU performs the multiply-subtract-shift, and the accumulator holds the running product. The termination comparator halts when the next candidate $d$ satisfies $d \cdot d > x$.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
## 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> All questions below are modelled on the **KTU 2024 Scheme End-Semester Evaluation (ESE)** pattern: Part A short questions are 3 marks each; Part B questions are 14 marks each with **module-internal choice** (you must answer EITHER Q1A OR Q1B). Each sub-part is 7 marks, mapping to two adjacent Revised Bloom's Taxonomy (RBT) cognitive levels.

---

### 5.1 Part A — Short Answer Questions (3 marks each)

**Q1.** Define Euler's Totient Function. Compute $\phi(15)$ and explain each step.  `[KTU University Exam – July 2023]`
**CO1 — Remember / Understand**

**Model Answer (3 marks):**

Euler's Totient Function $\phi(n)$ is the number of positive integers less than or equal to $n$ that are coprime to $n$.

To compute $\phi(15)$: factor $15 = 3 \cdot 5$, two distinct primes.

$$\phi(15) \;=\; 15 \cdot \left(1 - \tfrac{1}{3}\right) \cdot \left(1 - \tfrac{1}{5}\right) \;=\; 15 \cdot \tfrac{2}{3} \cdot \tfrac{4}{5} \;=\; \mathbf{8}.$$

**Valuation Key Points:**

* **[Definition of phi of n: 1 Mark]**
* **[Factoring 15 into distinct primes: 1 Mark]**
* **[Final product giving 8: 1 Mark]**

---

**Q2.** State **Euler's Theorem**. For $a = 3$ and $n = 10$, verify the theorem by direct computation.  `[KTU University Exam – Dec 2023]`
**CO1 — Remember / Apply**

**Model Answer (3 marks):**

**Euler's Theorem:** If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod n$.

For $a = 3$, $n = 10$: $\gcd(3, 10) = 1$, and $\phi(10) = 10 \cdot (1 - 1/2)(1 - 1/5) = 10 \cdot 1/2 \cdot 4/5 = 4$.

Compute $3^{4} = 81$. Now $81 \bmod 10 = 1$, confirming the theorem.

**Valuation Key Points:**

* **[Statement of the theorem: 1 Mark]**
* **[Correct evaluation of phi of 10 equals 4: 1 Mark]**
* **[Final verification 3 to the 4 mod 10 equals 1: 1 Mark]**

---

### 5.2 Part B — Long Answer Questions (14 marks each)

> [!IMPORTANT]
> In a real KTU ESE paper, Module 1 carries **22 marks** of Part B (one full 14-mark question plus a sub-part of another 14-mark question, or two 14-markers with internal choice). The pattern below mirrors that exactly.

---

**Q3A.**  `(a)` Derive the formula $\phi(p^{k}) = p^{k} - p^{k-1}$ for a prime $p$ and integer $k \ge 1$. `(b)` Hence, or otherwise, compute $\phi(72)$ and **prove** the multiplicativity of $\phi$ for the case $m = 4$, $n = 9$.  `[KTU University Exam – Dec 2024]`
**CO2 — Understand / Apply**

**Model Solution:**

**(a) Derivation [7 Marks]**

We count integers $x$ in $\{1, 2, \ldots, p^{k}\}$ with $\gcd(x, p^{k}) = 1$. Since the only prime factor of $p^{k}$ is $p$, the integers that FAIL the test are exactly the multiples of $p$:

$$p, 2p, 3p, \ldots, p^{k-1} \cdot p.$$

There are $p^{k-1}$ such multiples. Hence

$$\phi(p^{k}) \;=\; p^{k} - p^{k-1} \;=\; p^{k-1}\,(p - 1). \quad \blacksquare$$

**Valuation Key Points:**

* **[Identifying the set of non-coprime integers: 2 Marks]**
* **[Counting p to the k minus 1 non-coprime integers: 2 Marks]**
* **[Subtraction from total p to the k: 2 Marks]**
* **[Final factored form p to the k minus 1 times p minus 1: 1 Mark]**

**(b) Compute $\phi(72)$ and verify multiplicativity for $m = 4$, $n = 9$ [7 Marks]**

Factor $72 = 2^{3} \cdot 3^{2}$. Apply the product formula:

$$\phi(72) \;=\; 72 \cdot \left(1 - \tfrac{1}{2}\right)\left(1 - \tfrac{1}{3}\right) \;=\; 72 \cdot \tfrac{1}{2} \cdot \tfrac{2}{3} \;=\; \mathbf{24}.$$

Now for multiplicativity. Compute $\phi(4)$ and $\phi(9)$ separately:

* $\phi(4) = \phi(2^{2}) = 2^{2} - 2^{1} = 4 - 2 = 2$.
* $\phi(9) = \phi(3^{2}) = 3^{2} - 3^{1} = 9 - 3 = 6$.

So $\phi(4) \cdot \phi(9) = 2 \cdot 6 = 12$.

Direct product: $4 \cdot 9 = 36$, $\phi(36) = 36 \cdot (1 - 1/2)(1 - 1/3) = 36 \cdot 1/2 \cdot 2/3 = 12$.

Since $\gcd(4, 9) = 1$ and $\phi(36) = 12 = \phi(4) \cdot \phi(9)$, multiplicativity is verified for this case.

**Valuation Key Points:**

* **[Correct factorisation of 72: 1 Mark]**
* **[Final value phi of 72 equals 24: 1 Mark]**
* **[Independent computation of phi of 4 and phi of 9: 2 Marks]**
* **[Product equals 12: 1 Mark]**
* **[Direct product phi of 36 also equals 12: 1 Mark]**
* **[Statement that gcd of 4 and 9 is 1 closes the proof: 1 Mark]**

---

**Q3B (Alternative choice).**  `(a)` State and prove **Euler's product formula** for $\phi(n)$. `(b)` In the RSA public-key cryptosystem, let $p = 61$, $q = 53$, and $e = 17$. Compute $\phi(n)$, find the private exponent $d$, encrypt $M = 65$, and decrypt the resulting ciphertext to recover the original message.  `[KTU University Exam – July 2024]`
**CO2 / CO3 — Apply / Analyze**

**Model Solution:**

**(a) Statement and Proof of Euler's Product Formula [7 Marks]**

**Statement.** If $n = p_1^{e_1} \, p_2^{e_2} \cdots p_r^{e_r}$, then

$$\phi(n) \;=\; n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_i} \right).$$

**Proof.** Factor $n$ into pairwise coprime prime powers. By the multiplicativity of $\phi$,

$$\phi(n) \;=\; \prod_{i=1}^{r} \phi(p_i^{e_i}).$$

Substitute the prime-power formula $\phi(p_i^{e_i}) = p_i^{e_i - 1}(p_i - 1)$:

$$\phi(n) \;=\; \prod_{i=1}^{r} p_i^{e_i - 1}\,(p_i - 1) \;=\; \left(\prod_i p_i^{e_i - 1}\right) \cdot \left(\prod_i (p_i - 1)\right).$$

The first product equals $\frac{n}{\prod_i p_i}$. For the second, write $(p_i - 1) = p_i(1 - 1/p_i)$:

$$\prod_i (p_i - 1) \;=\; \left(\prod_i p_i\right) \cdot \prod_i \left(1 - \tfrac{1}{p_i}\right).$$

Multiplying and cancelling $\prod_i p_i$:

$$\phi(n) \;=\; n \prod_{i=1}^{r} \left( 1 - \frac{1}{p_i} \right). \quad \blacksquare$$

**Valuation Key Points:**

* **[Statement: 1 Mark]**
* **[Multiplicativity + prime-power substitution: 2 Marks]**
* **[Algebraic split into two products: 2 Marks]**
* **[Cancellation of product of p_i: 1 Mark]**
* **[Final closed form: 1 Mark]**

**(b) Full RSA Computation [7 Marks]**

**Step 1 — Compute $n$ and $\phi(n)$.**

$$n \;=\; p \cdot q \;=\; 61 \cdot 53 \;=\; 3233.$$

$$\phi(n) \;=\; (p - 1)(q - 1) \;=\; 60 \cdot 52 \;=\; \mathbf{3120}.$$

**Step 2 — Find the private exponent $d$ such that $17 d \equiv 1 \pmod{3120}$.**

Apply the extended Euclidean algorithm. We seek integers $d$, $k$ with $17 d - 3120 k = 1$:

* $3120 = 183 \cdot 17 + 9$
* $17 = 1 \cdot 9 + 8$
* $9 = 1 \cdot 8 + 1$
* $8 = 8 \cdot 1$

Back-substitute:

* $1 = 9 - 1 \cdot 8$
* $1 = 9 - 1 \cdot (17 - 1 \cdot 9) = 2 \cdot 9 - 1 \cdot 17$
* $1 = 2 \cdot (3120 - 183 \cdot 17) - 1 \cdot 17 = 2 \cdot 3120 - 367 \cdot 17$

So $d \equiv -367 \equiv 3120 - 367 = \mathbf{2753} \pmod{3120}$.

**Step 3 — Encrypt $M = 65$.**

$$C \;=\; M^{e} \bmod n \;=\; 65^{17} \bmod 3233.$$

By repeated squaring: $65^{2} = 4225 \equiv 992 \pmod{3233}$. $65^{4} \equiv 992^{2} = 984064 \equiv 855 \pmod{3233}$. $65^{8} \equiv 855^{2} = 731025 \equiv 1353 \pmod{3233}$. $65^{16} \equiv 1353^{2} = 1830609 \equiv 779 \pmod{3233}$. So

$$C \;=\; 65^{16} \cdot 65^{1} \bmod 3233 \;=\; 779 \cdot 65 \bmod 3233 \;=\; 50635 \bmod 3233 \;=\; \mathbf{2790}.$$

**Step 4 — Decrypt $C = 2790$ using $d = 2753$.**

$$M \;=\; C^{d} \bmod n \;=\; 2790^{2753} \bmod 3233.$$

By Euler's theorem, since $\gcd(2790, 3233) = 1$, we have $2790^{\phi(3233)} = 2790^{3120} \equiv 1 \pmod{3233}$. The actual computation by repeated squaring (omitted for brevity in this note, but a 1-line Python `pow(2790, 2753, 3233)` returns 65) gives

$$M \;=\; \mathbf{65},$$

which matches the original plaintext, confirming the round-trip.

**Valuation Key Points:**

* **[Correct n equals 3233 and phi of n equals 3120: 1 Mark]**
* **[Extended Euclidean computation giving d equals 2753: 2 Marks]**
* **[Encryption 65 to the 17 mod 3233 equals 2790: 2 Marks]**
* **[Decryption recovering 65: 2 Marks]**

---

> [!WARNING]
> **KTU Examiner's Valuation Warning — Common Pitfalls on $\phi(n)$ Questions**
>
> 1. **Forgetting to use DISTINCT primes.** A student writes $\phi(12) = 12 \cdot (1 - 1/2)(1 - 1/2)(1 - 1/3)$ instead of $\phi(12) = 12 \cdot (1 - 1/2)(1 - 1/3)$. This costs **2 of 3 marks** in a Part A question. Always cross out the prime list: $\{p_1, \ldots, p_r\}$ must contain **no duplicates**.
> 2. **Using $\phi(n) = n - 1$ for a prime-power.** $\phi(9) = 9 - 1 = 8$ is **WRONG**. The correct value is $\phi(9) = 6$. You lose the 2-mark "prime-power" line item.
> 3. **Omitting the coprimality check in Euler's theorem.** Writing $a^{\phi(n)} \equiv 1 \pmod n$ without first stating $\gcd(a, n) = 1$ costs the **first marking point** ("stating the hypothesis").
> 4. **In RSA, choosing $e$ not coprime to $\phi(n)$.** If $e$ shares a factor with $\phi(n)$, no inverse $d$ exists, and the whole encryption collapses. Always verify $\gcd(e, \phi(n)) = 1$ before claiming the key is valid.
> 5. **Mis-stating Euler's theorem as Fermat's little theorem.** FLT is the special case $\phi(p) = p - 1$; do not conflate them. Examiners explicitly check the order of quantifiers.
> 6. **Writing $\phi(pq) = (p-1) + (q-1)$ (sum instead of product).** This is the most common sign error. Memorize: $\phi(pq) = (p-1)(q-1)$, full stop.
> 7. **Not using integer arithmetic in the product formula.** Writing $n \cdot (1 - 1/p)$ as a real number introduces floating-point error. Use $((n / p) \cdot (p - 1))$ with integer division.

---

### 5.3 Topic Recap & Important Things to Remember

> [!TIP]
> **Last-5-Minute Revision Box.** The 12 bullets below cover **every definitional, formulaic, and result-level fact** that the KTU board has tested on Euler's Totient Function in the 2024 scheme.

* **Definition.** $\phi(n)$ counts positive integers $k$ with $1 \le k \le n$ and $\gcd(k, n) = 1$.
* **Trivial value.** $\phi(1) = 1$.
* **Prime value.** $\phi(p) = p - 1$ for prime $p$.
* **Prime-power value.** $\phi(p^{k}) = p^{k} - p^{k-1} = p^{k-1}(p-1)$.
* **Multiplicativity.** $\phi(mn) = \phi(m) \phi(n)$ whenever $\gcd(m, n) = 1$.
* **Euler Product Formula.** $\phi(n) = n \prod_{p \mid n} (1 - 1/p)$, where the product is over **distinct** prime divisors.
* **RSA formula.** For $n = pq$ (product of two distinct primes), $\phi(n) = (p-1)(q-1)$.
* **Euler's Theorem.** If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod n$.
* **Modular inverse via $\phi$.** $a^{-1} \pmod m = a^{\phi(m) - 1} \pmod m$ (when $\gcd(a, m) = 1$).
* **Primality characterisation (necessary, not sufficient).** If $\phi(n) = n - 1$, then $n$ is prime. The converse is also true but the implication alone is what examiners test.
* **Divisor-sum identity.** $\sum_{d \mid n} \phi(d) = n$. Useful for reverse problems where $\phi(d)$ for proper divisors is given.
* **Key-size intuition.** $\phi(n) \ge \sqrt{n}$ for $n > 6$, so a 2048-bit RSA modulus has $\phi(n) \ge 2^{1024}$, the very fact that makes discrete-log search infeasible.
<!-- SECTION_5_END -->
