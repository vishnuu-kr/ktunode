---
title: "Introduction to PEX - Symbolic execution, parameterized unit testing, symbolic execution trees, and their application"
subject: "SOFTWARE TESTING"
module: "Module 4: Black Box Testing "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bb03"
status: "completed"
scrapedAt: "2026-05-20T16:57:30.244Z"
---
## Software Testing: Module 4 - Black Box Testing - Introduction to PEX

**Topic:** Introduction to PEX - Symbolic execution, parameterized unit testing, symbolic execution trees, and their application

**Learning Outcomes:**

*   Understand the concept of symbolic execution.
*   Define and explain parameterized unit testing.
*   Explain the structure and purpose of symbolic execution trees.
*   Understand how PEX utilizes symbolic execution and parameterized unit testing.
*   Apply PEX to automatically generate test cases.

---

### 1. Symbolic Execution

**1.1. Key Concepts & Definitions:**

*   **Symbolic Execution:** A program analysis technique that executes a program using *symbolic values* instead of concrete (actual) values as inputs.  Instead of calculating concrete values, the execution engine manipulates symbolic expressions representing values.

*   **Symbolic Values:** Variables that represent unknown input values. These are not actual data; they are symbols (e.g., `x`, `y`, `z`) representing the inputs.

*   **Path Condition:** A logical formula that represents the constraints on the symbolic inputs that must be satisfied for the execution to follow a specific program path. It's a conjunction of conditions encountered along the path.

*   **State:** The state of the program during symbolic execution. It typically includes:
    *   Symbolic values of variables
    *   Path condition
    *   Program counter (current instruction)

**1.2. How Symbolic Execution Works:**

1.  **Start with Symbolic Inputs:** The program's input variables are initialized with symbolic values (e.g., `x = a`, `y = b`, where `a` and `b` are symbolic variables).

2.  **Execute Symbolically:**  The program is executed as if it were running with concrete values, but operations are performed on symbolic expressions.
    *   If a conditional statement is encountered (`if (x > 5)`), the path condition is updated with the branch condition (e.g., `a > 5` for the `then` branch, `a <= 5` for the `else` branch).
    *   Assignments create new symbolic expressions.  For example, `z = x + y` becomes `z = a + b`.

3.  **Path Exploration:**  The symbolic execution engine explores different execution paths of the program by considering different branches in conditional statements. Each path is associated with a specific path condition.

4.  **Constraint Solving:**  For each execution path, the path condition is passed to a constraint solver (e.g., Z3). The solver tries to find concrete values for the symbolic inputs that satisfy the path condition.

5.  **Test Case Generation:** If the constraint solver finds a solution (concrete values), these values are used as input to generate a test case that executes the program along the corresponding path.

**1.3. Example:**

```csharp
public static int ExampleFunction(int x, int y)
{
    int z = 0;
    if (x > 0)
    {
        z = x + y;
    }
    else
    {
        z = x - y;
    }
    return z;
}
```

Symbolic execution would proceed as follows:

1.  **Inputs:**  `x = a`, `y = b` (symbolic values).

2.  **`if (x > 0)`:**
    *   **Path 1 (then branch):**
        *   Path Condition: `a > 0`
        *   `z = x + y;  z = a + b`
        *   Return `z = a + b`
    *   **Path 2 (else branch):**
        *   Path Condition: `a <= 0`
        *   `z = x - y; z = a - b`
        *   Return `z = a - b`

3.  **Constraint Solving:**
    *   **Path 1:** Solver finds `a = 1, b = 2` as a solution to `a > 0`. This leads to the test case `ExampleFunction(1, 2)` with expected result `3`.
    *   **Path 2:** Solver finds `a = -1, b = 2` as a solution to `a <= 0`. This leads to the test case `ExampleFunction(-1, 2)` with expected result `-3`.

**1.4. Advantages of Symbolic Execution:**

*   **Automatic Test Case Generation:** Generates test cases that cover different execution paths.
*   **Path Exploration:** Explores all feasible paths within the code.
*   **Bug Finding:** Can help identify bugs related to specific input conditions.

**1.5. Limitations of Symbolic Execution:**

*   **Path Explosion:** The number of execution paths can grow exponentially with the size and complexity of the program, making it computationally expensive.
*   **Constraint Solving Complexity:** Solving complex constraints can be time-consuming or even undecidable.
*   **Dealing with External Code:** Symbolic execution becomes challenging when dealing with external libraries, system calls, or complex data structures.

