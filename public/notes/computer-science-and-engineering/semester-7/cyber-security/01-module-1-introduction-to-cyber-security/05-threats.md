---
title: "Threats"
subject: "CYBER SECURITY"
module: "Module 1: Introduction to Cyber Security :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c7c9"
status: "completed"
scrapedAt: "2026-05-20T17:03:34.391Z"
---
# Cyber Security: Module 1: Introduction to Cyber Security

## Topic: Threats

This module provides a foundational understanding of cyber threats, their nature, common types, and the potential impact they can have on individuals and organizations.

---

### Learning Outcomes Covered:

*   **Understanding the evolving nature of cyber threats:** How threats change and adapt over time.
*   **Identifying common types of cyber threats:** Categorizing and describing prevalent attack vectors.
*   **Recognizing the potential impact of cyber threats:** Understanding the consequences of successful attacks.

---

### 1. The Evolving Nature of Cyber Threats

Cyber threats are not static; they are constantly changing and evolving. This evolution is driven by several factors:

*   **Technological Advancements:** New technologies create new vulnerabilities and new attack methods.
    *   **Example:** The rise of the Internet of Things (IoT) has introduced a vast new attack surface with many insecure devices.
*   **Sophistication of Attackers:** Cybercriminals are becoming more organized, skilled, and resourceful.
    *   **Example:** Nation-state actors or well-funded criminal groups can develop highly sophisticated malware.
*   **Motivation of Attackers:** Motivations range from financial gain to political activism, espionage, and even sheer disruption.
    *   **Example:** Ransomware attacks are driven by financial gain, while hacktivism aims to make political statements.
*   **Globalization:** The internet allows attackers to operate from anywhere in the world, making attribution and prosecution difficult.
    *   **Example:** A phishing attack originating from a different continent can impact users globally.
*   **Discovery of New Vulnerabilities:** Researchers and attackers continuously find weaknesses in software and hardware.
    *   **Example:** Zero-day vulnerabilities (unpatched exploits) are highly prized by attackers.

**Key Concept:** **Attack Surface** - The sum of all points where an unauthorized user can try to enter or extract data from a system. The larger and more complex the attack surface, the more opportunities for threats.

---

### 2. Common Types of Cyber Threats

Cyber threats can be broadly categorized based on their nature and objective. Here are some of the most common types:

#### 2.1 Malware (Malicious Software)

Malware is a broad term for any software designed to infiltrate, damage, or gain unauthorized access to a computer system.

*   **Viruses:** Self-replicating programs that attach themselves to legitimate files and spread when those files are executed.
    *   **Example:** A virus might infect an email attachment. When the attachment is opened, the virus executes and spreads to other files on the system.
*   **Worms:** Self-replicating malware that spreads across networks without human interaction, exploiting vulnerabilities.
    *   **Example:** The WannaCry worm in 2017 spread rapidly by exploiting a Windows vulnerability.
*   **Trojans (Trojan Horses):** Malware disguised as legitimate software. They perform malicious actions once installed.
    *   **Example:** A user might download a free game that actually contains a Trojan that steals their login credentials.
*   **Ransomware:** Malware that encrypts a victim's files, demanding a ransom payment (usually in cryptocurrency) for the decryption key.
    *   **Example:** Colonial Pipeline was hit by ransomware in 2021, disrupting fuel supplies.
*   **Spyware:** Malware that secretly monitors and collects information about a user's activities without their consent.
    *   **Example:** Spyware could track your browsing history, keystrokes, or financial information.
*   **Adware:** Software that displays unwanted advertisements, often aggressively. While sometimes just annoying, it can also be a vector for more serious malware.
    *   **Example:** Pop-up ads that appear unexpectedly while browsing.
*   **Rootkits:** Malware designed to gain privileged (administrator or "root") access to a system and hide its presence.
    *   **Example:** A rootkit could allow an attacker to maintain persistent access to a system without being detected.

#### 2.2 Social Engineering Attacks

These attacks exploit human psychology to trick individuals into revealing sensitive information or performing actions that compromise security.

