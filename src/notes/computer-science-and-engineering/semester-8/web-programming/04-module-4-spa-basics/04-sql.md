---
title: "SQL"
subject: "WEB PROGRAMMING"
module: "Module 4: SPA – Basics"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cc4c"
status: "completed"
scrapedAt: "2026-05-20T17:28:39.979Z"
---
# WEB PROGRAMMING: Module 4 - SPA Basics

## Topic: SQL (Structured Query Language)

This module introduces the foundational concepts of SQL, a powerful language used for managing and manipulating data in relational databases. This knowledge is crucial for building dynamic web applications that interact with data.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Understand the role of SQL in web programming and database management.**
*   **Identify and differentiate between the major categories of SQL statements (DDL, DML, DCL, TCL).**
*   **Perform basic data retrieval operations using the `SELECT` statement.**
*   **Filter data using `WHERE` clauses with various comparison and logical operators.**
*   **Sort retrieved data using the `ORDER BY` clause.**
*   **Perform basic data manipulation operations such as `INSERT`, `UPDATE`, and `DELETE`.**
*   **Understand the concept of primary keys and foreign keys for establishing relationships between tables.**
*   **Join tables to retrieve related data using `INNER JOIN`.**

---

### 1. Introduction to SQL and Relational Databases

#### 1.1 What is SQL?

*   **Definition:** SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS).
*   **Purpose:** It allows users to:
    *   Create, modify, and delete database objects (like tables).
    *   Insert, update, delete, and retrieve data from tables.
    *   Control access to data.
*   **Standardization:** SQL is an ANSI (American National Standards Institute) standard.

#### 1.2 Relational Databases (RDBMS)

*   **Concept:** Data is organized into **tables** (also called relations).
*   **Tables:**
    *   Consist of **rows** (records or tuples) and **columns** (attributes or fields).
    *   Each column has a specific data type (e.g., `INT`, `VARCHAR`, `DATE`).
*   **Relationships:** Tables are linked together through **relationships**, typically defined by common columns (keys).

#### 1.3 Why is SQL important for Web Programming?

*   **Data Persistence:** Web applications often need to store and retrieve data persistently. Databases are the primary mechanism for this.
*   **Dynamic Content:** SQL allows web applications to fetch and display dynamic content based on user requests or data changes.
*   **User Data Management:** Storing user profiles, preferences, and application state.
*   **E-commerce:** Managing product catalogs, orders, and customer information.
*   **Backend Interaction:** SQL is the common language for backend programming languages (like Python, Node.js, Java, PHP) to communicate with databases.

---

### 2. Categories of SQL Statements

SQL commands are broadly categorized based on their function:

#### 2.1 Data Definition Language (DDL)

*   **Purpose:** Used to define, modify, and delete database structures or schema.
*   **Key Commands:**
    *   `CREATE`: To create database objects (e.g., tables, databases).
        ```sql
        CREATE TABLE Customers (
            CustomerID INT PRIMARY KEY,
            FirstName VARCHAR(50),
            LastName VARCHAR(50),
            Email VARCHAR(100) UNIQUE
        );
        ```
    *   `ALTER`: To modify existing database objects.
        ```sql
        ALTER TABLE Customers
        ADD PhoneNumber VARCHAR(15);
        ```
    *   `DROP`: To delete database objects.
        ```sql
        DROP TABLE Customers;
        ```
    *   `TRUNCATE`: To remove all records from a table, but keep the table structure. (Faster than `DELETE` for large tables).
        ```sql
        TRUNCATE TABLE Orders;
        ```

#### 2.2 Data Manipulation Language (DML)

*   **Purpose:** Used to manage data within database objects.
*   **Key Commands:**
    *   `SELECT`: To retrieve data from one or more tables. (Covered in detail below)
    *   `INSERT`: To add new records to a table.
        ```sql
        INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
        VALUES (1, 'John', 'Doe', 'john.doe@example.com');
        ```
    *   `UPDATE`: To modify existing records in a table.
        ```sql
        UPDATE Customers
        SET Email = 'jane.doe.new@example.com'
        WHERE CustomerID = 1;
        ```
    *   `DELETE`: To remove records from a table.
        ```sql
        DELETE FROM Customers
        WHERE LastName = 'Doe';
        ```

