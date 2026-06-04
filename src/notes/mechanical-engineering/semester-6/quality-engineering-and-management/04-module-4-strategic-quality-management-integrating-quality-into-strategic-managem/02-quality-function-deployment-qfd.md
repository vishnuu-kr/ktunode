---
title: "Quality Function Deployment (QFD)"
subject: "QUALITY ENGINEERING AND MANAGEMENT"
module: "Module 4: Strategic Quality Management : Integrating quality into strategic management "
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463b19"
status: "completed"
scrapedAt: "2026-05-20T18:07:09.918Z"
---
# Quality Function Deployment (QFD) - Study Notes

## Module 4: Strategic Quality Management: Integrating Quality into Strategic Management

**Topic:** Quality Function Deployment (QFD)

**Subject:** QUALITY ENGINEERING AND MANAGEMENT

---

### 1. Introduction to Quality Function Deployment (QFD)

**1.1 What is QFD?**

Quality Function Deployment (QFD) is a structured approach to translate customer needs and expectations (the "Voice of the Customer" or VOC) into specific product or service design features and requirements. It's a systematic methodology for designing high-quality products and services that meet customer demands.

**1.2 Core Idea of QFD**

The fundamental idea behind QFD is to ensure that customer requirements are understood and incorporated into every stage of the product/service development process, from initial concept to final production. It aims to prevent "designing in" defects and instead "design out" potential problems by proactively addressing customer needs.

**1.3 Purpose and Benefits of QFD**

*   **Customer Focus:** Ensures the organization is truly customer-centric by prioritizing what customers want.
*   **Cross-Functional Communication:** Facilitates collaboration and understanding between different departments (marketing, design, engineering, production).
*   **Product/Service Improvement:** Leads to better-designed products and services that are more likely to succeed in the market.
*   **Reduced Development Time & Cost:** By addressing potential issues early, QFD can prevent costly redesigns and rework.
*   **Competitive Advantage:** Helps organizations develop products that outperform competitors in meeting customer needs.
*   **Prioritization:** Enables effective prioritization of design features and engineering characteristics.

**1.4 Key Concepts in QFD**

*   **Voice of the Customer (VOC):** The stated and unstated needs, expectations, desires, and preferences of customers. This is the primary input for QFD.
*   **House of Quality (HOQ):** The most well-known QFD matrix, which visually links customer requirements to technical design requirements.
*   **Customer Requirements (What):** What the customer wants or expects from a product or service.
*   **Technical Characteristics (How):** How the product or service will be designed and engineered to meet customer requirements.
*   **Interrelationships:** The strength of the relationship between customer requirements and technical characteristics.
*   **Target Values:** Specific, measurable goals for technical characteristics.
*   **Competitive Assessment:** Evaluating how well current products (both internal and competitor) meet customer needs and how well they are designed.

**1.5 Historical Context and Evolution**

QFD originated in Japan in the 1970s at Mitsubishi's Kobe shipyard, pioneered by Yoji Akao and Shigeru Mizuno. It gained prominence through its application by Toyota and has since been widely adopted globally.

---

### 2. The House of Quality (HOQ)

The House of Quality is the central tool in QFD, serving as a visual framework for organizing and analyzing information.

**2.1 Structure of the House of Quality**

The HOQ is typically structured as follows:

|                                   | **Technical Characteristics (How)**                                    |
| :-------------------------------- | :--------------------------------------------------------------------- |
| **Customer Requirements (What)**  |                                                                        |
| **(Prioritized)**                 | **1. Customer Importance Ratings**                                     |
|                                   | **2. Technical Requirements**                                          |
|                                   | **3. Relationship Matrix (Interrelationships)**                        |
|                                   | **4. Target Values**                                                   |
|                                   | **5. Technical Importance Ratings**                                    |
|                                   | **6. Competitive Assessment (Customer View)**                          |
|                                   | **7. Competitive Assessment (Technical View)**                         |
|                                   | **8. Correlation Matrix (How/How relationships)**                      |
|                                   | **9. "Roof" or "Chow-Chow" (Interrelationship between Technical Specs)** |

