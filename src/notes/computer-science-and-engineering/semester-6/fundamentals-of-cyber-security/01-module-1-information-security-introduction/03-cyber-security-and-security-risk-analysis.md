---
title: "Cyber Security and Security risk analysis"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 1: Information Security Introduction"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be26"
status: "completed"
scrapedAt: "2026-05-20T16:54:20.221Z"
---
# FUNDAMENTALS OF CYBER SECURITY: Module 1 - Information Security Introduction

## Topic: Cyber Security and Security Risk Analysis

**Description:** This topic provides a foundational understanding of cyber security, focusing on its definition, goals, and the crucial process of security risk analysis.

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Define cyber security and related terms.
*   Explain the importance of cyber security.
*   Identify common cyber threats and vulnerabilities.
*   Understand the basic principles of risk management and risk assessment.
*   Perform a simple risk analysis.

---

## 1. Defining Cyber Security and Related Terms

*   **Cyber Security:** The protection of computer systems, networks, and data from digital attacks.  It involves technologies, processes, and practices designed to prevent, detect, and respond to unauthorized access, use, disclosure, disruption, modification, or destruction.

*   **Information Security (InfoSec):** A broader term encompassing the protection of all forms of information, whether digital or physical, from unauthorized access, use, disclosure, disruption, modification, or destruction.  Cyber security is a subset of information security that specifically deals with digital information.

*   **Data Security:** Focuses on protecting data itself, whether it's stored, processed, or transmitted. Data security measures include encryption, access controls, and data loss prevention.

*   **Threat:** A potential danger that could exploit a vulnerability to cause harm to a system or organization. Examples: malware, phishing, insider threats, natural disasters.

*   **Vulnerability:** A weakness in a system, application, or process that could be exploited by a threat. Examples: unpatched software, weak passwords, misconfigured firewalls.

*   **Risk:** The potential for loss or damage resulting from a threat exploiting a vulnerability. Risk is often expressed as the likelihood of a threat occurring multiplied by the impact if it does.

*   **Asset:** Any resource that has value to an organization, including hardware, software, data, personnel, and reputation.

*   **Confidentiality:** Ensuring that information is accessible only to authorized individuals or systems.

*   **Integrity:** Ensuring that information is accurate and complete, and protected from unauthorized modification.

*   **Availability:** Ensuring that authorized users have timely and reliable access to information and resources when needed. (often referred to as the CIA triad - Confidentiality, Integrity, Availability)

*   **Authentication:** Verifying the identity of a user, device, or process.

*   **Authorization:** Granting specific permissions or access rights to an authenticated user, device, or process.

*   **Non-Repudiation:** Ensuring that an individual cannot deny having performed a particular action.  Typically achieved through digital signatures and audit trails.

**Example:**

Imagine a bank website (asset) with a vulnerability: unpatched software. A hacker (threat) could exploit this vulnerability to gain unauthorized access (risk) and steal customer data (violation of confidentiality).

## 2. Importance of Cyber Security

*   **Protecting Sensitive Data:** Prevents the theft of personal information, financial data, intellectual property, and other confidential information.  Data breaches can lead to identity theft, financial loss, and reputational damage.

*   **Maintaining Business Continuity:** Cyberattacks can disrupt business operations, leading to downtime, lost productivity, and financial losses.  Cyber security helps organizations maintain business continuity in the face of such attacks.

*   **Ensuring Regulatory Compliance:** Many industries are subject to regulations that require organizations to implement cyber security measures to protect sensitive data.  Failure to comply with these regulations can result in fines and legal penalties. Examples: GDPR, HIPAA, PCI DSS.

*   **Protecting Reputation:** Cyberattacks can damage an organization's reputation, leading to loss of customer trust and business.  Strong cyber security measures can help protect an organization's reputation.

*   **Safeguarding National Security:** Cyberattacks can target critical infrastructure, government agencies, and other sensitive systems, potentially compromising national security.

*   **Economic Stability:** Cybercrime can cause significant financial losses to individuals, businesses, and governments.  Effective cyber security helps protect economic stability.

**Example:**

A hospital that experiences a ransomware attack (cybersecurity incident) may be unable to access patient records, delaying treatment and potentially endangering lives. This highlights the critical importance of cybersecurity for protecting lives and well-being.

## 3. Common Cyber Threats and Vulnerabilities

*   **Malware:** Malicious software designed to harm or disrupt computer systems.
    *   *Viruses:*  Self-replicating programs that attach to other files and spread when those files are executed.
    *   *Worms:* Self-replicating programs that can spread across networks without user interaction.
    *   *Trojans:*  Malicious programs disguised as legitimate software.
    *   *Ransomware:*  Malware that encrypts a victim's files and demands a ransom payment for their decryption.
    *   *Spyware:*  Malware that secretly monitors a user's activity and collects personal information.
    *   *Adware:*  Malware that displays unwanted advertisements.

*   **Phishing:**  Deceptive emails, messages, or websites designed to trick users into revealing sensitive information. Spear phishing is a targeted attack against a specific individual or organization.

*   **Social Engineering:** Manipulating individuals into divulging confidential information or performing actions that compromise security.

