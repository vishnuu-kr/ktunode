---
title: "Acceptance sampling."
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b16"
status: "completed"
scrapedAt: "2026-05-20T18:07:08.386Z"
---
# Quality Engineering and Management - Module 3: Tools and Techniques in TQM

## Topic: Acceptance Sampling

This module delves into practical tools and techniques used in Total Quality Management (TQM). Within this module, we will focus on **Acceptance Sampling**, a crucial method for quality control.

---

### **1. Introduction to Acceptance Sampling (CO3, CO4)**

Acceptance sampling is a method of inspecting a sample of a product or service to determine whether to accept or reject an entire lot or batch. It's a statistical tool used when 100% inspection is impractical or uneconomical, or when destructive testing is involved.

**Key Concepts:**

*   **Lot:** A collection of units of product produced under similar conditions.
*   **Sample:** A subset of units selected from a lot for inspection.
*   **Inspection:** The process of examining units to determine conformance to specifications.
*   **Acceptance Decision:** The decision to accept or reject a lot based on the results of sample inspection.
*   **Producer's Risk (Alpha Risk, Type I Error):** The probability of rejecting a lot that is actually good (i.e., meets the acceptable quality level).
*   **Consumer's Risk (Beta Risk, Type II Error):** The probability of accepting a lot that is actually bad (i.e., does not meet the acceptable quality level).

**Definitions (Referencing Besterfield et al., Fifth Edition):**

*   **Acceptance Sampling:** "A method of classifying a lot as acceptable or unacceptable based on the results of a sample taken from the lot." (Chapter 10, p. 225)
*   **Average Outgoing Quality (AOQ):** The expected percentage of defective items in the output after inspection and rectification.
*   **Average Total Quality (ATQ):** The percentage of defective items in the lot before inspection.
*   **Average Sample Number (ASN):** The average number of units inspected per lot.

**Why Use Acceptance Sampling?**

*   **Economical:** Reduces inspection costs compared to 100% inspection.
*   **Practicality:** Essential when destructive testing is required (e.g., testing the lifespan of a light bulb).
*   **Motivation for Suppliers:** Encourages suppliers to maintain high quality to avoid rejected lots.
*   **Not a substitute for quality improvement:** It's a control tool, not a method for making bad products good.

**Besterfield et al.** emphasizes that acceptance sampling "is a compromise between no inspection and 100 percent inspection." (Chapter 10, p. 225).

---

### **2. Types of Acceptance Sampling Plans (CO3, CO4)**

Acceptance sampling plans can be classified based on the type of inspection and the type of product characteristic being inspected.

**2.1 Based on Type of Inspection:**

*   **Discovery Sampling:** Used when the probability of a single defect is very low. The sample size is large enough to have a high probability of finding at least one defect if the proportion of defects exceeds a specified limit.
    *   *Example:* Inspecting a large batch of individually packaged items for a single missing component.
*   **Discovery Sampling (with correction):** Similar to discovery sampling, but if a defect is found, additional inspection is performed to identify and correct all defects.
*   **Acceptance Sampling:** The most common type, where a decision is made to accept or reject a lot based on the number of defects found in the sample.

**2.2 Based on Product Characteristic:**

*   **Acceptance Sampling by Attributes:** The inspection involves classifying each unit in the sample as either conforming or nonconforming (defective or non-defective). The decision is based on the number or proportion of nonconforming units.
    *   **Variables Sampling:** This is when measurements are taken on a continuous scale, and the decision is based on the statistical parameters of these measurements (e.g., mean, standard deviation). *While not the primary focus of this topic in TQM, it's important to acknowledge its existence.*

**Focus on Acceptance Sampling by Attributes (Most common in TQM context):**

*   **Single Sampling Plan:** A specified number of units are drawn from a lot and inspected. If the number of nonconforming units is less than or equal to the acceptance number, the lot is accepted. If it is greater than the acceptance number, the lot is rejected.
    *   *Defined by:* Sample size ($n$) and acceptance number ($c$).
