---
title: "Object Oriented Software Design -  UML diagrams and relationships– Static and dynamic models"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c894"
status: "completed"
scrapedAt: "2026-05-20T17:11:07.235Z"
---
# SOFTWARE ENGINEERING: Module 2: Software Design

## Topic: Object-Oriented Software Design - UML Diagrams and Relationships – Static and Dynamic Models

This module delves into the core principles of Object-Oriented Software Design (OOSD), focusing on how to model software systems using the Unified Modeling Language (UML). We will explore both the static structure of a system and its dynamic behavior.

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the fundamental concepts of Object-Oriented Software Design.**
*   **Identify and explain the purpose of various UML diagrams used for modeling.**
*   **Differentiate between static and dynamic models in software design.**
*   **Describe and illustrate common relationships between UML model elements.**
*   **Apply UML diagrams to model different aspects of a software system.**

---

### 1. Introduction to Object-Oriented Software Design (OOSD)

**Key Concepts:**

*   **Objects:** The fundamental building blocks of OOSD. An object represents an instance of a class, encapsulating data (attributes) and behavior (methods).
    *   **Attributes:** Data members that define the state of an object.
    *   **Methods (Operations):** Functions or procedures that define the behavior of an object.
*   **Classes:** Blueprints or templates for creating objects. A class defines the common attributes and methods that all its objects will possess.
*   **Encapsulation:** The bundling of data (attributes) and methods that operate on that data within a single unit (class). This hides the internal implementation details and exposes only necessary functionalities.
*   **Inheritance:** A mechanism that allows a new class (subclass or derived class) to inherit properties (attributes and methods) from an existing class (superclass or base class). This promotes code reusability and establishes an "is-a" relationship.
*   **Polymorphism:** The ability of an object to take on many forms. In OOSD, it refers to the ability of different objects to respond to the same method call in their own specific ways. This often achieved through method overriding.
*   **Abstraction:** The process of simplifying complex reality by modeling classes based on their relevant attributes and behaviors, ignoring irrelevant details.

**Why OOSD?**

*   **Modularity:** Systems are broken down into self-contained objects, making them easier to understand, develop, and maintain.
*   **Reusability:** Inheritance and well-designed classes allow for the reuse of existing code, saving development time and effort.
*   **Maintainability:** Changes in one object are less likely to affect other parts of the system due to encapsulation.
*   **Flexibility:** Polymorphism allows for greater flexibility and extensibility of the system.

---

### 2. Unified Modeling Language (UML)

**Key Concepts:**

*   **UML:** A standardized, general-purpose modeling language used in software engineering for visualizing, specifying, constructing, and documenting the artifacts of a software-intensive system. It provides a common language for developers, architects, and business analysts.
*   **Diagrams:** UML uses a variety of diagrams to represent different aspects of a system. These are broadly categorized into **Structure Diagrams** (static) and **Behavior Diagrams** (dynamic).

---

### 3. Static Models in UML

Static models describe the structure of a system – the classes, their attributes and methods, and the relationships between them.

#### 3.1. Class Diagram

**Purpose:** To model the static structure of a system, showing classes, their attributes, operations, and the relationships between classes.

**Key Elements:**

*   **Class:** Represented by a rectangle divided into three compartments:
    *   **Top:** Class Name
    *   **Middle:** Attributes (visibility, name, type)
    *   **Bottom:** Operations (visibility, name, parameters, return type)
*   **Visibility:**
    *   `+` : Public (accessible from anywhere)
    *   `-` : Private (accessible only within the class)
    *   `#` : Protected (accessible within the class and its subclasses)
*   **Attributes:** `visibility name: type` (e.g., `- accountBalance: double`)
*   **Operations:** `visibility name(parameters): returnType` (e.g., `+ deposit(amount: double): void`)

**Example:**

```
+-------------------+
|      Account      |
+-------------------+
| - accountNumber: int |
| - accountHolder: String |
| - balance: double |
+-------------------+
| + deposit(amount: double): void |
| + withdraw(amount: double): boolean |
| + getBalance(): double |
+-------------------+
```

