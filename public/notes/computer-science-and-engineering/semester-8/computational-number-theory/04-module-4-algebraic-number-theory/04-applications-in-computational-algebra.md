---
title: "Applications in computational algebra"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 4: Algebraic Number Theory "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb4b"
status: "completed"
scrapedAt: "2026-05-20T17:24:23.004Z"
---
# Computational Number Theory: Module 4 - Algebraic Number Theory
## Topic: Applications in Computational Algebra

### Learning Outcomes:

This module focuses on how the concepts and tools developed in Algebraic Number Theory are applied to solve problems in computational algebra. By the end of this module, you should be able to:

1.  **Understand the fundamental role of algebraic integers and number fields in computational algebra.**
2.  **Explain how the ring of integers of a number field can be computed.**
3.  **Describe algorithms for computing integral bases of number fields.**
4.  **Discuss applications of integral bases in solving polynomial equations over number fields.**
5.  **Explore how number fields and their properties are used in cryptography.**
6.  **Illustrate applications in symbolic computation and computer algebra systems.**

---

### 1. Algebraic Integers and Number Fields in Computational Algebra

#### Key Concepts and Definitions:

*   **Algebraic Number:** A complex number that is a root of a non-zero polynomial with rational coefficients.
*   **Number Field:** A finite extension of the field of rational numbers $\mathbb{Q}$. We denote a number field as $K$, with $[K:\mathbb{Q}] = n$, where $n$ is the degree of the extension.
*   **Algebraic Integer:** A complex number that is a root of a monic polynomial with integer coefficients.
*   **Ring of Integers ($\mathcal{O}_K$):** The set of all algebraic integers within a number field $K$. This set forms a commutative ring with unity.
*   **Integral Basis:** A basis for $\mathcal{O}_K$ as a $\mathbb{Z}$-module. If $\alpha_1, \dots, \alpha_n$ is an integral basis for $K$, then any $\beta \in \mathcal{O}_K$ can be uniquely written as $\beta = c_1 \alpha_1 + \dots + c_n \alpha_n$, where $c_i \in \mathbb{Z}$.

#### Importance in Computational Algebra:

Number fields provide a richer algebraic structure than rational numbers, enabling the development of more sophisticated algorithms for problems that are intractable over $\mathbb{Q}$. Computational algebra often deals with polynomial systems, factorization, and solving equations. Algebraic number theory provides the framework and tools to tackle these problems when coefficients or roots lie in extensions of $\mathbb{Q}$.

*   **Generalization of Arithmetic:** Number fields extend the familiar arithmetic of integers and rationals. Operations like addition, subtraction, and multiplication are well-defined in $\mathcal{O}_K$.
*   **Unique Factorization:** While $\mathbb{Z}$ has unique factorization into primes, not all rings of integers have this property. However, many do, and when they don't, we can study factorization into *prime ideals*. This is crucial for understanding the structure of algebraic numbers.
*   **Solving Polynomial Equations:** Many problems in computational algebra involve finding roots of polynomials. If these roots are algebraic numbers, we need methods from algebraic number theory to represent and manipulate them.

#### Example:

*   **Quadratic Fields:** $K = \mathbb{Q}(\sqrt{d})$, where $d$ is a square-free integer.
    *   If $d \equiv 2, 3 \pmod{4}$, the ring of integers is $\mathcal{O}_K = \mathbb{Z}[\sqrt{d}] = \{a + b\sqrt{d} \mid a, b \in \mathbb{Z}\}$. An integral basis is $\{1, \sqrt{d}\}$.
    *   If $d \equiv 1 \pmod{4}$, the ring of integers is $\mathcal{O}_K = \mathbb{Z}\left[\frac{1+\sqrt{d}}{2}\right] = \left\{a + b\frac{1+\sqrt{d}}{2} \mid a, b \in \mathbb{Z}\right\}$. An integral basis is $\left\{1, \frac{1+\sqrt{d}}{2}\right\}$.

---

### 2. Computing the Ring of Integers of a Number Field

#### Key Concepts and Definitions:

*   **Minimal Polynomial:** For an algebraic number $\alpha$, its minimal polynomial over $\mathbb{Q}$ is the monic polynomial of lowest degree with rational coefficients that has $\alpha$ as a root.
*   **Discriminant of a Basis:** For a basis $\{\beta_1, \dots, \beta_n\}$ of $K$ over $\mathbb{Q}$, the discriminant is given by $D(\beta_1, \dots, \beta_n) = \det(M^2)$, where $M$ is the $n \times n$ matrix with entries $M_{ij} = \operatorname{Tr}_{K/\mathbb{Q}}(\beta_i \beta_j)$.
*   **Discriminant of the Field ($D_K$):** The discriminant of any integral basis of $K$. If $\{\beta_1, \dots, \beta_n\}$ is a basis for $K$ and $\{\alpha_1, \dots, \alpha_n\}$ is an integral basis, then $D(\beta_1, \dots, \beta_n) = d^2 D_K$ for some integer $d$.

