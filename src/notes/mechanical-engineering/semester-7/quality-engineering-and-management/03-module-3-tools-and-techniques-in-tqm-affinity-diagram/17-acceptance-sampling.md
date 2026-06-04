---
title: "Acceptance sampling"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 3: Tools and Techniques in TQM : Affinity diagram"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446417f"
status: "completed"
scrapedAt: "2026-05-20T18:16:51.953Z"
---
# Quality Engineering and Management: Module 3 - Tools and Techniques in TQM

## Topic: Acceptance Sampling

### 1. Introduction to Acceptance Sampling

Acceptance sampling is a method of quality control that involves inspecting a random sample of a product lot to determine whether to accept or reject the entire lot based on predetermined quality standards. It is used when 100% inspection is impractical or uneconomical, or when testing destroys the product.

*   **Purpose:** To make a decision about the quality of a lot of products without inspecting every single item.
*   **When is it used?**
    *   When inspection is destructive (e.g., testing the lifespan of a light bulb).
    *   When 100% inspection is too costly or time-consuming.
    *   When the cost of passing a defective item is less than the cost of 100% inspection.
    *   When incoming material from a supplier is involved, and the supplier has a quality assurance system.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11)**

### 2. Key Concepts and Definitions

*   **Lot:** A group of items produced under similar conditions.
*   **Sample:** A subset of items selected from a lot for inspection.
*   **Attribute Sampling:** Used when quality is measured by whether an item conforms or does not conform to requirements (e.g., defective/non-defective).
*   **Variables Sampling:** Used when quality is measured by a continuous variable (e.g., weight, length, tensile strength).
*   **Acceptance Number (c):** The maximum number of non-conforming items allowed in a sample for the lot to be accepted.
*   **Rejection Number:** The minimum number of non-conforming items in a sample that leads to the rejection of the lot.
*   **Producer's Risk ($\alpha$)**: The probability of rejecting a lot that actually meets the acceptable quality level. Also known as Type I error.
*   **Consumer's Risk ($\beta$)**: The probability of accepting a lot that is worse than the acceptable quality level. Also known as Type II error.
*   **Acceptable Quality Level (AQL):** The maximum percentage of defective items that can be considered satisfactory for a process. This is a **producer's** target.
*   **Lot Tolerance Percent Defective (LTPD):** The maximum percentage of defective items that would be considered unacceptable. This is a **consumer's** target.
*   **Indifference Quality Level (IQL):** The quality level where the producer's risk and consumer's risk are equal.
*   **Average Outgoing Quality (AOQ):** The expected proportion of defective items in the product after inspection and rectification of rejected lots.
*   **Average Outgoing Quality Limit (AOQL):** The maximum value of AOQ.

**(Referenced from Montgomery, Third Edition, Chapter 13 and SubburajRamasamy, First Edition, Chapter 7)**

### 3. Types of Acceptance Sampling Plans

#### 3.1. Attribute Sampling Plans

These plans are based on counting the number of non-conforming items in a sample.

**a) Single Sampling Plan:**
*   A single sample is drawn from the lot.
*   The number of non-conforming items in the sample is counted.
*   Decision:
    *   If the number of non-conforming items is less than or equal to the acceptance number ($c$), the lot is accepted.
    *   If the number of non-conforming items is greater than the acceptance number, the lot is rejected.

**b) Double Sampling Plan:**
*   A first sample is drawn.
*   If the number of non-conforming items is within the acceptance limit for the first sample, the lot is accepted.
*   If the number of non-conforming items exceeds the rejection limit for the first sample, the lot is rejected.
*   If the number of non-conforming items falls between the acceptance and rejection limits for the first sample, a second sample is drawn.
*   The total number of non-conforming items from both samples is compared to a second acceptance number to make the final decision.
*   **Advantages:** Can be more efficient than single sampling, especially for poor quality lots, as it might allow rejection with fewer items inspected.

**c) Multiple Sampling Plan:**
*   Similar to double sampling, but allows for more than two samples.
*   A sequence of samples is drawn.
*   At each step, the lot can be accepted, rejected, or a further sample can be taken.
*   **Advantages:** Generally more efficient than double sampling in terms of the number of items inspected, especially for lots near the AQL.