#### 2.3 Data Control Language (DCL)

*   **Purpose:** Used to control access to data and database objects.
*   **Key Commands:**
    *   `GRANT`: To give users permissions to access data.
        ```sql
        GRANT SELECT, INSERT ON Customers TO 'webuser'@'localhost';
        ```
    *   `REVOKE`: To remove user permissions.
        ```sql
        REVOKE INSERT ON Customers FROM 'webuser'@'localhost';
        ```

#### 2.4 Transaction Control Language (TCL)

*   **Purpose:** Used to manage transactions within the database. A transaction is a sequence of one or more SQL statements treated as a single unit of work.
*   **Key Commands:**
    *   `COMMIT`: To save all changes made during a transaction.
    *   `ROLLBACK`: To undo all changes made during a transaction.
    *   `SAVEPOINT`: To set a point within a transaction to which you can later roll back.

---

### 3. Basic Data Retrieval with `SELECT`

*   **Purpose:** To fetch data from one or more tables.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name;
    ```
    *   `SELECT column1, column2, ...`: Specifies the columns you want to retrieve.
    *   `*`: A wildcard character that selects all columns.
    *   `FROM table_name`: Specifies the table(s) from which to retrieve data.

*   **Examples:**

    *   **Retrieve all columns from the `Customers` table:**
        ```sql
        SELECT *
        FROM Customers;
        ```

    *   **Retrieve specific columns (FirstName, LastName) from the `Customers` table:**
        ```sql
        SELECT FirstName, LastName
        FROM Customers;
        ```

    *   **Using Aliases (for columns and tables):** Aliases provide temporary, more readable names.
        ```sql
        SELECT CustomerID AS ID, FirstName AS FName
        FROM Customers AS C;
        ```

---

### 4. Filtering Data with `WHERE`

*   **Purpose:** To specify conditions that records must meet to be included in the result set.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
    ```

*   **Operators:**

    *   **Comparison Operators:**
        *   `=` : Equal to
        *   `!=` or `<>` : Not equal to
        *   `>` : Greater than
        *   `<` : Less than
        *   `>=` : Greater than or equal to
        *   `<=` : Less than or equal to

    *   **Logical Operators:**
        *   `AND`: Combines two conditions; both must be true.
        *   `OR` : Combines two conditions; at least one must be true.
        *   `NOT`: Reverses the truth of a condition.

    *   **Other Operators:**
        *   `BETWEEN value1 AND value2`: Selects values within a range (inclusive).
        *   `LIKE pattern`: Searches for a specified pattern in a column.
            *   `%`: Represents zero, one, or multiple characters.
            *   `_`: Represents a single character.
        *   `IN (value1, value2, ...)`: Selects values that match any value in a list.
        *   `IS NULL`: Selects rows where the column value is NULL.
        *   `IS NOT NULL`: Selects rows where the column value is not NULL.

*   **Examples:**

    *   **Find customers with CustomerID equal to 5:**
        ```sql
        SELECT FirstName, LastName
        FROM Customers
        WHERE CustomerID = 5;
        ```

    *   **Find customers whose last name is 'Smith':**
        ```sql
        SELECT *
        FROM Customers
        WHERE LastName = 'Smith';
        ```

    *   **Find customers whose first name starts with 'J':**
        ```sql
        SELECT FirstName, LastName
        FROM Customers
        WHERE FirstName LIKE 'J%';
        ```

    *   **Find customers whose first name has 'o' as the second letter:**
        ```sql
        SELECT FirstName
        FROM Customers
        WHERE FirstName LIKE '_o%';
        ```

    *   **Find customers whose Email is NOT null:**
        ```sql
        SELECT FirstName, Email
        FROM Customers
        WHERE Email IS NOT NULL;
        ```

    *   **Find customers with CustomerID greater than 10 AND LastName not equal to 'Jones':**
        ```sql
        SELECT FirstName, LastName, CustomerID
        FROM Customers
        WHERE CustomerID > 10 AND LastName <> 'Jones';
        ```

    *   **Find customers whose LastName is 'Smith' OR 'Johnson':**
        ```sql
        SELECT FirstName, LastName
        FROM Customers
        WHERE LastName = 'Smith' OR LastName = 'Johnson';
        -- Equivalent using IN:
        SELECT FirstName, LastName
        FROM Customers
        WHERE LastName IN ('Smith', 'Johnson');
        ```

