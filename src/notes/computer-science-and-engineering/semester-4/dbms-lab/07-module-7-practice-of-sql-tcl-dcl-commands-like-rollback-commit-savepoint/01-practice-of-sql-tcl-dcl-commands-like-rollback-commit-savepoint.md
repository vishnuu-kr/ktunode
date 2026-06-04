---
title: "Practice of SQL TCL DCL commands like Rollback, Commit, Savepoint"
subject: "DBMS LAB"
module: "Module 7: Practice of SQL TCL DCL commands like Rollback, Commit, Savepoint"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ec"
status: "completed"
scrapedAt: "2026-05-20T16:12:11.130Z"
---
# DBMS Lab: Module 7 - TCL & DCL Commands (Rollback, Commit, Savepoint)

## Introduction

This module focuses on practicing Transaction Control Language (TCL) and Data Control Language (DCL) commands in SQL.  Specifically, we'll cover `ROLLBACK`, `COMMIT`, and `SAVEPOINT`. These commands are crucial for managing database transactions, ensuring data integrity, and controlling user access.

## Learning Outcomes

*   Understand the purpose of TCL and DCL commands.
*   Learn how to use `COMMIT`, `ROLLBACK`, and `SAVEPOINT` commands.
*   Understand the concept of transactions and their properties (ACID).
*   Apply these commands in practical SQL scenarios.
*   Understand the basics of DCL and its role in data security.

## Key Concepts and Definitions

*   **Transaction:** A sequence of one or more SQL statements that are treated as a single unit of work.  It either completes entirely (commits) or fails entirely (rolls back), ensuring data consistency.

*   **Transaction Control Language (TCL):**  Commands used to manage transactions.  The primary TCL commands are `COMMIT`, `ROLLBACK`, and `SAVEPOINT`.

*   **Data Control Language (DCL):** Commands used to control access to data. The primary DCL commands are `GRANT` and `REVOKE`.

*   **COMMIT:**  Saves all changes made during the current transaction permanently to the database.  After a `COMMIT`, the changes are visible to other users and cannot be undone with `ROLLBACK`.

*   **ROLLBACK:**  Undoes all changes made during the current transaction, reverting the database to its state before the transaction began (or to a previous savepoint).

*   **SAVEPOINT:**  A marker within a transaction that allows you to roll back to a specific point in the transaction, rather than rolling back the entire transaction.  Useful for complex transactions where you might want to undo a portion of the work without undoing everything.

*   **ACID Properties:**  The fundamental properties that guarantee database transactions are processed reliably:

    *   **Atomicity:** The entire transaction is treated as a single, indivisible unit. Either all changes are applied, or none are.
    *   **Consistency:** The transaction must maintain the database's consistency rules.  It should move the database from one valid state to another.
    *   **Isolation:** Transactions should be isolated from each other.  The effects of one transaction should not be visible to other transactions until it is committed.
    *   **Durability:** Once a transaction is committed, the changes are permanent and will survive even system failures.

*   **GRANT:** A DCL command used to give specific permissions (e.g., SELECT, INSERT, UPDATE, DELETE) on database objects (e.g., tables, views) to users or roles.

*   **REVOKE:** A DCL command used to remove permissions previously granted to users or roles.

## TCL Commands in Detail

### 1. COMMIT

*   **Purpose:** To permanently save all changes made within the current transaction.
*   **Syntax:**

    ```sql
    COMMIT;
    ```
*   **Example:**

    ```sql
    START TRANSACTION;  -- Or BEGIN; (depending on the DBMS)

    UPDATE employees SET salary = salary * 1.10 WHERE department = 'Sales';
    INSERT INTO audit_log (timestamp, user, action) VALUES (NOW(), 'admin', 'Sales salary increase');

    COMMIT;  -- Changes are now permanent
    ```
