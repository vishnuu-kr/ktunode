---
title: "Cryptographic Protocols - Key exchange protocols"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 3: Public Key Cryptography "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb45"
status: "completed"
scrapedAt: "2026-05-20T17:24:19.562Z"
---
# Computational Number Theory: Module 3 - Public Key Cryptography

## Topic: Cryptographic Protocols - Key Exchange Protocols

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

*   Understand the fundamental problem of secure key exchange in cryptography.
*   Explain the principles behind public key cryptography and its application to key exchange.
*   Describe the Diffie-Hellman key exchange protocol, its mathematical underpinnings, and its security.
*   Analyze the strengths and weaknesses of the Diffie-Hellman protocol.
*   Discuss variations and improvements to the Diffie-Hellman protocol, such as the Elliptic Curve Diffie-Hellman (ECDH) protocol.
*   Understand the concept of man-in-the-middle attacks on key exchange protocols and how to mitigate them.
*   Recognize the role of digital signatures and certificates in authenticating key exchange.
*   Appreciate the practical applications of key exchange protocols in modern secure communication.

---

### **1. Introduction to Key Exchange Problem**

*   **The Challenge:** In symmetric cryptography, both parties need to share a secret key to encrypt and decrypt messages. The fundamental problem is *how to securely establish this shared secret key* over an insecure channel.
*   **Traditional Approach (Symmetric Key Distribution):**
    *   **Pre-shared Key:** If parties have a pre-existing secret, they can use it to encrypt subsequent communications. This is secure but doesn't scale well for many participants.
    *   **Trusted Third Party (KDC):** A trusted Key Distribution Center (KDC) can generate and distribute session keys. This requires a secure channel to the KDC.
*   **The Need for Public Key Cryptography:** Public key cryptography offers a revolutionary solution by enabling key exchange without prior shared secrets or a trusted third party in the initial setup.

---

### **2. Public Key Cryptography and Key Exchange**

*   **Core Idea:** Each participant has a pair of keys:
    *   **Public Key:** Can be shared with anyone. Used for encryption or signature verification.
    *   **Private Key:** Must be kept secret. Used for decryption or signature generation.
*   **Key Exchange using Public Key Cryptography:**
    *   **Scenario:** Alice wants to establish a secret key with Bob over an insecure channel.
    *   **Process:**
        1.  Alice generates her public/private key pair.
        2.  Bob generates his public/private key pair.
        3.  Alice publishes her public key.
        4.  Bob publishes his public key.
        5.  Alice encrypts a randomly generated secret key (or a value that can be used to derive a secret key) using Bob's public key.
        6.  Alice sends the encrypted secret to Bob.
        7.  Bob decrypts the message using his private key to obtain the secret key.
        8.  Now both Alice and Bob have the same secret key for symmetric encryption.
*   **Mathematical Basis:** Relies on computationally hard problems that are easy to compute in one direction but difficult to reverse. Common examples:
    *   Integer factorization (e.g., RSA)
    *   Discrete logarithm problem (DLP) (e.g., Diffie-Hellman)

---

### **3. The Diffie-Hellman Key Exchange Protocol**

*   **Objective:** To allow two parties (Alice and Bob) to establish a shared secret key over an insecure channel without any prior secret.
*   **Mathematical Underpinning:** The Discrete Logarithm Problem (DLP).
    *   **DLP:** Given $g$ and $g^x \pmod{p}$, find $x$. This is computationally hard for large prime $p$ and generator $g$.
