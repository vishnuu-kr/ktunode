---
title: "Federated learning."
subject: "RESPONSIBLE ARTIFICIAL INTELLIGENCE"
module: "Module 3: Ethics, Privacy and Security :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c48e"
status: "completed"
scrapedAt: "2026-05-20T17:10:41.218Z"
---
# Responsible Artificial Intelligence: Module 3 - Ethics, Privacy, and Security

## Topic: Federated Learning

This module explores the intersection of ethics, privacy, and security in Artificial Intelligence. Federated Learning is a key technique that addresses some of these critical concerns, enabling collaborative model training without direct data sharing.

---

### Learning Outcomes Covered:

*   **Understanding the core principles of Federated Learning:** What it is, why it's important, and its foundational ideas.
*   **Identifying the benefits and advantages of Federated Learning:** How it contributes to privacy, security, and data utility.
*   **Exploring different types of Federated Learning:** Understanding variations and their suitability for different scenarios.
*   **Discussing the challenges and limitations of Federated Learning:** Recognizing potential drawbacks and areas for improvement.
*   **Examining the security and privacy considerations in Federated Learning:** How to protect the model and the data indirectly.
*   **Understanding the application of Federated Learning in various domains:** Real-world use cases and impact.

---

### 1. Introduction to Federated Learning

Federated Learning (FL) is a machine learning approach that allows multiple decentralized edge devices or servers to collaboratively train a shared prediction model while keeping their local data samples private. Instead of sending raw data to a central server, the model is sent to the devices.

#### Key Concepts & Definitions:

*   **Decentralized Training:** Training occurs on local devices, not on a central server.
*   **Global Model:** The shared model that all participants contribute to improving.
*   **Local Model:** A copy of the global model trained on a specific device's local data.
*   **Model Updates (Gradients/Weights):** The changes made to the local model based on its training. These updates, not the raw data, are sent back to the central server.
*   **Aggregation Server (or Orchestrator):** A central entity responsible for coordinating the FL process, collecting model updates, and updating the global model.
*   **Participants (Clients):** The decentralized devices or servers that hold their own data and perform local training.

#### Why is Federated Learning Important?

*   **Privacy Preservation:** Raw data never leaves the user's device, significantly enhancing privacy.
*   **Data Sovereignty:** Allows organizations to train models without sharing sensitive proprietary data.
*   **Reduced Communication Costs:** Sending smaller model updates is often more efficient than sending large datasets.
*   **Access to Diverse Data:** Enables training on a wider range of real-world data residing on edge devices.
*   **Regulatory Compliance:** Helps meet strict data privacy regulations like GDPR and CCPA.

---

### 2. How Federated Learning Works (The General Process)

The typical FL process involves several rounds of communication and computation between the central server and the participants.

**General Steps:**

1.  **Initialization:** The central server initializes a global model (e.g., with random weights).
2.  **Client Selection:** The server selects a subset of eligible participants for the current training round.
3.  **Model Distribution:** The current global model is sent to the selected participants.
4.  **Local Training:** Each selected participant trains its local copy of the model using its own private data. This involves computing gradients or updating model weights.
5.  **Model Update Transmission:** Participants send their updated model parameters (e.g., gradients, weights) back to the central server.
6.  **Global Model Aggregation:** The central server aggregates the received model updates from participants. Common aggregation strategies include Federated Averaging (FedAvg).
7.  **Global Model Update:** The global model is updated based on the aggregated updates.
8.  **Iteration:** Steps 2-7 are repeated for a specified number of rounds or until the model converges.

**Example Scenario: Keyboard Autocompletion**

*   **Goal:** Train a model to predict the next word a user might type.
*   **Participants:** Mobile phone users.
*   **Process:**
    1.  Your phone downloads the current global prediction model.
    2.  Your phone uses your typing history (stored locally) to train this model, making it better at predicting *your* next word.
    3.  Instead of sending your typing history, your phone sends back the *changes* (updates) it made to the model.
    4.  A central server collects these updates from millions of phones.
    5.  The server averages these updates to improve the global prediction model.
    6.  The improved global model is then distributed to all phones in the next update cycle.

---

### 3. Types of Federated Learning

Federated Learning can be categorized based on the nature of the data distribution and the participants.

#### 3.1. Horizontal Federated Learning (HFL)

*   **Description:** Participants have the same feature space but different sample spaces. This is the most common type.
*   **Example:** Multiple hospitals in different cities, all recording patient data with the same set of features (e.g., age, blood pressure, diagnosis), but each hospital has a unique set of patients. They want to train a diagnostic model without sharing patient records.

#### 3.2. Vertical Federated Learning (VFL)

*   **Description:** Participants have different feature spaces but the same sample space. The entities are the same, but they have different attributes recorded about them.
*   **Example:** A bank and an e-commerce company have data on the same set of users. The bank knows financial information (credit score, transaction history), while the e-commerce company knows purchasing behavior (browsing history, product preferences). They want to jointly train a model to predict creditworthiness or personalize recommendations without sharing user-specific data.

#### 3.3. Federated Transfer Learning (FTL)

