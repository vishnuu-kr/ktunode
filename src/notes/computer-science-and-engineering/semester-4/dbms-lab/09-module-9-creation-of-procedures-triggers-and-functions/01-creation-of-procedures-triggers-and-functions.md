---
title: "Creation of Procedures, Triggers and Functions."
subject: "DBMS LAB"
module: "Module 9: Creation of Procedures, Triggers and Functions."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4f1"
status: "completed"
scrapedAt: "2026-05-20T16:12:13.728Z"
---
# DBMS LAB: Module 9 - Creation of Procedures, Triggers, and Functions

**Topic:** Creation of Procedures, Triggers, and Functions

**Description:** This module covers the creation and usage of stored procedures, triggers, and user-defined functions in a database management system. These database objects enhance code reusability, data integrity, and application performance.

**Learning Outcomes:**

*   Understand the concepts of stored procedures, triggers, and user-defined functions.
*   Create stored procedures to encapsulate database operations.
*   Implement triggers to automatically execute actions in response to database events.
*   Define user-defined functions to perform calculations or transformations on data.
*   Understand the differences and appropriate use cases for each database object.

## 1. Stored Procedures

### 1.1. Key Concepts and Definitions

*   **Definition:** A stored procedure is a precompiled collection of SQL statements stored under a name and executed as a unit. It's like a mini-program within the database.

*   **Purpose:** Encapsulate business logic, reduce network traffic, improve security, and enhance maintainability.

*   **Advantages:**
    *   **Code Reusability:** Procedures can be called from multiple applications or SQL statements.
    *   **Improved Performance:** Precompiled execution plans optimize query performance.
    *   **Enhanced Security:** Access to underlying tables can be controlled via procedure execution permissions.
    *   **Reduced Network Traffic:** Only the procedure name and parameters are transmitted across the network.
    *   **Maintainability:** Changes to the procedure logic only need to be done in one place.

*   **Disadvantages:**
    *   **Debugging Complexity:**  Debugging stored procedures can be more challenging than debugging standard SQL queries.
    *   **Vendor Lock-in:** Stored procedure syntax can vary between different database systems.

### 1.2. Creating Stored Procedures

The syntax for creating a stored procedure generally looks like this (example using MySQL syntax):

```sql
DELIMITER //
CREATE PROCEDURE procedure_name (IN/OUT/INOUT parameter_name data_type, ...)
BEGIN
  -- SQL statements
END //
DELIMITER ;
```

*   **`DELIMITER //`:**  Changes the statement delimiter from the default semicolon (`;`) to `//`. This is necessary because the procedure body contains semicolons.  At the end of the procedure definition, the delimiter is changed back using `DELIMITER ;`.
*   **`CREATE PROCEDURE procedure_name`:** Creates the procedure with the specified name.
*   **`IN/OUT/INOUT parameter_name data_type`:** Defines the parameters that the procedure accepts.
    *   **`IN`:** Input parameter (passed to the procedure).
    *   **`OUT`:** Output parameter (returns a value from the procedure).
    *   **`INOUT`:** Input/output parameter (passed to the procedure and can be modified).
*   **`BEGIN ... END`:** Encloses the SQL statements that make up the procedure body.

### 1.3. Example: Creating a Stored Procedure

Let's create a stored procedure that retrieves the names of all employees from an `employees` table who have a salary greater than a specified value:

```sql
DELIMITER //
CREATE PROCEDURE GetEmployeesBySalary (IN min_salary DECIMAL(10, 2))
BEGIN
  SELECT employee_name
  FROM employees
  WHERE salary > min_salary;
END //
DELIMITER ;
```

### 1.4. Calling Stored Procedures

To call a stored procedure, use the `CALL` statement:

```sql
CALL GetEmployeesBySalary(50000);  -- Call the procedure with a minimum salary of 50000
```

### 1.5. Stored Procedures with OUT parameters:

```sql
DELIMITER //
CREATE PROCEDURE GetEmployeeCount(OUT total_employees INT)
BEGIN
  SELECT COUNT(*) INTO total_employees FROM employees;
END //
DELIMITER ;

-- Calling the procedure and retrieving the output parameter
CALL GetEmployeeCount(@employee_count);
SELECT @employee_count;
```

### 1.6. Important Points to Remember

*   Choose meaningful names for procedures and parameters.
*   Consider using transactions within procedures to ensure data consistency.
*   Use error handling to gracefully handle exceptions.
*   Properly document procedures to make them easy to understand and maintain.

## 2. Triggers

### 2.1. Key Concepts and Definitions

