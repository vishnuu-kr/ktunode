---
title: "Graph Coverage for Design Elements - Call graphs, class inheritance testing, and coupling data-flow pairs"
subject: "SOFTWARE TESTING"
module: "Module 3: Graph Coverage Criteria "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162770fc9aa1fdbc8bafc"
status: "completed"
scrapedAt: "2026-05-20T16:57:25.954Z"
---
# SOFTWARE TESTING - Module 3: Graph Coverage Criteria - Graph Coverage for Design Elements

## Introduction

This module focuses on applying graph coverage criteria to design elements of software. We will explore call graphs, class inheritance testing, and coupling data-flow pairs. Understanding these areas allows us to create more robust tests that target the structural design of our software, leading to better code coverage and fewer defects.

## Learning Outcomes

By the end of this module, you will be able to:

1.  Understand the concept and purpose of call graphs in software testing.
2.  Apply graph coverage criteria to call graphs to generate test cases.
3.  Understand the importance of testing class inheritance hierarchies.
4.  Apply graph coverage criteria to class inheritance hierarchies to generate test cases.
5.  Understand the concept of coupling data-flow pairs.
6.  Apply graph coverage criteria to coupling data-flow pairs to generate test cases.
7.  Explain the benefits and limitations of using graph coverage for design elements.

## 1. Call Graphs

### 1.1. Key Concepts and Definitions

*   **Call Graph:** A directed graph representing the calling relationships between subroutines (functions, methods, procedures) in a program.  Nodes represent subroutines, and edges represent calls.  If function A calls function B, there's an edge from node A to node B.
*   **Purpose of Call Graphs in Testing:**
    *   Visualize the calling structure of the software.
    *   Identify potential areas of complexity.
    *   Help generate test cases that exercise different call sequences.
    *   Detect issues related to function calls, such as incorrect parameter passing, unexpected return values, or dead code.
*   **Nodes:** Represent functions or methods.
*   **Edges:** Represent calls from one function/method to another.
*   **Entry Node:** The function/method where execution begins (e.g., `main()` method).
*   **Exit Node:**  Functions/methods that return to the caller or terminate the program.

### 1.2. Applying Graph Coverage Criteria to Call Graphs

We can apply standard graph coverage criteria (covered in earlier modules) to call graphs. Some relevant criteria include:

*   **Node Coverage (Statement Coverage):**  Execute every function/method at least once.
*   **Edge Coverage (Branch Coverage):** Execute every call relationship (edge) at least once.
*   **Path Coverage:**  Execute all possible call sequences through the program. This is often infeasible due to the number of paths.
*   **Prime Path Coverage:** Cover all prime paths. A prime path is a simple path that is not a subpath of any other simple path.  This offers a good compromise between edge coverage and full path coverage.

### 1.3. Example

Consider the following Python code:

```python
def main():
    result = add(5, 3)
    print(f"The result is: {result}")
    if result > 0:
        print("Positive result")
        multiply(result, 2)
    else:
        print("Negative or zero result")

def add(x, y):
    return x + y

def multiply(a, b):
    print(f"{a} multiplied by {b} is: {a * b}")

if __name__ == "__main__":
    main()
```

**Call Graph:**

```
main() --> add()
main() --> multiply()  (conditional call)
```

**Test Cases based on Edge Coverage:**

*   **Test Case 1:** Execute `main()` with inputs that result in a positive result from `add()`.  This covers `main() -> add()` and `main() -> multiply()`.
*   **Test Case 2:** Execute `main()` with inputs that result in a non-positive result from `add()`. This covers `main() -> add()`, and the `else` branch in `main()`.

**Important Points:**

*   Creating a call graph manually can be tedious for large systems.  Tools are available to automate this process.
*   Call graphs provide a high-level view of the system's architecture and can be helpful for identifying potential integration issues.

### 1.4. Practice Questions

1.  Draw the call graph for the following Java code:

    ```java
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }

        public int subtract(int a, int b) {
            return a - b;
        }

        public int calculate(int a, int b, String operation) {
            if (operation.equals("add")) {
                return add(a, b);
            } else if (operation.equals("subtract")) {
                return subtract(a, b);
            } else {
                return 0; // Default case
            }
        }

        public static void main(String[] args) {
            Calculator calc = new Calculator();
            int result = calc.calculate(10, 5, "add");
            System.out.println(result);
        }
    }
    ```