*   **Description:** Addresses scenarios where participants have different feature spaces and different sample spaces. It combines federated learning with transfer learning techniques.
*   **Example:** Training a model for a specific medical condition on data from one country (different features, different samples) and then adapting it to another country with different data characteristics and a different set of patients.

---

### 4. Benefits and Advantages of Federated Learning

Federated Learning offers significant advantages in various scenarios, particularly when dealing with sensitive data.

#### 4.1. Enhanced Data Privacy and Confidentiality

*   **No Raw Data Sharing:** The most significant benefit. Local data remains on the device.
*   **Reduced Risk of Data Breaches:** Central server only handles aggregated model updates, not sensitive raw data.

#### 4.2. Improved Security

*   **Decentralized Data Storage:** No single point of failure for all data.
*   **Data Sovereignty and Control:** Organizations maintain control over their proprietary data.

#### 4.3. Regulatory Compliance

*   **Alignment with GDPR, HIPAA, CCPA:** Facilitates compliance with data protection laws.
*   **Enables AI in Regulated Industries:** Opens up possibilities for AI in healthcare, finance, etc.

#### 4.4. Access to Larger and More Diverse Datasets

*   **Leveraging Edge Data:** Utilizes data from vast numbers of devices that would otherwise be inaccessible.
*   **Real-World Data Bias Reduction:** Training on diverse, real-world data can lead to more robust and less biased models.

#### 4.5. Reduced Communication Overhead (in some cases)

*   **Smaller Updates:** Model parameters are typically smaller than raw datasets, especially for large datasets.

---

### 5. Challenges and Limitations of Federated Learning

Despite its advantages, FL also presents several challenges that need to be addressed.

#### 5.1. Communication Bottlenecks

*   **Frequent Updates:** Sending model updates can still be costly, especially for complex models or resource-constrained devices.
*   **Network Latency:** Unreliable or slow networks can significantly impact training speed.

#### 5.2. Statistical Heterogeneity (Non-IID Data)

*   **Data Skew:** Data on different devices is often not independently and identically distributed (non-IID). This can lead to model divergence or poor performance.
*   **Example:** User A primarily types in English, while User B primarily types in Spanish. Their local models will be very different, making aggregation challenging.

#### 5.3. System Heterogeneity

*   **Device Capabilities:** Devices have varying computational power, memory, and battery life, affecting training speed and reliability.
*   **Availability:** Devices may go offline, be unavailable, or have limited connectivity.

#### 5.4. Model Poisoning and Backdoor Attacks

*   **Malicious Participants:** A compromised participant could send poisoned model updates to degrade the global model's performance or introduce backdoors.
*   **Example:** A malicious participant might intentionally skew the model to misclassify certain inputs or create a hidden trigger for a specific behavior.

#### 5.5. Privacy Leaks (Subtle)

*   **Inference Attacks:** While raw data isn't shared, sophisticated attacks might infer information about local data from model updates, especially with differential privacy mechanisms not fully implemented.
*   **Example:** Reconstructing sensitive features from gradients or observing patterns in how a specific user's updates influence the global model.

#### 5.6. Hyperparameter Tuning and Model Convergence

*   **Complex Tuning:** Optimizing hyperparameters in a decentralized setting is more challenging.
*   **Slower Convergence:** Non-IID data and system heterogeneity can slow down the convergence of the global model.

---

### 6. Security and Privacy Considerations in Federated Learning

Ensuring the security and privacy of FL is paramount.

#### 6.1. Privacy-Enhancing Techniques

*   **Differential Privacy (DP):** Adding carefully calibrated noise to model updates before sending them to the server. This makes it statistically difficult to infer information about any single data point.
    *   **When to use:** Crucial for protecting against sophisticated inference attacks.
    *   **Trade-off:** Can impact model accuracy if noise is too high.
*   **Secure Multi-Party Computation (SMPC):** Cryptographic techniques that allow multiple parties to jointly compute a function over their inputs without revealing those inputs to each other.
    *   **Use case:** Encrypting model updates such that only the aggregated result can be decrypted.
    *   **Challenges:** Computationally intensive.
*   **Homomorphic Encryption (HE):** A form of encryption that allows computations to be performed on ciphertext, producing an encrypted result that, when decrypted, matches the result of operations performed on plaintext.
    *   **Use case:** Aggregating encrypted model updates directly.
    *   **Challenges:** Very computationally expensive and limited in the types of operations supported.

#### 6.2. Robustness against Attacks

*   **Anomaly Detection:** Identifying and discarding malicious model updates that deviate significantly from others.
*   **Secure Aggregation:** Using techniques (like SMPC) to ensure the server only sees the aggregated result, not individual updates.
*   **Participant Authentication:** Verifying the identity of participants to prevent unauthorized access.
*   **Defense against Model Poisoning:**
    *   **Robust Aggregation Algorithms:** Using median or trimmed mean instead of simple averaging.
    *   **Reputation Systems:** Assigning scores to participants based on their past behavior.

#### 6.3. Data Privacy in VFL and FTL