**d) Sequential Sampling Plan:**
*   Items are inspected one by one.
*   At each step, a decision is made to accept, reject, or continue sampling.
*   **Advantages:** Most efficient in terms of the number of items inspected on average, but can be more complex to administer.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11 and Mitra, Second Edition, Chapter 6)**

#### 3.2. Variables Sampling Plans

These plans are based on measuring a characteristic of the sampled items. They are typically used when the quality characteristic is normally distributed.

*   **Known Standard Deviation:** Used when the process standard deviation ($\sigma$) is known. Decisions are based on the sample mean ($\bar{x}$) and $\sigma$.
*   **Unknown Standard Deviation:** Used when the process standard deviation ($\sigma$) is unknown and estimated by the sample standard deviation ($s$). Decisions are based on the sample mean ($\bar{x}$), sample standard deviation ($s$), and the sample size ($n$).
*   **Advantages:** Generally more efficient than attribute sampling, requiring smaller sample sizes for the same level of protection.

**(Referenced from Montgomery, Third Edition, Chapter 13)**

### 4. Designing Acceptance Sampling Plans

Designing a sampling plan involves determining the sample size ($n$) and the acceptance number ($c$) (or critical values for variables sampling) to achieve desired levels of producer's and consumer's risk.

*   **Steps:**
    1.  **Define the quality characteristic:** What is being measured (e.g., proportion defective, mean strength)?
    2.  **Specify the sampling method:** Single, double, multiple, or sequential? Attribute or variables?
    3.  **Determine the lot size:** This influences the sampling plan's effectiveness and the choice of standards (e.g., MIL-STD-105E).
    4.  **Set the AQL:** The maximum acceptable level of defects from the producer's perspective.
    5.  **Set the LTPD:** The maximum unacceptable level of defects from the consumer's perspective.
    6.  **Choose producer's risk ($\alpha$) and consumer's risk ($\beta$):** These are typically set at 0.05 or 0.10.
    7.  **Use standard tables or calculate parameters:** Tables like MIL-STD-105E (for attributes) or Dodge-Romig tables, or statistical software/formulas can be used.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11)**

### 5. Operating Characteristic (OC) Curve

The OC curve is a graphical representation of the performance of an acceptance sampling plan. It plots the probability of accepting a lot (Pa) against the actual proportion of defects in the lot (p).

*   **Shape of the OC Curve:**
    *   For a good plan, the curve should be steep, quickly transitioning from high Pa to low Pa.
    *   A curve that is too flat indicates a poor plan with high risks.
*   **Key Points on the OC Curve:**
    *   **AQL:** The corresponding Pa should be high (e.g., 0.95 or more).
    *   **LTPD:** The corresponding Pa should be low (e.g., 0.10 or less).
    *   **Producer's Risk ($\alpha$):** The probability of rejection when the lot quality is at AQL. $P(\text{reject} | p=AQL) = \alpha$. Therefore, $P(\text{accept} | p=AQL) = 1 - \alpha$.
    *   **Consumer's Risk ($\beta$):** The probability of acceptance when the lot quality is at LTPD. $P(\text{accept} | p=LTPD) = \beta$.

**(Referenced from Montgomery, Third Edition, Chapter 13 and Mitra, Second Edition, Chapter 6)**

#### Example: OC Curve for a Single Sampling Plan (n=50, c=2)

Assume a lot size of 1000. We can use the binomial distribution to calculate the probability of acceptance.
$P_a = P(X \le c) = \sum_{i=0}^{c} \frac{n!}{i!(n-i)!} p^i (1-p)^{n-i}$

Let's calculate for different values of $p$:
*   If $p = 0.02$ (AQL):
    $P_a = \sum_{i=0}^{2} \frac{50!}{i!(50-i)!} (0.02)^i (0.98)^{50-i}$
    $P_a = (0.98)^{50} + \frac{50!}{1!49!} (0.02)^1 (0.98)^{49} + \frac{50!}{2!48!} (0.02)^2 (0.98)^{48}$
    $P_a \approx 0.364 + 0.372 + 0.186 \approx 0.922$
    So, if $p=0.02$, there is about a 92.2% chance of acceptance. The producer's risk ($ \alpha $) would be $1 - 0.922 = 0.078$.