*   **Protocol Steps:**
    1.  **Public Parameters:** Alice and Bob agree on a large prime number $p$ and a generator $g$ of the multiplicative group $\mathbb{Z}_p^*$. These are public and can be transmitted over an insecure channel.
        *   `p`: A large prime number.
        *   `g`: A primitive root modulo $p$ (or an element of high order).
    2.  **Alice's Actions:**
        *   Chooses a secret integer $a$, where $1 \le a < p-1$.
        *   Computes her public value $A = g^a \pmod{p}$.
        *   Sends $A$ to Bob.
    3.  **Bob's Actions:**
        *   Chooses a secret integer $b$, where $1 \le b < p-1$.
        *   Computes his public value $B = g^b \pmod{p}$.
        *   Sends $B$ to Alice.
    4.  **Shared Secret Calculation:**
        *   **Alice:** Computes the shared secret $S = B^a \pmod{p}$.
            *   $S = (g^b)^a \pmod{p} = g^{ba} \pmod{p}$
        *   **Bob:** Computes the shared secret $S = A^b \pmod{p}$.
            *   $S = (g^a)^b \pmod{p} = g^{ab} \pmod{p}$
    *   **Result:** Both Alice and Bob arrive at the same shared secret $S = g^{ab} \pmod{p}$.

*   **Example (Small Numbers for Illustration):**
    *   Let $p = 23$ and $g = 5$.
    *   **Alice:**
        *   Chooses secret $a = 6$.
        *   Computes $A = 5^6 \pmod{23}$.
        *   $5^1 \equiv 5 \pmod{23}$
        *   $5^2 \equiv 25 \equiv 2 \pmod{23}$
        *   $5^3 \equiv 5 \times 2 = 10 \pmod{23}$
        *   $5^6 = (5^3)^2 \equiv 10^2 = 100 \equiv 100 - 4 \times 23 = 100 - 92 = 8 \pmod{23}$.
        *   Alice sends $A = 8$ to Bob.
    *   **Bob:**
        *   Chooses secret $b = 15$.
        *   Computes $B = 5^{15} \pmod{23}$.
        *   $5^6 \equiv 8 \pmod{23}$
        *   $5^{12} = (5^6)^2 \equiv 8^2 = 64 \equiv 64 - 2 \times 23 = 64 - 46 = 18 \pmod{23}$
        *   $5^{15} = 5^{12} \times 5^3 \equiv 18 \times 10 = 180 \pmod{23}$
        *   $180 \div 23 = 7$ with remainder $19$. So, $180 \equiv 19 \pmod{23}$.
        *   Bob sends $B = 19$ to Alice.
    *   **Shared Secret Calculation:**
        *   **Alice:** $S = B^a \pmod{23} = 19^6 \pmod{23}$.
            *   $19 \equiv -4 \pmod{23}$
            *   $S \equiv (-4)^6 \pmod{23} = 4^6 \pmod{23}$
            *   $4^1 \equiv 4 \pmod{23}$
            *   $4^2 \equiv 16 \pmod{23}$
            *   $4^3 \equiv 4 \times 16 = 64 \equiv 18 \pmod{23}$
            *   $4^6 = (4^3)^2 \equiv 18^2 = 324 \pmod{23}$
            *   $324 \div 23 = 14$ with remainder $2$. So, $324 \equiv 2 \pmod{23}$.
            *   Alice computes $S = 2$.
        *   **Bob:** $S = A^b \pmod{23} = 8^{15} \pmod{23}$.
            *   $8^1 \equiv 8 \pmod{23}$
            *   $8^2 \equiv 64 \equiv 18 \pmod{23}$
            *   $8^3 \equiv 8 \times 18 = 144 \pmod{23}$
            *   $144 \div 23 = 6$ with remainder $6$. So, $144 \equiv 6 \pmod{23}$.
            *   $8^6 = (8^3)^2 \equiv 6^2 = 36 \equiv 13 \pmod{23}$
            *   $8^{12} = (8^6)^2 \equiv 13^2 = 169 \pmod{23}$
            *   $169 \div 23 = 7$ with remainder $8$. So, $169 \equiv 8 \pmod{23}$.
            *   $8^{15} = 8^{12} \times 8^3 \equiv 8 \times 6 = 48 \pmod{23}$
            *   $48 \div 23 = 2$ with remainder $2$. So, $48 \equiv 2 \pmod{23}$.
            *   Bob computes $S = 2$.
    *   They successfully established a shared secret of 2.

---

