---
title: "Assertions, Triggers, views,  Relational Database Design Using ER-to-Relational Mapping."
subject: "DATABASE MANAGEMENT SYSTEMS"
module: "Module 2: The Relational Data Model and SQL  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af74"
status: "completed"
scrapedAt: "2026-05-20T16:12:01.223Z"
---
# DATABASE MANAGEMENT SYSTEMS: Module 2 - Relational Data Model and SQL

## Topic: Assertions, Triggers, Views, and Relational Database Design Using ER-to-Relational Mapping

**Learning Outcomes:**

*   Understand and implement assertions to enforce database constraints.
*   Define and use triggers to automate database actions.
*   Create and manipulate views for data abstraction and security.
*   Translate ER diagrams into relational database schemas.

### 1. Assertions

*   **Definition:** An assertion is a constraint that the database system should always satisfy.  It ensures that the data within the database remains consistent with specified business rules.
*   **Purpose:** To enforce complex constraints that cannot be expressed directly using `CHECK` constraints on attributes or table constraints.

*   **Syntax (SQL):**

    ```sql
    CREATE ASSERTION <assertion_name>
    CHECK ( <predicate> )
    ```

    *   `<assertion_name>`: A unique name for the assertion.
    *   `<predicate>`: A boolean expression that must always evaluate to true. If the predicate evaluates to false, the assertion is violated, and the transaction causing the violation is rolled back.

*   **Important Considerations:**
    *   Assertions are often costly to maintain, as the database system needs to verify the assertion whenever data is modified that could potentially violate the assertion.
    *   Not all database systems support assertions fully due to the implementation complexity and performance overhead.
    *   Assertions should be used sparingly and only when simpler constraint mechanisms are insufficient.

*   **Example:**

    Suppose we have two tables: `EMPLOYEE(empID, salary)` and `DEPARTMENT(deptID, budget)`.  We want to ensure that the sum of all employee salaries in each department is less than the department's budget.

    ```sql
    CREATE ASSERTION budget_check
    CHECK ( NOT EXISTS (
      SELECT D.deptID
      FROM DEPARTMENT D
      WHERE D.budget < (
        SELECT SUM(E.salary)
        FROM EMPLOYEE E
        WHERE E.deptID = D.deptID
      )
    ));
    ```

    This assertion checks that no department exists where its budget is less than the sum of employee salaries in that department. The `NOT EXISTS` clause ensures that the condition within the parentheses must be false.

*   **Limitations:** Due to the complexity of checking assertions with every update, some DBMS implementations might not support them or might restrict their scope.

### 2. Triggers

*   **Definition:** A trigger is a procedural SQL statement that is automatically executed by the database system as a side effect of a data modification event (e.g., `INSERT`, `UPDATE`, `DELETE`).
*   **Purpose:**
    *   Enforcing complex business rules.
    *   Auditing database changes.
    *   Maintaining referential integrity (though foreign keys are preferred).
    *   Performing actions related to data changes (e.g., sending notifications).

*   **Trigger Components:**
    *   **Event:** The data modification event that activates the trigger (e.g., `INSERT`, `UPDATE`, `DELETE`).
    *   **Timing:**  When the trigger is executed:
        *   `BEFORE`:  Executed *before* the triggering event.
        *   `AFTER`: Executed *after* the triggering event.
    *   **Granularity:**
        *   `FOR EACH ROW`: The trigger is executed once for each row affected by the triggering event.
        *   `FOR EACH STATEMENT`:  The trigger is executed once for the entire triggering statement, regardless of how many rows are affected.
    *   **Condition (WHEN clause):**  An optional boolean expression that must evaluate to true for the trigger action to be executed.
    *   **Action:** The SQL statement(s) to be executed when the trigger is activated.

*   **Syntax (SQL):**

    ```sql
    CREATE TRIGGER <trigger_name>
    {BEFORE | AFTER} {event}
    ON <table_name>
    [FOR EACH ROW]
    [WHEN (condition)]
    BEGIN
        <SQL statements>;
    END;
    ```

    *   `<trigger_name>`: A unique name for the trigger.
    *   `{event}`: Can be `INSERT`, `UPDATE`, `DELETE`, or a combination (e.g., `UPDATE OF salary`).
    *   `<table_name>`: The table on which the trigger is defined.
    *   `[FOR EACH ROW]`: Optional clause. If omitted, it defaults to `FOR EACH STATEMENT`.
    *   `[WHEN (condition)]`: Optional condition.
    *   `BEGIN ... END`: Encloses the SQL statements to be executed.

