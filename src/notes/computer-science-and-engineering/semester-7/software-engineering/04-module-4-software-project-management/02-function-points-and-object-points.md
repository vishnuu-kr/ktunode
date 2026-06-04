---
title: "Function points and Object points."
subject: "SOFTWARE ENGINEERING"
module: "Module 4: Software Project Management "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8bb"
status: "completed"
scrapedAt: "2026-05-20T17:11:36.965Z"
---
# Module 4: Software Project Management - Function Points and Object Points

## Introduction

This module focuses on **Software Project Management**, a crucial aspect of delivering successful software projects. We will delve into two important techniques for **estimating the size and complexity of software**, which in turn helps in **predicting effort, cost, and schedule**: **Function Points** and **Object Points**.

---

## 1. Function Points (FP)

### 1.1. What are Function Points?

*   **Definition:** Function Points (FP) are a **metric for measuring the functionality delivered by a software product**, independent of the programming language or technology used. They represent the "amount of business value" provided to the user.
*   **Purpose:**
    *   **Effort Estimation:** To estimate the effort (person-hours/days) required to develop the software.
    *   **Cost Estimation:** To estimate the cost of development.
    *   **Schedule Estimation:** To predict the project timeline.
    *   **Productivity Measurement:** To measure the productivity of the development team.
    *   **Comparison:** To compare different software systems or development approaches.
*   **Developed by:** Allan Albrecht at IBM in the late 1970s.

### 1.2. Key Concepts in Function Point Analysis

Function Point Analysis involves identifying and quantifying different types of software functionality from the user's perspective. The core components are:

#### 1.2.1. External Inputs (EI)

*   **Definition:** Data or control information that enters the system from outside. This includes data coming from user interfaces, other systems, or external data files.
*   **Characteristics:**
    *   They are processed inside the application.
    *   They modify or update internal logical files.
    *   They are typically entered via an interface (e.g., screen, file import).
*   **Example:**
    *   A user entering customer details through a form.
    *   Loading a CSV file containing product information.
    *   Receiving an order from a partner system.

#### 1.2.2. External Outputs (EO)

*   **Definition:** Data or control information that leaves the system and goes to the outside. This includes reports, screens displayed to users, and data sent to other systems.
*   **Characteristics:**
    *   They are processed within the application.
    *   They are derived from internal logical files.
    *   They are typically sent to an interface (e.g., report, screen, file export).
*   **Example:**
    *   Generating an invoice for a customer.
    *   Displaying a list of available products on a web page.
    *   Sending an order confirmation email.

#### 1.2.3. External Inquiries (EQ)

*   **Definition:** Input-output pairs that involve requesting data from the system and receiving a response, without updating any data within the system.
*   **Characteristics:**
    *   They consist of an input and an output.
    *   They do not update internal logical files.
    *   They are often for read-only operations.
*   **Example:**
    *   Searching for a customer by name and displaying their details.
    *   Querying the current stock level of a product.
    *   Getting a list of all active users.

#### 1.2.4. Internal Logical Files (ILF)

*   **Definition:** A group of logically related data that resides entirely within the application boundary and is maintained by the application.
*   **Characteristics:**
    *   They are "files" in a logical sense, not necessarily physical database tables.
    *   The application is the sole maintainer of this data.
    *   They are accessed by External Inputs and External Outputs.
*   **Example:**
    *   The customer database for a CRM system.
    *   The product catalog for an e-commerce site.
    *   The employee master file for an HR system.

#### 1.2.5. External Interface Files (EIF)

*   **Definition:** A group of logically related data that resides outside the application boundary and is maintained by another system. The application accesses this data for its processing.
*   **Characteristics:**
    *   They are accessed by the application but maintained by an external system.
    *   They are usually read-only for the application.
*   **Example:**
    *   Accessing a credit bureau's database to check a customer's credit rating.
    *   Using a third-party service to validate addresses.
    *   Reading data from a shared data warehouse.

### 1.3. Function Point Calculation Steps

The process of calculating Function Points involves several steps:

#### 1.3.1. Identify Function Types

*   List all the identified External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files.

#### 1.3.2. Determine Complexity of Each Function Type

Each function type is assigned a complexity level: **Low, Average, or High**. The complexity is determined based on the number of file types referenced and the number of data elements processed.