*   **Phishing:** Deceptive emails, messages, or websites that impersonate legitimate entities to steal sensitive information like usernames, passwords, or credit card details.
    *   **Example:** An email appearing to be from a bank asking you to "verify" your account details by clicking a link to a fake login page.
*   **Spear Phishing:** A more targeted form of phishing that is personalized to specific individuals or organizations, often using publicly available information.
    *   **Example:** An email to an HR employee that appears to be from the CEO, asking them to process an urgent payment.
*   **Whaling:** A type of spear phishing that targets high-profile individuals within an organization, such as CEOs or senior executives.
    *   **Example:** A fake invoice sent to the CFO, disguised as coming from a trusted supplier.
*   **Pretexting:** Creating a fabricated scenario (pretext) to gain someone's trust and obtain information.
    *   **Example:** An attacker posing as a customer service representative needing your account number to "help" with an issue.
*   **Baiting:** Luring victims with a false promise (e.g., free music, movies, or a prize) to entice them to download malware or reveal information.
    *   **Example:** Leaving a USB drive labeled "Confidential Salaries" in a public place.
*   **Tailgating/Piggybacking:** Gaining unauthorized physical access to a secure area by following an authorized person.
    *   **Example:** Walking through a secured door behind someone who has a keycard.

#### 2.3 Network-Based Attacks

These attacks target the infrastructure and communication channels of networks.

*   **Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) Attacks:** Overwhelming a target system or network with traffic to make it unavailable to legitimate users.
    *   **Example:** Flooding a website with so many requests that its servers crash and it becomes inaccessible.
*   **Man-in-the-Middle (MitM) Attacks:** Intercepting and potentially altering communication between two parties without their knowledge.
    *   **Example:** An attacker on a public Wi-Fi network intercepts traffic between a user and a website, potentially stealing login credentials.
*   **Packet Sniffing:** Capturing data packets as they travel across a network.
    *   **Example:** Using tools to capture unencrypted data like passwords transmitted over an insecure network.
*   **SQL Injection:** Injecting malicious SQL code into a web application's input fields to manipulate the database.
    *   **Example:** Entering `' OR '1'='1` into a username field to bypass login authentication.
*   **Cross-Site Scripting (XSS):** Injecting malicious scripts into web pages viewed by other users, allowing attackers to steal cookies, session tokens, or redirect users to malicious sites.
    *   **Example:** A website displaying user-submitted comments that are not properly sanitized can be exploited.

#### 2.4 Other Significant Threats

*   **Insider Threats:** Malicious actions or negligence by individuals within an organization (employees, contractors, etc.).
    *   **Example:** An employee intentionally stealing customer data before leaving the company.
*   **Advanced Persistent Threats (APTs):** Stealthy and prolonged cyberattacks, often orchestrated by sophisticated actors (e.g., nation-states), that target specific organizations to steal data or disrupt operations.
    *   **Example:** APT groups that have been known to infiltrate government agencies or major corporations for years to exfiltrate sensitive information.
*   **Zero-Day Exploits:** Attacks that leverage vulnerabilities in software or hardware that are unknown to the vendor and for which no patch exists.
    *   **Example:** A newly discovered bug in a popular operating system that allows attackers to gain control of affected systems immediately.
*   **Supply Chain Attacks:** Compromising a vendor or supplier to gain access to their customers' systems.
    *   **Example:** SolarWinds hack, where attackers compromised the software update process of a IT management company, affecting thousands of its clients.

---

### 3. Potential Impact of Cyber Threats

The consequences of successful cyberattacks can be severe and far-reaching, affecting individuals, businesses, and even governments.

*   **Financial Loss:**
    *   Direct theft of funds.
    *   Costs associated with recovery (incident response, system restoration).
    *   Lost revenue due to downtime.
    *   Fines and penalties for data breaches (e.g., GDPR, CCPA).
    *   Ransom payments.
*   **Reputational Damage:**
    *   Loss of customer trust and loyalty.
    *   Negative media coverage.
    *   Damage to brand image.
*   **Operational Disruption:**
    *   System downtime and service interruption.
    *   Loss of productivity.
    *   Disruption of critical services (e.g., healthcare, utilities).
