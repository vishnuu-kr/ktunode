---
title: "Unit Testing- Static and Dynamic Unit Testing, control flow testing, data flow testing, domain testing"
subject: "SOFTWARE TESTING"
module: "Module 2: Unit Testing, Mutation Testing & AI"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8ccbc"
status: "completed"
scrapedAt: "2026-05-20T17:26:31.424Z"
---
# SOFTWARE TESTING: Module 2: Unit Testing, Mutation Testing & AI

## Topic: Unit Testing - Static and Dynamic Unit Testing, Control Flow Testing, Data Flow Testing, Domain Testing

---

### 1. Introduction to Unit Testing

**Definition:** Unit testing is a software testing method where individual units or components of a software are tested to determine whether they are fit for use. A unit is the smallest testable part of an application. Developers perform unit tests to validate that each unit of the software performs as designed.

**Goal:**
*   To isolate and test individual software components.
*   To detect bugs early in the development lifecycle.
*   To ensure that each unit functions correctly in isolation.
*   To improve code quality and maintainability.

**Key Characteristics:**
*   Performed by developers.
*   Focuses on small, isolated pieces of code.
*   Typically automated.
*   Fast execution.

---

### 2. Static vs. Dynamic Unit Testing

This section explores two fundamental approaches to unit testing, differing in when and how the code is analyzed.

#### 2.1 Static Unit Testing

**Definition:** Static unit testing involves analyzing the source code *without* executing it. The focus is on identifying potential defects in the code structure, logic, and style.

**Techniques & Tools:**
*   **Code Reviews:** Manual inspection of code by peers to identify errors, design flaws, and adherence to coding standards.
*   **Static Code Analysis Tools:** Automated tools that scan the source code for common programming errors, security vulnerabilities, stylistic issues, and potential bugs.
    *   **Examples:** SonarQube, ESLint, Pylint, Checkstyle.
*   **Walkthroughs/Inspections:** Formal or informal sessions where the code is explained and reviewed for defects.

**What it Catches:**
*   Syntax errors.
*   Unreachable code.
*   Uninitialized variables.
*   Potential null pointer dereferences.
*   Coding standard violations.
*   Dead code.
*   Security vulnerabilities (e.g., SQL injection possibilities).

**Advantages:**
*   **Early Defect Detection:** Catches bugs before the code is even compiled or run, saving time and resources.
*   **Improved Code Quality:** Enforces coding standards, leading to more readable and maintainable code.
*   **Identification of Complex Issues:** Can uncover subtle logic errors or security flaws that might be missed in dynamic testing.
*   **Reduced Testing Effort:** By catching many bugs upfront, it can reduce the amount of dynamic testing required.

**Disadvantages:**
*   **Cannot Detect Runtime Errors:** Cannot identify issues that only manifest during execution (e.g., performance bottlenecks, concurrency issues).
*   **False Positives:** Static analysis tools can sometimes flag issues that are not actual defects.
*   **Learning Curve:** Understanding the output and configuring the tools can require some effort.

**Example:**
Consider the following Python code:
```python
def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    # Missing handling for empty list
    return total / len(numbers)
```
A static analysis tool (like Pylint) might flag:
*   **Potential `ZeroDivisionError`:** If `numbers` is an empty list, `len(numbers)` will be 0, leading to a division by zero.
*   **Unused variable `total` (if `numbers` is always empty in a specific context, though less likely here).**

---

#### 2.2 Dynamic Unit Testing

**Definition:** Dynamic unit testing involves *executing* the code with specific inputs and observing its behavior and outputs to verify its correctness. This is the most common form of unit testing.

**Techniques & Tools:**
*   **Test Cases:** Pre-defined inputs, execution preconditions, and expected outputs that are developed to check specific code paths or functionalities.
*   **Unit Testing Frameworks:** Libraries that provide a structure for writing and running unit tests, often including assertion mechanisms, test runners, and reporting features.
    *   **Examples:** JUnit (Java), NUnit (.NET), pytest (Python), Mocha (JavaScript).
*   **Mocking/Stubbing:** Techniques used to isolate the unit under test by replacing its dependencies (other classes, services, databases) with simplified, controlled substitutes.
    *   **Mocks:** Objects that simulate the behavior of real dependencies and can be programmed to return specific values or throw exceptions.
    *   **Stubs:** Objects that provide predefined responses to method calls.
*   **Assertions:** Statements within a test that check if a condition is true. If the condition is false, the test fails.

