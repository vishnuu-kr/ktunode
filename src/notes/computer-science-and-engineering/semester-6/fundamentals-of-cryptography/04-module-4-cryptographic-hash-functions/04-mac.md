---
title: "MAC"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 4: Cryptographic Hash Functions "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bce4"
status: "completed"
scrapedAt: "2026-05-20T16:54:13.876Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - Module 4: Cryptographic Hash Functions - MAC

## Topic: Message Authentication Codes (MACs)

### Learning Outcomes:

*   Understand the definition and purpose of Message Authentication Codes (MACs).
*   Distinguish MACs from Hash Functions and Digital Signatures.
*   Explain the different types of MAC algorithms (e.g., HMAC, CBC-MAC).
*   Analyze the security requirements for MACs (collision resistance, preimage resistance, second preimage resistance).
*   Describe common attacks on MAC algorithms.
*   Apply MACs to ensure message integrity and authenticity.

---

### 1. Introduction to Message Authentication Codes (MACs)

*   **Definition:** A Message Authentication Code (MAC), also known as a keyed hash function, is a cryptographic primitive that uses a secret key to generate a tag (or MAC) based on a message.  This tag is then appended to the message. The receiver, who also possesses the secret key, can recalculate the MAC and compare it with the received tag.  If the tags match, the receiver can be reasonably certain that the message has not been tampered with and originates from someone possessing the secret key.

*   **Purpose:**
    *   **Message Integrity:** Ensures the message has not been altered during transmission.
    *   **Message Authentication:** Verifies the origin of the message. It proves that the message was created by someone who knows the secret key.

*   **Key Requirements:**
    *   Requires a *shared secret key* between the sender and receiver.
    *   The key must be securely exchanged beforehand (e.g., using key exchange protocols).

*   **Formal Definition:** A MAC scheme consists of three algorithms:
    *   **Key Generation (Gen):**  A probabilistic algorithm that takes a security parameter as input (e.g., key length) and outputs a secret key *k*.
    *   **Tag Generation (Mac):**  Takes a secret key *k* and a message *m* as input and outputs a tag *t* = Mac(k, m).
    *   **Verification (Vrfy):**  Takes a secret key *k*, a message *m*, and a tag *t* as input and outputs either 1 (valid) or 0 (invalid).  Vrfy(k, m, t) = 1 if and only if *t* is a valid MAC for *m* generated using key *k*.

*   **Mathematical Representation:** If *m* is a message and *k* is the secret key:
    *   Sender computes *t* = Mac(k, *m*) and sends (*m*, *t*) to the receiver.
    *   Receiver receives (*m'*, *t'*) and computes Vrfy(k, *m'*, *t'*)
        *   If Vrfy(k, *m'*, *t'*) = 1, then the receiver accepts the message *m'* as authentic and untampered.
        *   If Vrfy(k, *m'*, *t'*) = 0, then the receiver rejects the message *m'*.

### 2. Differences Between MACs, Hash Functions, and Digital Signatures

| Feature             | MAC                                      | Hash Function                                  | Digital Signature                               |
| ------------------- | ----------------------------------------- | ---------------------------------------------- | ------------------------------------------------- |
| Key Requirement      | Symmetric Key (shared secret)           | No Key (public algorithm)                      | Asymmetric Key (private/public key pair)      |
| Purpose            | Authentication and Integrity            | Integrity (uniqueness of message digest)       | Authentication, Integrity, and Non-Repudiation |
| Key Distribution    | Securely distribute the secret key       | N/A                                             | Public key can be distributed openly            |
| Non-Repudiation      | No                                        | No                                             | Yes                                               |
| Algorithm Complexity | Generally faster than digital signatures | Generally faster than MACs                    | Generally slower than MACs and Hash Functions     |

**Explanation:**

*   **MACs vs. Hash Functions:** Hash functions provide *integrity* by generating a fixed-size "fingerprint" of a message. MACs provide both *integrity* and *authentication* using a secret key.  A hash function is publicly computable; a MAC requires knowledge of a secret key.

*   **MACs vs. Digital Signatures:** Both provide *integrity* and *authentication*. However, digital signatures use *asymmetric cryptography* (public/private key pair), allowing anyone with the public key to verify the signature, but only the holder of the private key can create it. This provides *non-repudiation* (sender cannot deny sending the message). MACs use *symmetric cryptography* (shared secret key), so only parties with the secret key can create and verify the MAC. Therefore, MACs *do not* provide non-repudiation.

### 3. Types of MAC Algorithms

