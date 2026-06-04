---
title: "Design a database schema for an application with ER diagram from a problem description."
subject: "DBMS LAB"
module: "Module 1: Design a database schema for an application with ER diagram from a problem description."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4df"
status: "completed"
scrapedAt: "2026-05-20T16:12:06.204Z"
---
# DBMS LAB - Module 1: Database Schema Design with ER Diagrams

**Topic:** Design a database schema for an application with ER diagram from a problem description.

**Description:** This module focuses on understanding problem descriptions, identifying key entities and relationships, and translating them into an Entity-Relationship (ER) Diagram.  We'll then use the ER Diagram to create a relational database schema.

**Learning Outcomes:**

*   Understand the importance of database design in application development.
*   Interpret a problem description to identify key entities and their attributes.
*   Identify and define relationships between entities, including cardinality and participation constraints.
*   Construct an ER Diagram representing the database schema.
*   Translate an ER Diagram into a relational database schema.
*   Apply normalization principles (brief overview) to improve the database design.

## 1. Introduction to Database Design

*   **Importance of Database Design:**  A well-designed database is crucial for the performance, scalability, and maintainability of any application that relies on data.  Poor database design can lead to data redundancy, inconsistency, difficulty in querying data, and performance bottlenecks.

*   **Database Development Life Cycle:**  Database design is a key stage in the Database Development Life Cycle (DDLC).  Typical stages include:
    *   Requirement Gathering and Analysis
    *   Conceptual Design (ER Diagram)
    *   Logical Design (Relational Schema)
    *   Physical Design (Implementation details)
    *   Implementation and Testing
    *   Deployment and Maintenance

*   **Key Concepts:**
    *   **Data:** Raw, unorganized facts.
    *   **Information:** Processed, organized data that has meaning.
    *   **Database:** An organized collection of related data.
    *   **Database Management System (DBMS):** Software that allows users to define, create, maintain, and access a database.
    *   **Schema:** The overall structure of a database, defining the tables, columns, data types, and relationships.

## 2. Understanding Problem Descriptions and Identifying Entities

*   **Analyzing Problem Descriptions:** Carefully read and analyze the problem description to understand the application's requirements and data needs. Look for nouns (entities) and verbs (relationships).

*   **Identifying Entities:** Entities are real-world objects or concepts about which we want to store information. Examples: *Student, Course, Instructor, Book, Customer, Order*.

*   **Identifying Attributes:** Attributes are characteristics or properties of an entity. Examples:
    *   *Student:* `StudentID`, `Name`, `Major`, `DateOfBirth`
    *   *Course:* `CourseID`, `CourseName`, `Credits`
    *   *Order:* `OrderID`, `OrderDate`, `CustomerID`, `TotalAmount`

*   **Attribute Types:**
    *   **Simple Attribute:** Cannot be further subdivided (e.g., `StudentID`).
    *   **Composite Attribute:** Can be divided into smaller subparts (e.g., `Address` can be divided into `Street`, `City`, `State`, `Zip`).
    *   **Single-valued Attribute:** Holds only one value for each entity instance (e.g., `StudentID`).
    *   **Multi-valued Attribute:** Holds multiple values for each entity instance (e.g., `PhoneNumbers` of a person).  Typically avoided in relational databases and represented using separate tables (see normalization later).
    *   **Derived Attribute:** Value can be derived from other attributes (e.g., `Age` can be derived from `DateOfBirth`). Usually not stored directly to avoid redundancy.

*   **Key Attribute (Primary Key):** An attribute (or set of attributes) that uniquely identifies each instance of an entity.  Must be unique and non-null.  Examples: `StudentID`, `CourseID`, `OrderID`.

*   **Example:**

    **Problem Description:** A university needs to manage student enrollment in courses. Each student has a unique ID, a name, a major, and an email address. Each course has a unique ID, a name, and a number of credits. Students enroll in courses. We need to track the grade each student receives in each course they enroll in.

    *   **Entities:** `Student`, `Course`
    *   **Student Attributes:** `StudentID`, `Name`, `Major`, `Email`
    *   **Course Attributes:** `CourseID`, `CourseName`, `Credits`

## 3. Identifying and Defining Relationships

*   **Relationships:** Connections or associations between entities.  Represented by verbs in the problem description.  Examples: *Student enrolls in Course, Customer places Order, Author writes Book*.

*   **Relationship Types:**
    *   **One-to-One (1:1):**  One instance of entity A is related to one instance of entity B, and vice versa.  Example: `Person` `owns` `Passport`.
    *   **One-to-Many (1:N):**  One instance of entity A is related to many instances of entity B.  Example: `Customer` `places` `Order`.
    *   **Many-to-One (N:1):** Many instances of entity A are related to one instance of entity B. Example:  `Order` `is placed by` `Customer`.  (Same as 1:N, just viewed from the other direction)
    *   **Many-to-Many (N:M):** Many instances of entity A are related to many instances of entity B.  Example: `Student` `enrolls in` `Course`.  This relationship usually requires an intermediate entity (e.g., `Enrollment`).

