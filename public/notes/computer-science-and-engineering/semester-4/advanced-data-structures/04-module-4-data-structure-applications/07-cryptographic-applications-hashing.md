---
title: "Cryptographic Applications – Hashing"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 4: Data Structure applications "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b37d"
status: "completed"
scrapedAt: "2026-05-20T16:10:22.064Z"
---
## ADVANCED DATA STRUCTURES: Module 4 - Data Structure Applications: Cryptographic Applications – Hashing

**Learning Outcomes:**

*   Understand the basic principles of cryptography and its relationship with hashing.
*   Describe cryptographic hash functions and their properties.
*   Explain different types of cryptographic hash functions (e.g., MD5, SHA-1, SHA-256, SHA-3).
*   Apply cryptographic hash functions in various security applications such as password storage, data integrity verification, and digital signatures.
*   Identify common attacks on hash functions and understand techniques to mitigate them.
*   Compare and contrast cryptographic hash functions with general hash functions used in data structures.

**1. Introduction to Cryptography and Hashing**

*   **Cryptography:** The art and science of concealing information. It encompasses techniques for encryption, decryption, authentication, and integrity verification.

*   **Relationship with Hashing:**  Hashing, particularly *cryptographic hashing*, plays a crucial role in cryptography. It provides a one-way function to create a fixed-size representation (hash value) of a potentially large amount of data. This hash value can be used for verifying data integrity and storing sensitive information securely.  It is a fundamental building block used extensively.

*   **Hashing in General:** A hash function maps data of arbitrary size to data of a fixed size.  Used extensively in data structures like hash tables for efficient data retrieval.

**2. Cryptographic Hash Functions: Definition and Properties**

*   **Definition:** A cryptographic hash function is a mathematical function that takes an input (or 'message') and produces a fixed-size output called a hash value or digest. It's designed to be a one-way function, meaning it's computationally infeasible to reverse the process (i.e., find the input given the output).

*   **Key Properties:**

    *   **Pre-image Resistance (One-Way Property):** Given a hash value *h*, it should be computationally infeasible to find any input *m* such that *hash(m) = h*.

    *   **Second Pre-image Resistance (Weak Collision Resistance):** Given an input *m1*, it should be computationally infeasible to find a different input *m2* such that *hash(m1) = hash(m2)*.

    *   **Collision Resistance (Strong Collision Resistance):** It should be computationally infeasible to find *any* two distinct inputs *m1* and *m2* such that *hash(m1) = hash(m2)*. Collision resistance implies second pre-image resistance.

    *   **Deterministic:** For a given input, the hash function always produces the same output.

    *   **Uniformity:** The hash function should distribute the output hash values uniformly across the possible range.

    *   **Avalanche Effect:** A small change in the input should result in a significant and unpredictable change in the output.

**3. Types of Cryptographic Hash Functions**

*   **MD5 (Message Digest Algorithm 5):**

    *   Historically popular, but now considered *broken* due to discovered vulnerabilities and collision attacks.
    *   Produces a 128-bit hash value.
    *   **Do not use MD5 for security-critical applications.**

*   **SHA-1 (Secure Hash Algorithm 1):**

    *   Also considered *deprecated* due to discovered vulnerabilities and collision attacks (though more secure than MD5).
    *   Produces a 160-bit hash value.
    *   **Do not use SHA-1 for new security-critical applications.**

*   **SHA-2 (Secure Hash Algorithm 2):**

    *   A family of hash functions including SHA-224, SHA-256, SHA-384, and SHA-512.
    *   SHA-256 and SHA-512 are widely used and generally considered secure.
    *   Produces hash values of different lengths (224, 256, 384, or 512 bits).
    *   **SHA-256 is a common and relatively secure choice.**

*   **SHA-3 (Secure Hash Algorithm 3):**

    *   Designed as an alternative to SHA-2 in case vulnerabilities were found in the latter.
    *   Based on the Keccak algorithm, which is fundamentally different from the MD5/SHA-1/SHA-2 family.
    *   Offers various output lengths (e.g., SHA3-224, SHA3-256, SHA3-384, SHA3-512).
    *   **SHA-3 is a modern, secure, and versatile option.**