*   **Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) Attacks:** Overwhelming a system or network with traffic to make it unavailable to legitimate users.

*   **Man-in-the-Middle (MitM) Attacks:** Intercepting communication between two parties to eavesdrop or alter the data being transmitted.

*   **SQL Injection:**  Exploiting vulnerabilities in web applications to inject malicious SQL code into database queries.

*   **Cross-Site Scripting (XSS):**  Injecting malicious scripts into websites to steal user data or redirect users to malicious sites.

*   **Zero-Day Exploits:** Attacks that exploit vulnerabilities that are unknown to the software vendor and for which no patch is available.

*   **Insider Threats:**  Security threats originating from within an organization, such as disgruntled employees or contractors.  Can be malicious or accidental.

*   **Physical Security Threats:**  Theft or damage to hardware, such as laptops or servers.  Can lead to data breaches or disruption of services.

*   **Weak Passwords:** Easily guessed or cracked passwords that allow attackers to gain unauthorized access to accounts.

*   **Unpatched Software:**  Software with known vulnerabilities that have not been addressed with security updates.

*   **Misconfigured Firewalls:** Firewalls that are not properly configured to block malicious traffic.

*   **Lack of Security Awareness Training:** Employees who are not aware of cyber security threats and best practices are more likely to fall victim to attacks.

**Example:**

A company employee receives a phishing email disguised as a legitimate message from their bank. The email asks the employee to click on a link and enter their bank account credentials. If the employee falls for the scam, the attacker can steal their banking information and potentially access the company's financial accounts.

## 4. Basic Principles of Risk Management and Risk Assessment

*   **Risk Management:** The process of identifying, assessing, and mitigating risks to an organization's assets.

    *   **Identify Assets:**  Determine what resources are valuable and need protection (hardware, software, data, personnel, reputation).
    *   **Identify Threats:**  Determine potential threats that could harm the assets (malware, phishing, natural disasters).
    *   **Identify Vulnerabilities:**  Determine weaknesses in the system that could be exploited by threats (unpatched software, weak passwords).
    *   **Assess Likelihood:** Estimate the probability that a threat will exploit a vulnerability. (Low, Medium, High)
    *   **Assess Impact:**  Estimate the potential damage that would result if a threat exploited a vulnerability. (Low, Medium, High)
    *   **Calculate Risk:**  Determine the overall level of risk by considering both likelihood and impact (Risk = Likelihood x Impact).  Various methods exist for calculating risk.
    *   **Implement Controls:**  Implement security measures to reduce the likelihood or impact of risks (firewalls, intrusion detection systems, security awareness training).
    *   **Monitor and Review:**  Continuously monitor the effectiveness of security controls and update the risk assessment as needed.

*   **Risk Assessment:** The process of identifying, analyzing, and evaluating risks. It's a key component of risk management.

    *   **Qualitative Risk Assessment:**  Uses subjective judgments and non-numerical values to assess risk.  Often uses scales like Low, Medium, and High for likelihood and impact.
    *   **Quantitative Risk Assessment:**  Uses numerical values to assess risk, such as dollar amounts or probabilities.  More complex and requires more data.

*   **Risk Mitigation Strategies:** Actions taken to reduce the likelihood or impact of risks.
    *   **Risk Avoidance:**  Eliminating the risk by avoiding the activity that creates it.
    *   **Risk Transfer:**  Transferring the risk to a third party, such as through insurance.
    *   **Risk Reduction:**  Implementing controls to reduce the likelihood or impact of the risk.
    *   **Risk Acceptance:**  Accepting the risk and taking no action.  This is typically done when the cost of mitigating the risk is greater than the potential loss.

**Example:**

A small business identifies its customer database as a critical asset. They identify malware and data breaches as potential threats.  They determine that they have weak passwords (vulnerability).  They assess the likelihood of a data breach as medium and the impact as high.  They decide to implement stronger password policies and anti-malware software (risk reduction) to mitigate the risk.

## 5. Performing a Simple Risk Analysis

Let's perform a simplified risk analysis for a small company, "Acme Widgets", using a qualitative approach.

**Scenario:** Acme Widgets has a website that collects customer information (name, email, address) for order processing.

**1. Identify Assets:**

*   Website (including server and software)
*   Customer Database
*   Customer Data (name, email, address)

**2. Identify Threats:**

*   Malware infection of the website server
*   SQL Injection attack targeting the customer database
*   Phishing attack targeting employees with access to the website backend

**3. Identify Vulnerabilities:**

*   Website software is not regularly updated.
*   Weak passwords used for website administrator accounts.
*   Lack of employee security awareness training.
*   No web application firewall (WAF) in place.

**4. Assess Likelihood and Impact (Qualitative):**

| Threat                               | Vulnerability                            | Likelihood | Impact   |
| ------------------------------------ | ---------------------------------------- | ---------- | -------- |
| Malware infection                     | Unpatched software                       | Medium     | High     |
| SQL Injection                         | No WAF, Unsecured Database Coding       | Medium     | High     |
| Phishing attack                       | Lack of employee training, Weak Passwords | High       | Medium   |