*   **Data Loss or Corruption:**
    *   Loss of sensitive personal information (PII).
    *   Theft of intellectual property or trade secrets.
    *   Loss of critical business data.
    *   Data altered or made unusable.
*   **Legal and Regulatory Consequences:**
    *   Fines for non-compliance with data protection laws.
    *   Lawsuits from affected individuals or organizations.
    *   Investigations by regulatory bodies.
*   **Physical Harm:**
    *   In critical infrastructure attacks (e.g., power grids, healthcare systems), cyberattacks can lead to physical harm or loss of life.
    *   **Example:** A ransomware attack on a hospital's systems could disrupt patient care, leading to adverse outcomes.

---

### Important Points to Remember:

*   **Cyber threats are dynamic:** Always stay informed about new and evolving threats.
*   **Human element is crucial:** Many successful attacks exploit human psychology (social engineering).
*   **Layered security is essential:** No single defense is foolproof.
*   **Proactive defense is better than reactive cleanup:** Implement strong security measures before an attack occurs.
*   **Awareness and education are key:** Understanding threats helps individuals and organizations protect themselves.

---

### Practice Questions & Exercises:

**Question 1:**
Which type of malware is designed to encrypt a victim's files and demand a ransom for their decryption?
a) Virus
b) Worm
c) Trojan
d) Ransomware

**Question 2:**
An attacker sends an email that appears to be from your bank, asking you to click a link and "verify" your account details. What type of social engineering attack is this?
a) Pretexting
b) Phishing
c) Baiting
d) Tailgating

**Question 3:**
What is a Distributed Denial-of-Service (DDoS) attack?
a) An attack that steals user credentials.
b) An attack that encrypts files for ransom.
c) An attack that overwhelms a system with traffic from multiple sources, making it unavailable.
d) An attack that infiltrates a system disguised as legitimate software.

**Question 4:**
An employee accidentally leaves a USB drive containing sensitive company data in a public place. What type of threat does this represent?
a) Malware
b) Social Engineering
c) Insider Threat (due to negligence)
d) Network-Based Attack

**Question 5 (Scenario-based):**
Your company receives a series of emails that seem to be from a trusted vendor, but the requests are unusual and urgent, asking for immediate wire transfers. The email addresses are very similar to the vendor's real address but have a slight variation.

*   What type of threat is most likely being attempted here?
*   What are the potential impacts if your company falls for this?
*   What immediate steps should your finance department take?

---

### Answers to Practice Questions:

**Answer 1:**
d) Ransomware

**Answer 2:**
b) Phishing

**Answer 3:**
c) An attack that overwhelms a system with traffic from multiple sources, making it unavailable.

**Answer 4:**
c) Insider Threat (due to negligence) - While the act of leaving data is negligence, the *threat* arises from the potential misuse of that data by an unauthorized party if found.

**Answer 5 (Scenario-based):**
*   **Type of Threat:** This is most likely a **Spear Phishing** attack, specifically a Business Email Compromise (BEC) or invoice fraud attempt. The slight variation in the email address and the urgent nature of the requests are hallmarks of this type of attack.
*   **Potential Impacts:**
    *   **Financial Loss:** Significant amounts of money could be wired to attacker-controlled accounts.
    *   **Reputational Damage:** If the company is seen as easily duped, it can harm its credibility with clients and partners.
    *   **Operational Disruption:** Dealing with the aftermath of a fraudulent transaction can disrupt normal business operations.
*   **Immediate Steps:**
    1.  **Do NOT respond** to the email or click any links/attachments.
    2.  **Verify independently:** Contact the actual vendor through a known, trusted channel (e.g., a phone number from your internal contact list, not from the suspicious email) to confirm the legitimacy of the requests.
    3.  **Report the suspicious email:** Inform the IT security team immediately about the phishing attempt.
    4.  **Alert relevant departments:** Specifically, the finance department should be notified to be extra vigilant and aware of this potential threat.
    5.  **Review internal procedures:** Ensure that procedures for verifying payment requests are robust and followed.
