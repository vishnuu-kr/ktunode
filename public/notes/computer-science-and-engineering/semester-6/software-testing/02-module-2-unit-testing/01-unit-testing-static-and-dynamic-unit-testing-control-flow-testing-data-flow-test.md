---
title: "Unit Testing- Static and Dynamic Unit Testing, control flow testing, data flow testing, domain testing"
subject: "SOFTWARE TESTING"
module: "Module 2: Unit Testing"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8baf1"
status: "completed"
scrapedAt: "2026-05-20T16:57:18.825Z"
---
# SOFTWARE TESTING - Module 2: Unit Testing - Unit Testing Techniques

## Overview

This module focuses on unit testing, a crucial part of software development that involves testing individual components or units of code in isolation. This section covers static and dynamic unit testing, along with more advanced techniques like control flow testing, data flow testing, and domain testing.

## Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the differences between static and dynamic unit testing.
*   Apply control flow testing techniques to identify potential errors in code execution.
*   Apply data flow testing techniques to uncover anomalies in data usage within a unit.
*   Use domain testing to verify the proper handling of input and output values.
*   Understand the benefits and limitations of each unit testing technique.

## 1. Static and Dynamic Unit Testing

### 1.1 Static Unit Testing

*   **Definition:**  Static unit testing involves examining the code without executing it. It relies on manual or automated analysis to identify potential issues.

*   **Key Concepts:**
    *   **Code Reviews:** A process where developers examine each other's code to find errors, improve code quality, and ensure adherence to coding standards.
    *   **Static Analyzers:** Tools that automatically analyze code for potential bugs, security vulnerabilities, and coding standard violations.  These tools analyze code structure, data dependencies, and potential runtime errors without actually running the program.

*   **Techniques:**
    *   **Manual Code Reviews:**  Developers visually inspect code for logic errors, typos, and adherence to coding standards.  This can be done individually or as a team.
    *   **Automated Static Analysis:** Using tools like SonarQube, PMD, FindBugs, or ESLint to detect potential problems.

*   **Advantages:**
    *   Finds defects early in the development cycle, reducing the cost of fixing them.
    *   Improves code quality and maintainability.
    *   Can detect certain types of errors that are difficult to find through dynamic testing (e.g., dead code, unused variables).

*   **Disadvantages:**
    *   Cannot detect runtime errors.
    *   May produce false positives (reporting issues that are not actually problems).
    *   Requires knowledge of the code and coding standards.

*   **Example:**
    *   **Code Review Scenario:** A team reviews a function that calculates the factorial of a number. During the review, a developer notices that the function doesn't handle negative input, potentially leading to an infinite loop.

*   **Tools:**
    *   SonarQube
    *   PMD (Java)
    *   FindBugs (Java)
    *   ESLint (JavaScript)
    *   Coverity Static Analysis

### 1.2 Dynamic Unit Testing

*   **Definition:** Dynamic unit testing involves executing the code with specific inputs and verifying that the outputs are as expected.  It focuses on observing the behavior of the unit at runtime.

*   **Key Concepts:**
    *   **Test Cases:**  A set of inputs, execution preconditions, expected results, and postconditions developed for a particular test objective, such as to exercise a particular program path or to verify compliance with a specific requirement.
    *   **Test Drivers:**  A "dummy" program used to call the unit being tested and provide it with the necessary inputs.  Often used when a unit is deeply embedded in a larger system.
    *   **Test Stubs:** A "dummy" implementation of a dependency that the unit under test relies on.  Stubs allow you to isolate the unit and control its interactions with other parts of the system.
    *   **Assertions:** Statements within the test code that verify the expected outcome.  If an assertion fails, the test case fails.

*   **Techniques:**
    *   **Black-Box Testing:** Testing the functionality of the unit without knowledge of the internal code.  Focuses on input/output behavior.
    *   **White-Box Testing:** Testing the internal structure and logic of the unit.  Requires knowledge of the code implementation.
    *   **Gray-Box Testing:**  A combination of black-box and white-box testing, where testers have partial knowledge of the internal structure.