#### 3.2. Relationships in Class Diagrams

*   **Association:** Represents a structural relationship between instances of two classes. It indicates that objects of one class are connected to objects of another class.
    *   **Representation:** A solid line connecting the two classes.
    *   **Multiplicity:** Indicates how many instances of one class can be related to instances of another class (e.g., 1, 0..1, *, 1..*).
        *   `1`: Exactly one
        *   `0..1`: Zero or one
        *   `*`: Many (zero or more)
        *   `1..*`: One or more
    *   **Example:** A `Customer` can have many `Order`s.

    ```
    +----------+       * +-------+
    | Customer |----------| Order |
    +----------+       1 +-------+
    ```

*   **Aggregation:** A "has-a" relationship where one class (the whole) is composed of other classes (the parts). The parts can exist independently of the whole.
    *   **Representation:** A solid line with an unfilled diamond at the "whole" end.
    *   **Example:** A `Department` has many `Employee`s. An `Employee` can exist even if the `Department` is dissolved.

    ```
    +-----------+ <>-------* +---------+
    | Department|            | Employee|
    +-----------+            +---------+
    ```

*   **Composition:** A stronger "has-a" relationship, a specialized form of aggregation. The parts cannot exist independently of the whole. If the whole is destroyed, the parts are also destroyed.
    *   **Representation:** A solid line with a filled diamond at the "whole" end.
    *   **Example:** A `House` is composed of `Room`s. If the `House` is demolished, the `Room`s cease to exist.

    ```
    +------+ ♦-------* +-------+
    | House|           | Room  |
    +------+           +-------+
    ```

*   **Generalization (Inheritance):** An "is-a" relationship where one class (subclass) inherits properties from another class (superclass).
    *   **Representation:** A solid line with a hollow arrowhead pointing to the superclass.
    *   **Example:** A `Car` is a type of `Vehicle`.

    ```
    +-------+      +-------+
    |Vehicle|<-----|  Car  |
    +-------+      +-------+
    ```

*   **Dependency:** A weaker "uses-a" relationship where a change in one class (the supplier) may affect another class (the client) that uses it.
    *   **Representation:** A dashed line with an arrowhead pointing from the client to the supplier.
    *   **Example:** A `PaymentProcessor` might depend on a `CreditCard` class to process payments.

    ```
    +-----------------+     +--------------+
    | PaymentProcessor|===>| CreditCard   |
    +-----------------+ ===>+--------------+
    ```

*   **Realization (Interface Implementation):** Represents the implementation of an interface by a class.
    *   **Representation:** A dashed line with a hollow arrowhead pointing to the interface.
    *   **Example:** A `SavingsAccount` class realizes the `Account` interface.

    ```
    +-------------+ <|-----------+-------------+
    | Account     |<|-----------|SavingsAccount|
    | (Interface) |             +-------------+
    +-------------+
    ```

#### 3.3. Other Static Diagrams (Brief Mention)

*   **Component Diagram:** Shows how different software components (e.g., libraries, modules) are organized and how they depend on each other.
*   **Deployment Diagram:** Illustrates the physical deployment of software artifacts on hardware nodes.
*   **Package Diagram:** Organizes model elements into groups (packages) to manage complexity.

---

### 4. Dynamic Models in UML

Dynamic models describe the behavior of a system – how objects interact with each other over time.

#### 4.1. Use Case Diagram

**Purpose:** To capture the functional requirements of a system from the user's perspective. It shows the system's functionality as a set of use cases and the actors who interact with these use cases.

**Key Elements:**

*   **Actor:** Represents a role played by a user or an external system that interacts with the system. Represented by a stick figure.
*   **Use Case:** Represents a specific functionality or a sequence of actions performed by the system in response to an actor's request. Represented by an oval.
*   **System Boundary:** A rectangle that encloses all the use cases, representing the scope of the system.
*   **Relationships:**
    *   **Association:** Connects an actor to a use case.
    *   **Include (`<<include>>`):** One use case incorporates the behavior of another use case.
    *   **Extend (`<<extend>>`):** One use case extends the behavior of another use case under certain conditions.
    *   **Generalization:** Allows a use case to inherit behavior from another use case.

