---
title: "Black Box Testing - Input space partitioning, domain testing, functional testing (equivalence class partitioning, boundary value analysis, decision tables, random testing)"
subject: "SOFTWARE TESTING"
module: "Module 4: Black Box Testing, Grey Box Testing, and Responsive Testing:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cccd"
status: "completed"
scrapedAt: "2026-05-20T17:26:41.815Z"
---
# Software Testing: Module 4 - Black Box, Grey Box, and Responsive Testing

## Topic: Black Box Testing - Input Space Partitioning, Domain Testing, and Functional Testing

This module delves into various techniques used in Black Box Testing, focusing on how to effectively test software without knowledge of its internal structure.

---

### 1. Introduction to Black Box Testing

*   **Definition:** Black box testing is a software testing method that examines the functionality of an application without peering into its internal structures or workings. It tests the software based on its specifications and requirements. The tester acts like an end-user, interacting with the application through its user interface.

*   **Key Principle:** "What" the system does, not "How" it does it.

*   **Advantages:**
    *   Tests are conducted from a user's point of view.
    *   Testers do not need programming knowledge.
    *   Unbiased and independent testing.
    *   Can be started early in the development cycle (based on specifications).

*   **Disadvantages:**
    *   Limited coverage if specifications are incomplete or ambiguous.
    *   Cannot test specific code paths or internal logic.
    *   Ineffective for testing non-functional requirements that aren't explicitly documented.
    *   Can be redundant if white box testing is also performed.

---

### 2. Input Space Partitioning (ISP)

*   **Concept:** Input space partitioning is a test design technique where the input data domain is divided into partitions (or subsets) of data that are expected to be processed similarly by the software. A single test case is then generated for each partition. The goal is to reduce the number of test cases while achieving good coverage.

*   **Key Idea:** If one value in a partition works, all values in that partition are likely to work.

*   **Steps:**
    1.  **Identify Input Fields:** Determine all input parameters to the software.
    2.  **Define Input Domains:** For each input field, define its valid and invalid ranges or sets of values.
    3.  **Partition Domains:** Divide each domain into smaller, mutually exclusive, and exhaustive partitions. These partitions are based on expected behavior.
    4.  **Generate Test Cases:** Select one representative value from each partition to create a test case.

*   **Example:** Consider a date input field that accepts dates in DD/MM/YYYY format.
    *   **Input Domain:** Valid dates (e.g., 01/01/2023 to 31/12/2023) and invalid dates (e.g., 31/02/2023, 13/01/2023, 01/01/10000).
    *   **Partitions:**
        *   **Valid Days:** 1-28, 29, 30, 31 (depending on month and year)
        *   **Valid Months:** 1-12
        *   **Valid Years:** Reasonable range (e.g., 1900-2099)
        *   **Invalid Day Format:** DD-MM-YYYY, MM/DD/YYYY
        *   **Invalid Month:** 0, 13
        *   **Invalid Year:** Too old, too far in future, non-numeric
        *   **Invalid Separators:** DD.MM.YYYY
    *   **Test Cases (Sample):**
        *   `01/01/2023` (Valid)
        *   `29/02/2024` (Valid, leap year)
        *   `31/04/2023` (Invalid day for month)
        *   `15/13/2023` (Invalid month)
        *   `10-05-2023` (Invalid format)

---

### 3. Domain Testing

*   **Concept:** Domain testing is a black-box technique that focuses on testing the boundaries of input data domains. It's a specific application of input space partitioning, particularly useful for inputs that have numerical or range-based constraints.

*   **Key Idea:** Defects are often found at the boundaries of valid input ranges.

*   **Process:**
    1.  **Identify Input Variables:** Determine the input variables that have defined domains (ranges).
    2.  **Define Domains:** For each variable, identify its valid and invalid domains.
    3.  **Identify Boundaries:** Determine the minimum and maximum values for each valid domain, and values just outside these boundaries for invalid domains.
    4.  **Generate Test Cases:** Create test cases using values from the boundaries.

