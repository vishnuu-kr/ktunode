---
title: "SQL Fundamentals [ For projects only ] - Creating and Executing basic SQL Queries"
subject: "OBJECT ORIENTED PROGRAMMING"
module: "Module 4: SOLID Principles in Java ( https://www.javatpoint.com/solid"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ace0"
status: "completed"
scrapedAt: "2026-05-20T16:29:33.933Z"
---
# Module 4: SOLID Principles & SQL Fundamentals (for Project Use)

**Subject:** OBJECT ORIENTED PROGRAMMING

**Module:** Module 4: SOLID Principles in Java (with SQL Fundamentals for Project Use)

**Topic:** SQL Fundamentals - Creating and Executing Basic SQL Queries

**Description:** This module covers the SOLID principles of object-oriented design in Java and introduces basic SQL query creation and execution for project-based database interaction.  While the primary focus of Module 4 is SOLID, this section focuses exclusively on SQL Fundamentals required for project implementation.

**Learning Outcomes:**

*   Understand fundamental SQL concepts and terminology.
*   Be able to construct basic SQL queries for retrieving, inserting, updating, and deleting data.
*   Be able to execute SQL queries from Java using JDBC.
*   Apply basic SQL queries to project scenarios.

## I. SQL Fundamentals

### 1.1 Introduction to SQL

*   **Definition:** SQL (Structured Query Language) is the standard language for interacting with relational database management systems (RDBMS).
*   **Purpose:** SQL is used to create, read, update, and delete data (CRUD operations) within a database.  It also defines the structure of the database itself.
*   **Types of SQL Statements:**
    *   **Data Definition Language (DDL):** Defines the database schema (structure). Examples: `CREATE`, `ALTER`, `DROP`.
    *   **Data Manipulation Language (DML):**  Manipulates the data within the schema. Examples: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
    *   **Data Control Language (DCL):** Controls access to the data. Examples: `GRANT`, `REVOKE`.  *Not covered in detail here, but important to know.*

### 1.2 Basic SQL Syntax

*   SQL statements are generally composed of keywords, identifiers, operators, and values.
*   SQL is generally *not* case-sensitive for keywords (e.g., `SELECT` is the same as `select`). However, case sensitivity *may* apply to table names, column names, and data depending on the database system. It's best practice to be consistent.
*   SQL statements usually end with a semicolon (`;`).  While not always strictly required by every database system, including it is considered good practice and is crucial when running multiple queries at once.

### 1.3 Essential SQL Commands (DML)

*   **SELECT:**  Retrieves data from a table.
    *   **Syntax:**
        ```sql
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;  -- Optional condition
        ```
    *   `SELECT *`:  Selects all columns from the table.  Use sparingly, as retrieving unnecessary data can impact performance.
    *   **Example:**
        ```sql
        SELECT employee_id, employee_name, salary
        FROM employees
        WHERE department = 'Sales';
        ```

*   **INSERT:** Adds new data into a table.
    *   **Syntax:**
        ```sql
        INSERT INTO table_name (column1, column2, ...)
        VALUES (value1, value2, ...);
        ```
    *   **Example:**
        ```sql
        INSERT INTO employees (employee_id, employee_name, department, salary)
        VALUES (101, 'Alice Smith', 'Marketing', 60000);
        ```

*   **UPDATE:** Modifies existing data in a table.
    *   **Syntax:**
        ```sql
        UPDATE table_name
        SET column1 = value1, column2 = value2, ...
        WHERE condition;  -- Very important to include WHERE!
        ```
    *   **Example:**
        ```sql
        UPDATE employees
        SET salary = 65000
        WHERE employee_id = 101;
        ```
    *   **Important Note:**  Omitting the `WHERE` clause in an `UPDATE` statement will update *all* rows in the table, which is usually not what you want!

*   **DELETE:** Removes data from a table.
    *   **Syntax:**
        ```sql
        DELETE FROM table_name
        WHERE condition;  -- Very important to include WHERE!
        ```
    *   **Example:**
        ```sql
        DELETE FROM employees
        WHERE employee_id = 101;
        ```
    *   **Important Note:**  Omitting the `WHERE` clause in a `DELETE` statement will delete *all* rows from the table, which is almost never what you want!