*   **Double Sampling Plan:** Allows for a second sample to be taken if the result of the first sample is inconclusive. This can reduce the average sample size compared to single sampling.
    *   *Defined by:* Two sample sizes ($n_1$, $n_2$) and two acceptance numbers ($c_1$, $c_2$), and rejection numbers ($c_1'$, $c_2'$).
*   **Multiple Sampling Plan:** An extension of double sampling, where more than two samples can be taken. This offers further economy in sampling.
*   **Sequential Sampling Plan:** Units are inspected one by one, and a decision is made after each inspection to accept the lot, reject the lot, or continue sampling.

**Besterfield et al.** (Chapter 10) details these plans, emphasizing that "Single sampling plans are the most widely used due to their simplicity." (p. 227).

---

### **3. Key Parameters of Acceptance Sampling Plans (CO3, CO4)**

Understanding the characteristics of a sampling plan is crucial for selecting the appropriate one.

**3.1 Operating Characteristic (OC) Curve:**

*   **Definition:** A graphical representation of the performance of an acceptance sampling plan. It plots the probability of accepting a lot against the proportion of nonconforming items in the lot.
*   **Purpose:** To illustrate the producer's and consumer's risks for a given plan.
*   **Interpreting the OC Curve:**
    *   **Left side:** Represents lots with a low proportion of defects, where the probability of acceptance is high.
    *   **Right side:** Represents lots with a high proportion of defects, where the probability of acceptance is low.
    *   **Steeper curve:** Indicates a more discriminating plan (sharper distinction between acceptable and unacceptable lots).
    *   **Flatter curve:** Indicates a less discriminating plan.

**Key points on the OC curve:**

*   **$p_1$ (Acceptable Quality Level - AQL):** The maximum percent defective that can be considered satisfactory as a process average. For lots submitted at this level, the producer's risk ($\alpha$) is desired to be low.
*   **$p_2$ (Lot Tolerance Percent Defective - LTPD) or Indefensible Quality Level (IQL):** A level of percent defective that is unacceptable. For lots submitted at this level, the consumer's risk ($\beta$) is desired to be low.

**3.2 Producer's Risk ($\alpha$) and Consumer's Risk ($\beta$) (CO4)**

*   **Producer's Risk ($\alpha$):** The probability of rejecting a lot with a proportion of defects equal to the AQL.
    *   *Typically set at 0.05 or 0.10.*
    *   *Associated with the point on the OC curve corresponding to the AQL.*
*   **Consumer's Risk ($\beta$):** The probability of accepting a lot with a proportion of defects equal to the LTPD.
    *   *Typically set at 0.05 or 0.10.*
    *   *Associated with the point on the OC curve corresponding to the LTPD.*

**3.3 Average Outgoing Quality Limit (AOQL)**

*   **Definition:** The maximum value of the average outgoing quality (AOQ) that can occur for a given acceptance sampling plan.
*   **Significance:** Provides a guarantee of the worst-case quality level expected after inspection, assuming rejected lots are 100% inspected and defective items are replaced or rectified.
*   **Mitra A.** (Second Edition) discusses AOQL as a measure to provide a "guaranteed limit on the outgoing quality." (Chapter 8, p. 275).

---

### **4. Designing Acceptance Sampling Plans (CO3, CO4)**

Several standards and methodologies are used for designing acceptance sampling plans.

**4.1 Mil-Std-105E (Now ANSI/ASQ Z1.4)**

*   **Purpose:** A widely used standard for acceptance sampling by attributes.
*   **Key Features:**
    *   Provides tables for determining sample sizes and acceptance/rejection numbers based on:
        *   **Lot Size:** The total number of units in the lot.
        *   **Inspection Level:** General inspection levels (I, II, III) or special inspection levels, which determine the stringency of sampling. Level II is the normal inspection level.
        *   **Acceptable Quality Level (AQL):** The desired quality level.
    *   Defines different sampling schemes: normal, tightened, and reduced inspection.