---

### 5. Sorting Data with `ORDER BY`

*   **Purpose:** To sort the result set by one or more columns.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition
    ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
    ```
    *   `ASC`: Ascending order (default if not specified).
    *   `DESC`: Descending order.

*   **Examples:**

    *   **List all customers sorted by LastName in ascending order:**
        ```sql
        SELECT CustomerID, FirstName, LastName
        FROM Customers
        ORDER BY LastName ASC; -- ASC is optional here
        ```

    *   **List all customers sorted by LastName in descending order:**
        ```sql
        SELECT CustomerID, FirstName, LastName
        FROM Customers
        ORDER BY LastName DESC;
        ```

    *   **Sort customers by LastName (ascending) and then by FirstName (ascending) for those with the same LastName:**
        ```sql
        SELECT CustomerID, FirstName, LastName
        FROM Customers
        ORDER BY LastName ASC, FirstName ASC;
        ```

---

### 6. Basic Data Manipulation (DML)

#### 6.1 `INSERT` Statement

*   **Purpose:** To add new rows of data into a table.
*   **Syntax 1 (Specifying columns):**
    ```sql
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
    ```
*   **Syntax 2 (All columns, in order):**
    ```sql
    INSERT INTO table_name
    VALUES (value1, value2, value3, ...);
    ```

*   **Examples:**

    *   **Insert a new customer with specific columns:**
        ```sql
        INSERT INTO Customers (CustomerID, FirstName, LastName, Email)
        VALUES (2, 'Jane', 'Doe', 'jane.doe@example.com');
        ```

    *   **Insert a new customer where Phone Number is optional (and will be NULL):**
        ```sql
        INSERT INTO Customers (CustomerID, FirstName, LastName)
        VALUES (3, 'Peter', 'Jones');
        ```

#### 6.2 `UPDATE` Statement

*   **Purpose:** To modify existing records in a table.
*   **Syntax:**
    ```sql
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
    ```
    *   **IMPORTANT:** If the `WHERE` clause is omitted, **all** rows in the table will be updated.

*   **Examples:**

    *   **Update the email for the customer with CustomerID 1:**
        ```sql
        UPDATE Customers
        SET Email = 'john.doe.updated@example.com'
        WHERE CustomerID = 1;
        ```

    *   **Update the phone number for all customers whose LastName is 'Doe':**
        ```sql
        UPDATE Customers
        SET PhoneNumber = '555-1234'
        WHERE LastName = 'Doe';
        ```

#### 6.3 `DELETE` Statement

*   **Purpose:** To remove rows from a table.
*   **Syntax:**
    ```sql
    DELETE FROM table_name
    WHERE condition;
    ```
    *   **IMPORTANT:** If the `WHERE` clause is omitted, **all** rows in the table will be deleted.

*   **Examples:**

    *   **Delete the customer with CustomerID 3:**
        ```sql
        DELETE FROM Customers
        WHERE CustomerID = 3;
        ```

    *   **Delete all customers whose LastName is 'Jones':**
        ```sql
        DELETE FROM Customers
        WHERE LastName = 'Jones';
        ```

---

### 7. Primary Keys and Foreign Keys (Relationships)

#### 7.1 Primary Key (PK)

*   **Definition:** A column (or a set of columns) in a table that uniquely identifies each row.
*   **Properties:**
    *   Must contain **unique** values.
    *   Cannot contain **NULL** values.
*   **Purpose:** Ensures data integrity and allows rows to be referenced uniquely.
*   **Example (from `CREATE TABLE`):**
    ```sql
    CREATE TABLE Products (
        ProductID INT PRIMARY KEY, -- ProductID is the Primary Key
        ProductName VARCHAR(100),
        Price DECIMAL(10, 2)
    );
    ```

#### 7.2 Foreign Key (FK)

*   **Definition:** A column (or a set of columns) in one table that refers to the primary key in another table.
*   **Purpose:** To establish and enforce a link between two tables, ensuring referential integrity. This means that a value in the foreign key column must exist in the primary key column of the referenced table.
*   **Example:** Let's create an `Orders` table that relates to `Customers`.

    ```sql
    CREATE TABLE Orders (
        OrderID INT PRIMARY KEY,
        OrderDate DATE,
        CustomerID INT, -- This is the Foreign Key
        TotalAmount DECIMAL(10, 2),
        FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) -- Defines the relationship
    );
    ```
    *   Here, `Orders.CustomerID` refers to `Customers.CustomerID`. You cannot insert an order with a `CustomerID` that doesn't exist in the `Customers` table. Similarly, you generally cannot delete a customer if they have orders associated with them (depending on specific database constraints).

---

### 8. Joining Tables with `INNER JOIN`

*   **Purpose:** To combine rows from two or more tables based on a related column between them.
*   **`INNER JOIN`:** Returns only the rows where the join condition is met in **both** tables.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;
    ```
    *   `ON table1.column_name = table2.column_name`: Specifies the condition for joining the tables (typically matching primary and foreign keys).