*   If $p = 0.10$ (LTPD):
    $P_a = \sum_{i=0}^{2} \frac{50!}{i!(50-i)!} (0.10)^i (0.90)^{50-i}$
    (Using Poisson approximation or software for calculation)
    $P_a \approx 0.016$
    So, if $p=0.10$, there is about a 1.6% chance of acceptance. The consumer's risk ($ \beta $) would be $0.016$.

This example demonstrates how the OC curve helps visualize the trade-off between producer's and consumer's risks.

### 6. Average Outgoing Quality (AOQ)

AOQ represents the average quality of the product after it has been inspected and rejected lots have been rectified (defective items replaced with good ones).

*   **Formula:** $AOQ = P_a \times p \times \frac{N-n}{N}$
    Where:
    *   $P_a$ = Probability of acceptance
    *   $p$ = Proportion of defective items in the lot
    *   $N$ = Lot size
    *   $n$ = Sample size
*   **Assumptions for AOQ:** Rejected lots are 100% inspected, and all defective items found are replaced with good ones.
*   **Average Outgoing Quality Limit (AOQL):** The maximum value of AOQ. This is a very important measure for establishing a sampling plan that guarantees a certain level of outgoing quality, regardless of the incoming quality.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11 and Mitra, Second Edition, Chapter 6)**

#### Example: AOQ Calculation

Using the previous example ($n=50, c=2$, lot size $N=1000$):
*   If $p = 0.02$: $P_a \approx 0.922$
    $AOQ = 0.922 \times 0.02 \times \frac{1000-50}{1000} = 0.922 \times 0.02 \times 0.95 = 0.0175$
*   If $p = 0.05$: (Assume $P_a \approx 0.56$)
    $AOQ = 0.56 \times 0.05 \times 0.95 = 0.0266$

The AOQ curve generally rises from zero, reaches a maximum (AOQL), and then declines as incoming quality ($p$) approaches 1.

### 7. Standards for Acceptance Sampling

Several standards provide ready-made acceptance sampling plans, which are widely used in industry.

*   **MIL-STD-105E (ANSI/ASQ Z1.4):** This is perhaps the most well-known standard for attribute sampling. It provides plans based on lot size, inspection level, and AQL. It specifies how to choose sample sizes and acceptance numbers for single, double, and multiple sampling.
*   **Dodge-Romig Tables:** These were among the first standards developed for acceptance sampling. They are based on either Average Outgoing Quality Limit (AOQL) or Lot Tolerance Percent Defective (LTPD).
*   **ISO 2859 Series:** International standards that are similar in principle to MIL-STD-105E.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11 and Montgomery, Third Edition, Chapter 13)**

### 8. Advantages and Disadvantages of Acceptance Sampling

#### Advantages:

*   **Cost-effective:** Cheaper than 100% inspection when appropriate.
*   **Faster decision making:** Allows for quicker acceptance or rejection of lots.
*   **Reduced inspection effort:** Conserves inspection resources.
*   **Motivation for supplier improvement:** Encourages suppliers to maintain good quality to avoid lot rejections.
*   **Protection against severe defects:** Useful for protecting against extremely bad lots.

#### Disadvantages:

*   **Risk of wrong decisions:** Producer's risk and consumer's risk are inherent.
*   **Less information:** Provides less information about product quality and process variability compared to 100% inspection or statistical process control (SPC).
*   **Does not improve quality:** Acceptance sampling identifies poor quality; it doesn't inherently improve the process.
*   **Potential for friction:** Can create adversarial relationships between buyer and seller if not managed well.
*   **Assumes lot homogeneity:** Assumes items within a lot are similar, which might not always be true.

**(Referenced from Besterfield et al., Fifth Edition, Chapter 11 and SubburajRamasamy, First Edition, Chapter 7)**

### 9. Relevance to TQM and Course Outcomes

*   **CO1 (Knowledge of TQM and gurus):** Understanding acceptance sampling is crucial for implementing effective quality control systems, a core tenet of TQM. While not directly tied to specific gurus, its application supports the goals of continuous improvement and customer satisfaction advocated by all TQM leaders.
*   **CO2 (Human dimensions of TQM):** Acceptance sampling can involve human judgment in inspection. Ethical considerations in sampling and the impact of errors (producer's/consumer's risk) on stakeholders are important human dimensions.
*   **CO3 (Implement different tools and techniques in TQM):** Acceptance sampling is a direct tool used within TQM for managing product quality, especially at the acceptance stage.
*   **CO4 (Implement different statistical quality control techniques):** Acceptance sampling is a statistical technique used for decision-making based on sample data. It complements other SQC techniques like control charts.
*   **CO5 (Strategic Quality Management):** Acceptance sampling plays a role in strategic decisions related to supplier selection, contract negotiation (specifying quality requirements), and managing the supply chain to ensure product quality and customer satisfaction.

