---
title: "Software Project Management -  Project size metrics – LOC, Function points and Object points."
subject: "SOFTWARE ENGINEERING"
module: "Module 4: Software Project Management "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b091"
status: "completed"
scrapedAt: "2026-05-20T16:16:52.849Z"
---
# Software Engineering - Module 4: Software Project Management - Project Size Metrics

## Topic: Project Size Metrics - LOC, Function Points, and Object Points

### Introduction

Estimating the size of a software project is a crucial activity in software project management. An accurate size estimate forms the basis for estimating effort, cost, and schedule.  This module covers three common size metrics: Lines of Code (LOC), Function Points (FP), and Object Points (OP). We will discuss their definitions, advantages, disadvantages, and application.

### Learning Outcomes

By the end of this topic, you will be able to:

1.  Define and explain the purpose of project size metrics.
2.  Describe Lines of Code (LOC) as a size metric, including its advantages and disadvantages.
3.  Explain the concept of Function Points (FP) and detail its calculation steps.
4.  Describe Object Points (OP) and explain when it is suitable for project estimation.
5.  Compare and contrast LOC, FP, and OP.
6.  Apply these metrics to estimate the size of small software projects.

### 1. Purpose of Project Size Metrics

*   **Definition:** Project size metrics quantify the magnitude of a software project's deliverables. They provide a numerical representation of the system's size, complexity, or functionality.

*   **Purpose:**
    *   **Estimation:**  Used to estimate effort, cost, and schedule.
    *   **Planning:**  Help in allocating resources and planning project activities.
    *   **Comparison:**  Facilitate the comparison of different projects or different versions of the same project.
    *   **Productivity Measurement:**  Enable the measurement of developer productivity.
    *   **Risk Assessment:**  Inform risk assessment by highlighting potentially complex or large areas of the project.

### 2. Lines of Code (LOC)

*   **Definition:**  Lines of Code (LOC) is a software metric used to measure the size of a computer program by counting the number of lines in the source code. It's a simple and intuitive metric.

*   **Types of LOC:**
    *   **Source Lines of Code (SLOC):**  Lines containing executable code, comments, and blank lines.
    *   **Logical Lines of Code (LLOC):** Lines containing actual statements or instructions, excluding comments and blank lines. This is usually the preferred measurement.
    *   **Executable Lines of Code (ELOC):** Only lines with executable code.

*   **Advantages of LOC:**
    *   **Simplicity:** Easy to understand and calculate (though automating the process is often necessary).
    *   **Historical Data:**  Many projects have historical LOC data, making it easier to establish baseline estimates.
    *   **Wide Availability:** Easily obtained using automated tools.

*   **Disadvantages of LOC:**
    *   **Language Dependence:** LOC varies significantly between programming languages (e.g., implementing the same functionality in Python generally requires fewer lines of code than in Java).
    *   **Subjectivity:**  What constitutes a "line" of code can be subjective (e.g., different coding styles).
    *   **Difficulty Early in the Project:** LOC is difficult to estimate accurately early in the project lifecycle when the design is not yet complete.
    *   **Focus on Implementation:** LOC primarily measures the implementation effort and does not directly reflect the complexity of the problem being solved.
    *   **Negative Incentive:** Can encourage developers to write more code than necessary.
    *   **Does not account for non-coding activities:** Like design, testing, and documentation.

*   **Example:**
    Consider a simple Java function to calculate the sum of two numbers:

    ```java
    public int add(int a, int b) {
        int sum = a + b;
        return sum;
    }
    ```

    In this case:
    *   SLOC: 5 (including blank line)
    *   LLOC: 4
    *   ELOC: 3

### 3. Function Points (FP)

*   **Definition:** Function Points (FP) are a unit of measure for software size that quantifies the functionality provided by a system to its users, based on the user's external view of the system. It is independent of the programming language, development methodology, or technology used.

