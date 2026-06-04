---
title: "Cyber Crimes and Cases- SIM Swapping -ATM Cloning-Microsoft Internal Spam- Intellectual property cases"
subject: "FORENSIC ENGINEERING"
module: "Module 4: Engineer in the Court room & Criminal Cases "
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811802"
status: "completed"
scrapedAt: "2026-05-20T18:59:24.288Z"
---
# Forensic Engineering: Module 4 - The Engineer in the Courtroom & Criminal Cases

## Topic: Cyber Crimes and Cases

This module focuses on the crucial role of forensic engineers in understanding and presenting evidence related to various cybercrimes within the context of criminal proceedings. We will explore specific types of cybercrimes, their forensic implications, and how engineers contribute to investigations and legal outcomes.

### Learning Outcomes:

*   Understand the principles of forensic engineering applied to cybercrime investigations.
*   Identify and analyze common cybercrimes such as SIM swapping, ATM cloning, and intellectual property theft.
*   Explain the technical aspects of Microsoft internal spam and its forensic significance.
*   Describe the role of forensic engineers in collecting, preserving, and presenting digital evidence in court.
*   Discuss the challenges and best practices for forensic engineers when dealing with cybercrime cases.

---

## 1. Principles of Forensic Engineering in Cybercrime Investigations

Forensic engineering, when applied to cybercrimes, involves the application of engineering principles and scientific methods to investigate and analyze digital evidence. The primary goal is to determine the facts of a digital incident, identify perpetrators, and present findings in a clear, objective, and legally admissible manner.

### Key Concepts:

*   **Digital Forensics:** The application of investigative and analytical techniques to identify, collect, preserve, analyze, and present digital evidence in a way that is legally acceptable.
*   **Chain of Custody:** A chronological documentation or paper trail showing the seizure, custody, control, transfer, analysis, and disposition of evidence. Crucial for maintaining the integrity of digital evidence.
*   **Evidence Preservation:** Techniques used to ensure that digital data is not altered or destroyed during the process of collection and analysis. This includes using write-blockers and imaging media.
*   **Data Analysis:** The systematic examination of digital data to uncover patterns, anomalies, and indicators of malicious activity.
*   **Expert Witness Testimony:** The role of a forensic engineer in the courtroom to explain complex technical concepts and findings to judges and juries.

---

## 2. Common Cybercrimes and Their Forensic Analysis

This section delves into specific cybercrimes and the forensic engineering approaches used to investigate them.

### 2.1. SIM Swapping

**Definition:** SIM swapping (also known as SIM hijacking or SIM card swapping) is a fraudulent practice where a criminal contacts a victim's mobile carrier and convinces them to transfer the victim's phone number to a new SIM card controlled by the attacker. Once successful, the attacker can intercept calls, texts, and two-factor authentication codes sent to the victim's phone.

**Forensic Engineering Aspects:**

*   **Evidence Sources:**
    *   **Mobile Carrier Records:** Call detail records (CDRs), SMS logs, account access logs, activation records for new SIMs, IP addresses used during account access.
    *   **Victim's Device Logs:** Evidence of unauthorized access attempts, changes to device settings, unusual outgoing communications.
    *   **Attacker's Devices:** Logs from devices used to conduct the SIM swap, communication records with victims or accomplices.
    *   **Network Logs:** Evidence of traffic originating from the attacker's IP addresses.
*   **Analysis Techniques:**
    *   **Timelining:** Reconstructing the sequence of events leading up to and following the SIM swap by correlating logs from various sources.
    *   **IP Address Analysis:** Tracing the IP addresses used by the attacker to access the mobile carrier's systems.
    *   **Malware Analysis:** If the attacker used malware to gain access to victim credentials, analysis of that malware.
    *   **Communication Forensics:** Analyzing any intercepted communications for evidence of planning or execution.