### 1.4 The `WHERE` Clause

*   **Purpose:** Filters the results of `SELECT`, `UPDATE`, and `DELETE` statements based on a specified condition.
*   **Operators:**
    *   `=`: Equal to
    *   `>`: Greater than
    *   `<`: Less than
    *   `>=`: Greater than or equal to
    *   `<=`: Less than or equal to
    *   `!=` or `<>`: Not equal to
    *   `LIKE`:  Pattern matching (using wildcards `%` for any sequence of characters and `_` for a single character).
    *   `IN`:  Checks if a value is in a list of values.
    *   `BETWEEN`:  Checks if a value is within a range.
    *   `IS NULL`: Checks if a value is NULL.
    *   `IS NOT NULL`: Checks if a value is not NULL.
*   **Logical Operators:**
    *   `AND`:  Both conditions must be true.
    *   `OR`:  At least one condition must be true.
    *   `NOT`:  Negates a condition.
*   **Examples:**
    *   `WHERE salary > 50000 AND department = 'Sales'`
    *   `WHERE employee_name LIKE 'A%'`  (Starts with 'A')
    *   `WHERE employee_id IN (101, 102, 103)`
    *   `WHERE hire_date BETWEEN '2020-01-01' AND '2020-12-31'`

### 1.5 Ordering Results: The `ORDER BY` Clause

*   **Purpose:**  Sorts the results of a `SELECT` statement.
*   **Syntax:**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    ORDER BY column1 [ASC | DESC], column2 [ASC | DESC], ...;
    ```
*   `ASC`: Ascending order (default).
*   `DESC`: Descending order.
*   **Example:**
    ```sql
    SELECT employee_id, employee_name, salary
    FROM employees
    ORDER BY salary DESC, employee_name ASC;  -- Sort by salary descending, then by name ascending
    ```

### 1.6 Limiting Results: The `LIMIT` Clause

*   **Purpose:** Restricts the number of rows returned by a `SELECT` statement.
*   **Syntax (MySQL, MariaDB, PostgreSQL):**
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    LIMIT number_of_rows;
    ```

    ```sql
    SELECT column1, column2, ...
    FROM table_name
    LIMIT offset, number_of_rows;
    ```

*   **Syntax (SQL Server):**
    ```sql
    SELECT TOP number_of_rows column1, column2, ...
    FROM table_name;
    ```
*   **Example (MySQL/PostgreSQL):**
    ```sql
    SELECT employee_id, employee_name
    FROM employees
    ORDER BY salary DESC
    LIMIT 5;  -- Get the 5 employees with the highest salaries
    ```

### 1.7 Basic SQL Joins

* **Purpose:** Joins are used to combine rows from two or more tables based on a related column between them.  This allows you to retrieve data from multiple tables in a single query.
* **INNER JOIN:** Returns rows only when there is a match in both tables.

```sql
SELECT column1, column2, ...
FROM table1
INNER JOIN table2 ON table1.common_column = table2.common_column;
```

* **LEFT JOIN (or LEFT OUTER JOIN):** Returns all rows from the left table (table1) and the matching rows from the right table (table2).  If there is no match in the right table, NULL values are returned for the columns of the right table.

```sql
SELECT column1, column2, ...
FROM table1
LEFT JOIN table2 ON table1.common_column = table2.common_column;
```

* **RIGHT JOIN (or RIGHT OUTER JOIN):** Returns all rows from the right table (table2) and the matching rows from the left table (table1). If there is no match in the left table, NULL values are returned for the columns of the left table.

```sql
SELECT column1, column2, ...
FROM table1
RIGHT JOIN table2 ON table1.common_column = table2.common_column;
```

* **Example:**

Assume we have two tables: `Customers` and `Orders`.

`Customers` Table:

| CustomerID | CustomerName | City     |
| ---------- | ------------ | -------- |
| 1          | John Doe     | New York |
| 2          | Jane Smith   | London   |
| 3          | David Lee    | Paris    |

`Orders` Table:

| OrderID | CustomerID | OrderDate  |
| ------- | ---------- | ---------- |
| 101     | 1          | 2023-01-15 |
| 102     | 2          | 2023-02-20 |
| 103     | 1          | 2023-03-10 |
| 104     | 4          | 2023-04-05 |  // CustomerID 4 doesn't exist in Customers

```sql
-- INNER JOIN: Returns only customers who have placed orders.
SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

-- Result:
-- CustomerName | OrderID | OrderDate
-- --------------|---------|------------
-- John Doe      | 101     | 2023-01-15
-- Jane Smith    | 102     | 2023-02-20
-- John Doe      | 103     | 2023-03-10

-- LEFT JOIN: Returns all customers, even if they haven't placed orders. If they haven't, the OrderID and OrderDate will be NULL.
SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

-- Result:
-- CustomerName | OrderID | OrderDate
-- --------------|---------|------------
-- John Doe      | 101     | 2023-01-15
-- Jane Smith    | 102     | 2023-02-20
-- David Lee     | NULL    | NULL

-- RIGHT JOIN: Returns all orders, even if the customer doesn't exist. If the customer doesn't exist, the CustomerName will be NULL.
SELECT Customers.CustomerName, Orders.OrderID, Orders.OrderDate
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

-- Result:
-- CustomerName | OrderID | OrderDate
-- --------------|---------|------------
-- John Doe      | 101     | 2023-01-15
-- Jane Smith    | 102     | 2023-02-20
-- John Doe      | 103     | 2023-03-10
-- NULL         | 104     | 2023-04-05
```

### 1.8 Aggregate Functions and `GROUP BY` Clause

*   **Aggregate Functions:**  Perform calculations on a set of values and return a single result. Common aggregate functions include:
    *   `COUNT()`: Counts the number of rows or non-NULL values.
    *   `SUM()`: Calculates the sum of values.
    *   `AVG()`: Calculates the average of values.
    *   `MIN()`: Finds the minimum value.
    *   `MAX()`: Finds the maximum value.
*   **`GROUP BY` Clause:** Groups rows that have the same values in specified columns into summary rows. Used in conjunction with aggregate functions.

*   **Syntax:**
    ```sql
    SELECT column1, column2, ..., aggregate_function(column)
    FROM table_name
    WHERE condition  -- Optional
    GROUP BY column1, column2, ...
    ORDER BY column1, column2, ...;  -- Optional
    ```
*   **Example:**
    ```sql
    SELECT department, COUNT(*) AS num_employees, AVG(salary) AS average_salary
    FROM employees
    GROUP BY department
    ORDER BY department;
    ```
    This query counts the number of employees and calculates the average salary for each department.

### 1.9 Subqueries

*   **Definition:** A query nested inside another query. The inner query is executed first, and its result is used by the outer query.
*   **Purpose:**  To retrieve data based on a condition that involves the result of another query.
*   **Types:**
    *   **Scalar Subquery:** Returns a single value.
    *   **Multiple-Row Subquery:** Returns multiple rows.  Often used with `IN`, `ANY`, `ALL`.
*   **Example:**
    ```sql
    SELECT employee_name, salary
    FROM employees
    WHERE salary > (SELECT AVG(salary) FROM employees);  --Find employees who earn more than the average salary
    ```

## II. Executing SQL Queries from Java (JDBC)

### 2.1 Introduction to JDBC

*   **JDBC (Java Database Connectivity):**  An API that allows Java programs to interact with databases.
*   **Key Components:**
    *   **Driver:**  A database-specific driver that enables communication between Java and the database.  You need to download the appropriate driver for your database (e.g., MySQL Connector/J, PostgreSQL JDBC Driver).
    *   **Connection:**  Represents a connection to the database.
    *   **Statement:**  Used to execute SQL queries.
        *   `Statement`:  For simple, static SQL statements.  Vulnerable to SQL injection. *Generally avoid this unless you have a static query.*
        *   `PreparedStatement`:  For parameterized SQL statements.  **Much safer** and more efficient, as it prevents SQL injection attacks.  *Prefer using this.*
    *   **ResultSet:**  Represents the result of a query.

### 2.2 Steps to Execute a SQL Query from Java

