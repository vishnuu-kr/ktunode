---
title: "Practice of SQL DCL commands for granting and revoking user privileges."
subject: "DBMS LAB"
module: "Module 7: Practice of SQL TCL DCL commands like Rollback, Commit, Savepoint"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b4ed"
status: "completed"
scrapedAt: "2026-05-20T16:12:11.829Z"
---
## DBMS LAB: Module 7 - DCL Commands (Granting and Revoking Privileges)

**Topic:** Practice of SQL DCL commands for granting and revoking user privileges.

**Learning Outcomes:**

*   Understand the purpose and functionality of Data Control Language (DCL) commands.
*   Learn how to grant privileges to users in a database.
*   Learn how to revoke privileges from users in a database.
*   Understand the different types of privileges that can be granted and revoked.
*   Apply DCL commands effectively in practical scenarios.

---

**1. Introduction to Data Control Language (DCL)**

*   **Definition:** DCL (Data Control Language) is a subset of SQL commands used to control access to data within a database.  It focuses on security and authorization.
*   **Key Commands:**
    *   **GRANT:** Allows users to perform specific actions on database objects (tables, views, etc.).
    *   **REVOKE:** Removes privileges previously granted to users.
*   **Purpose:** DCL ensures data integrity and security by controlling who can access and modify database resources.

**2. Understanding Privileges**

*   **Definition:** Privileges are permissions that grant users the right to perform specific actions on database objects.
*   **Types of Privileges:**
    *   **SELECT:**  Allows users to retrieve data from a table or view.
    *   **INSERT:** Allows users to add new rows to a table.
    *   **UPDATE:** Allows users to modify existing data in a table.
    *   **DELETE:** Allows users to remove rows from a table.
    *   **EXECUTE:** Allows users to run stored procedures or functions.
    *   **CREATE:** Allows users to create database objects (tables, views, indexes, etc.).
    *   **ALTER:** Allows users to modify the structure of database objects.
    *   **DROP:** Allows users to delete database objects.
    *   **ALL PRIVILEGES:** Grants all available privileges on a specific object. This should be used with caution.
    *   **USAGE:** Grants the right to use a particular database object like a sequence.
*   **Object-Level vs. System-Level Privileges:**
    *   **Object-Level Privileges:** Permissions that apply to specific database objects (e.g., SELECT on the `employees` table).
    *   **System-Level Privileges:** Permissions that affect the entire database system (e.g., CREATE TABLE). These are generally granted to administrators.

**3. GRANT Command**

*   **Syntax:**

    ```sql
    GRANT privilege_list
    ON object_name
    TO user_list [WITH GRANT OPTION];
    ```

    *   `privilege_list`: A comma-separated list of privileges (e.g., SELECT, INSERT, UPDATE).  `ALL PRIVILEGES` can be used to grant all privileges.
    *   `object_name`: The name of the database object (e.g., a table, view, sequence) on which the privilege is being granted.
    *   `user_list`: A comma-separated list of users or roles to whom the privilege is being granted. Can also grant privileges to `PUBLIC` (all users).
    *   `WITH GRANT OPTION`:  Allows the user receiving the privilege to grant the same privilege to other users.  Use carefully as it can create a chain of privilege propagation.

*   **Examples:**

    *   **Grant SELECT privilege on the `employees` table to user `john`:**

        ```sql
        GRANT SELECT
        ON employees
        TO john;
        ```

    *   **Grant SELECT, INSERT, and UPDATE privileges on the `products` table to user `jane`:**

        ```sql
        GRANT SELECT, INSERT, UPDATE
        ON products
        TO jane;
        ```

    *   **Grant ALL PRIVILEGES on the `orders` table to user `admin`:**

        ```sql
        GRANT ALL PRIVILEGES
        ON orders
        TO admin;
        ```

    *   **Grant SELECT privilege on the `customer` table to user `analyst` and allow `analyst` to grant this privilege to others:**

        ```sql
        GRANT SELECT
        ON customer
        TO analyst WITH GRANT OPTION;
        ```

    *   **Grant SELECT privilege to all users (public):**

        ```sql
        GRANT SELECT ON products TO PUBLIC;
        ```