*   **Definition:** A trigger is a special type of stored procedure that automatically executes in response to certain events on a specific table.

*   **Purpose:** Enforce business rules, audit data changes, maintain data integrity, and perform complex validations.

*   **Trigger Events:**
    *   `BEFORE INSERT`: Trigger executes *before* a new row is inserted into the table.
    *   `AFTER INSERT`: Trigger executes *after* a new row is inserted into the table.
    *   `BEFORE UPDATE`: Trigger executes *before* an existing row is updated in the table.
    *   `AFTER UPDATE`: Trigger executes *after* an existing row is updated in the table.
    *   `BEFORE DELETE`: Trigger executes *before* a row is deleted from the table.
    *   `AFTER DELETE`: Trigger executes *after* a row is deleted from the table.

*   **`FOR EACH ROW` vs. `FOR EACH STATEMENT` (Database-Specific):**
    *   **`FOR EACH ROW`:** The trigger is executed for each row affected by the triggering event. This is the most common type of trigger.
    *   **`FOR EACH STATEMENT`:** The trigger is executed once for the entire SQL statement, regardless of how many rows are affected.  (Note: This syntax varies depending on the DBMS).

*   **`NEW` and `OLD` Keywords:**
    *   **`NEW`:**  Refers to the new row being inserted/updated.
    *   **`OLD`:** Refers to the old row being updated/deleted.

*   **Advantages:**
    *   **Automated Enforcement:** Triggers automatically enforce business rules without requiring application code changes.
    *   **Data Integrity:**  Triggers help maintain data integrity by performing validations and constraints.
    *   **Auditing:** Triggers can track changes to data for auditing purposes.

*   **Disadvantages:**
    *   **Performance Overhead:** Triggers can add overhead to database operations if not carefully designed.
    *   **Debugging Complexity:** Debugging triggers can be difficult, especially for complex logic.
    *   **Potential for Cascading Triggers:** A trigger can trigger another trigger, which can lead to unexpected behavior if not managed properly.

### 2.2. Creating Triggers

The syntax for creating a trigger is as follows (example using MySQL syntax):

```sql
DELIMITER //
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name
FOR EACH ROW
BEGIN
  -- SQL statements
END //
DELIMITER ;
```

### 2.3. Example: Creating a Trigger

Let's create a trigger that automatically logs changes to the `employees` table in an `employee_audit` table:

```sql
DELIMITER //
CREATE TRIGGER AuditEmployeeChanges
AFTER UPDATE
ON employees
FOR EACH ROW
BEGIN
  INSERT INTO employee_audit (employee_id, old_salary, new_salary, updated_at)
  VALUES (OLD.employee_id, OLD.salary, NEW.salary, NOW());
END //
DELIMITER ;
```

In this example, the trigger `AuditEmployeeChanges` is executed after an update on the `employees` table.  It inserts a new record into the `employee_audit` table containing the employee ID, the old salary, the new salary, and the timestamp of the update.

### 2.4. Important Points to Remember

*   Use triggers sparingly and only when necessary.
*   Keep triggers as simple as possible to avoid performance issues.
*   Avoid creating recursive triggers (triggers that call themselves).
*   Thoroughly test triggers before deploying them to a production environment.
*   Clearly document the purpose and behavior of each trigger.

## 3. User-Defined Functions (UDFs)

### 3.1. Key Concepts and Definitions

*   **Definition:** A user-defined function (UDF) is a function that is created by the user and stored in the database. It can be used in SQL statements just like built-in functions.

*   **Purpose:** Extend the functionality of SQL, perform custom calculations, and encapsulate complex logic.

*   **Advantages:**
    *   **Code Reusability:** UDFs can be called from multiple SQL statements.
    *   **Improved Readability:** UDFs can simplify complex SQL queries by encapsulating logic.
    *   **Extensibility:**  UDFs allow you to extend the built-in functionality of SQL.

*   **Disadvantages:**
    *   **Performance Overhead:** UDFs can sometimes have performance overhead compared to built-in functions.
    *   **Security Considerations:** UDFs can potentially introduce security vulnerabilities if not carefully written.

### 3.2. Creating User-Defined Functions

The syntax for creating a user-defined function (example using MySQL syntax):

```sql
DELIMITER //
CREATE FUNCTION function_name (parameter_name data_type, ...)
RETURNS data_type
BEGIN
  -- SQL statements
  RETURN value;
END //
DELIMITER ;
```

*   **`RETURNS data_type`:** Specifies the data type of the value returned by the function.
*   **`RETURN value`:** Returns the calculated value.

### 3.3. Example: Creating a User-Defined Function