*   **Accessing Data within a Trigger:**
    *   `OLD`: Refers to the old row (values *before* modification) in `UPDATE` and `DELETE` triggers.
    *   `NEW`: Refers to the new row (values *after* modification) in `INSERT` and `UPDATE` triggers.

*   **Example:**

    Suppose we have a table `SALES(saleID, productID, quantity, saleDate)`.  We want to create a trigger that updates an `INVENTORY(productID, quantity_in_stock)` table whenever a sale is recorded.

    ```sql
    CREATE TRIGGER update_inventory
    AFTER INSERT
    ON SALES
    FOR EACH ROW
    BEGIN
      UPDATE INVENTORY
      SET quantity_in_stock = quantity_in_stock - NEW.quantity
      WHERE productID = NEW.productID;
    END;
    ```

    This trigger is executed *after* each row is inserted into the `SALES` table. It reduces the `quantity_in_stock` in the `INVENTORY` table by the `quantity` sold.

*   **Important Points to Remember:**
    *   Triggers can be complex and difficult to debug.
    *   Excessive use of triggers can impact performance.
    *   Triggers can be used to enforce complex business rules that cannot be easily implemented using constraints.
    *   Be aware of the cascading effects of triggers (a trigger can activate another trigger). This can lead to infinite loops if not carefully designed.

### 3. Views

*   **Definition:** A view is a virtual table that is derived from one or more base tables (or other views).  It does not physically store data; instead, it stores a query that defines how the view is constructed.
*   **Purpose:**
    *   **Data Abstraction:** Simplifies the database schema for users by presenting a simplified view of the data.
    *   **Security:** Restricts access to certain data by only granting users access to specific views, hiding sensitive information.
    *   **Data Independence:** Changes to the base tables do not necessarily require changes to applications that use the views, as long as the view definition remains valid.
    *   **Customization:**  Provides different perspectives of the same data for different users or applications.

*   **Syntax (SQL):**

    ```sql
    CREATE VIEW <view_name> AS
    SELECT <column_list>
    FROM <table_list>
    [WHERE <condition>]
    [WITH CHECK OPTION];
    ```

    *   `<view_name>`:  A unique name for the view.
    *   `SELECT <column_list> FROM <table_list> [WHERE <condition>]`:  The query that defines the view.
    *   `WITH CHECK OPTION`:  Optional clause.  If specified, any updates or inserts through the view must satisfy the `WHERE` clause of the view definition.  This helps maintain data integrity.

*   **Example:**

    Suppose we have a table `EMPLOYEE(empID, name, salary, deptID)`.  We want to create a view that shows only the employee's name and salary.

    ```sql
    CREATE VIEW employee_salary AS
    SELECT name, salary
    FROM EMPLOYEE;
    ```

    Users can then query the `employee_salary` view:

    ```sql
    SELECT * FROM employee_salary;
    ```

*   **Updatable Views:**

    A view is updatable if changes made through the view are automatically reflected in the underlying base tables.  Views are updatable if they meet certain conditions:

    *   The view is derived from a single base table.
    *   The view does not contain aggregate functions (e.g., `SUM`, `AVG`, `COUNT`).
    *   The view does not contain `GROUP BY` or `DISTINCT` clauses.
    *   The view does not contain computed columns.
    *   The `WITH CHECK OPTION` clause can be used to ensure that updates through the view satisfy the view's `WHERE` clause.

*   **Example (Updatable View):**

    ```sql
    CREATE VIEW high_paid_employees AS
    SELECT empID, name, salary
    FROM EMPLOYEE
    WHERE salary > 50000
    WITH CHECK OPTION;
    ```

    Inserting a new employee with `salary > 50000` through the `high_paid_employees` view is allowed.  However, updating an existing employee's salary through the view to a value less than or equal to 50000 will be rejected because it violates the `WITH CHECK OPTION` constraint.

*   **Important Points to Remember:**
    *   Views provide data abstraction and security.
    *   Views do not physically store data.
    *   Updatable views allow modifications to the base tables through the view.
    *   The `WITH CHECK OPTION` clause ensures data integrity when updating views.
    *   Carefully consider the updatability of views when designing your database schema.

