---
title: "Security attacks – Passive attacks"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee65"
status: "completed"
scrapedAt: "2026-05-23T18:02:40.901Z"
---
# SECURE COMMUNICATION

## Module 1: Introduction and Classic Encryption Techniques

### Topic: Security Attacks – Passive Attacks

---

**Course Outcomes Addressed:**

*   **CO1:** Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic. (Knowledge Level: K3)

**Learning Outcomes:**

*   Understanding the nature of passive attacks.
*   Identifying different types of passive attacks.
*   Recognizing the challenges in detecting and preventing passive attacks.
*   Relating passive attacks to network security services and mechanisms.

---

### 1. Introduction to Security Attacks

**Definition:** A security attack is any action that compromises the security policies of a network or computer system. Attacks can be broadly categorized into two types: **Passive Attacks** and **Active Attacks**.

**Key Concept:** Security mechanisms are designed to prevent, detect, or recover from various types of attacks. Understanding the nature of these attacks is crucial for designing effective security measures.

---

### 2. Passive Attacks

**Definition:** Passive attacks are attempts to obtain information about the data being transmitted without altering the data itself. The attacker's primary goal is to eavesdrop on the communication or gain unauthorized access to information.

**Key Characteristics:**

*   **Non-intrusive:** They do not modify the system resources or data.
*   **Difficult to Detect:** Because the attacker does not alter the system's state, detecting a passive attack is significantly harder than detecting an active attack.
*   **Focus on Confidentiality:** The primary impact of passive attacks is on the **confidentiality** of information.

**Stallings (4th Edition, Chapter 1, Section 1.2 - Types of Threats):** Stallings categorizes threats into passive and active. Passive threats are those that attempt to learn or make use of information from the system but do not affect system resources.

**Forouzan (Chapter 1, Section 1.3 - Security Attacks):** Forouzan also distinguishes between passive and active attacks, highlighting that passive attacks are generally concerned with learning information, while active attacks involve an alteration of data or creation of false data.

---

### 3. Types of Passive Attacks

Passive attacks primarily involve the interception of information. The two main types are:

#### 3.1. Eavesdropping (Wiretapping)

**Definition:** The unauthorized interception of the contents of a communication. This can occur at various points in the communication path, such as along a physical wire, through the air (wireless communication), or by compromising a network device.

**Example:**

*   An attacker connects a device to an unencrypted network cable to read all the data packets passing through it.
*   In a wireless network, an attacker uses a sniffer to capture Wi-Fi traffic within range, especially if the network is not secured with strong encryption (e.g., WEP or weak WPA/WPA2 passwords).

**Relation to Network Security Services:** Eavesdropping directly violates the **confidentiality** service.

**Stallings (4th Edition, Chapter 1, Section 1.2):** Mentions eavesdropping as a primary example of a passive attack that exploits the fact that information can be transmitted through various mediums that can be tapped.

---

#### 3.2. Traffic Analysis

**Definition:** The study of patterns in communication traffic to infer information about the sender, receiver, frequency, duration, and volume of messages, even if the content of the messages themselves is encrypted.

**Example:**

*   An attacker observes that Alice sends a large amount of data to Bob every day at precisely 9 AM for exactly 30 minutes. Even if the content of these messages is encrypted, the attacker can infer that Alice and Bob are likely involved in a regular daily operational process.
*   Observing the source and destination IP addresses, port numbers, and packet sizes can reveal relationships and activities between parties.

**Relation to Network Security Services:** While not directly revealing the *content* of messages, traffic analysis compromises the **confidentiality** of the communication by revealing metadata and patterns that can be used to infer sensitive information about the parties involved. It can also indirectly threaten the **anonymity** of users if their communication patterns are unique.

**Forouzan (Chapter 1, Section 1.3):** Discusses traffic analysis as a passive attack where the attacker observes the frequency and length of messages to deduce secret information.

---

### 4. Challenges in Passive Attacks

*   **Detection:** As mentioned, passive attacks are hard to detect because they don't alter the system. The only indication might be a slight degradation in network performance if the attacker is actively capturing a large volume of data, but this is often difficult to attribute specifically to an attack.
*   **Prevention:** Preventing passive attacks often relies on strong **encryption** to make the intercepted data unintelligible. However, if the encryption is weak or compromised, or if the attacker can perform traffic analysis on encrypted data, prevention becomes more challenging.

