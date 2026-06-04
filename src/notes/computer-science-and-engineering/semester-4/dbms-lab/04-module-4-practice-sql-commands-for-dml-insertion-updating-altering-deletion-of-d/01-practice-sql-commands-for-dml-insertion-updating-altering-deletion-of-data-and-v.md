---
title: "Practice SQL commands for DML (insertion, updating, altering, deletion of data, and viewing/querying records based on condition in databases)."
subject: "DBMS LAB"
module: "Module 4: Practice SQL commands for DML (insertion, updating, altering, deletion of data, and viewing/querying records based on condition in databases)."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4e6"
status: "completed"
scrapedAt: "2026-05-20T16:12:09.033Z"
---
# DBMS Lab - Module 4: DML Practice

**Topic:** Practice SQL commands for DML (insertion, updating, altering, deletion of data, and viewing/querying records based on condition in databases).

**Description:** Practical application of Data Manipulation Language (DML) commands in SQL, including inserting, updating, altering, deleting, and querying data based on specified conditions.

**Learning Outcomes:**

*   Understand and apply the basic DML commands: `INSERT`, `UPDATE`, `DELETE`.
*   Learn how to query data using `SELECT` with `WHERE` clause for conditional filtering.
*   Understand how to modify table structure using `ALTER TABLE` (adding/removing columns).
*   Write and execute SQL queries to perform data manipulation and retrieval.

## 1. Key Concepts and Definitions

*   **DML (Data Manipulation Language):**  A subset of SQL commands used to manipulate data within database tables.  It focuses on data modification, not table structure modification (which is DDL - Data Definition Language).

*   **CRUD Operations:**  DML commands typically support the fundamental CRUD operations:
    *   **Create:** `INSERT` - Adds new data to a table.
    *   **Read:** `SELECT` - Retrieves data from a table.
    *   **Update:** `UPDATE` - Modifies existing data in a table.
    *   **Delete:** `DELETE` - Removes data from a table.

*   **`INSERT`:** Adds one or more rows to a table.

*   **`UPDATE`:** Modifies existing rows in a table.

*   **`DELETE`:** Removes rows from a table.

*   **`SELECT`:** Retrieves data from one or more tables based on specified criteria.

*   **`WHERE` Clause:**  Used with `SELECT`, `UPDATE`, and `DELETE` to specify conditions for data selection or modification.  It filters rows based on a boolean expression.

*   **`ALTER TABLE`:** Modifies the structure of an existing table (primarily a DDL command, but we'll cover basic adding/dropping columns).

## 2. `INSERT` Command

### 2.1 Purpose

To add new rows of data to a table.

### 2.2 Syntax

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- OR

INSERT INTO table_name
VALUES (value1, value2, value3, ...);  -- If providing values for all columns in the order they appear in the table definition.
```

### 2.3 Example

Let's assume we have a table called `Employees`:

```sql
CREATE TABLE Employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10, 2),
    department VARCHAR(50)
);
```

**Inserting a new employee:**

```sql
INSERT INTO Employees (employee_id, first_name, last_name, salary, department)
VALUES (1, 'John', 'Doe', 60000.00, 'Sales');

-- OR

INSERT INTO Employees VALUES (2, 'Jane', 'Smith', 75000.00, 'Marketing');
```

**Important Points:**

*   Data types must match the column data types.
*   If a column is defined as `NOT NULL`, you must provide a value for it.
*   If a column has a `DEFAULT` value defined, you can omit it in the `INSERT` statement, and the default value will be used.  You can also explicitly use the keyword `DEFAULT`. For example:

    ```sql
    INSERT INTO Employees (employee_id, first_name, last_name, department)
    VALUES (3, 'Peter', 'Jones', 'IT');  -- Salary will likely be NULL or have a DEFAULT value

    INSERT INTO Employees (employee_id, first_name, last_name, salary, department)
    VALUES (4, 'Alice', 'Brown', DEFAULT, 'HR'); -- Salary will take DEFAULT value
    ```

## 3. `UPDATE` Command

### 3.1 Purpose

To modify existing data in one or more rows of a table.

### 3.2 Syntax

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### 3.3 Example

**Updating the salary of John Doe:**

```sql
UPDATE Employees
SET salary = 65000.00
WHERE employee_id = 1;
```

**Updating the department for all employees in Sales to Marketing:**

```sql
UPDATE Employees
SET department = 'Marketing'
WHERE department = 'Sales';
```

**Important Points:**

*   The `WHERE` clause is **crucial**.  If you omit the `WHERE` clause, *all* rows in the table will be updated.
*   You can update multiple columns in a single `UPDATE` statement.
*   Data types must match the column data types.
*   The `condition` in the `WHERE` clause can be any valid boolean expression.

## 4. `DELETE` Command

### 4.1 Purpose

To remove one or more rows from a table.

### 4.2 Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

### 4.3 Example

**Deleting the employee with ID 2:**

```sql
DELETE FROM Employees
WHERE employee_id = 2;
```

**Deleting all employees from the Marketing department:**

```sql
DELETE FROM Employees
WHERE department = 'Marketing';
```

**Important Points:**

*   The `WHERE` clause is **crucial**.  If you omit the `WHERE` clause, *all* rows in the table will be deleted.  This is also known as truncating the table. `TRUNCATE TABLE` is another DDL command that rapidly deletes all rows (faster than `DELETE FROM table_name` without a `WHERE` clause and cannot be rolled back).
*   `DELETE` is a DML command and can be rolled back in a transaction. `TRUNCATE TABLE` is a DDL command and cannot be rolled back.
*   Deleting rows can affect other tables if foreign key constraints are in place.

## 5. `SELECT` Command with `WHERE` Clause

### 5.1 Purpose

To retrieve data from one or more tables based on specified conditions.  The `WHERE` clause allows for filtering the results.

### 5.2 Syntax

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;

-- OR

SELECT *  -- Select all columns
FROM table_name
WHERE condition;
```