### **4. Security of Diffie-Hellman**

*   **Computational Diffie-Hellman (CDH) Problem:** Given $g$, $g^a \pmod{p}$, and $g^b \pmod{p}$, compute $g^{ab} \pmod{p}$. The security of Diffie-Hellman relies on the assumption that the CDH problem is computationally hard.
*   **Relationship to DLP:** If an attacker can solve the Discrete Logarithm Problem, they can break Diffie-Hellman.
    *   If an attacker knows $A = g^a \pmod{p}$, they can compute $a = \log_g A \pmod{p}$.
    *   Once they have $a$, they can compute the shared secret $S = A^b \pmod{p}$ (if they know $b$) or derive it if they know $B$.
*   **Key Generation:** The security is directly tied to the difficulty of finding the exponents $a$ and $b$ from $g^a \pmod{p}$ and $g^b \pmod{p}$.
*   **Parameter Choice:**
    *   **Prime $p$:** Must be sufficiently large. Typically, 2048 bits or more for current standards.
    *   **Generator $g$:** Should be a generator of a large subgroup of $\mathbb{Z}_p^*$. Using a small subgroup can weaken security.
*   **Strength:** Diffie-Hellman is secure against passive eavesdropping (an attacker listening to the channel). They see $p$, $g$, $A$, and $B$, but cannot compute $g^{ab} \pmod{p}$ without solving DLP.

---

### **5. Man-in-the-Middle (MITM) Attacks**

*   **The Vulnerability:** Diffie-Hellman alone does not provide authentication. An active attacker can impersonate one of the parties.
*   **Attack Scenario:**
    1.  Alice and Bob want to exchange keys.
    2.  Mallory (the attacker) is on the communication channel.
    3.  Alice sends her public value $A$ to Bob.
    4.  Mallory intercepts $A$.
    5.  Mallory generates her own secret $m_A$ and public value $M_A = g^{m_A} \pmod{p}$. Mallory sends $M_A$ to Bob, pretending to be Alice.
    6.  Bob receives $M_A$ and, believing it's from Alice, computes a shared secret with Mallory: $S_{MB} = (M_A)^b \pmod{p} = (g^{m_A})^b \pmod{p} = g^{m_A b} \pmod{p}$. Bob sends his public value $B$ to Alice.
    7.  Mallory intercepts $B$.
    8.  Mallory generates her own secret $m_B$ and public value $M_B = g^{m_B} \pmod{p}$. Mallory sends $M_B$ to Alice, pretending to be Bob.
    9.  Alice receives $M_B$ and, believing it's from Bob, computes a shared secret with Mallory: $S_{AM} = (M_B)^a \pmod{p} = (g^{m_B})^a \pmod{p} = g^{m_B a} \pmod{p}$.
    10. **Mallory's Advantage:**
        *   Mallory has a shared secret $S_{MA} = A^{m_A} \pmod{p} = (g^a)^{m_A} \pmod{p} = g^{am_A} \pmod{p}$ with Alice.
        *   Mallory has a shared secret $S_{MB} = B^{m_B} \pmod{p} = (g^b)^{m_B} \pmod{p} = g^{bm_B} \pmod{p}$ with Bob.
    11. **Interception and Forwarding:**
        *   When Alice sends a message encrypted with $S_{AM}$ to Bob, Mallory intercepts it.
        *   Mallory decrypts the message using $S_{AM}$, reads it, potentially modifies it, encrypts it using $S_{MB}$, and forwards it to Bob.
        *   Similarly, when Bob sends a message to Alice, Mallory intercepts, decrypts, modifies, re-encrypts, and forwards to Alice.

*   **Mitigation:** Authentication is crucial to prevent MITM attacks. This is achieved by verifying the identity of the parties involved in the key exchange.

---

### **6. Authentication in Key Exchange**

