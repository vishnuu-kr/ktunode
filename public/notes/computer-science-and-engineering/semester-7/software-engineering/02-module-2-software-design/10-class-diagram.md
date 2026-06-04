---
title: "Class diagram"
subject: "SOFTWARE ENGINEERING"
module: "Module 2: Software design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c895"
status: "completed"
scrapedAt: "2026-05-20T17:11:08.008Z"
---
# Software Engineering: Module 2 - Software Design: Class Diagrams

This document provides comprehensive study notes on Class Diagrams, a crucial tool in software design.

---

## Learning Outcomes

Upon completion of this topic, you will be able to:

*   Understand the purpose and benefits of class diagrams in software engineering.
*   Identify and describe the basic building blocks of a class diagram: classes, attributes, and operations.
*   Illustrate relationships between classes, including association, aggregation, composition, and inheritance.
*   Apply common notations and conventions used in class diagrams.
*   Create basic class diagrams for simple software systems.

---

## 1. Introduction to Class Diagrams

### 1.1 What is a Class Diagram?

A class diagram is a **static structure diagram** in the Unified Modeling Language (UML) that shows the **structure of a system** by displaying its classes, their attributes, operations, and the relationships among these objects.

### 1.2 Purpose and Benefits

*   **Visual Representation:** Provides a clear and concise visual blueprint of the system's structure.
*   **Communication:** Facilitates communication among developers, designers, and stakeholders.
*   **Understanding System Structure:** Helps in understanding the components of a system and how they interact.
*   **Design Blueprint:** Serves as a foundation for code generation and implementation.
*   **Identifying Relationships:** Clearly defines how different parts of the system are connected.
*   **Documentation:** Acts as a valuable piece of documentation for the system.
*   **Early Bug Detection:** Helps in identifying design flaws early in the development lifecycle.

---

## 2. Basic Building Blocks of a Class Diagram

A class diagram is primarily composed of three main elements: **Classes**, **Attributes**, and **Operations**.

### 2.1 Classes

A class represents a **blueprint** for creating objects. It defines a set of attributes and operations that characterize objects of that type.

#### 2.1.1 Class Notation

A class is typically represented as a **rectangle** divided into three sections:

*   **Top Section:** Contains the **class name**.
*   **Middle Section:** Contains the **attributes** of the class (data members).
*   **Bottom Section:** Contains the **operations** of the class (methods or functions).

**Example:**

```
+---------------------+
|      Customer       |
+---------------------+
| - customerID: int   |
| - name: String      |
| - address: String   |
+---------------------+
| + placeOrder(): void |
| + cancelOrder(): void|
+---------------------+
```

**Key Concepts:**

*   **Class Name:** A unique identifier for the class.
*   **Attributes (Properties/Data Members):** Variables that define the state of an object.
    *   **Visibility:** Indicates the accessibility of the attribute.
        *   `+` : Public (accessible from anywhere)
        *   `-` : Private (accessible only within the class)
        *   `#` : Protected (accessible within the class and its subclasses)
        *   `~` : Package (accessible within the same package)
    *   **Name:** The name of the attribute.
    *   **Type:** The data type of the attribute (e.g., `int`, `String`, `boolean`).
*   **Operations (Methods/Functions):** Actions or behaviors that objects of the class can perform.
    *   **Visibility:** Similar to attribute visibility.
    *   **Name:** The name of the operation.
    *   **Parameters:** Input values the operation accepts (name and type).
    *   **Return Type:** The data type of the value the operation returns (if any).

#### 2.1.2 Multiplicity

Multiplicity indicates how many instances of one class can be related to instances of another class. It is shown as a number or a range next to the relationship line.

*   **1:** Exactly one
*   **0..1:** Zero or one
*   **\* (or 0..*)**: Zero or more
*   **1..\***: One or more
*   **m..n**: A range of values from m to n

**Example:** A `Customer` can place zero or more `Order`s.

```
+-------------+       0..*      +---------+
|  Customer   |-----------------|  Order  |
+-------------+                 +---------+
```

**Important Point:** Multiplicity is crucial for understanding the cardinality of relationships.