**5. Calculate Risk (Qualitative - using a simple matrix):**

Let's assume the following risk matrix:

|             | Low Impact | Medium Impact | High Impact |
| ----------- | ---------- | ------------- | ----------- |
| High Likelihood | Medium     | High          | High        |
| Medium Likelihood | Low      | Medium        | High        |
| Low Likelihood  | Low      | Low           | Medium      |

Based on the matrix and the Likelihood/Impact assessments:

| Threat                               | Risk    |
| ------------------------------------ | ------- |
| Malware infection                     | High    |
| SQL Injection                         | High    |
| Phishing attack                       | High    |

**6. Implement Controls (Examples):**

*   **Malware Infection:**
    *   Update website software regularly.
    *   Install and maintain anti-malware software on the website server.
    *   Implement a web application firewall (WAF).
*   **SQL Injection:**
    *   Implement secure coding practices to prevent SQL injection vulnerabilities.
    *   Use parameterized queries or stored procedures.
    *   Install a web application firewall (WAF).
    *   Regularly scan the website for vulnerabilities.
*   **Phishing Attack:**
    *   Provide security awareness training to employees.
    *   Implement strong password policies (e.g., minimum length, complexity).
    *   Enable multi-factor authentication (MFA) for all accounts.
    *   Simulate phishing attacks to test employee awareness.

**7. Monitor and Review:**

*   Continuously monitor the website for suspicious activity.
*   Regularly review security logs.
*   Update the risk assessment as needed.
*   Conduct penetration testing to identify new vulnerabilities.

**This simple risk analysis helps Acme Widgets prioritize its security efforts and implement appropriate controls to protect its assets.**

## 6. Important Points to Remember

*   Cyber security is an ongoing process, not a one-time fix.
*   Staying up-to-date on the latest threats and vulnerabilities is crucial.
*   Security awareness training is essential for all employees.
*   A layered approach to security is more effective than relying on a single security measure.
*   Regularly review and update security policies and procedures.
*   Risk analysis is a continuous process, not a one-time event.

---

## Practice Questions & Exercises

**1. Define cyber security and explain its importance.**

**Answer:** Cyber security is the protection of computer systems, networks, and data from digital attacks. It's important for protecting sensitive data, maintaining business continuity, ensuring regulatory compliance, protecting reputation, safeguarding national security, and contributing to economic stability.

**2. What is the difference between a threat and a vulnerability? Give examples.**

**Answer:** A threat is a potential danger that could exploit a vulnerability. A vulnerability is a weakness in a system, application, or process.  Example Threat: Malware.  Example Vulnerability:  Unpatched software.

**3. Explain the CIA triad and its significance in information security.**

**Answer:** The CIA triad (Confidentiality, Integrity, Availability) represents the core principles of information security. Confidentiality ensures information is accessible only to authorized users. Integrity ensures information is accurate and complete. Availability ensures authorized users can access information when needed.  These three principles guide the development and implementation of security controls.

**4.  Describe the basic steps involved in a risk assessment.**

**Answer:** The basic steps include: (1) Identifying assets, (2) Identifying threats, (3) Identifying vulnerabilities, (4) Assessing likelihood of exploitation, (5) Assessing the impact of exploitation, (6) Calculating the overall risk, (7) Implementing controls to mitigate the risk, and (8) Monitoring and reviewing the effectiveness of controls.

**5.  Provide three examples of risk mitigation strategies and explain when each might be appropriate.**

**Answer:**

*   **Risk Avoidance:** Discontinuing an activity that creates a risk (e.g., not offering online banking to avoid the risk of online fraud). Appropriate when the risk is too high or the cost of mitigation is prohibitive.
*   **Risk Transfer:** Purchasing insurance to cover potential losses from a cyberattack. Appropriate when the risk cannot be avoided or significantly reduced.
*   **Risk Reduction:** Implementing stronger password policies and multi-factor authentication to reduce the risk of unauthorized access. Appropriate when the risk can be reduced to an acceptable level through security controls.

**6. Acme Corp uses an outdated accounting system. Identify potential threats, vulnerabilities, and assess the risk using a qualitative approach.  Assume a high impact if the accounting system is compromised. Provide mitigation strategies.**

**Answer:**

*   **Asset:** Accounting System (including data).
*   **Threats:** Malware infection, insider threat (unauthorized access/modification), data breach.
*   **Vulnerabilities:** Outdated software (unpatched vulnerabilities), weak access controls, lack of audit logging.
*   **Risk Assessment (Qualitative):**
    *   *Malware:* Likelihood = Medium, Impact = High, Risk = High
    *   *Insider Threat:* Likelihood = Low, Impact = High, Risk = Medium
    *   *Data Breach:* Likelihood = Medium, Impact = High, Risk = High
*   **Mitigation Strategies:**
    *   Update the accounting system to the latest version (if possible).  If not possible, isolate the system and implement compensating controls.
    *   Implement strong access controls (e.g., multi-factor authentication, least privilege).
    *   Implement robust audit logging and monitoring.
    *   Provide security awareness training to employees.
    *   Regularly back up the accounting system data.
    *   Consider replacing the outdated accounting system.