| Function Type           | Low Complexity                                         | Average Complexity                                                               | High Complexity                                                                 |
| :---------------------- | :----------------------------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **External Inputs (EI)** | 1 ILF or EIF referenced, 1-4 data elements           | 2 ILF or EIF referenced, 5-15 data elements                                      | 2+ ILF or EIF referenced, 16+ data elements                                     |
| **External Outputs (EO)**| 1 ILF or EIF referenced, 1-5 data elements           | 2 ILF or EIF referenced, 6-19 data elements                                      | 2+ ILF or EIF referenced, 20+ data elements                                     |
| **External Inquiries (EQ)**| 1 ILF or EIF referenced, 1-4 data elements           | 2 ILF or EIF referenced, 5-19 data elements                                      | 2+ ILF or EIF referenced, 20+ data elements                                     |
| **Internal Logical Files (ILF)** | 1 ILF, 1-19 data elements                            | 1 ILF, 20-50 data elements                                                       | 1 ILF, 51+ data elements                                                        |
| **External Interface Files (EIF)** | 1 EIF, 1-19 data elements                            | 1 EIF, 20-50 data elements                                                       | 1 EIF, 51+ data elements                                                        |

*   **Data Element:** A unique business element that is processed or passed by the function. (e.g., customer name, product ID, order date).

#### 1.3.3. Assign Unadjusted Function Point (UFP) Weights

Each complexity level for each function type has a predefined weight.

| Function Type           | Low Weight | Average Weight | High Weight |
| :---------------------- | :--------- | :------------- | :---------- |
| **External Inputs (EI)** | 3          | 4              | 6           |
| **External Outputs (EO)**| 4          | 5              | 7           |
| **External Inquiries (EQ)**| 3          | 4              | 6           |
| **Internal Logical Files (ILF)** | 7          | 10             | 15          |
| **External Interface Files (EIF)** | 5          | 7              | 10          |

**UFP = Σ (Count of Function Type * Weight of Complexity)**

#### 1.3.4. Apply Value Adjustment Factors (VAF)

*   **Purpose:** To account for the general system characteristics and quality attributes of the software. These factors are determined by the project's requirements for things like performance, security, maintainability, etc.
*   **General System Characteristics (GSC):** There are 14 GSCs, each rated on a scale of 0 to 5, where 0 means "no influence" and 5 means "strong influence".
    1.  Data Communications
    2.  Distributed Data Processing
    3.  Performance
    4.  Logical Database Complexity
    5.  Code Machine Independence
    6.  Volume and Bounded Loops
    7.  Usability
    8.  Ease of Installation
    9.  Ease of Operation
    10. Operability
    11. Reusability
    12. Ease of Conversion
    13. Efficiency
    14. Ability to Facilitate Change
*   **Total Degree of Influence (TDI):** The sum of the ratings for all 14 GSCs.
    **TDI = Σ (GSC rating from 0 to 5)**
*   **Value Adjustment Factor (VAF):**
    **VAF = 0.65 + (0.01 * TDI)**
    (The VAF will range from 0.65 to 1.15)

#### 1.3.5. Calculate Adjusted Function Points (AFP)

*   **AFP = UFP * VAF**

### 1.4. Example of Function Point Calculation

**Scenario:** Develop a simple customer management system.

**Analysis:**

*   **External Inputs (EI):**
    *   Add Customer (Modifies 1 ILF - Customer File): Average complexity (2 ILF/EIF, 5-15 data elements). Weight = 4. Count = 1.
    *   Update Customer (Modifies 1 ILF - Customer File): Average complexity. Weight = 4. Count = 1.
    *   Delete Customer (Modifies 1 ILF - Customer File): Average complexity. Weight = 4. Count = 1.
*   **External Outputs (EO):**
    *   Generate Customer List Report (Reads 1 ILF - Customer File): Average complexity (2 ILF/EIF, 6-19 data elements). Weight = 5. Count = 1.
    *   Display Customer Details (Reads 1 ILF - Customer File): Average complexity. Weight = 5. Count = 1.
*   **External Inquiries (EQ):**
    *   Search Customer by Name (Reads 1 ILF - Customer File): Average complexity (2 ILF/EIF, 5-19 data elements). Weight = 4. Count = 1.