*   **Advantages:**
    *   Detects runtime errors, such as null pointer exceptions and array out-of-bounds errors.
    *   Verifies that the code behaves as expected under different conditions.
    *   Provides concrete evidence of code functionality.

*   **Disadvantages:**
    *   Cannot guarantee complete coverage of all possible execution paths.
    *   Requires careful design of test cases to be effective.
    *   Can be time-consuming to write and execute test cases.

*   **Example:**
    *   **Dynamic Testing Scenario:** Writing a test case for a function that calculates the area of a rectangle. The test case provides input values for the length and width and asserts that the function returns the correct area.
    *   **Code (Python):**

        ```python
        def calculate_area(length, width):
            """Calculates the area of a rectangle."""
            if length < 0 or width < 0:
                return None  # Or raise an exception, depending on desired behavior
            return length * width

        # Unit Test
        import unittest

        class TestCalculateArea(unittest.TestCase):
            def test_positive_values(self):
                self.assertEqual(calculate_area(5, 10), 50)

            def test_zero_values(self):
                self.assertEqual(calculate_area(0, 10), 0)

            def test_negative_values(self):
                self.assertIsNone(calculate_area(-5, 10))
        ```

*   **Tools:**
    *   JUnit (Java)
    *   pytest (Python)
    *   NUnit (.NET)
    *   Mocha (JavaScript)

*   **Key Differences Summarized:**

    | Feature           | Static Unit Testing                                     | Dynamic Unit Testing                                      |
    |-------------------|----------------------------------------------------------|----------------------------------------------------------|
    | **Execution**     | Code is *not* executed                                 | Code *is* executed                                     |
    | **Error Detection** | Potential errors based on code analysis               | Actual errors based on runtime behavior                  |
    | **Techniques**     | Code reviews, static analysis tools                   | Black-box, white-box, gray-box testing                   |
    | **Limitations**    | Cannot detect runtime errors, may produce false positives | Requires careful test case design, cannot guarantee complete coverage |

## 2. Control Flow Testing

*   **Definition:**  Control flow testing is a white-box testing technique that focuses on testing the different execution paths within a unit of code. It aims to ensure that all possible paths are tested and that the code behaves correctly regardless of the path taken.

*   **Key Concepts:**
    *   **Control Flow Graph (CFG):** A graphical representation of the execution paths within a unit. Nodes represent basic blocks of code, and edges represent the flow of control between blocks.
    *   **Basic Block:** A sequence of code that has a single entry point and a single exit point.
    *   **Path Coverage:** The percentage of paths through the CFG that are covered by the test cases.
    *   **Statement Coverage:** The percentage of statements in the code that are executed by the test cases.
    *   **Branch Coverage:** The percentage of branches (e.g., `if` statements, `switch` statements) in the code that are taken by the test cases.
    *   **Condition Coverage:** The percentage of conditions in the code that are evaluated to both true and false by the test cases.

*   **Techniques:**
    *   **Statement Coverage:** Ensure that every statement in the code is executed at least once.
    *   **Branch Coverage:** Ensure that every branch in the code is taken at least once (both true and false branches of `if` statements).
    *   **Condition Coverage:** Ensure that each condition within a decision statement takes on all possible outcomes at least once.
    *   **Path Coverage:** Ensure that every possible path through the code is executed at least once.  This is often impractical for complex code.

*   **Advantages:**
    *   Helps to identify logical errors in the code.
    *   Ensures that all possible execution paths are tested.
    *   Provides a systematic approach to test case design.

*   **Disadvantages:**
    *   Can be difficult to achieve high levels of coverage, especially for complex code.
    *   Does not guarantee that the code is free of errors, as it only focuses on the flow of control.

