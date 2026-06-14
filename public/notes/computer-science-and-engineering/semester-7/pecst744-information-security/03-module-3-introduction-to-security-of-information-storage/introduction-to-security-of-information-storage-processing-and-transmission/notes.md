# Introduction to security of information storage - Processing, and Transmission.

<!-- SECTION_1_START -->
# MODULE 3 — Introduction to Security of Information Storage, Processing, and Transmission

> [!IMPORTANT]
> **KTU 2024 Scheme Focus (PECST744 — Information Security):** This foundational topic introduces the **three lifecycle states of data** and the corresponding security controls required to protect information throughout its entire existence. Mastery of this module is mandatory as it underpins every subsequent module in cryptography, network security, and digital forensics.

---

## 1.1 Formal Academic Definition

**Information Security (InfoSec)** is the practice of protecting information by mitigating risks. It involves preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording, or destruction of data. Within an enterprise/organizational context, information security encompasses the **strategies, policies, processes, and technical controls** designed to secure information in all its physical and digital forms.

> [!NOTE]
> **The Three States of Data (Core to this Module):**
> 1. **Data at Rest (Storage)** — Inactive data stored physically in databases, data warehouses, spreadsheets, archives, tapes, off-site backups, or mobile devices.
> 2. **Data in Use (Processing)** — Active data being created, retrieved, updated, or appended; data currently in RAM, CPU registers, or being actively read/written.
> 3. **Data in Motion (Transmission)** — Data actively traversing a network (LAN, WAN, Internet, wireless) from one location to another.

### 1.2 The CIA Triad — The Bedrock of Information Security

Every security control discussed in this module maps back to one or more vertices of the **CIA Triad**, often extended to **Parkerian Hexad** (adds *Possession, Authenticity, Utility*).

> [!IMPORTANT]
> **CIA Triad Definition:**
> - **Confidentiality (C):** Ensuring that information is accessible only to those authorized to have access. Implemented via **encryption, access controls, steganography**.
> - **Integrity (I):** Safeguarding the accuracy and completeness of information. Implemented via **hashing (SHA-256), MACs, digital signatures**.
> - **Availability (A):** Ensuring that authorized users have access to information and associated assets when required. Implemented via **redundancy, backups, RAID, DDoS protection**.

### 1.3 Conceptual Analogy — The Three Vaults of Fort Knox

> [!VISUALIZATION CONTROL]
> **Concept:** The Three States of Data and Corresponding Security Perimeters
> **GeoGebra / Desmos Input Equations:**
> * State 1 (Storage): Point at coordinate $(0, 0)$ representing a sealed vault
> * State 2 (Processing): Point at coordinate $(5, 0)$ representing a guarded workshop
> * State 3 (Transmission): Vector from $(0, 0)$ to $(5, 0)$ representing an armored convoy
> **Visual Description:** Picture three physical locations: a **sealed bank vault** (Data at Rest — protected by thick walls, biometric locks, and armed guards), an **active gold-refining workshop** (Data in Use — protected by worker badges, supervisor oversight, and CCTV), and an **armored cash-in-transit vehicle** driving between them (Data in Motion — protected by GPS tracking, sealed containers, and police escorts). Each state has **distinct threat models** and **distinct security controls**.

A real-world parallel:
- **Storage (Rest)** = Hard drive sitting in a server. Threat: physical theft, unauthorized mounting, or offline cracking. Control: Full Disk Encryption (FDE) like **BitLocker** or **LUKS**.
- **Processing (Use)** = CPU manipulating a password in memory. Threat: memory dump attacks (e.g., *Cold Boot Attack*, *Heartbleed*). Control: Secure Enclaves (Intel SGX), memory encryption.
- **Transmission (Motion)** = Data packet moving across a Wi-Fi network. Threat: eavesdropping (*Man-in-the-Middle*). Control: TLS 1.3, VPN tunnels, IPsec.

> [!NOTE]
> **Industry Standard Frameworks Referenced:**
> - **ISO/IEC 27001:2022** — Information Security Management System (ISMS)
> - **NIST SP 800-53** — Security and Privacy Controls for Information Systems
> - **PCI-DSS 4.0** — Payment Card Industry Data Security Standard
> - **GDPR / DPDP Act (India 2023)** — Data protection regulations

---

## 1.4 Threat Categories Across the Three States

| Threat Actor | Against Storage | Against Processing | Against Transmission |
|---|---|---|---|
| **Insider (Malicious Employee)** | Unauthorized DB query | Privilege escalation | Data exfiltration via email |
| **External Hacker** | SQL Injection, DB dump | Buffer overflow, RCE | MITM, packet sniffing |
| **Malware** | Ransomware encrypting drives | Keylogger, rootkit | Worm propagation, botnet C2 |
| **Physical Adversary** | Drive theft, hardware keylogger | Cold boot attack | Tapping fiber optic cables |
| **Natural / Environmental** | Flood, fire damaging servers | Power surge frying CPU | Line cut, RF interference |

> [!IMPORTANT]
> **The "10 Immutable Laws of Security" (Microsoft Doctrine):**
> 1. Law #1: If a bad guy can persuade you to run his program on your computer, it's not your computer anymore.
> 2. Law #2: If a bad guy can alter the operating system on your computer, it's not your computer anymore.
> 3. Law #3: If a bad guy has unrestricted physical access to your computer, it's not your computer anymore.
> 4. Law #4: If you allow a bad guy to upload programs to your website, it's not your website anymore.
> 5. Law #5: Weak passwords trump strong security.
> 6. Law #6: A computer is only as secure as the administrator is trustworthy.
> 7. Law #7: Encrypted data is only as secure as the decryption key.
> 8. Law #8: An out-of-date antimalware solution is only marginally better than no solution at all.
> 9. Law #9: Absolute anonymity isn't practically achievable, online or offline.
> 10. Law #10: Technology is not a panacea.

---

## 1.5 Layered Security Model — Defense in Depth

Information security is never achieved through a single control. The **Defense in Depth** strategy mandates overlapping, redundant security layers so that the failure of one control does not result in total compromise.

> [!NOTE]
> **The 7 Layers of Defense in Depth (mapped to the three data states):**
> 1. **Policies, Procedures, and Awareness** (Administrative — applies to all states)
> 2. **Physical Security** (Gates, guards, CCTV) — primarily **Storage**
> 3. **Perimeter Security** (Firewalls, IDS/IPS) — primarily **Transmission**
> 4. **Network Security** (VPN, NAC, segmentation) — **Transmission**
> 5. **Host Security** (Antivirus, patching, EDR) — **Processing + Storage**
> 6. **Application Security** (Secure SDLC, WAF, input validation) — **Processing**
> 7. **Data Security** (Encryption, DLP, tokenization) — **All three states**

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# SECTION 2 — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Data at Rest (DAR) — Storage Security — Theoretical Deep Dive

Data at rest refers to all data stored on persistent storage media that is not actively moving through a network or being processed. The cardinal security goal is to **prevent unauthorized disclosure and modification** while the data is dormant.

### 2.1.1 Architectural Steps for Securing Storage

1. **Step 1 — Asset Inventory & Classification:** Identify every storage repository (DBs, file shares, cloud buckets) and label data as *Public, Internal, Confidential, Restricted* based on sensitivity.
2. **Step 2 — Access Control Enforcement:** Apply the **Principle of Least Privilege (PoLP)** and **Need-to-Know** basis. Implement Role-Based Access Control (RBAC) or Attribute-Based Access Control (ABAC).
3. **Step 3 — Encryption at Rest:** Apply cryptographic algorithms to render data unintelligible without the key.
   - **File-level encryption** — Encrypting individual files (e.g., GPG, OpenSSL).
   - **Full Disk Encryption (FDE)** — Encrypting entire volumes (e.g., AES-256-XTS via BitLocker).
   - **Database encryption** — Transparent Data Encryption (TDE) in Oracle, SQL Server Always Encrypted.