*   **Role of Forensic Engineer:**
    *   Interpreting complex mobile carrier network logs.
    *   Analyzing the technical feasibility of the SIM swap based on carrier procedures.
    *   Correlating events across multiple digital artifacts.
    *   Explaining technical aspects of mobile network operations and vulnerabilities to the court.

**Example:** A victim reports unauthorized access to their bank account. Forensic analysis reveals that their phone number was swapped the day before. Examination of the mobile carrier's logs shows an IP address from a known VPN service used to request the SIM swap, followed by the attacker using the victim's phone number to receive OTP codes for account login.

---

### 2.2. ATM Cloning

**Definition:** ATM cloning involves creating counterfeit ATM cards (often called "cloned cards" or "skimmers") by capturing a victim's ATM card data (card number, expiry date, CVV) and then encoding this data onto a blank magnetic stripe or chip. Attackers typically use skimming devices installed at ATMs or point-of-sale terminals to steal this information.

**Forensic Engineering Aspects:**

*   **Evidence Sources:**
    *   **ATM Machines:** Skimming devices, hidden cameras, card reader logs, transaction logs, firmware of the ATM.
    *   **Compromised Cards:** The cloned cards themselves, which may contain the victim's data.
    *   **Attacker's Equipment:** Devices used to create the cloned cards (e.g., magnetic stripe encoders, chip programmers), software used to format data, computers used for data processing.
    *   **Data Storage Devices:** USB drives, hard drives containing stolen card data.
    *   **Network Logs:** If data was transmitted online.
*   **Analysis Techniques:**
    *   **Physical Examination:** Forensic examination of the ATM for the presence of skimming devices and hidden cameras.
    *   **Data Recovery:** Recovering deleted or hidden data from compromised devices.
    *   **Magnetic Stripe/Chip Analysis:** Analyzing the structure and content of the stolen data and how it was encoded onto counterfeit cards.
    *   **Firmware Analysis:** Examining ATM firmware for modifications or vulnerabilities exploited by attackers.
    *   **Pattern Analysis:** Identifying patterns in fraudulent transactions to link them to specific cloned cards or attack campaigns.
*   **Role of Forensic Engineer:**
    *   Identifying and documenting the technical methods used to install skimming devices.
    *   Analyzing the process of data acquisition and card cloning.
    *   Explaining the technical workings of magnetic stripe and chip card technology.
    *   Assisting in identifying the source of the compromised data.

**Example:** A series of ATM fraud incidents occur. Forensic investigators find a small, almost invisible skimming device attached to the ATM's card reader. Alongside it, a pinhole camera is discovered. The recovered data from the skimmer and camera is then analyzed to identify the compromised card numbers and PINs, which are then used to create cloned cards for fraudulent withdrawals.

---

### 2.3. Microsoft Internal Spam

**Definition:** This term likely refers to the misuse of internal communication systems (like email or messaging platforms within Microsoft) to send unsolicited or malicious messages, either for phishing, misinformation, or internal sabotage. It can also refer to the exploitation of Microsoft's own services to spread spam externally.

**Forensic Engineering Aspects:**

*   **Evidence Sources:**
    *   **Email Servers/Logs:** Mail server logs, email headers, message content, sender/recipient information, timestamps, IP addresses.
    *   **Internal Messaging Platforms:** Logs, chat history, user activity logs.
    *   **User Workstations/Devices:** Local email caches, system logs, browser history (if webmail is used).
    *   **Microsoft 365/Azure Logs:** Audit logs for user activity, email sending/receiving activity, administrative changes.
    *   **Network Traffic:** If external spam is generated using Microsoft services.
*   **Analysis Techniques:**
    *   **Email Header Analysis:** Tracing the origin and path of emails, identifying spoofed addresses.
    *   **Content Analysis:** Examining the message content for malicious links, attachments, or phishing attempts.
    *   **Log Correlation:** Linking internal and external logs to establish the source and scope of the spam campaign.
    *   **Account Compromise Analysis:** Investigating if internal accounts were compromised to facilitate the spam.
    *   **Malware Analysis:** If spam includes malicious attachments.