*   **Important Points:**
    *   After a `COMMIT`, changes cannot be rolled back.
    *   Transactions are automatically committed when a DDL statement (like `CREATE TABLE`) is executed.
    *   Many database systems have an autocommit mode that commits each statement individually. You need to disable autocommit to use explicit transaction control.

### 2. ROLLBACK

*   **Purpose:** To undo all changes made during the current transaction, reverting the database to its previous state.
*   **Syntax:**

    ```sql
    ROLLBACK;
    ```
*   **Example:**

    ```sql
    START TRANSACTION;

    UPDATE inventory SET quantity = quantity - 5 WHERE item_id = 123;
    -- Oops, made a mistake!

    ROLLBACK;  -- Inventory changes are undone
    ```
*   **Important Points:**
    *   `ROLLBACK` only affects changes made *within* the current transaction.
    *   If a `COMMIT` has already been executed, a `ROLLBACK` will not undo those changes.
    *   `ROLLBACK` will also release any locks acquired during the transaction.

### 3. SAVEPOINT

*   **Purpose:** To create a marker within a transaction to which you can roll back. This allows you to undo only a portion of the transaction.
*   **Syntax:**

    ```sql
    SAVEPOINT <savepoint_name>;
    ROLLBACK TO <savepoint_name>;
    ```
*   **Example:**

    ```sql
    START TRANSACTION;

    INSERT INTO orders (order_id, customer_id, order_date) VALUES (1001, 1, NOW());
    SAVEPOINT after_order_insert;

    UPDATE inventory SET quantity = quantity - 2 WHERE item_id = 456;
    SAVEPOINT after_inventory_update;

    -- Realize there isn't enough quantity
    ROLLBACK TO after_order_insert;  -- Undoes the inventory update but keeps the order insertion

    COMMIT;  -- Commits the order insert
    ```
*   **Important Points:**
    *   You can create multiple savepoints within a transaction.
    *   Rolling back to a savepoint does *not* end the transaction.  You can continue making changes and commit later.
    *   Savepoints are only valid within the current transaction.

## DCL Commands in Detail

### 1. GRANT

*   **Purpose:**  To grant specific privileges to users or roles on database objects.
*   **Syntax:**

    ```sql
    GRANT <privilege> ON <object_name> TO <user_or_role>;
    ```
*   **Example:**

    ```sql
    GRANT SELECT ON employees TO 'john.doe'@'localhost';  -- John can select from the employees table.
    GRANT INSERT, UPDATE ON orders TO 'sales_team'@'%'; -- sales_team can insert and update orders from any host (%)
    ```

*   **Privileges:** Common privileges include `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, `DROP`, `ALTER`, `EXECUTE` (for stored procedures).

*   **Object Names:** Tables, views, stored procedures, sequences, etc.

*   **Users/Roles:** User accounts created within the database system or pre-defined roles.

### 2. REVOKE

*   **Purpose:**  To revoke privileges previously granted to users or roles.
*   **Syntax:**

    ```sql
    REVOKE <privilege> ON <object_name> FROM <user_or_role>;
    ```
*   **Example:**

    ```sql
    REVOKE UPDATE ON employees FROM 'john.doe'@'localhost'; -- John can no longer update employees
    REVOKE SELECT ON orders FROM 'sales_team'@'%';  -- Sales team can no longer select from orders
    ```

*   **Important Points about DCL:**
    *   DCL commands are often executed by database administrators.
    *   Proper use of `GRANT` and `REVOKE` is crucial for database security.
    *   Roles simplify privilege management by allowing you to grant privileges to a role and then assign users to that role.

## Examples with Multiple Commands

```sql
-- Example: Transferring money between accounts

START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 123;
SAVEPOINT before_second_update;

UPDATE accounts SET balance = balance + 100 WHERE account_id = 456;

-- Assume a server crash happens here

-- After recovery (in a new session):
START TRANSACTION; -- Must start a new transaction

-- You might check the state of the database to decide what to do
SELECT balance FROM accounts WHERE account_id = 123;
SELECT balance FROM accounts WHERE account_id = 456;