*   **Sampling Schemes:**
    *   **Normal Inspection:** Used when the supplier's quality is consistent.
    *   **Tightened Inspection:** Initiated when the supplier's quality deteriorates (e.g., two consecutive lots rejected). This increases sample size and reduces acceptance numbers.
    *   **Reduced Inspection:** Applied when the supplier's quality has been consistently good over a period. This reduces sample size and can increase acceptance numbers, leading to cost savings.

**Example Scenario (Illustrative, not a precise Mil-Std-105E calculation):**

Suppose a manufacturer produces batches of 1,000 electronic components. They want to ensure a maximum of 1% defective items (AQL = 1.0%). Using the principles of Mil-Std-105E (imagine a lookup in the standard):

*   **Lot Size:** 1,000
*   **Inspection Level:** II (Normal)
*   **AQL:** 1.0%

The standard would provide a sample size (e.g., $n=80$) and an acceptance number (e.g., $c=2$).

*   **If 2 or fewer defective components are found in the sample of 80, the lot is accepted.**
*   **If 3 or more defective components are found, the lot is rejected.**

**4.2 Dodge-Romig Tables**

*   **Purpose:** Developed by Harold Dodge and Harry Romig, these tables provide sampling plans designed to provide a specified average outgoing quality limit (AOQL) or a specific producer's risk.
*   **Key Features:**
    *   They offer plans for both single and double sampling.
    *   They are based on the assumption that rejected lots are 100% inspected and rectified.
*   **Besterfield et al.** mentions Dodge-Romig tables as an early and influential approach: "The Dodge-Romig sampling tables were among the first widely used systematic approaches to acceptance sampling." (Chapter 10, p. 228).

**4.3 Bayesian Acceptance Sampling**

*   **Concept:** Incorporates prior knowledge about the process or supplier into the sampling decision. It uses Bayes' theorem to update the probability of a lot being good or bad as more information (sample data) is gathered.
*   **Advantages:** Can be more efficient, especially when prior information is reliable.
*   **Reference:** While not explicitly detailed in the provided Besterfield or Subburaj texts for basic acceptance sampling, **Mitra A.** (Second Edition) might touch upon Bayesian concepts in broader statistical quality control discussions. (Chapter 7, "Bayesian Methods in Quality Control").

---

### **5. Advantages and Disadvantages of Acceptance Sampling (CO3)**

**5.1 Advantages:**

*   **Cost Savings:** Generally less expensive than 100% inspection.
*   **More Realistic:** Especially for destructive testing or large volumes.
*   **Motivation for Suppliers:** Encourages consistent quality from suppliers.
*   **Protection:** Provides a level of protection for both producers (against rejection of good lots) and consumers (against acceptance of bad lots).
*   **Improved Quality:** Can lead to improved overall product quality by identifying and addressing quality issues.

**5.2 Disadvantages:**

*   **Risk of Wrong Decision:** There's always a chance of incorrectly accepting a bad lot or rejecting a good lot (producer's and consumer's risks).
*   **Does Not Improve Quality Directly:** It's a detection method, not a prevention method. It doesn't fix the underlying causes of defects.
*   **Administrative Complexity:** Developing and managing sampling plans can be complex.
*   **Potential for Substandard Lots to Pass:** If the sampling plan is not robust, poor-quality lots might still be accepted.
*   **May Not Detect All Defects:** Smaller batches or unique defect patterns might be missed.

**Besterfield et al.** highlights the inherent risk: "Acceptance sampling involves inherent risks for both the producer and the consumer." (Chapter 10, p. 225).

---

### **6. Acceptance Sampling in TQM (CO1, CO3)**

While acceptance sampling is a statistical tool, its role in TQM is nuanced.