**Stallings (4th Edition, Chapter 1, Section 1.3 - Security Services):** Emphasizes that confidentiality is a key service provided to counter passive attacks, primarily through cryptography.

---

### 5. Relation to Network Security Services and Mechanisms

Passive attacks directly target the **confidentiality** of information.

*   **Confidentiality:** Ensures that information is not disclosed to unauthorized individuals, entities, or processes. Encryption is the primary mechanism to provide confidentiality against passive attacks.
*   **Integrity:** Aims to prevent unauthorized modification of data. Passive attacks do not modify data, so integrity is not directly threatened by them.
*   **Availability:** Ensures that systems and data are accessible when needed. Passive attacks generally do not impact the availability of the system.

**CO1 Alignment:** This topic directly addresses the "types of attacks they are designed for" aspect of CO1 by focusing on passive attacks and how security services like confidentiality are used to counter them.

---

### 6. Examples and Scenarios

**Scenario 1: Email Interception**

*   **Attack:** An attacker gains access to a network switch and uses a packet sniffer (e.g., Wireshark) to capture unencrypted email traffic.
*   **Impact:** The attacker can read the content of emails, including sensitive information.
*   **Countermeasure:** Using end-to-end encryption for emails (e.g., PGP, S/MIME) ensures confidentiality even if the traffic is intercepted.

**Scenario 2: Website Browsing**

*   **Attack:** A user visits a website using HTTP (not HTTPS). An attacker on the same network (e.g., a public Wi-Fi hotspot) can intercept the HTTP traffic and see all the data exchanged, including login credentials or form submissions.
*   **Impact:** Theft of sensitive user information.
*   **Countermeasure:** Using HTTPS (HTTP over TLS/SSL) encrypts the communication, making it unreadable to eavesdroppers.

**Scenario 3: Voice over IP (VoIP) Monitoring**

*   **Attack:** An attacker taps into a network where VoIP calls are being made. If the VoIP traffic is not encrypted, the attacker can listen to the conversations.
*   **Impact:** Unauthorized eavesdropping on private conversations.
*   **Countermeasure:** Using encrypted VoIP protocols like SRTP (Secure Real-time Transport Protocol).

---

### 7. Key Concepts to Remember

*   **Passive Attack:** An attack that attempts to learn information from the system without altering the system resources.
*   **Eavesdropping:** Interception of communication content.
*   **Traffic Analysis:** Study of communication patterns to infer information.
*   **Confidentiality:** The security service most threatened by passive attacks.
*   **Detection Difficulty:** Passive attacks are inherently hard to detect.
*   **Prevention:** Primarily achieved through strong encryption.

---

### 8. Practice Questions

**Question 1:** Which of the following is a characteristic of a passive attack?
    a) Modifies system resources.
    b) Alters data being transmitted.
    c) Difficult to detect.
    d) Involves impersonation.

**Answer:** c) Difficult to detect.

**Question 2:** Explain the difference between eavesdropping and traffic analysis.

**Answer:** Eavesdropping is the interception of the actual content of a communication. Traffic analysis, on the other hand, involves observing patterns in the communication (like frequency, duration, source, and destination) to infer information, even if the content is encrypted.

**Question 3:** What is the primary security service that passive attacks aim to violate?

**Answer:** Confidentiality.

**Question 4:** How does the use of HTTPS prevent passive attacks on web browsing?

**Answer:** HTTPS uses TLS/SSL to encrypt the communication between the browser and the web server. This encryption makes the data unreadable to anyone who intercepts the traffic, thus protecting the confidentiality of the information being exchanged.

**Question 5:** Consider a scenario where two parties, Alice and Bob, communicate using a symmetric encryption algorithm with a shared secret key. However, they use a weak encryption algorithm that is easily broken by a brute-force attack. Describe a passive attack that could be successful in this scenario and explain why.

**Answer:** An attacker could perform **eavesdropping** by intercepting the encrypted messages. Since the encryption algorithm is weak, the attacker could use a brute-force attack to try all possible keys until they find the correct one. Once the key is found, the attacker can decrypt the messages and read their content, thus violating confidentiality.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References and Further Reading

*   **Stallings, William. *Cryptography and Network Security: Principles and Practice*. 4th Edition. Prentice Hall of India, 2006.** (Specifically Chapters 1 on Introduction to Network Security and Threats).
*   **Forouzan, Behrouz A. *Cryptography and Network Security*. Tata McGraw-Hill, 2008.** (Specifically Chapters related to Security Attacks).

---