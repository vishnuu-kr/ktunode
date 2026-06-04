---
title: "Testing Terminologies - Verification, validation, fault, error, bug, test cases, and coverage criteria"
subject: "SOFTWARE TESTING"
module: "Module 1: Introduction to Software Testing & Automation:"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccb4"
status: "completed"
scrapedAt: "2026-05-20T17:26:26.592Z"
---
# SOFTWARE TESTING: Module 1 - Introduction to Software Testing & Automation

## Topic: Testing Terminologies

This module introduces fundamental concepts and terminology crucial for understanding software testing and automation. Mastering these terms will provide a solid foundation for the rest of the course.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   **Distinguish** between verification and validation in software testing.
*   **Define** and **explain** the concepts of fault, error, and bug.
*   **Describe** the purpose and structure of test cases.
*   **Understand** different coverage criteria and their significance.
*   **Apply** these terminologies to real-world testing scenarios.

---

### Key Concepts and Definitions

#### 1. Verification vs. Validation

These two terms are often used interchangeably, but they represent distinct phases in the software development lifecycle and testing process.

*   **Verification:**
    *   **Definition:** The process of ensuring that the software is built **correctly**. It answers the question: *"Are we building the product right?"*
    *   **Focus:** Checks whether the software meets its specified requirements and design.
    *   **Activities:** Typically performed **during** the development phases. Involves activities like code reviews, walkthroughs, inspections, and static analysis.
    *   **Goal:** To detect defects early in the development cycle and ensure the product adheres to standards and design.
    *   **Example:** A code review verifies that the code follows coding standards, is well-documented, and implements the logic as per the design document.

*   **Validation:**
    *   **Definition:** The process of ensuring that the software is built for the **right purpose**. It answers the question: *"Are we building the right product?"*
    *   **Focus:** Checks whether the software meets the **user's actual needs and expectations**.
    *   **Activities:** Typically performed **after** the product is developed (or partially developed). Involves dynamic testing like unit testing, integration testing, system testing, and acceptance testing.
    *   **Goal:** To ensure the software satisfies the end-users and the business objectives.
    *   **Example:** User Acceptance Testing (UAT) validates that the developed e-commerce application allows customers to successfully browse products, add to cart, and complete a purchase, fulfilling their business needs.

---

#### 2. Fault, Error, and Bug

These terms describe defects in software and the process that leads to them. Understanding their relationship is crucial.

*   **Error (Mistake):**
    *   **Definition:** A human action that produces an incorrect result. This is the **cause** of a defect.
    *   **Origin:** Usually made by developers, designers, or even testers during the software development lifecycle.
    *   **Example:** A developer mistakenly types `>` instead of `>=` in a conditional statement, leading to incorrect program behavior.

*   **Fault (Defect / Defect / Anomaly):**
    *   **Definition:** An imperfection or deficiency in a software component or system that can cause it to fail to perform its required function. This is the **manifestation** of an error in the code or design.
    *   **Origin:** Introduced by an error during the development process. It's a flaw in the code, design, or documentation.
    *   **Example:** The incorrect conditional statement (`>`) written by the developer is a fault in the code.

*   **Bug:**
    *   **Definition:** A common term for a fault that causes the software to produce an incorrect or unexpected result, or to behave in unintended ways. Often used interchangeably with "fault."
    *   **Origin:** The result of a fault when the program is executed.
    *   **Example:** When a user enters a value that should be handled by the `>=` condition but isn't because the code has `>`, the software crashes or produces wrong output. This unexpected behavior is the bug.

**Relationship:**
**Error (human action) → Fault (defect in code/design) → Bug (unexpected behavior during execution)**

---

#### 3. Test Cases

*   **Definition:** A set of conditions or variables under which a tester will determine whether a system under test satisfies requirements or works correctly. It's a step-by-step procedure to execute a test.
*   **Purpose:**
    *   To define specific inputs.
    *   To define execution preconditions.
    *   To define expected outputs or results.
    *   To provide clear instructions on how to perform the test.
    *   To determine the success or failure of a test.
