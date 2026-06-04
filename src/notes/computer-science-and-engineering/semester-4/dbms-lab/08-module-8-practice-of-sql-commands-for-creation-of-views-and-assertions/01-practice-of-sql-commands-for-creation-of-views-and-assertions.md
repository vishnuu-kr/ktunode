---
title: "Practice of SQL commands for creation of views and assertions."
subject: "DBMS LAB"
module: "Module 8: Practice of SQL commands for creation of views and assertions."
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ef"
status: "completed"
scrapedAt: "2026-05-20T16:12:12.527Z"
---
## DBMS Lab - Module 8: Views and Assertions in SQL

These notes cover the creation and usage of views and assertions in SQL, crucial concepts for data abstraction, security, and integrity within a database.

**Learning Outcomes:**

*   Understand the concept and benefits of views in SQL.
*   Create simple and complex views using SQL.
*   Understand the concept and benefits of assertions in SQL.
*   Create assertions to enforce database constraints using SQL.
*   Apply views and assertions in practical database scenarios.

**1. Views in SQL**

**1.1 Definition:**

*   A **view** is a virtual table based on the result-set of an SQL statement.  It doesn't physically store data. It is stored as a query.
*   Views can be simple or complex, based on single or multiple tables.
*   Views are used to simplify complex queries, provide data security, and improve data consistency.

**1.2 Key Concepts and Benefits:**

*   **Data Abstraction:**  Views hide the underlying complexity of the database schema.  Users only interact with the simplified view.
*   **Data Security:** Views can restrict access to certain columns or rows in a table. You can grant SELECT permissions on a view without granting access to the underlying table.
*   **Data Independence:** Changes to the underlying table structure (e.g., adding a new column) may not affect applications using views, as long as the view definition remains valid.  This reduces the impact of schema evolution.
*   **Simplified Queries:** Complex queries involving joins and aggregations can be encapsulated within a view, making it easier for users to retrieve data.
*   **Data Consistency:**  A view definition acts as a single source of truth for a particular query, ensuring consistent results across different applications.

**1.3 Creating Views:**

*   The `CREATE VIEW` statement is used to create a view.

    ```sql
    CREATE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
    ```

    *   `view_name`:  The name of the view to be created.
    *   `SELECT`: The query that defines the view.  This can be any valid SELECT statement.
    *   `FROM`: The table(s) from which the data is retrieved.
    *   `WHERE`:  Optional.  Used to filter the data.

**1.4 Simple Views:**

*   A simple view is based on a single table and does not involve complex joins or aggregations.

    **Example:**

    Consider a `Employees` table with columns: `employee_id`, `first_name`, `last_name`, `department`, `salary`.

    ```sql
    CREATE VIEW EmployeeNames AS
    SELECT employee_id, first_name, last_name
    FROM Employees;

    -- Querying the view
    SELECT * FROM EmployeeNames;
    ```

**1.5 Complex Views:**

*   A complex view can be based on multiple tables, involve joins, aggregations, and other complex operations.

    **Example:**

    Assume we have a `Departments` table with columns: `department_id`, `department_name`, `location`.

    ```sql
    CREATE VIEW EmployeeDepartmentInfo AS
    SELECT e.employee_id, e.first_name, e.last_name, d.department_name, d.location
    FROM Employees e
    JOIN Departments d ON e.department = d.department_id;

    -- Querying the view
    SELECT * FROM EmployeeDepartmentInfo WHERE location = 'New York';
    ```

**1.6 Updatable Views:**