*   **Example:**

    ```python
    def calculate_discount(price, is_member, quantity):
        """Calculates a discount based on membership and quantity."""
        discount = 0
        if is_member:
            discount += 0.10  # 10% discount for members
        if quantity > 10:
            discount += 0.05  # Additional 5% discount for large quantities
        return price * (1 - discount)
    ```

    *   **Control Flow Graph (Conceptual):**
        *   Node 1: Start
        *   Node 2: `if is_member`
        *   Node 3: `discount += 0.10` (if `is_member` is True)
        *   Node 4: `if quantity > 10`
        *   Node 5: `discount += 0.05` (if `quantity > 10` is True)
        *   Node 6: `return price * (1 - discount)`
        *   Node 7: End

    *   **Test Cases (for Branch Coverage):**
        *   **Test Case 1:** `price = 100, is_member = True, quantity = 5` (covers paths 1-2-3-4-6-7)
        *   **Test Case 2:** `price = 100, is_member = False, quantity = 15` (covers paths 1-2-4-5-6-7)

## 3. Data Flow Testing

*   **Definition:** Data flow testing is a white-box testing technique that focuses on tracking the flow of data within a unit of code. It aims to ensure that data is properly defined, used, and undefined (killed). It focuses on understanding how variables are used and where they are defined and used.

*   **Key Concepts:**
    *   **Define (DEF):**  The point where a variable is assigned a value.
    *   **Use (USE):** The point where a variable's value is accessed.  Can be a computation use (C-USE) or a predicate use (P-USE).
    *   **Kill (KILL):** The point where a variable's value is no longer valid (e.g., reassigned, goes out of scope).
    *   **Definition-Use (DU) Chains:**  A path from a definition of a variable to a use of that variable, without any intervening redefinition (kill). Data flow testing aims to cover these DU chains.
    *   **Definition-Clear Path:**  A path from a definition of a variable to a point where the variable is used, without any redefinitions of the variable along that path.

*   **Techniques:**
    *   **All-Defs:** For each variable, execute paths that cover all definitions of the variable.
    *   **All-Uses:** For each variable, execute paths that cover all uses of the variable.
    *   **All-DU-Paths:** For each variable, execute paths that cover all definition-use paths (DU-paths).  This is the strongest and most comprehensive, but also the most complex.

*   **Advantages:**
    *   Helps to identify errors related to data usage, such as uninitialized variables, incorrect calculations, and data corruption.
    *   Provides a more comprehensive view of code behavior than control flow testing alone.

*   **Disadvantages:**
    *   Can be complex to implement, especially for large and complex units of code.
    *   Requires careful analysis of data dependencies.

*   **Example:**

    ```python
    def calculate_average(numbers):
        """Calculates the average of a list of numbers."""
        sum_of_numbers = 0  # DEF of sum_of_numbers
        count = 0
        for number in numbers:
            sum_of_numbers += number # USE and DEF of sum_of_numbers; USE of number
            count += 1  # DEF and USE of count
        if count == 0:
            return 0
        average = sum_of_numbers / count  # USE of sum_of_numbers and count; DEF of average
        return average  # USE of average
    ```

    *   **Data Flow Analysis:**

        *   `sum_of_numbers`: Defined at line 2, used at line 5 (inside the loop), used at line 8.
        *   `number`: Defined implicitly by the `for` loop, used at line 5.
        *   `count`: Defined at line 3, used and defined at line 6, used at line 8.
        *   `average`: Defined at line 8, used at line 9.

    *   **Test Cases (for All-Uses):**
        *   **Test Case 1:** `numbers = [10, 20, 30]` (covers all uses of `sum_of_numbers`, `number`, `count`, and `average`)
        *   **Test Case 2:** `numbers = []` (covers the `count == 0` condition and the return of 0, also all uses since the loop is skipped)

## 4. Domain Testing

*   **Definition:** Domain testing (also known as boundary value analysis) is a black-box testing technique that focuses on testing the boundaries and edge cases of input and output domains.  It assumes that errors are more likely to occur at or near the boundaries of the input or output domains.

*   **Key Concepts:**
    *   **Domain:** The set of all possible input or output values for a variable or function.
    *   **Boundary Value Analysis (BVA):**  Testing the values at the edges of the input domain (minimum, maximum, just above the minimum, just below the maximum, and nominal values).
    *   **Equivalence Partitioning:** Dividing the input domain into equivalence classes, where each class represents a set of values that are expected to be treated the same way by the function. Then test one value from each partition.