**2.2 Components Explained**

*   **Customer Requirements (What):** This section lists the customer's needs and expectations, often gathered through surveys, interviews, focus groups, etc. These are then ranked by importance. (Besterfield et al., 2018).
*   **Customer Importance Ratings:** A numerical rating (e.g., 1-5 or 1-10) assigned to each customer requirement to indicate its relative importance to the customer.
*   **Technical Requirements (How):** This section lists the engineering or design specifications that will be used to fulfill the customer requirements. These are the "design parameters" or "performance measures."
*   **Relationship Matrix:** This is the core of the HOQ. It uses symbols (e.g., strong, moderate, weak relationship) or numerical values to indicate how strongly each technical characteristic influences each customer requirement.
    *   **Strong Relationship:** Often represented by a filled circle (●).
    *   **Moderate Relationship:** Often represented by a half-filled circle (○).
    *   **Weak Relationship:** Often represented by an open circle (○) or a triangle (△).
*   **Target Values:** Specific, measurable, achievable, relevant, and time-bound (SMART) goals set for each technical characteristic.
*   **Technical Importance Ratings:** Calculated by multiplying the customer importance rating by the corresponding relationship value in the matrix. This helps prioritize technical characteristics.
*   **Competitive Assessment (Customer View):** Evaluates how competitors' products perform against the customer requirements, and how the organization's current product performs.
*   **Competitive Assessment (Technical View):** Evaluates how competitors' products perform based on the technical characteristics, and how the organization's current product performs on these technical aspects.
*   **Correlation Matrix ("Roof"):** This section shows the relationships between the technical characteristics themselves. It identifies whether certain technical characteristics are positively correlated (improving one improves the other) or negatively correlated (improving one might negatively impact the other). This helps engineers understand trade-offs.

**2.3 Example of a Simplified HOQ**

Let's consider a simple example for a **smartphone's battery life**.

**Customer Requirements (What):**
1.  Long battery life (High Importance)
2.  Fast charging (Medium Importance)
3.  Durable battery (Low Importance)

**Technical Characteristics (How):**
1.  Battery Capacity (mAh)
2.  Processor Efficiency
3.  Screen Brightness Level
4.  Fast Charging Technology (Wattage)

**Simplified HOQ Illustration:**

| Customer Requirements (Importance) | Battery Capacity (mAh) | Processor Efficiency | Screen Brightness | Fast Charging Tech | Customer Importance Ratings | Competitive Assessment (Customer) |
| :--------------------------------- | :--------------------- | :------------------- | :---------------- | :----------------- | :-------------------------- | :-------------------------------- |
| **Long Battery Life (5)**          | ●● (Strong)            | ●● (Strong)          | △ (Weak)          | ○ (Moderate)       | **5**                       | Company A (4), Company B (5)      |
| **Fast Charging (3)**              | ○ (Moderate)           | △ (Weak)             | △ (Weak)          | ●● (Strong)        | **3**                       | Company A (3), Company B (4)      |
| **Durable Battery (1)**            | ○ (Moderate)           | △ (Weak)             | △ (Weak)          | △ (Weak)           | **1**                       | Company A (4), Company B (3)      |
| **Technical Importance Ratings**   | **(5*2 + 3*1 + 1*1 = 14)** | **(5*2 + 3*0 + 1*0 = 10)** | **(5*0 + 3*0 + 1*0 = 0)** | **(5*1 + 3*2 + 1*0 = 11)** |                             |                                   |
| **Target Values**                  | > 5000 mAh             | < 5W Idle Power      | < 75% Brightness  | > 30W              |                             |                                   |
| **Competitive Assessment (Tech)**  | Company A (5000 mAh), Company B (5200 mAh) | Company A (4W), Company B (5W) | Company A (80%), Company B (70%) | Company A (25W), Company B (30W) |                             |                                   |
| **Correlations**                   |                       |                      |                   |                    |                             |                                   |