**Example:** A banking system.

```
+-----------------------+
|      Banking System   |
|                       |
|  (Actor)   (Use Case)|
|  +-------+            |
|  | Customer| --<      |
|  +-------+    \       |
|                \      |
|                 (.)   |
|               Withdraw|
|                 /     |
|                /      |
|  +-------+ <--+       |
|  | Teller|            |
|  +-------+            |
|                       |
+-----------------------+
```

#### 4.2. Sequence Diagram

**Purpose:** To show how objects interact with each other in a time-ordered manner. It emphasizes the sequence of messages exchanged between objects.

**Key Elements:**

*   **Objects/Lifelines:** Represent instances of classes, typically shown at the top of the diagram. A dashed vertical line represents the object's existence over time (lifeline).
*   **Messages:** Represent communication between objects, shown as horizontal arrows.
    *   **Synchronous Message:** The sender waits for the receiver to finish executing the operation.
    *   **Asynchronous Message:** The sender does not wait for the receiver to finish.
*   **Activation (Execution Occurrence):** A thin rectangle on a lifeline, indicating the period during which an object is performing an action.
*   **Return Message:** Represents the return of control or data from a called operation.

**Example:** A customer withdrawing money from an ATM.

```
+----------+     +---------+     +-----------+
| Customer |     | ATM     |     | Bank      |
+----------+     +---------+     +-----------+
    |               |               |
    | WithdrawCash  |               |
    +-------------->+               |
    |               | ValidatePIN   |
    |               +-------------->+
    |               |               | Account.debit(amount)
    |               |               +-------------->+
    |               |               |               |
    |               |               |<-------------+
    |               |               | DebitSuccess  |
    |               | <-------------+               |
    |               | DispenseCash  |               |
    |               +-------------->+               |
    |               |               |               |
    |<-------------+ ReturnCash    |               |
    |               |               |               |
```

#### 4.3. State Machine Diagram (Statechart Diagram)

**Purpose:** To model the different states an object can be in and the transitions between these states triggered by events. Useful for modeling objects with complex lifecycles.

**Key Elements:**

*   **State:** A period of time during which an object is in a consistent condition. Represented by a rounded rectangle.
*   **Initial State:** The starting state of the object. Represented by a solid circle.
*   **Final State:** The end state of the object. Represented by a solid circle within another circle.
*   **Transition:** A movement from one state to another. Represented by a solid arrow.
*   **Event:** A trigger that causes a transition.
*   **Action:** An operation performed when entering or exiting a state, or during a transition.
    *   `entry / action`: Action performed upon entering the state.
    *   `exit / action`: Action performed upon exiting the state.
    *   `event [guard] / action`: Transition triggered by an event, with an optional guard condition and an action.

**Example:** The states of an ATM card.

```
(Initial) --[Card Inserted]--> (CardRead)
(CardRead) --[ValidPIN]--> (Active)
(CardRead) --[InvalidPIN]--> (PINBlocked)
(Active) --[Withdraw/Debit]--> (Active)
(Active) --[CardRemoved]--> (Idle)
(PINBlocked) --[Timeout]--> (Idle)
```

#### 4.4. Activity Diagram

**Purpose:** To model the flow of control or data within a business process or a complex operation. It's similar to a flowchart but with UML extensions.

**Key Elements:**

*   **Initial Node:** The starting point of the flow.
*   **Activity Node:** Represents a single step or action in the process.
*   **Control Flow:** Shows the sequence of activities.
*   **Decision Node:** Represents a point where the flow can branch based on conditions.
*   **Merge Node:** Brings together divergent flows.
*   **Fork Node:** Splits a flow into parallel flows.
*   **Join Node:** Synchronizes parallel flows.
*   **Activity Final Node:** The end of the activity flow.

**Example:** A simplified order processing workflow.