*   **Internal Logical Files (ILF):**
    *   Customer File (1 ILF, 20-50 data elements): Average complexity. Weight = 10. Count = 1.
*   **External Interface Files (EIF):**
    *   None

**Calculation:**

*   **UFP Calculation:**
    *   EI: (1 * 4) + (1 * 4) + (1 * 4) = 12
    *   EO: (1 * 5) + (1 * 5) = 10
    *   EQ: (1 * 4) = 4
    *   ILF: (1 * 10) = 10
    *   EIF: (0 * 7) = 0
    *   **Total UFP = 12 + 10 + 4 + 10 + 0 = 36**

*   **VAF Calculation:**
    Let's assume the following GSC ratings (scale 0-5):
    *   Performance: 3
    *   Usability: 4
    *   Efficiency: 2
    *   All others: 0
    *   **TDI = 3 + 4 + 2 = 9**
    *   **VAF = 0.65 + (0.01 * 9) = 0.65 + 0.09 = 0.74**

*   **AFP Calculation:**
    *   **AFP = 36 * 0.74 = 26.64**

**Result:** The unadjusted function point count is 36, and the adjusted function point count is approximately 27. This value can then be used with productivity rates to estimate effort.

### 1.5. Estimating Effort and Cost using Function Points

Once AFP is calculated, it can be used to estimate effort:

*   **Effort (Person-Hours) = AFP * Productivity Rate**
*   **Productivity Rate:** This is typically measured in Person-Hours per Function Point (PH/FP) and is derived from historical project data. For example, a team might have a productivity rate of 50 PH/FP.
*   **Cost = Effort * Cost per Person-Hour**

### 1.6. Advantages of Function Points

*   **Technology Independent:** Useful for comparing projects across different technologies.
*   **User-Centric:** Focuses on the functionality delivered to the user.
*   **Early Estimation:** Can be used early in the lifecycle, even before detailed design.
*   **Objective:** Provides a more objective basis for estimation than intuitive methods.

### 1.7. Disadvantages of Function Points

*   **Requires Skill and Training:** Accurate counting requires experienced analysts.
*   **Subjectivity in Complexity:** Determining complexity can still involve some subjectivity.
*   **Difficult for Some Project Types:** May be less suitable for projects with a strong emphasis on algorithms or embedded systems.
*   **Time Consuming:** The analysis process itself can be time-consuming.

---

## 2. Object Points (OP)

### 2.1. What are Object Points?

*   **Definition:** Object Points (OP) are a software size metric that is used in **object-oriented development**. They are derived from the number of objects in the system and their complexity.
*   **Purpose:** Similar to Function Points, OP is used for **effort and cost estimation** in object-oriented projects.
*   **Developed by:** Mark Lorenz and Michelle Lorenz.

### 2.2. Key Concepts in Object Point Analysis

Object Point analysis focuses on the building blocks of object-oriented systems: classes and their interactions.

#### 2.2.1. Object Categories

Object Points are calculated based on different categories of objects:

*   **Enrichment:** The number of "new" classes designed from scratch for the project. These are core classes that represent significant new functionality.
*   **Conversion:** The number of classes that are converted from existing systems (e.g., ported from a legacy system). These might have existing code and complexity that needs to be accounted for.
*   **New/Used:** The number of "new" classes created that are not significantly altered from existing ones, or simply classes that are reused without modification.

*Note: In simpler terms, you can think of these as the number of classes being developed or significantly modified for the current project.*

#### 2.2.2. Object Complexity

Each object (class) is assigned a complexity level, similar to Function Points. The complexity is often determined by:

*   **Number of attributes:** The amount of data stored by the object.
*   **Number of methods (operations):** The number of functions or behaviors the object performs.
*   **Number of inherited classes:** How deeply the object is part of an inheritance hierarchy.
*   **Number of parent classes:** How many classes it inherits from.
*   **Number of messages it sends to other objects:** How it interacts with other parts of the system.

The common complexity levels are:

*   **Simple:** Few attributes, few methods, shallow inheritance.
*   **Average:** Moderate attributes, methods, and inheritance.
*   **Complex:** Many attributes, many methods, deep inheritance, frequent message passing.