**4. REVOKE Command**

*   **Syntax:**

    ```sql
    REVOKE privilege_list
    ON object_name
    FROM user_list [CASCADE | RESTRICT];
    ```

    *   `privilege_list`: A comma-separated list of privileges to revoke.
    *   `object_name`: The name of the database object from which the privilege is being revoked.
    *   `user_list`: A comma-separated list of users or roles from whom the privilege is being revoked.
    *   `CASCADE`:  If the user had granted the privilege to other users *with grant option*, `CASCADE` revokes the privilege from those users as well, propagating the revocation down the chain.
    *   `RESTRICT`: (Default) If the user has granted the privilege to other users, the `REVOKE` statement will fail unless those grants are first revoked manually.

*   **Examples:**

    *   **Revoke SELECT privilege on the `employees` table from user `john`:**

        ```sql
        REVOKE SELECT
        ON employees
        FROM john;
        ```

    *   **Revoke SELECT and UPDATE privileges on the `products` table from user `jane`:**

        ```sql
        REVOKE SELECT, UPDATE
        ON products
        FROM jane;
        ```

    *   **Revoke ALL PRIVILEGES on the `orders` table from user `admin`:**

        ```sql
        REVOKE ALL PRIVILEGES
        ON orders
        FROM admin;
        ```

    *   **Revoke SELECT privilege on the `customer` table from user `analyst` and cascade the revocation to any users to whom `analyst` granted this privilege:**

        ```sql
        REVOKE SELECT
        ON customer
        FROM analyst CASCADE;
        ```

**5. Practical Considerations and Best Practices**

*   **Principle of Least Privilege:** Grant users only the privileges they need to perform their specific tasks. Avoid granting `ALL PRIVILEGES` unless absolutely necessary.
*   **Role-Based Access Control (RBAC):** Create roles and assign privileges to roles, then assign users to roles. This simplifies privilege management.  (Note:  The `CREATE ROLE`, `GRANT role TO user`, and `REVOKE role FROM user` commands are commonly used for this, but are database-specific extensions to standard SQL.)
*   **Regular Auditing:** Periodically review user privileges to ensure they are still appropriate and necessary.
*   **Security Policies:** Establish clear security policies regarding user access and data protection.
*   **Documentation:** Maintain accurate documentation of user privileges and roles.
*   **Testing:** Thoroughly test privilege changes in a development or staging environment before applying them to a production database.

**6. Examples with Specific Database Systems (Illustrative)**

While the general SQL commands are consistent, specific database systems like MySQL, PostgreSQL, Oracle, and SQL Server may have their own extensions and nuances regarding privilege management.

*   **Example (MySQL):**

    ```sql
    -- Create a user
    CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

    -- Grant SELECT privilege on the `products` table to `newuser` from localhost
    GRANT SELECT ON dbname.products TO 'newuser'@'localhost';

    -- Revoke UPDATE privilege on the `products` table from `newuser`
    REVOKE UPDATE ON dbname.products FROM 'newuser'@'localhost';

    -- Show privileges for a user
    SHOW GRANTS FOR 'newuser'@'localhost';

    -- Flush privileges table (important after GRANT/REVOKE in MySQL)
    FLUSH PRIVILEGES;
    ```

*   **Example (PostgreSQL):**

    ```sql
    -- Create a user
    CREATE USER newuser WITH PASSWORD 'password';

    -- Grant SELECT privilege on the `products` table to `newuser`
    GRANT SELECT ON products TO newuser;

    -- Grant ALL PRIVILEGES on a database to a user
    GRANT ALL PRIVILEGES ON DATABASE mydb TO myuser;

    -- Revoke INSERT privilege on the `products` table from `newuser`
    REVOKE INSERT ON products FROM newuser;
    ```