-- Based on the above queries, decide whether to commit or rollback
-- Here, we will assume the second update was lost due to the crash and we ROLLBACK to savepoint to ensure consistency.
ROLLBACK TO before_second_update;

COMMIT;

```

## Practice Questions / Exercises

1.  **Scenario:** You're updating employee information. You change an employee's salary and then their department.  Create a savepoint after the salary update.  If you later realize the department change was incorrect, how would you undo only the department change?

    **Answer:**

    ```sql
    START TRANSACTION;

    UPDATE employees SET salary = salary * 1.05 WHERE employee_id = 101;
    SAVEPOINT after_salary_update;

    UPDATE employees SET department = 'Marketing' WHERE employee_id = 101;

    -- Oops, incorrect department!
    ROLLBACK TO after_salary_update;

    -- Correct the department
    UPDATE employees SET department = 'HR' WHERE employee_id = 101;

    COMMIT;
    ```

2.  **Scenario:** You are inserting several new records into a `products` table.  If any of the inserts fail due to data validation errors, you want to undo all the inserts. Write the SQL statements to perform this, including error handling to demonstrate the rollback.

    **Answer:**

    ```sql
    START TRANSACTION;

    INSERT INTO products (product_id, product_name, price) VALUES (1, 'Product A', 25.00);
    INSERT INTO products (product_id, product_name, price) VALUES (2, 'Product B', 50.00);

    -- Simulate an error: Invalid price value for Product C
    -- Some systems might raise an error here. For demonstration, we'll force a condition:

    INSERT INTO products (product_id, product_name, price) VALUES (3, 'Product C', -10.00);  -- Invalid price

    -- If an error occurs, the following code would typically be in an exception handler

    ROLLBACK;
    --  In real application, you need error/exception handling to
    --  catch the error and execute ROLLBACK

    -- Alternatively (more robust): use try-catch blocks supported by some DBMS and programming languages.

    COMMIT; -- This commit will only execute if no error occurred. In this case, it won't.
    ```

3.  **Scenario:** A user needs to be able to read the `employees` table but not modify it. Write the DCL commands to grant this access.

    **Answer:**

    ```sql
    GRANT SELECT ON employees TO 'new_user'@'localhost';
    ```

4.  **Scenario:** A user had `UPDATE` access to the `products` table, but that access needs to be revoked.  Write the DCL command to remove this access.

    **Answer:**

    ```sql
    REVOKE UPDATE ON products FROM 'old_user'@'%';
    ```

5.  **Explain the ACID properties in the context of a bank transaction.**

    **Answer:**

    *   **Atomicity:** Either the entire money transfer completes (debit from one account AND credit to another), or neither happens. If the debit succeeds but the credit fails (e.g., due to a system crash), the debit is rolled back.
    *   **Consistency:** The total amount of money in the banking system remains the same before and after the transfer. The transaction maintains the rules of the bank (e.g., account balances cannot be negative unless overdraft is permitted).
    *   **Isolation:**  While the transfer is happening, no other transaction should see an inconsistent state. Another transaction looking at the accounts should see either the old balances or the new balances, not a partial transfer.
    *   **Durability:** Once the transaction is committed, the changes are permanent, even if the system crashes immediately afterward. The bank's records must reflect the completed transfer.

## Important Points to Remember

*   Always use `START TRANSACTION` (or its equivalent) to explicitly begin a transaction when you want to control the `COMMIT` and `ROLLBACK`.
*   Consider using savepoints in complex transactions to allow for partial rollbacks.
*   Understand the implications of autocommit mode.  Disable it when you need explicit transaction control.
*   Be aware of the ACID properties and how they ensure data integrity.
*   DCL commands (`GRANT`, `REVOKE`) are essential for managing security and access control in a database. Understand how to use them to properly protect your data.
*   In a real-world application, robust error handling is crucial to ensure transactions are either fully committed or rolled back correctly.  Use try-catch blocks to manage potential errors.