---

## 3. Relationships Between Classes

Class diagrams represent various types of relationships between classes. The most common ones are:

### 3.1 Association

An association represents a **structural relationship** between two classes where objects of one class are linked to objects of another class. It signifies a "uses" or "knows" relationship.

#### 3.1.1 Association Notation

A **solid line** connects the two associated classes.

**Example:** A `Student` is associated with a `Course`.

```
+---------+       1..*      +---------+
| Student |-----------------|  Course |
+---------+                 +---------+
```

*   **Directionality:** Can be unidirectional (arrow) or bidirectional (no arrow).
*   **Role Names:** Can be used to clarify the role one class plays in the relationship (e.g., `enrolled in` for `Student` to `Course`).
*   **Multiplicity:** As discussed earlier.

### 3.2 Aggregation

Aggregation is a **"has-a" relationship** where one class is a part of another class, but the part can exist independently of the whole. It represents a weaker form of "has-a" relationship.

#### 3.2.1 Aggregation Notation

A **solid line** with an **empty diamond** at the "whole" side.

**Example:** A `Department` *has* `Employees`. An `Employee` can exist even if the `Department` is disbanded.

```
+------------+<>-------*-------+---------+
| Department |                 | Employee|
+------------+                 +---------+
```

**Key Concepts:**

*   **Whole-Part Relationship:** The diamond represents the "whole" or the container.
*   **Independent Existence:** The "part" can exist independently.

### 3.3 Composition

Composition is a stronger form of "has-a" relationship where one class is a part of another class, and the part **cannot exist independently** of the whole. If the whole is destroyed, the part is also destroyed.

#### 3.3.1 Composition Notation

A **solid line** with a **filled diamond** at the "whole" side.

**Example:** A `House` is *composed of* `Rooms`. A `Room` cannot exist without a `House`.

```
+-------+◆-------*-------+------+
| House |                 | Room |
+-------+                 +------+
```

**Key Concepts:**

*   **Stronger Whole-Part Relationship:** The filled diamond signifies a "owns" relationship.
*   **Dependent Existence:** The "part" is intrinsically linked to the "whole" and is destroyed with it.

### 3.4 Generalization (Inheritance)

Generalization represents an **"is-a" relationship** where one class (subclass/child) inherits properties and behaviors from another class (superclass/parent).

#### 3.4.1 Generalization Notation

A **solid line** with a **hollow (unfilled) arrowhead** pointing from the subclass to the superclass.

**Example:** A `Car` *is a* `Vehicle`. A `Motorcycle` *is a* `Vehicle`.

```
+----------+         +----------+
| Vehicle  |--------▶|   Car    |
+----------+         +----------+
    ▲
    |
+----------+
|Motorcycle|
+----------+
```

**Key Concepts:**

*   **Inheritance:** Subclasses inherit attributes and operations from their superclasses.
*   **Is-A Relationship:** Clearly defines the hierarchical relationship.
*   **Abstract Classes:** Classes that cannot be instantiated and are meant to be inherited from (often shown in italics).

---

## 4. Common Notations and Conventions

*   **Visibility Markers:** `+` (public), `-` (private), `#` (protected), `~` (package).
*   **Attribute Declaration:** `name: Type [= defaultValue]`
*   **Operation Declaration:** `name(parameterName: Type, ...): ReturnType`
*   **Static Members:** Attributes or operations that belong to the class itself, not to instances. They are often underlined.
*   **Abstract Classes/Methods:** Class names and method names are often displayed in *italics*.
*   **Interfaces:** Represent a contract of services that a class promises to provide. They are often denoted with `<<interface>>` stereotype and depicted as a class with `<<interface>>` above the name. Methods in an interface are implicitly public.

    ```
    <<interface>>
    +-------------------+
    |   Runnable        |
    +-------------------+
    | + run(): void     |
    +-------------------+
    ```
    An interface is implemented by a class using a dashed line with a hollow arrowhead pointing to the interface.

    ```
    +---------+        +------------+
    |  MyTask |------->|  Runnable  |
    +---------+        +------------+
    ```

---

## 5. Practice Questions and Exercises