Let's create a user-defined function that calculates the total price (including tax) of an item:

```sql
DELIMITER //
CREATE FUNCTION CalculateTotalPrice (price DECIMAL(10, 2), tax_rate DECIMAL(5, 2))
RETURNS DECIMAL(10, 2)
BEGIN
  DECLARE total_price DECIMAL(10, 2);
  SET total_price = price * (1 + tax_rate);
  RETURN total_price;
END //
DELIMITER ;
```

### 3.4. Calling User-Defined Functions

To call a user-defined function, simply use its name in a SQL statement:

```sql
SELECT CalculateTotalPrice(100.00, 0.07);  -- Call the function with a price of 100.00 and a tax rate of 0.07

SELECT product_name, CalculateTotalPrice(price, 0.08) AS total_price
FROM products;  -- Use the function in a SELECT statement
```

### 3.5. Important Points to Remember

*   Keep UDFs as simple and efficient as possible.
*   Avoid performing complex database operations within UDFs.
*   Use appropriate data types for parameters and return values.
*   Thoroughly test UDFs before deploying them to a production environment.

## 4. Differences and Use Cases

| Feature          | Stored Procedure                                  | Trigger                                          | User-Defined Function                               |
| ---------------- | ------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Execution**    | Explicitly called by the user or application.    | Automatically executed in response to an event.   | Called within SQL statements.                      |
| **Purpose**      | Encapsulate business logic, perform operations. | Enforce rules, audit data, maintain integrity. | Perform calculations, extend SQL functionality. |
| **Return Value** | Can return multiple values (using OUT parameters). | Cannot return values directly.                   | Must return a single value.                       |
| **Transaction**  | Can contain transaction control statements.       | Can be part of a transaction.                    | Typically used within a larger transaction.          |
| **Use Cases**   | Complex database operations, batch processing.  | Data validation, auditing, cascading updates.    | Calculating values, data transformations.           |

## 5. Practice Questions / Exercises

1.  **Create a stored procedure to insert a new customer into a `customers` table.**

    ```sql
    DELIMITER //
    CREATE PROCEDURE AddCustomer(IN customer_name VARCHAR(255), IN customer_email VARCHAR(255))
    BEGIN
      INSERT INTO customers (customer_name, customer_email) VALUES (customer_name, customer_email);
    END //
    DELIMITER ;
    ```

2.  **Create a trigger to prevent updates to a `products` table after a certain date.**

    ```sql
    DELIMITER //
    CREATE TRIGGER PreventProductUpdates
    BEFORE UPDATE
    ON products
    FOR EACH ROW
    BEGIN
      IF CURDATE() > '2024-01-01' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Updates to products are not allowed after 2024-01-01';
      END IF;
    END //
    DELIMITER ;
    ```

3.  **Create a user-defined function to calculate the age of a person given their birthdate.**

    ```sql
    DELIMITER //
    CREATE FUNCTION CalculateAge(birthdate DATE)
    RETURNS INT
    BEGIN
      DECLARE age INT;
      SET age = TIMESTAMPDIFF(YEAR, birthdate, CURDATE());
      RETURN age;
    END //
    DELIMITER ;
    ```

4. **Modify the "GetEmployeesBySalary" procedure to also return the average salary of the employees returned.**

   ```sql
   DELIMITER //
   CREATE PROCEDURE GetEmployeesBySalary(IN min_salary DECIMAL(10, 2), OUT avg_salary DECIMAL(10,2))
   BEGIN
       SELECT employee_name
       FROM employees
       WHERE salary > min_salary;

       SELECT AVG(salary) INTO avg_salary
       FROM employees
       WHERE salary > min_salary;

   END //
   DELIMITER ;

   -- Example call
   CALL GetEmployeesBySalary(50000, @avg_sal);
   SELECT @avg_sal;
   ```

5. **Create a trigger to automatically update a 'last_modified' timestamp column whenever a row in a 'orders' table is updated.**

   ```sql
   DELIMITER //
   CREATE TRIGGER UpdateOrderTimestamp
   BEFORE UPDATE
   ON orders
   FOR EACH ROW
   BEGIN
       SET NEW.last_modified = NOW();
   END //
   DELIMITER ;
   ```

## 6. Key Takeaways

*   Stored procedures, triggers, and user-defined functions are powerful tools for enhancing database functionality and improving application performance.
*   Choose the appropriate database object based on the specific requirements of your application.
*   Properly design and test database objects to ensure data integrity and avoid performance issues.
*   Always document your database objects to make them easy to understand and maintain.
*   Be aware of potential security risks when using UDFs and take appropriate precautions.