**7. Important Points to Remember**

*   DCL commands are essential for database security and data integrity.
*   `GRANT` is used to grant privileges, and `REVOKE` is used to revoke them.
*   The `WITH GRANT OPTION` clause allows users to grant privileges to other users.
*   The `CASCADE` and `RESTRICT` clauses in `REVOKE` control how revocations are propagated.
*   Use the principle of least privilege and role-based access control to manage user access effectively.
*   Specific database systems may have their own extensions and nuances regarding privilege management. Consult the documentation for your specific database system.
*   Always test privilege changes in a non-production environment first.
*   Regularly audit user privileges and update them as needed.

**8. Practice Questions/Exercises**

1.  **Scenario:** You have a database called `company` and a table called `employees`. You want to create a user named `datareader` who can only read data from the `employees` table. Write the SQL commands to achieve this.

    **Answer:**

    ```sql
    -- Assuming the user doesn't already exist:
    CREATE USER datareader IDENTIFIED BY 'password'; -- (Or database-specific syntax)

    GRANT SELECT
    ON company.employees
    TO datareader;
    ```

2.  **Scenario:** User `datareader` was granted SELECT privilege on `employees` table WITH GRANT OPTION and granted SELECT to `temp_user`. You now want to revoke the SELECT privilege from `datareader`. What are the considerations for this REVOKE statement, and how would you handle them?

    **Answer:**

    Because `datareader` granted SELECT to `temp_user`, you need to consider the consequences of revoking SELECT from `datareader`.

    *   **RESTRICT (Default):**  The `REVOKE` statement will fail unless you *first* revoke the privilege from `temp_user`.
    *   **CASCADE:** The `REVOKE` statement will automatically revoke the privilege from `temp_user`.

    Therefore, to revoke from `datareader` *and* also remove select access from users who got access through datareader's GRANT OPTION, use:

    ```sql
    REVOKE SELECT
    ON company.employees
    FROM datareader CASCADE;
    ```

3.  **Scenario:**  You granted ALL PRIVILEGES on the `departments` table to user `dba`. You now want to remove all privileges from `dba`. Write the SQL command to achieve this.

    **Answer:**

    ```sql
    REVOKE ALL PRIVILEGES
    ON departments
    FROM dba;
    ```

4.  **Scenario:**  You want to grant the permission to run a stored procedure called `calculate_salary` to the user `payroll`. Write the SQL command.

    **Answer:**

    ```sql
    GRANT EXECUTE
    ON PROCEDURE calculate_salary
    TO payroll;
    ```

5. **Exercise:** Imagine you're a database administrator for a small online store. You have tables like `customers`, `products`, `orders`, and `order_items`.  You need to create two user accounts:

    * `sales_rep`:  Should be able to view customer information, create new orders, and see product details.
    * `inventory_manager`: Should be able to view and update product quantities and details.

    Write the SQL `GRANT` commands you would use (including the user creation commands, assuming a database like MySQL or PostgreSQL). Consider the principle of least privilege.

    **Possible Solution:**

    ```sql
    -- Assuming MySQL
    CREATE USER 'sales_rep'@'localhost' IDENTIFIED BY 'sales_password';
    CREATE USER 'inventory_manager'@'localhost' IDENTIFIED BY 'inventory_password';

    -- Sales Rep Privileges
    GRANT SELECT ON customers TO 'sales_rep'@'localhost';
    GRANT INSERT ON orders TO 'sales_rep'@'localhost';
    GRANT SELECT ON products TO 'sales_rep'@'localhost';
    GRANT SELECT ON order_items TO 'sales_rep'@'localhost'; -- Needed to create the order_items related to the new order

    -- Inventory Manager Privileges
    GRANT SELECT, UPDATE ON products TO 'inventory_manager'@'localhost';
    ```

These notes provide a comprehensive overview of DCL commands for granting and revoking user privileges in SQL. Remember to adapt the commands and examples to your specific database system and security requirements.  Always prioritize security best practices.