*   **Example:** A field accepts an integer value between 1 and 100 (inclusive).
    *   **Valid Domain:** [1, 100]
    *   **Boundaries:**
        *   Minimum valid: 1
        *   Maximum valid: 100
        *   Just below minimum invalid: 0
        *   Just above maximum invalid: 101
    *   **Test Cases:**
        *   `1` (Minimum valid)
        *   `100` (Maximum valid)
        *   `0` (Minimum invalid)
        *   `101` (Maximum invalid)
        *   `50` (Mid-range valid, often good to include)

---

### 4. Functional Testing

*   **Concept:** Functional testing is a type of black-box testing that verifies if the software performs its functions as specified in the requirements. It focuses on testing the features and functionality of the application from the end-user's perspective.

*   **Goal:** To ensure that the software meets the functional requirements.

*   **Key Techniques within Functional Testing:**

    *   **4.1 Equivalence Class Partitioning (ECP)**
        *   **Concept:** ECP is a test case design technique where the input data domain is divided into partitions (or classes) such that all values within a class are expected to be processed similarly by the software. A single test case is selected from each class to represent that class.
        *   **Types of Classes:**
            *   **Valid Equivalence Classes:** Input values that the software is expected to accept and process correctly.
            *   **Invalid Equivalence Classes:** Input values that the software is expected to reject or handle with specific error messages.
        *   **Benefits:** Reduces the number of test cases needed while providing good test coverage.
        *   **Process:**
            1.  Identify input fields/parameters.
            2.  Identify valid and invalid partitions for each input.
            3.  Select one test case from each partition.
        *   **Example:** A field accepts an integer between 1 and 100.
            *   **Valid Partition:** {1, 2, ..., 100}
            *   **Invalid Partition (Less than minimum):** {-1, 0}
            *   **Invalid Partition (Greater than maximum):** {101, 102, ...}
            *   **Invalid Partition (Non-numeric):** {abc, !@#}
            *   **Test Cases (ECP):**
                *   `50` (from valid partition)
                *   `0` (from invalid partition < min)
                *   `101` (from invalid partition > max)
                *   `abc` (from invalid partition non-numeric)

    *   **4.2 Boundary Value Analysis (BVA)**
        *   **Concept:** BVA is a test case design technique that focuses on testing the boundary values of input domains. It's based on the observation that errors often occur at the boundaries of input ranges.
        *   **Key Idea:** Test values at the edges of valid and invalid ranges.
        *   **Process:**
            1.  Identify the boundaries of valid input data.
            2.  Define test cases at:
                *   The minimum valid value.
                *   The value just above the minimum valid value.
                *   The maximum valid value.
                *   The value just below the maximum valid value.
                *   A typical value within the range (optional but recommended).
        *   **Example:** A field accepts an integer between 1 and 100.
            *   **Boundaries:** 1, 100
            *   **Test Cases (BVA):**
                *   `1` (Minimum valid)
                *   `2` (Just above minimum valid)
                *   `100` (Maximum valid)
                *   `99` (Just below maximum valid)
                *   `50` (Typical value)
        *   **Relationship with ECP:** BVA is often used in conjunction with ECP. ECP identifies the partitions, and BVA helps select the most critical test cases within those partitions, particularly for range-based inputs.

    *   **4.3 Decision Tables**
        *   **Concept:** Decision tables are a structured technique used to test complex business rules or logic where multiple conditions can lead to different actions or outcomes. They provide a systematic way to derive test cases for all combinations of conditions.
        *   **Components:**
            *   **Conditions:** The inputs or criteria that influence the outcome.
            *   **Actions:** The outcomes or operations performed by the software based on the conditions.
            *   **Rules:** Combinations of condition states that lead to specific actions.
        *   **Benefits:**
            *   Helps identify all possible logic combinations.
            *   Ensures all condition/action pairs are tested.
            *   Useful for documenting complex logic.
        *   **Process:**
            1.  Identify all conditions.
            2.  Identify all possible actions.
            3.  Create a table with conditions listed in the upper portion and actions in the lower portion.
            4.  Generate columns for each possible rule (combination of condition states).
            5.  Mark the state of each condition (True/False, Yes/No, Y/N) and the corresponding action (X) for each rule.
            6.  Simplify the table by combining rules with identical actions.
        *   **Example:** Online discount policy.
            *   **Conditions:**
                *   C1: Customer is a member? (Y/N)
                *   C2: Order amount is > $100? (Y/N)
            *   **Actions:**
                *   A1: Apply 10% discount
                *   A2: Apply 5% discount
                *   A3: No discount
            *   **Decision Table:**

            | Rule | C1: Member? | C2: Amount > $100? | A1: 10% Discount | A2: 5% Discount | A3: No Discount |
            | :---: | :---------: | :----------------: | :--------------: | :-------------: | :-------------: |
            | R1  |      Y      |         Y          |         X        |                 |                 |
            | R2  |      Y      |         N          |                  |        X        |                 |
            | R3  |      N      |         Y          |                  |        X        |                 |
            | R4  |      N      |         N          |                  |                 |        X        |

            *   **Test Cases derived from Rules:**
                *   Test Case 1 (R1): Member, Amount > $100 -> Apply 10% discount.
                *   Test Case 2 (R2): Member, Amount <= $100 -> Apply 5% discount.
                *   Test Case 3 (R3): Not a member, Amount > $100 -> Apply 5% discount.
                *   Test Case 4 (R4): Not a member, Amount <= $100 -> No discount.

    *   **4.4 Random Testing**
        *   **Concept:** Random testing involves generating test cases with random input values. It's typically used when there's no readily available specification or when the specification is too complex to be effectively modeled.
        *   **Types:**
            *   **Pure Random Testing:** Completely random selection of inputs.
            *   **Random Testing with Constraints:** Random selection within defined valid or invalid input ranges.
        *   **Benefits:**
            *   Can sometimes uncover unexpected bugs that structured techniques might miss.
            *   Easy to implement for certain types of tests.
        *   **Disadvantages:**
            *   Low test coverage.
            *   Difficult to reproduce bugs if the random seed isn't controlled.
            *   Highly inefficient for most scenarios.
            *   Requires a large number of test cases to achieve reasonable coverage.
        *   **Use Cases:** Often used as a supplementary technique or for fuzz testing.
        *   **Example:** Testing a password field that accepts alphanumeric characters and must be at least 8 characters long.
            *   **Random Test Case:** `sdF8$%#k2pL` (Generate a random string meeting length and allowed character constraints).

---

### Learning Outcomes Check

*   **Black Box Testing Fundamentals:** Covered in the introduction and the rationale behind the techniques.
*   **Input Space Partitioning:** Explained with definition, steps, and example.
*   **Domain Testing:** Explained with definition, process, and example.
*   **Functional Testing:** Covered as an umbrella concept.
*   **Equivalence Class Partitioning (ECP):** Explained with definition, types of classes, benefits, process, and example.
*   **Boundary Value Analysis (BVA):** Explained with definition, key idea, process, example, and its relation to ECP.
*   **Decision Tables:** Explained with concept, components, benefits, process, and example.
*   **Random Testing:** Explained with concept, types, benefits, disadvantages, use cases, and example.

---

### Practice Questions & Exercises

**Question 1:**
A system accepts an age input that must be between 18 and 60 years, inclusive.
a) Using Equivalence Class Partitioning, identify the valid and invalid partitions.
b) Using Boundary Value Analysis, list the test cases you would generate.