1.  **Load the JDBC Driver:**
    ```java
    try {
        Class.forName("com.mysql.cj.jdbc.Driver"); // Example: MySQL driver
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
        // Handle the exception appropriately
    }
    ```
    *Note:* The exact driver class name depends on your database. For example, for PostgreSQL, it's `org.postgresql.Driver`. With modern JDBC, explicitly loading the driver is often not required, as it can be auto-discovered if the driver JAR is in the classpath, but it's still good practice to include it.

2.  **Establish a Connection:**
    ```java
    String url = "jdbc:mysql://localhost:3306/your_database"; // Replace with your database URL
    String username = "your_username"; // Replace with your username
    String password = "your_password"; // Replace with your password
    Connection connection = null;

    try {
        connection = DriverManager.getConnection(url, username, password);
    } catch (SQLException e) {
        e.printStackTrace();
        // Handle the exception appropriately
    }
    ```

3.  **Create a Statement:**  **Use `PreparedStatement` to prevent SQL injection!**
    ```java
    String sql = "SELECT employee_name, salary FROM employees WHERE department = ?";  //Parameterized Query
    PreparedStatement preparedStatement = null;
    ResultSet resultSet = null;

    try {
        preparedStatement = connection.prepareStatement(sql);
        preparedStatement.setString(1, "Sales"); // Set the value for the first parameter (department)

        // Execute the query
        resultSet = preparedStatement.executeQuery();

        //Process the result set
        while (resultSet.next()) {
            String employeeName = resultSet.getString("employee_name");
            double salary = resultSet.getDouble("salary");
            System.out.println("Employee: " + employeeName + ", Salary: " + salary);
        }
    } catch (SQLException e) {
        e.printStackTrace();
    } finally {
       // Always close resources in a finally block to ensure they are released
        try {
            if (resultSet != null) resultSet.close();
            if (preparedStatement != null) preparedStatement.close();
            if (connection != null) connection.close();
        } catch (SQLException e) {
            e.printStackTrace(); //Handle closing exception
        }
    }

    ```

4.  **Execute the Query:**
    *   `executeQuery()`:  For `SELECT` statements.  Returns a `ResultSet`.
    *   `executeUpdate()`:  For `INSERT`, `UPDATE`, and `DELETE` statements.  Returns the number of rows affected.

5.  **Process the Result Set (for SELECT statements):**
    ```java
    while (resultSet.next()) {
        // Retrieve data from each row
        int employeeId = resultSet.getInt("employee_id");
        String employeeName = resultSet.getString("employee_name");
        double salary = resultSet.getDouble("salary");

        System.out.println("ID: " + employeeId + ", Name: " + employeeName + ", Salary: " + salary);
    }
    ```

6.  **Close Resources:**  **Critical to prevent resource leaks!**
    ```java
    finally {
        try {
            if (resultSet != null) resultSet.close();
            if (preparedStatement != null) preparedStatement.close();
            if (connection != null) connection.close();
        } catch (SQLException e) {
            e.printStackTrace(); //Handle closing exception
        }
    }
    ```
    *   Always close the `ResultSet`, `Statement` (or `PreparedStatement`), and `Connection` in the `finally` block to ensure they are released even if exceptions occur.

### 2.3 Example: Inserting Data