*   **Interpretation:** In this simplified example, "Battery Capacity" and "Processor Efficiency" have the highest technical importance ratings (14 and 10 respectively), suggesting that design efforts should focus on these areas to improve battery life. "Fast Charging Tech" is important for the "Fast Charging" customer need. The competitive assessment shows Company B is stronger in battery capacity and matching our target for fast charging.

**2.4 Stages of QFD**

QFD can be implemented in multiple stages, often referred to as "Houses."

*   **Phase 1: Product Planning (The First HOQ):** Translates customer requirements into product design targets. This is the most common HOQ.
*   **Phase 2: Design Deployment:** Translates product design targets into subsystem or component characteristics.
*   **Phase 3: Process Planning:** Translates component characteristics into specific process operations.
*   **Phase 4: Production Planning:** Translates process operations into production requirements and quality controls.

*(Besterfield et al., 2018, discusses these phases in detail, emphasizing the flow of information from customer needs to production details.)*

---

### 3. Implementing QFD

**3.1 Steps in QFD Implementation (Phase 1)**

1.  **Identify Customer Requirements (The "What"):** Gather detailed customer needs, wants, and expectations.
2.  **Prioritize Customer Requirements:** Rank the importance of each customer requirement from the customer's perspective.
3.  **Identify Technical Characteristics (The "How"):** Determine the design features or performance measures that influence customer satisfaction.
4.  **Develop the Relationship Matrix:** Establish the strength of the relationship between each customer requirement and each technical characteristic.
5.  **Perform Competitive Benchmarking:** Assess how competitors and the company's current product perform on both customer requirements and technical characteristics.
6.  **Calculate Technical Importance:** Determine the relative importance of each technical characteristic based on customer priorities and the relationship matrix.
7.  **Set Target Values:** Define specific, measurable goals for the technical characteristics.
8.  **Identify Correlations:** Analyze the relationships between technical characteristics to understand potential trade-offs.
9.  **Review and Refine:** Validate the HOQ with cross-functional teams and stakeholders.

*(SubburajRamasamy (2017) provides practical steps for applying QFD, aligning with these core stages.)*

**3.2 Data Gathering for QFD**

*   **Customer Surveys:** Structured questionnaires to capture customer preferences.
*   **Interviews:** One-on-one discussions with customers.
*   **Focus Groups:** Group discussions to elicit detailed feedback and explore nuances.
*   **Market Research:** Analyzing competitor products and market trends.
*   **Product Usage Data:** Analyzing how customers actually use the product.

**3.3 Tools and Techniques Supporting QFD**

*   **Benchmarking:** Essential for competitive analysis.
*   **Pareto Analysis:** Can be used to prioritize customer requirements or technical characteristics.
*   **Statistical Process Control (SPC):** Useful in Phase 4 for monitoring production processes.
*   **Design of Experiments (DOE):** Can be used to optimize technical characteristics identified in QFD (Montgomery, 6th Edition).

---

### 4. QFD and Strategic Quality Management

QFD is a powerful tool for integrating quality into the overall strategic planning of an organization.

**4.1 Alignment with Strategy**

*   **Customer-Centric Strategy:** QFD directly supports strategies focused on customer satisfaction and loyalty.
*   **Competitive Strategy:** By benchmarking against competitors, QFD helps identify areas where the organization can gain a competitive edge.
*   **Product/Service Development Strategy:** It guides the direction and priorities for R&D and new product development.
*   **Resource Allocation:** QFD helps prioritize where to invest resources for maximum impact on customer satisfaction.

*(Besterfield et al. (2018) extensively covers how strategic quality management uses tools like QFD to align operations with organizational goals, contributing to CO5.)*

**4.2 Role in Different Quality Philosophies**

