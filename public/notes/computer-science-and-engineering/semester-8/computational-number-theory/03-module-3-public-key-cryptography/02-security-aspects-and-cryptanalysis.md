---
title: "Security aspects and cryptanalysis"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 3: Public Key Cryptography "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb42"
status: "completed"
scrapedAt: "2026-05-20T17:24:17.464Z"
---
# COMPUTATIONAL NUMBER THEORY - Module 3: Public Key Cryptography

## Topic: Security Aspects and Cryptanalysis

This module delves into the crucial aspects of ensuring the security of public key cryptographic systems and the methods used to break them (cryptanalysis). We will explore the fundamental assumptions underpinning the security of these systems and the mathematical challenges that make them resistant to attack.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the core security assumptions of public key cryptography.**
*   **Explain the relationship between the hardness of mathematical problems and the security of public key schemes.**
*   **Analyze common cryptanalytic attacks against public key systems.**
*   **Discuss practical considerations for implementing secure public key systems.**
*   **Evaluate the security of different public key algorithms based on their underlying mathematical problems.**

---

### 1. Core Security Assumptions of Public Key Cryptography

The security of public key cryptography (PKC) relies on the assumption that certain mathematical problems are computationally intractable to solve within a reasonable amount of time using the best known algorithms and available computing power. These problems form the "hard problems" that allow for the creation of secure encryption and digital signature schemes.

#### Key Concepts:

*   **Computational Intractability:** A problem is computationally intractable if there is no known algorithm that can solve it efficiently (i.e., in polynomial time with respect to the size of the input).
*   **Asymmetric Cryptography:** Unlike symmetric cryptography, where the same key is used for encryption and decryption, PKC uses a pair of keys: a public key for encryption and a private key for decryption.

#### Major Security Assumptions:

The security of most widely used PKC schemes rests on the difficulty of one or more of the following problems:

*   **Integer Factorization Problem (IFP):**
    *   **Definition:** Given a large composite integer $n$, find its prime factors.
    *   **Relevance:** This is the foundation of the **RSA algorithm**. The security of RSA depends on the fact that factoring large numbers (hundreds or thousands of digits) is extremely difficult.
    *   **Example:** If $n = pq$ where $p$ and $q$ are large primes, knowing $p$ and $q$ allows an attacker to easily derive the private key from the public key. If $n$ cannot be factored efficiently, RSA is secure.

*   **Discrete Logarithm Problem (DLP):**
    *   **Definition:** Given a cyclic group $G$, a generator $g$ of $G$, and an element $h \in G$, find an integer $x$ such that $g^x = h$.
    *   **Relevance:** This is the foundation of **Diffie-Hellman key exchange** and the **ElGamal cryptosystem**.
    *   **Example:** In the multiplicative group of integers modulo a prime $p$, $\mathbb{Z}_p^*$, finding $x$ such that $g^x \equiv h \pmod{p}$ is the DLP. If this problem is hard, it's hard for an attacker to compute the shared secret in Diffie-Hellman or decrypt a message encrypted with ElGamal without the private key.

*   **Elliptic Curve Discrete Logarithm Problem (ECDLP):**
    *   **Definition:** Given an elliptic curve $E$ over a finite field, a base point $P \in E$, and a point $Q \in E$ such that $Q = kP$ for some integer $k$, find the integer $k$.
    *   **Relevance:** This is the foundation of **Elliptic Curve Cryptography (ECC)**. ECDLP is generally considered harder than DLP for groups of comparable size, allowing for shorter key lengths for equivalent security.
    *   **Example:** Similar to DLP, but operations are performed on points of an elliptic curve. Finding the scalar $k$ that multiplies a point $P$ to produce point $Q$ is the ECDLP.

#### Important Point to Remember:

The security of a public key cryptosystem is directly proportional to the computational difficulty of the underlying hard problem.

---

### 2. Relationship Between Hard Problems and Security

The security of PKC systems is not based on absolute impossibility, but on **computational infeasibility**. This means that while a solution *might* exist, the time and resources required to find it are beyond the practical capabilities of attackers.

#### Key Concepts:

*   **Polynomial-Time Algorithms:** Algorithms whose running time is bounded by a polynomial function of the input size. These are considered efficient.
*   **Exponential-Time Algorithms:** Algorithms whose running time grows exponentially with the input size. These are considered inefficient for large inputs.
*   **Key Size:** The length of the keys used in a cryptographic system. Larger key sizes generally increase security but also computational overhead.