*   **Components of a Test Case:**
    *   **Test Case ID:** A unique identifier for the test case.
    *   **Test Case Title/Name:** A brief description of what the test case aims to verify.
    *   **Description:** A more detailed explanation of the test objective.
    *   **Prerequisites/Preconditions:** Conditions that must be met before the test can be executed.
    *   **Test Steps:** A sequential list of actions to perform.
    *   **Test Data:** The specific input values to be used.
    *   **Expected Result:** The anticipated outcome if the software functions correctly.
    *   **Actual Result:** The observed outcome after executing the test.
    *   **Status (Pass/Fail):** Indicates whether the actual result matches the expected result.
    *   **Postconditions:** Conditions that should be met after the test execution (optional).
*   **Example:**

    | Test Case ID | Test Case Title                 | Description                                         | Prerequisites                                   | Test Steps                                                                                                                                                                                          | Test Data     | Expected Result                                        | Actual Result | Status |
    | :----------- | :------------------------------ | :-------------------------------------------------- | :---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------ | :----------------------------------------------------- | :------------ | :----- |
    | TC_LOGIN_001 | Valid Username and Password     | Verify successful login with valid credentials.     | User is on the login page.                      | 1. Enter username. <br> 2. Enter password. <br> 3. Click the "Login" button.                                                                                          | Username: `testuser` <br> Password: `password123` | User is redirected to the dashboard page.                  |               |        |
    | TC_LOGIN_002 | Invalid Username, Valid Password | Verify login failure with an invalid username.    | User is on the login page.                      | 1. Enter invalid username. <br> 2. Enter password. <br> 3. Click the "Login" button.                                                                                  | Username: `invalidUser` <br> Password: `password123` | An error message "Invalid username or password" is displayed. |               |        |

---

#### 4. Coverage Criteria

*   **Definition:** Metrics used to measure the extent to which the software's code or functionality has been tested. They help ensure that a sufficient amount of the system is exercised during testing.
*   **Purpose:**
    *   To provide a quantitative measure of testing thoroughness.
    *   To identify areas of the code or functionality that have not been tested.
    *   To guide the creation of new test cases.
*   **Common Coverage Criteria:**

    *   **Statement Coverage (or Line Coverage):**
        *   **Definition:** Measures the percentage of executable statements in the code that have been executed by the test suite.
        *   **Goal:** To ensure every line of code has been run at least once.
        *   **Example:** If a program has 100 executable statements and your tests execute 80 of them, the statement coverage is 80%.

    *   **Branch Coverage (or Decision Coverage):**
        *   **Definition:** Measures the percentage of branches (e.g., from if-else statements, switch cases, loops) that have been executed. This means both the true and false outcomes of each decision point should be tested.
        *   **Goal:** To ensure every possible path through a decision point is tested.
        *   **Example:** For an `if (condition)` statement, tests must execute both when `condition` is true and when `condition` is false.

    *   **Path Coverage:**
        *   **Definition:** Measures the percentage of all possible execution paths through the code that have been executed.
        *   **Goal:** To test every distinct sequence of operations.
        *   **Note:** Path coverage is often very difficult to achieve fully, especially in complex programs, as the number of paths can be exponential.

    *   **Condition Coverage (or Predicate Coverage):**
        *   **Definition:** Measures the percentage of boolean sub-expressions within conditions that have evaluated to both true and false.
        *   **Goal:** To ensure each part of a complex condition is tested.
        *   **Example:** For `if (A && B)`, Condition Coverage aims to test A as true, A as false, B as true, and B as false.

    *   **Function Coverage:**
        *   **Definition:** Measures the percentage of functions (or methods) in the code that have been called by the test suite.
        *   **Goal:** To ensure all functions are invoked at least once.

*   **Important Note on Coverage:**
    *   High coverage doesn't guarantee bug-free software. It only indicates that the code has been executed.
    *   Coverage criteria are useful for identifying untested code but should be used in conjunction with effective test case design based on requirements and risk.