### 4. Relational Database Design Using ER-to-Relational Mapping

*   **Goal:**  To translate an Entity-Relationship (ER) diagram into a relational database schema (a set of tables and their attributes).

*   **ER Concepts:**
    *   **Entity:** A real-world object or concept.
    *   **Attribute:** A property or characteristic of an entity.
    *   **Relationship:** An association between two or more entities.
    *   **Key Attribute:** An attribute (or set of attributes) that uniquely identifies an entity.
    *   **Composite Attribute:** An attribute composed of multiple sub-attributes.
    *   **Multi-valued Attribute:** An attribute that can have multiple values for a single entity.
    *   **Derived Attribute:** An attribute whose value can be derived from other attributes.
    *   **Weak Entity:** An entity that cannot be uniquely identified without referencing another entity (the identifying entity).
    *   **Cardinality Ratio:** Specifies the number of entity instances that can participate in a relationship (one-to-one, one-to-many, many-to-many).
    *   **Participation Constraint:** Specifies whether an entity's existence depends on its participation in a relationship (total or partial).

*   **ER-to-Relational Mapping Rules:**

    1.  **Mapping of Regular Entity Types:**
        *   Create a table for each regular entity type.
        *   Include all simple attributes of the entity as attributes of the table.
        *   Choose a primary key for the table based on the key attribute of the entity type.
        *   Map composite attributes by including their component attributes as attributes of the table.
        *   Map multi-valued attributes by creating a separate table. This table will include the primary key of the original entity and an attribute for the multi-valued attribute.  The primary key of this new table will be the combination of the original entity's primary key and the multi-valued attribute.

    2.  **Mapping of Weak Entity Types:**
        *   Create a table for the weak entity type.
        *   Include all simple attributes of the weak entity as attributes of the table.
        *   Include the primary key attribute(s) of the identifying entity type as foreign key attribute(s) in the table. This foreign key establishes the identifying relationship.
        *   The primary key of the weak entity table is the combination of the weak entity's partial key (if it exists) and the primary key of the identifying entity.

    3.  **Mapping of Binary 1:1 Relationship Types:**
        *   Option 1: Choose one of the tables representing the entity types. Include the primary key of the other entity type as a foreign key in the chosen table.
        *   Option 2: Merge the two entities into a single table if participation is total on both sides.
        *   Option 3:  If both participation are partial, create a separate table for the relationship (similar to many-to-many relationships).

    4.  **Mapping of Binary 1:N Relationship Types:**
        *   Create a table for each entity type.
        *   Include the primary key of the entity on the "one" side of the relationship as a foreign key in the table representing the entity on the "many" side.

    5.  **Mapping of Binary M:N Relationship Types:**
        *   Create a new table to represent the relationship itself.
        *   Include the primary keys of both participating entity types as foreign key attributes in the new table.
        *   The primary key of the new table is the combination of the foreign key attributes.
        *   Any attributes of the relationship itself (if it has any) are also included as attributes in the new table.

    6.  **Mapping of Multi-way (n-ary) Relationship Types:**
        *   Create a new table to represent the relationship.
        *   Include the primary key of each participating entity type as a foreign key attribute in the new table.
        *   The primary key of the new table is usually the combination of all the foreign key attributes.
        *   Any attributes of the relationship itself are also included as attributes in the new table.

    7.  **Mapping of Specialization (ISA) Hierarchies:**
        *   Option 1 (Entity-Per-Subclass): Create a table for the superclass and a table for each subclass.  The subclass tables inherit the primary key from the superclass table (foreign key and primary key in the subclass).  This is useful when the subclasses have significantly different attributes or relationships.
        *   Option 2 (Entity-Per-Hierarchy): Create a single table for the entire hierarchy.  Include all attributes of the superclass and all subclasses in the table.  Add a type attribute to distinguish between different subclasses. This is useful when all subclasses have mostly the same attributes.
        *   Option 3 (Entity-Per-Superclass): Create only one table for the superclass.  Include only the attributes of the superclass in the table.  Subclass specific attributes are not included.