*   **Cardinality Constraints:** Specify the minimum and maximum number of instances of one entity that can be related to an instance of another entity.  Represented as (min, max).

*   **Participation Constraints:** Specify whether an entity instance *must* participate in a relationship.
    *   **Total Participation:** Every instance of the entity *must* participate in the relationship (e.g., every employee must work for a department).  Represented as double line in ER diagram.
    *   **Partial Participation:** An instance of the entity *may* participate in the relationship (e.g., an employee *may* manage a department).  Represented as a single line in ER diagram.

*   **Relationship Attributes:** Attributes that describe the relationship itself.  Example: In the `Student enrolls in Course` relationship, the `Grade` is an attribute of the relationship.

*   **Example (Continuing from the previous university example):**

    *   **Relationship:** `Student enrolls in Course`
    *   **Relationship Type:** Many-to-Many (N:M)
    *   **Relationship Attributes:** `Grade`
    *   **Cardinality:**  A student can enroll in zero or more courses (0, N).  A course can have zero or more students enrolled (0, N).
    *   **Participation:** It's possible a student isn't enrolled in any courses yet (partial participation). It's possible a course doesn't have any students enrolled yet (partial participation).

## 4. Constructing the ER Diagram

*   **ER Diagram Notation:**
    *   **Entity:** Rectangle
    *   **Attribute:** Oval connected to the entity
    *   **Key Attribute:** Oval with an underline
    *   **Relationship:** Diamond
    *   **Relationship Type (Cardinality):** Numbers (1, N) or symbols (e.g., crow's foot) placed on the relationship lines.
    *   **Total Participation:** Double line connecting entity to the relationship.
    *   **Partial Participation:** Single line connecting entity to the relationship.

*   **Steps to Create an ER Diagram:**
    1.  Identify the entities.
    2.  Identify the attributes for each entity.
    3.  Identify the relationships between the entities.
    4.  Determine the cardinality and participation constraints for each relationship.
    5.  Draw the ER diagram using the correct notation.

*   **ER Diagram for the University Example:**

    ```
    +-------------+       +-------------+       +-------------+
    |   Student   |-----(0,N)---<Enrolls>---(0,N)----|   Course    |
    +-------------+       +-------------+       +-------------+
    | StudentID  |       |  Grade      |       | CourseID   |
    | Name       |       +-------------+       | CourseName |
    | Major      |                           | Credits    |
    | Email      |                           +-------------+
    +-------------+

    ```

    *   `Student` and `Course` are entities.
    *   `Enrolls` is a relationship between `Student` and `Course`.
    *   `StudentID`, `Name`, `Major`, `Email` are attributes of `Student`, with `StudentID` as the primary key.
    *   `CourseID`, `CourseName`, `Credits` are attributes of `Course`, with `CourseID` as the primary key.
    *   `Grade` is an attribute of the `Enrolls` relationship.
    *   The relationship is Many-to-Many (N:M).
    *   Participation is partial on both sides (single lines).

## 5. Translating the ER Diagram to a Relational Database Schema

*   **Relational Model:**  Data is organized into tables (relations) with rows (tuples) and columns (attributes).

*   **Translation Rules:**
    1.  **Entities become tables:** Each entity in the ER diagram is translated into a table in the relational schema.
    2.  **Attributes become columns:** Each attribute of an entity becomes a column in the corresponding table.
    3.  **Primary key:** The primary key of the entity becomes the primary key of the table.
    4.  **One-to-Many relationships:**  The primary key of the "one" side is added as a foreign key to the "many" side.
    5.  **Many-to-Many relationships:**  A new table is created to represent the relationship. The primary keys of the two entities participating in the relationship become foreign keys in the new table.  The primary key of the new table is usually a composite key of the two foreign keys.
    6.  **One-to-One relationships:** The primary key of either table can be added as a foreign key to the other table.  Choose based on participation constraints and which table is likely to be accessed more frequently.
    7.  **Relationship Attributes:** Relationship attributes become columns in the table created for the many-to-many relationship or in the table where the foreign key is added for one-to-many or one-to-one relationships.

*   **Relational Schema for the University Example:**

    *   **Student Table:**
        *   `StudentID` (INT, PRIMARY KEY)
        *   `Name` (VARCHAR(255))
        *   `Major` (VARCHAR(255))
        *   `Email` (VARCHAR(255))

    *   **Course Table:**
        *   `CourseID` (INT, PRIMARY KEY)
        *   `CourseName` (VARCHAR(255))
        *   `Credits` (INT)

    *   **Enrollment Table (for the N:M relationship):**
        *   `StudentID` (INT, PRIMARY KEY, FOREIGN KEY referencing Student(StudentID))
        *   `CourseID` (INT, PRIMARY KEY, FOREIGN KEY referencing Course(CourseID))
        *   `Grade` (VARCHAR(2))

## 6. Normalization (Brief Overview)

*   **Purpose of Normalization:** To minimize data redundancy and improve data integrity by organizing data into tables in such a way that reduces dependencies and anomalies (insertion, deletion, and update anomalies).

*   **Normal Forms (briefly mentioned):**
    *   **1NF (First Normal Form):**  Eliminate repeating groups of data.  Each column should contain only atomic values (no lists or repeating groups).
    *   **2NF (Second Normal Form):**  Must be in 1NF and eliminate redundant data that depends on *only part* of the primary key (applies to tables with composite primary keys).
    *   **3NF (Third Normal Form):**  Must be in 2NF and eliminate redundant data that depends on *another non-key* attribute (transitive dependency).
    *   **BCNF (Boyce-Codd Normal Form):** A stricter version of 3NF.  Addresses certain anomalies not handled by 3NF.

*   **Example (Normalization):**

    Suppose we had a single table called `StudentCourse` with the following columns:

    *   `StudentID` (PRIMARY KEY)
    *   `StudentName`
    *   `CourseID` (PRIMARY KEY)
    *   `CourseName`
    *   `Credits`
    *   `Grade`

    This table violates normalization because `StudentName` is determined by `StudentID`, and `CourseName` and `Credits` are determined by `CourseID`.  This leads to redundancy (the same student name is repeated for each course the student takes).

    The normalized schema (as shown in the previous example) eliminates this redundancy.

## Important Points to Remember:

*   **Understand the Problem:**  Thorough analysis of the problem description is key.
*   **Primary Keys are Critical:** Carefully choose primary keys to ensure uniqueness and integrity.
*   **Foreign Keys Enforce Relationships:** Foreign keys are crucial for maintaining data consistency across tables.
*   **Normalization is Important:**  Strive for at least 3NF to avoid data anomalies.
*   **ER Diagrams are Visual Tools:**  Use them to communicate your database design clearly.
*   **Iteration is Common:** Database design is often an iterative process. Don't be afraid to revise your ER diagram and schema as you gain a better understanding of the requirements.

## Practice Questions/Exercises:

1.  **Library Database:** Design a database schema for a library management system. Consider the following entities: `Book`, `Author`, `Member`, and `Loan`. Include attributes such as `BookID`, `Title`, `AuthorName`, `MemberID`, `MemberName`, and `LoanDate`. Define the relationships between these entities and create an ER diagram and a relational schema. Include cardinality and participation constraints.

    **Answer (Conceptual):**

    *   **Entities:** `Book`, `Author`, `Member`, `Loan`
    *   **Relationships:**
        *   `Author` writes `Book` (1:N - one author can write many books)
        *   `Book` is loaned to `Member` (N:M - many books can be loaned to many members through the `Loan` entity)
        *   `Loan` relates `Book` and `Member` (Each Loan refers to a specific Book and a specific Member)

    *   **ER Diagram (Simplified):**

    ```
    +-------------+      +-------------+      +-------------+      +-------------+
    |   Author    |-----(1,N)---<Writes>----|    Book     |-----(0,N)---<Loan>----|   Member   |
    +-------------+                     +-------------+      +-------------+
    | AuthorID    |                     | BookID      |      | LoanDate    |
    | AuthorName  |                     | Title       |      +-------------+
    +-------------+                     | AuthorID (FK)|      | BookID (FK)  |
                                        +-------------+      | MemberID (FK)|
                                                              +-------------+

    ```

    *   **Relational Schema (Simplified):**

        *   **Author:** (`AuthorID`, `AuthorName`)
        *   **Book:** (`BookID`, `Title`, `AuthorID (FK)`)
        *   **Member:** (`MemberID`, `MemberName`)
        *   **Loan:** (`LoanID`, `BookID (FK)`, `MemberID (FK)`, `LoanDate`)  (Assuming LoanID for uniqueness - an alternative is using the composite key of BookID and MemberID).

2.  **Online Shopping System:** Design a database schema for an online shopping system. Consider entities such as `Customer`, `Product`, `Order`, and `Category`. Include attributes like `CustomerID`, `Name`, `Email`, `ProductID`, `ProductName`, `Price`, `OrderID`, `OrderDate`, and `CategoryName`. Define the relationships between these entities and create an ER diagram and a relational schema.

    **Answer (Conceptual - similar process as above, but requires some thought regarding Order details like quantity and potentially shipping information, which would lead to additional entities or attributes):**  Focus on entities, attributes, relationships, cardinalities, participation constraints, ER diagram, and relational schema. The level of detail required will depend on the specific instructions of the lab. Remember to consider the primary keys and foreign keys in your relational schema.