*   **Components of Function Points:**
    *   **External Inputs:**  Data or control information entering the system from the outside world. (e.g., forms, commands)
    *   **External Outputs:**  Data or control information leaving the system to the outside world. (e.g., reports, screens)
    *   **External Inquiries:**  Requests for information from the system that trigger an immediate response. (e.g., database queries)
    *   **Internal Logical Files (ILF):**  Logical groupings of data stored within the system's boundary. (e.g., database tables)
    *   **External Interface Files (EIF):**  Files or interfaces that are maintained by other applications but are used by the system being measured. (e.g., a read-only access to another system's database).

*   **Function Point Calculation Steps:**

    1.  **Identify the Function Types:**  Identify and classify the number of each function type (inputs, outputs, inquiries, ILFs, EIFs).

    2.  **Rate Complexity:**  Assign a complexity rating (Low, Average, High) to each function type based on predefined guidelines.

    3.  **Calculate Unadjusted Function Points (UFP):**  Multiply the number of each function type by its corresponding complexity weight and sum the results. Standard complexity weights are provided by the International Function Point Users Group (IFPUG).

        | Function Type       | Complexity | Low | Average | High |
        | --------------------- | ---------- | --- | ------- | ---- |
        | External Inputs       |            | 3   | 4       | 6    |
        | External Outputs      |            | 4   | 5       | 7    |
        | External Inquiries    |            | 3   | 4       | 6    |
        | Internal Logical Files |            | 7   | 10      | 15   |
        | External Interface Files|            | 5   | 7       | 10   |

        **Formula:**  UFP = (Number of Inputs * Input Weight) + (Number of Outputs * Output Weight) + (Number of Inquiries * Inquiry Weight) + (Number of ILFs * ILF Weight) + (Number of EIFs * EIF Weight)

    4.  **Determine Value Adjustment Factor (VAF):**  Assess the influence of 14 general system characteristics (GSCs) on the system, rating each on a scale from 0 (not applicable) to 5 (essential). Sum the ratings to obtain the Total Degree of Influence (TDI).
         *Examples of GSCs: data communication, distributed processing, performance, heavily used configuration, transaction rate, on-line data entry, end-user efficiency, on-line update, complex processing, reusability, installation ease, operational ease, multiple sites, facilitates change*

        Calculate the VAF using the formula: VAF = 0.65 + (0.01 * TDI)

    5.  **Calculate Adjusted Function Points (AFP):**  Multiply the UFP by the VAF.

        **Formula:** AFP = UFP * VAF

*   **Advantages of FP:**
    *   **Technology Independence:** Independent of programming language, development methodology, and technology.
    *   **User-Centric:**  Measures functionality from the user's perspective.
    *   **Applicable Early in the Project:** Can be estimated from requirements specifications.
    *   **Normalization:**  Allows for normalization of productivity across projects.

*   **Disadvantages of FP:**
    *   **Subjectivity:** Determining the complexity of functions and assigning ratings for GSCs can be subjective.
    *   **Complexity:**  FP calculation can be complex and time-consuming.
    *   **Limited for Real-Time Systems:**  May not be well-suited for real-time systems with complex algorithms and control logic that are not easily mapped to user functions.
    *   **Cost:** Trained function point analysts may be required for large projects.

*   **Example:**

    Consider a simple online shopping application:

    *   External Inputs: 5 (Login, Search, Add to Cart, Shipping Address, Payment Info)
    *   External Outputs: 3 (Product Details, Order Confirmation, Shipping Update)
    *   External Inquiries: 2 (Product Availability, Order Status)
    *   Internal Logical Files: 2 (Products, Orders)
    *   External Interface Files: 1 (Payment Gateway)

    Assume Complexity is Average for all items.

    UFP = (5 * 4) + (3 * 5) + (2 * 4) + (2 * 10) + (1 * 7) = 20 + 15 + 8 + 20 + 7 = 70

    Assume TDI = 30 (average rating across 14 GSCs)

    VAF = 0.65 + (0.01 * 30) = 0.65 + 0.30 = 0.95

    AFP = 70 * 0.95 = 66.5  (Typically rounded to 67)

### 4. Object Points (OP)

*   **Definition:** Object Points (OP) are a software metric used to estimate the size of a software project, particularly suitable for projects developed using object-oriented programming (OOP) languages and using component-based development and rapid application development (RAD) approaches. They focus on the number of screens, reports, and modules needed to develop the application.

*   **Components of Object Points:**

    *   **Screens:** Number of user interface screens or windows.
    *   **Reports:** Number of reports generated by the system.
    *   **Modules:** Number of modules or components.

*   **Object Point Calculation Steps:**

    1.  **Identify Objects:**  Identify the number of screens, reports, and modules in the application.

    2.  **Classify Complexity:** Assign a complexity rating (Simple, Average, Complex) to each object type based on predefined criteria. Complexity depends on factors like data access, processing logic, and user interaction.

    3.  **Calculate Unadjusted Object Points (UOP):** Multiply the number of each object type by its corresponding complexity weight and sum the results. Typical weights are:

        | Object Type | Complexity | Weight |
        |-------------|------------|--------|
        | Screens     | Simple     | 1      |
        |             | Average    | 2      |
        |             | Complex    | 3      |
        | Reports     | Simple     | 2      |
        |             | Average    | 5      |
        |             | Complex    | 8      |
        | Modules     | Simple     | 1      |
        |             | Average    | 3      |
        |             | Complex    | 10     |

        **Formula:** UOP = (Number of Simple Screens * 1) + (Number of Average Screens * 2) + (Number of Complex Screens * 3) + (Number of Simple Reports * 2) + (Number of Average Reports * 5) + (Number of Complex Reports * 8) + (Number of Simple Modules * 1) + (Number of Average Modules * 3) + (Number of Complex Modules * 10)

    4.  **Adjust for Reuse:**  Determine the percentage of reused code.

    5.  **Calculate Adjusted Object Points (AOP):** Adjust the UOP based on reuse.  A common formula:
        AOP = UOP * (1 - (Reuse Percentage / 100))

    6.  **Consider Productivity Rate:** Object points are then used along with a productivity rate to estimate effort.  A productivity rate could be the number of object points that can be developed per person-month.
        Effort (person-months) = AOP / Productivity Rate

*   **When Object Points are Suitable:**

    *   **Object-Oriented Development:** When using object-oriented programming languages (Java, C++, Python).
    *   **Component-Based Development:** When building applications from reusable components.
    *   **Rapid Application Development (RAD):** When using RAD methodologies, where quick prototyping and iterative development are emphasized.
    *   **Fourth-Generation Languages (4GL):**  When using 4GLs, which often involve rapid development of screens and reports.

*   **Advantages of OP:**

    *   **Suitable for Modern Development:** Well-suited for object-oriented, component-based, and RAD approaches.
    *   **Easy to Understand:**  Relatively easy to understand and apply.
    *   **Applicable Early in the Project:** Can be estimated from early designs and prototypes.

*   **Disadvantages of OP:**

    *   **Subjectivity:**  Classifying complexity and estimating reuse can be subjective.
    *   **Limited Applicability:**  Less suitable for traditional, procedural programming projects.
    *   **Dependency on Productivity Rate:** The accuracy of effort estimation depends heavily on the accuracy of the productivity rate.

*   **Example:**

    Consider a software project:

    *   Screens: 3 Simple, 2 Average, 1 Complex
    *   Reports: 1 Simple, 1 Average
    *   Modules: 2 Simple, 1 Average

    UOP = (3 * 1) + (2 * 2) + (1 * 3) + (1 * 2) + (1 * 5) + (2 * 1) + (1 * 3)  = 3 + 4 + 3 + 2 + 5 + 2 + 3 = 22

    Assume 20% code reuse.

    AOP = 22 * (1 - (20/100)) = 22 * 0.8 = 17.6 (round to 18)

    If the productivity rate is 5 Object Points per person-month,

    Effort = 18 / 5 = 3.6 person-months

### 5. Comparison of LOC, FP, and OP

| Feature             | LOC                                   | Function Points                          | Object Points                                  |
| ------------------- | ------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Focus**           | Code Size                             | Functionality from User Perspective     | Objects (Screens, Reports, Modules)           |
| **Technology**      | Dependent on programming language     | Independent                              | Suited for object-oriented, RAD, 4GL          |
| **Application Timing** | Late in the project lifecycle             | Early in the project lifecycle           | Early in the project lifecycle                |
| **Ease of Understanding** | Simple                                  | Complex                                  | Relatively Simple                             |
| **Subjectivity**       | Moderate (depends on definition of LOC) | High (complexity ratings, VAF)           | Moderate (complexity ratings, reuse)          |
| **Advantages**      | Easy to collect, historical data available | Technology-independent, user-centric     | Suitable for modern development approaches      |
| **Disadvantages**     | Language-dependent, late availability, focuses on implementation | Complex calculation, subjective ratings        | Limited applicability, subjective ratings        |

### 6. Applying Size Metrics to Small Software Projects

*   **Steps:**
    1.  **Understand Project Scope:** Clearly define the requirements and functionality of the project.
    2.  **Choose Metric:** Select the most appropriate metric based on the project characteristics (language, methodology, etc.).
    3.  **Gather Data:** Collect the necessary data (e.g., number of inputs, outputs, modules).
    4.  **Calculate Size:** Apply the formulas to calculate the size using the chosen metric.
    5.  **Estimate Effort/Cost/Schedule:** Use the size estimate, along with historical data or industry benchmarks, to estimate effort, cost, and schedule.

*   **Example:**
    Consider a small web application for managing a personal library. It will have basic functionalities like adding books, searching, and displaying lists.

    *   **Choose Metric:** Function Points may be appropriate since the application provides functionality from a user perspective.

    *   **Gather Data:**

        *   Inputs: Add Book, Search Book, Edit Book Details (3)
        *   Outputs: Book List, Book Details (2)
        *   Inquiries: Book Availability (1)
        *   ILF: Books (1)
        *   EIF: None

    *   **Calculate Size:**

        Assume Average Complexity

        UFP = (3 * 4) + (2 * 5) + (1 * 4) + (1 * 10) = 12 + 10 + 4 + 10 = 36

        Assume TDI = 20, then VAF = 0.65 + (0.01 * 20) = 0.85

        AFP = 36 * 0.85 = 30.6 (Round to 31)

    *   **Estimate Effort:** If the team's productivity is 4 FP per person-month, the estimated effort is 31/4 = 7.75 person-months.

### Important Points to Remember

*   No single metric is perfect.  Consider using a combination of metrics to get a more accurate estimate.
*   Historical data is crucial for calibrating estimation models.
*   Involve the development team in the estimation process to get their input and buy-in.
*   Continuously refine estimates as the project progresses and more information becomes available.
*   Document all assumptions and calculations.
*   Function Points and Object Points are designed to be technology-independent. LOC is inherently technology-dependent.
*   Choose the metric that is most suitable for the specific project and organizational context.
*   Software estimation is as much art as it is science. Experience and judgment are important.

### Practice Questions/Exercises

**1. Define the term "project size metric" and explain its importance in software project management.**

*Answer:* A project size metric is a quantitative measure of the magnitude or complexity of a software project.  It is important because it provides a foundation for estimating effort, cost, and schedule, planning resources, and comparing different projects.

**2. What are the advantages and disadvantages of using Lines of Code (LOC) as a size metric?**

*Answer:*
*Advantages:* Simple, historical data available.
*Disadvantages:* Language-dependent, difficult to estimate early on, focuses on implementation details.

**3. Explain the steps involved in calculating Function Points (FP).**

*Answer:*
1.  Identify the function types (inputs, outputs, inquiries, ILFs, EIFs).
2.  Rate the complexity of each function type (Low, Average, High).
3.  Calculate the Unadjusted Function Points (UFP) using complexity weights.
4.  Determine the Value Adjustment Factor (VAF) based on General System Characteristics (GSCs).
5.  Calculate the Adjusted Function Points (AFP) by multiplying UFP by VAF.

**4. When is it most appropriate to use Object Points (OP) for project estimation?**

*Answer:* OP is most appropriate for projects developed using object-oriented programming languages, component-based development, and rapid application development (RAD) approaches.

**5. A small web application is estimated to have the following:**

*   4 Simple Screens
*   2 Average Reports
*   1 Complex Module

**Assuming 10% code reuse, calculate the Adjusted Object Points (AOP).**

*Answer:*

UOP = (4 * 1) + (2 * 5) + (1 * 10) = 4 + 10 + 10 = 24
AOP = 24 * (1 - (10/100)) = 24 * 0.9 = 21.6 (Round to 22)

**6.  Why is subjectivity a challenge in using both Function Points and Object Points? How can this subjectivity be mitigated?**

*Answer:*  Subjectivity arises from the need to classify the complexity of function types (FP) or objects (OP) and from the assessment of the influence of general system characteristics (FP) or code reuse (OP). These require judgment calls that can vary between estimators.

To mitigate subjectivity:

*   Use well-defined guidelines and standards for complexity ratings.
*   Involve multiple estimators and average their results.
*   Provide training and calibration exercises to improve estimator consistency.
*   Document all assumptions and rationale behind complexity ratings.
*   Review estimations with project stakeholders for consensus.

These measures help ensure that the estimations are as objective and consistent as possible, thereby improving their reliability.