**What it Catches:**
*   Functional correctness (e.g., does the function return the expected output for given inputs?).
*   Runtime errors (e.g., `NullPointerException`, `IndexOutOfBoundsException`, `TypeError`).
*   Logic errors that depend on execution flow.
*   Performance issues (though less common at the unit level, can be identified).

**Advantages:**
*   **Verifies Actual Behavior:** Directly tests how the code runs in a simulated environment.
*   **Detects Runtime Errors:** Catches bugs that only appear during execution.
*   **Wide Applicability:** Can test a broad range of functionalities and scenarios.
*   **Test Automation:** Most dynamic unit tests are automated, allowing for frequent and efficient regression testing.

**Disadvantages:**
*   **Cannot Guarantee All Paths are Tested:** It's impossible to test every single input combination.
*   **Requires Environment Setup:** May need to set up specific test environments or mock dependencies.
*   **Can Be Slower:** Execution of code takes time, especially for complex units or large test suites.
*   **Defects Found Later:** Bugs are found after the code is written, potentially later than static analysis might find them.

**Example:**
Consider a simple Python function:
```python
def add(a, b):
    return a + b
```
A dynamic unit test using `pytest` would look like this:
```python
# test_calculator.py
from calculator import add

def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-1, -5) == -6

def test_add_zero():
    assert add(0, 7) == 7
```
This test executes the `add` function with various inputs and asserts that the returned value matches the expected outcome. If `add(2, 3)` somehow returned `4`, this test would fail.

---

### 3. Control Flow Testing

**Definition:** Control flow testing is a white-box testing technique that focuses on testing the different execution paths through a program's logic. It aims to ensure that all executable statements and branches are covered.

**Goal:** To achieve a certain level of **control flow coverage**.

**Key Concepts:**
*   **Control Flow Graph (CFG):** A graphical representation of the execution paths of a program. Nodes represent statements or basic blocks of code, and edges represent the flow of control between them.
*   **Basic Block:** A sequence of consecutive statements in which control enters at the beginning and leaves at the end without branching (except at the end).
*   **Decision Points:** Points in the code where the execution path can diverge based on a condition (e.g., `if`, `while`, `for`, `switch` statements).
*   **Branches:** The different paths that can be taken from a decision point.

**Coverage Criteria (from weakest to strongest):**
*   **Statement Coverage:** Ensures that every executable statement in the program is executed at least once.
*   **Branch Coverage (or Decision Coverage):** Ensures that every branch (e.g., `true` and `false` outcomes of each decision) is executed at least once.
*   **Path Coverage:** Ensures that every possible path through the CFG is executed at least once. This is often impractical due to the potentially infinite number of paths (e.g., loops).
*   **Condition Coverage:** Ensures that each condition in a decision is evaluated to both `true` and `false` at least once.
*   **Multiple Condition Coverage (or all-conditions coverage):** Ensures that all possible combinations of conditions in a decision are tested. This is very thorough but can be extremely complex.
*   **Modified Condition/Decision Coverage (MC/DC):** A more practical but still rigorous criterion, often used in safety-critical systems. It requires that each condition independently affects the outcome of a decision.

**How it's Applied in Unit Testing:**
Developers use control flow testing by creating test cases that specifically target different branches and paths within a unit of code.

**Example:**
Consider the following C# code:
```csharp
public int GetDiscount(int quantity, bool isPremiumCustomer)
{
    int discount = 0;
    if (quantity > 10) // Decision Point 1
    {
        discount = 10;
        if (isPremiumCustomer) // Decision Point 2
        {
            discount = 15;
        }
        else
        {
            discount = 12;
        }
    }
    else if (quantity > 5) // Decision Point 3
    {
        discount = 5;
    }
    return discount;
}
```

Let's aim for **Branch Coverage**:

*   **Path 1 (quantity <= 5):**
    *   `GetDiscount(3, true)` -> returns 0. Covers `quantity > 10` (false), `quantity > 5` (false).
*   **Path 2 (5 < quantity <= 10):**
    *   `GetDiscount(7, false)` -> returns 5. Covers `quantity > 10` (false), `quantity > 5` (true).
*   **Path 3 (quantity > 10, isPremiumCustomer = true):**
    *   `GetDiscount(15, true)` -> returns 15. Covers `quantity > 10` (true), `isPremiumCustomer` (true).
*   **Path 4 (quantity > 10, isPremiumCustomer = false):**
    *   `GetDiscount(15, false)` -> returns 12. Covers `quantity > 10` (true), `isPremiumCustomer` (false).

