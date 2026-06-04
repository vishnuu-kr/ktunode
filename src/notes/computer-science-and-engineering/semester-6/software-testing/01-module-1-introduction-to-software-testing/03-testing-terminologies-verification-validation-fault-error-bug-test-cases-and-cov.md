---
title: "Testing Terminologies - Verification, validation, fault, error, bug, test cases, and coverage criteria"
subject: "SOFTWARE TESTING"
module: "Module 1: Introduction to Software Testing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8baea"
status: "completed"
scrapedAt: "2026-05-20T16:57:14.460Z"
---
# Software Testing - Module 1: Introduction to Software Testing - Testing Terminologies

## Learning Outcomes

*   Understand the definitions of key software testing terminologies: Verification, Validation, Fault, Error, Bug, Test Cases, and Coverage Criteria.
*   Differentiate between Verification and Validation.
*   Relate Faults, Errors, and Bugs to their impact on software quality.
*   Understand the purpose and structure of Test Cases.
*   Understand the concept of Coverage Criteria and its importance in test design.

## 1. Verification and Validation

### 1.1 Verification

*   **Key Concept:** Verification is the process of evaluating software to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase.  Essentially, it answers the question: "Are we building the product right?".

*   **Definition:** Ensuring that the software meets the specified requirements at each stage of the development lifecycle. It focuses on the *process* of development.

*   **Activities:**
    *   Reviews (code reviews, design reviews)
    *   Inspections
    *   Walkthroughs
    *   Document analysis

*   **Example:**  A code review where developers check if the code adheres to coding standards and correctly implements the design specifications. Another example is reviewing the architecture design to ensure it aligns with the system requirements.

*   **Focus:** Static analysis (examining code without executing it).

*   **Important Points to Remember:**
    *   Verification happens *before* validation.
    *   It confirms that the intermediate products (design documents, code) are correct.
    *   Focuses on conforming to *specifications*.

### 1.2 Validation

*   **Key Concept:** Validation is the process of evaluating software during or at the end of the development process to determine whether it satisfies specified business needs. Essentially, it answers the question: "Are we building the right product?".

*   **Definition:** Ensuring that the software meets the user's needs and expectations in the operational environment. It focuses on the *product* itself.

*   **Activities:**
    *   Testing (unit testing, integration testing, system testing, user acceptance testing)
    *   Demonstrations

*   **Example:** Performing User Acceptance Testing (UAT) to confirm that the software meets the needs of the end-users. Running system tests to verify that all modules of the software work together correctly.

*   **Focus:** Dynamic analysis (executing the software).

*   **Important Points to Remember:**
    *   Validation happens *after* verification.
    *   It confirms that the final product fulfills the intended *purpose*.
    *   Focuses on conforming to *customer needs*.

### 1.3 Verification vs. Validation - Key Differences

| Feature           | Verification                                    | Validation                                         |
| ----------------- | ----------------------------------------------- | -------------------------------------------------- |
| **Purpose**      | To ensure the product is built correctly.      | To ensure the correct product is built.           |
| **Focus**        | Process oriented                                  | Product oriented                                   |
| **Methods**      | Reviews, Inspections, Walkthroughs             | Testing (Unit, Integration, System, UAT), Demos |
| **When**         | During the development process                  | At the end of the development process              |
| **Analysis Type** | Static Analysis (without executing the code)   | Dynamic Analysis (executing the code)           |
| **Answers**       | "Are we building the product right?"              | "Are we building the right product?"               |
## 2. Fault, Error, and Bug

These terms are often used interchangeably but have distinct meanings in software testing.

### 2.1 Fault

*   **Definition:** A defect in the code that can cause an error.  It's a static condition.  It can be a missing, incorrect, or extra piece of code.

*   **Example:**  An incorrect formula in a calculation or a missing "if" condition. A typo in a configuration file.

*   **Important Point:**  A fault may not always lead to an error during program execution.

### 2.2 Error

*   **Definition:** A deviation from the expected behavior of the system caused by a fault. It's an incorrect internal state of the system. This only occurs at runtime.

*   **Example:**  An incorrect calculation result because of an incorrect formula (the fault). A program crashing due to accessing memory it shouldn't.

*   **Important Point:** An error occurs during the execution of the software.

### 2.3 Bug

*   **Definition:**  A manifest symptom of an error.  It's an instance of an error exposed during testing or in the operational environment that can be traced back to an underlying fault.  It's also used informally as a general term for any type of software defect.

*   **Example:**  A wrong value displayed on the screen (the bug) caused by an incorrect calculation (the error) due to a wrong formula in the code (the fault). A "page not found" error when navigating a website (bug) due to a misconfigured server route (fault), leading to the server incorrectly attempting to find the page (error).

*   **Important Point:** A bug is the *observable* problem that triggers corrective action.

### 2.4 Relationship

*   A **fault** can lead to an **error**.
*   An **error** can manifest as a **bug**.
*   (Fault -> Error -> Bug)

## 3. Test Cases

### 3.1 Definition

*   A test case is a set of conditions or variables under which a tester will determine whether an application, software system or one of its features is working as it was originally established for it to do.  It's a detailed procedure designed to verify a specific aspect of the software.

### 3.2 Components of a Test Case

*   **Test Case ID:**  A unique identifier for the test case (e.g., TC_001).
*   **Test Case Name/Title:** A descriptive name for the test case (e.g., Verify successful login with valid credentials).
*   **Description:** A brief explanation of what the test case aims to achieve.
*   **Pre-conditions:**  The conditions that must be met before the test case can be executed (e.g., User account exists, Application is running).
*   **Test Data:** The input values required for the test case (e.g., Username, Password).
*   **Test Steps:** A detailed, step-by-step procedure for executing the test.
*   **Expected Result:** The anticipated outcome of the test steps (e.g., User is successfully logged in and redirected to the homepage).
*   **Actual Result:** The actual outcome observed during test execution.
*   **Pass/Fail:** Indicates whether the test case passed or failed.
*   **Post-conditions:** The conditions that will be true after the test case has been executed (e.g., User session is active).