#### How Hard Problems Ensure Security:

*   **Encryption:** To decrypt a message encrypted with a public key, an attacker would need to derive the private key or find an alternative way to reverse the encryption process. If the underlying hard problem is intractable, these operations are also intractable.
    *   **Example (RSA):** To decrypt an RSA ciphertext without the private key, an attacker would need to compute the modular exponentiation $m = c^d \pmod{n}$ where $d$ is the private exponent. This requires knowing the prime factors of $n$ to compute $d$. If factoring $n$ is hard, decryption without the private key is hard.

*   **Digital Signatures:** To forge a digital signature, an attacker would need to create a valid signature for a message without possessing the private signing key. This often involves solving the same hard problem that protects the private key.
    *   **Example (DSA):** Forging a DSA signature requires solving the DLP.

#### The Importance of Choosing Strong Parameters:

The "hardness" of these problems is relative to the size of the numbers (or the order of the group) used. Larger numbers and carefully chosen parameters make the problems harder to solve.

*   **Example:** Factoring a 100-digit number is vastly harder than factoring a 10-digit number. Similarly, solving DLP in a group of order $2^{128}$ is much harder than in a group of order $2^{64}$.

---

### 3. Common Cryptanalytic Attacks Against Public Key Systems

Cryptanalysis is the art and science of breaking cryptographic systems. Attackers aim to either recover the private key, decrypt messages without authorization, or forge digital signatures.

#### Key Concepts:

*   **Ciphertext-Only Attack:** The attacker has access only to encrypted messages.
*   **Known-Plaintext Attack:** The attacker has access to some plaintext-ciphertext pairs.
*   **Chosen-Plaintext Attack (CPA):** The attacker can choose plaintexts and obtain their corresponding ciphertexts.
*   **Chosen-Ciphertext Attack (CCA):** The attacker can choose ciphertexts and obtain their corresponding plaintexts. This is generally the strongest type of attack.
*   **Key Recovery Attack:** An attack that aims to recover the secret key.
*   **Existential Forgery:** An attacker can create a valid signature for *some* message, but not necessarily a specific message chosen by the attacker.

#### Attack Categories:

*   **Mathematical Attacks:** These attacks exploit weaknesses or inefficiencies in the mathematical algorithms or the choice of parameters.

    *   **Factoring Attacks (against RSA):**
        *   **Pollard's rho algorithm:** A probabilistic algorithm for integer factorization.
        *   **Quadratic Sieve (QS) and Number Field Sieve (NFS):** More advanced algorithms that are currently the most efficient for factoring large numbers of the size used in RSA. The security of RSA depends on the fact that these algorithms are not efficient enough for the chosen key sizes.
        *   **Small Public Exponent Attack:** If the public exponent $e$ in RSA is too small (e.g., $e=3$) and the message is also small, it might be possible to recover the plaintext without factoring $n$. Padding schemes (like OAEP) prevent this.

    *   **Discrete Logarithm Attacks (against Diffie-Hellman, ElGamal, DSA):**
        *   **Baby-step giant-step algorithm:** An algorithm for solving DLP in groups.
        *   **Pollard's rho algorithm for DLP:** Similar to its factoring counterpart, but for DLP.
        *   **Index Calculus:** A family of algorithms that can solve DLP in certain groups, particularly in $\mathbb{Z}_p^*$. The security of DLP-based systems often relies on using groups where index calculus is not efficient.
        *   **Small Subgroup Attack:** If the order of the group used in DLP is not a large prime, or if the generator is not carefully chosen, an attacker might be able to recover the private key by working in a smaller subgroup.

    *   **Elliptic Curve Discrete Logarithm Attacks (against ECC):**
        *   **Shor's Algorithm:** A quantum algorithm that can solve IFP, DLP, and ECDLP in polynomial time. This is a significant threat to current PKC if large-scale quantum computers become available.
        *   **MOV (Menezes-Okamoto-Vanstone) Attack:** If an elliptic curve is chosen from a special class (supersingular curves), ECDLP can be reduced to DLP in a finite field, making it susceptible to index calculus methods. Modern ECC implementations avoid such curves.
        *   **ECDLP algorithms:** Similar to DLP algorithms, but adapted for elliptic curves. For equivalent security, ECC typically uses much smaller key sizes than RSA or Diffie-Hellman.