*   **HMAC (Hash-based Message Authentication Code):**
    *   **Most widely used MAC algorithm.**
    *   Uses a cryptographic hash function (e.g., SHA-256, SHA-3) in combination with a secret key.
    *   Designed to be resistant to attacks based on weaknesses of the underlying hash function.
    *   **Construction:**  HMAC(k, m) = H((k' ⊕ opad) || H((k' ⊕ ipad) || m)), where:
        *   H is the hash function.
        *   k is the secret key.
        *   k' is the padded key (padded with zeros if shorter than the hash function's block size, or hashed if longer).
        *   ipad is the "inner padding" (0x36 repeated).
        *   opad is the "outer padding" (0x5C repeated).
        *   || denotes concatenation.
        *   ⊕ denotes XOR.
    *   **Advantages:** Relatively easy to implement, widely available, and standardized.

*   **CBC-MAC (Cipher Block Chaining Message Authentication Code):**
    *   Uses a block cipher (e.g., AES) in CBC mode to compute the MAC.
    *   Only the *last ciphertext block* is used as the MAC tag.
    *   **Important Security Note:**  *CBC-MAC is secure only for fixed-length messages.* If used with variable-length messages, it is vulnerable to forgery attacks.
    *   **Improvements (e.g., EMAC, XCBC):**  More complex variants of CBC-MAC have been developed to address the vulnerabilities associated with variable-length messages.
    *   **Security Issues:** Vulnerable to length-extension attacks if not implemented carefully.

*   **CMAC (Cipher-based MAC):**
    *   Variant of CBC-MAC designed to be secure even with variable-length messages.
    *   It uses two derived subkeys generated from the encryption key, which are applied to the first block and last block of the message (if the message is a multiple of the block size, one subkey is used; otherwise, the other subkey is used).
    *   Less vulnerable to length-extension attacks compared to plain CBC-MAC.
    *   Considered a more secure alternative to CBC-MAC for variable-length messages.

*   **PMAC (Parallel MAC):**
    *   Designed for parallel processing to improve performance.
    *   More complex implementation than HMAC or CBC-MAC.

### 4. Security Requirements for MACs

*   **Security Goal:** An attacker should not be able to forge a valid MAC tag for a new message without knowing the secret key.  This is typically formalized using a *chosen message attack* scenario.

*   **Chosen Message Attack (CMA) Security:**  A MAC scheme is considered secure if an attacker, even after querying the MAC oracle (i.e., being able to obtain MAC tags for messages of their choice), cannot produce a valid MAC tag for a *new* message (one that they didn't already query).

*   **Key Security Properties (to prevent forgery):**

    *   **Collision Resistance (Weak):**  Given a message *m*, it should be computationally infeasible to find a different message *m'* such that Mac(k, m) = Mac(k, m') for the *same* key *k*.  This is weaker than the collision resistance required of hash functions. In the context of MACs, the adversary doesn't have control over the key.

    *   **Preimage Resistance (One-Wayness):**  Given a MAC tag *t*, it should be computationally infeasible to find a message *m* such that Mac(k, m) = *t* without knowing the secret key *k*.

    *   **Second Preimage Resistance (Target Collision Resistance):**  Given a message *m* and its MAC tag *t* = Mac(k, m), it should be computationally infeasible to find a different message *m'* such that Mac(k, m') = *t* without knowing the secret key *k*.

    *   **Important Note:**  These properties are significantly weaker than those required of cryptographic hash functions because the attacker does *not* have access to the secret key during the attack.

### 5. Common Attacks on MAC Algorithms

*   **Brute-Force Attack:** Trying all possible keys until a valid MAC tag is found.  The key length is a critical factor in determining the vulnerability to brute-force attacks.  Sufficiently long keys (e.g., 128 bits or more) are generally considered resistant to brute-force attacks.

*   **Known-Plaintext Attack:** The attacker has access to several messages and their corresponding MAC tags.  The attacker tries to find a pattern or weakness in the MAC algorithm to derive the key or forge new MAC tags.

*   **Chosen-Plaintext Attack:**  The attacker can choose messages and obtain their corresponding MAC tags.  This is a more powerful attack than a known-plaintext attack. CMA security aims to prevent this.

*   **Length-Extension Attack (applies to some MACs like CBC-MAC):**  By knowing the MAC of a message *m*, an attacker can compute the MAC of a related message *m || padding || m'*, even without knowing the secret key. This is possible because the MAC computation is stateful, and the attacker can use the MAC of *m* as the initial state for computing the MAC of the extended message. HMAC is designed to prevent length extension attacks.

*   **Collision Attacks (on underlying hash functions used in HMAC):**  While HMAC is designed to mitigate weaknesses in the underlying hash function, severe vulnerabilities in the hash function itself could still weaken HMAC.  Therefore, it's important to use strong and unbroken hash functions with HMAC.

### 6. Applying MACs for Message Integrity and Authenticity