### 3.3 Example Test Case

**Test Case ID:** TC_LOGIN_001
**Test Case Name:** Verify successful login with valid credentials
**Description:** This test case verifies that a user can successfully log in to the application with valid credentials.
**Pre-conditions:**
    *   The application is running.
    *   A user account with valid credentials exists.
**Test Data:**
    *   Username: valid_user
    *   Password: valid_password
**Test Steps:**
    1.  Open the application's login page.
    2.  Enter the username in the username field.
    3.  Enter the password in the password field.
    4.  Click the "Login" button.
**Expected Result:**
    *   The user is successfully logged in and redirected to the homepage.
**Actual Result:** [To be filled after execution]
**Pass/Fail:** [To be filled after execution]
**Post-conditions:**
    *   User session is active.

## 4. Coverage Criteria

### 4.1 Definition

*   Coverage criteria are rules used to determine how thoroughly a software component has been tested. They define the extent to which the code has been exercised by the test suite.

### 4.2 Types of Coverage Criteria

*   **Statement Coverage:**  Ensures that every statement in the code is executed at least once.
*   **Branch Coverage:**  Ensures that every branch (e.g., if/else conditions, loops) in the code is executed at least once.
*   **Decision Coverage:** Similar to branch coverage, focuses on covering all possible outcomes of decision points (if/else statements).
*   **Condition Coverage:** Ensures that all possible outcomes of each condition within a decision are tested.
*   **Path Coverage:**  Ensures that all possible paths through the code are executed. (This is often impractical for complex systems)
*   **Function Coverage:**  Ensures that every function in the code is called at least once.
*   **Data Flow Coverage:**  Considers how data flows through the program, testing different data values and their impact.

### 4.3 Importance of Coverage Criteria

*   **Measure Test Thoroughness:** Provide a quantifiable metric for assessing the quality of testing.
*   **Identify Untested Code:** Reveal areas of the code that have not been adequately tested.
*   **Improve Test Suite:**  Guide the creation of new test cases to increase code coverage.
*   **Reduce Risk:**  Help minimize the risk of undetected defects in the software.

### 4.4 Example

Consider the following code snippet:

```java
public int calculate(int a, int b) {
    int result = 0;
    if (a > 0 && b > 0) {
        result = a + b;
    } else {
        result = a - b;
    }
    return result;
}
```

*   **Statement Coverage:**  To achieve 100% statement coverage, you need to execute the `calculate` function with at least one set of inputs.  For example, calling `calculate(1, 1)` would achieve statement coverage.
*   **Branch/Decision Coverage:** To achieve 100% branch/decision coverage, you need two test cases:
    1.  `calculate(1, 1)` (a > 0 && b > 0 is true)
    2.  `calculate(-1, 1)` (a > 0 && b > 0 is false)
*   **Condition Coverage:** To achieve 100% condition coverage, we need to cover all possible combinations of `a > 0` and `b > 0`:
    1.  `a > 0` is true, `b > 0` is true:  `calculate(1, 1)`
    2.  `a > 0` is true, `b > 0` is false:  `calculate(1, -1)`
    3.  `a > 0` is false, `b > 0` is true:  `calculate(-1, 1)`
    4.  `a > 0` is false, `b > 0` is false: `calculate(-1, -1)`

## Practice Questions/Exercises

1.  **Question:**  Explain the difference between Verification and Validation. Provide an example of each.
    **Answer:** Verification ensures the software is built correctly (according to specifications) through static analysis (e.g., code reviews). Validation ensures the correct software is built (meeting user needs) through dynamic analysis (e.g., UAT). Example of Verification: Code review to check for coding standards. Example of Validation: User Acceptance Testing to ensure the application meets user requirements.

2.  **Question:**  Describe the relationship between Fault, Error, and Bug.
    **Answer:** A fault is a defect in the code.  An error is an incorrect internal state of the system caused by a fault. A bug is a manifest symptom of an error, exposed during testing or operation. (Fault -> Error -> Bug).

3.  **Question:** What are the key components of a test case?
    **Answer:**  Test Case ID, Test Case Name/Title, Description, Pre-conditions, Test Data, Test Steps, Expected Result, Actual Result, Pass/Fail, Post-conditions.

4.  **Question:**  Explain the concept of Statement Coverage and provide an example.
    **Answer:** Statement coverage ensures that every statement in the code is executed at least once. Example: If you have a simple `if` statement, you need at least one test case that executes the `if` block and at least one test case that executes the `else` block (if it exists).

5.  **Question:**  Consider the following code:

```java
public boolean isEligible(int age, boolean hasLicense) {
    if (age >= 18 && hasLicense) {
        return true;
    } else {
        return false;
    }
}
```
What test cases would you need to achieve 100% Branch Coverage?

**Answer:**
    *   **Test Case 1:** `age = 20, hasLicense = true` (to cover the `true` branch)
    *   **Test Case 2:** `age = 16, hasLicense = false` (to cover the `false` branch) or any other combination to make the if condition false.

## Important Points to Remember

*   Verification and Validation are complementary activities.
*   Understanding the differences between Fault, Error, and Bug helps in debugging and defect management.
*   Well-defined test cases are crucial for effective testing.
*   Coverage criteria help ensure thorough testing and minimize the risk of undetected defects.