*   **Example:** Let's retrieve customer names and their order dates.

    **Tables:**
    *   `Customers`: (CustomerID, FirstName, LastName)
    *   `Orders`: (OrderID, OrderDate, CustomerID)

    ```sql
    SELECT Customers.FirstName, Customers.LastName, Orders.OrderDate
    FROM Customers
    INNER JOIN Orders
    ON Customers.CustomerID = Orders.CustomerID;
    ```

    *   **Using Aliases for clarity:**
        ```sql
        SELECT c.FirstName, c.LastName, o.OrderDate
        FROM Customers AS c
        INNER JOIN Orders AS o
        ON c.CustomerID = o.CustomerID;
        ```

    This query will return a list of customers who have placed orders, showing their first name, last name, and the date of their order. Customers who have not placed any orders will not appear in the result.

---

### Important Points to Remember:

*   **SQL is case-insensitive for keywords** (e.g., `SELECT` is the same as `select`), but it's a good practice to use uppercase for keywords for readability. Table and column names might be case-sensitive depending on the database system and configuration.
*   **Semicolons (`;`)** are used to terminate SQL statements, though they are not always strictly required by all SQL clients for single statements.
*   **The `WHERE` clause is crucial for data manipulation** (`UPDATE`, `DELETE`) to avoid unintended changes to your entire dataset.
*   **`PRIMARY KEY` and `FOREIGN KEY` constraints** are fundamental for maintaining data integrity and establishing relationships in a relational database.
*   **`INNER JOIN`** is used to combine data from multiple tables where a match exists in both. Understanding other JOIN types (like `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`) will be important in future modules.

---

### Practice Questions/Exercises:

Let's assume we have the following tables:

**`Employees` Table:**
| EmployeeID | FirstName | LastName | Department | Salary | HireDate   |
|------------|-----------|----------|------------|--------|------------|
| 101        | Alice     | Smith    | IT         | 70000  | 2020-03-15 |
| 102        | Bob       | Johnson  | HR         | 60000  | 2019-07-22 |
| 103        | Charlie   | Brown    | IT         | 75000  | 2021-01-10 |
| 104        | Diana     | Miller   | Sales      | 65000  | 2020-08-01 |
| 105        | Eve       | Davis    | IT         | 72000  | 2022-05-30 |