*   **Techniques:**
    *   **Boundary Value Analysis (BVA):**
        *   For each input variable:
            *   Test the minimum value.
            *   Test a value just above the minimum.
            *   Test a nominal value.
            *   Test a value just below the maximum.
            *   Test the maximum value.
    *   **Equivalence Partitioning:**
        *   Divide the input domain into valid and invalid partitions.
        *   Test one value from each partition.

*   **Advantages:**
    *   Effective at finding errors related to input validation and boundary conditions.
    *   Relatively easy to implement.
    *   Can be used to test both numerical and non-numerical inputs.

*   **Disadvantages:**
    *   May not be effective at finding errors related to complex logic or data dependencies.
    *   Requires a clear understanding of the input and output domains.

*   **Example:**

    ```python
    def calculate_age_category(age):
        """Calculates the age category based on age."""
        if age < 0:
            return "Invalid Age"
        elif age <= 12:
            return "Child"
        elif age <= 19:
            return "Teenager"
        elif age <= 64:
            return "Adult"
        else:
            return "Senior"
    ```

    *   **Boundary Value Analysis:**
        *   Input variable: `age`
        *   Boundaries: 0, 12, 19, 64
        *   Test Cases:
            *   `age = -1` (Invalid Age)
            *   `age = 0` (Child)
            *   `age = 1` (Child)
            *   `age = 11` (Child)
            *   `age = 12` (Child)
            *   `age = 13` (Teenager)
            *   `age = 18` (Teenager)
            *   `age = 19` (Teenager)
            *   `age = 20` (Adult)
            *   `age = 63` (Adult)
            *   `age = 64` (Adult)
            *   `age = 65` (Senior)

    *   **Equivalence Partitioning:**
        *   Invalid: `age < 0`
        *   Child: `0 <= age <= 12`
        *   Teenager: `13 <= age <= 19`
        *   Adult: `20 <= age <= 64`
        *   Senior: `age > 64`
        *   Test Cases:  Choose one value from each partition (e.g., -1, 5, 15, 30, 70).

## 5. Benefits and Limitations of Each Technique (Summarized)

| Technique             | Benefits                                                                                                                                                                                                                                                          | Limitations                                                                                                                                                                                                                                                  |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Static Unit Testing   | Finds defects early, improves code quality, detects issues difficult to find through dynamic testing (dead code, unused variables), enforces coding standards.                                                                                              | Cannot detect runtime errors, may produce false positives, requires knowledge of the code.                                                                                                                                                              |
| Dynamic Unit Testing  | Detects runtime errors, verifies code behavior under different conditions, provides concrete evidence of functionality.                                                                                                                                        | Cannot guarantee complete coverage, requires careful test case design, can be time-consuming.                                                                                                                                                              |
| Control Flow Testing  | Helps identify logical errors, ensures all execution paths are tested, provides a systematic approach to test case design.                                                                                                                                         | Can be difficult to achieve high coverage, does not guarantee code is error-free, focuses only on the flow of control.                                                                                                                                     |
| Data Flow Testing     | Helps identify errors related to data usage (uninitialized variables, incorrect calculations, data corruption), provides a more comprehensive view of code behavior than control flow testing.                                                                   | Can be complex to implement, requires careful analysis of data dependencies.                                                                                                                                                                           |
| Domain Testing        | Effective at finding errors related to input validation and boundary conditions, relatively easy to implement, can be used for both numerical and non-numerical inputs.                                                                                             | May not be effective at finding errors related to complex logic or data dependencies, requires a clear understanding of the input and output domains.                                                                                                      |

## Practice Questions and Exercises

1.  **Static vs. Dynamic Testing:**  Describe a scenario where static testing would be more effective than dynamic testing.  Describe a scenario where dynamic testing would be more effective than static testing.

    *   **Answer:** Static testing is more effective for finding coding standard violations (e.g., naming conventions) or potential null pointer exceptions before the code is ever executed. Dynamic testing is better for finding errors that only occur under specific runtime conditions, such as an error that only occurs when a large number of users access a system simultaneously.