#### 2.2.3. Object Point Weights

Each category and complexity level is assigned a weight.

| Object Category | Simple | Average | Complex |
| :-------------- | :----- | :------ | :------ |
| **Enrichment**  | 1      | 2       | 3       |
| **Conversion**  | 1.5    | 3       | 4.5     |
| **New/Used**    | 0.5    | 1       | 1.5     |

*Note: These are typical weights. Specific methodologies might use slightly different values or define complexity criteria differently.*

#### 2.2.4. Object Point Calculation Steps

1.  **Identify Classes:** List all the classes that will be developed or significantly modified for the project.
2.  **Categorize Classes:** Assign each class to one of the categories (Enrichment, Conversion, New/Used).
3.  **Determine Complexity:** Assign a complexity level (Simple, Average, Complex) to each class based on its attributes, methods, and interactions.
4.  **Calculate Object Points:** Multiply the count of each class by its corresponding weight.
    **Total Object Points = Σ (Count of Class * Weight of Category * Weight of Complexity)**

### 2.3. Example of Object Point Calculation

**Scenario:** Develop a simple library management system using object-oriented principles.

**Analysis:**

Assume the following classes are identified and their complexity is assessed:

| Class Name      | Category     | Complexity | Count | Weight (Cat) | Weight (Comp) | Object Points (Count * W(Cat) * W(Comp)) |
| :-------------- | :----------- | :--------- | :---- | :----------- | :------------ | :---------------------------------------- |
| `Book`          | Enrichment   | Average    | 1     | 2            | 2             | 1 * 2 * 2 = 4                             |
| `Member`        | Enrichment   | Average    | 1     | 2            | 2             | 1 * 2 * 2 = 4                             |
| `Loan`          | Enrichment   | Complex    | 1     | 2            | 3             | 1 * 2 * 3 = 6                             |
| `Author`        | New/Used     | Simple     | 1     | 0.5          | 1             | 1 * 0.5 * 1 = 0.5                         |
| `Fine`          | Conversion   | Average    | 1     | 3            | 2             | 1 * 3 * 2 = 6                             |
| `Publisher`     | New/Used     | Simple     | 1     | 0.5          | 1             | 1 * 0.5 * 1 = 0.5                         |
| `Reservation`   | Enrichment   | Average    | 1     | 2            | 2             | 1 * 2 * 2 = 4                             |
| **Total**       |              |            |       |              |               | **25**                                    |

**Result:** The total Object Points for this system is 25.

### 2.4. Estimating Effort and Cost using Object Points

Similar to Function Points, Object Points can be used for estimation:

*   **Effort (Person-Hours) = Total Object Points * Productivity Rate**
*   **Productivity Rate:** This is specific to object-oriented development and is usually measured in Person-Hours per Object Point (PH/OP). The rate depends on the development environment, team experience, and complexity of the OO design.

### 2.5. Advantages of Object Points

*   **Tailored for OO:** Specifically designed for object-oriented development, aligning with the paradigm's concepts.
*   **Focuses on Design:** Emphasizes the core building blocks of OO systems.
*   **Can be quicker:** For experienced OO developers, identifying and assessing objects might be faster than a full FP analysis.

### 2.6. Disadvantages of Object Points

*   **Less Standardized:** The weights and complexity criteria can vary more significantly between different sources and methodologies.
*   **Subjectivity:** Complexity assessment still involves subjective judgment.
*   **Doesn't directly measure user functionality:** It's a size metric based on design artifacts rather than user-perceived functionality like FP.
*   **Less established than FP:** Function Points have a longer history and are more widely adopted.

---

## 3. Comparing Function Points and Object Points

| Feature           | Function Points (FP)                                 | Object Points (OP)                                   |
| :---------------- | :--------------------------------------------------- | :--------------------------------------------------- |
| **Paradigm Focus**| General software development                         | Object-Oriented (OO) development                     |
| **Basis**         | User-perceived functionality (inputs, outputs, files)| OO design elements (classes, attributes, methods)    |
| **Independence**  | Technology, language, and paradigm independent       | Primarily useful for OO projects                     |
| **Scope**         | Measures functional size                             | Measures size based on OO design complexity          |
| **Maturity**      | More mature and widely adopted                       | Less mature, variations in methodology               |
| **Primary Use**   | Estimating effort, cost, schedule, productivity      | Estimating effort, cost for OO projects              |
| **Key Units**     | External Inputs, Outputs, Inquiries, Internal/External Files | Classes (Enrichment, Conversion, New/Used)           |
| **Complexity Factors** | Data elements, file types referenced                | Attributes, methods, inheritance, message passing    |