#### Algorithms for Computing $\mathcal{O}_K$:

The general problem of computing $\mathcal{O}_K$ for a number field $K$ defined by a single generator $\alpha$ (i.e., $K = \mathbb{Q}(\alpha)$) is non-trivial.

*   **Initial Guess:** The ring $\mathbb{Z}[\alpha]$ is always a subring of $\mathcal{O}_K$. We can start with the integral basis $\{1, \alpha, \dots, \alpha^{n-1}\}$ for $\mathbb{Z}[\alpha]$.
*   **The Discriminant Approach (Theorem):** Let $K = \mathbb{Q}(\alpha)$ and let $f(x)$ be the minimal polynomial of $\alpha$. Let $B = \{1, \alpha, \dots, \alpha^{n-1}\}$ be a basis for $\mathbb{Z}[\alpha]$. The discriminant of this basis is $D(B) = (-1)^{n(n-1)/2} \operatorname{Norm}_{K/\mathbb{Q}}(f'(\alpha))$.
    *   The discriminant of the field $D_K$ divides $D(B)$.
    *   Specifically, $\mathcal{O}_K = \frac{\mathbb{Z}[\alpha]}{I}$ for some ideal $I$ of $\mathbb{Z}[\alpha]$.
    *   The key insight is that any element $\beta \in \mathcal{O}_K$ that is *not* in $\mathbb{Z}[\alpha]$ must have a denominator whose prime factors divide $D(B)/\mathcal{O}_K$, where $\mathcal{O}_K$ is the discriminant of the field.
*   **Dedekind's Criterion:** For a prime $p$, let $f(x)$ be the minimal polynomial of $\alpha$. We can study the factorization of $f(x)$ modulo $p$.
    *   If $p$ is a prime such that $p^2$ does not divide $D(B)$, then $p$ does not divide the index $[\mathcal{O}_K : \mathbb{Z}[\alpha]]$, which implies $\mathcal{O}_K = \mathbb{Z}[\alpha]$ modulo $p$.
    *   If $p^2$ divides $D(B)$, we need to analyze the factorization of $f(x)$ modulo $p$.

**General Algorithm (Simplified Idea):**

1.  Start with an initial basis for $\mathbb{Z}[\alpha]$, typically $\{1, \alpha, \dots, \alpha^{n-1}\}$.
2.  Compute the discriminant of this basis, $D_{init}$.
3.  Find candidate primes $p$ such that $p^2 | D_{init}$. These are the primes that might cause $\mathcal{O}_K$ to be larger than $\mathbb{Z}[\alpha]$.
4.  For each such prime $p$:
    *   Examine the factorization of the minimal polynomial $f(x)$ modulo $p$.
    *   If $f(x) \equiv \prod g_i(x)^{e_i} \pmod{p}$, where $g_i(x)$ are irreducible modulo $p$, we can potentially introduce new basis elements involving $g_i(\alpha)/p$.
    *   This process involves testing elements of the form $(a_0 + a_1 \alpha + \dots + a_{n-1} \alpha^{n-1})/p$ to see if they are algebraic integers. If such an element is an algebraic integer, it must be expressible as an integral linear combination of a new basis for $\mathcal{O}_K$.
5.  The process is iterative and can be complex. Advanced algorithms like the **LLL algorithm** (Lenstra–Lenstra–Lovász) are crucial for efficiently finding $\mathcal{O}_K$. The LLL algorithm helps in finding a "short" basis for a lattice, which is related to the structure of $\mathcal{O}_K$.

#### Example:

Let $K = \mathbb{Q}(\sqrt[3]{2})$. The minimal polynomial of $\alpha = \sqrt[3]{2}$ is $f(x) = x^3 - 2$.
The basis for $\mathbb{Z}[\alpha]$ is $\{1, \alpha, \alpha^2\}$.
The discriminant of this basis is $D(1, \alpha, \alpha^2) = \det(M^2)$, where $M_{ij} = \operatorname{Tr}(\alpha^{i-1}\alpha^{j-1})$.
The trace of $\alpha^i$: $\operatorname{Tr}(\alpha^0) = \operatorname{Tr}(1) = 3$, $\operatorname{Tr}(\alpha) = 0$, $\operatorname{Tr}(\alpha^2) = 0$, $\operatorname{Tr}(\alpha^3) = \operatorname{Tr}(2) = 6$, $\operatorname{Tr}(\alpha^4) = \operatorname{Tr}(2\alpha) = 0$, $\operatorname{Tr}(\alpha^5) = \operatorname{Tr}(2\alpha^2) = 0$.
The matrix $M$ has entries $\operatorname{Tr}(\alpha^{i+j-2})$ for $0 \le i, j \le 2$.
$M = \begin{pmatrix} \operatorname{Tr}(1) & \operatorname{Tr}(\alpha) & \operatorname{Tr}(\alpha^2) \\ \operatorname{Tr}(\alpha) & \operatorname{Tr}(\alpha^2) & \operatorname{Tr}(\alpha^3) \\ \operatorname{Tr}(\alpha^2) & \operatorname{Tr}(\alpha^3) & \operatorname{Tr}(\alpha^4) \end{pmatrix} = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 6 \\ 0 & 6 & 0 \end{pmatrix}$.
$D(1, \alpha, \alpha^2) = \det(M^2) = (-1)^{3(2)/2} \operatorname{Norm}(f'(\alpha))$. $f'(x) = 3x^2$, so $f'(\alpha) = 3\alpha^2$.
$\operatorname{Norm}(\alpha^2) = (\alpha^2)^{n/1} (\alpha^2)^{n/2} \dots = (\alpha^2)^3 = \alpha^6 = (2^{1/3})^6 = 2^2 = 4$.
$\operatorname{Norm}(3\alpha^2) = 3^3 \operatorname{Norm}(\alpha^2) = 27 \times 4 = 108$.
$D(1, \alpha, \alpha^2) = (-1)^{3} (108) = -108$.
The discriminant of $K = \mathbb{Q}(\sqrt[3]{2})$ is $D_K = -108$. Since the discriminant of $\mathbb{Z}[\alpha]$ is the field discriminant, $\mathcal{O}_K = \mathbb{Z}[\sqrt[3]{2}]$. An integral basis is $\{1, \sqrt[3]{2}, (\sqrt[3]{2})^2\} = \{1, 2^{1/3}, 2^{2/3}\}$.

---

### 3. Algorithms for Computing Integral Bases

#### Key Concepts and Definitions:

*   **Integral Basis:** A $\mathbb{Z}$-basis for the ring of integers $\mathcal{O}_K$.
*   **Lattice:** A discrete subgroup of $\mathbb{R}^n$ of the form $\{ \sum_{i=1}^n c_i v_i \mid c_i \in \mathbb{Z} \}$, where $\{v_1, \dots, v_n\}$ is a basis of $\mathbb{R}^n$. The ring of integers $\mathcal{O}_K$ can be viewed as a lattice in $\mathbb{C} \cong \mathbb{R}^2$ (for quadratic fields) or $\mathbb{R}^n$ (for general number fields via embeddings).
*   **LLL Algorithm (Lenstra–Lenstra–Lovász):** An algorithm that takes a basis of a lattice and produces a "reduced" basis, where the basis vectors are short and nearly orthogonal. This is crucial for finding short vectors in lattices, which corresponds to finding elements of $\mathcal{O}_K$ with small coefficients in some basis.

#### Algorithms:

The most general and powerful algorithms for computing integral bases are based on lattice reduction techniques, specifically the LLL algorithm.

1.  **Delone-Faddeev Algorithm (for cubic fields) / Pohst-Zassenhaus Algorithm (general):** These algorithms are systematic ways to compute $\mathcal{O}_K$ by building up the basis and refining it.

    *   **Initialization:** Start with an initial basis for $\mathbb{Z}[\alpha]$, say $B_0 = \{1, \alpha, \dots, \alpha^{n-1}\}$. Compute its discriminant $D_0$.
    *   **Factor Discriminant:** Factor $D_0$ into its prime power factors: $D_0 = \pm p_1^{e_1} \dots p_k^{e_k}$.
    *   **Iterative Refinement:** For each prime $p$ that divides $D_0$:
        *   Consider candidate elements of $\mathcal{O}_K$ that are not in the current basis by looking at elements of the form $\frac{a_0 + \dots + a_{n-1}\alpha^{n-1}}{p}$ that are algebraic integers.
        *   These candidates arise from the factorization of the minimal polynomial modulo $p$.
        *   Introduce new basis vectors corresponding to these elements.
        *   Use the LLL algorithm to reduce the current basis to find shorter, more orthogonal vectors. This step is crucial for making the algorithm computationally feasible. The LLL algorithm helps to find a basis for the lattice of $\mathcal{O}_K$ when we have a basis for a super-lattice.
    *   **Termination:** The algorithm terminates when no new basis elements can be added, meaning the current basis is an integral basis.

2.  **Using Embeddings and Lattices:**
    *   A number field $K$ of degree $n$ has $n$ embeddings into $\mathbb{C}$. If $K$ is a totally real field, it has $n$ real embeddings. If it has $r$ real and $2s$ complex embeddings ($n=r+2s$), we can view $\mathcal{O}_K$ as a lattice in $\mathbb{R}^n$ via the "real embeddings" and by taking the real and imaginary parts of the complex embeddings.
    *   The LLL algorithm can be applied to a lattice generated by a potential integral basis to find a "short" basis. If the Gram-Schmidt lengths of the basis vectors are small enough, and their discriminant matches the computed field discriminant, it is likely an integral basis.

#### Example:

Consider $K = \mathbb{Q}(\alpha)$ where $\alpha$ is a root of $x^3 - x - 1 = 0$.
$f(x) = x^3 - x - 1$. $f'(x) = 3x^2 - 1$.
$D(1, \alpha, \alpha^2) = \operatorname{Norm}(f'(\alpha)) = \operatorname{Norm}(3\alpha^2 - 1)$.
Let $\alpha_1, \alpha_2, \alpha_3$ be the roots.
$f'(\alpha_1) = 3\alpha_1^2 - 1$, $f'(\alpha_2) = 3\alpha_2^2 - 1$, $f'(\alpha_3) = 3\alpha_3^2 - 1$.
$\operatorname{Norm}(3\alpha^2 - 1) = (3\alpha_1^2 - 1)(3\alpha_2^2 - 1)(3\alpha_3^2 - 1)$.
This can be computed by polynomial resultant methods or by transforming the polynomial.
Let $y = 3x^2 - 1$. Then $x^2 = (y+1)/3$. Substitute into $x^3 - x - 1 = 0$:
$x \cdot x^2 - x - 1 = 0 \implies x \frac{y+1}{3} - x - 1 = 0 \implies x (\frac{y+1}{3} - 1) = 1 \implies x \frac{y-2}{3} = 1 \implies x = \frac{3}{y-2}$.
Substitute this back into $x^3 - x - 1 = 0$:
$(\frac{3}{y-2})^3 - \frac{3}{y-2} - 1 = 0$.
Multiply by $(y-2)^3$:
$27 - 3(y-2)^2 - (y-2)^3 = 0$.
Expand: $27 - 3(y^2 - 4y + 4) - (y^3 - 6y^2 + 12y - 8) = 0$.
$27 - 3y^2 + 12y - 12 - y^3 + 6y^2 - 12y + 8 = 0$.
$-y^3 + 3y^2 + 23 = 0$, or $y^3 - 3y^2 - 23 = 0$.
The roots of this polynomial are $3\alpha_i^2 - 1$. The norm is the product of these roots, which is $-(-23) = 23$.
So $D(1, \alpha, \alpha^2) = -23$.
Since $23$ is prime, the discriminant of the field $D_K$ must divide $-23$. $D_K$ is either $-23$ or $23$.
The discriminant of $x^3 - x - 1$ is $-4(0)^3 - 27(-1)^2 + 0^2(0)^2 - 18(0)(0)(-1) + 1(0)^2 = -27$. This is incorrect.
The discriminant of $x^3+px+q$ is $-4p^3 - 27q^2$. For $x^3-x-1$, $p=-1, q=-1$. Discriminant is $-4(-1)^3 - 27(-1)^2 = 4 - 27 = -23$.
Since the discriminant of $\mathbb{Z}[\alpha]$ is $-23$, which is the field discriminant, $\mathcal{O}_K = \mathbb{Z}[\alpha]$.
The integral basis is $\{1, \alpha, \alpha^2\}$.

---

### 4. Applications of Integral Bases in Solving Polynomial Equations

#### Key Concepts and Definitions:

*   **Polynomial Factorization:** Decomposing a polynomial into a product of irreducible polynomials. In computational algebra, this is often done over $\mathbb{Q}$ or its extensions.
*   **Root Finding:** Determining the roots of a polynomial.
*   **Ideal Factorization:** In $\mathcal{O}_K$, the factorization of ideals into prime ideals is unique. This mirrors unique factorization of elements in $\mathbb{Z}$.

#### Applications:

1.  **Polynomial Factorization over Number Fields:**
    *   If we want to factor a polynomial $f(x) \in \mathbb{Q}[x]$ into irreducible factors over a number field $K = \mathbb{Q}(\alpha)$, we can use the integral basis of $K$.
    *   The problem is reduced to finding a basis for the ideal $(f(\alpha))$ in the ring $\mathcal{O}_K$.
    *   Algorithms like **Zassenhaus's algorithm** or variants for polynomial factorization over number fields rely on computing integral bases and then using lattice reduction techniques to find factors.
    *   The factorization of $f(x)$ over $K$ corresponds to the factorization of the ideal $(f(\alpha))$ in $\mathcal{O}_K$ into prime ideals.

2.  **Solving Norm Equations:**
    *   Consider the equation $N_{K/\mathbb{Q}}(\beta) = m$, where $\beta \in \mathcal{O}_K$ and $m \in \mathbb{Z}$.
    *   Finding solutions requires understanding the structure of $\mathcal{O}_K$, its units, and its ideal factorization.
    *   Integral bases are crucial for representing elements $\beta$ and for efficiently computing their norms.

3.  **Computing $p$-adic Approximations of Roots:**
    *   For a polynomial $f(x) \in \mathbb{Z}[x]$, we can find its roots modulo prime powers $p^k$.
    *   These $p$-adic approximations are important building blocks for lifting roots to higher precision and for factorization algorithms.
    *   Number fields provide the framework for understanding these $p$-adic properties. The structure of $\mathcal{O}_K$ modulo prime ideals plays a key role.

#### Example:

Consider factoring $x^4 - 2$ over $K = \mathbb{Q}(\sqrt{2})$.
The minimal polynomial of $\sqrt{2}$ is $x^2 - 2$. The ring of integers is $\mathcal{O}_K = \mathbb{Z}[\sqrt{2}]$, with integral basis $\{1, \sqrt{2}\}$.
We want to factor $x^4 - 2$ in $\mathbb{Z}[\sqrt{2}][x]$.
We can test for factors of degree 1, 2, or 3.
Degree 1 factors would correspond to roots in $\mathbb{Z}[\sqrt{2}]$, which must be of the form $a + b\sqrt{2}$.
If $a+b\sqrt{2}$ is a root, then $(a+b\sqrt{2})^4 - 2 = 0$. This is unlikely to yield simple integer solutions for $a,b$.

Consider factoring $x^2 - \sqrt{2}$ over $K = \mathbb{Q}(\sqrt{2})$.
We are looking for roots of the form $a + b\sqrt{2}$.
$(a+b\sqrt{2})^2 = a^2 + 2b^2 + 2ab\sqrt{2} = \sqrt{2}$.
Equating coefficients of $1$ and $\sqrt{2}$:
$a^2 + 2b^2 = 0$
$2ab = 1$
From the first equation, if $a, b \in \mathbb{R}$, then $a=0$ and $b=0$, which contradicts the second. So there are no real solutions for $a,b$. However, we are working in $\mathbb{Z}[\sqrt{2}]$.

Let's rephrase: we want to factor $x^2 - \sqrt{2}$ over $K = \mathbb{Q}(\sqrt{2})$.
The roots are $\pm (2^{1/4})$. These are not in $\mathbb{Q}(\sqrt{2})$.
So $x^2 - \sqrt{2}$ is irreducible over $\mathbb{Q}(\sqrt{2})$.

Consider factoring $x^2 - 2$ over $K = \mathbb{Q}(\sqrt{3})$. Integral basis $\{1, \sqrt{3}\}$.
Roots are $\pm \sqrt{2}$. Not in $K$. So $x^2-2$ is irreducible.

Consider factoring $x^2 - 3$ over $K = \mathbb{Q}(\sqrt{3})$.
Roots are $\pm \sqrt{3}$. These are in $K$.
$x^2 - 3 = (x - \sqrt{3})(x + \sqrt{3})$.

**Application to Factorization in $\mathbb{Z}[x]$:**
If we factor $f(x) \in \mathbb{Z}[x]$ over number fields, we can combine these factorizations to obtain the factorization over $\mathbb{Q}$.
Example: Factor $x^4 + 1$ over $\mathbb{Q}$.
It's irreducible over $\mathbb{Q}$.
Over $\mathbb{Q}(i)$, $x^4 + 1 = (x^2 - i)(x^2 + i) = (x - \frac{1+i}{\sqrt{2}})(x + \frac{1+i}{\sqrt{2}})(x - \frac{1-i}{\sqrt{2}})(x + \frac{1-i}{\sqrt{2}})$.
The roots are $e^{i\pi/4}, e^{3i\pi/4}, e^{5i\pi/4}, e^{7i\pi/4}$.
$\frac{1+i}{\sqrt{2}} \in \mathbb{Q}(i)$.
The field $\mathbb{Q}(i)$ has integral basis $\{1, i\}$.
We can use these roots to factor $x^4+1$ over $\mathbb{Q}(\sqrt{2})$ and other fields.
$x^4+1 = (x^2 + \sqrt{2}x + 1)(x^2 - \sqrt{2}x + 1)$ over $\mathbb{Q}(\sqrt{2})$.
The coefficients $1, \sqrt{2}, 1$ are in $\mathbb{Z}[\sqrt{2}]$. This factorization is over $\mathbb{Q}(\sqrt{2})$.

---

### 5. Number Fields in Cryptography

#### Key Concepts and Definitions:

*   **Elliptic Curve Cryptography (ECC):** Relies on the group structure of points on an elliptic curve.
*   **Integer Animate Cryptography (IAC) / Homomorphic Encryption:** Schemes that allow computations on encrypted data.
*   **Lattice-Based Cryptography:** A modern approach to cryptography that offers potential advantages in security and efficiency.
*   **Short Integer Solution (SIS) and Learning With Errors (LWE) problems:** These are foundational problems in lattice-based cryptography, and their hardness is related to the geometry of lattices.

#### Applications:

1.  **Lattice-Based Cryptography:**
    *   **Problem Formulation:** Many lattice-based cryptographic schemes, such as those based on the Short Integer Solution (SIS) problem or the Learning With Errors (LWE) problem, are defined over rings of algebraic integers in number fields, particularly cyclotomic fields.
    *   **Ring $R = \mathbb{Z}[x]/(x^n+1)$:** For $n$ being a power of 2, this ring is the ring of integers of the $2n$-th cyclotomic field. This ring has desirable properties for efficient polynomial multiplication (e.g., using NTT - Number Theoretic Transform, a variant of FFT).
    *   **Efficiency:** Operations like polynomial multiplication (convolution) in these rings can be performed efficiently using the Fast Fourier Transform (FFT) or Number Theoretic Transform (NTT), which are closely related to the structure of cyclotomic fields.
    *   **Security:** The hardness of problems like SIS and LWE in these rings is believed to provide a strong security foundation against both classical and quantum computers.

2.  **Homomorphic Encryption:**
    *   **Somewhat Homomorphic Encryption (SWHE) and Fully Homomorphic Encryption (FHE):** Schemes like BGV (Brakerski-Gentry-Vaikuntanathan) and TFHE (FHE over the Torus) often use polynomial rings derived from number fields (again, cyclotomic fields are common) as the underlying algebraic structure.
    *   **Noise Growth:** During computations, noise is added to the ciphertexts. The structure of the ring and the choice of parameters (often related to the number field) are critical for controlling this noise growth and enabling decryption.
    *   **Key Generation and Encryption:** These processes involve sampling from distributions over $\mathcal{O}_K$ or related rings.

3.  **Elliptic Curve Cryptography (ECC) over Higher Degree Fields:**
    *   While standard ECC is over finite fields $\mathbb{F}_q$, there are generalizations of ECC over rings of algebraic integers. These can offer different security properties or performance characteristics.
    *   **Imaginary Quadratic Fields:** ECC over rings of integers of imaginary quadratic fields $\mathbb{Q}(\sqrt{-d})$ have been studied for specific cryptographic applications, especially those requiring efficient group operations and security against certain attacks.

#### Example:

**Ring-LWE for Cryptography:**
Consider the ring $R_q = \mathbb{Z}_q[x]/(x^n+1)$, where $q$ is a prime modulus and $n$ is a power of 2. This is a quotient ring, but its structure is closely related to cyclotomic fields.
To set up a system:
*   Choose a secret vector $\mathbf{s} \in R_q^k$.
*   Generate a public matrix $A \in R_q^{m \times k}$.
*   Generate a random error vector $\mathbf{e} \in R_q^m$ with small coefficients.
*   Compute $\mathbf{b} = A\mathbf{s} + \mathbf{e} \pmod q$.
The public key is $(A, \mathbf{b})$.
Encryption of a message bit $m_0 \in \{0, 1\}$:
*   Choose a random vector $\mathbf{r} \in R_q^k$ with small coefficients.
*   Choose a random error vector $\mathbf{e}_1 \in R_q^m$ and $\mathbf{e}_2 \in R_q$ with small coefficients.
*   Ciphertext is $(u, v) = (A^T \mathbf{r} + \mathbf{e}_1, \mathbf{b}^T \mathbf{r} + \mathbf{e}_2 + m_0 \cdot (q/2) \pmod q)$.
The ability to efficiently perform polynomial multiplication ($A^T\mathbf{r}$), addition, and sampling from these rings is crucial for the performance of these cryptosystems. The algebraic structure of $R_q$ (which is related to $\mathbb{Z}[\zeta_{2n}]$ where $\zeta_{2n}$ is a primitive $2n$-th root of unity) is what enables these efficient operations via NTT.

---

### 6. Applications in Symbolic Computation and Computer Algebra Systems

#### Key Concepts and Definitions:

*   **Computer Algebra System (CAS):** Software systems that perform symbolic mathematical computations (e.g., Maple, Mathematica, SageMath).
*   **Symbolic Manipulation:** Performing mathematical operations on mathematical expressions rather than their numerical approximations.
*   **Isomorphism:** A structure-preserving mapping between two algebraic objects.

#### Applications:

1.  **Representing and Manipulating Algebraic Numbers:**
    *   CAS need to represent algebraic numbers accurately. Instead of using floating-point approximations, they represent an algebraic number $\alpha$ by its minimal polynomial and a numerical approximation (e.g., a root isolated to a certain precision).
    *   Integral bases are fundamental for these representations. When working with number fields, operations like addition, subtraction, and multiplication of algebraic numbers are performed using their integral bases.

2.  **Polynomial Factorization:**
    *   As discussed earlier, factoring polynomials over number fields is a core functionality in CAS. Algorithms developed in algebraic number theory are directly implemented.
    *   The ability to compute integral bases and use lattice reduction is essential for the efficiency and correctness of these factorization routines.

3.  **Solving Systems of Polynomial Equations:**
    *   When the solutions to a system of polynomial equations involve algebraic numbers, CAS use techniques from algebraic geometry and algebraic number theory.
    *   Gröbner bases, a fundamental tool for solving polynomial systems, are often computed in quotient rings of polynomial rings, which are related to algebraic number fields.

4.  **Class Field Theory Computations:**
    *   Class field theory is a deep area of algebraic number theory that connects extensions of number fields to properties of their rings of integers.
    *   While computationally very intensive, some CAS have limited capabilities for exploring class groups and performing computations related to class field theory. This is essential for understanding the arithmetic of number fields.

5.  **Symbolic Computation with Number Field Elements:**
    *   Calculations involving norms, traces, discriminants, and units in number fields are often required. Integral bases provide the necessary framework for these computations.
    *   For example, computing the norm of an element $\beta = c_1 \alpha_1 + \dots + c_n \alpha_n$ involves manipulating matrices derived from the integral basis and their traces.

#### Example:

In SageMath, you can create a number field and perform operations:

```python
# Create a number field K = Q(alpha) where alpha is a root of x^3 - x - 1
K.<alpha> = NumberField('x^3 - x - 1')

# Get the ring of integers
O_K = K.ring_of_integers()
print(f"Ring of integers: {O_K}") # Usually displays as Z[alpha]

# Get an integral basis
basis = O_K.integral_basis()
print(f"Integral basis: {basis}") # e.g., [1, alpha, alpha^2]

# Create elements in the ring of integers
beta1 = 2 + alpha^2
beta2 = 1 - alpha

# Perform operations
sum_elements = beta1 + beta2
product_elements = beta1 * beta2

print(f"Sum: {sum_elements}")
print(f"Product: {product_elements}")

# Compute the norm of beta1
norm_beta1 = norm(beta1)
print(f"Norm of beta1: {norm_beta1}") # This will be an integer

# Factor a polynomial over K
P = PolynomialRing(K, 'x')
f = P([1, 0, 0, -2]) # x^3 - 2
print(f"Factorization of x^3 - 2 over K: {f.factor()}")
# If K is Q(2^(1/3)), then x^3 - 2 = (x - 2^(1/3))(x^2 + 2^(1/3)x + 2^(2/3))
```

The CAS internally uses algorithms related to integral bases to perform these operations correctly and efficiently. The output `[1, alpha, alpha^2]` confirms that `alpha` is a primitive element and that $\mathbb{Z}[\alpha]$ is indeed the ring of integers. The `norm()` function uses the trace matrix derived from the integral basis.

---

### Practice Questions

1.  **Definition:** What is the ring of integers of a number field $K$? What is an integral basis?
2.  **Example:** For the quadratic field $\mathbb{Q}(\sqrt{5})$, what is its ring of integers and an integral basis? Justify your answer.
3.  **Algorithm Concept:** Briefly explain why the LLL algorithm is useful for computing integral bases.
4.  **Application:** Name one area of cryptography where number fields and their rings of integers are fundamentally used. Explain why.
5.  **Symbolic Computation:** How does a computer algebra system typically represent an algebraic number? What role does the integral basis play?
6.  **Problem:** Let $K = \mathbb{Q}(\alpha)$ where $\alpha$ is a root of $x^3 - 4x + 1 = 0$. The discriminant of the basis $\{1, \alpha, \alpha^2\}$ is $-108$. (Hint: The discriminant of $x^3+px+q$ is $-4p^3-27q^2$).
    *   What is the discriminant of the field $K$?
    *   Is $\mathbb{Z}[\alpha]$ the ring of integers of $K$? Justify your answer.

---

### Answers to Practice Questions

1.  **Definition:**
    *   The **ring of integers** $\mathcal{O}_K$ of a number field $K$ is the set of all algebraic integers within $K$. It forms a commutative ring with unity.
    *   An **integral basis** is a basis for $\mathcal{O}_K$ as a $\mathbb{Z}$-module. If $\{\alpha_1, \dots, \alpha_n\}$ is an integral basis for $K$, then any element $\beta \in \mathcal{O}_K$ can be uniquely expressed as $\beta = c_1 \alpha_1 + \dots + c_n \alpha_n$, where $c_i \in \mathbb{Z}$.

2.  **Example:**
    *   For $K = \mathbb{Q}(\sqrt{5})$, the discriminant $d=5$. Since $5 \equiv 1 \pmod{4}$, the ring of integers is $\mathcal{O}_K = \mathbb{Z}\left[\frac{1+\sqrt{5}}{2}\right]$.
    *   An integral basis is $\left\{1, \frac{1+\sqrt{5}}{2}\right\}$.
    *   Justification: Any element $a + b\sqrt{5}$ with $a, b \in \mathbb{Q}$ that is an algebraic integer must have its coefficients in $\mathbb{Z}$ or half-integers for the $\sqrt{5}$ part. Specifically, if $a+b\sqrt{5}$ is an algebraic integer, then its trace $2a$ and norm $a^2 - 5b^2$ must be integers. If $b$ is not an integer, then for $2a$ to be an integer, $a$ must be of the form $k/2$. For $a^2-5b^2$ to be an integer, we need $a^2 - 5b^2 \in \mathbb{Z}$. If $a = k/2$, then $(k/2)^2 - 5b^2 \in \mathbb{Z}$. If $b$ is also $j/2$, then $k^2/4 - 5j^2/4 \in \mathbb{Z}$, which implies $k^2 - 5j^2$ must be divisible by 4. This occurs when $k$ and $j$ are both odd, which is precisely when the element is in $\mathbb{Z}\left[\frac{1+\sqrt{5}}{2}\right]$.

3.  **Algorithm Concept:**
    The LLL algorithm is useful for computing integral bases because it takes a basis of a lattice (which a set of potential integral basis elements can form) and finds a "short" and "nearly orthogonal" basis. This process helps to:
    *   **Identify and remove redundancies:** If the initial basis is not minimal, LLL can help find shorter vectors.
    *   **Test for completeness:** By reducing candidate bases derived from factorizations of discriminants, LLL helps determine if all necessary basis elements have been found.
    *   **Efficiency:** For large degree fields or complex structures, LLL provides a computationally feasible way to handle the underlying lattice structures of $\mathcal{O}_K$.

4.  **Application:**
    *   **Lattice-Based Cryptography** is a key area.
    *   Explanation: Many lattice-based schemes, like those based on SIS and LWE, are defined over rings of algebraic integers (e.g., cyclotomic fields). These rings, like $\mathbb{Z}[x]/(x^n+1)$, allow for efficient polynomial multiplication using FFT/NTT, which is crucial for the performance of these cryptosystems. The security relies on the hardness of lattice problems in these specific algebraic structures.

5.  **Symbolic Computation:**
    *   A computer algebra system typically represents an algebraic number $\alpha$ by storing its **minimal polynomial** $f(x) \in \mathbb{Q}[x]$ and a numerical approximation that isolates $\alpha$ as a unique root of $f(x)$ within a certain interval or region.
    *   The **integral basis** is crucial for performing arithmetic operations (addition, subtraction, multiplication) on these algebraic numbers. When $\alpha_1$ and $\alpha_2$ are represented using integral bases of their respective number fields (or the same field), their sum or product is computed by expressing the result in terms of that integral basis, ensuring that the result is also correctly represented as an algebraic number.

6.  **Problem:**
    *   Let $K = \mathbb{Q}(\alpha)$ where $\alpha$ is a root of $f(x) = x^3 - 4x + 1 = 0$.
    *   The discriminant of $x^3+px+q$ is $-4p^3 - 27q^2$. For $f(x)$, $p=-4$ and $q=1$.
    *   Discriminant of basis $\{1, \alpha, \alpha^2\}$ is $-4(-4)^3 - 27(1)^2 = -4(-64) - 27 = 256 - 27 = 229$.
    *   **What is the discriminant of the field $K$?**
        The discriminant of the field $D_K$ must divide the discriminant of any integral basis. Since $229$ is a prime number, $D_K$ must be either $229$ or $-229$. In this case, the discriminant of the polynomial $x^3 - 4x + 1$ is indeed the field discriminant $D_K = 229$.
    *   **Is $\mathbb{Z}[\alpha]$ the ring of integers of $K$? Justify your answer.**
        Yes, $\mathbb{Z}[\alpha]$ is the ring of integers of $K$. This is because the discriminant of the basis $\{1, \alpha, \alpha^2\}$ for $\mathbb{Z}[\alpha]$ is $229$, which is the field discriminant $D_K$. If the discriminant of $\mathbb{Z}[\alpha]$ equals the field discriminant, then $\mathcal{O}_K = \mathbb{Z}[\alpha]$.

---

### Important Points to Remember:

*   **$\mathcal{O}_K$ as a Lattice:** The ring of integers $\mathcal{O}_K$ can be viewed as a lattice in $\mathbb{R}^n$ (after choosing embeddings), and integral bases are lattice bases.
*   **LLL is Key:** The LLL algorithm is fundamental for the efficient computation of integral bases and related problems in computational algebraic number theory.
*   **Discriminant as a Tool:** The discriminant of a basis and the field discriminant are critical invariants that guide algorithms for computing $\mathcal{O}_K$ and understanding its structure.
*   **Number Fields for Power:** Algebraic number theory provides the theoretical underpinnings for solving problems that are difficult or impossible over $\mathbb{Q}$, enabling more powerful algorithms in symbolic computation and secure cryptographic systems.
*   **Cyclotomic Fields in Crypto:** Cyclotomic fields (and their rings of integers) are particularly important in modern cryptography due to their efficient arithmetic properties via NTT.
