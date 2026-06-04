---
title: "The Relational Data Model and SQL  - The Relational Data Model and Relational Database Constraints-Relational Algebra and Relational Calculus - Structured Query Language (SQL)-Data Definition Language,  Data Manipulation Language,"
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 2: The Relational Data Model and SQL  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af73"
status: "completed"
scrapedAt: "2026-05-20T16:12:00.522Z"
---
# DATABASE MANAGEMENT SYSTEMS - Module 2: The Relational Data Model and SQL

## Topic: The Relational Data Model and SQL

**Description:** This module explores the fundamental concepts of the relational data model, relational database constraints, relational algebra, relational calculus, and the Structured Query Language (SQL) for defining and manipulating data in relational databases.

**Learning Outcomes:** After completing this module, you will be able to:

*   Understand the relational data model and its key components.
*   Define and apply relational database constraints to ensure data integrity.
*   Apply relational algebra and relational calculus to query relational databases.
*   Write SQL queries to define, manipulate, and retrieve data in relational databases.
*   Differentiate between Data Definition Language (DDL) and Data Manipulation Language (DML) commands.

---

### 1. The Relational Data Model

*   **Definition:** The relational data model represents data as a collection of relations (tables). It is based on first-order predicate logic and utilizes the concept of tuples (rows) and attributes (columns) to organize information.

*   **Key Concepts:**

    *   **Relation (Table):** A named set of tuples. Each relation has a schema (description of the table structure). Example: `Customers (CustomerID, Name, Address, City)`.
    *   **Tuple (Row):**  A single record in a relation.  It represents a single entity or instance. Example: `(123, 'Alice Smith', '123 Main St', 'Anytown')`.
    *   **Attribute (Column):**  A characteristic or property of a relation. Each attribute has a name and a domain (data type). Example: `Name` (attribute) with domain `varchar(50)`.
    *   **Domain:** The set of permissible values for an attribute. Example: The domain for `CustomerID` might be positive integers.
    *   **Degree:** The number of attributes in a relation's schema.  Example: The `Customers` relation has a degree of 4.
    *   **Cardinality:** The number of tuples in a relation.
    *   **Relational Schema:** The structure of a relation, including the relation name and its attributes with their respective domains. Example: `Customers(CustomerID: INT, Name: VARCHAR(50), Address: VARCHAR(100), City: VARCHAR(50))`
    *   **Relational Database Schema:** A collection of relation schemas that form a relational database.

*   **Example:**

    Consider a database for a library. We could have the following relations:

    *   `Books (BookID, Title, Author, PublicationYear)`
    *   `Members (MemberID, Name, Address, PhoneNumber)`
    *   `Loans (LoanID, BookID, MemberID, LoanDate, DueDate)`

    Each relation represents a different entity in the library system.

### 2. Relational Database Constraints

*   **Definition:** Rules that enforce data integrity and consistency within a relational database. They ensure that only valid data is stored in the database.

*   **Types of Constraints:**

    *   **Domain Constraints:** Specify the permissible values for an attribute. Example: `PublicationYear` must be a positive integer.
    *   **Key Constraints:** Ensure that each tuple in a relation is uniquely identifiable.
        *   **Superkey:** A set of attributes that uniquely identifies each tuple.
        *   **Candidate Key:** A minimal superkey (no proper subset is a superkey). A relation can have multiple candidate keys.
        *   **Primary Key:**  A candidate key chosen to uniquely identify tuples in a relation.  It cannot contain null values. Example: `BookID` in the `Books` relation.
        *   **Composite Key:** A primary key consisting of multiple attributes.
    *   **Entity Integrity Constraint:**  The primary key attribute(s) of a relation cannot be null.  This ensures that each tuple has a unique and identifiable primary key.
    *   **Referential Integrity Constraint:** Ensures that the values in one relation that refer to another relation are valid.  This is enforced through foreign keys.
        *   **Foreign Key:** An attribute (or set of attributes) in one relation that references the primary key of another relation. Example: `BookID` in the `Loans` relation references the `BookID` in the `Books` relation.
        *   **Referential Integrity Rule:** When a tuple in the referencing relation (e.g., `Loans`) contains a foreign key value, that value must either:
            *   Match an existing primary key value in the referenced relation (e.g., `Books`).
            *   Be null (if nulls are allowed for that foreign key attribute).
    *   **General Constraints:** User-defined constraints that express application-specific business rules.  Example: A loan cannot be issued for more than 30 days.