### 5.3 Example

**Selecting the first and last names of all employees who earn more than $70,000:**

```sql
SELECT first_name, last_name
FROM Employees
WHERE salary > 70000.00;
```

**Selecting all information about employees in the IT department:**

```sql
SELECT *
FROM Employees
WHERE department = 'IT';
```

**Selecting employees whose last name starts with 'S':**

```sql
SELECT *
FROM Employees
WHERE last_name LIKE 'S%';  -- Using LIKE operator with wildcard %
```

**Selecting employees whose salary is between $60,000 and $80,000:**

```sql
SELECT *
FROM Employees
WHERE salary BETWEEN 60000.00 AND 80000.00;
```

**Selecting employees who are either in IT or HR:**

```sql
SELECT *
FROM Employees
WHERE department IN ('IT', 'HR');
```

**Important Points:**

*   The `WHERE` clause can use various operators: `=`, `!=`, `>`, `<`, `>=`, `<=`, `LIKE`, `BETWEEN`, `IN`, `NOT`, `AND`, `OR`.
*   The `WHERE` clause significantly affects the efficiency of the query.  Indexing can improve performance when using `WHERE`.

## 6. `ALTER TABLE` Command (Adding/Dropping Columns)

### 6.1 Purpose

To modify the structure of an existing table. We'll focus on adding and dropping columns. While `ALTER TABLE` is primarily DDL, knowing how to add/drop columns is important in a DML context because it influences what data you can manipulate.

### 6.2 Syntax

**Adding a column:**

```sql
ALTER TABLE table_name
ADD column_name data_type constraint;
```

**Dropping a column:**

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

### 6.3 Example

**Adding a column called `email` to the `Employees` table:**

```sql
ALTER TABLE Employees
ADD email VARCHAR(100);
```

**Dropping the `email` column from the `Employees` table:**

```sql
ALTER TABLE Employees
DROP COLUMN email;
```

**Important Points:**

*   Dropping a column will permanently remove the data stored in that column. Be very careful!
*   Consider the impact of adding or dropping columns on existing applications and queries.
*   Adding a column with a `NOT NULL` constraint usually requires a `DEFAULT` value to be specified, otherwise, existing rows will violate the constraint.

## 7. Practice Questions/Exercises

Assume the `Employees` table is as defined previously.

1.  **Insert a new employee with the following details:** employee_id = 5, first_name = 'David', last_name = 'Lee', salary = 85000.00, department = 'Finance'.

2.  **Update the salary of all employees in the Finance department to be increased by 10%.**

3.  **Delete all employees whose last name is 'Smith'.**

4.  **Select the first and last names of all employees whose salary is greater than $75,000 and who are in the IT department.**

5.  **Add a column called `phone_number` (VARCHAR(20)) to the `Employees` table.**

6.  **Drop the `phone_number` column from the `Employees` table.**

### 7.1 Answers

1.  ```sql
    INSERT INTO Employees (employee_id, first_name, last_name, salary, department)
    VALUES (5, 'David', 'Lee', 85000.00, 'Finance');
    ```

2.  ```sql
    UPDATE Employees
    SET salary = salary * 1.10
    WHERE department = 'Finance';
    ```

3.  ```sql
    DELETE FROM Employees
    WHERE last_name = 'Smith';
    ```

4.  ```sql
    SELECT first_name, last_name
    FROM Employees
    WHERE salary > 75000.00 AND department = 'IT';
    ```

5.  ```sql
    ALTER TABLE Employees
    ADD phone_number VARCHAR(20);
    ```

6.  ```sql
    ALTER TABLE Employees
    DROP COLUMN phone_number;
    ```

## 8. Important Points to Remember

*   Always back up your database before performing DML operations, especially `UPDATE` and `DELETE`, to prevent accidental data loss.
*   Use the `WHERE` clause carefully and verify your conditions before executing `UPDATE` and `DELETE` statements.
*   Understand the impact of foreign key constraints on `DELETE` operations.
*   Pay attention to data types when inserting or updating data.
*   Be mindful of performance implications, especially when dealing with large tables.  Proper indexing of frequently used columns in `WHERE` clauses is vital for efficient querying.
*   Practice using different operators in the `WHERE` clause to create complex filtering conditions.
*   Always test your SQL queries on a development or test environment before running them on a production database.