*   **Role of Forensic Engineer:**
    *   Understanding the architecture of Microsoft's email and communication systems.
    *   Analyzing complex email headers and server logs.
    *   Identifying spoofing techniques and IP address manipulation.
    *   Determining the extent of internal compromise or external abuse of Microsoft services.
    *   Explaining how internal systems can be manipulated for malicious purposes.

**Example:** Employees at Microsoft start receiving internal emails purporting to be from HR, requesting urgent updates to personal information. Forensic analysis of email headers reveals that the emails originated from a compromised external account masquerading as an internal sender, utilizing an unsecured internal distribution list.

---

### 2.4. Intellectual Property (IP) Cases

**Definition:** Intellectual Property (IP) refers to creations of the mind, such as inventions; literary and artistic works; designs; and symbols, names, and images used in commerce. IP cases in a forensic engineering context often involve the unauthorized acquisition, use, or distribution of trade secrets, copyrighted material, patents, or trademarks, often facilitated by digital means.

**Forensic Engineering Aspects:**

*   **Evidence Sources:**
    *   **User Activity Logs:** File access logs, download history, upload logs, printing logs, USB device usage logs.
    *   **Network Traffic:** Data exfiltration attempts, cloud storage activity, unauthorized file sharing.
    *   **Storage Media:** Hard drives, USB drives, cloud storage accounts, backup systems containing stolen IP.
    *   **Communication Records:** Emails, chat logs, messaging apps containing discussions related to IP theft.
    *   **Source Code Repositories:** Version control logs showing unauthorized access or modification.
    *   **Digital Watermarking/Fingerprinting:** If employed by the IP owner.
*   **Analysis Techniques:**
    *   **Data Exfiltration Analysis:** Identifying how data was moved from a secure environment to an unauthorized location.
    *   **File Integrity Analysis:** Determining if files were copied, modified, or deleted.
    *   **Metadata Analysis:** Examining file metadata (creation dates, modification dates, author information) for clues.
    *   **Steganography Analysis:** Detecting hidden data within other files.
    *   **Timeline Reconstruction:** Building a timeline of access and transfer of sensitive data.
    *   **Comparison of Code/Designs:** Forensic engineers may compare source code or design documents to identify similarities indicative of copying.
*   **Role of Forensic Engineer:**
    *   Tracing the unauthorized movement of digital assets.
    *   Demonstrating the unauthorized use or copying of IP.
    *   Analyzing the technical methods used to steal or disseminate IP.
    *   Explaining technical concepts like data exfiltration, steganography, and code similarity to the court.
    *   Quantifying the extent of IP loss based on digital evidence.

**Example:** A former employee of a software company is accused of stealing proprietary source code. Forensic analysis of their work laptop reveals that they copied large amounts of source code to a USB drive shortly before their resignation. Further analysis of their personal cloud storage account shows the uploaded source code, along with timestamps that align with their departure.

---

## 3. The Engineer in the Courtroom: Presenting Digital Evidence

Forensic engineers play a vital role as expert witnesses in court. Their primary responsibility is to translate complex technical findings into understandable terms for judges and juries.

### Key Responsibilities:

*   **Expert Testimony:** Providing sworn testimony about their findings.
*   **Report Writing:** Preparing detailed and objective forensic reports outlining the investigation, methods used, and conclusions.
*   **Evidence Presentation:** Using demonstrative aids (charts, timelines, diagrams) to illustrate technical concepts and evidence.
*   **Clarifying Technicalities:** Explaining the functionality of systems, software, and devices relevant to the case.
*   **Objectivity and Impartiality:** Presenting evidence in a neutral and unbiased manner, regardless of who retained them.

### Best Practices for Forensic Engineers in Court:

*   **Know Your Case Inside Out:** Be intimately familiar with all evidence and analysis performed.
*   **Anticipate Questions:** Prepare for cross-examination by considering potential challenges to your findings.
*   **Speak Clearly and Concisely:** Avoid jargon and technical slang where possible.
*   **Be Honest and Direct:** If you don't know an answer, say so. Do not speculate.
*   **Maintain Professionalism:** Remain calm and composed even under pressure.
*   **Use Visual Aids Effectively:** Ensure visuals are clear, accurate, and support your testimony.

---

## 4. Challenges and Best Practices in Cybercrime Forensic Investigations

Forensic engineers face unique challenges when dealing with cybercrimes due to the dynamic nature of technology and the sophisticated methods employed by criminals.

### Challenges:

*   **Data Volatility:** Digital data can be easily altered or destroyed.
*   **Encryption:** Sophisticated encryption can make data inaccessible.
*   **Anonymity:** Attackers often use VPNs, Tor, and other anonymizing technologies.
*   **Jurisdictional Issues:** Cybercrimes can cross international borders, complicating investigations and legal proceedings.
*   **Rapidly Evolving Technologies:** Keeping pace with new attack vectors and forensic tools is challenging.
*   **Resource Constraints:** Investigations can be time-consuming and require specialized tools and expertise.
*   **Admissibility of Evidence:** Ensuring that collected digital evidence meets legal standards for admissibility.

### Best Practices:

*   **Follow Standard Operating Procedures (SOPs):** Adhere to established protocols for evidence collection, preservation, and analysis.
*   **Continuous Professional Development:** Stay updated on new technologies, forensic techniques, and legal requirements.
*   **Secure and Document Everything:** Maintain meticulous records and a strict chain of custody.
*   **Utilize Specialized Forensic Tools:** Employ hardware and software designed for forensically sound data acquisition and analysis.
*   **Collaborate and Network:** Work with other forensic professionals and law enforcement agencies.
*   **Understand Legal Frameworks:** Be aware of relevant laws and regulations pertaining to digital evidence.
*   **Maintain Objectivity:** Remain impartial throughout the investigation and reporting process.

---

## Practice Questions & Answers

**Question 1:** You are a forensic engineer investigating a case of unauthorized access to a company's internal servers. You discover that the attacker used a compromised employee's credentials. What is the most critical first step in preserving the digital evidence from the employee's workstation?

**Answer:** The most critical first step is to ensure that the workstation is immediately taken offline and the hard drive is imaged using a forensic write-blocker to prevent any modification of the data.

**Question 2:** In a SIM swapping case, what type of record from a mobile carrier would be most crucial to prove that the attacker controlled the victim's phone number?

**Answer:** Call Detail Records (CDRs) and SMS logs showing communications initiated from or routed to the victim's phone number after the alleged swap, along with activation records for the new SIM card linked to the victim's account.

**Question 3:** An intellectual property theft case involves a software engineer allegedly copying proprietary source code. What type of digital artifact would be most valuable for demonstrating the *act* of copying the code?

**Answer:** File access logs on the employee's workstation showing the execution of copy commands on the source code files, coupled with logs from any external storage devices (like USB drives) indicating data transfer.

**Question 4:** Explain the importance of the "chain of custody" in forensic engineering and provide an example of how it could be broken.

**Answer:** The chain of custody is critical because it proves that the evidence presented in court has not been tampered with, altered, or substituted. It ensures the integrity and admissibility of the evidence. A broken chain of custody could occur if a forensic investigator collected evidence, left it unattended on an unlocked desk, and another individual accessed it without proper documentation of the transfer.

---

## Important Points to Remember:

*   **Integrity is paramount:** Always prioritize the preservation of digital evidence.
*   **Documentation is key:** Meticulously document every step of your process.
*   **Clarity in court:** Be prepared to explain complex technical details to a non-technical audience.
*   **Objectivity:** Present findings impartially.
*   **Continuous learning:** The cyber landscape is constantly changing; stay updated.
*   **Chain of Custody:** Never compromise this crucial aspect of evidence handling.
*   **Understand the "why":** Beyond *how* a crime happened, understand the technical motivations and methods.