*   **Total Quality Management (TQM):** QFD is a cornerstone of TQM, ensuring a systematic approach to meeting customer needs and fostering cross-functional teamwork.
*   **Six Sigma:** QFD can be used in the Define phase of DMAIC to clearly understand customer requirements and translate them into measurable project goals.
*   **Lean Manufacturing:** While Lean focuses on waste reduction, QFD ensures that the product being produced is the one customers actually want, preventing waste in designing the wrong product.

**4.3 Linking QFD to Business Objectives**

By translating customer needs into technical specifications and then into process controls, QFD creates a clear line of sight between customer satisfaction and business performance (e.g., market share, profitability, customer retention).

---

### 5. Key Considerations and Challenges

*   **Data Quality:** The accuracy and completeness of customer data are critical.
*   **Team Expertise:** Requires a cross-functional team with diverse skills.
*   **Time and Resource Commitment:** QFD can be time-consuming and resource-intensive, especially for complex products.
*   **Defining "Appropriate" Relationships:** Subjectivity can be a challenge in assigning relationship strengths.
*   **Avoiding Information Overload:** The HOQ can become very large; simplification and focus are key.
*   **Maintaining Momentum:** Ensuring that the QFD output is actually used to drive design decisions is crucial.

---

### 6. Practice Questions and Exercises

**Question 1:** Define Quality Function Deployment (QFD) and explain its primary objective. (Knowledge Level: K2, Aligns with CO1, CO5)

**Answer:** Quality Function Deployment (QFD) is a systematic methodology used to translate customer needs and expectations into specific product design features and requirements. Its primary objective is to ensure that products and services are designed to meet and exceed customer satisfaction by systematically incorporating the "Voice of the Customer" into every stage of the development process.

**Question 2:** Describe the main components of a House of Quality (HOQ) matrix. (Knowledge Level: K2, Aligns with CO1, CO5)

**Answer:** The main components of a House of Quality (HOQ) matrix include:
*   **Customer Requirements (What):** The desires and expectations of the customer.
*   **Customer Importance Ratings:** Ranking of customer requirements.
*   **Technical Characteristics (How):** Design features or specifications to meet customer needs.
*   **Relationship Matrix:** Shows the correlation between "What" and "How" using symbols for strength of relationship.
*   **Target Values:** Measurable goals for technical characteristics.
*   **Technical Importance Ratings:** Calculated importance of technical characteristics.
*   **Competitive Assessment:** Evaluation of own and competitor performance.
*   **Correlation Matrix (Roof):** Relationships between technical characteristics.

**Question 3:** A product development team is designing a new laptop. List five potential customer requirements ("What") for this laptop and five potential technical characteristics ("How") that would address these requirements. (Knowledge Level: K3, Aligns with CO3)

**Answer:**
**Customer Requirements ("What"):**
1.  Long battery life
2.  Fast processing speed
3.  Lightweight and portable
4.  Comfortable keyboard
5.  High-resolution display

**Technical Characteristics ("How"):**
1.  Battery capacity (mAh)
2.  CPU clock speed (GHz)
3.  Weight (kg)
4.  Key travel distance (mm)
5.  Screen resolution (pixels)

**Question 4:** Explain how QFD helps in integrating quality into the strategic management of an organization. (Knowledge Level: K2, Aligns with CO5)

**Answer:** QFD integrates quality into strategic management by:
*   **Ensuring Customer Focus:** Aligning product/service development with market demands and customer priorities, which is a key strategic imperative.
*   **Facilitating Cross-Functional Alignment:** Breaking down departmental silos and ensuring all parts of the organization are working towards common, customer-centric goals.
*   **Guiding Resource Allocation:** Prioritizing design and development efforts based on what truly matters to customers and where competitive advantage can be gained.
*   **Driving Competitive Advantage:** Enabling the development of superior products/services that meet unmet customer needs or outperform competitors, thereby supporting market strategy.
*   **Reducing Risk:** Minimizing the risk of developing products that fail to meet market expectations.