*   **Example:**

    Consider an ER diagram with two entity types: `DEPARTMENT` (deptID, name, location) and `EMPLOYEE` (empID, name, salary, deptID), with a one-to-many relationship "works in" between `DEPARTMENT` and `EMPLOYEE`.  `deptID` is the primary key of `DEPARTMENT` and `empID` is the primary key of `EMPLOYEE`.

    Applying the ER-to-relational mapping rules, we get the following relational schema:

    ```sql
    CREATE TABLE DEPARTMENT (
        deptID VARCHAR(10) PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        location VARCHAR(50)
    );

    CREATE TABLE EMPLOYEE (
        empID VARCHAR(10) PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        salary DECIMAL(10, 2),
        deptID VARCHAR(10),
        FOREIGN KEY (deptID) REFERENCES DEPARTMENT(deptID)
    );
    ```

*   **Important Points to Remember:**
    *   Understand the ER model concepts thoroughly.
    *   Carefully apply the mapping rules.
    *   Choose appropriate data types for attributes.
    *   Consider performance implications when choosing a mapping option (e.g., for specialization hierarchies).
    *   The resulting relational schema should accurately represent the information captured in the ER diagram and should support the required database operations efficiently.

### Practice Questions/Exercises

1.  **Assertion:**  Consider a `STUDENT(studentID, GPA, major)` table and a `DEPARTMENT(deptID, avgGPA)` table. Write an assertion to ensure that no student's GPA is lower than the average GPA of their department.

    **Answer:**

    ```sql
    CREATE ASSERTION gpa_check
    CHECK ( NOT EXISTS (
      SELECT S.studentID
      FROM STUDENT S, DEPARTMENT D
      WHERE S.major = D.deptID AND S.GPA < D.avgGPA
    ));
    ```

2.  **Trigger:** You have a table `PRODUCT(productID, quantity)`. You want to create a trigger that prevents `quantity` from becoming negative. When a `DELETE` or `UPDATE` reduces the `quantity` to negative value, instead of deleting/updating, set the quantity to 0 and log to an audit table `PRODUCT_AUDIT(productID, old_quantity, new_quantity, timestamp)`.

    **Answer:**

    ```sql
    CREATE TRIGGER prevent_negative_quantity
    BEFORE DELETE OR UPDATE ON PRODUCT
    FOR EACH ROW
    WHEN (NEW.quantity < 0)
    BEGIN
        INSERT INTO PRODUCT_AUDIT (productID, old_quantity, new_quantity, timestamp)
        VALUES (OLD.productID, OLD.quantity, 0, DATETIME('now'));

        UPDATE PRODUCT SET quantity = 0 WHERE productID = OLD.productID; -- Correct the update operation

        -- prevent deletion
        SELECT RAISE(ABORT, 'Preventing Negative quantity, logging to Audit table.');
    END;
    ```

3.  **View:** Create a view called `product_above_100` from the table `PRODUCT(productID, quantity, price)` that displays `productID` and `price` for products with a `quantity` greater than 100.

    **Answer:**

    ```sql
    CREATE VIEW product_above_100 AS
    SELECT productID, price
    FROM PRODUCT
    WHERE quantity > 100;
    ```

4.  **ER-to-Relational Mapping:**  Convert the following ER diagram into a relational schema.  The ER Diagram consists of:

    *   Entity: `CUSTOMER(customerID, name, address)` where `customerID` is the key.
    *   Entity: `ORDER(orderID, orderDate)` where `orderID` is the key.
    *   Relationship: `PLACES` (one-to-many) from `CUSTOMER` to `ORDER`.

    **Answer:**

    ```sql
    CREATE TABLE CUSTOMER (
        customerID VARCHAR(10) PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        address VARCHAR(100)
    );

    CREATE TABLE ORDER_TABLE ( -- renamed to avoid keyword ORDER
        orderID VARCHAR(10) PRIMARY KEY,
        orderDate DATE,
        customerID VARCHAR(10),
        FOREIGN KEY (customerID) REFERENCES CUSTOMER(customerID)
    );
    ```

### Important Points to Remember (Summary)

*   **Assertions:** Enforce complex constraints, but can be costly. Use sparingly.
*   **Triggers:** Automate actions based on database events.  Powerful but can be complex. Be careful with cascading triggers.
*   **Views:** Provide data abstraction, security, and customization. Understand updatability constraints.
*   **ER-to-Relational Mapping:**  Translate ER diagrams into relational schemas.  Follow the mapping rules carefully for correct and efficient database design. Consider various mapping options (especially for specializations) and choose the best one for your specific needs.