2.  Write test cases to achieve edge coverage for the call graph in Question 1.

**Answers:**

1.  **Call Graph:**

    ```
    main() --> calculate()
    calculate() --> add()   (conditional call)
    calculate() --> subtract() (conditional call)
    ```

2.  **Test Cases for Edge Coverage:**

    *   **Test Case 1:** Call `calculate(10, 5, "add")`.  Covers `main() -> calculate()` and `calculate() -> add()`.
    *   **Test Case 2:** Call `calculate(10, 5, "subtract")`. Covers `main() -> calculate()` and `calculate() -> subtract()`.
    *   **Test Case 3:** Call `calculate(10, 5, "unknown")`.  Covers `main() -> calculate()` and the `else` branch in `calculate()`.

## 2. Class Inheritance Testing

### 2.1. Key Concepts and Definitions

*   **Class Inheritance:** A mechanism in object-oriented programming where a class (subclass or derived class) inherits properties and methods from another class (superclass or base class).
*   **Inheritance Hierarchy:** The arrangement of classes in an inheritance relationship. Can be represented as a directed acyclic graph (DAG).
*   **Importance of Testing Inheritance:**
    *   Ensure that inherited methods behave correctly in the subclass.
    *   Verify that overriding methods function as expected and maintain the intended behavior of the superclass.
    *   Detect issues related to polymorphism and dynamic binding.
    *   Discover errors introduced by improper use of inheritance.

### 2.2. Applying Graph Coverage Criteria to Class Inheritance Hierarchies

We treat the inheritance hierarchy as a graph where:

*   **Nodes:** Represent classes.
*   **Edges:** Represent the inheritance relationship (extends/implements).

Relevant coverage criteria include:

*   **Node Coverage (Class Coverage):** Test each class in the hierarchy.
*   **Edge Coverage (Inheritance Coverage):** Test each inheritance relationship (each `extends` or `implements` statement).  This means testing a scenario where a subclass is used.
*   **Method Coverage:** Execute each method in each class. This should also consider overridden methods and methods that are specific to a class (not inherited).
*   **Attribute Coverage:** Verify the behavior of each attribute of each class, including inherited attributes.
*   **Pairwise Coverage of Methods:** Ensure that all possible pairs of method calls are tested, paying special attention to interactions between methods in different classes.

### 2.3. Example

Consider the following Java code:

```java
class Animal {
    public String makeSound() {
        return "Generic animal sound";
    }
}

class Dog extends Animal {
    @Override
    public String makeSound() {
        return "Woof!";
    }

    public String fetch() {
        return "Dog is fetching.";
    }
}

class Cat extends Animal {
    @Override
    public String makeSound() {
        return "Meow!";
    }

    public String climb() {
        return "Cat is climbing.";
    }
}
```

**Inheritance Hierarchy Graph:**

```
Animal
  |
  +-- Dog
  |
  +-- Cat
```

**Test Cases based on Edge Coverage (Inheritance Coverage):**

*   **Test Case 1:** Create an instance of `Dog` and call `makeSound()` and `fetch()`. This covers the `Animal -> Dog` inheritance edge.
*   **Test Case 2:** Create an instance of `Cat` and call `makeSound()` and `climb()`. This covers the `Animal -> Cat` inheritance edge.
*   **Test Case 3:** Create an instance of `Animal` and call `makeSound()`. This covers testing the `Animal` class directly.

**Test Cases based on Method Coverage:**

*   All test cases above, combined with explicit testing of the `Animal` class.

**Important Points:**

*   Focus on testing overridden methods to ensure that the subclass's implementation behaves as expected.
*   Consider the impact of polymorphism when designing test cases. Polymorphism means that the same method call can result in different behaviors depending on the object type.
*   Abstract classes should also be considered and mocked when needed.

### 2.4. Practice Questions

1.  Draw the inheritance hierarchy graph for the following C# code:

    ```csharp
    public abstract class Shape
    {
        public abstract double Area();
    }

    public class Circle : Shape
    {
        public double Radius { get; set; }

        public override double Area()
        {
            return Math.PI * Radius * Radius;
        }
    }

    public class Rectangle : Shape
    {
        public double Width { get; set; }
        public double Height { get; set; }

        public override double Area()
        {
            return Width * Height;
        }
    }
    ```