**Example (Python using `hashlib`):**

```python
import hashlib

message = "This is a sample message."

# SHA-256
sha256_hash = hashlib.sha256(message.encode('utf-8')).hexdigest()
print("SHA-256 Hash:", sha256_hash)

# SHA-3-256
sha3_256_hash = hashlib.sha3_256(message.encode('utf-8')).hexdigest()
print("SHA-3-256 Hash:", sha3_256_hash)

# MD5 (for demonstration purposes ONLY - DO NOT USE IN PRODUCTION)
md5_hash = hashlib.md5(message.encode('utf-8')).hexdigest()
print("MD5 Hash:", md5_hash)
```

**4. Applications of Cryptographic Hash Functions**

*   **Password Storage:**
    *   Passwords are *never* stored in plaintext.
    *   Instead, passwords are hashed using a cryptographic hash function *and salted* (a random value added to the password before hashing) to protect against rainbow table attacks.
    *   When a user tries to log in, the entered password is salted with the same salt and hashed. The resulting hash is compared to the stored hash.
    *   Example:  `hash(salt + password)`

*   **Data Integrity Verification:**
    *   Hash functions can be used to verify that data has not been tampered with.
    *   A hash of the data is calculated and stored. Later, the data is hashed again, and the two hashes are compared. If they match, the data is considered intact.
    *   Commonly used for file downloads, software updates, and database integrity checks.

*   **Digital Signatures:**
    *   Hash functions are used to create a unique fingerprint of a document.
    *   This fingerprint is then encrypted using the sender's private key to create a digital signature.
    *   The recipient can decrypt the signature using the sender's public key and compare the decrypted hash with the hash of the received document. If they match, the signature is valid, and the document's authenticity and integrity are verified.

*   **Message Authentication Codes (MACs):**
    *   MACs use a secret key in conjunction with a hash function to provide both data integrity and authentication.
    *   HMAC (Hash-based Message Authentication Code) is a common type of MAC.
    *   HMAC provides stronger security than simply hashing the message with a secret key.

*   **Blockchain Technology:**
    *   Hashing is a fundamental building block in blockchains.
    *   Each block in the chain contains a hash of the previous block, ensuring the integrity of the entire chain.
    *   Any tampering with a block would change its hash and, consequently, the hashes of all subsequent blocks, making the tampering easily detectable.

**5. Attacks on Hash Functions and Mitigation Techniques**

*   **Pre-image Attack:** Attempting to find an input that produces a given hash value. Mitigated by using strong hash functions with large output sizes.

*   **Second Pre-image Attack:** Attempting to find a different input that produces the same hash value as a given input. Mitigated by using strong hash functions.

*   **Collision Attack:** Attempting to find two different inputs that produce the same hash value.  Mitigated by using strong hash functions and increasing the output size (e.g., using SHA-256 instead of SHA-1).

*   **Birthday Attack:** A type of collision attack that exploits the mathematics of probability.  The probability of finding a collision increases much faster than one might intuitively expect.  The number of hashes required to have a 50% chance of finding a collision is approximately the square root of the total number of possible hash values.  Mitigated by using hash functions with sufficiently large output sizes (at least 256 bits is generally recommended).

*   **Rainbow Table Attack:** A precomputed table of hashes used to crack passwords. Mitigated by using *salting* – adding a unique random value to each password before hashing.

*   **Side-Channel Attacks:** Attacks that exploit implementation details or vulnerabilities in the hardware. Mitigation involves using secure coding practices, hardware security modules (HSMs), and constant-time algorithms.

**Mitigation Techniques Summary:**

*   **Use Strong Hash Functions:** Choose cryptographic hash functions that are known to be resistant to attacks (e.g., SHA-256, SHA-3).  Avoid MD5 and SHA-1.

*   **Use Salting for Password Storage:**  Always add a unique, random salt to passwords before hashing. Store the salt alongside the hashed password.

*   **Key Stretching:** Repeat the hashing process multiple times (e.g., using bcrypt, scrypt, Argon2) to make password cracking more computationally expensive.

*   **Regularly Update Hash Functions:** Keep up with security advisories and migrate to newer, more secure hash functions as needed.

**6. Comparison with General Hash Functions**