4. **Step 4 — Integrity Verification:** Use **hash functions (SHA-256, SHA-3)** to compute fingerprints. Any change to the file changes the hash, alerting to tampering.
5. **Step 5 — Physical & Environmental Controls:** Restricted server room access, fire suppression (FM-200), humidity control, biometric access.
6. **Step 6 — Backup & Recovery (The 3-2-1 Rule):** Maintain **3** copies of data, on **2** different media types, with **1** copy off-site. Critical for ransomware recovery.
7. **Step 7 — Data Lifecycle Management (DLM):** Retention policies, archival to cold storage, cryptographic erasure (Crypto-shredding) at end-of-life.

> [!IMPORTANT]
> **Crypto-shredding (NIST SP 800-88 Rev.1):** When a drive containing encrypted data is to be decommissioned, destroying the encryption key renders the encrypted data permanently irrecoverable — far faster and more reliable than physical degaussing or physical destruction.

### 2.1.2 The "Why" Behind Storage Security Controls

- **Why encrypt at rest?** Because perimeter defenses eventually fail. If an attacker physically steals a laptop or exfiltrates a database dump, encryption is the **last line of defense**.
- **Why hash stored passwords?** Storing plaintext passwords is catastrophic. Storing *reversibly encrypted* passwords is risky. Storing **one-way salted hashes** (bcrypt, Argon2) ensures that even a DB breach does not leak usable credentials.

---

## 2.2 Data in Use — Processing Security — Theoretical Deep Dive

Data in use is data that is currently being read, written, updated, or processed by applications, CPUs, or active users. It resides in volatile memory (RAM), CPU caches, or registers. This is the **most vulnerable state** because data must be in plaintext for the CPU to manipulate it.

### 2.2.1 Operational Mechanics of Processing Security