**(Referenced from Course Outcomes description)**

### 10. Practice Questions and Exercises

**Question 1:**
Define the terms Producer's Risk and Consumer's Risk in acceptance sampling.
**Answer:**
*   **Producer's Risk ($\alpha$):** The probability of rejecting a lot that actually conforms to the acceptable quality level (AQL). This is a Type I error.
*   **Consumer's Risk ($\beta$):** The probability of accepting a lot that is worse than the acceptable quality level (e.g., at LTPD). This is a Type II error.

**Question 2:**
When would you choose acceptance sampling over 100% inspection? Give two reasons.
**Answer:**
1.  When the inspection process is destructive.
2.  When 100% inspection is prohibitively expensive or time-consuming.

**Question 3:**
Explain the purpose of an Operating Characteristic (OC) curve for an acceptance sampling plan.
**Answer:**
The OC curve graphically illustrates the performance of an acceptance sampling plan by showing the probability of accepting a lot for different levels of incoming quality (proportion of defects). It helps in understanding the trade-off between the producer's and consumer's risks.

**Question 4:**
A company uses a single sampling plan with $n=100$ and $c=3$. If the proportion of defects in a lot is $p=0.05$, what is the approximate probability of accepting the lot? (Assume Poisson approximation where $np = 100 \times 0.05 = 5$).
**Answer:**
Using Poisson approximation, $P(X \le 3)$ where $\lambda = np = 5$.
$P(X \le 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$
$P(X \le 3) = e^{-5} \left(\frac{5^0}{0!} + \frac{5^1}{1!} + \frac{5^2}{2!} + \frac{5^3}{3!}\right)$
$P(X \le 3) = e^{-5} (1 + 5 + 12.5 + 20.833)$
$P(X \le 3) = 0.0067 \times (39.333) \approx 0.2635$
So, the approximate probability of accepting the lot is 0.2635 or 26.35%.

**Question 5:**
What is the difference between AQL and LTPD?
**Answer:**
*   **AQL (Acceptable Quality Level):** The maximum percentage of defective items that is considered satisfactory as a process average. It represents a quality level that the producer aims to maintain and the consumer considers acceptable for routine acceptance.
*   **LTPD (Lot Tolerance Percent Defective):** The maximum percentage of defective items that is considered unacceptable for acceptance. It represents a quality level that the consumer wants to protect against, corresponding to a high consumer's risk ($\beta$).

### 11. Important Points to Remember

*   Acceptance sampling is a **go/no-go decision** tool for lots, not a process improvement tool.
*   It involves a **trade-off** between inspection cost and risk of wrong decisions.
*   The **OC curve** is central to understanding and designing sampling plans.
*   **Attribute sampling** is based on counts of non-conformities, while **variables sampling** is based on measurements.
*   Standards like **MIL-STD-105E (ANSI/ASQ Z1.4)** provide practical guidelines for implementing acceptance sampling.
*   **AOQL** is a measure of the average outgoing quality, providing a form of protection against very poor incoming lots.
*   Acceptance sampling is a tool within the broader framework of TQM and supports strategic quality management by managing supplier quality.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### 12. Further Reading and References

*   **Besterfield D. H. , BesterfieldC, Besterfield G. H., Besterfield M, U. Hemant, U.Rashmi (Pearson Education, Fifth Edition, 2018):** Chapter 11 (Acceptance Sampling)
*   **SubburajRamasamy (Tata McGraw Hill Education, First Edition, 2017):** Chapter 7 (Acceptance Sampling)
*   **D. C. Montgomery (John Wiley & Sons, Third Edition):** Chapter 13 (Acceptance Sampling)
*   **Mitra A. (PHI, Second Edition, 1998):** Chapter 6 (Acceptance Sampling)

This concludes the study notes on Acceptance Sampling. Ensure you review the examples and practice questions to solidify your understanding.