```java
String sql = "INSERT INTO employees (employee_id, employee_name, department, salary) VALUES (?, ?, ?, ?)";
PreparedStatement preparedStatement = null;
Connection connection = null;

try {
    connection = DriverManager.getConnection(url, username, password);
    preparedStatement = connection.prepareStatement(sql);
    preparedStatement.setInt(1, 102);
    preparedStatement.setString(2, "Bob Johnson");
    preparedStatement.setString(3, "Engineering");
    preparedStatement.setDouble(4, 75000);

    int rowsAffected = preparedStatement.executeUpdate();
    System.out.println(rowsAffected + " row(s) inserted.");

} catch (SQLException e) {
    e.printStackTrace();
} finally {
    try {
        if (preparedStatement != null) preparedStatement.close();
        if (connection != null) connection.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

## III. Project Application of SQL Fundamentals

The learning outcomes focus on using SQL in the context of projects. Here's how you can apply these fundamentals:

*   **Data Storage:**  Use SQL databases (e.g., MySQL, PostgreSQL, SQLite) to store persistent data for your applications.  Consider how different data types are appropriate for different fields.  For example, using INTEGER for ID values, VARCHAR for names, DATE for dates, and DECIMAL for money.
*   **User Authentication:**  Store user credentials (usernames, passwords – hashed!) in the database and use SQL queries to authenticate users during login.
*   **Data Management:**  Implement features to create, read, update, and delete data through your application's UI, using SQL queries executed via JDBC.
*   **Reporting:**  Generate reports based on data stored in the database using `SELECT` queries with aggregate functions and grouping.
*   **Search Functionality:** Implement search features using `SELECT` with `WHERE` and `LIKE` clauses to find specific data based on user input.
*   **Data Relationships:** If your project involves related data (e.g., customers and orders), use SQL joins to retrieve combined information from multiple tables.
*   **Data Validation:** Use the `WHERE` clause to filter or validate data being entered into the database. For example, only inserting a product if the price is greater than zero.

## IV. Practice Questions & Exercises

1.  **Question:** Write an SQL query to retrieve all columns from the `products` table where the `category` is 'Electronics' and the `price` is greater than 500.
    *   **Answer:**
        ```sql
        SELECT *
        FROM products
        WHERE category = 'Electronics' AND price > 500;
        ```

2.  **Question:** Write an SQL query to update the `price` of a product with `product_id` 123 to 650.
    *   **Answer:**
        ```sql
        UPDATE products
        SET price = 650
        WHERE product_id = 123;
        ```

3.  **Question:** Write an SQL query to delete all orders from the `orders` table where the `order_date` is before '2023-01-01'.
    *   **Answer:**
        ```sql
        DELETE FROM orders
        WHERE order_date < '2023-01-01';
        ```

4.  **Question:**  Write an SQL query to find the average salary of all employees in the 'Sales' department.
    *   **Answer:**
        ```sql
        SELECT AVG(salary)
        FROM employees
        WHERE department = 'Sales';
        ```

5.  **Question:** Using JDBC, write Java code to retrieve the names of all employees whose salary is greater than $70,000 from a table called `employees`.  Use a `PreparedStatement`. Assume you have a valid `Connection` object named `connection`.
    *   **Answer:**
        ```java
        String sql = "SELECT employee_name FROM employees WHERE salary > ?";
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

        try {
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setDouble(1, 70000.0);

            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                String employeeName = resultSet.getString("employee_name");
                System.out.println("Employee Name: " + employeeName);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (resultSet != null) resultSet.close();
                if (preparedStatement != null) preparedStatement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        ```

6. **Question:** You have two tables: `Customers` (CustomerID, CustomerName) and `Orders` (OrderID, CustomerID, OrderDate).  Write an SQL query to retrieve the CustomerName and OrderID for all orders.

   * **Answer:**

     ```sql
     SELECT Customers.CustomerName, Orders.OrderID
     FROM Customers
     INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
     ```

## V. Important Points to Remember

*   **SQL Injection:** Always use `PreparedStatement` in Java to prevent SQL injection vulnerabilities. Never directly concatenate user input into SQL queries.
*   **Resource Management:** Always close `Connection`, `Statement` (or `PreparedStatement`), and `ResultSet` objects in a `finally` block to prevent resource leaks.
*   **Error Handling:** Implement proper error handling (using `try-catch` blocks) when working with JDBC to gracefully handle potential `SQLExceptions`.  Log exceptions for debugging.
*   **Database-Specific Syntax:** Be aware that SQL syntax can vary slightly between different database systems (e.g., MySQL, PostgreSQL, SQL Server, Oracle).  Consult the documentation for your specific database.  Pay attention to things like `LIMIT` vs. `TOP`.
*   **Data Types:** Understand the data types supported by your database and use them appropriately.  In Java, you can use the appropriate getter methods on the ResultSet.
*   **Performance:**  Writing efficient SQL queries is important for performance.  Use indexes on frequently queried columns. Avoid using `SELECT *` unless absolutely necessary. Use parameterized queries with `PreparedStatement`.

This comprehensive study guide covers the fundamentals of SQL and JDBC for project use within an object-oriented programming context.  Remember to practice writing and executing SQL queries to solidify your understanding.  Good luck!