*   **Side-Channel Attacks:** These attacks exploit information leaked from the physical implementation of the cryptographic system, rather than directly attacking the mathematical algorithms.

    *   **Timing Attacks:** Observing the time it takes for cryptographic operations. Different inputs might lead to slightly different execution times, revealing information about the secret key.
    *   **Power Analysis:** Monitoring the power consumption of a device during cryptographic operations.
    *   **Electromagnetic Emanation Attacks:** Analyzing electromagnetic radiation emitted by the device.
    *   **Fault Injection Attacks:** Inducing errors in the computation to reveal information.

*   **Implementation Flaws:** Vulnerabilities arising from errors or insecure practices in the software or hardware implementation of cryptographic algorithms.

    *   **Incorrect padding:** Improperly implemented padding schemes can lead to attacks (e.g., Bleichenbacher's attack on RSA with PKCS#1 v1.5).
    *   **Insecure random number generation:** Predictable or weak random numbers can compromise key generation and other critical processes.
    *   **Side-channel leakage in implementation:** Even without active side-channel attacks, poorly implemented algorithms might unintentionally leak information.

#### Example of an Attack:

**Bleichenbacher's Attack on RSA with PKCS#1 v1.5 padding:**

*   **Scenario:** An attacker wants to decrypt an RSA-encrypted message.
*   **Attack:** The attacker sends many slightly modified ciphertexts to the server. If the server's padding oracle (a mechanism that checks if padding is correct) returns an error for certain modifications, the attacker can deduce information about the plaintext, eventually allowing them to decrypt the original message.
*   **Mitigation:** Use secure padding schemes like OAEP, which do not reveal information about the padding structure.

#### Important Point to Remember:

The security of a public key system depends not only on the strength of the underlying mathematical problem but also on a secure implementation and the use of appropriate padding schemes.

---

### 4. Practical Considerations for Implementing Secure Public Key Systems

Beyond the theoretical hardness of mathematical problems, real-world security requires careful attention to practical implementation details.

#### Key Concepts:

*   **Key Management:** The secure generation, storage, distribution, and destruction of cryptographic keys.
*   **Hybrid Cryptography:** Combining public key cryptography with symmetric cryptography for efficiency.
*   **Hybrid Encryption:**
    *   Generate a random symmetric key (e.g., AES key).
    *   Encrypt the actual message using this symmetric key (fast).
    *   Encrypt the symmetric key using the recipient's public key (slower but for key exchange).
    *   The recipient uses their private key to decrypt the symmetric key, then uses it to decrypt the message.
    *   This approach leverages the efficiency of symmetric encryption for bulk data and the key exchange capabilities of PKC.

#### Practical Considerations:

*   **Key Length:**
    *   Choose key lengths that are considered secure against current and foreseeable computational capabilities.
    *   **RSA:** Currently, 2048-bit keys are considered a minimum, with 3072-bit or 4096-bit keys recommended for longer-term security.
    *   **ECC:** Equivalent security is achieved with much shorter keys. For example, ECC-256 offers security comparable to RSA-3072.

*   **Parameter Selection:**
    *   Carefully select the primes for RSA and the groups for DLP/ECDLP. Weak parameters can make the underlying problems easier to solve.
    *   Use standardized and well-vetted parameter sets for ECC.

*   **Padding Schemes:**
    *   Always use secure padding schemes (e.g., OAEP for RSA encryption, PSS for RSA signatures) to prevent various attacks.
    *   Avoid outdated or vulnerable padding schemes like PKCS#1 v1.5 for encryption in new applications.

*   **Random Number Generation (RNG):**
    *   Use cryptographically secure pseudorandom number generators (CSPRNGs) for generating keys and other random values.
    *   Ensure the RNG has sufficient entropy and is not predictable.

*   **Key Management Practices:**
    *   **Key Generation:** Securely generate keys, ensuring randomness and appropriate length.
    *   **Key Storage:** Protect private keys from unauthorized access (e.g., using hardware security modules (HSMs), secure storage mechanisms).
    *   **Key Distribution:** Securely distribute public keys (e.g., via certificates and Public Key Infrastructure (PKI)).
    *   **Key Revocation:** Have mechanisms to revoke compromised keys.
    *   **Key Lifecycle Management:** Define policies for key usage, rotation, and destruction.

*   **Algorithm Choice:**
    *   Understand the trade-offs between different algorithms (RSA, Diffie-Hellman, DSA, ECC) in terms of security, performance, and key size.
    *   ECC is generally favored for its efficiency and smaller key sizes.

*   **Quantum Computing Threat:**
    *   Be aware of the potential future threat posed by quantum computers to current PKC algorithms.
    *   Research and consider post-quantum cryptography (PQC) algorithms for long-term security.

#### Example of Hybrid Cryptography (TLS/SSL):

When you visit a secure website (HTTPS), your browser and the server use a hybrid approach:

1.  The server's public key (in its certificate) is used to securely exchange a temporary symmetric key.
2.  This temporary symmetric key is then used to encrypt all the subsequent communication (like the web page content) using a fast symmetric cipher like AES.

---

### 5. Practice Questions or Exercises with Answers

**Question 1:**

Which mathematical problem is the primary security assumption for the RSA algorithm?

**Answer:** The Integer Factorization Problem (IFP).

**Question 2:**

Explain the difference between a timing attack and a chosen-plaintext attack.

**Answer:**
*   **Timing Attack:** Exploits variations in the execution time of cryptographic operations to infer information about the secret key. The attacker observes how long computations take.
*   **Chosen-Plaintext Attack (CPA):** The attacker can select arbitrary plaintexts and obtain their corresponding ciphertexts. This allows them to gather data about the encryption function's behavior.

**Question 3:**

Why is it important to use padding schemes like OAEP with RSA encryption?

**Answer:** Padding schemes like OAEP are crucial to prevent various attacks, such as:
*   **Small message attacks:** Where if the message is smaller than the modulus, the ciphertext might reveal the plaintext directly.
*   **Chosen-ciphertext attacks:** Where the structure of RSA can be exploited if messages are not properly randomized or padded.
*   **Determinism:** OAEP adds randomness, making the encryption of the same plaintext result in different ciphertexts.

**Question 4:**

If a quantum computer were powerful enough, which of the following common PKC algorithms would be directly vulnerable?
a) RSA
b) Diffie-Hellman
c) ElGamal
d) All of the above