2.  **Control Flow Testing:**  Draw a simplified Control Flow Graph for the following code snippet and list test cases that achieve 100% branch coverage.

    ```python
    def process_number(number):
        if number > 0:
            result = number * 2
        else:
            result = number / 2
        if result > 10:
            return result - 5
        else:
            return result + 5
    ```

    *   **Answer:**

        *   **CFG (Simplified):**

            *   Node 1: Start
            *   Node 2: `if number > 0`
            *   Node 3: `result = number * 2` (True branch)
            *   Node 4: `result = number / 2` (False branch)
            *   Node 5: `if result > 10`
            *   Node 6: `return result - 5` (True branch)
            *   Node 7: `return result + 5` (False branch)
            *   Node 8: End

        *   **Test Cases (100% Branch Coverage):**

            *   **Test Case 1:** `number = 6`  (Path: 1-2-3-5-6-8) - `number > 0` is True, `result > 10` is True.
            *   **Test Case 2:** `number = -4` (Path: 1-2-4-5-7-8) - `number > 0` is False, `result > 10` is False.
            *   **Test Case 3:** `number = 1` (Path: 1-2-3-5-7-8) - `number > 0` is True, `result > 10` is False

3.  **Data Flow Testing:** Identify the DEF and USE of the variable `balance` in the following code and create test cases to achieve all-uses coverage.

    ```java
    public class BankAccount {
        private double balance;

        public BankAccount(double initialBalance) {
            this.balance = initialBalance; // DEF of balance
        }

        public void deposit(double amount) {
            this.balance += amount;  // DEF and USE of balance, USE of amount
        }

        public double getBalance() {
            return this.balance;  // USE of balance
        }
    }
    ```

    *   **Answer:**
        *   **Data Flow Analysis:**
            *   `balance`: Defined in the constructor, used and defined in `deposit()`, used in `getBalance()`.
        *   **Test Cases (All-Uses):**
            *   **Test Case 1:** `initialBalance = 100; deposit(50); getBalance();` (covers all uses of `balance`)
            * This test case covers the definition in the constructor, the use and redefinition in `deposit`, and the use in `getBalance`
4.  **Domain Testing:** Design test cases for the following function using Boundary Value Analysis:

    ```python
    def apply_discount(price, discount_percentage):
        """Applies a discount to a price."""
        if price < 0 or discount_percentage < 0 or discount_percentage > 100:
            return "Invalid input"
        return price * (1 - (discount_percentage / 100))
    ```

    *   **Answer:**
        *   **Input Variables:** `price`, `discount_percentage`
        *   **Boundaries:** `price`: 0; `discount_percentage`: 0, 100
        *   **Test Cases:**

            *   `price = -1, discount_percentage = 50` (Invalid)
            *   `price = 0, discount_percentage = 50` (Valid, price boundary)
            *   `price = 1, discount_percentage = 50` (Valid, just above price boundary)
            *   `price = 100, discount_percentage = -1` (Invalid)
            *   `price = 100, discount_percentage = 0` (Valid, discount boundary)
            *   `price = 100, discount_percentage = 1` (Valid, just above discount boundary)
            *   `price = 100, discount_percentage = 99` (Valid, just below discount boundary)
            *   `price = 100, discount_percentage = 100` (Valid, discount boundary)
            *   `price = 100, discount_percentage = 101` (Invalid)
            *   `price = 100, discount_percentage = 50` (Valid, nominal value)

## Important Points to Remember

*   Unit testing is a crucial part of the software development process.
*   Static and dynamic testing are complementary techniques.
*   Control flow, data flow, and domain testing are more advanced techniques that can help to identify subtle errors.
*   Choose the appropriate testing techniques based on the complexity and criticality of the code.
*   Aim for high levels of coverage to ensure that the code is thoroughly tested.
*   Automate unit tests whenever possible to reduce the cost of testing.