```
(Start) --> [Receive Order] --> [Check Stock] --[In Stock]--> [Process Payment] --> [Ship Order] --> (End)
                                 |                                     ^
                                 |                                     |
                                 +--[Out of Stock]--> [Notify Customer]--+
```

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a UML Class Diagram?
a) To model the sequence of messages between objects.
b) To show the different states an object can be in.
c) To describe the static structure of a system, including classes, attributes, and relationships.
d) To illustrate the interactions of actors with system functionalities.

**Question 2:**
Which UML diagram is best suited to visualize the interaction between a `Customer` placing an order and the `OrderProcessingSystem`?
a) Use Case Diagram
b) Sequence Diagram
c) State Machine Diagram
d) Component Diagram

**Question 3:**
Explain the difference between Aggregation and Composition in UML. Provide a real-world example for each.

**Question 4:**
Consider a scenario where a `SavingsAccount` and a `CheckingAccount` both inherit from an `Account` class.
    a) Draw a UML Class Diagram snippet showing this inheritance relationship.
    b) If the `Account` class has an attribute `accountNumber`, explain how this attribute would be accessible in the `SavingsAccount` and `CheckingAccount` classes, assuming it's declared as `protected`.

**Question 5:**
What does the `<<include>>` relationship signify in a Use Case Diagram?

---

### 6. Answers to Practice Questions

**Answer 1:**
c) To describe the static structure of a system, including classes, attributes, and relationships.

**Answer 2:**
b) Sequence Diagram (It visualizes the ordered sequence of interactions between objects like Customer and OrderProcessingSystem). A Use Case diagram could show the "Place Order" functionality and the "Customer" actor, but the sequence diagram details the *how*.

**Answer 3:**
*   **Aggregation:** An aggregation is a "has-a" relationship representing a whole-part connection where the part can exist independently of the whole.
    *   **Example:** A `Car` *has* `Wheels`. A `Wheel` can exist on its own, and if the `Car` is dismantled, the `Wheel` remains.
*   **Composition:** Composition is a stronger "has-a" relationship, a more specialized form of aggregation. The part cannot exist independently of the whole. If the whole is destroyed, the part is also destroyed.
    *   **Example:** A `House` *is composed of* `Rooms`. If the `House` is demolished, the `Rooms` as part of that house cease to exist.

**Answer 4:**
    a) UML Class Diagram snippet:

    ```
    +-------------+
    |   Account   |
    +-------------+
    | # accountNumber: int |
    | + balance: double |
    +-------------+
    | + deposit() |
    | + withdraw()|
    +-------------+
           ^
           |
           | Generalization
           |
    +-------------+     +-------------+
    | SavingsAccount|     | CheckingAccount|
    +-------------+     +-------------+
    | + calculateInterest(): void |     | + overdraftLimit: double |
    +-------------+     +-------------+
    ```

    b) If `accountNumber` is declared as `protected` in the `Account` class, it means it is accessible within the `Account` class itself, and also by any subclasses of `Account`, such as `SavingsAccount` and `CheckingAccount`. Therefore, the `SavingsAccount` and `CheckingAccount` classes can directly access and use the `accountNumber` attribute.

**Answer 5:**
The `<<include>>` relationship in a Use Case Diagram signifies that one use case (the base use case) *includes* the behavior of another use case (the included use case) as part of its execution. The included use case is always executed when the base use case is performed. It's used to factor out common behavior into a separate use case.

---

### Important Points to Remember

*   **UML is a language, not a methodology:** It's a tool to model, not a step-by-step guide to building software.
*   **Choose the right diagram for the job:** Different diagrams serve different purposes. Understanding their strengths is crucial.
*   **Static vs. Dynamic:** Always distinguish between modeling the *structure* (static) and the *behavior* (dynamic) of your system.
*   **Relationships are key:** The connections between model elements are as important as the elements themselves.
*   **Clarity and Consistency:** Aim for clear, unambiguous, and consistent diagrams.
*   **Iterative Refinement:** UML diagrams are not set in stone. They should be refined as your understanding of the system evolves.
*   **Focus on essential details:** Avoid cluttering diagrams with unnecessary information.

---
This concludes Module 2: Software Design, focusing on Object-Oriented Software Design, UML diagrams, and their relationships for static and dynamic modeling.