*   **Secure Intersection:** For VFL, securely identifying common samples between participants without revealing non-common samples or identities.
*   **Feature Alignment:** Developing methods to align features across different domains without explicit data sharing.

---

### 7. Applications of Federated Learning

FL is being applied across a wide range of industries and use cases.

#### 7.1. Mobile Devices

*   **Keyboard Prediction:** As discussed, improving next-word prediction.
*   **On-Device Speech Recognition:** Personalizing voice assistants.
*   **Smart Reply:** Generating context-aware quick replies in messaging apps.
*   **Activity Recognition:** Personalizing health and fitness tracking.

#### 7.2. Healthcare

*   **Disease Prediction:** Training models on patient data from multiple hospitals to predict disease outbreaks or individual risk.
*   **Medical Imaging Analysis:** Improving diagnostic accuracy by training on diverse medical scans.
*   **Drug Discovery:** Collaborative model training on genomic or clinical trial data.

#### 7.3. Finance

*   **Fraud Detection:** Training models on transaction data from different financial institutions.
*   **Credit Scoring:** Improving credit risk assessment without sharing sensitive customer financial data.
*   **Personalized Financial Advice:** Offering tailored recommendations.

#### 7.4. Automotive

*   **Autonomous Driving:** Training models on sensor data from different vehicles for improved object detection and navigation.
*   **Predictive Maintenance:** Predicting vehicle component failures based on aggregated sensor readings.

#### 7.5. Internet of Things (IoT)

*   **Smart Homes:** Optimizing energy consumption or personalizing device behavior.
*   **Industrial IoT:** Predictive maintenance and anomaly detection in manufacturing.

---

### 8. Practice Questions & Exercises

**Question 1: (Conceptual)**
What is the primary privacy benefit of Federated Learning compared to traditional centralized machine learning?

**Question 2: (Application)**
You are developing an FL system for smart home devices to learn user preferences for lighting and temperature. You have users in different regions, each with unique daily routines.
    *   Which type of Federated Learning (HFL, VFL, FTL) would be most appropriate for this scenario and why?
    *   What is a potential challenge you might face due to the users' different daily routines?

**Question 3: (Security)**
Suppose a malicious participant in an FL system is sending manipulated model updates to degrade the performance of a fraud detection model. What is one common privacy-enhancing technique that could help mitigate this risk, and how does it work?

**Question 4: (Comparison)**
Briefly explain the difference between Horizontal Federated Learning and Vertical Federated Learning.

---

### 9. Answers to Practice Questions

**Answer 1: (Conceptual)**
The primary privacy benefit of Federated Learning is that raw, sensitive data never leaves the user's device. Instead, only aggregated model updates (like gradients or weights) are shared, significantly reducing the risk of data exposure.

**Answer 2: (Application)**
    *   **Type of FL:** **Horizontal Federated Learning (HFL)** would be most appropriate. All users are essentially "samples" of smart home owners, and they all contribute to a global model that learns general patterns of lighting and temperature preferences. While their *specific routines* (data samples) differ, the *features* being measured (time of day, temperature, light levels, user input) are likely the same across all smart home devices.
    *   **Potential Challenge:** The main challenge would be **statistical heterogeneity (non-IID data)**. Users in different regions have vastly different daily routines, sleep schedules, and environmental conditions. This means the data distribution on each device will be unique. For example, a user in a region with long summer days will have different typical light usage patterns than a user in a region with short winter days. This can make it difficult for the global model to converge or perform well across all users.

**Answer 3: (Security)**
A common privacy-enhancing technique that could help mitigate the risk of manipulated model updates is **Differential Privacy (DP)**.
    *   **How it works:** Before the malicious participant sends their manipulated update to the central server, Differential Privacy would add carefully calibrated random noise to that update. This noise makes it statistically very difficult for the server (or anyone analyzing the updates) to determine whether a specific data point (or a set of data points that the malicious participant might be trying to influence) was present or absent in the training data used for that update. Therefore, even if the update is manipulated, the injected noise masks the specific nature of the manipulation related to individual data.

**Answer 4: (Comparison)**
*   **Horizontal Federated Learning (HFL):** Participants have the **same feature space** but **different sample spaces**. Think of two companies in the same industry that have data on different sets of customers.
*   **Vertical Federated Learning (VFL):** Participants have **different feature spaces** but the **same sample space**. Think of a bank and an e-commerce company that both have data on the same users, but the bank knows financial attributes, while the e-commerce company knows browsing behavior.

---

### Important Points to Remember:

*   **Privacy is the core driver:** FL's main advantage is keeping data decentralized.
*   **Model updates, not data, are shared:** This is the fundamental mechanism.
*   **Non-IID data is a major challenge:** Real-world data across devices is rarely identical.
*   **Security threats exist:** Model poisoning and inference attacks require careful consideration and mitigation.
*   **Differential Privacy and Secure Multi-Party Computation are key tools:** For enhancing privacy and security.
*   **FL is not a silver bullet:** It introduces its own set of complexities and trade-offs.
*   **Communication is still important:** Efficiently managing model updates is crucial.
*   **VFL and FTL address more complex data alignment problems.**

---