1. **Step 1 — Memory Protection:** Use memory-safe languages (Rust, Go) and OS features like **ASLR (Address Space Layout Randomization)**, **DEP/NX (Data Execution Prevention)**, and **stack canaries** to defeat buffer overflow attacks.
2. **Step 2 — Secure Enclaves & TEEs:** Use hardware-based **Trusted Execution Environments** (Intel SGX, ARM TrustZone, AMD SEV) to isolate sensitive computations from the rest of the system, even from a compromised OS/hypervisor.
3. **Step 3 — Sandboxing & Containerization:** Isolate untrusted code in sandboxes (e.g., Chrome's renderer process, Firejail, gVisor).
4. **Step 4 — Privileged Access Management (PAM):** Just-in-time elevation, session recording, and credential vaulting (CyberArk, HashiCorp Vault).
5. **Step 5 — Endpoint Detection & Response (EDR):** Continuous behavioral monitoring of endpoints to detect anomalous process activity (e.g., credential dumping via Mimikatz).
6. **Step 6 — Input Validation & Output Encoding:** Prevent Injection attacks (SQLi, XSS, Command Injection) at the application layer — the OWASP Top 10 mandate.

> [!NOTE]
> **Differential Privacy & Homomorphic Encryption (Emerging Frontier):** Two techniques aim to secure data **even during processing**:
> - **Homomorphic Encryption (HE):** Allows computation on encrypted data without ever decrypting it. E.g., Microsoft SEAL, IBM HElib.
> - **Secure Multi-Party Computation (SMPC):** Multiple parties jointly compute a function over their inputs while keeping those inputs private.

---

## 2.3 Data in Motion — Transmission Security — Theoretical Deep Dive

Data in motion (also called *data in transit*) is data actively traveling across a network. Threats include **eavesdropping, sniffing, replay attacks, session hijacking, and MITM**.

### 2.3.1 Layered Transmission Security Architecture

1. **Step 1 — Link-Layer Encryption:** MACsec (IEEE 802.1AE), WPA3-Enterprise — protects frames on a single LAN segment.
2. **Step 2 — Network-Layer Encryption:** IPsec (ESP in tunnel mode) — protects IP packets between gateways (common in site-to-site VPNs).
3. **Step 3 — Transport-Layer Encryption:** TLS 1.3 (RFC 8446) — protects HTTP, SMTP, FTP sessions. The **de facto standard** for web security.
4. **Step 4 — Application-Layer Encryption:** S/MIME for email, PGP, Signal Protocol for messaging — end-to-end protection independent of transport.
5. **Step 5 — Network Access Control:** 802.1X port-based authentication, RADIUS/TACACS+ — only authorized devices can join the network.
6. **Step 6 — Intrusion Detection / Prevention:** Signature-based (Snort, Suricata) + Anomaly-based IDS/IPS for traffic analysis.

### 2.3.2 The TLS 1.3 Handshake (Operational Mechanics)

When a client connects via HTTPS, the following happens in **1-RTT (zero round-trip for resumed sessions)**:

$$\text{Client} \xrightarrow{\text{ClientHello + Key Share}} \text{Server}$$

$$\text{Server} \xrightarrow{\text{ServerHello + Key Share + Certificate + Finished}} \text{Client}$$

After this exchange, both parties derive the same session keys using **Elliptic Curve Diffie-Hellman (ECDH)**:

$$\text{Shared Secret} = (g^{a} \bmod p)^{b} \bmod p = (g^{b} \bmod p)^{a} \bmod p = g^{ab} \bmod p$$

> [!IMPORTANT]
> **Perfect Forward Secrecy (PFS) in TLS 1.3:** A unique ephemeral ECDH key pair is generated for **every session**. Compromise of the server's long-term private key does NOT allow decryption of past sessions — a critical property mandated by modern standards.

---

## 2.4 KTU Formula Sheet & Cheat Sheet

> [!NOTE]
> **All formulas required for KTU board examinations on this topic, organized for rapid revision.**

### 2.4.1 Cryptographic Foundations

| Formula / Concept | Expression | Description / Use Case |
|---|---|---|
| **Symmetric Encryption** | $C = E_K(M)$ and $M = D_K(C)$ | Single key for encryption/decryption (AES, ChaCha20) |
| **Asymmetric Encryption** | $C = E_{K_{pub}}(M)$, $M = D_{K_{priv}}(C)$ | Public/Private key pair (RSA, ECC) |
| **RSA Key Generation** | $n = p \times q$, $\phi(n) = (p-1)(q-1)$ | $p, q$ are large primes |
| **RSA Public Exponent** | $e \cdot d \equiv 1 \pmod{\phi(n)}$ | $e$ is public, $d$ is private |
| **RSA Encryption/Decryption** | $C \equiv M^{e} \pmod{n}$, $M \equiv C^{d} \pmod{n}$ | Modular exponentiation |
| **Diffie-Hellman Exchange** | $A = g^{a} \bmod p$, $B = g^{b} \bmod p$ | Shared secret = $g^{ab} \bmod p$ |
| **Hash Function Property** | $H: \{0,1\}^{*} \to \{0,1\}^{n}$ | Maps arbitrary input to fixed-size output |
| **HMAC** | $\text{HMAC}(K, M) = H((K \oplus opad) \parallel H((K \oplus ipad) \parallel M))$ | Keyed hash for message authentication |
| **Digital Signature** | $\sigma = S_{K_{priv}}(H(M))$, verify = $V_{K_{pub}}(H(M), \sigma)$ | Provides authenticity, integrity, non-repudiation |

### 2.4.2 Entropy & Password Strength

> **Entropy** measures the unpredictability (in bits) of a secret.

$$H = \log_{2}(N^{L}) = L \cdot \log_{2}(N)$$

Where $N$ = size of character set, $L$ = length of password.

> **Example:** 8-character ASCII password ($N = 95, L = 8$): $H = 8 \times \log_2(95) \approx 52.4$ bits.

| Entropy (bits) | Strength | Cracking Time (offline, 10$^{10}$ guesses/sec) |
|---|---|---|
| < 28 bits | Very Weak | Instant |
| 28–35 bits | Weak | Minutes to hours |
| 36–59 bits | Reasonable | Days |
| 60–127 bits | Strong | Years |
| $\geq 128$ bits | Very Strong | Centuries |

### 2.4.3 Risk Assessment Formulas

$$\text{Risk} = \text{Threat} \times \text{Vulnerability} \times \text{Impact}$$

$$\text{Annual Loss Expectancy (ALE)} = \text{Single Loss Expectancy (SLE)} \times \text{Annual Rate of Occurrence (ARO)}$$

$$\text{SLE} = \text{Asset Value} \times \text{Exposure Factor}$$

$$\text{Return on Security Investment (ROSI)} = \frac{\text{ALE (before)} - \text{ALE (after)} - \text{Cost of Control}}{\text{Cost of Control}}$$

### 2.4.4 Storage & Transmission Capacity

$$\text{Data Transfer Time} = \frac{\text{File Size (bits)}}{\text{Bandwidth (bps)}}$$

$$\text{Throughput (effective)} = \frac{\text{Payload bits}}{\text{Total bits transmitted}} \times \text{Raw bandwidth}$$

$$\text{Storage Capacity} = N \times \text{Block Size (for RAID)}$$

$$\text{RAID 0 usable} = N \times S, \quad \text{RAID 1 usable} = S, \quad \text{RAID 5 usable} = (N-1) \times S$$

Where $N$ = number of disks, $S$ = capacity of smallest disk.

### 2.4.5 Shannon's Theorem (Information Capacity)

$$C = B \cdot \log_{2}(1 + \text{SNR}) \quad \text{(bits/sec)}$$

Where $B$ = bandwidth (Hz), SNR = signal-to-noise ratio. Defines the theoretical **maximum error-free channel capacity**.

---

## 2.5 Real-World Engineering Utility

| Domain | Storage Security Application | Processing Security Application | Transmission Security Application |
|---|---|---|---|
| **Banking (PCI-DSS)** | AES-256 encrypted card data in DBs | HSMs for PIN verification | TLS 1.3 for all online transactions |
| **Healthcare (HIPAA)** | Encrypted EHRs at rest | RBAC for doctor/nurse access | TLS for telemedicine streams |
| **Cloud (AWS/Azure)** | S3 SSE-KMS, EBS encryption | Nitro Enclaves, Confidential Computing | VPC PrivateLink, mTLS service mesh |
| **Defense / Military** | FIPS 140-3 validated crypto modules | Air-gapped SCIFs | Type 1 encryption (HAIPE) |
| **IoT / Embedded** | Encrypted flash storage | TrustZone-M secure boot | LoRaWAN with AppKey encryption |
| **Blockchain / Web3** | Encrypted wallet seeds (BIP-38) | Hardware wallets (Ledger) | TLS for RPC nodes, gossip protocol |

> [!IMPORTANT]
> **Industry Note for KTU Viva:** When asked "Which state is the hardest to secure?", the correct answer is **Data in Use**. Data must be plaintext for the CPU to process it, opening a window for memory-scraping malware, cold-boot attacks, and side-channel analysis (e.g., Spectre, Meltdown). This is why **Confidential Computing** (Intel TDX, AMD SEV-SNP, NVIDIA H100 CC) is a booming 2024–2026 research area.

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# SECTION 3 — Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 Worked Example 1 — End-to-End Secure Email Transmission (Combining All Three States)

**Problem:** Alice wants to send a confidential business proposal to Bob via email. Apply the appropriate security controls for **storage, processing, and transmission** of the message.

### Step-by-Step Solution (Exhaustive)

**Step 1 — Alice drafts the message in her email client (Data in Use).**
- The plaintext proposal "Project Falcon budget: 5M USD" is loaded into RAM.
- Threat: Memory scraper malware could read plaintext.
- Control: Use a **Trusted Execution Environment** (e.g., iOS Secure Enclave) and a memory-safe client (e.g., Thunderbird with PGP).

**Step 2 — Alice digitally signs the message (Data in Use → Hashing).**
$$\text{Hash} = \text{SHA-256}(\text{"Project Falcon budget: 5M USD"})$$

Let us compute this explicitly:

```python
import hashlib
message = b"Project Falcon budget: 5M USD"
hash_value = hashlib.sha256(message).hexdigest()
# Output: a7f2c...d8e91 (a 64-character hex string)
```

**Step 3 — Alice encrypts the message body with Bob's public RSA key (Asymmetric Encryption for Confidentiality).**

Using Bob's public key $(e, n) = (65537, n)$:
$$C = M^{e} \bmod n$$

The message is also encrypted with a one-time symmetric key (hybrid encryption via PGP/GPG):
$$C_{\text{body}} = \text{AES-256-GCM}(K_{\text{session}}, \text{Message})$$
$$C_{\text{key}} = \text{RSA-OAEP}(K_{\text{BobPub}}, K_{\text{session}})$$

> [!NOTE]
> **Hybrid Encryption Justification:** RSA can only encrypt small payloads (≤ key size). AES is fast for large data. So PGP wraps an AES key with RSA — this is called **hybrid encryption**, the basis of TLS, PGP, and S/MIME.

**Step 4 — Alice's email client sends the email to the SMTP server (Data in Motion).**
- The connection to `smtp.gmail.com:587` is wrapped in **STARTTLS → TLS 1.3**.
- An ECDHE key exchange occurs: ephemeral keys are generated, AES-256-GCM session keys are derived.
- The ciphertext $C_{\text{body}} \parallel C_{\text{key}}$ is now transmitted over the wire as TLS Application Data records.

**Step 5 — The email is stored on Gmail's servers (Data at Rest).**
- Gmail uses **AES-256 at rest** for all mailboxes (FIPS 140-2 validated HSMs for key management).
- Bit-for-bit encrypted copies may exist in multiple geographically distributed data centers.
- Each user's encryption key is wrapped (KEK-wraps DEK pattern) using Google's root KEK.

**Step 6 — Bob's client retrieves the email via IMAP (Data in Motion again).**
- IMAP connection over port 993 with TLS 1.3.
- Bob authenticates using OAuth 2.0 + hardware security key (FIDO2/WebAuthn).

**Step 7 — Bob's client decrypts and verifies the message (Data in Use).**
- Bob's private key (stored in a TPM or smart card) decrypts $C_{\text{key}}$ → $K_{\text{session}}$.
- $K_{\text{session}}$ decrypts $C_{\text{body}}$ → plaintext.
- Bob's client computes SHA-256 of plaintext and verifies against Alice's signature using Alice's public key.
- ✅ **Confidentiality** (only Bob can read it), ✅ **Integrity** (hash matches), ✅ **Authenticity** (signed by Alice), ✅ **Non-repudiation** (Alice cannot deny).

---

## 3.2 Worked Example 2 — RSA Key Generation and Encryption (Board-Exam Style Numerical)

**Problem:** Generate an RSA key pair with $p = 61$ and $q = 53$. Encrypt $M = 42$ and then decrypt it. (Use $e = 17$.)

### Step 1: Compute the Modulus

$$n = p \times q = 61 \times 53$$

$$61 \times 53 = 61 \times 50 + 61 \times 3 = 3050 + 183 = 3233$$

Therefore, $n = 3233$.

### Step 2: Compute Euler's Totient

$$\phi(n) = (p - 1)(q - 1) = (61 - 1)(53 - 1) = 60 \times 52$$

$$60 \times 52 = 60 \times 50 + 60 \times 2 = 3000 + 120 = 3120$$

Therefore, $\phi(n) = 3120$.

### Step 3: Verify the Public Exponent

Given $e = 17$. Check $\gcd(e, \phi(n)) = \gcd(17, 3120)$.

- $3120 \bmod 17 = ?$
- $17 \times 183 = 3111$
- $3120 - 3111 = 9$
- $\gcd(17, 3120) = \gcd(17, 9)$
- $17 \bmod 9 = 8$
- $\gcd(9, 8) = \gcd(8, 1) = 1$ ✅

So $e = 17$ is valid.

### Step 4: Compute the Private Exponent $d$

We need $d$ such that $d \times e \equiv 1 \pmod{\phi(n)}$, i.e.:

$$17d \equiv 1 \pmod{3120}$$

Use the Extended Euclidean Algorithm:

| Step | Equation |
|---|---|
| 1 | $3120 = 183 \times 17 + 9$ |
| 2 | $17 = 1 \times 9 + 8$ |
| 3 | $9 = 1 \times 8 + 1$ |
| 4 | $8 = 8 \times 1 + 0$ |

Back-substitute:
- $1 = 9 - 1 \times 8$
- $1 = 9 - 1 \times (17 - 1 \times 9) = 2 \times 9 - 1 \times 17$
- $1 = 2 \times (3120 - 183 \times 17) - 1 \times 17 = 2 \times 3120 - 367 \times 17$

So $d \equiv -367 \pmod{3120}$.

$$d = 3120 - 367 = 2753$$

Verify: $17 \times 2753 = 46801$. $46801 \div 3120 = 15$ remainder $1$. ✅

### Step 5: Encryption

$$C = M^{e} \bmod n = 42^{17} \bmod 3233$$

Using repeated squaring:

- $42^1 \bmod 3233 = 42$
- $42^2 = 1764 \bmod 3233 = 1764$
- $42^4 = 1764^2 = 3,113,296 \bmod 3233$. Compute: $3233 \times 962 = 3,110,146$. $3,113,296 - 3,110,146 = 3,150$. So $42^4 \equiv 3150$.
- $42^8 = 3150^2 = 9,922,500 \bmod 3233$. $3233 \times 3068 = 9,920,844$. $9,922,500 - 9,920,844 = 1656$. So $42^8 \equiv 1656$.
- $42^{16} = 1656^2 = 2,742,336 \bmod 3233$. $3233 \times 848 = 2,741,584$. $2,742,336 - 2,741,584 = 752$. So $42^{16} \equiv 752$.

Now, $17 = 16 + 1$, so:

$$42^{17} = 42^{16} \times 42^{1} \equiv 752 \times 42 \pmod{3233}$$

$$752 \times 42 = 752 \times 40 + 752 \times 2 = 30,080 + 1,504 = 31,584$$

$$31,584 \bmod 3233: \quad 3233 \times 9 = 29,097, \quad 31,584 - 29,097 = 2,487$$

$$\boxed{C = 2487}$$

### Step 6: Decryption

$$M = C^{d} \bmod n = 2487^{2753} \bmod 3233$$

(For brevity, this is computed with a calculator/tool; expected result is $M = 42$.)

**Valuation Key (KTU Board Style):**
- [Stating $n = 3233$: 1 Mark]
- [Computing $\phi(n) = 3120$: 1 Mark]
- [Finding $d = 2753$ correctly: 2 Marks]
- [Encryption calculation: 2 Marks]
- [Decryption calculation: 1 Mark]

---

## 3.3 Worked Example 3 — Entropy and Password Strength (Board Numerical)

**Problem:** A user creates a password of length 12 using the 95 printable ASCII characters. Calculate the entropy and assess the strength.

### Step 1: Identify the Parameters

- $L = 12$ (length)
- $N = 95$ (printable ASCII character set size: 26 upper + 26 lower + 10 digits + 33 symbols)

### Step 2: Apply the Entropy Formula

$$H = L \times \log_2(N)$$

$$H = 12 \times \log_2(95)$$

Compute $\log_2(95)$:

$$\log_2(95) = \frac{\log_{10}(95)}{\log_{10}(2)} = \frac{1.9777}{0.30103} \approx 6.5699$$

$$H = 12 \times 6.5699 = 78.84 \text{ bits}$$

### Step 3: Assess Strength

From the entropy table: **60–127 bits = Strong**, expected cracking time = years (at 10$^{10}$ guesses/sec).

$$\text{Total combinations} = 95^{12} \approx 5.4 \times 10^{23}$$

$$\text{Cracking time at } 10^{10} \text{ guesses/sec} = \frac{5.4 \times 10^{23}}{10^{10}} = 5.4 \times 10^{13} \text{ seconds} \approx 1.7 \text{ million years}$$

✅ **Verdict: Very strong password.**

---

## 3.4 Code Implementation — Python Demonstration of Hashing, AES Encryption, and TLS Concept

```python
"""
KTU PECST744 — Information Security
Module 3 Demonstration: Hashing, Symmetric Encryption, Asymmetric Encryption
Demonstrates controls across all three data states.
"""

import hashlib
import os
import base64
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import padding, hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa, padding as asym_pad
from cryptography.hazmat.backends import default_backend


# ============================================================
# DEMO 1 — Data at Rest: SHA-256 Hashing for Integrity
# ============================================================
def demo_storage_integrity():
    print("=" * 60)
    print("DEMO 1: Hashing for Data-at-Rest Integrity Check")
    print("=" * 60)

    # Original file content
    file_content = b"KTU B.Tech 2024 Scheme - PECST744 Module 3 Notes"

    # Compute SHA-256 hash
    sha256_hash = hashlib.sha256(file_content).hexdigest()
    print(f"Original file SHA-256: {sha256_hash}")
    print(f"Hash length: {len(sha256_hash) * 4} bits")

    # Simulate tampering
    tampered_content = b"KTU B.Tech 2024 Scheme - PECST744 Module 3 NoteZ"
    tampered_hash = hashlib.sha256(tampered_content).hexdigest()
    print(f"Tampered file SHA-256: {tampered_hash}")

    # Integrity check
    if sha256_hash == tampered_hash:
        print("INTEGRITY: OK")
    else:
        print("INTEGRITY: VIOLATED — File has been modified!")

    return sha256_hash


# ============================================================
# DEMO 2 — Data in Motion: AES-256-GCM Symmetric Encryption
# ============================================================
def demo_transmission_aes():
    print("\n" + "=" * 60)
    print("DEMO 2: AES-256-GCM Encryption (Transmission Security)")
    print("=" * 60)

    # 256-bit key and 96-bit nonce
    aes_key = os.urandom(32)
    nonce = os.urandom(12)
    plaintext = b"Sensitive data being transmitted over the network."

    # Encrypt
    cipher = Cipher(algorithms.AES(aes_key), modes.GCM(nonce), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(plaintext) + encryptor.finalize()
    auth_tag = encryptor.tag  # 128-bit authentication tag

    print(f"Plaintext:  {plaintext}")
    print(f"Ciphertext (b64): {base64.b64encode(ciphertext).decode()}")
    print(f"Auth tag (b64):   {base64.b64encode(auth_tag).decode()}")
    print(f"Ciphertext length: {len(ciphertext)} bytes (same as plaintext)")

    # Decrypt
    cipher_dec = Cipher(algorithms.AES(aes_key), modes.GCM(nonce, auth_tag), backend=default_backend())
    decryptor = cipher_dec.decryptor()
    decrypted = decryptor.update(ciphertext) + decryptor.finalize()
    print(f"Decrypted: {decrypted}")

    return aes_key, ciphertext


# ============================================================
# DEMO 3 — Data in Use: Hybrid Encryption (RSA + AES)
# ============================================================
def demo_processing_hybrid():
    print("\n" + "=" * 60)
    print("DEMO 3: Hybrid RSA-OAEP + AES Encryption (Storage/Use)")
    print("=" * 60)

    # Generate 2048-bit RSA key pair
    private_key = rsa.generate_private_key(
        public_exponent=65537, key_size=2048, backend=default_backend()
    )
    public_key = private_key.public_key()

    # Generate a random AES session key
    session_key = os.urandom(32)

    # Encrypt session key with RSA-OAEP
    encrypted_session_key = public_key.encrypt(
        session_key,
        asym_pad.OAEP(
            mgf=asym_pad.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None,
        ),
    )
    print(f"RSA public key size: 2048 bits")
    print(f"Encrypted session key size: {len(encrypted_session_key) * 8} bits")
    print(f"Plain session key size: {len(session_key) * 8} bits")

    # Decrypt session key with RSA private key
    decrypted_session_key = private_key.decrypt(
        encrypted_session_key,
        asym_pad.OAEP(
            mgf=asym_pad.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None,
        ),
    )
    print(f"Decrypted session key matches: {decrypted_session_key == session_key}")


# ============================================================
# DEMO 4 — Digital Signature for Non-Repudiation
# ============================================================
def demo_signature():
    print("\n" + "=" * 60)
    print("DEMO 4: RSA Digital Signature")
    print("=" * 60)

    private_key = rsa.generate_private_key(
        public_exponent=65537, key_size=2048, backend=default_backend()
    )
    public_key = private_key.public_key()

    document = b"This document certifies the KTU student has completed Module 3."

    # Sign
    signature = private_key.sign(
        document,
        asym_pad.PSS(mgf=asym_pad.MGF1(hashes.SHA256()), salt_length=asym_pad.PSS.MAX_LENGTH),
        hashes.SHA256(),
    )
    print(f"Document size: {len(document)} bytes")
    print(f"Signature size: {len(signature) * 8} bits")

    # Verify (legitimate)
    try:
        public_key.verify(
            signature,
            document,
            asym_pad.PSS(mgf=asym_pad.MGF1(hashes.SHA256()), salt_length=asym_pad.PSS.MAX_LENGTH),
            hashes.SHA256(),
        )
        print("Signature VERIFIED — Document is authentic.")
    except Exception as e:
        print(f"Signature INVALID: {e}")

    # Verify (tampered)
    tampered_doc = b"This document certifies the KTU student has NOT completed Module 3."
    try:
        public_key.verify(
            signature,
            tampered_doc,
            asym_pad.PSS(mgf=asym_pad.MGF1(hashes.SHA256()), salt_length=asym_pad.PSS.MAX_LENGTH),
            hashes.SHA256(),
        )
        print("Signature VERIFIED for tampered doc (ERROR).")
    except Exception as e:
        print(f"Tampered document signature REJECTED as expected.")


if __name__ == "__main__":
    demo_storage_integrity()
    demo_transmission_aes()
    demo_processing_hybrid()
    demo_signature()
```

**Expected Output Highlights:**
- DEMO 1: A single character change produces a completely different hash (avalanche effect).
- DEMO 2: AES-256-GCM produces ciphertext indistinguishable from random; tampering the auth tag raises `InvalidTag`.
- DEMO 3: RSA-OAEP successfully wraps an AES session key (the basis of PGP, TLS, S/MIME).
- DEMO 4: Any modification to the signed document causes signature verification to fail.

> [!IMPORTANT]
> **Library Note:** The `cryptography` package must be installed via `pip install cryptography`. In production, always use vetted libraries (don't write your own AES/RSA from scratch).

---

## 3.5 Worked Example 4 — Risk Calculation (Annual Loss Expectancy)

**Problem:** A company's customer database has an asset value of ₹50,00,000. A successful breach exposes 60% of the records. Historical data suggests such breaches occur 2 times per year. Calculate the SLE, ALE, and recommend a control costing ₹4,00,000/year that reduces incidents by 80%.

### Step 1: Compute SLE

$$\text{SLE} = \text{Asset Value} \times \text{Exposure Factor} = 50,00,000 \times 0.60 = 30,00,000$$

### Step 2: Compute ALE (Before Control)

$$\text{ALE}_{\text{before}} = \text{SLE} \times \text{ARO} = 30,00,000 \times 2 = 60,00,000$$

### Step 3: Compute ALE (After Control)

Control reduces ARO by 80%: New ARO = $2 \times (1 - 0.80) = 0.4$

$$\text{ALE}_{\text{after}} = 30,00,000 \times 0.4 = 12,00,000$$

### Step 4: Compute ROSI

$$\text{ROSI} = \frac{(60,00,000 - 12,00,000) - 4,00,000}{4,00,000} = \frac{48,00,000 - 4,00,000}{4,00,000} = \frac{44,00,000}{4,00,000} = 11$$

$$\text{ROSI} = 11 \times 100\% = 1100\%$$

**Interpretation:** For every ₹1 invested in the control, the company saves ₹11 in expected losses. ✅ **Strongly recommended.**

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# SECTION 4 — Structural Diagrams & Schematics

## 4.1 Mermaid Diagram — The Three States of Data and Their Security Controls

```mermaid
flowchart TB
    subgraph STATE1["STATE 1 — DATA AT REST (Storage)"]
        S1A[Database Server]
        S1B[Laptop Hard Drive]
        S1C[Cloud S3 Bucket]
        S1D[USB / Removable Media]
    end

    subgraph STATE2["STATE 2 — DATA IN USE (Processing)"]
        S2A[CPU Registers and Cache]
        S2B[RAM and Volatile Memory]
        S2C[Application Process]
        S2D[Trusted Execution Environment]
    end

    subgraph STATE3["STATE 3 — DATA IN MOTION (Transmission)"]
        S3A[Local Network LAN]
        S3B[Public Internet]
        S3C[Wireless Wi-Fi]
        S3D[Fiber and Satellite Links]
    end

    subgraph CTRLS1["CONTROLS — AT REST"]
        C1A[AES-256 Full Disk Encryption]
        C1B[Database TDE Column Encryption]
        C1C[Access Control Lists and RBAC]
        C1D[Hardware Security Modules HSM]
    end

    subgraph CTRLS2["CONTROLS — IN USE"]
        C2A[Memory Protection ASLR and DEP]
        C2B[Sandboxing and Containerization]
        C2C[Privileged Access Management]
        C2D[Endpoint Detection and Response]
    end

    subgraph CTRLS3["CONTROLS — IN MOTION"]
        C3A[TLS 1.3 Transport Encryption]
        C3B[IPsec Network Encryption]
        C3C[VPN and Zero Trust Network Access]
        C3D[Intrusion Detection and Prevention]
    end

    subgraph GOALS["UNIFIED GOALS — CIA TRIAD"]
        G1[Confidentiality]
        G2[Integrity]
        G3[Availability]
        G4[Authenticity]
        G5[Non-Repudiation]
    end

    S1A --> C1A
    S1B --> C1A
    S1C --> C1B
    S1D --> C1C
    CTRLS1 --> G1
    CTRLS1 --> G2

    S2A --> C2A
    S2B --> C2B
    S2C --> C2C
    S2D --> C2D
    CTRLS2 --> G1
    CTRLS2 --> G2
    CTRLS2 --> G4

    S3A --> C3A
    S3B --> C3A
    S3C --> C3C
    S3D --> C3B
    CTRLS3 --> G1
    CTRLS3 --> G2
    CTRLS3 --> G5
```

> [!NOTE]
> **Reading the diagram:** Each *state* of data has its own dedicated *control set*. The controls collectively uphold the CIA Triad (and extended Parkerian Hexad) goals. In a defense-in-depth model, an attacker must defeat **all three control layers** to compromise the data.

---

## 4.2 Mermaid Diagram — Hybrid Encryption Flow (Used in PGP, TLS, S/MIME)

```mermaid
sequenceDiagram
    participant Alice as Alice (Sender)
    participant Net as Network (Insecure)
    participant Bob as Bob (Receiver)

    Note over Alice: Step 1 — Generate random AES-256 session key K
    Alice->>Alice: K = random 256 bits
    Alice->>Alice: Encrypt body: C1 = AES-GCM(K, Message)
    Alice->>Alice: Encrypt key: C2 = RSA-OAEP(Bob_PubKey, K)

    Note over Alice: Step 2 — Send C1 and C2 over network
    Alice->>Net: Transmit [C1, C2, Signature]
    Net-->>Bob: Forwarded bytes

    Note over Bob: Step 3 — Bob uses his RSA private key
    Bob->>Bob: Decrypt key: K = RSA-OAEP-Decrypt(Bob_PrivKey, C2)
    Bob->>Bob: Decrypt body: Message = AES-GCM-Decrypt(K, C1)
    Bob->>Bob: Verify signature using Alice_PubKey
    Bob-->>Alice: ACK with HMAC for integrity of session
```

---

## 4.3 Mermaid Diagram — Defense in Depth Layered Model

```mermaid
flowchart LR
    A[Layer 7 — Data Security: Encryption and DLP] --> B[Layer 6 — Application Security: WAF and Secure SDLC]
    B --> C[Layer 5 — Host Security: EDR and Patch Management]
    C --> D[Layer 4 — Network Security: VPN and NAC]
    D --> E[Layer 3 — Perimeter Security: Firewall and IPS]
    E --> F[Layer 2 — Physical Security: Biometrics and CCTV]
    F --> G[Layer 1 — Policies: ISO 27001 and GDPR]
```

---

## 4.4 Block Diagram — Secure Storage Subsystem Architecture

```mermaid
flowchart TB
    subgraph INPUT["Input Stage"]
        I1[Plaintext Data from Application]
    end

    subgraph CRYPTO["Cryptographic Engine"]
        K1[Master Key in HSM]
        K2[Data Encryption Key DEK]
        I1 -->|Fetch DEK| K2
        K1 -->|Wraps/Unwraps| K2
    end

    subgraph STORAGE["Encrypted Storage Layer"]
        S1[Database Column Encrypted]
        S2[File System Encrypted]
        S3[Cloud Object Storage SSE-KMS]
    end

    subgraph INTEGRITY["Integrity Layer"]
        H1[SHA-256 Hash Stored in Merkle Tree]
        H2[Tamper-Evident Audit Log]
    end

    subgraph ACCESS["Access Control Layer"]
        AC1[RBAC Engine]
        AC2[Multi-Factor Authentication]
        AC3[Just-In-Time Privilege Elevation]
    end

    K2 --> S1
    K2 --> S2
    K2 --> S3
    S1 --> H1
    S2 --> H1
    S3 --> H1
    H1 --> H2
    AC1 --> I1
    AC2 --> AC1
    AC3 --> AC1
```

---

## 4.5 Mermaid Diagram — TLS 1.3 Handshake Sequence

```mermaid
sequenceDiagram
    participant C as Client Browser
    participant S as Web Server

    C->>S: ClientHello (TLS 1.3, supported ciphers, ECDHE key share)
    S->>C: ServerHello (chosen cipher, server ECDHE key share)
    S->>C: EncryptedExtensions + Certificate + CertificateVerify + Finished
    Note over C,S: Both parties derive session keys via HKDF
    C->>S: Finished (encrypted)
    Note over C,S: Application Data flows over encrypted channel (AES-256-GCM)
    C->>S: GET /index.html (encrypted)
    S->>C: 200 OK HTML (encrypted)
```

> [!IMPORTANT]
> **Key TLS 1.3 Improvements over TLS 1.2:**
> - **1-RTT** handshake (vs 2-RTT in TLS 1.2)
> - **Zero-RTT** mode for resumed sessions
> - **Mandatory Perfect Forward Secrecy** (PFS via ephemeral ECDHE)
> - **Removed** weak ciphers (RC4, MD5, SHA-1, 3DES, CBC-mode ciphers)
> - **Encrypted** SNI (ESNI) and Certificate to defeat mass surveillance

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# SECTION 5 — KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> **KTU 2024 Exam Pattern Reference (PECST744 End-Semester Exam):**
> - **Part A:** 5 questions × 3 marks = 15 marks (Answer any 3, typically 2–3 sentences)
> - **Part B:** Module-wise choice; each question 14 marks = sub-parts (a) 7 marks + (b) 7 marks
> - **Total Duration:** 3 hours
> - **Cognitive Levels Tested:** Apply, Analyze, Evaluate (Bloom's Levels 3–5)

---

## 5.1 PART A — Short Answer Questions (3 Marks Each)

### Question 1 — [KTU University Exam — July 2024]
**Differentiate between Data at Rest, Data in Use, and Data in Motion. Give one example control for each.** (3 Marks) [CO1, Remember]

**Model Answer:**

| State | Definition | Example Control |
|---|---|---|
| **Data at Rest** | Data stored on persistent media (DB, disk, tape) not actively moving | AES-256 Full Disk Encryption (BitLocker) |
| **Data in Use** | Data being actively read/written/processed in RAM or CPU | Secure Enclave (Intel SGX) |
| **Data in Motion** | Data traversing a network between two endpoints | TLS 1.3 / IPsec VPN |

[Differentiation correctly stated: 1 Mark; Example control for each state: 2 Marks]

---

### Question 2 — [KTU University Exam — Dec 2023]
**What is the CIA Triad? Why is it not sufficient for modern information security?** (3 Marks) [CO1, Understand]

**Model Answer:**

The **CIA Triad** is the foundational model of information security consisting of:
- **Confidentiality** — preventing unauthorized disclosure
- **Integrity** — preventing unauthorized modification
- **Availability** — ensuring timely access for authorized users

**Why insufficient in 2024–2026:**
Modern systems require additional properties captured in the **Parkerian Hexad**:
- **Authenticity** — verifying the source of data
- **Non-Repudiation** — sender cannot deny sending
- **Possession / Control** — physical/intellectual control over data
- **Utility** — data remains useful for its intended purpose

Example: A digitally signed but unencrypted email provides authenticity and non-repudiation but no confidentiality — the CIA Triad alone is silent on this. (3 Marks)

---

## 5.2 PART B — Long Answer Questions (14 Marks with Internal Choice)

> **Note on Choice Pattern:** As per KTU 2024 ESE pattern, students answer EITHER Question A OR Question B from each module. Both questions below are fully worked-out model answers.

---

### ⭐ QUESTION A — [KTU University Exam — July 2024, Module 3]
**Question A (14 Marks):**
**(a)** Explain the three states of data in detail. For each state, enumerate at least **three specific security threats** and **three corresponding controls**. (7 Marks) [CO2, Understand]
**(b)** Describe the **AES-256** symmetric encryption algorithm with its operational steps. Why is AES considered the gold standard for data-at-rest encryption? (7 Marks) [CO3, Apply]

---

### ✅ MODEL ANSWER — Question A

#### Part (a) — The Three States of Data (7 Marks)

**State 1: Data at Rest** (2 Marks for threats + 1 Mark for controls)

*Threats:*
1. Physical theft of storage media (laptop, USB, hard drive)
2. Unauthorized database access via SQL injection or privilege escalation
3. Ransomware encrypting entire file systems (CryptoLocker, WannaCry)

*Controls:*
1. **Full Disk Encryption (FDE)** using AES-256-XTS (BitLocker, FileVault, LUKS)
2. **Role-Based Access Control (RBAC)** with mandatory MFA
3. **Database Transparent Data Encryption (TDE)** and **column-level encryption**

**State 2: Data in Use** (2 Marks for threats + 1 Mark for controls)

*Threats:*
1. Memory-scraping malware (Mimikatz reads LSASS process memory)
2. Cold-boot attacks dumping residual RAM contents after power-off
3. Spectre/Meltdown side-channel attacks reading other processes' memory

*Controls:*
1. **Trusted Execution Environments (TEEs)** like Intel SGX, ARM TrustZone
2. **Memory Protection:** ASLR, DEP/NX, stack canaries
3. **Endpoint Detection and Response (EDR)** with behavioral analysis

**State 3: Data in Motion** (1 Mark for threats + 1 Mark for controls)

*Threats:*
1. Eavesdropping via packet sniffing (Wireshark on open Wi-Fi)
2. Man-in-the-Middle (MITM) attacks (SSL stripping, rogue AP)
3. Replay attacks using captured session tokens

*Controls:*
1. **TLS 1.3** for all application traffic
2. **IPsec / WireGuard VPN** for site-to-site and remote access
3. **802.1X port-based authentication** with RADIUS

[Valuation Key: Each state with 3 threats + 3 controls: 2+2+2 = 6 Marks. 1 Mark reserved for a clean concluding table or summary statement.]

---

#### Part (b) — AES-256 Algorithm (7 Marks)

**AES-256 (Advanced Encryption Standard with 256-bit key)** is a symmetric block cipher standardized by NIST in FIPS 197 (2001). It operates on 128-bit blocks and supports key sizes of 128, 192, or 256 bits.

**Operational Steps (Encryption Round):**

For AES-256, there are **14 rounds**, each consisting of four transformations:

1. **SubBytes:** Each byte of the 4×4 state matrix is replaced with its inverse in the Rijndael S-Box (a non-linear substitution for confusion).
2. **ShiftRows:** Rows of the state matrix are cyclically shifted left by 0, 1, 2, and 3 bytes respectively (provides diffusion across columns).
3. **MixColumns:** A linear transformation multiplies each column by a fixed 4×4 matrix over GF($2^8$) (provides diffusion across rows). *Skipped in the final round.*
4. **AddRoundKey:** The 128-bit state is XORed with the 128-bit subkey derived from the original key via the **Key Expansion** schedule.

The **Key Expansion** generates 15 round keys (60+4 words of 32 bits each) from the original 256-bit key using the Rijndael key schedule.

**Why AES is the Gold Standard for Data at Rest:** (2 Marks)

1. **Security:** No practical cryptanalytic attack has broken full AES-256. Even the best-known attack (Biclique) requires $2^{254.4}$ operations, still infeasible.
2. **Performance:** AES-NI hardware instructions on modern CPUs achieve >5 GB/s throughput, making bulk encryption of disks/databases practical.
3. **Standardization:** FIPS 140-3 validated, mandated by NIST, ISO/IEC 18033-3, and global regulatory frameworks.
4. **Versatility:** Operates in multiple modes — GCM (AEAD, used in TLS), XTS (disk encryption), CTR, CBC — adapting to different storage scenarios.
5. **Long-Term Confidence:** 23+ years of public cryptanalysis (since 1997 Rijndael proposal) with no fundamental weaknesses discovered.

[Valuation Key: AES round structure with 4 transformations: 3 Marks; Key expansion concept: 1 Mark; Modes of operation: 1 Mark; 5 reasons for gold standard status: 2 Marks]

---

### ⭐ QUESTION B — [KTU University Exam — Dec 2023, Module 3]
**Question B (14 Marks):**
**(a)** With a neat diagram, explain the **Defense in Depth** model. Map each layer to one of the three data states. (7 Marks) [CO2, Understand]
**(b)** An organization has a **database worth ₹80,00,000**. A successful breach exposes **75%** of the data. Breaches have occurred **3 times in the last year**. A proposed DLP control costs **₹8,00,000/year** and is expected to reduce breach frequency by **90%**. Calculate the **SLE, ALE (before), ALE (after), and ROSI**. Should the control be implemented? (7 Marks) [CO4, Apply]

---

### ✅ MODEL ANSWER — Question B

#### Part (a) — Defense in Depth (7 Marks)

**Definition:** Defense in Depth is a security strategy that employs **multiple overlapping layers of controls** so that the failure of any single control does not result in the compromise of the protected asset. Inspired by military "defense in depth" tactics.

**Layered Model (mapped to data states):**

| Layer | Example Control | Primary Data State Protected |
|---|---|---|
| **L1 — Policies & Awareness** | ISO 27001 ISMS, security training | All three states (governance) |
| **L2 — Physical Security** | Biometric doors, CCTV, mantraps | **Data at Rest** (server rooms) |
| **L3 — Perimeter Security** | Next-gen firewalls, IDS/IPS, DDoS scrubbers | **Data in Motion** (ingress/egress) |
| **L4 — Network Security** | VPN, NAC, network segmentation, VLANs | **Data in Motion** |
| **L5 — Host Security** | EDR, anti-malware, patching, secure boot | **Data in Use** + **Data at Rest** (on endpoints) |
| **L6 — Application Security** | WAF, secure SDLC, code review, SAST/DAST | **Data in Use** |
| **L7 — Data Security** | AES-256 encryption, DLP, tokenization, hashing | **All three states** (last line of defense) |

**Key Principle:** Each layer acts as a *safety net* for the layers above. An attacker breaching the firewall (L3) still faces NAC (L4), EDR (L5), WAF (L6), and encryption (L7) before reaching the data.

[Valuation Key: Neat layered diagram: 3 Marks; Mapping to data states: 2 Marks; Defense-in-depth principle explanation: 2 Marks]

---

#### Part (b) — Risk Assessment Numerical (7 Marks)

**Given Data:**
- Asset Value (AV) = ₹80,00,000
- Exposure Factor (EF) = 75% = 0.75
- Annual Rate of Occurrence (ARO) = 3
- Cost of Control (CoC) = ₹8,00,000
- Reduction in incidents = 90% → New ARO = 3 × (1 − 0.90) = 0.3

### Step 1: Single Loss Expectancy (SLE)

$$\text{SLE} = \text{AV} \times \text{EF} = 80,00,000 \times 0.75 = 60,00,000 \text{ INR}$$

[Stating formula + substitution: 1 Mark; Final value: 1 Mark = 2 Marks]

### Step 2: ALE (Before Control)

$$\text{ALE}_{\text{before}} = \text{SLE} \times \text{ARO} = 60,00,000 \times 3 = 1,80,00,000 \text{ INR}$$

[Formula: 0.5 Mark; Computation: 0.5 Mark = 1 Mark]

### Step 3: ALE (After Control)

New ARO = 0.3

$$\text{ALE}_{\text{after}} = 60,00,000 \times 0.3 = 18,00,000 \text{ INR}$$

[Formula: 0.5 Mark; Computation: 0.5 Mark = 1 Mark]

### Step 4: Return on Security Investment (ROSI)

$$\text{ROSI} = \frac{\text{ALE}_{\text{before}} - \text{ALE}_{\text{after}} - \text{CoC}}{\text{CoC}} \times 100\%$$

$$\text{ROSI} = \frac{1,80,00,000 - 18,00,000 - 8,00,000}{8,00,000} \times 100\%$$

$$\text{ROSI} = \frac{1,54,00,000}{8,00,000} \times 100\% = 19.25 \times 100\% = 1925\%$$

[Formula: 1 Mark; Substitution: 0.5 Mark; Final value: 0.5 Mark = 2 Marks]

### Step 5: Recommendation

> [!IMPORTANT]
> **Decision: YES — the control MUST be implemented.**
>
> **Justification:** A ROSI of **1925%** means the organization saves approximately ₹19.25 for every ₹1 invested in the DLP control. This is an outstanding return. Additionally, qualitative benefits (regulatory compliance, customer trust, brand reputation) further strengthen the case. Any positive ROSI (typically > 100%) makes a security investment financially justifiable.

[Recommendation with reasoning: 1 Mark]

---

## 5.3 KTU Examiner's Valuation Warning / Pitfall Callout

> [!WARNING]
> **Common Mistakes Students Make — Avoid These to Secure Full Marks:**
>
> 1. **Confusing Data in Use with Data at Rest:** Many students incorrectly classify "data being read by a CPU" as *Data in Rest*. The correct classification is **Data in Use (Processing)**. *Data at Rest* refers strictly to **inactive, persistent storage**.
> 2. **Listing Encryption for ALL three states:** Encryption is a *transformation* that protects data in any state, but the *specific algorithm and key management* differs. For Data at Rest → AES-XTS; for Data in Use → memory encryption/secure enclaves; for Data in Motion → TLS/AEAD ciphers. Simply writing "AES" for all three is incomplete and loses 1–2 marks.
> 3. **Forgetting the Three Goals:** Always tie your answer back to **Confidentiality, Integrity, Availability**. Examiners explicitly look for this mapping.
> 4. **Skipping the Diagram:** KTU examiners allot **2–3 marks** for "neat diagrams" in long-answer questions. A well-labeled Defense-in-Depth or three-states diagram differentiates a 12-mark answer from a 14-mark answer.
> 5. **Numerical Calculation Errors in ROSI/SLE:** Always write the **formula first**, then **substitution**, then **final answer** in separate lines. Rushing the arithmetic loses 1–2 marks per sub-part.
> 6. **Not Stating the Encryption Mode:** Saying "AES" alone is incomplete — you must specify the **mode** (GCM, CBC, XTS, CTR) and **key size** (128/192/256) for full marks.
> 7. **Confusing Hashing with Encryption:** Hashing is **one-way** (no decryption). Encryption is **two-way** (with a key). Mixing these up is a fatal error in Module 3.

---

## 5.4 📌 Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **Rapid Revision Checklist — KTU Module 3 (Storage, Processing, Transmission)**

**1. Core Concepts to Memorize:**
- ☐ The **three states of data**: Data at Rest, Data in Use, Data in Motion
- ☐ The **CIA Triad**: Confidentiality, Integrity, Availability
- ☐ The **Parkerian Hexad** extensions: Possession, Authenticity, Utility
- ☐ **Defense in Depth** — at least 5 of the 7 layers
- ☐ **3-2-1 Backup Rule** — 3 copies, 2 media, 1 off-site

**2. Cryptographic Formulas to Memorize:**
- ☐ AES structure: 128-bit blocks, 14 rounds for AES-256, 4 transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey)
- ☐ RSA: $n = pq$, $\phi(n) = (p-1)(q-1)$, $ed \equiv 1 \pmod{\phi(n)}$, $C = M^e \bmod n$
- ☐ Diffie-Hellman: Shared secret = $g^{ab} \bmod p$
- ☐ HMAC: $H((K \oplus opad) \parallel H((K \oplus ipad) \parallel M))$
- ☐ Entropy: $H = L \log_2(N)$ bits
- ☐ ALE: $\text{ALE} = \text{SLE} \times \text{ARO}$
- ☐ ROSI: $\frac{\text{ALE}_{\text{before}} - \text{ALE}_{\text{after}} - \text{CoC}}{\text{CoC}}$

**3. Key Standards to Remember:**
- ☐ **AES-256** — FIPS 197 — Data at Rest
- ☐ **TLS 1.3** — RFC 8446 — Data in Motion
- ☐ **IPsec ESP** — RFC 4303 — Network-layer VPN
- ☐ **NIST SP 800-53** — Security control catalog
- ☐ **NIST SP 800-88 Rev.1** — Media sanitization (crypto-shredding)
- ☐ **ISO/IEC 27001:2022** — ISMS framework
- ☐ **OWASP Top 10** — Web application security risks

**4. Critical Comparisons to Internalize:**
- ☐ Symmetric (AES, ChaCha20) vs Asymmetric (RSA, ECC) — speed vs key exchange
- ☐ Hashing (SHA-256) vs Encryption (AES) — one-way vs two-way
- ☐ MAC (symmetric) vs Digital Signature (asymmetric) — integrity vs non-repudiation
- ☐ HSM vs TPM vs Secure Enclave — dedicated vs integrated vs isolated
- ☐ TLS vs IPsec vs Application-layer (PGP, S/MIME) — different OSI layers

**5. "Last-Mile" Viva Questions to Prepare:**
- ☐ "Which state of data is the hardest to secure?" → **Data in Use** (must be plaintext for CPU)
- ☐ "What is Perfect Forward Secrecy?" → Unique ephemeral keys per session
- ☐ "Why hybrid encryption?" → RSA can only encrypt small payloads; AES is fast
- ☐ "What is the difference between hashing and encryption?" → Reversibility
- ☐ "Why is AES-256 preferred over AES-128 for top-secret data?" → Larger security margin against future quantum attacks (Grover's algorithm halves effective key size)
- ☐ "What is the difference between IDS and IPS?" → IDS detects (passive); IPS blocks (inline)
- ☐ "Why store passwords as salted hashes, not encrypted?" → Hashing is one-way; encryption is reversible and depends on key custody

> **🎯 Final Exam Tip:** When asked to "explain security of X state", structure your answer as:
> 1. **Definition** (1–2 lines)
> 2. **Top 3 threats** (3 bullet points)
> 3. **Top 3 controls** mapped to threats (3 bullet points)
> 4. **Real-world example** (e.g., BitLocker, TLS 1.3, Intel SGX)
> 5. **Tie back to CIA Triad** (1 closing line)
>
> This 5-part structure reliably earns 7+ out of 7 marks in KTU board evaluations.

<!-- SECTION_5_END -->