**Important Points to Remember (Control Flow):**
*   Focuses on the logic and execution paths.
*   Requires understanding of the code's structure (white-box).
*   Achieving full path coverage is often impossible.
*   Branch coverage is a common and achievable goal.

---

### 4. Data Flow Testing

**Definition:** Data flow testing is a white-box testing technique that focuses on the definition and usage of variables within the code. It aims to detect defects related to how data is defined, used, and potentially corrupted as it moves through the program.

**Goal:** To ensure that variables are used in a meaningful way and to test **data flow coverage**.

**Key Concepts:**
*   **Definition (def):** An operation that assigns a value to a variable.
*   **Use (use):** An operation that uses the value of a variable.
*   **Def-Use Chain:** A sequence of program elements from a definition of a variable to a use of that variable. A test case aims to cover a specific def-use chain.

**Coverage Criteria (based on def-use chains):**
*   **All Definitions Coverage:** Every definition of every variable must be covered.
*   **All Uses Coverage:** Every use of every variable must be covered.
*   **All Paths Coverage:** Every def-use pair must be covered by a computation path from the definition to the use.
*   **Specific Def-Use Coverage (e.g., *all-c, all-p, all-d*):** More granular criteria focusing on specific types of paths (e.g., *all-c* means all def-use pairs covered by simple paths, *all-p* means all def-use pairs covered by feasible paths, *all-d* means all def-use pairs covered by specific paths).

**How it's Applied in Unit Testing:**
Data flow testing helps identify bugs like:
*   **Uninitialized Variables:** Using a variable before it has been assigned a value.
*   **Dead Variables:** Variables that are defined but never used.
*   **Incorrect Assignments:** Assigning the wrong value to a variable.
*   **Lost Updates:** A definition of a variable is overwritten before its value is used.

**Example:**
Consider the following Java code:
```java
public int processData(int x) {
    int y; // Definition of y (implicitly initialized to 0 in Java for instance variables, but here it's local)
    if (x > 10) {
        y = x * 2; // Definition of y
    } else {
        y = x + 5; // Definition of y
    }
    int z = y / 2; // Use of y
    return z;
}
```

Let's trace some def-use chains for `y`:

1.  **Definition:** `y = x * 2;`
    **Use:** `int z = y / 2;`
    **Path:** Enter `processData`, `x > 10` is true, `y` becomes `x * 2`, `z` becomes `(x * 2) / 2`.
    **Test Case:** `processData(15)` (Here `x` is 15, so `x > 10` is true. `y` becomes `30`. `z` becomes `15`. Expected return value: 15).

2.  **Definition:** `y = x + 5;`
    **Use:** `int z = y / 2;`
    **Path:** Enter `processData`, `x > 10` is false, `y` becomes `x + 5`, `z` becomes `(x + 5) / 2`.
    **Test Case:** `processData(8)` (Here `x` is 8, so `x > 10` is false. `y` becomes `13`. `z` becomes `6.5` (integer division, so 6). Expected return value: 6).

**Potential Data Flow Bugs to Detect:**
*   If `y` was used *before* its assignment in the `if` or `else` block, it would be an "use before def" issue.
*   If `y` was assigned a value but then never used to compute `z`, it would be a "dead variable" scenario for that specific path.

**Important Points to Remember (Data Flow):**
*   Focuses on variables and their lifecycle (definition and use).
*   Requires careful analysis of how data flows through the code.
*   Helps uncover subtle logic errors related to data manipulation.
*   Can be more challenging to achieve full coverage compared to control flow.

---

### 5. Domain Testing (Equivalence Partitioning & Boundary Value Analysis)

**Definition:** Domain testing is a black-box testing technique that focuses on testing the input data space of a software component. It aims to reduce the number of test cases by dividing the input domain into partitions (equivalence classes) and testing representative values from each partition.

**Goal:** To effectively test the input domain and uncover errors related to input handling and invalid data.

**Key Concepts:**
*   **Input Domain:** The set of all possible valid and invalid input values for a software component.
*   **Equivalence Partitioning:** Dividing the input domain into a finite number of partitions such that all members of a partition are expected to be processed similarly by the component. Testing one value from a partition is assumed to be sufficient for testing other values in that partition.

    *   **Valid Partitions:** Input values that the software is expected to handle correctly.
    *   **Invalid Partitions:** Input values that the software is expected to reject or handle with error messages.

*   **Boundary Value Analysis (BVA):** A testing technique that focuses on testing values at the boundaries of the equivalence partitions. Errors are often found at the boundaries. For a range `[min, max]`, BVA tests `min-1`, `min`, `min+1`, `max-1`, `max`, `max+1`.