*   **Process:**
    1.  **Key Agreement:**  The sender and receiver securely agree on a shared secret key *k* using a suitable key exchange protocol (e.g., Diffie-Hellman, ECDH).
    2.  **Tag Generation (Sender):** The sender calculates the MAC tag *t* for the message *m* using the shared secret key *k*: *t* = Mac(k, *m*).
    3.  **Transmission:** The sender sends the message *m* and the MAC tag *t* to the receiver.
    4.  **Verification (Receiver):** The receiver calculates the MAC tag *t'* for the received message *m'* using the shared secret key *k*: *t'* = Mac(k, *m'*).
    5.  **Comparison:** The receiver compares the calculated MAC tag *t'* with the received MAC tag *t*.
        *   If *t'* = *t*, the receiver accepts the message as authentic and untampered.
        *   If *t'* ≠ *t*, the receiver rejects the message as either tampered with or not originating from an authorized sender.

*   **Example Scenario:**  Alice and Bob share a secret key *k*. Alice wants to send a message "Transfer $100 to Bob" to Bob.

    1.  Alice calculates the MAC tag *t* = Mac(k, "Transfer $100 to Bob").
    2.  Alice sends the message and tag: ("Transfer $100 to Bob", *t*).
    3.  Bob receives the message and tag: ("Transfer $100 to Bob", *t*).
    4.  Bob calculates the MAC tag *t'* = Mac(k, "Transfer $100 to Bob").
    5.  Bob compares *t'* with *t*. If they are equal, Bob accepts the message as authentic and executes the transfer. If they are not equal, Bob rejects the message.

*   **Practical Considerations:**

    *   **Key Management:** Securely storing and managing the shared secret key is crucial.
    *   **Key Length:** Choose a sufficiently long key to prevent brute-force attacks.
    *   **Algorithm Selection:** Select a secure MAC algorithm that is appropriate for the application.  HMAC is generally a good choice.
    *   **Implementation Security:**  Implement the MAC algorithm correctly to avoid vulnerabilities.

---

### Practice Questions and Exercises:

1.  **Question:** What are the two primary security properties provided by a MAC algorithm?

    **Answer:** Message integrity and message authentication.

2.  **Question:** Explain the difference between a MAC and a digital signature.

    **Answer:** MACs use symmetric keys (shared secret) and provide authentication and integrity but *not* non-repudiation. Digital signatures use asymmetric keys (public/private) and provide authentication, integrity, and non-repudiation.  Anyone can verify a digital signature with the public key, while only those with the shared secret key can verify a MAC.

3.  **Question:** Why is CBC-MAC insecure for variable-length messages without modifications?

    **Answer:** CBC-MAC is vulnerable to length-extension attacks. An attacker knowing the MAC of a message can forge the MAC of an extended message without knowing the key.

4.  **Question:** What is HMAC, and why is it widely used?

    **Answer:** HMAC (Hash-based Message Authentication Code) is a MAC algorithm that uses a cryptographic hash function and a secret key. It is widely used because it's relatively easy to implement, standardized, widely available, and resistant to many attacks that target weaknesses in the underlying hash function.

5. **Exercise:** Alice and Bob share a secret key `1234567890abcdef`.  Using HMAC-SHA256 (for simplicity, you can use an online HMAC calculator if needed), Alice wants to send the message "Hello Bob". Calculate the MAC tag and show what Alice would send to Bob.

   **Answer:**
   1.  Key (k) = `1234567890abcdef`
   2.  Message (m) = "Hello Bob"
   3.  Using HMAC-SHA256 with the key and message, we get a MAC tag (t) = `e74b9933c225e5a2b1a629017e67b4b4e994f6e0b243f867d926002812b32c7b`  (This value may vary slightly depending on the specific HMAC calculator used).
   4.  Alice sends:  ("Hello Bob", `e74b9933c225e5a2b1a629017e67b4b4e994f6e0b243f867d926002812b32c7b`)

6.  **Exercise:** Explain how a chosen-message attack on a MAC algorithm might work, and why it's a threat to security.

    **Answer:** In a chosen-message attack, the attacker can ask the MAC algorithm to generate MAC tags for any messages of their choosing.  The attacker then analyzes these message-tag pairs to try and find patterns or weaknesses in the algorithm that could allow them to forge a valid tag for a *new* message, one they didn't query. If the attacker succeeds, they can authenticate a message of their choice as if it came from someone with the secret key, compromising the integrity and authenticity of the system.

---

### Important Points to Remember:

*   MACs provide authentication and integrity using a shared secret key.
*   MACs do not provide non-repudiation (unlike digital signatures).
*   HMAC is a widely used and generally secure MAC algorithm.
*   Secure key management is crucial for MAC security.
*   Choose a MAC algorithm and key length appropriate for the security requirements of the application.
*   Avoid using CBC-MAC for variable-length messages unless proper mitigation techniques are employed (CMAC is a better option).
*   Implementations must be correct to avoid vulnerabilities.