*   **Benefits of Constraints:**

    *   Data Integrity:  Ensures data accuracy and consistency.
    *   Data Validity:  Guarantees that only valid data is stored.
    *   Database Reliability:  Improves the overall reliability of the database.
    *   Application Robustness:  Reduces errors in applications that use the database.

*   **Example:**

    In the library database:

    *   **Domain Constraint:** `PublicationYear` should be an integer greater than 0.
    *   **Key Constraint:** `BookID` in `Books` is the primary key. `MemberID` in `Members` is the primary key. `LoanID` in `Loans` is the primary key.
    *   **Entity Integrity Constraint:** `BookID` in `Books` cannot be null.
    *   **Referential Integrity Constraint:** `BookID` in `Loans` must reference a valid `BookID` in `Books`. `MemberID` in `Loans` must reference a valid `MemberID` in `Members`.

### 3. Relational Algebra and Relational Calculus

*   **Definition:** Formal languages used to specify queries on relational databases. They provide a theoretical foundation for SQL.

*   **Relational Algebra:** A procedural query language. It specifies *how* to retrieve data by defining a sequence of operations.

    *   **Basic Operations:**
        *   **SELECT (σ):**  Selects tuples that satisfy a given predicate (condition).  Example: `σ PublicationYear > 2000 (Books)` selects all books published after the year 2000.
        *   **PROJECT (π):**  Selects specific attributes (columns) from a relation. Example: `π Title, Author (Books)` selects the title and author of all books.
        *   **UNION (∪):**  Combines the tuples of two relations that have the same schema.
        *   **SET DIFFERENCE (-):**  Returns tuples that are in the first relation but not in the second relation (both relations must have the same schema).
        *   **CARTESIAN PRODUCT (X):**  Combines each tuple from the first relation with each tuple from the second relation.
        *   **RENAME (ρ):** Renames a relation or its attributes.  Example: `ρ NewBooks(BookID, Title, Author, Year) (Books)` renames the `Books` relation to `NewBooks`.
    *   **Additional Operations (derived from basic operations):**
        *   **INTERSECTION (∩):**  Returns tuples that are common to both relations.
        *   **JOIN (⋈):** Combines tuples from two relations based on a related attribute.
            *   **Theta Join (⋈<sub>θ</sub>):**  Joins tuples that satisfy a specified condition (θ). Example:  `Books ⋈ Book.BookID = Loans.BookID Loans`.
            *   **Equijoin:** A theta join where the condition (θ) uses only equality comparisons.
            *   **Natural Join (*):** An equijoin that eliminates redundant attributes (attributes with the same name).
            *   **Outer Join:**  Includes tuples that do not have matching values in the join attribute(s).  Left, Right, and Full outer joins.
        *   **DIVISION (÷):**  Selects tuples from one relation that are related to *all* tuples in another relation.

*   **Relational Calculus:** A declarative query language. It specifies *what* data to retrieve without specifying how to retrieve it.

    *   **Tuple Relational Calculus (TRC):**  Uses tuple variables to represent tuples in relations.
        *   Example: `{ t | Books(t) ∧ t.PublicationYear > 2000 }` retrieves all tuples 't' from the `Books` relation where the `PublicationYear` is greater than 2000.
    *   **Domain Relational Calculus (DRC):**  Uses domain variables to represent values in attributes.
        *   Example: `{ <b, ti, a, y> | <b, ti, a, y> ∈ Books ∧ y > 2000 }` retrieves the `BookID`, `Title`, `Author`, and `PublicationYear` of all books published after 2000.

*   **Example (Relational Algebra):**

    Find the names of all members who have borrowed books published after 2000.

    1.  `Temp1 ← σ PublicationYear > 2000 (Books)`  (Select books published after 2000)
    2.  `Temp2 ← Books ⋈ BookID = Loans.BookID Loans` (Join the `Temp1` result with the `Loans` relation)
    3.  `Temp3 ← Temp2 ⋈ MemberID = Members.MemberID Members` (Join the `Temp2` result with the `Members` relation)
    4.  `Result ← π Name (Temp3)` (Project the `Name` attribute from the `Temp3` result)

*   **Example (Tuple Relational Calculus):**

    Find the names of all members who have borrowed books published after 2000.

    `{ m.Name | ∃l ∈ Loans ∃b ∈ Books ∃me ∈ Members (l.BookID = b.BookID ∧ l.MemberID = me.MemberID ∧ b.PublicationYear > 2000 ∧ me.MemberID = m.MemberID)}`