---

### Practice Questions & Exercises

**Section 1: Definitions and Distinctions**

1.  **Question:** A developer writes code that has a logical error in a calculation. Later, when the software is used, it produces the wrong financial report.
    *   What term best describes the developer's mistake?
    *   What term best describes the flaw in the calculation logic within the code?
    *   What term best describes the incorrect financial report generated?

2.  **Question:** Differentiate between Verification and Validation. Which one focuses on "building the product right" and which one on "building the right product"?

**Section 2: Test Cases**

3.  **Question:** Imagine you are testing a simple "Add to Cart" feature on an e-commerce website. Write a basic test case for a successful "Add to Cart" scenario. Include at least: Test Case ID, Title, Prerequisites, Test Steps, Test Data, and Expected Result.

**Section 3: Coverage Criteria**

4.  **Question:** Consider the following pseudo-code snippet:
    ```
    function calculate_discount(price, quantity):
      if price > 100 and quantity > 5:
        discount = price * 0.10
      else:
        discount = price * 0.05
      return discount
    ```
    *   What are the different branches in this code?
    *   What test data would you use to achieve 100% branch coverage for this function?

---

### Answers to Practice Questions

**Section 1: Definitions and Distinctions**

1.  *   Developer's mistake: **Error** (or Mistake)
    *   Flaw in calculation logic: **Fault** (or Defect)
    *   Incorrect financial report: **Bug** (or Defect/Anomaly)

2.  *   **Verification:** Focuses on "building the product right" by ensuring it conforms to specifications and design.
    *   **Validation:** Focuses on "building the right product" by ensuring it meets user needs and business requirements.

**Section 2: Test Cases**

3.  **Example Test Case:**

    | Test Case ID | Test Case Title        | Description                                         | Prerequisites                                | Test Steps                                                                                                            | Test Data                                   | Expected Result                                    |
    | :----------- | :--------------------- | :-------------------------------------------------- | :------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ | :------------------------------------------------- |
    | TC_CART_001  | Add Item to Cart (Success) | Verify that an item can be successfully added to the cart. | User is logged in. User is on a product page. | 1. Locate the "Add to Cart" button. <br> 2. Click the "Add to Cart" button. <br> 3. Navigate to the shopping cart page. | Product: "T-Shirt" <br> Quantity: 1         | The "T-Shirt" item appears in the shopping cart with quantity 1. The cart total updates correctly. |

**Section 3: Coverage Criteria**

4.  **Pseudo-code Analysis:**
    *   **Branches:**
        1.  The `if` condition: `price > 100 and quantity > 5`
        2.  The `else` block (which represents the "false" outcome of the `if` condition).
    *   **Test Data for 100% Branch Coverage:**
        To achieve 100% branch coverage, we need to test both outcomes of the `if` condition:
        *   **Case 1 (True for the `if` condition):**
            *   `price = 150`, `quantity = 10`
            *   (This will execute the `discount = price * 0.10` line)
        *   **Case 2 (False for the `if` condition):**
            *   `price = 50`, `quantity = 3` (Both parts of the `and` are false)
            *   OR `price = 150`, `quantity = 3` (First part is true, second is false)
            *   OR `price = 50`, `quantity = 10` (First part is false, second is true)
            *   Any of these will execute the `discount = price * 0.05` line. For simplicity, let's use:
            *   `price = 50`, `quantity = 3`

---

### Important Points to Remember

*   **Verification** is about correctness against specifications; **Validation** is about meeting user needs.
*   **Errors** are human mistakes, leading to **Faults** (defects in code/design), which manifest as **Bugs** (unexpected behavior).
*   **Test Cases** are detailed instructions to verify specific functionalities, including inputs, steps, and expected outcomes.
*   **Coverage Criteria** (like Statement, Branch) are metrics to assess testing thoroughness and identify untested code. High coverage is good, but not a guarantee of bug-free software.
*   These terms are foundational and will be used throughout your software testing journey.