**Question 5: Exercise (Conceptual Application)**

Consider a restaurant aiming to improve customer satisfaction.
a) Identify 3 "Voice of the Customer" (VOC) items.
b) For each VOC item, identify a corresponding "How" (technical/operational characteristic).
c) Briefly describe how you would assess the strength of the relationship between a VOC and a "How."

**Answer:**

a) **Voice of the Customer (VOC) Items:**
    1.  "Food tastes delicious and fresh."
    2.  "Service is prompt and attentive."
    3.  "Ambiance is pleasant and relaxing."

b) **Corresponding "How" (Operational Characteristics):**
    1.  **VOC:** "Food tastes delicious and fresh."
        *   **How:** Quality of ingredients used (e.g., organic, locally sourced).
        *   **How:** Chef's skill and adherence to recipes.
        *   **How:** Cooking temperature and time precision.
    2.  **VOC:** "Service is prompt and attentive."
        *   **How:** Number of servers per table ratio.
        *   **How:** Server training on efficiency and attentiveness.
        *   **How:** Kitchen-to-table delivery time.
    3.  **VOC:** "Ambiance is pleasant and relaxing."
        *   **How:** Music selection and volume.
        *   **How:** Lighting levels.
        *   **How:** Table spacing and seating comfort.

c) **Assessing Relationship Strength:**
    You would assess the strength of the relationship by using a cross-functional team (e.g., chefs, servers, managers) to discuss and reach a consensus. They would assign symbols (like those used in HOQ: strong, moderate, weak) based on their expertise and understanding of how changes in the "How" directly impact the "VOC." For example:
    *   **Strong:** Directly and significantly impacts customer satisfaction (e.g., Chef's skill directly impacts taste).
    *   **Moderate:** Has a noticeable impact but is not the sole determinant (e.g., Server training impacts attentiveness, but other factors like kitchen speed also matter).
    *   **Weak:** Minimal or indirect impact (e.g., Music volume might slightly impact relaxation, but food quality has a much larger impact).
    *(This exercise demonstrates the application of QFD principles and aligns with CO3)*

---

### 7. Important Points to Remember

*   **Customer is King:** QFD is fundamentally driven by understanding and satisfying customer needs.
*   **Cross-Functional Collaboration is Key:** Success relies on input and buy-in from all relevant departments.
*   **The HOQ is a Living Document:** It should be reviewed and updated as customer needs or market conditions change.
*   **QFD is not just a tool, but a philosophy:** It promotes a culture of customer focus throughout the organization.
*   **Start Simple:** For initial implementation, focus on a single product or service and a simplified HOQ.
*   **Data-Driven Decisions:** Base relationships and priorities on gathered data and expert judgment.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References and Further Reading

*   **Besterfield, D. H., Besterfield, C., Besterfield, G. H., Besterfield, M., U. Hemant, & U. Rashmi (2018).** *Total Quality Management*. Pearson Education. (Provides a comprehensive overview of QFD within TQM, aligning with CO1, CO5).
*   **SubburajRamasamy (2017).** *Total Quality Management*. Tata McGraw Hill Education. (Offers practical insights into implementing QFD, supporting CO3).
*   **Montgomery, D. C. (2004).** *Design and Analysis of Experiments* (6th ed.). John Wiley & Sons. (Relevant for optimizing technical characteristics identified through QFD, though not directly a QFD text).
*   **Juran, J. M., & Gryna, F. M. (2004).** *Quality Planning and Analysis - From Product Development through Use*. Tata McGraw Hill Publishing Limited. (Provides foundational quality planning principles that QFD builds upon).

---

This comprehensive set of notes covers Quality Function Deployment (QFD), its principles, the House of Quality, implementation steps, its strategic significance, and challenges. It aims to equip learners with the knowledge and understanding required to apply QFD effectively, aligning with the stated learning outcomes and course objectives, particularly in the domain of Strategic Quality Management (CO5) and implementing TQM tools (CO3).