**`Projects` Table:**
| ProjectID | ProjectName     | Department |
|-----------|-----------------|------------|
| P1        | Alpha           | IT         |
| P2        | Beta            | HR         |
| P3        | Gamma           | IT         |
| P4        | Delta           | Sales      |

**`Assignments` Table:** (Links Employees to Projects)
| AssignmentID | EmployeeID | ProjectID | Role       |
|--------------|------------|-----------|------------|
| 1            | 101        | P1        | Developer  |
| 2            | 102        | P2        | Manager    |
| 3            | 103        | P3        | Lead Dev   |
| 4            | 101        | P3        | Developer  |
| 5            | 104        | P4        | Sales Rep  |
| 6            | 105        | P1        | Tester     |

---

**Questions:**

1.  **SELECT:** Write a SQL query to retrieve all columns from the `Employees` table.
2.  **SELECT with WHERE:** Write a SQL query to find the `FirstName` and `LastName` of employees who work in the 'IT' department.
3.  **SELECT with WHERE and Comparison:** Write a SQL query to list the `FirstName`, `LastName`, and `Salary` of employees whose salary is greater than 70000.
4.  **SELECT with WHERE and LIKE:** Write a SQL query to find the `FirstName` and `LastName` of employees whose `LastName` starts with 'S'.
5.  **SELECT with ORDER BY:** Write a SQL query to retrieve all employees, sorted by their `HireDate` in ascending order.
6.  **INSERT:** Write a SQL query to add a new employee: `EmployeeID` = 106, `FirstName` = 'Frank', `LastName` = 'Garcia', `Department` = 'Sales', `Salary` = 68000, `HireDate` = '2023-02-14'.
7.  **UPDATE:** Write a SQL query to update the `Salary` of 'Charlie Brown' (EmployeeID 103) to 80000.
8.  **DELETE:** Write a SQL query to delete the employee with `EmployeeID` 104 ('Diana Miller').
9.  **JOIN:** Write a SQL query to list the `FirstName` of employees and the `ProjectName` they are assigned to.
10. **JOIN with WHERE:** Write a SQL query to list the `FirstName` of employees working in the 'IT' department and the `ProjectName` they are assigned to.

---

**Answers:**

1.  ```sql
    SELECT *
    FROM Employees;
    ```
2.  ```sql
    SELECT FirstName, LastName
    FROM Employees
    WHERE Department = 'IT';
    ```
3.  ```sql
    SELECT FirstName, LastName, Salary
    FROM Employees
    WHERE Salary > 70000;
    ```
4.  ```sql
    SELECT FirstName, LastName
    FROM Employees
    WHERE LastName LIKE 'S%';
    ```
5.  ```sql
    SELECT *
    FROM Employees
    ORDER BY HireDate ASC;
    ```
6.  ```sql
    INSERT INTO Employees (EmployeeID, FirstName, LastName, Department, Salary, HireDate)
    VALUES (106, 'Frank', 'Garcia', 'Sales', 68000, '2023-02-14');
    ```
7.  ```sql
    UPDATE Employees
    SET Salary = 80000
    WHERE EmployeeID = 103;
    ```
8.  ```sql
    DELETE FROM Employees
    WHERE EmployeeID = 104;
    ```
9.  ```sql
    SELECT E.FirstName, P.ProjectName
    FROM Employees AS E
    INNER JOIN Assignments AS A ON E.EmployeeID = A.EmployeeID
    INNER JOIN Projects AS P ON A.ProjectID = P.ProjectID;
    ```
10. ```sql
    SELECT E.FirstName, P.ProjectName
    FROM Employees AS E
    INNER JOIN Assignments AS A ON E.EmployeeID = A.EmployeeID
    INNER JOIN Projects AS P ON A.ProjectID = P.ProjectID
    WHERE E.Department = 'IT';