**Answer 1:**
a) **Valid Partition:** {18, 19, ..., 60}
   **Invalid Partitions:**
   *   Less than minimum: {..., 16, 17}
   *   Greater than maximum: {61, 62, ...}
   *   Non-numeric: {abc, !@#}

b) **Boundary Value Analysis Test Cases:**
   *   `17` (Just below minimum valid)
   *   `18` (Minimum valid)
   *   `19` (Just above minimum valid)
   *   `59` (Just below maximum valid)
   *   `60` (Maximum valid)
   *   `61` (Just above maximum valid)
   *   (Optional) `30` (Typical value)

---

**Question 2:**
Consider a scenario where a user needs to select a product category from a dropdown list. The system provides the following categories: "Electronics", "Clothing", "Books", "Home & Garden".
Describe how you would apply Input Space Partitioning to test this feature.

**Answer 2:**
*   **Input Field:** Product Category dropdown.
*   **Input Domain:** The set of available product categories.
*   **Partitioning:**
    *   **Partition 1 (Valid):** {"Electronics", "Clothing", "Books", "Home & Garden"} - represents the expected, correct categories.
    *   **Partition 2 (Invalid):** {"Sports", "Cars", "" (empty selection)} - represents categories that should not be selectable or a lack of selection.
    *   **Partition 3 (Invalid Format - if applicable):** {"electronics", "CLOTHING"} - testing case sensitivity if the system is supposed to be case-sensitive or insensitive.