*   **Key Differences:**
    * Relational algebra is procedural, focusing on *how* to retrieve the data using specific operations.
    * Relational calculus is declarative, focusing on *what* data is desired, without specifying the retrieval process.

### 4. Structured Query Language (SQL)

*   **Definition:**  A standard language for accessing and manipulating relational databases.

*   **Key Features:**

    *   Combines features of relational algebra and relational calculus.
    *   Supports both data definition and data manipulation.
    *   Widely used and supported by most database management systems (DBMS).

*   **SQL Categories:**

    *   **Data Definition Language (DDL):**  Used to define the database schema (structure).  Includes commands for creating, altering, and dropping database objects (tables, indexes, views, etc.).
    *   **Data Manipulation Language (DML):** Used to manipulate data within the database. Includes commands for inserting, updating, deleting, and retrieving data.
    *   **Data Control Language (DCL):** Used to control access to data within the database.  Includes commands for granting and revoking permissions.

### 5. Data Definition Language (DDL)

*   **Commands:**

    *   **CREATE TABLE:** Creates a new table in the database.

        ```sql
        CREATE TABLE Books (
            BookID INT PRIMARY KEY,
            Title VARCHAR(255) NOT NULL,
            Author VARCHAR(255),
            PublicationYear INT
        );
        ```

    *   **ALTER TABLE:** Modifies the structure of an existing table (e.g., adding, deleting, or modifying columns, adding constraints).

        ```sql
        ALTER TABLE Books
        ADD Genre VARCHAR(50);

        ALTER TABLE Books
        DROP COLUMN Genre;

        ALTER TABLE Books
        ALTER COLUMN Author VARCHAR(100);  -- (Syntax may vary by DBMS)

        ALTER TABLE Loans
        ADD CONSTRAINT FK_Loans_Books
        FOREIGN KEY (BookID) REFERENCES Books(BookID);
        ```

    *   **DROP TABLE:** Deletes a table from the database.

        ```sql
        DROP TABLE Books;
        ```

    *   **CREATE INDEX:** Creates an index on a column (or set of columns) to improve query performance.

        ```sql
        CREATE INDEX idx_Author ON Books (Author);
        ```

    *   **DROP INDEX:** Deletes an index.

        ```sql
        DROP INDEX idx_Author ON Books;
        ```

    *   **CREATE VIEW:** Creates a virtual table based on a query.

        ```sql
        CREATE VIEW  BooksAfter2000 AS
        SELECT BookID, Title, Author
        FROM Books
        WHERE PublicationYear > 2000;
        ```

    *   **DROP VIEW:** Deletes a view.

        ```sql
        DROP VIEW BooksAfter2000;
        ```

*   **Data Types:**

    SQL supports various data types, including:

    *   **INT (INTEGER):** Integer numbers.
    *   **VARCHAR(n):** Variable-length character strings (up to n characters).
    *   **CHAR(n):** Fixed-length character strings (n characters).
    *   **DATE:** Date values.
    *   **DATETIME:** Date and time values.
    *   **BOOLEAN:** Boolean values (true or false).
    *   **NUMERIC(p,s):** Number with p digits in total, with s digits after the decimal point.
    *   **DECIMAL(p,s):** Same as NUMERIC
    *   **FLOAT:** Floating point number

### 6. Data Manipulation Language (DML)