**How it's Applied in Unit Testing:**
While often applied at a higher level, the principles of domain testing are crucial for unit testing functions that take specific input parameters. Developers use these techniques to design robust test cases that cover the expected behavior for different types of inputs.

**Example:**
Consider a function `calculate_shipping_cost(weight_kg)` that calculates shipping cost based on weight:

*   **Rule:**
    *   0 kg to 5 kg: $10
    *   5 kg to 20 kg: $20
    *   20 kg and above: $30
    *   Negative weight is invalid.

**Applying Equivalence Partitioning:**

*   **Valid Partitions:**
    *   Partition 1 (0 kg to 5 kg): Representative value, e.g., 2.5 kg
    *   Partition 2 (5 kg to 20 kg): Representative value, e.g., 10 kg
    *   Partition 3 (20 kg and above): Representative value, e.g., 25 kg
*   **Invalid Partitions:**
    *   Partition 4 (Negative weight): Representative value, e.g., -1 kg

**Applying Boundary Value Analysis (BVA) to Valid Partitions:**

*   **Boundary around 0 kg (start of Partition 1):**
    *   -0.01 kg (invalid, just below 0)
    *   0 kg (minimum valid for Partition 1)
    *   0.01 kg (just above 0, within Partition 1)
*   **Boundary around 5 kg (end of Partition 1, start of Partition 2):**
    *   4.99 kg (end of Partition 1)
    *   5 kg (boundary, might belong to Partition 1 or 2 depending on exact definition)
    *   5.01 kg (start of Partition 2)
*   **Boundary around 20 kg (end of Partition 2, start of Partition 3):**
    *   19.99 kg (end of Partition 2)
    *   20 kg (boundary, might belong to Partition 2 or 3)
    *   20.01 kg (start of Partition 3)

**Combined Test Cases based on Domain Testing:**

| Input (weight_kg) | Expected Behavior/Output | Partition Tested | BVA Type |
| :---------------- | :----------------------- | :--------------- | :------- |
| -1                | Error (Invalid weight)   | Invalid 4        | -        |
| -0.01             | Error (Invalid weight)   | Invalid 4        | Lower    |
| 0                 | $10                      | Valid 1          | Lower    |
| 2.5               | $10                      | Valid 1          | Middle   |
| 4.99              | $10                      | Valid 1          | Upper    |
| 5                 | $20                      | Valid 2 (or boundary) | Boundary |
| 5.01              | $20                      | Valid 2          | Lower    |
| 10                | $20                      | Valid 2          | Middle   |
| 19.99             | $20                      | Valid 2          | Upper    |
| 20                | $30                      | Valid 3 (or boundary) | Boundary |
| 20.01             | $30                      | Valid 3          | Lower    |
| 25                | $30                      | Valid 3          | Middle   |

**Important Points to Remember (Domain Testing):**
*   Focuses on input data validity and range.
*   Black-box technique (doesn't require knowledge of internal code structure).
*   Equivalence partitioning reduces the number of test cases.
*   Boundary value analysis targets common error-prone areas.
*   Essential for testing functions that accept parameters with defined ranges.

---

### 6. Summary and Key Takeaways

*   **Static Unit Testing:** Analyzes code *without* execution. Catches syntax, style, and potential logic flaws early. Tools like linters and static analyzers are key.
*   **Dynamic Unit Testing:** *Executes* code with specific inputs. Catches runtime errors and functional bugs. Unit testing frameworks and mocking are essential.
*   **Control Flow Testing:** Focuses on testing different execution paths and branches within the code. Aims to achieve coverage criteria like statement or branch coverage.
*   **Data Flow Testing:** Focuses on the definition and usage of variables. Helps uncover issues like uninitialized variables and dead code.
*   **Domain Testing:** Divides input data into partitions (Equivalence Partitioning) and tests boundaries (Boundary Value Analysis). Reduces test cases and targets common input-related errors.

**Important Points to Remember:**
*   A combination of static and dynamic techniques provides the most robust unit testing.
*   Understanding your code's logic (for control flow and data flow) is crucial for effective white-box testing.
*   Always consider input ranges and boundaries when designing unit tests for functions.
*   Automate your unit tests wherever possible to enable frequent execution and regression testing.

---

### 7. Practice Questions

1.  **Which type of unit testing analyzes code without executing it?**
    a) Dynamic Unit Testing
    b) Static Unit Testing
    c) Integration Testing
    d) System Testing