| Feature          | Cryptographic Hash Function                                  | General Hash Function (e.g., for Hash Tables)                   |
| ---------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| **Security Goal** | Data integrity, authentication, password storage             | Efficient data lookup, uniform distribution                  |
| **Collision Resistance** | Extremely high resistance to collisions; computationally infeasible to find collisions. | Designed to minimize collisions, but not necessarily computationally infeasible. |
| **Pre-image Resistance** | Yes (essential)                                            | No (not a requirement)                                      |
| **Second Pre-image Resistance** | Yes (essential)                                            | No (not a requirement)                                      |
| **Performance**    | Generally slower due to complex operations.                   | Generally faster for efficient data lookup.                  |
| **Output Size**    | Fixed and usually larger (e.g., 256 bits or more).         | Can vary depending on the application; often smaller.         |
| **Example**        | SHA-256, SHA-3, bcrypt                                       | MurmurHash, CityHash, Java's `hashCode()`                    |

**Important Points to Remember:**

*   **Never store passwords in plaintext.**
*   **Always use salting with password hashing.**
*   **MD5 and SHA-1 are considered deprecated and should not be used for new security-critical applications.**
*   **Choose a cryptographic hash function appropriate for the security requirements of the application.**
*   **Stay up-to-date on the latest security advisories regarding hash function vulnerabilities.**
*   **Understand the limitations of hash functions and use them in conjunction with other security measures.**

**Practice Questions/Exercises:**

1.  **Explain the difference between a collision attack and a pre-image attack on a cryptographic hash function.**
    *   **Answer:** A *collision attack* aims to find two different inputs that produce the same hash value. A *pre-image attack* aims to find *any* input that produces a given hash value. Collision resistance is a stronger property to maintain than pre-image resistance.

2.  **Why is salting important when storing passwords using hash functions?**
    *   **Answer:** Salting protects against rainbow table attacks, which use precomputed tables of hashes to quickly crack passwords.  By adding a unique, random salt to each password before hashing, the rainbow tables become useless because the attacker would need to generate a separate rainbow table for each salt value.

3.  **Which cryptographic hash function would you recommend for a new application requiring data integrity verification?  Why?**
    *   **Answer:** SHA-256 or SHA-3 are good choices. SHA-256 is widely used, well-understood, and generally considered secure. SHA-3 is a modern alternative based on a different algorithm (Keccak) and offers comparable security.  Avoid using MD5 or SHA-1.

4.  **What is the avalanche effect, and why is it important for cryptographic hash functions?**
    *   **Answer:** The avalanche effect means that a small change in the input results in a significant and unpredictable change in the output (hash value). It's important because it makes it much harder for an attacker to analyze the hash function and predict how changing the input will affect the output.  It contributes to pre-image and collision resistance.

5.  **Implement a simple password storage system using Python and SHA-256.  Include salting.**

```python
import hashlib
import os

def hash_password(password):
  """Hashes a password using SHA-256 with a randomly generated salt."""
  salt = os.urandom(16)  # Generate a random 16-byte salt
  salted_password = salt + password.encode('utf-8')
  hashed_password = hashlib.sha256(salted_password).hexdigest()
  return salt.hex(), hashed_password

def verify_password(password, stored_salt, stored_hash):
  """Verifies a password against a stored salt and hash."""
  salt = bytes.fromhex(stored_salt)
  salted_password = salt + password.encode('utf-8')
  hashed_password = hashlib.sha256(salted_password).hexdigest()
  return hashed_password == stored_hash

# Example usage:
password = "mysecretpassword"
salt, hash = hash_password(password)

print("Salt:", salt)
print("Hashed password:", hash)

# Verification
entered_password = "mysecretpassword"
if verify_password(entered_password, salt, hash):
  print("Password verified!")
else:
  print("Password incorrect.")

entered_password = "wrongpassword"
if verify_password(entered_password, salt, hash):
  print("Password verified!")
else:
  print("Password incorrect.")
```

This markdown provides a comprehensive overview of cryptographic hashing, covering its principles, properties, types, applications, and potential attacks. It also includes practical examples and exercises to reinforce understanding. Remember to choose appropriate hash functions and mitigation techniques for real-world security applications.