*   **The Goal:** To ensure that Alice is indeed talking to Bob, and Bob is indeed talking to Alice.
*   **Methods:**
    1.  **Pre-shared Secrets (Out-of-Band):** Alice and Bob could have a pre-shared secret (e.g., a password) they use to authenticate each other's public values. This is often impractical for large-scale systems.
    2.  **Digital Signatures:**
        *   Each party digitally signs their public value using their private signing key.
        *   The other party verifies the signature using the sender's *public signing key*.
        *   This requires a Public Key Infrastructure (PKI) to reliably obtain public signing keys.
    3.  **Certificates:**
        *   A Certificate Authority (CA) issues digital certificates that bind a public key to an identity (e.g., a person's name or a server's domain name).
        *   When Alice and Bob exchange keys, they also exchange their certificates.
        *   They verify the other's certificate using the CA's public key (which is usually pre-trusted).
        *   They then use the public key from the verified certificate for authentication during the key exchange.
*   **Authenticated Diffie-Hellman:**
    *   **Certificado-based DH:** Bob sends his certificate (containing his public DH key and identity) to Alice. Alice verifies the certificate. Alice sends her certificate to Bob. Bob verifies. Both use the verified public keys for DH.
    *   **Signature-based DH:** Alice generates $A$. She signs $A$ with her private key, producing $sig_A$. She sends $(A, sig_A)$ to Bob. Bob verifies $sig_A$ using Alice's public key. Bob generates $B$. He signs $B$ with his private key, producing $sig_B$. He sends $(B, sig_B)$ to Alice. Alice verifies $sig_B$ using Bob's public key.

---

### **7. Variations and Improvements**

*   **ElGamal Key Exchange:** While often described as an encryption scheme, ElGamal can be used for key exchange.
    *   Alice wants to establish a secret key with Bob.
    *   Bob has a public key $(p, g, y=g^b \pmod{p})$ and private key $b$.
    *   Alice chooses a random secret $k$.
    *   Alice computes $c_1 = g^k \pmod{p}$ and $c_2 = y^k \cdot M \pmod{p}$, where $M$ is the message (could be a secret key).
    *   Alice sends $(c_1, c_2)$ to Bob.
    *   Bob computes $M = c_2 \cdot (c_1^b)^{-1} \pmod{p}$.
    *   This can be adapted for key exchange by letting $M$ be a randomly generated key.
*   **Elliptic Curve Diffie-Hellman (ECDH):**
    *   **Principle:** Similar to Diffie-Hellman, but uses operations on points on an elliptic curve over a finite field.
    *   **Mathematical Basis:** The Elliptic Curve Discrete Logarithm Problem (ECDLP), which is considered harder than the standard DLP for the same key size.
    *   **Advantages:**
        *   **Smaller Key Sizes:** ECDH provides equivalent security to DH with significantly smaller key sizes (e.g., 256-bit ECC keys are roughly equivalent to 3072-bit DH keys). This leads to faster computations and less bandwidth usage.
        *   **Efficiency:** Faster computations, especially on constrained devices.
    *   **Protocol Steps (ECDH):**
        1.  **Public Parameters:** Agree on an elliptic curve $E$, a finite field $F_q$, and a base point $G$ on the curve with prime order $n$.
        2.  **Alice:**
            *   Chooses a secret integer $a$, where $1 \le a < n$.
            *   Computes her public point $A = aG$ (scalar multiplication of $G$ by $a$).
            *   Sends $A$ to Bob.
        3.  **Bob:**
            *   Chooses a secret integer $b$, where $1 \le b < n$.
            *   Computes his public point $B = bG$.
            *   Sends $B$ to Alice.
        4.  **Shared Secret Calculation:**
            *   **Alice:** Computes the shared secret point $S = aB = a(bG) = (ab)G$.
            *   **Bob:** Computes the shared secret point $S = bA = b(aG) = (ba)G$.
        5.  The shared secret is then derived from the coordinates of the point $S$. For example, if $S=(x,y)$, the shared secret can be $x$.

---

### **8. Practical Applications**