2.  Write test cases to achieve edge coverage for the inheritance hierarchy in Question 1.

**Answers:**

1.  **Inheritance Hierarchy Graph:**

    ```
    Shape
      |
      +-- Circle
      |
      +-- Rectangle
    ```

2.  **Test Cases for Edge Coverage:**

    *   **Test Case 1:** Create an instance of `Circle`, set the `Radius`, and call `Area()`. This covers the `Shape -> Circle` inheritance edge.
    *   **Test Case 2:** Create an instance of `Rectangle`, set `Width` and `Height`, and call `Area()`. This covers the `Shape -> Rectangle` inheritance edge.
    *   **Test Case 3:**  While we cannot directly instantiate `Shape` (abstract class), we should have tests that verify the behavior of code that *uses* `Shape` objects polymorphically (e.g., a method that takes a `Shape` parameter and calculates the sum of areas of a collection of shapes).  This would indirectly test aspects of the `Shape` class.

## 3. Coupling Data-Flow Pairs

### 3.1. Key Concepts and Definitions

*   **Data Flow Analysis:** Tracks the flow of data through a program, identifying definitions (where a variable is assigned a value) and uses (where a variable's value is accessed).
*   **Coupling:** The degree of interdependence between software modules or components. High coupling can lead to increased complexity and maintenance challenges.
*   **Coupling Data-Flow Pairs:** Pairs of definitions and uses of a variable that occur in different modules or components. These pairs indicate data dependencies between the components.
*   **Importance of Testing Coupling Data-Flow Pairs:**
    *   Ensure that data passed between modules is handled correctly.
    *   Detect errors related to incorrect data conversions or data corruption.
    *   Identify potential side effects of changes in one module on other modules.
    *   Verify that inter-module communication is reliable.

### 3.2. Applying Graph Coverage Criteria to Coupling Data-Flow Pairs

1.  **Identify Data Flows:** Analyze the code to identify variables that are defined in one module and used in another.
2.  **Represent as a Graph (Implicitly):** While a formal graph isn't always drawn, we can conceptually think of the data flow as edges between modules.
3.  **Coverage Criteria:**
    *   **All-Defs Coverage (for Coupling):** For each variable `v` defined in a module `A`, test all uses of `v` in other modules `B, C, ...`.
    *   **All-Uses Coverage (for Coupling):** For each variable `v` used in a module `B`, test all definitions of `v` in other modules `A, C, ...`.
    *   **All-DU-Paths Coverage (for Coupling):** This is the most comprehensive. For each definition of a variable in one module, test all definition-use paths that span across multiple modules. This is very complex for large systems.

### 3.3. Example

Consider two modules:

**Module A (Python):**

```python
def calculate_discount(price, discount_rate):
    """Calculates the discount amount."""
    discount = price * discount_rate  # Definition of 'discount'
    return discount
```

**Module B (Python):**

```python
def apply_tax(discounted_price, tax_rate):
    """Applies tax to the discounted price."""
    final_price = discounted_price + (discounted_price * tax_rate)
    return final_price

def main():
    price = 100
    discount_rate = 0.1
    discount = calculate_discount(price, discount_rate) # call to Module A, uses return value
    discounted_price = price - discount   # definition of discounted_price
    tax_rate = 0.05
    final_price = apply_tax(discounted_price, tax_rate) # uses discounted_price
    print(f"Final price: {final_price}")

if __name__ == "__main__":
    main()
```

**Coupling Data-Flow:**

*   The variable `discount` is defined in Module A and implicitly used in Module B when `calculate_discount` returns and the result is used to calculate `discounted_price`.
*   The variable `discounted_price` is defined in Module B and used in Module B when calling `apply_tax`.

**Test Cases based on All-Defs Coverage (for Coupling):**

*   **Test Case 1:** Test `calculate_discount` with `price = 100` and `discount_rate = 0.1`.  Verify that the returned `discount` value is correctly used in Module B to calculate `discounted_price`, and that the final price is as expected.
*   **Test Case 2:** Test `calculate_discount` with `price = 50` and `discount_rate = 0.2`. Verify that the returned `discount` value is correctly used in Module B to calculate `discounted_price`, and that the final price is as expected.

**Test Cases based on All-Uses Coverage (for Coupling):**

* This is more applicable when considering *input* variables. Since the return of `calculate_discount` *becomes* a definition in main, All-Defs coverage sufficiently covers this example.

**Important Points:**

*   Coupling data-flow testing is most effective when modules are loosely coupled. Tight coupling can make testing more complex.
*   Consider using mocking or stubbing to isolate modules during testing.
*   Automated tools can assist in identifying coupling data-flow pairs and generating test cases.

### 3.4. Practice Questions

1.  Consider the following C# code with two classes:

    ```csharp
    public class DataProcessor
    {
        public int ProcessData(int input)
        {
            // Some complex data processing logic
            int result = input * 2;
            return result;
        }
    }

    public class DataConsumer
    {
        private DataProcessor processor = new DataProcessor();

        public void ConsumeData(int data)
        {
            int processedData = processor.ProcessData(data); // Call to DataProcessor
            Console.WriteLine($"Processed data: {processedData}");
        }

        public static void Main(string[] args)
        {
            DataConsumer consumer = new DataConsumer();
            consumer.ConsumeData(10);
        }
    }
    ```

    Identify the coupling data-flow pair.

2.  Write test cases to achieve all-defs coverage (for coupling) for the coupling data-flow pair identified in Question 1.

**Answers:**

1.  **Coupling Data-Flow Pair:** The variable `result` is defined in the `ProcessData` method of the `DataProcessor` class and implicitly used in the `ConsumeData` method of the `DataConsumer` class as the return value which is assigned to the `processedData` variable.

2.  **Test Cases for All-Defs Coverage (for Coupling):**

    *   **Test Case 1:** Call `DataConsumer.ConsumeData(10)`. Verify that the value returned by `DataProcessor.ProcessData(10)` (which should be 20) is correctly used and printed by `DataConsumer`.
    *   **Test Case 2:** Call `DataConsumer.ConsumeData(5)`. Verify that the value returned by `DataProcessor.ProcessData(5)` (which should be 10) is correctly used and printed by `DataConsumer`.
    *   **Test Case 3:** Call `DataConsumer.ConsumeData(-3)`. Verify that the value returned by `DataProcessor.ProcessData(-3)` (which should be -6) is correctly used and printed by `DataConsumer`.  (Testing with negative numbers is important)

## 4. Benefits and Limitations of Using Graph Coverage for Design Elements

### 4.1. Benefits

*   **Improved Code Coverage:** Ensures that different structural aspects of the design are exercised, leading to higher coverage of the code.
*   **Early Defect Detection:**  Helps detect design flaws and integration issues early in the development lifecycle.
*   **Systematic Test Case Generation:** Provides a systematic approach to generating test cases based on the design of the software.
*   **Better Understanding of the System:**  Forces testers to understand the design of the system, which can lead to better test cases and more effective bug reporting.
*   **Traceability:** Provides traceability between design elements and test cases.

### 4.2. Limitations

*   **Complexity:**  Generating and executing test cases based on graph coverage can be complex, especially for large systems.
*   **Feasibility:** Achieving high levels of graph coverage (e.g., path coverage) can be infeasible due to the large number of possible paths.
*   **Cost:**  Developing and maintaining test cases based on graph coverage can be expensive.
*   **May Not Detect All Defects:**  Graph coverage focuses on structural aspects of the design and may not detect all types of defects (e.g., semantic errors, usability issues).
*   **Requires Design Documentation:** Requires accurate and up-to-date design documentation (e.g., call graphs, inheritance hierarchies) which may not always be available.
*   **Static Analysis Limitations:** Graph coverage derived solely from static analysis might not capture all possible dynamic behaviors (e.g., dynamic method dispatch).

## 5. Important Points to Remember

*   Graph coverage criteria can be applied to various design elements, including call graphs, class inheritance hierarchies, and coupling data-flow pairs.
*   The choice of coverage criteria depends on the complexity of the system and the desired level of confidence.
*   Automated tools can assist in generating and executing test cases based on graph coverage.
*   Graph coverage is a valuable technique for improving code coverage and detecting design flaws, but it should be used in conjunction with other testing techniques.
*   Understand the trade-offs between the benefits and limitations of using graph coverage.
*   Continuously evaluate and refine your test cases to ensure they are effective in detecting defects.
*   Don't blindly apply coverage criteria. Think about the specific risks and requirements of the system.