---

## 4. Practice Questions and Exercises

### Question 1: Function Points

A system has the following components:
*   2 External Inputs, each updating 1 ILF and processing 10 data elements (assume Average complexity for EI).
*   1 External Output, producing a report from 1 ILF and processing 15 data elements (assume Average complexity for EO).
*   3 External Inquiries, each reading data from 1 ILF and processing 5 data elements (assume Average complexity for EQ).
*   1 Internal Logical File with 30 data elements (assume Average complexity for ILF).
*   1 External Interface File accessed by the system, containing 40 data elements (assume Average complexity for EIF).

Assume the following weights:
*   EI (Average): 4
*   EO (Average): 5
*   EQ (Average): 4
*   ILF (Average): 10
*   EIF (Average): 7

Calculate the **Unadjusted Function Points (UFP)** for this system.

**Answer:**
*   EI: 2 inputs * 4 weight = 8
*   EO: 1 output * 5 weight = 5
*   EQ: 3 inquiries * 4 weight = 12
*   ILF: 1 file * 10 weight = 10
*   EIF: 1 file * 7 weight = 7
*   **Total UFP = 8 + 5 + 12 + 10 + 7 = 42**

---

### Question 2: Function Points - VAF

For the system in Question 1, assume the following General System Characteristics (GSC) ratings (scale 0-5):
*   Performance: 2
*   Usability: 3
*   Security: 1
*   All other GSCs are rated 0.

Calculate the **Value Adjustment Factor (VAF)** and the **Adjusted Function Points (AFP)**.

**Answer:**
*   TDI = Performance (2) + Usability (3) + Security (1) = 6
*   VAF = 0.65 + (0.01 * TDI) = 0.65 + (0.01 * 6) = 0.65 + 0.06 = 0.71
*   AFP = UFP * VAF = 42 * 0.71 = **29.82**

---

### Question 3: Object Points

Consider a small e-commerce application with the following OO design elements:
*   3 new classes designed from scratch for core business logic (assume Average complexity).
*   2 classes converted from an older system (assume Simple complexity).
*   4 simple utility classes reused without significant modification (assume Simple complexity).

Assume the following weights:
*   Enrichment (Average): 2
*   Conversion (Simple): 1.5
*   New/Used (Simple): 0.5

Calculate the **Total Object Points** for this application.

**Answer:**
*   Enrichment: 3 classes * 2 weight (Avg) = 6
*   Conversion: 2 classes * 1.5 weight (Simple) = 3
*   New/Used: 4 classes * 0.5 weight (Simple) = 2
*   **Total Object Points = 6 + 3 + 2 = 11**

---

### Question 4: Comparison

Which sizing metric is more focused on user-perceived functionality, and which is more tailored to object-oriented design?

**Answer:**
*   **User-perceived functionality:** Function Points (FP)
*   **Object-Oriented design:** Object Points (OP)

---

## 5. Important Points to Remember

*   **Function Points (FP)** measure the **functional size** of a software system from the user's perspective.
*   The core components of FP analysis are **External Inputs, External Outputs, External Inquiries, Internal Logical Files, and External Interface Files**.
*   Complexity assessment (Low, Average, High) is crucial for accurate FP counting.
*   **Value Adjustment Factors (VAF)** account for general system characteristics that influence the overall complexity and quality.
*   **Object Points (OP)** are used for **object-oriented projects** and are based on the number and complexity of **classes**.
*   Object Point categories include **Enrichment, Conversion, and New/Used**.
*   Both FP and OP are used for **effort, cost, and schedule estimation**, requiring a **productivity rate** specific to the metric and development context.
*   FP is generally more **technology and paradigm independent**, while OP is specifically for **OO development**.
*   Accurate estimation requires **experienced analysts** and consistent application of the chosen methodology.

---