*   **TLS/SSL (Transport Layer Security/Secure Sockets Layer):** Used to secure web browsing (HTTPS). During the TLS handshake, Diffie-Hellman or ECDH is commonly used to establish a session key.
*   **SSH (Secure Shell):** Used for secure remote login and file transfer. Also uses key exchange protocols.
*   **VPNs (Virtual Private Networks):** Securely connect networks or devices.
*   **IPsec (Internet Protocol Security):** Provides security for IP communications.
*   **Messaging Applications:** End-to-end encrypted messaging often uses ephemeral key exchange derived from ECDH.

---

### **9. Important Points to Remember**

*   **The Goal of Key Exchange:** To securely establish a shared secret key over an insecure channel.
*   **Diffie-Hellman's Security Basis:** The computational hardness of the Discrete Logarithm Problem (DLP) and the Computational Diffie-Hellman (CDH) problem.
*   **Diffie-Hellman Vulnerability:** Susceptible to Man-in-the-Middle (MITM) attacks if not authenticated.
*   **Authentication is Key:** Digital signatures and certificates are essential to prevent MITM attacks.
*   **ECDH vs. DH:** ECDH offers equivalent security with smaller key sizes and better performance.
*   **Parameter Strength:** The security of DH and ECDH depends heavily on the strength of the chosen parameters ($p$, $g$ for DH; curve, base point, order for ECDH).

---

### **10. Practice Questions and Exercises**

**Question 1:**
Explain the fundamental problem that key exchange protocols aim to solve.

**Question 2:**
Describe the Diffie-Hellman key exchange protocol step-by-step. What mathematical problem is its security based upon?

**Question 3:**
Illustrate a Man-in-the-Middle attack on the basic Diffie-Hellman protocol. How can this attack be prevented?

**Question 4:**
Compare and contrast Diffie-Hellman (DH) and Elliptic Curve Diffie-Hellman (ECDH) in terms of their underlying mathematics, security, and performance.

**Question 5:**
Alice and Bob agree to use Diffie-Hellman with $p = 101$ and $g = 2$.
    *   Alice chooses a secret $a = 17$. What is her public value $A$?
    *   Bob chooses a secret $b = 23$. What is his public value $B$?
    *   Calculate the shared secret $S$ that Alice and Bob will derive. Show your work.

---

### **Answers to Practice Questions**

**Answer 1:**
The fundamental problem that key exchange protocols aim to solve is the secure establishment of a shared secret key between two parties over an insecure communication channel. In symmetric cryptography, both parties need the same key to encrypt and decrypt messages. The challenge is to distribute this key without an eavesdropper being able to intercept and learn it.

**Answer 2:**
The Diffie-Hellman key exchange protocol allows two parties to establish a shared secret key over an insecure channel.
1.  **Agreement on Public Parameters:** Alice and Bob agree on a large prime number $p$ and a generator $g$ of the multiplicative group $\mathbb{Z}_p^*$. These are public.
2.  **Alice's Private and Public Values:** Alice chooses a secret integer $a$ ($1 \le a < p-1$) and computes her public value $A = g^a \pmod{p}$.
3.  **Bob's Private and Public Values:** Bob chooses a secret integer $b$ ($1 \le b < p-1$) and computes his public value $B = g^b \pmod{p}$.
4.  **Exchange Public Values:** Alice sends $A$ to Bob, and Bob sends $B$ to Alice over the insecure channel.
5.  **Shared Secret Calculation:**
    *   Alice computes $S = B^a \pmod{p}$.
    *   Bob computes $S = A^b \pmod{p}$.
    Both calculations result in $S = g^{ab} \pmod{p}$.

The security of Diffie-Hellman is based on the computational hardness of the **Discrete Logarithm Problem (DLP)**: given $g$, $p$, and $g^x \pmod{p}$, it is computationally infeasible to find $x$. Specifically, the **Computational Diffie-Hellman (CDH)** problem (given $g^a$ and $g^b$, find $g^{ab}$) is the basis for its security.