2.  **What is the primary goal of Control Flow Testing?**
    a) To test all possible input combinations.
    b) To ensure all executable statements and branches are covered.
    c) To verify the correct definition and use of variables.
    d) To check the user interface of the software.

3.  **If a variable is used in a program before it has been assigned a value, which testing technique is most likely to detect this defect?**
    a) Domain Testing
    b) Control Flow Testing
    c) Data Flow Testing
    d) Static Code Analysis (as a standalone technique)

4.  **Boundary Value Analysis is a technique used within which broader testing approach?**
    a) Control Flow Testing
    b) Data Flow Testing
    c) Domain Testing
    d) Mutation Testing

5.  **List two common errors that can be detected by Static Unit Testing.**

6.  **Explain the difference between a 'statement coverage' criterion and a 'branch coverage' criterion in Control Flow Testing.**

7.  **Provide a simple example of a def-use chain for a variable and suggest a test case that would cover it.**

8.  **Given a function that accepts an integer age, describe how you would apply Equivalence Partitioning and Boundary Value Analysis to test it.**

---

### 8. Answers to Practice Questions

1.  **b) Static Unit Testing**
    *   *Explanation:* Static unit testing involves reviewing or analyzing code without executing it, looking for structural and potential logical issues.

2.  **b) To ensure all executable statements and branches are covered.**
    *   *Explanation:* Control flow testing is all about tracing the execution paths and ensuring that different routes through the code are exercised.

3.  **c) Data Flow Testing**
    *   *Explanation:* Data flow testing specifically tracks variables from their definition to their use, making it effective at finding issues like using a variable before it's defined (use before def). Static analysis might also flag this, but data flow testing is fundamentally designed for it.

4.  **c) Domain Testing**
    *   *Explanation:* Boundary Value Analysis is a technique applied to the input domain, often in conjunction with Equivalence Partitioning, to identify test cases for domain testing.

5.  **Two common errors detected by Static Unit Testing:**
    *   Syntax errors (e.g., missing semicolons, mismatched parentheses).
    *   Uninitialized variables (though dynamic analysis can confirm this).
    *   Unreachable code.
    *   Coding standard violations.
    *   Potential null pointer dereferences.
    *   Security vulnerabilities (e.g., common injection patterns).

6.  **Difference between Statement Coverage and Branch Coverage:**
    *   **Statement Coverage:** Aims to execute every executable statement in the code at least once. It doesn't guarantee that all decision outcomes are tested.
    *   **Branch Coverage (Decision Coverage):** Aims to execute every branch (or decision outcome, like `true` and `false` for an `if` statement) at least once. This is a stronger criterion than statement coverage because covering all branches usually implies covering most statements.

7.  **Example of a def-use chain:**
    *   **Code:**
        ```python
        def calculate_final_price(base_price, discount_percentage):
            if discount_percentage >= 0 and discount_percentage <= 100:
                discount_amount = base_price * (discount_percentage / 100) # Definition of discount_amount
            else:
                discount_amount = 0 # Another definition of discount_amount
            
            final_price = base_price - discount_amount # Use of discount_amount
            return final_price
        ```
    *   **Def-Use Chain:**
        *   **Definition:** `discount_amount = base_price * (discount_percentage / 100)`
        *   **Use:** `final_price = base_price - discount_amount`
    *   **Test Case to Cover:** A test case where `discount_percentage` is between 0 and 100 (e.g., `calculate_final_price(100, 10)`). This path ensures the first definition of `discount_amount` is executed before its use.

8.  **Testing an integer age function:**
    *   **Function Signature Example:** `def is_adult(age): ...`
    *   **Equivalence Partitioning:**
        *   **Valid Partitions:**
            *   Ages where the person is an adult (e.g., 18 and above).
            *   Ages where the person is not an adult (e.g., 0 to 17).
        *   **Invalid Partitions:**
            *   Negative ages.
    *   **Boundary Value Analysis (BVA):**
        *   **Boundary around 0 (for negative check):** -1 (invalid), 0 (valid, not adult).
        *   **Boundary around 18 (adult/not adult boundary):** 17 (not adult), 18 (adult), 19 (adult).
    *   **Sample Test Cases:**
        *   `is_adult(-5)` -> Expect False/Error (Invalid partition)
        *   `is_adult(0)` -> Expect False (Valid partition, boundary)
        *   `is_adult(17)` -> Expect False (Valid partition, boundary)
        *   `is_adult(18)` -> Expect True (Valid partition, boundary)
        *   `is_adult(25)` -> Expect True (Valid partition)