*   **Commands:**

    *   **INSERT:** Inserts new tuples into a table.

        ```sql
        INSERT INTO Books (BookID, Title, Author, PublicationYear)
        VALUES (1, 'The Lord of the Rings', 'J.R.R. Tolkien', 1954);
        ```

    *   **UPDATE:** Modifies existing tuples in a table.

        ```sql
        UPDATE Books
        SET PublicationYear = 1955
        WHERE BookID = 1;
        ```

    *   **DELETE:** Deletes tuples from a table.

        ```sql
        DELETE FROM Books
        WHERE BookID = 1;
        ```

    *   **SELECT:** Retrieves data from one or more tables. This is the most powerful and frequently used DML command.

        ```sql
        SELECT * FROM Books;  -- Select all columns and rows

        SELECT Title, Author FROM Books WHERE PublicationYear > 2000;  -- Select specific columns with a condition
        ```

    *   **SELECT Statement Clauses:**

        *   **SELECT:** Specifies the attributes (columns) to retrieve.  `*` selects all attributes.
        *   **FROM:** Specifies the table(s) to retrieve data from.
        *   **WHERE:** Specifies a condition to filter the tuples (rows) to retrieve.
        *   **ORDER BY:** Specifies the order in which the results should be sorted.
        *   **GROUP BY:** Groups rows with the same values in specified columns into summary rows.
        *   **HAVING:** Filters groups after the `GROUP BY` clause. Used with aggregate functions (e.g., `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`).
        *   **LIMIT:** Limits the number of rows returned. (Syntax may vary between DBMSs)

    *   **Aggregate Functions:**

        *   **COUNT():**  Counts the number of rows or non-null values.
        *   **SUM():**  Calculates the sum of values.
        *   **AVG():**  Calculates the average of values.
        *   **MIN():**  Finds the minimum value.
        *   **MAX():**  Finds the maximum value.

    *   **Example:**

        ```sql
        SELECT Author, COUNT(*) AS NumberOfBooks
        FROM Books
        GROUP BY Author
        HAVING COUNT(*) > 1
        ORDER BY NumberOfBooks DESC;
        ```

        This query counts the number of books written by each author, filters out authors who have written only one book, and then orders the results by the number of books in descending order.

---

### Practice Questions and Exercises:

**Using the following database schema:**

*   `Students (StudentID, Name, Major)`
*   `Courses (CourseID, CourseName, Credits)`
*   `Enrollments (StudentID, CourseID, Grade)`

1.  **Write SQL to create the `Students` table with appropriate data types and a primary key constraint.**

    ```sql
    CREATE TABLE Students (
        StudentID INT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL,
        Major VARCHAR(255)
    );
    ```

2.  **Write SQL to insert a new student into the `Students` table.**

    ```sql
    INSERT INTO Students (StudentID, Name, Major)
    VALUES (101, 'Bob Johnson', 'Computer Science');
    ```

3.  **Write SQL to retrieve the names of all students majoring in "Computer Science".**

    ```sql
    SELECT Name
    FROM Students
    WHERE Major = 'Computer Science';
    ```

4.  **Write SQL to update the `Major` of student with `StudentID` 101 to "Software Engineering".**

    ```sql
    UPDATE Students
    SET Major = 'Software Engineering'
    WHERE StudentID = 101;
    ```

5.  **Write SQL to delete the student with `StudentID` 101 from the `Students` table.**

    ```sql
    DELETE FROM Students
    WHERE StudentID = 101;
    ```

6.  **Write SQL to retrieve the `CourseName` and `Credits` of all courses.**

    ```sql
    SELECT CourseName, Credits
    FROM Courses;
    ```

7.  **Write SQL to retrieve the `StudentID`, `CourseID`, and `Grade` of all enrollments.**

    ```sql
    SELECT StudentID, CourseID, Grade
    FROM Enrollments;
    ```

8.  **Write SQL to retrieve the names of all students who have enrolled in at least one course.** (Hint:  Requires a JOIN operation).

    ```sql
    SELECT DISTINCT S.Name
    FROM Students S
    JOIN Enrollments E ON S.StudentID = E.StudentID;
    ```

9.  **Write an SQL statement that finds the average credits of courses.**

    ```sql
    SELECT AVG(Credits)
    FROM Courses;
    ```

10. **Write an SQL statement that finds the maximum credit value among all courses.**

    ```sql
    SELECT MAX(Credits)
    FROM Courses;
    ```

---

### Important Points to Remember:

*   **Data integrity is crucial:**  Use constraints to ensure data accuracy and consistency.
*   **Understand the difference between DDL and DML:**  DDL defines the database structure, while DML manipulates the data.
*   **SQL is case-insensitive (usually):**  Keywords like `SELECT`, `FROM`, `WHERE` can be written in uppercase or lowercase. However, data values (strings) are often case-sensitive.
*   **Learn to use JOINs effectively:**  Essential for querying data from multiple tables.
*   **Practice writing SQL queries:**  The best way to learn SQL is to practice writing queries for different scenarios.
*   **Pay attention to the specific syntax of your DBMS:**  SQL standards exist, but specific implementations may have slight variations.
*   **Understand relational algebra and calculus for a deeper theoretical understanding, even if you primarily use SQL.**  They provide a foundation for understanding query optimization and database theory.