**Question 1:**
Draw a class diagram for a simple library system. Include classes for:
*   `Book` (with attributes like `title`, `author`, `isbn`, `isAvailable`)
*   `Member` (with attributes like `memberId`, `name`, `address`, `phone`)
*   `Library` (with attributes like `name`, `address`, and a collection of `Book`s and `Member`s)

Define the relationships between these classes. Assume:
*   A `Library` can have many `Book`s.
*   A `Book` can be borrowed by only one `Member` at a time.
*   A `Member` can borrow multiple `Book`s.
*   A `Member` can borrow a `Book`.

**Answer 1:**

```
+---------------------+        1..*      +---------+        1..*      +---------+
|       Library       |-----------------|  Member |-----------------|  Book   |
+---------------------+                 +---------+                 +---------+
| - name: String      |                 | - memberId: int       |                 | - title: String   |
| - address: String   |                 | - name: String        |                 | - author: String  |
| + addBook(book: Book): void |         | - address: String     |                 | - isbn: String    |
| + addMember(member: Member): void |   | - phone: String       |                 | - isAvailable: boolean |
+---------------------+                 | + borrowBook(book: Book): void |   +-----------------+
                                        | + returnBook(book: Book): void |
                                        +-----------------+
```

**Explanation of Relationships:**
*   `Library` to `Book`: Association (1 Library to many Books). A `Library` "has" `Book`s. Multiplicity `1..*` for `Book`s.
*   `Library` to `Member`: Association (1 Library to many Members). A `Library` "has" `Member`s. Multiplicity `1..*` for `Member`s.
*   `Member` to `Book`: Association (1 Member to many Books) with a role that a `Book` can be borrowed by at most one `Member` at a time. Multiplicity `0..1` for `Book` from `Member`'s perspective, and `0..*` for `Member` from `Book`'s perspective (a book can be borrowed by zero or one member).

**Question 2:**
What is the difference between Aggregation and Composition? Provide an example for each.

**Answer 2:**

*   **Aggregation:** A "has-a" relationship where the "part" can exist independently of the "whole".
    *   **Example:** A `Car` *has* `Wheels`. If the `Car` is destroyed, the `Wheels` can still exist.

    ```
    +---------+<>-------4-------+-------+
    |   Car   |                 | Wheel |
    +---------+                 +-------+
    ```

*   **Composition:** A stronger "has-a" relationship where the "part" cannot exist independently of the "whole". If the "whole" is destroyed, the "part" is also destroyed.
    *   **Example:** A `House` is *composed of* `Rooms`. If the `House` is destroyed, the `Rooms` cease to exist as part of that house.

    ```
    +-------+◆-------*-------+------+
    | House |                 | Room |
    +-------+                 +------+
    ```

**Question 3:**
Consider the following UML snippet. Describe the relationship between `Employee` and `Department`.

```
+------------+       1       +------------+
| Department |---------------|  Employee  |
+------------+       *       +------------+
```

**Answer 3:**
This diagram represents an **association** between `Department` and `Employee`.
*   A `Department` is associated with **many** `Employee`s (indicated by the `*` on the `Employee` side).
*   An `Employee` is associated with **exactly one** `Department` (indicated by the `1` on the `Department` side).
This signifies that each employee belongs to one department, and a department can have multiple employees.

---

## 6. Important Points to Remember

*   **Class Diagrams are Static:** They represent the structure of a system at a given point in time, not its behavior or execution flow.
*   **Visibility is Crucial:** Proper use of visibility modifiers (`+`, `-`, `#`) enforces encapsulation and good design principles.
*   **Multiplicity Defines Cardinality:** Always consider the multiplicity when defining relationships.
*   **Choose the Right Relationship:** Understand the subtle differences between association, aggregation, and composition to model your system accurately.
*   **Inheritance for "Is-A" Relationships:** Use generalization only when there's a clear hierarchical "is-a" relationship.
*   **Readability Matters:** Keep diagrams clean, well-organized, and use meaningful names for classes, attributes, and operations.
*   **Iterative Process:** Class diagrams are often created and refined iteratively throughout the design process.

---