*   **Test Cases (Sample):**
    *   Select "Electronics".
    *   Attempt to enter/select "Sports" (if direct input is possible or if the dropdown can be manipulated).
    *   Select an empty value or ensure the default behavior for no selection is tested.
    *   Select "CLOTHING" to check case sensitivity.

---

**Question 3:**
You need to test a login function with the following requirements:
*   Username must be between 5 and 15 characters.
*   Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.

Create a decision table to represent the logic for testing the username and password criteria independently.

**Answer 3:**
This question is a bit tricky as decision tables are best for **combinations** of conditions. However, we can adapt it to show testing of independent criteria if we consider "pass" or "fail" for each criterion.

**Decision Table for Username and Password Criteria (Simplified for Independent Testing)**

Let's assume the system processes username and password separately for initial validation.

**Part 1: Username Validation**

| Rule | C1: Username Length < 5 | C2: Username Length > 15 | A1: Username Invalid Length | A2: Username Valid Length |
| :---: | :----------------------: | :-----------------------: | :--------------------------: | :------------------------: |
| R1  |            Y             |             N             |              X               |                            |
| R2  |            N             |             Y             |              X               |                            |
| R3  |            N             |             N             |                              |              X             |

**Test Cases from Username Decision Table:**
*   R1: Username length = 4 (e.g., "user") -> Expect Invalid Length
*   R2: Username length = 16 (e.g., "verylongusername") -> Expect Invalid Length
*   R3: Username length = 5 (e.g., "users") or 15 (e.g., "username12345") -> Expect Valid Length

**Part 2: Password Validation**

| Rule | C1: Pwd Length < 8 | C2: No Uppercase | C3: No Lowercase | C4: No Digit | A1: Password Invalid | A2: Password Valid |
| :---: | :-----------------: | :--------------: | :--------------: | :----------: | :------------------: | :----------------: |
| R1  |          Y          |        -         |        -         |      -       |          X           |                    |
| R2  |          N          |        Y         |        -         |      -       |          X           |                    |
| R3  |          N          |        N         |        Y         |      -       |          X           |                    |
| R4  |          N          |        N         |        N         |      Y       |          X           |                    |
| R5  |          N          |        N         |        N         |      N       |                      |         X          |

*Note: '-' indicates the condition doesn't matter for that rule.*

**Test Cases from Password Decision Table:**
*   R1: Pwd length = 7 (e.g., "pass123") -> Expect Invalid
*   R2: Pwd length = 8, no uppercase (e.g., "password123") -> Expect Invalid
*   R3: Pwd length = 8, no lowercase (e.g., "PASSWORD123") -> Expect Invalid
*   R4: Pwd length = 8, no digit (e.g., "PasswordABC") -> Expect Invalid
*   R5: Pwd length = 8, has uppercase, lowercase, digit (e.g., "Pass123") -> Expect Valid

---

### Important Points to Remember

*   **Black box testing focuses on *what* the software does, not *how*.**
*   **Input Space Partitioning and Equivalence Class Partitioning aim to reduce test cases by grouping similar inputs.**
*   **Boundary Value Analysis is critical because errors are often found at the edges of input ranges.**
*   **Decision Tables are powerful for testing complex logic with multiple conditions and actions.**
*   **Random testing can find unexpected bugs but is generally inefficient for comprehensive testing.**
*   **Always refer to the software's requirements and specifications when designing black-box test cases.**
*   **Combine techniques like ECP and BVA for more effective test case generation.**