**Answer:** d) All of the above. Shor's algorithm, a quantum algorithm, can efficiently solve the Integer Factorization Problem (underlying RSA) and the Discrete Logarithm Problem (underlying Diffie-Hellman and ElGamal).

**Question 5:**

You are designing a new secure communication system. What are two key practical considerations you must address to ensure the security of your public key infrastructure?

**Answer:** Two key considerations could be:
1.  **Secure Key Management:** Implementing robust procedures for generating, storing, distributing, and revoking cryptographic keys to prevent unauthorized access or misuse.
2.  **Appropriate Key Lengths and Parameter Selection:** Choosing sufficiently long keys (e.g., RSA-3072 or ECC-256) and carefully selected parameters for the underlying mathematical problems to resist current and future cryptanalytic attacks.
3.  **Use of Secure Padding Schemes:** Employing modern and secure padding mechanisms (like OAEP) for encryption to prevent known vulnerabilities.

---

### 6. Important Points to Remember

*   **Security is based on Computational Hardship:** Public key cryptography relies on the assumption that certain mathematical problems are too difficult to solve in a practical timeframe with current computing resources.
*   **Hard Problems:** Key examples include Integer Factorization (RSA) and Discrete Logarithm/Elliptic Curve Discrete Logarithm (Diffie-Hellman, ElGamal, ECC).
*   **Attacks Exploit Weaknesses:** Cryptanalytic attacks aim to break these systems by finding efficient solutions to the underlying hard problems or by exploiting implementation flaws and side channels.
*   **Key Size Matters:** The security level of a PKC system is directly related to the size of the keys used. Larger keys generally offer higher security but come with performance overhead.
*   **Implementation is Critical:** Theoretical security is not enough. Secure implementation, including proper padding, strong random number generation, and secure key management, is paramount.
*   **Hybrid Cryptography is Standard Practice:** For efficiency, PKC is often used to establish a secure channel for exchanging symmetric keys, which are then used for bulk data encryption.
*   **The Quantum Threat:** The development of quantum computers poses a significant future threat to many current PKC algorithms. Research into post-quantum cryptography is ongoing.

---

This concludes the study notes for Security Aspects and Cryptanalysis in Public Key Cryptography. Understanding these concepts is vital for appreciating the robustness and potential vulnerabilities of modern cryptographic systems.