**Answer 3:**
**Man-in-the-Middle (MITM) Attack:**
Mallory (M) intercepts the communication between Alice (A) and Bob (B).
1.  Alice chooses secret $a$, computes $A = g^a \pmod p$, and sends $A$ to Bob.
2.  Mallory intercepts $A$.
3.  Mallory chooses her own secret $m_A$, computes $M_A = g^{m_A} \pmod p$, and sends $M_A$ to Bob, pretending to be Alice.
4.  Bob receives $M_A$ and computes a shared secret with Mallory: $S_{MB} = (M_A)^b \pmod p = g^{m_A b} \pmod p$. Bob then sends his public value $B = g^b \pmod p$ to Alice.
5.  Mallory intercepts $B$.
6.  Mallory chooses her own secret $m_B$, computes $M_B = g^{m_B} \pmod p$, and sends $M_B$ to Alice, pretending to be Bob.
7.  Alice receives $M_B$ and computes a shared secret with Mallory: $S_{AM} = (M_B)^a \pmod p = g^{m_B a} \pmod p$.

Now Mallory shares secret $S_{AM}$ with Alice and $S_{MB}$ with Bob. Mallory can decrypt/encrypt messages between Alice and Bob transparently.

**Prevention:**
This attack can be prevented by **authentication**. Alice and Bob must verify each other's identity during the key exchange. This can be done using:
*   **Digital Signatures:** Alice signs her public value $A$ with her private signing key, and Bob verifies it with Alice's public signing key. Similarly, Bob signs his public value $B$.
*   **Certificates:** Alice and Bob exchange their digital certificates issued by a trusted Certificate Authority. They verify the certificates and then use the public keys within the certificates to authenticate their Diffie-Hellman values.

**Answer 4:**
| Feature                | Diffie-Hellman (DH)                                    | Elliptic Curve Diffie-Hellman (ECDH)                                         |
| :--------------------- | :----------------------------------------------------- | :--------------------------------------------------------------------------- |
| **Underlying Math**    | Modular exponentiation in $\mathbb{Z}_p^*$            | Scalar multiplication of points on an elliptic curve                         |
| **Hard Problem**       | Discrete Logarithm Problem (DLP), Computational DH (CDH) | Elliptic Curve Discrete Logarithm Problem (ECDLP)                            |
| **Key Sizes**          | Larger (e.g., 2048-3072 bits for comparable security)  | Smaller (e.g., 256-384 bits for comparable security)                         |
| **Performance**        | Slower due to large numbers                            | Faster computations, less bandwidth                                          |
| **Security Equivalence** | Requires larger keys for equivalent security           | Achieves higher security with smaller keys                                   |
| **Protocol Structure** | Exponents $a, b$ computed as $g^a, g^b$               | Points $A, B$ computed as $aG, bG$                                          |
| **Shared Secret**      | $g^{ab} \pmod p$                                       | Point $S = abG$ (often derived from coordinates)                             |

**Answer 5:**
Given $p = 101$ and $g = 2$.
Alice chooses secret $a = 17$.
Bob chooses secret $b = 23$.

*   **Alice's Public Value (A):**
    $A = g^a \pmod{p} = 2^{17} \pmod{101}$
    $2^1 \equiv 2$
    $2^2 \equiv 4$
    $2^4 \equiv 16$
    $2^8 \equiv 16^2 = 256 \equiv 256 - 2 \times 101 = 256 - 202 = 54 \pmod{101}$
    $2^{16} \equiv 54^2 = 2916 \pmod{101}$
    $2916 \div 101 = 28$ with remainder $88$. So, $2^{16} \equiv 88 \pmod{101}$.
    $A = 2^{17} = 2^{16} \times 2^1 \equiv 88 \times 2 = 176 \pmod{101}$
    $176 \div 101 = 1$ with remainder $75$. So, $A \equiv 75 \pmod{101}$.
    Alice's public value $A = 75$.