*   Not all views are updatable (i.e., you can't insert, update, or delete data through them).
*   A view is generally updatable if:
    *   It's based on a single table.
    *   It doesn't contain aggregate functions (e.g., `SUM`, `AVG`, `COUNT`).
    *   It doesn't contain `GROUP BY`, `HAVING`, or `DISTINCT` clauses.
    *   It doesn't contain `UNION` or `UNION ALL` clauses.
*   Modifying data through a view affects the underlying table(s).

    **Example (Updatable):**

    ```sql
    CREATE VIEW HighSalaryEmployees AS
    SELECT employee_id, first_name, last_name, salary
    FROM Employees
    WHERE salary > 50000;

    -- Update salary through the view
    UPDATE HighSalaryEmployees
    SET salary = salary * 1.1
    WHERE employee_id = 123;
    ```

**1.7 Dropping Views:**

*   The `DROP VIEW` statement is used to remove a view.

    ```sql
    DROP VIEW view_name;
    ```

**1.8 Replacing Views:**

*   You can replace an existing view using `CREATE OR REPLACE VIEW`. This will update the view definition without needing to drop and recreate it.

    ```sql
    CREATE OR REPLACE VIEW view_name AS
    -- New SELECT statement
    SELECT ...
    ```

**2. Assertions in SQL**

**2.1 Definition:**

*   An **assertion** is a constraint that expresses a condition that the database must always satisfy.  It is a global constraint, applicable to the entire database.
*   Assertions ensure data integrity by preventing invalid data from being entered into the database.
*   Assertions are checked whenever data is modified (inserted, updated, or deleted).

**2.2 Key Concepts and Benefits:**

*   **Data Integrity:** Assertions enforce business rules and ensure that the data in the database is consistent and correct.
*   **Global Constraints:**  Assertions can enforce constraints that span multiple tables, which cannot be easily implemented using table-level constraints (e.g., CHECK constraints, foreign keys).
*   **Business Rule Enforcement:**  Assertions can be used to implement complex business rules that govern the data.

**2.3 Creating Assertions:**

*   The `CREATE ASSERTION` statement is used to create an assertion.  Note that the support for `CREATE ASSERTION` is limited in many DBMS implementations (including MySQL and PostgreSQL).  Often, more complex triggers or stored procedures are used to achieve similar results.  This section will outline the theoretical syntax of `CREATE ASSERTION` as defined in the SQL standard and provide workarounds using triggers where available.

    ```sql
    CREATE ASSERTION assertion_name
    CHECK (condition);
    ```

    *   `assertion_name`: The name of the assertion.
    *   `CHECK`: The condition that must always be true.  This condition can involve complex queries and multiple tables.

**2.4 Example (Theoretical - May not be directly supported):**

Suppose we have a `Students` table with `student_id`, `major` and a `Departments` table with `department_id` (which matches major), `max_students`. We want to ensure that the number of students in each department does not exceed the maximum allowed for that department.

```sql
CREATE ASSERTION MaxStudentsPerDepartment
CHECK (NOT EXISTS (
    SELECT d.department_id
    FROM Departments d
    WHERE (SELECT COUNT(*) FROM Students s WHERE s.major = d.department_id) > d.max_students
));
```

**2.5 Workaround using Triggers (More Common):**

Since `CREATE ASSERTION` is not universally supported, triggers are often used to achieve similar results.  Triggers are procedures that automatically execute in response to certain database events (e.g., INSERT, UPDATE, DELETE).

**Example (Using Triggers - Supported in most DBMS):**

Using the same example as above, we can create a trigger that runs after each INSERT or UPDATE on the `Students` table to check if the maximum number of students per department is exceeded.

```sql
-- Trigger function (PostgreSQL syntax)
CREATE OR REPLACE FUNCTION check_max_students()
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (
        SELECT d.department_id
        FROM Departments d
        WHERE (SELECT COUNT(*) FROM Students s WHERE s.major = d.department_id) > d.max_students
    ) THEN
        RAISE EXCEPTION 'Maximum number of students in a department exceeded.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger
CREATE TRIGGER student_count_check
AFTER INSERT OR UPDATE ON Students
FOR EACH ROW
EXECUTE FUNCTION check_max_students();
```

**Explanation:**

1.  **`CREATE OR REPLACE FUNCTION check_max_students()`**:  Creates a function named `check_max_students` that will be executed by the trigger.
2.  **`RETURNS TRIGGER AS $$ ... $$ LANGUAGE plpgsql;`**:  Specifies that this is a trigger function written in the `plpgsql` language (PostgreSQL's procedural language).
3.  **`IF EXISTS (...) THEN RAISE EXCEPTION ...;`**:  Checks if the maximum number of students has been exceeded. If so, it raises an exception, which rolls back the transaction and prevents the data from being inserted/updated.
4.  **`CREATE TRIGGER student_count_check ...`**:  Creates a trigger named `student_count_check` that will be executed after each INSERT or UPDATE operation on the `Students` table.
5.  **`FOR EACH ROW`**:  Specifies that the trigger should be executed for each row that is inserted or updated.
6.  **`EXECUTE FUNCTION check_max_students();`**:  Specifies that the `check_max_students` function should be executed when the trigger is fired.

**2.6 Dropping Assertions (Rarely Needed):**

*   The `DROP ASSERTION` statement is used to remove an assertion.

    ```sql
    DROP ASSERTION assertion_name;
    ```

**3. Practice Questions/Exercises:**

**Exercise 1: Views**

Consider the following database schema:

*   `Customers` (customer_id, first_name, last_name, city, country)
*   `Orders` (order_id, customer_id, order_date, total_amount)

1.  Create a view named `CustomerOrders` that shows the customer's full name (first_name and last_name combined) and the number of orders they have placed.
2.  Create a view named `HighValueCustomers` that shows the customer's full name, city, and total amount of all their orders, but only for customers whose total order amount is greater than $1000.

**Answer:**

1.  ```sql
    CREATE VIEW CustomerOrders AS
    SELECT c.first_name || ' ' || c.last_name AS customer_name, COUNT(o.order_id) AS order_count
    FROM Customers c
    LEFT JOIN Orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.first_name, c.last_name;
    ```

2.  ```sql
    CREATE VIEW HighValueCustomers AS
    SELECT c.first_name || ' ' || c.last_name AS customer_name, c.city, SUM(o.total_amount) AS total_order_amount
    FROM Customers c
    JOIN Orders o ON c.customer_id = o.customer_id
    GROUP BY c.customer_id, c.first_name, c.last_name, c.city
    HAVING SUM(o.total_amount) > 1000;
    ```

**Exercise 2: Assertions (Conceptual - Use Triggers)**

Consider the following database schema:

*   `Products` (product_id, product_name, price, quantity_in_stock)

1.  Write a trigger (as a substitute for an assertion) to ensure that the `quantity_in_stock` cannot be negative. This trigger should fire on INSERT and UPDATE operations on the `Products` table.

**Answer (PostgreSQL Syntax):**

```sql
CREATE OR REPLACE FUNCTION check_quantity()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.quantity_in_stock < 0 THEN
        RAISE EXCEPTION 'Quantity in stock cannot be negative.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER quantity_check
BEFORE INSERT OR UPDATE ON Products
FOR EACH ROW
EXECUTE FUNCTION check_quantity();
```

**4. Important Points to Remember:**

*   **View Performance:**  Complex views can impact performance, so use them judiciously.  Database systems may optimize view queries, but it's important to consider the cost of the underlying operations.
*   **Assertion Support:**  Be aware that `CREATE ASSERTION` is not universally supported.  Use triggers or stored procedures as alternatives.
*   **Trigger Overhead:** Triggers can add overhead to database operations.  Optimize trigger logic to minimize performance impact.  Ensure they are truly needed to maintain data integrity.
*   **Updatable View Restrictions:**  Understand the limitations of updatable views before relying on them for data modification.  Using views for complex updates can sometimes be problematic.
*   **Data Integrity:**  Views and Assertions (or their trigger equivalents) are crucial for maintaining data integrity and enforcing business rules.  Carefully design them to ensure the accuracy and consistency of the data.