---

### 2. Parameterized Unit Testing (PUT)

**2.1. Key Concepts & Definitions:**

*   **Parameterized Unit Testing (PUT):**  An extension of traditional unit testing that allows the same unit test to be executed with different sets of input values.  These values are provided as parameters to the test method.

*   **Test Parameters:** The input values used to drive the execution of a parameterized unit test.

*   **Test Driver:** The framework or mechanism that provides different sets of test parameters to the parameterized test.

**2.2. How PUT Works:**

1.  **Define a Test Method:** Create a regular unit test method.
2.  **Add Parameters:**  Specify parameters to the test method. These parameters represent the input values to the code under test.
3.  **Provide Parameter Values:**  Use a mechanism (e.g., data source attributes, external files, automatically generated values) to provide different sets of values for the parameters.
4.  **Run the Test:** The test runner executes the test method multiple times, once for each set of parameter values.

**2.3. Example (using NUnit in C#):**

```csharp
using NUnit.Framework;

[TestFixture]
public class CalculatorTests
{
    [Test]
    [TestCase(1, 2, 3)]
    [TestCase(-1, 2, 1)]
    [TestCase(0, 0, 0)]
    public void Add_ShouldReturnCorrectSum(int a, int b, int expected)
    {
        Calculator calculator = new Calculator();
        int actual = calculator.Add(a, b);
        Assert.AreEqual(expected, actual);
    }
}

public class Calculator
{
    public int Add(int x, int y)
    {
        return x + y;
    }
}
```

In this example:

*   `Add_ShouldReturnCorrectSum` is the parameterized test method.
*   `a`, `b`, and `expected` are the parameters.
*   `[TestCase]` attributes provide the sets of parameter values. The test will run three times with those values.

**2.4. Advantages of PUT:**

*   **Increased Test Coverage:**  Reduces the amount of code to write while increasing the number of test cases.
*   **Simplified Test Maintenance:** Changes to the code under test may only require changes to the data source.
*   **Improved Code Coverage:**  Easily test a range of input scenarios.
*   **Easier Test Creation:** Simplifies creating tests for scenarios with many input combinations.

**2.5. Disadvantages of PUT:**

*   **Test Case Explosion:** Can lead to a large number of test cases if the number of parameters and parameter values is high.
*   **Data Source Management:**  Managing the data source for parameters can become complex.
*   **Potential for Redundant Tests:**  Need to ensure the parameter values are diverse and avoid generating redundant tests.

---

### 3. Symbolic Execution Trees

**3.1. Key Concepts & Definitions:**

*   **Symbolic Execution Tree (SET):** A tree-like representation of the execution paths of a program during symbolic execution.

*   **Nodes:** Each node in the tree represents a program state (symbolic values, path condition, program counter).

*   **Edges:** Each edge represents a transition between program states, typically caused by executing a statement. When a conditional statement is encountered, the node branches, with each branch representing a different execution path based on the condition.

*   **Root Node:** The root node represents the initial state of the program, with symbolic inputs and an empty path condition.

*   **Leaf Nodes:** The leaf nodes represent the final states of the program for different execution paths.  They typically contain a complete path condition and the final symbolic values.

**3.2. Structure of a Symbolic Execution Tree:**

1.  **Root:** Starts with the initial state (symbolic inputs, empty path condition).
2.  **Branching:** When a conditional statement is encountered (e.g., `if (x > 5)`), the node branches into two child nodes.
    *   **Left Branch:** Represents the `true` branch of the condition. The path condition is updated with the condition (e.g., `x > 5`).
    *   **Right Branch:** Represents the `false` branch of the condition. The path condition is updated with the negation of the condition (e.g., `x <= 5`).
3.  **Path Condition Accumulation:** As the execution proceeds along each path, the path condition accumulates constraints.
4.  **Leaf Nodes:** Each leaf node represents a complete execution path. The path condition at the leaf node represents the constraints on the inputs that must be satisfied to reach that path.

**3.3. Example (Continuing from the `ExampleFunction` above):**

```csharp
public static int ExampleFunction(int x, int y)
{
    int z = 0;
    if (x > 0)
    {
        z = x + y;
    }
    else
    {
        z = x - y;
    }
    return z;
}
```

The symbolic execution tree for this function would look like this:

```
Root: x = a, y = b, z = 0, Path Condition: TRUE

    /       \
   /         \
  /           \
Condition: x > 0?

  /       \
 /         \
/           \

Node (x > 0): Path Condition: a > 0  |  Node (x <= 0): Path Condition: a <= 0
z = a + b                              |  z = a - b
RETURN z                               |  RETURN z
```

**3.4. Purpose of Symbolic Execution Trees:**

*   **Visualization of Execution Paths:**  Provides a visual representation of all possible execution paths in a program.
*   **Path Condition Analysis:**  Allows analysis of the path conditions for different execution paths, helping identify potential bugs or vulnerabilities.
*   **Test Case Generation:**  Used to generate test cases that cover different execution paths by solving the path conditions at the leaf nodes.
*   **Coverage Analysis:** Helps understand code coverage by identifying which parts of the code are executed by different test cases.

---

### 4. PEX: Symbolic Execution and Parameterized Unit Testing Combined

**4.1. Key Concepts & Definitions:**

*   **PEX (Program EXploration):** A white box test generation tool developed by Microsoft Research.  It automatically generates unit tests for .NET code using a combination of symbolic execution and parameterized unit testing.

*   **Automated Test Generation:** PEX automatically generates test inputs and assertions to maximize code coverage.

*   **White Box Testing:** PEX uses the code's internal structure and logic to generate tests.

**4.2. How PEX Works:**

1.  **Symbolic Execution:** PEX uses symbolic execution to explore the different execution paths of the code under test. It builds a symbolic execution tree to represent these paths.

2.  **Constraint Solving:** PEX uses a constraint solver (Z3) to solve the path conditions associated with each execution path. The solver finds concrete values for the symbolic inputs that satisfy the path conditions.

3.  **Parameterized Unit Testing:**  PEX automatically generates parameterized unit tests based on the concrete values found by the constraint solver. Each test case represents a specific execution path.

4.  **Test Case Generation:** PEX generates a set of test cases, each designed to cover a specific execution path. These test cases are written in a standard unit testing framework (e.g., NUnit, MSTest).

5.  **Assertion Generation:** PEX attempts to generate assertions automatically based on the outputs of the code under test.

**4.3. PEX Workflow:**

1.  **Select Code:** Choose the .NET method or class you want to test.

2.  **Run PEX:** Execute the PEX tool.

3.  **Symbolic Execution and Analysis:** PEX performs symbolic execution and explores the execution paths.

4.  **Constraint Solving:** PEX uses the constraint solver to find concrete input values.

5.  **Test Generation:** PEX generates parameterized unit tests, including input values and assertions.

6.  **Verification:** Verify the generated tests and refine them as needed.

**4.4. Example (using PEX on the `ExampleFunction`):**

If you were to run PEX on the `ExampleFunction` above, it would likely generate something similar to the following C# test code (using MSTest):

```csharp
using Microsoft.Pex.Framework;
using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public partial class ExampleFunctionTest
{
    [PexMethod]
    public int TestExampleFunction(int x, int y)
    {
        return ExampleFunction.ExampleFunction(x, y);
    }

    [PexGeneratedBy(typeof(ExampleFunctionTest))]
    [TestMethod]
    public void TestExampleFunction0()
    {
        int x = 1;
        int y = 2;
        int result = ExampleFunction.ExampleFunction(x, y);
        Assert.AreEqual(3, result);
        Assert.IsTrue(result > 0); // Added assertion example
        PexAssert.IsTrue(x > 0);     // Pex generated assertion
    }

    [PexGeneratedBy(typeof(ExampleFunctionTest))]
    [TestMethod]
    public void TestExampleFunction1()
    {
        int x = -1;
        int y = 2;
        int result = ExampleFunction.ExampleFunction(x, y);
        Assert.AreEqual(-3, result);
        PexAssert.IsFalse(x > 0);  // Pex generated assertion
    }

}
```

**4.5. Advantages of PEX:**

*   **Automated Test Generation:** Generates unit tests automatically, saving time and effort.
*   **Increased Code Coverage:**  Helps improve code coverage by exploring different execution paths.
*   **Bug Finding:**  Can help identify potential bugs or vulnerabilities by exploring different input conditions.
*   **Parameterized Unit Testing:**  Generates parameterized unit tests, which can be easily extended and modified.
*   **Integration with Visual Studio:** PEX integrates well with Visual Studio.

**4.6. Limitations of PEX:**

*   **Performance:** Symbolic execution can be computationally expensive, especially for complex code.
*   **External Dependencies:**  Difficult to handle external dependencies or system calls.
*   **Requires .NET Framework:** PEX is primarily designed for .NET code.
*   **Assertion Limitations:** Automatic assertion generation may not always be perfect, requiring manual refinement.

---

### Practice Questions and Exercises

1.  **Define symbolic execution. Explain its key components and how it works.**

    *   **Answer:** Symbolic execution is a program analysis technique that executes a program using symbolic values instead of concrete values. Key components include symbolic values, path conditions, and a constraint solver. It works by assigning symbolic values to inputs, executing the code symbolically, building a path condition for each execution path, and using a constraint solver to find concrete values that satisfy the path condition, which are then used to generate test cases.

2.  **What is a path condition in symbolic execution, and how is it used?**

    *   **Answer:** A path condition is a logical formula that represents the constraints on the symbolic inputs that must be satisfied for the execution to follow a specific program path. It is used to determine which input values will lead to a particular execution path. The path condition is passed to a constraint solver to find concrete input values that satisfy it.

3.  **Explain parameterized unit testing (PUT). Provide an example.**

    *   **Answer:** Parameterized unit testing is a technique that allows a single unit test to be executed with multiple sets of input values. An example is the `CalculatorTests` class in the notes, where the `Add_ShouldReturnCorrectSum` method is decorated with `TestCase` attributes to provide different sets of input values for `a`, `b`, and `expected`.

4.  **Describe the structure of a symbolic execution tree. What do the nodes and edges represent?**

    *   **Answer:** A symbolic execution tree is a tree-like representation of the execution paths of a program during symbolic execution. Nodes represent program states (symbolic values, path condition, program counter), and edges represent transitions between program states, typically caused by executing a statement. When a conditional statement is encountered, the node branches, with each branch representing a different execution path.

5.  **What is PEX, and how does it combine symbolic execution and parameterized unit testing?**

    *   **Answer:** PEX is a white-box test generation tool developed by Microsoft Research that automatically generates unit tests for .NET code. It uses symbolic execution to explore different execution paths, a constraint solver (Z3) to find concrete input values, and then generates parameterized unit tests based on these values.

6.  **What are the advantages and disadvantages of using PEX?**

    *   **Answer:**
        *   **Advantages:** Automated test generation, increased code coverage, bug finding, parameterized unit testing, integration with Visual Studio.
        *   **Disadvantages:** Performance overhead due to symbolic execution, difficulties handling external dependencies, primarily for .NET code, automatic assertion generation limitations.

7.  **Consider the following C# code snippet:**

    ```csharp
    public static int Foo(int x, int y) {
        int result = 0;
        if (x > y) {
            result = x - y;
        } else {
            result = x + y;
        }
        return result;
    }
    ```

    **Describe how symbolic execution would be performed on this code, including the symbolic inputs, path conditions, and potential test cases that could be generated.**

    *   **Answer:**
        1.  **Symbolic Inputs:** `x = a`, `y = b` (symbolic values).
        2.  **Execution:**
            *   **`if (x > y)`:**
                *   **Path 1 (then branch):**
                    *   Path Condition: `a > b`
                    *   `result = x - y;  result = a - b`
                    *   Return `result = a - b`
                *   **Path 2 (else branch):**
                    *   Path Condition: `a <= b`
                    *   `result = x + y; result = a + b`
                    *   Return `result = a + b`
        3.  **Constraint Solving and Test Case Generation:**
            *   **Path 1:** Solver finds `a = 5, b = 2` as a solution to `a > b`.  Test case: `Foo(5, 2)` with expected result `3`.
            *   **Path 2:** Solver finds `a = 2, b = 5` as a solution to `a <= b`. Test case: `Foo(2, 5)` with expected result `7`.

---

### Important Points to Remember

*   Symbolic execution provides a powerful way to explore different program paths and generate test cases.
*   Parameterized unit testing allows you to run the same test with multiple sets of input values, increasing test coverage.
*   PEX combines symbolic execution and parameterized unit testing to automate the test generation process.
*   While PEX can significantly reduce the effort required for test creation, it's crucial to understand its limitations and manually review and refine the generated tests.
*   Path explosion and constraint solving complexity are key challenges in symbolic execution.  Tools like PEX use heuristics and approximations to address these challenges, but they can still impact performance.