*   **Focus on Prevention over Detection:** TQM philosophies, pioneered by figures like Deming and Juran, emphasize preventing defects rather than inspecting them out. Acceptance sampling is seen as a **last resort** or a tool for managing incoming materials when the supplier's process is not fully under control or when 100% inspection is impossible.
*   **Supplier Partnerships:** In TQM, there's a strong emphasis on building partnerships with suppliers. This often involves working with suppliers to improve their processes so that acceptance sampling becomes less necessary.
*   **Data-Driven Decisions:** Acceptance sampling provides data that can be used to monitor supplier performance and identify areas for improvement.
*   **Continuous Improvement:** The results of acceptance sampling (e.g., trends in lot rejections) can feed into the continuous improvement cycle.
*   **Juran's Quality Handbook** would likely advocate for minimizing reliance on acceptance sampling by fostering supplier capability and implementing in-process controls.

**CO1 (Knowledge of quality management and contributions of quality gurus):** Understanding acceptance sampling provides context for how early quality control methods were implemented, contrasting with the more proactive, prevention-focused approaches advocated by modern quality gurus like Deming and Crosby.

**CO2 (Identify various human dimensions of TQM):** While acceptance sampling is statistical, the decisions made based on its results (accept/reject) have human implications for the producer (reputation, costs) and consumer (product quality, safety).

---

### **7. Practice Questions and Answers**

**Question 1:** Define acceptance sampling and explain its primary purpose.
**Answer:** Acceptance sampling is a statistical method used to determine whether an entire lot or batch of products should be accepted or rejected based on the inspection of a sample taken from that lot. Its primary purpose is to provide a quality control measure when 100% inspection is impractical, uneconomical, or impossible, while still offering a degree of protection to both the producer and the consumer.

**Question 2:** Differentiate between producer's risk and consumer's risk in acceptance sampling.
**Answer:**
*   **Producer's Risk (Alpha Risk):** The probability of rejecting a lot that is actually of acceptable quality (e.g., meeting the AQL).
*   **Consumer's Risk (Beta Risk):** The probability of accepting a lot that is of unacceptable quality (e.g., exceeding the LTPD).

**Question 3:** What is an Operating Characteristic (OC) curve, and what information does it convey?
**Answer:** An Operating Characteristic (OC) curve is a graphical plot that shows the probability of accepting a lot for each possible proportion of nonconforming items in the lot. It helps visualize the performance of an acceptance sampling plan by illustrating the producer's and consumer's risks.

**Question 4:** When might a company choose a double sampling plan over a single sampling plan?
**Answer:** A company might choose a double sampling plan over a single sampling plan to potentially reduce the average sample size required, especially for lots where the quality is borderline. It allows for a second chance to decide on the lot, potentially avoiding the inspection of more items than necessary in a single plan.

**Question 5:** How does acceptance sampling align with the principles of Total Quality Management (TQM)?
**Answer:** While TQM emphasizes defect prevention over detection, acceptance sampling can be used within TQM as a tool for managing incoming materials from suppliers whose processes may not be fully controlled, or when 100% inspection is not feasible. It provides data for supplier evaluation and can highlight areas for process improvement, thus supporting the continuous improvement aspect of TQM. However, it's generally considered a secondary tool compared to in-process controls and supplier development.

---

### **8. Important Points to Remember**

*   Acceptance sampling is a **sampling inspection** technique, not a defect **prevention** technique.
*   The **OC curve** is critical for understanding the risks associated with a sampling plan.
*   **Producer's Risk ($\alpha$)** and **Consumer's Risk ($\beta$)** are inherent trade-offs.
*   **Mil-Std-105E (ANSI/ASQ Z1.4)** is a standard that provides systematic guidance for acceptance sampling by attributes.
*   In a true TQM philosophy, the goal is to **reduce or eliminate the need for acceptance sampling** through robust process control and supplier partnerships.
*   Acceptance sampling is most applicable when **100% inspection is not feasible or economical**.

---

This comprehensive set of notes covers the fundamental aspects of acceptance sampling within the context of Quality Engineering and Management, aligning with the provided course outcomes and referencing key concepts from the specified textbooks. Remember to delve deeper into the specific tables and calculations presented in the textbooks for practical application.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