*   **Bob's Public Value (B):**
    $B = g^b \pmod{p} = 2^{23} \pmod{101}$
    $2^{23} = 2^{16} \times 2^4 \times 2^2 \times 2^1 \equiv 88 \times 16 \times 4 \times 2 \pmod{101}$
    $88 \times 16 = 1408 \pmod{101}$
    $1408 \div 101 = 13$ with remainder $95$. So, $1408 \equiv 95 \pmod{101}$.
    $B \equiv 95 \times 4 \times 2 \pmod{101}$
    $95 \times 4 = 380 \pmod{101}$
    $380 \div 101 = 3$ with remainder $77$. So, $380 \equiv 77 \pmod{101}$.
    $B \equiv 77 \times 2 = 154 \pmod{101}$
    $154 \div 101 = 1$ with remainder $53$. So, $B \equiv 53 \pmod{101}$.
    Bob's public value $B = 53$.

*   **Shared Secret (S):**
    *   **Alice's calculation:** $S = B^a \pmod{101} = 53^{17} \pmod{101}$
        $53^1 \equiv 53$
        $53^2 \equiv 2809 \equiv 2809 - 27 \times 101 = 2809 - 2727 = 82 \pmod{101}$
        $53^4 \equiv 82^2 = 6724 \pmod{101}$
        $6724 \div 101 = 66$ with remainder $58$. So, $53^4 \equiv 58 \pmod{101}$.
        $53^8 \equiv 58^2 = 3364 \pmod{101}$
        $3364 \div 101 = 33$ with remainder $31$. So, $53^8 \equiv 31 \pmod{101}$.
        $53^{16} \equiv 31^2 = 961 \pmod{101}$
        $961 \div 101 = 9$ with remainder $52$. So, $53^{16} \equiv 52 \pmod{101}$.
        $S = 53^{17} = 53^{16} \times 53^1 \equiv 52 \times 53 \pmod{101}$
        $52 \times 53 = 2756 \pmod{101}$
        $2756 \div 101 = 27$ with remainder $29$. So, $S \equiv 29 \pmod{101}$.
        Alice computes $S = 29$.

    *   **Bob's calculation:** $S = A^b \pmod{101} = 75^{23} \pmod{101}$
        $75 \equiv -26 \pmod{101}$
        $75^1 \equiv 75$
        $75^2 \equiv (-26)^2 = 676 \pmod{101}$
        $676 \div 101 = 6$ with remainder $70$. So, $75^2 \equiv 70 \pmod{101}$.
        $75^4 \equiv 70^2 = 4900 \pmod{101}$
        $4900 \div 101 = 48$ with remainder $52$. So, $75^4 \equiv 52 \pmod{101}$.
        $75^8 \equiv 52^2 = 2704 \pmod{101}$
        $2704 \div 101 = 26$ with remainder $78$. So, $75^8 \equiv 78 \pmod{101}$.
        $75^{16} \equiv 78^2 = 6084 \pmod{101}$
        $6084 \div 101 = 60$ with remainder $24$. So, $75^{16} \equiv 24 \pmod{101}$.
        $S = 75^{23} = 75^{16} \times 75^4 \times 75^2 \times 75^1 \pmod{101}$
        $S \equiv 24 \times 52 \times 70 \times 75 \pmod{101}$
        $24 \times 52 = 1248 \pmod{101}$
        $1248 \div 101 = 12$ with remainder $36$. So, $1248 \equiv 36 \pmod{101}$.
        $S \equiv 36 \times 70 \times 75 \pmod{101}$
        $36 \times 70 = 2520 \pmod{101}$
        $2520 \div 101 = 25$ with remainder $-5$. So, $2520 \equiv -5 \equiv 96 \pmod{101}$.
        $S \equiv 96 \times 75 \pmod{101}$
        $96 \equiv -5 \pmod{101}$
        $S \equiv (-5) \times 75 = -375 \pmod{101}$
        $-375 \div 101 = -3$ with remainder $-72$. So, $-375 \equiv -72 \equiv 29 \pmod{101}$.
        Bob computes $S = 29$.

Both Alice and Bob arrive at the same shared secret, $S = 29$.
